(()=>{"use strict";!function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("button"),c=document.createElement("button"),o=document.createElement("button");n.innerText="Home",n.setAttribute("id","home"),c.innerText="Menu",c.setAttribute("id","menu"),o.innerText="Contact us!",o.setAttribute("id","contact-info"),t.appendChild(n),t.appendChild(c),t.appendChild(o),e.appendChild(t)}(),document.querySelector("#home").onclick=function(){!function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1");n.innerText="Sweet Sushi";const c=document.createElement("p");c.innerText="Love sushi? Love dessert? Then come and try our delicious sushi treats!";const o=document.createElement("div"),d=document.createElement("h2");d.innerText="Location";const i=document.createElement("p");i.innerText="12345 Rahsweet Rd.",o.appendChild(d),o.appendChild(i),t.appendChild(n),t.appendChild(c),t.appendChild(o),e.appendChild(t)}()},function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h2");n.innerText="Take a look at our menu!",t.appendChild(n),t.appendChild(function(e,t){const n=document.createElement("div"),c=document.createElement("img"),o=document.createElement("p");return c.setAttribute("src",`images/${e.replace(/\s+/g,"").toLowerCase()}.jpg`),c.setAttribute("alt",`${e}`),o.innerText="Delicious and rich chocolate coating with sweet rice and sweet filling",n.appendChild(c),n.appendChild(o),n}("Chocolate Roll")),e.appendChild(t)}()})();