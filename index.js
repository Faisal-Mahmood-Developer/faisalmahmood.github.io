function basicFunction(){let e=document.getElementById("textOne"),t=document.getElementById("textTwo"),n=document.getElementById("textThree");"none"===e.style.display?(e.style.display="block",t.style.display="none",n.style.display="none"):t.style.display="none"}function mySecondFunction(){let e=document.getElementById("textOne"),t=document.getElementById("textTwo"),n=document.getElementById("textThree");"none"===t.style.display?(e.style.display="none",t.style.display="block",n.style.display="none"):e.style.display="none"}function myThirdFunction(){let e=document.getElementById("textOne"),t=document.getElementById("textTwo"),n=document.getElementById("textThree");"none"===n.style.display?(e.style.display="none",t.style.display="none",n.style.display="block"):e.style.display="none"}function modalfunction(){}document.getElementById("yourFormtwo").addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("name").value,n=document.getElementById("lastName").value,l=document.getElementById("email").value,a=document.getElementById("number").value,m=document.getElementById("message").value,o=document.getElementById("city").value,s=document.getElementById("course").value;Email.send({Host:"smtp.elasticemail.com",Username:"faisalmahmood3737@gmail.com",Password:"pdei uffg yffk vfzt",SecureToken:"1ed00c6c-3ca4-43f9-ad2d-f372397b9f38",To:"faisalmahmood3737@gmail.com",From:"faisalmahmood3737@gmail.com",Subject:"New Contact Form Submission",Body:{html:`Name: ${t}<br>Last Name: ${n}<br>Email: ${l}<br>Number: ${a}<br>Message: ${m} <br>City: ${o}<br>Course: ${s} `}}).then(function(e){new bootstrap.Modal(document.getElementById("messageModal")).show(),document.getElementById("yourFormtwo").reset()})}),document.getElementById("yourForm").addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("name").value,n=document.getElementById("lastName").value,l=document.getElementById("email").value,a=document.getElementById("number").value,m=document.getElementById("message").value;Email.send({Host:"smtp.elasticemail.com",Username:"faisalmahmood3737@gmail.com",Password:"F3D76975569FCC80EDE029CB644806596E3C",SecureToken:"1ed00c6c-3ca4-43f9-ad2d-f372397b9f38",To:"faisalmahmood3535q@gmail.com",From:"faisalmahmood3737@gmail.com",Subject:"New Contact Form Submission",Body:{html:`Name: ${t}<br>Last Name: ${n}<br>Email: ${l}<br>Number: ${a}<br>Message: ${m}`}}).then(function(e){new bootstrap.Modal(document.getElementById("messageModal")).show(),document.getElementById("yourForm").reset()})});const currentYear=new Date().getFullYear();document.getElementById("currentYear").textContent=currentYear,document.getElementById("currentYear").textContent=new Date().getFullYear(),document.addEventListener("keydown",function(e){e.ctrlKey&&("u"===e.key||"U"===e.key||"i"===e.key||"I"===e.key||"j"===e.key||"J"===e.key||"F12"===e.key)&&e.preventDefault(),e.ctrlKey&&"p"===e.key&&e.preventDefault()}),document.addEventListener("copy",function(e){e.preventDefault()}),document.addEventListener("selectstart",function(e){e.preventDefault()}),document.addEventListener("dragstart",function(e){e.preventDefault()});