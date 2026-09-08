const date = new Date();
document.getElementById('date').textContent = date.toLocaleDateString('th-TH',{day:'numeric',month:'long',year:'numeric'});
const quotes=['ขอให้สัปดาห์นี้มีแต่เรื่องดี ๆ และความสำเร็จ 💙','เริ่มต้นใหม่ได้เสมอ ลุยให้เต็มที่ในวันจันทร์นี้! ⚡','เชื่อมั่นในตัวเอง แล้วก้าวไปข้างหน้าแบบแชมป์ 🏆'];
document.getElementById('wishBtn').addEventListener('click',()=>{document.getElementById('quote').textContent='“'+quotes[Math.floor(Math.random()*quotes.length)]+'”';});
