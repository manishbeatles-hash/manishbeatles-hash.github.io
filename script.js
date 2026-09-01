const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");
menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".navbar nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".project-card,.cert-card,.timeline-item,.skill-group").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});

// Creative interactions
window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".page-loader")?.classList.add("done"),850));
const progress=document.querySelector(".scroll-progress");
addEventListener("scroll",()=>{const m=document.documentElement.scrollHeight-innerHeight;progress.style.width=(m?scrollY/m*100:0)+"%"},{passive:true});
const cursor=document.querySelector(".custom-cursor");
if(cursor&&matchMedia("(pointer:fine)").matches){addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"});document.querySelectorAll("a,button,.tilt-card,.tags span,.skill-list span").forEach(x=>{x.onmouseenter=()=>cursor.classList.add("hover");x.onmouseleave=()=>cursor.classList.remove("hover")})}
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.transitionDelay=Math.min([...e.target.parentElement.children].indexOf(e.target)*70,280)+"ms";e.target.classList.add("visible");ro.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>ro.observe(x));
if(matchMedia("(pointer:fine)").matches)document.querySelectorAll(".tilt-card").forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateX(${y*-5}deg) rotateY(${x*7}deg) translateY(-4px)`};c.onmouseleave=()=>c.style.transform=""});
