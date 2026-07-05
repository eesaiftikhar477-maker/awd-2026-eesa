const typingText = [
    "Aspiring Full Stack Developer",
    "Software Engineering Student",
    "Frontend Web Developer",
    "C++ OOP Programmer"
];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");
function type() {
    if (!typingElement) return;
    if (charIndex < typingText[textIndex].length) {
        typingElement.innerHTML += typingText[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 70);
    }
    else{
        setTimeout(erase,1500);
    }
}
function erase(){
    if(charIndex>0){
        typingElement.innerHTML=typingText[textIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,40);
    }
    else{
        textIndex++;
        if(textIndex>=typingText.length){
            textIndex=0;
        }
        setTimeout(type,300);
    }
}
window.onload=type;
const year=document.getElementById("year");
if(year){
year.innerHTML=new Date().getFullYear();
}
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{
let current="";
sections.forEach(section=>{
const sectionTop=section.offsetTop-150;
const sectionHeight=section.clientHeight;
if(pageYOffset>=sectionTop){
current=section.getAttribute("id");
}
});
navLinks.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href")=="#"+current){
link.classList.add("active");
}
});
});
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});
});
});
const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
if(menuBtn){
menuBtn.onclick=function(){
nav.classList.toggle("show");
}
}
const revealElements=document.querySelectorAll(
".skill-card,.project-card,.timeline-card,.contact-card,.info-card,.highlight-card"
);
function reveal(){
revealElements.forEach(el=>{
const top=el.getBoundingClientRect().top;
const windowHeight=window.innerHeight;
if(top<windowHeight-100){
el.style.opacity="1";
el.style.transform="translateY(0)";
}
});
}
revealElements.forEach(el=>{
el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".6s";
});
window.addEventListener("scroll",reveal);
reveal();
window.addEventListener("scroll",()=>{
const header=document.querySelector("header");
if(window.scrollY>50){
header.style.boxShadow="0 5px 25px rgba(255,0,0,.15)";
}
else{
header.style.boxShadow="none";
}
});