// utils/generateResume.ts
import fs from "fs";
import path from "path";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4 size
  const { width, height } = page.getSize();
  let y = height - 50;

  const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // --- Name ---
  page.drawText("Yisa J. Ayo", { x: 50, y, size: 26, font: boldFont, color: rgb(0, 0, 0) });
  y -= 30;

  // --- Contact Info ---
  page.drawText("Phone: +2348064520832", { x: 50, y, size: 11, font: regularFont, color: rgb(0, 0, 0.8) });
  y -= 14;
  page.drawText("Email: ayodoubleayo@gmail.com", { x: 50, y, size: 11, font: regularFont, color: rgb(0, 0, 0.8) });
  y -= 14;
  page.drawText("GitHub: https://github.com/ayodoubleayo", { x: 50, y, size: 11, font: regularFont, color: rgb(0, 0, 1) });
  y -= 14;
  page.drawText("Portfolio: https://yisa-portfolio.vercel.app", { x: 50, y, size: 11, font: regularFont, color: rgb(0, 0, 1) });
  y -= 25;

  // --- Professional Summary ---
  page.drawText("Professional Summary", { x: 50, y, size: 16, font: boldFont, color: rgb(0, 0, 0) });
  y -= 18;
  page.drawText(
    "Full-Stack Developer skilled in React, Next.js, and Tailwind CSS. Passionate about building responsive, scalable web applications with clean, maintainable code. Open to frontend and full-stack opportunities.",
    { x: 50, y, size: 12, font: regularFont, color: rgb(0, 0, 0), lineHeight: 14, maxWidth: width - 100 }
  );
  y -= 50;

  // --- Education ---
  page.drawText("Education", { x: 50, y, size: 16, font: boldFont, color: rgb(0, 0, 0) });
  y -= 18;
  page.drawText("MBBS, LASU, 2023", { x: 60, y, size: 12, font: regularFont, color: rgb(0, 0, 0) });
  y -= 25;

  // --- Skills ---
  page.drawText("Skills", { x: 50, y, size: 16, font: boldFont, color: rgb(0, 0, 0) });
  y -= 18;

  const skills = [
    "Frontend: React, Next.js, Tailwind CSS",
    "Backend: Node.js, PostgreSQL, Redis",
    "State Management: Zustand",
    "Tools: Git, Vercel, Docker, npm",
  ];

  skills.forEach((skill) => {
    page.drawText(`• ${skill}`, { x: 60, y, size: 12, font: regularFont, color: rgb(0, 0, 0) });
    y -= 16;
  });
  y -= 10;

  // --- Projects ---
  page.drawText("Projects", { x: 50, y, size: 16, font: boldFont, color: rgb(0, 0, 0) });
  y -= 18;

  const projects = [
    {
      name: "Admin Dashboard",
      desc: "Full-stack web app built with Next.js & Tailwind CSS. Dynamic charts, user management, deployed on Vercel.",
    },
    {
      name: "Job Board App",
      desc: "Next.js & PostgreSQL full-stack app with search & filter, responsive UI, Zustand state management.",
    },
    {
      name: "BNPL App",
      desc: "React & Tailwind CSS Buy-Now-Pay-Later app. Mobile-first, responsive, interactive payment workflow.",
    },
  ];

  projects.forEach((proj) => {
    page.drawText(
      `• ${proj.name}: ${proj.desc}`,
      { x: 60, y, size: 12, font: regularFont, color: rgb(0, 0, 0), lineHeight: 14, maxWidth: width - 100 }
    );
    y -= 36;
  });

  // --- Certifications ---
  page.drawText("Certifications", { x: 50, y, size: 16, font: boldFont, color: rgb(0, 0, 0) });
  y -= 18;
  page.drawText("• Certificate in Full-Stack Development (Sail Innovation Lab)", {
    x: 60,
    y,
    size: 12,
    font: regularFont,
    color: rgb(0, 0, 0),
  });

  // --- Save PDF ---
  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), "public", "resume-intermediate.pdf");
  fs.writeFileSync(filePath, pdfBytes);

  console.log(`✅ Resume generated at: ${filePath}`);
}

generateResume().catch((err) => console.error(err));
