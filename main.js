(()=>{"use strict";(()=>{const e=document.getElementById("content"),t=document.createElement("nav"),n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),c=document.createElement("img");let r=["Home","Menu","Contact"];!function(){for(let e=0;e<r.length;e++){let n=document.createElement("button");n.classList.add("tablink"),n.innerText=r[e],t.append(n)}}(),n.classList.add("intro"),a.classList.add("rName"),d.classList.add("rDesc"),a.innerText="The Burger Club",d.innerText="The Best Burgers in the Bay Area!",c.src="images/burger-pexels-valeria-boltneva-1639565.jpg",c.classList.add("home-burger"),e.append(t),n.append(a),n.append(d),n.append(c),e.append(n)})(),showContent()})();