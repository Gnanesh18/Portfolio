/* eslint-disable */
const fs = require('fs');
const PDFDocument = require('pdfkit');

// Create a document
const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: 35,
    bottom: 35,
    left: 45,
    right: 45
  }
});

// Stream to public/resume.pdf
doc.pipe(fs.createWriteStream('public/resume.pdf'));

// Colors (Formal Black & White)
const darkColor = '#000000';    // Black for text & headers
const bodyColor = '#111111';    // Slightly softer black for body
const lineCol = '#000000';      // Section divider line color

// Layout margins
const leftMargin = 45;
const rightMargin = 550;
const contentWidth = 505;

// Y Coordinate tracking
let y = 35;

// ==========================================
// HEADER SECTION (Centered)
// ==========================================
doc.fillColor(darkColor)
   .font('Times-Bold')
   .fontSize(22)
   .text('GNANESH K C', leftMargin, y, { width: contentWidth, align: 'center' });

y += 26;

doc.fillColor(bodyColor)
   .font('Times-Italic')
   .fontSize(9.5)
   .text('MCA student with hands-on experience building full-stack applications', leftMargin, y, { width: contentWidth, align: 'center' });

y += 15;

// Contact Row: centered on one line with custom icons/bullets
// In standard PDF fonts, we use standard bullets for cross-platform safety
doc.fillColor(bodyColor)
   .font('Helvetica')
   .fontSize(8.5)
   .text('+919535197496   •   appugnanesh655@gmail.com   •   gnanesh-kc   •   Gnanesh18   •   Bengaluru, India', leftMargin, y, { width: contentWidth, align: 'center' });

// Overlay hidden clickable links for contact coordinates
const contactLineText = '+919535197496   •   appugnanesh655@gmail.com   •   gnanesh-kc   •   Gnanesh18   •   Bengaluru, India';
const phoneWidth = doc.widthOfString('+919535197496');
const emailWidth = doc.widthOfString('appugnanesh655@gmail.com');
const linkedinWidth = doc.widthOfString('gnanesh-kc');
const githubWidth = doc.widthOfString('Gnanesh18');
const bulletWidth = doc.widthOfString('   •   ');
const totalTextWidth = doc.widthOfString(contactLineText);

let startX = leftMargin + (contentWidth - totalTextWidth) / 2;

// Phone link
doc.link(startX, y - 2, phoneWidth, 11, 'tel:+919535197496');
startX += phoneWidth + bulletWidth;

// Email link
doc.link(startX, y - 2, emailWidth, 11, 'mailto:appugnanesh655@gmail.com');
startX += emailWidth + bulletWidth;

// LinkedIn link
doc.link(startX, y - 2, linkedinWidth, 11, 'https://linkedin.com/in/gnanesh-kc');
startX += linkedinWidth + bulletWidth;

// GitHub link
doc.link(startX, y - 2, githubWidth, 11, 'https://github.com/Gnanesh18');

y += 22;

// Helper to ensure page layout space, breaking to a new page if needed
function ensureSpace(neededHeight) {
  if (y + neededHeight > 800) {
    doc.addPage();
    y = 35;
  }
}

// Helper to draw clean section header
function drawSectionHeader(title) {
  ensureSpace(35);
  doc.fillColor(darkColor)
     .font('Helvetica-Bold')
     .fontSize(10.5)
     .text(title, leftMargin, y);
  
  doc.moveTo(leftMargin, y + 13)
     .lineTo(rightMargin, y + 13)
     .strokeColor(lineCol)
     .lineWidth(0.8)
     .stroke();
  
  y += 21;
}

// Helper to draw left-right row
function drawRow(leftText, rightText, size = 9, leftFont = 'Helvetica-Bold', rightFont = 'Helvetica') {
  ensureSpace(size + 4);
  doc.fillColor(darkColor).font(leftFont).fontSize(size).text(leftText, leftMargin, y);
  doc.fillColor(darkColor).font(rightFont).fontSize(size).text(rightText, leftMargin, y, { align: 'right', width: contentWidth });
  y += size + 4;
}

// Helper to draw italicized sub-row
function drawSubRow(leftText, rightText, size = 8.5) {
  ensureSpace(size + 4);
  doc.fillColor(bodyColor).font('Helvetica-Oblique').fontSize(size).text(leftText, leftMargin, y);
  doc.fillColor(bodyColor).font('Helvetica-Oblique').fontSize(size).text(rightText, leftMargin, y, { align: 'right', width: contentWidth });
  y += size + 4;
}

