# HR Chat box — DeepSeek RAG

An HR knowledge-base chatbot for approved Staff Manual, medical-benefit, and Employment Ordinance content. It uses local retrieval (RAG) to select approved HR excerpts, then asks DeepSeek to answer only from those excerpts.

## How it works

1. An employee enters a question in the browser.
2. The server searches the approved HR knowledge entries in `lib/`.
3. The selected excerpts and question are sent to DeepSeek from the server only.
4. The browser receives a concise answer and the source labels used.

The DeepSeek API key never reaches the browser. If no approved content matches, the app directs the employee to contact HR instead of inventing a policy answer.

## Run locally

1. Copy `.env.example` to `.env.local`.
2. In `.env.local`, replace `your_deepseek_api_key_here` with a DeepSeek API key created at [platform.deepseek.com](https://platform.deepseek.com).
3. Install and start:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Share with teammates on Vercel

1. Push this repository to GitHub (already done for this project).
2. Sign in to [Vercel](https://vercel.com) and choose **Add New → Project**.
3. Import `sayhitoagnes/hrai`.
4. Set **Root Directory** to `hr-chat-box-app`.
5. Under **Environment Variables**, add:
   - `DEEPSEEK_API_KEY` — your real DeepSeek API key
   - `DEEPSEEK_MODEL` — optional; use `deepseek-v4-flash`
6. Click **Deploy**.
7. Share the Vercel production URL with your teammates.

Do not put the API key in GitHub, chat messages, or client-side code. If you rotate the key, update it in Vercel and redeploy.

## Update the HR knowledge base

- Staff Manual content: `lib/staffManual.js`
- Medical plans: `lib/medicalPlans.js`
- Employment Ordinance / other content: `lib/knowledge.js`

After HR approves a content change, commit it and redeploy. The RAG route automatically retrieves from the updated entries.
