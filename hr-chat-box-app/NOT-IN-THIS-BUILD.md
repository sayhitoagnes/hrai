# Not In This Build

These were deliberate scope decisions for the workshop slice, not forgotten gaps.

## Confirmed build slice
Employee opens chatbot → asks a policy question → gets the correct answer from sample knowledge → sees a source label. Unknown questions show “I don’t know” plus a disabled Contact HR button.

## Deliberately not included
- Login and permissions
- Saving to a database / Supabase
- HR admin upload, edit, and knowledge-base management screens
- Real AI credit enforcement and billing
- Live leave-balance / HRIS / payroll lookup
- IT admin dashboard, analytics, and integrations
- Email, export, and Vercel deployment
- Contact HR handoff flow (button is visible but disabled)

## How to run locally
From `hr-chat-box-app`:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.
