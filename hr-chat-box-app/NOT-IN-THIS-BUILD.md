# Not In This Build

These were deliberate scope decisions for the workshop slice, not forgotten gaps.

## Confirmed build slice
Employee opens chatbot → asks a policy question → gets the correct answer from sample knowledge → sees a source label. Unknown questions show “I don’t know” plus a disabled Contact HR button.

## Cap. 57 note
The chat includes short Employment Ordinance (Cap. 57) summaries and links to  
https://www.elegislation.gov.hk/hk/cap57  
It does **not** scrape or search the live ordinance page (that site requires a browser check-in). Answers are summaries only, not legal advice.

## Staff Manual note
The chat answers common Staff Manual questions concisely (probation, leave, hours, weather, etc.).
Company/organisation names are omitted from chat replies. Full PDF: `public/benefits/hr-staff-manual.pdf`.

## Medical benefits note
Plan 1 (manager grade and above) and Plan 2 (below manager) Blue Cross schedules are loaded into the chat from:
- `public/benefits/medical-plan-1-manager.pdf`
- `public/benefits/medical-plan-2-staff.pdf`

(Also mirrored under `/benefits` for the standalone HTML file.)

## Deliberately not included
- Login and permissions
- Saving to a database / Supabase
- HR admin upload, edit, and knowledge-base management screens
- Real AI credit enforcement and billing
- Live leave-balance / HRIS / payroll lookup
- IT admin dashboard, analytics, and integrations
- Email, export, and Vercel deployment
- Contact HR handoff flow (button is visible but disabled)
- Live full-text Cap. 57 search / RAG over elegislation.gov.hk

## How to run locally
From `hr-chat-box-app`:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Or open `hr-chat-box.html` in a browser.