// ==========================================
// 1. PROFESSIONAL SUMMARY
// ==========================================
drawSectionHeader('PROFESSIONAL SUMMARY');

// Mix bold and regular text to match the image format exactly
doc.fillColor(bodyColor)
   .font('Helvetica')
   .fontSize(8.5)
   .text('MCA student with hands-on experience building full-stack applications using ', leftMargin, y, { continued: true, width: contentWidth, align: 'justify', lineGap: 2.5 })
   .font('Helvetica-Bold').text('React, Node.js, Express, and MongoDB', { continued: true })
   .font('Helvetica').text('. Interested in ', { continued: true })
   .font('Helvetica-Bold').text('frontend engineering ', { continued: true })
   .font('Helvetica').text('and creating ', { continued: true })
   .font('Helvetica-Bold').text('performant user experiences', { continued: true })
   .font('Helvetica').text('.', { width: contentWidth, align: 'justify', lineGap: 2.5 });

y += 34;

// ==========================================
// 2. EDUCATIONS
// ==========================================
drawSectionHeader('EDUCATIONS');

// Entry 1: BMS ITM
drawRow('BMS Institute Of Technology And Management | Bengaluru', '2026 - 2027', 9, 'Helvetica-Bold', 'Helvetica-Bold');
drawSubRow('Master Of Computer Applications', 'CGPA : 8.0');
ensureSpace(14);
doc.fillColor(bodyColor).font('Helvetica').fontSize(8.5).text('•  Master Of Computer Applications, BMS Institute Of Technology And Management, Bengaluru, 2026 - 2027', leftMargin + 10, y, { width: contentWidth - 10 });
y += 14;

// Entry 2: SJU
drawRow('St Joseph’s University | Bengaluru', '2022 - 2025', 9, 'Helvetica-Bold', 'Helvetica-Bold');
drawSubRow('Bachelor of Computer Applications, St Joseph’s University, Bengaluru, GPA: 7.2, 2022-2025', 'CGPA : 7.2');
y += 2;

// Entry 3: SJPUC
drawRow('St Joseph’s Pre University College | Bengaluru', '2020 - 2022', 9, 'Helvetica-Bold', 'Helvetica-Bold');
drawSubRow('Class XII', 'Percentage : 80.33');
y += 2;

// Entry 4: BGS
drawRow('BGS Rural English School | Chickballapur', '2019 - 2019', 9, 'Helvetica-Bold', 'Helvetica-Bold');
drawSubRow('Class X', 'Percentage : 97.28');
y += 10;

// ==========================================
// 3. PROJECTS
// ==========================================
drawSectionHeader('PROJECTS');

// Project 1
ensureSpace(40);
doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('Petrol Bunk Management System |     Github', leftMargin, y);
// Draw tiny GitHub icon right before the word Github
const petrolTitleWidth = doc.widthOfString('Petrol Bunk Management System | ');
doc.save()
   .translate(leftMargin + petrolTitleWidth + 2, y + 1)
   .scale(0.5)
   .path('M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z')
   .fill(darkColor)
   .restore();
doc.link(leftMargin + petrolTitleWidth, y - 2, 40, 11, 'https://github.com/darshan-gowdaa/petrol-bunk-management-system');

doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('Oct 2025 - Apr 2026', leftMargin, y, { align: 'right', width: contentWidth });
y += 13;

doc.fillColor(bodyColor).font('Helvetica-Oblique').fontSize(8.5).text('[Frontend Developer]', leftMargin, y);
y += 12;

// Bullets
const p1Bullets = [
  ['Built a user interactive web application for recording daily fuel sales, ', 'improving record accuracy by ~30%', '.'],
  ['Implemented real-time analytics dashboard of fuel sales and automated profit/loss calculations.'],
  ['Build using ', 'MERN stack', ' with ', 'React', ' for frontend and ', 'Node.js', ' and ', 'Express', ' for backend.'],
  ['Implemented ', 'CRUD operations', ' for managing daily data using ', 'MongoDB', '.'],
  ['Designed a secured role based login system, ensuring restricted access for ', 'manager only', '.']
];

