// script.js - เพิ่มความโต้ตอบด้วย JavaScript

// แสดงปีปัจจุบันใน footer
document.getElementById('footerYear').textContent = new Date().getFullYear();

// ปุ่ม View Contact: (Modal เปิดด้วย Bootstrap attribute แต่เราจะ log ข้อมูลเพื่อเป็นตัวอย่าง)
const viewContactBtn = document.getElementById('viewContactBtn');
viewContactBtn.addEventListener('click', function () {
  console.log('View Contact clicked — modal should open.');
  // เพิ่มข้อมูลสำหรับผู้ทดสอบว่ามี action เกิดขึ้น (เพื่อ screenshot console)
  console.log({
    action: 'view_contact',
    timestamp: new Date().toISOString(),
    email: 'your.email@example.com'
  });
});

// ปุ่ม Download CV: สร้างไฟล์ CV แบบจำลองแล้วดาวน์โหลดด้วย Blob
const downloadCvBtn = document.getElementById('downloadCvBtn');
downloadCvBtn.addEventListener('click', function () {
  // ตัวอย่างข้อมูล CV แบบง่าย (คุณสามารถเปลี่ยนเป็นไฟล์ PDF ที่แท้จริง)
  const cvText = [
    'name: Nawaphon kasom',
    'Position: Artist,Game design',
    'Email: nawapon09312@gmail.com',
    'Phone: +66 0931267139',
    '',
    'Educational Record:',
    '- Education,Chiang Mai University,College of Arts, Media and Technology,Digital Game',
    '',
    'skill: HTML, CSS, JavaScript, Bootstrap'
  ].join('\n');

  const blob = new Blob([cvText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'My_CV.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  // แจ้งผู้ใช้และ log ใน console (จะช่วยในการถ่าย screenshot ของ console ตามข้อกำหนด .pdf)
  alert('กำลังดาวน์โหลดไฟล์ CV (ตัวอย่าง): My_CV.txt');
  console.log('download_cv', { filename: 'My_CV.txt', time: new Date().toISOString() });
});
