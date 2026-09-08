# HKAC Staff Asset Acknowledgement

Paperless web form for Hong Kong Arts Centre staff asset **receipt** and **return** acknowledgement. It follows *Asset Acknowledgement Form R1* and covers:

- Onboarding (first issue)
- Asset acquisition during employment
- Replacement
- Off-boarding (return)

Staff and HR/Admin/IT can sign with a drawn e-signature. HR can send a **one-time email** so staff open a single-use link to acknowledge receipt or return. After staff sign, the record updates and the link cannot be used again.

Records stay in this browser (no login, no database). Demo names are synthetic.

## Open the form

1. Open `staff-asset-acknowledgement/index.html` in Chrome or Edge.
2. Or open [http://localhost:3000/](http://localhost:3000/) if the local page is running.

## Try the one-time email

1. Open **Onboarding — Chan Mei Ling**.
2. Confirm the issued assets and the staff email.
3. Click **Email staff to sign**, then **Send one-time email**.
4. On the home page, under **Sent mail**, click **Open staff signing link**.
5. Tick the notes, **Sign and submit**, draw a signature.
6. Return to HR records — Chan Mei Ling should show **Staff signed**, and opening the same link again should say it has already been used.

Edge case: sending or signing with no assets selected is blocked. A used link cannot be reused (resend creates a new one-time link).

## Data

Forms save automatically in the browser. Use **Export JSON** / **Import JSON** to keep a file copy. **Reset demo data** restores the three sample records.