p1Bullets.forEach(parts => {
  const textHeight = doc.heightOfString('•  ' + parts.join(''), { width: contentWidth - 10 }) + 3;
  ensureSpace(textHeight);
  doc.fillColor(bodyColor).font('Helvetica').fontSize(8.5).text('•  ', leftMargin + 10, y, { continued: true });
  for (let i = 0; i < parts.length; i++) {
    const isBold = i % 2 === 1;
    doc.font(isBold ? 'Helvetica-Bold' : 'Helvetica').text(parts[i], { continued: i < parts.length - 1 });
  }
  y += textHeight;
});

// Technologies line
const techHeight1 = doc.heightOfString('Technologies / Tools Used : React, Node.js, Express, MongoDB', { width: contentWidth - 10 }) + 3;
ensureSpace(techHeight1);
doc.fillColor(bodyColor).font('Helvetica-Bold').fontSize(8.5).text('Technologies / Tools Used : ', leftMargin + 10, y, { continued: true });
doc.font('Helvetica-Oblique').text('React, Node.js, Express, MongoDB');
y += 16;


// Project 2
ensureSpace(40);
doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('Crypto Currency Dashboard |     Github', leftMargin, y);
const cryptoTitleWidth = doc.widthOfString('Crypto Currency Dashboard | ');
doc.save()
   .translate(leftMargin + cryptoTitleWidth + 2, y + 1)
   .scale(0.5)
   .path('M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z')
   .fill(darkColor)
   .restore();
doc.link(leftMargin + cryptoTitleWidth, y - 2, 40, 11, 'https://github.com/Gnanesh18/CryptoSight');

doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('Mar 2026 - Apr 2026', leftMargin, y, { align: 'right', width: contentWidth });
y += 13;

doc.fillColor(bodyColor).font('Helvetica-Oblique').fontSize(8.5).text('[Individual Project]', leftMargin, y);
y += 12;

// Bullets
const p2Bullets = [
  ['Developed a ', 'responsive cryptocurrency tracking web application', ' using React and Next.js, enabling users to monitor ', 'real-time market data for upto 100 cryptocurrencies', '.'],
  ['Built ', 'dynamic and interactive UI components', ' to visualize live price charts and market trends, improving user engagement and usability.'],
  ['Integrated ', 'real-time API data fetching', ' and implemented efficient ', 'state management', ', reducing redundant requests and improving load performance by ', '~30%', '.'],
  ['Optimized application performance with techniques like ', 'lazy loading and caching', ', resulting in faster page load times and smoother user experience..'],
  ['Ensured ', 'cross-device responsiveness', ', delivering consistent performance across desktop, tablet, and mobile platforms.'],
  ['Deployed the application and handled ', 'continuous maintenance, bug fixes, and feature updates', ', ensuring high reliability and uptime.']
];

p2Bullets.forEach(parts => {
  const textHeight = doc.heightOfString('•  ' + parts.join(''), { width: contentWidth - 10 }) + 3;
  ensureSpace(textHeight);
  doc.fillColor(bodyColor).font('Helvetica').fontSize(8.5).text('•  ', leftMargin + 10, y, { continued: true });
  for (let i = 0; i < parts.length; i++) {
    const isBold = i % 2 === 1;
    doc.font(isBold ? 'Helvetica-Bold' : 'Helvetica').text(parts[i], { continued: i < parts.length - 1 });
  }
  y += textHeight;
});

// Technologies line
const techHeight2 = doc.heightOfString('Technologies / Tools Used : React, Next.js', { width: contentWidth - 10 }) + 3;
ensureSpace(techHeight2);
doc.fillColor(bodyColor).font('Helvetica-Bold').fontSize(8.5).text('Technologies / Tools Used : ', leftMargin + 10, y, { continued: true });
doc.font('Helvetica-Oblique').text('React, Next.js');
y += 15;


// Project 3
ensureSpace(40);
doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('SkillMatrix AI Dashboard |     Github', leftMargin, y);
const skillmatrixTitleWidth = doc.widthOfString('SkillMatrix AI Dashboard | ');
doc.save()
   .translate(leftMargin + skillmatrixTitleWidth + 2, y + 1)
   .scale(0.5)
   .path('M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z')
   .fill(darkColor)
   .restore();
doc.link(leftMargin + skillmatrixTitleWidth, y - 2, 40, 11, 'https://github.com/Gnanesh18/skillmatrix');

doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('May 2026', leftMargin, y, { align: 'right', width: contentWidth });
y += 13;

doc.fillColor(bodyColor).font('Helvetica-Oblique').fontSize(8.5).text('[Frontend Developer / AI Integration]', leftMargin, y);
y += 12;

