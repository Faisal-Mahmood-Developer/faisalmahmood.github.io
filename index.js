function basicFunction(){let e=document.getElementById("textOne"),t=document.getElementById("textTwo"),n=document.getElementById("textThree");"none"===e.style.display?(e.style.display="block",t.style.display="none",n.style.display="none"):t.style.display="none"}function mySecondFunction(){let e=document.getElementById("textOne"),t=document.getElementById("textTwo"),n=document.getElementById("textThree");"none"===t.style.display?(e.style.display="none",t.style.display="block",n.style.display="none"):e.style.display="none"}function myThirdFunction(){let e=document.getElementById("textOne"),t=document.getElementById("textTwo"),n=document.getElementById("textThree");"none"===n.style.display?(e.style.display="none",t.style.display="none",n.style.display="block"):e.style.display="none"}const currentYear=new Date().getFullYear();document.getElementById("currentYear").textContent=currentYear,document.getElementById("currentYear").textContent=new Date().getFullYear(),document.addEventListener("keydown",function(e){e.ctrlKey&&("u"===e.key||"U"===e.key||"i"===e.key||"I"===e.key||"j"===e.key||"J"===e.key||"F12"===e.key)&&e.preventDefault(),e.ctrlKey&&"p"===e.key&&e.preventDefault()}),document.addEventListener("copy",function(e){e.preventDefault()}),document.addEventListener("selectstart",function(e){e.preventDefault()}),document.addEventListener("dragstart",function(e){e.preventDefault()}),document.getElementById("yourForm").addEventListener("submit",async function(e){e.preventDefault();let t=e.target,n=new FormData(t),l=document.getElementById("success_fail_info");try{let o=await fetch(t.action,{method:t.method,headers:{Accept:"application/json"},body:n});if(o.ok){let s=new bootstrap.Modal(document.getElementById("messageModal"));s.show(),t.reset()}else l.textContent="Failed to send message. Please try again later.",l.style.color="red"}catch(a){l.textContent="An error occurred. Please try again.",l.style.color="red"}}),document.getElementById("yourFormtwo").addEventListener("submit",async function(e){e.preventDefault();let t=e.target,n=new FormData(t),l=document.getElementById("success_fail_info");try{let o=await fetch("https://formspree.io/f/xdkkwybo",{method:"POST",headers:{Accept:"application/json"},body:n});if(o.ok){let s=new bootstrap.Modal(document.getElementById("messageModal"));s.show(),t.reset()}else l.textContent="Failed to send your message. Please try again later.",l.style.color="red"}catch(a){l.textContent="An error occurred while sending your message. Please try again.",l.style.color="red"}});