(()=>{"use strict";const e=document.getElementById("content"),n=()=>{const n=document.createElement("nav");let t=["Home","Menu","Contact"];!function(){for(let e=0;e<t.length;e++){let d=document.createElement("button");d.classList.add("tablink"),d.innerText=t[e],d.id=t[e],n.append(d)}}(),e.append(n)},t=()=>{const n=document.createElement("div"),t=document.createElement("div"),d=document.createElement("div"),a=document.createElement("img");n.classList.add("pageContent"),n.classList.add("intro"),t.classList.add("rName"),d.classList.add("rDesc"),t.innerText="The Burger Club",d.innerText="The Best Burgers in the Bay Area!",a.src="images/burger-pexels-valeria-boltneva-1639565.jpg",a.classList.add("home-burger"),n.append(t),n.append(d),n.append(a),e.append(n)},d=document.getElementById("content");n(),t(),document.addEventListener("click",(function(e){"Menu"===e.target.id?(d.innerHTML="",n(),(()=>{const e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div");function o(e,n,t){for(let d in e){const a=document.createElement("div");a.classList.add(n),a.innerHTML=`${d}&nbsp${e[d]}`,t.append(a)}}t.classList.add("menu"),t.innerText="Menu",d.classList.add("b-section"),d.innerText="Burgers",a.classList.add("s-section"),a.innerText="Sides",c.classList.add("d-section"),c.innerText="Drinks",o({"The Burger Club Standard":"$10","Old School Burger":"$8","Western Bacon Cheeseburger":"$12","Veggie Burger":"$10"},"burger",s),o({Fries:"$3","Onion Rings":"$4"},"side",i),o({Soda:"$3",Beer:"$8"},"drink",r),n.append(t),n.append(d),n.append(s),n.append(a),n.append(i),n.append(c),n.append(r),e.append(n)})()):"Contact"===e.target.id?(d.innerHTML="",n(),(()=>{const e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div");t.classList.add("contact"),t.innerText="Contact",d.classList.add("h-title"),d.innerText="Hours",a.classList.add("hours"),a.innerHTML="Tuesday-Sunday<br>12pm-2pm<br>6pm-10pm",c.classList.add("a-title"),c.innerText="Address",s.classList.add("address"),s.innerHTML="123 Hayes St.<br>San Francisco, CA 12345",i.classList.add("p-title"),i.innerText="Phone",r.classList.add("phone"),r.innerText="415-123-4567",n.append(t),n.append(d),n.append(a),n.append(c),n.append(s),n.append(i),n.append(r),e.append(n)})()):(d.innerHTML="",n(),t())}))})();