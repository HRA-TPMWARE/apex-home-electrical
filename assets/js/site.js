document.addEventListener('DOMContentLoaded',()=>{
const c=window.APEX_CONFIG||{};
const T=(s,v)=>document.querySelectorAll(s).forEach(e=>e.textContent=v);
const H=(s,v)=>document.querySelectorAll(s).forEach(e=>e.href=v);
T('[data-phone-display]',c.phoneDisplay);T('[data-email]',c.email);T('[data-location-line]',c.locationLine);
T('[data-tagline]',c.tagline);T('[data-google-rating]',c.googleRating);T('[data-google-review-count]',c.googleReviewCount);
H('[data-phone-link]','tel:'+c.phoneHref);H('[data-email-link]','mailto:'+c.email);
H('[data-facebook]',c.facebook);H('[data-instagram]',c.instagram);H('[data-tiktok]',c.tiktok);H('[data-x]',c.x);
document.querySelectorAll('[data-current-year]').forEach(e=>e.textContent=new Date().getFullYear());
const b=document.querySelector('.menu-toggle'),n=document.querySelector('.main-nav');if(b&&n)b.onclick=()=>n.classList.toggle('open');
document.querySelectorAll('[data-mailto-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
const sub=encodeURIComponent('Website quote enquiry - '+(d.get('postcode')||'Apex'));const body=encodeURIComponent(
`Name: ${d.get('name')||''}\nPhone: ${d.get('phone')||''}\nEmail: ${d.get('email')||''}\nPostcode: ${d.get('postcode')||''}\nService: ${d.get('service')||''}\n\nJob details:\n${d.get('details')||''}`);
location.href=`mailto:${c.email}?subject=${sub}&body=${body}`;}));
});