import { knowledge } from "./knowledge.js";

const QUERY_ALIASES = [
  [/年假|假期|請假|请假/i, "annual leave leave entitlement"],
  [/病假/i, "sick leave"],
  [/八號風球|八号风球|惡劣天氣|恶劣天气|暴雨/i, "typhoon signal 8 rainstorm bad weather arrangement"],
  [/醫療|医疗|保險|保险|普通科|門診|门诊/i, "medical benefit insurance GP outpatient"],
  [/員工福利|员工福利|福利/i, "staff benefits medical rental MPF"],
  [/遣散|長期服務金|长期服务金/i, "severance long service payment"],
];

function normalise(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function expandQuery(question) {
  let expanded = normalise(question);
  for (const [pattern, words] of QUERY_ALIASES) {
    if (pattern.test(question)) expanded += ` ${words}`;
  }
  return expanded;
}

function scoreChunk(question, item) {
  const query = expandQuery(question);
  const searchableText = normalise(
    [item.topic, ...(item.triggers || []), item.answer].join(" ")
  );
  let score = 0;

  for (const phrase of item.triggers || []) {
    if (query.includes(normalise(phrase))) score += phrase.length * 3;
  }

  for (const word of query.match(/[a-z0-9$+.-]{2,}/g) || []) {
    if (searchableText.includes(word)) score += 1;
  }

  return score;
}

/**
 * Local retrieval over approved HR content. The LLM only receives these
 * snippets, so it cannot answer from unverified external information.
 */
export function retrieveHrContext(question, limit = 5) {
  return knowledge
    .map((item) => ({ item, score: scoreChunk(question, item) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => ({
      id: item.id,
      topic: item.topic,
      source: item.source || "HR Knowledge Base",
      sourceUrl: item.sourceUrl,
      content: item.answer,
    }));
}

export function formatRagContext(chunks) {
  return chunks
    .map(
      (chunk, index) =>
        `[${index + 1}] Topic: ${chunk.topic}\nSource: ${chunk.source}\nContent: ${chunk.content}`
    )
    .join("\n\n");
}