// Bullets
const p3Bullets = [
  ['Developed an ', 'interactive AI-powered learning dashboard', ' featuring custom skill assessments and career roadmap generation.'],
  ['Integrated ', 'Google Gemini AI API', ' endpoints to generate custom, actionable step-by-step learning roadmaps and chatbot assistance.'],
  ['Built interactive assessment modules enforcing ', 'anti-hallucination rules', ' and question variety.'],
  ['Developed secure JWT-based authentication and ', 'MongoDB', ' integrations for persistent user state across serverless sessions.']
];

p3Bullets.forEach(parts => {
  const textHeight = doc.heightOfString('•  ' + parts.join(''), { width: contentWidth - 10 }) + 3;
  ensureSpace(textHeight);
  doc.fillColor(bodyColor).font('Helvetica').fontSize(8.5).text('•  ', leftMargin + 10, y, { continued: true });
  for (let i = 0; i < parts.length; i++) {
    const isBold = i % 2 === 1;
    doc.font(isBold ? 'Helvetica-Bold' : 'Helvetica').text(parts[i], { continued: i < parts.length - 1 });
  }
  y += textHeight;
});

// Technologies line
const techHeight3 = doc.heightOfString('Technologies / Tools Used : React, TypeScript, Tailwind CSS, MongoDB, Express, Gemini API', { width: contentWidth - 10 }) + 3;
ensureSpace(techHeight3);
doc.fillColor(bodyColor).font('Helvetica-Bold').fontSize(8.5).text('Technologies / Tools Used : ', leftMargin + 10, y, { continued: true });
doc.font('Helvetica-Oblique').text('React, TypeScript, Tailwind CSS, MongoDB, Express, Gemini API');
y += 15;


// Project 4
ensureSpace(40);
doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('AthleteOS |     Github', leftMargin, y);
const athleteosTitleWidth = doc.widthOfString('AthleteOS | ');
doc.save()
   .translate(leftMargin + athleteosTitleWidth + 2, y + 1)
   .scale(0.5)
   .path('M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z')
   .fill(darkColor)
   .restore();
doc.link(leftMargin + athleteosTitleWidth, y - 2, 40, 11, 'https://github.com/Gnanesh18/sports_ai');

doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('June 2026', leftMargin, y, { align: 'right', width: contentWidth });
y += 13;

doc.fillColor(bodyColor).font('Helvetica-Oblique').fontSize(8.5).text('[Full Stack Developer]', leftMargin, y);
y += 12;

// Bullets
const p4Bullets = [
  ['Developed a full-stack sports performance management platform for athletes and coaches to track training sessions, match performance, rankings, and injury history.'],
  ['Built ', 'responsive dashboards and analytics modules', ' to visualize athlete progress and performance trends.'],
  ['Implemented ', 'role-based workflows', ' for athletes and coaches, improving training management efficiency.'],
  ['Designed a ', 'scalable architecture', ' using React, Node.js, Express, and MongoDB, and deployed the platform on Vercel.']
];

p4Bullets.forEach(parts => {
  const textHeight = doc.heightOfString('•  ' + parts.join(''), { width: contentWidth - 10 }) + 3;
  ensureSpace(textHeight);
  doc.fillColor(bodyColor).font('Helvetica').fontSize(8.5).text('•  ', leftMargin + 10, y, { continued: true });
  for (let i = 0; i < parts.length; i++) {
    const isBold = i % 2 === 1;
    doc.font(isBold ? 'Helvetica-Bold' : 'Helvetica').text(parts[i], { continued: i < parts.length - 1 });
  }
  y += textHeight;
});

// Technologies line
const techHeight4 = doc.heightOfString('Technologies / Tools Used : React, Node.js, Express, MongoDB, Vercel', { width: contentWidth - 10 }) + 3;
ensureSpace(techHeight4);
doc.fillColor(bodyColor).font('Helvetica-Bold').fontSize(8.5).text('Technologies / Tools Used : ', leftMargin + 10, y, { continued: true });
doc.font('Helvetica-Oblique').text('React, Node.js, Express, MongoDB, Vercel');
y += 15;


// Project 5
ensureSpace(40);
doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('Smart Theft Protection Platform |     Github', leftMargin, y);
const theftTitleWidth = doc.widthOfString('Smart Theft Protection Platform | ');
doc.save()
   .translate(leftMargin + theftTitleWidth + 2, y + 1)
   .scale(0.5)
   .path('M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z')
   .fill(darkColor)
   .restore();
