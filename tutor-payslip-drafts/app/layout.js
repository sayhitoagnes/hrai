import "./globals.css";

export const metadata = {
  title: "Tutor Payslip Drafts",
  description: "September tutor payslip draft for review.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