doc.link(leftMargin + theftTitleWidth, y - 2, 40, 11, 'https://github.com/Gnanesh18/Theft-Protection');

doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9).text('June 2026 - Present', leftMargin, y, { align: 'right', width: contentWidth });
y += 13;

doc.fillColor(bodyColor).font('Helvetica-Oblique').fontSize(8.5).text('[Full Stack Developer]', leftMargin, y);
y += 12;

// Bullets
const p5Bullets = [
  ['Developed a ', 'multi-role reporting and protection application', ' for citizens, officers, and admins to file, track, and manage theft reports.'],
  ['Integrated ', 'interactive Leaflet maps', ' enabling users to pin exact incident coordinates and view localized theft hotspots.'],
  ['Built automated PDF case-sheet generation (via ', 'jsPDF', ') compiling case metadata and evidence details for official printing.'],
  ['Created dynamic analytics dashboard with ', 'Chart.js', ' visualizing monthly incident metrics and case resolution counts.']
];

p5Bullets.forEach(parts => {
  const textHeight = doc.heightOfString('•  ' + parts.join(''), { width: contentWidth - 10 }) + 3;
  ensureSpace(textHeight);
  doc.fillColor(bodyColor).font('Helvetica').fontSize(8.5).text('•  ', leftMargin + 10, y, { continued: true });
  for (let i = 0; i < parts.length; i++) {
    const isBold = i % 2 === 1;
    doc.font(isBold ? 'Helvetica-Bold' : 'Helvetica').text(parts[i], { continued: i < parts.length - 1 });
  }
  y += textHeight;
});

// Technologies line
const techHeight5 = doc.heightOfString('Technologies / Tools Used : React, Node.js, Express, MongoDB, Leaflet, Chart.js, jsPDF, Tailwind CSS', { width: contentWidth - 10 }) + 3;
ensureSpace(techHeight5);
doc.fillColor(bodyColor).font('Helvetica-Bold').fontSize(8.5).text('Technologies / Tools Used : ', leftMargin + 10, y, { continued: true });
doc.font('Helvetica-Oblique').text('React, Node.js, Express, MongoDB, Leaflet, Chart.js, jsPDF, Tailwind CSS');
y += 15;


// ==========================================
// 4. SKILLS
// ==========================================
drawSectionHeader('SKILLS');

const skillsData = [
  { key: 'Databases :', val: 'MySQL, MongoDB' },
  { key: 'Frameworks & Libraries :', val: 'React' },
  { key: 'Languages :', val: 'English, Hindi, telugu, Kannada' },
  { key: 'Programming Languages :', val: 'C, JAVA, JavaScript, SQL' },
  { key: 'Soft Skills :', val: 'Data Structures' },
  { key: 'Tools & Platforms :', val: 'VS Code, Git, GitHub' }
];

skillsData.forEach(s => {
  doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(8.5).text(s.key, leftMargin, y);
  doc.fillColor(bodyColor).font('Helvetica').fontSize(8.5).text(s.val, leftMargin + 150, y, { width: contentWidth - 150 });
  y += 12;
});

y += 5;

// ==========================================
// 5. AWARDS & ACHIEVEMENTS
// ==========================================
drawSectionHeader('AWARDS & ACHIEVEMENTS');

const achievements = [
  'Got the title of ‘Kannada Ratna’.',
  'Best Sports person of the year 2022 from SJPUC.',
  'Best Tennis Player of the year for 3 years (2022-2025) from SJU.',
  'Ranked 277 in India and 22 in Karnataka in tennis rankings.'
];

achievements.forEach(ach => {
  doc.fillColor(bodyColor).font('Helvetica').fontSize(8.5).text('•  ' + ach, leftMargin + 10, y, { width: contentWidth - 10 });
  y += doc.heightOfString('•  ' + ach, { width: contentWidth - 10 }) + 3;
});

y += 5;

// ==========================================
// 6. CERTIFICATIONS
// ==========================================
drawSectionHeader('CERTIFICATIONS');

doc.fillColor(bodyColor).font('Helvetica').fontSize(8.5).text('•  Offline training at SQE Systems and Solutions.', leftMargin + 10, y, { width: contentWidth - 10 });

// End document
doc.end();

console.log('PDF Resume successfully updated to match the single-column formal reference.');
