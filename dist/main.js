(()=>{"use strict";let e=[];let t=[];var n=new Date;let r=document.getElementById("addTaskButton");r.style.display="none";let l=document.querySelector(".taskBoard"),i=document.querySelector(".taskBoardTitle"),a=!1,d=0,c=i.innerText,o=!1;function s(t){let n=document.createElement("div");n.setAttribute("class","task");let i=document.createElement("p");i.setAttribute("class","taskTitleDOM"),i.innerText=t.title;let a=document.createElement("p");a.setAttribute("class","taskDueDateDOM"),a.innerText=t.date;let d=document.createElement("p");d.setAttribute("class","desCriptionDOM"),d.innerText=t.description;let c=document.createElement("div");c.setAttribute("id",`${t.number}_task`),c.classList.add("taskButtons");let o=document.createElement("button");o.innerText="Delete",o.addEventListener("click",(()=>{let n=document.getElementById(`${t.number}_task`).parentElement,r=n.lastChild.id.replace("_task,");n.remove(),e.splice(r,1),E()}));let s=document.createElement("button");return s.innerHTML="Edit",s.addEventListener("click",(()=>{let n=document.getElementById(`${t.number}_task`).parentElement,i=n.getElementsByTagName("p");l.insertBefore(u(i[0].innerText,i[1].innerText,i[2].innerText),r),r.innerText="Edit Task";let a=n.lastChild.id.replace("_task,");e.splice(a,1),E(),n.remove()})),c.appendChild(o),c.appendChild(s),n.appendChild(i),n.appendChild(a),n.appendChild(d),n.appendChild(c),n}function u(e,t,n){let r=document.createElement("div");r.setAttribute("id","inputs");let l=document.createElement("input");l.setAttribute("id","title"),l.value=e;let i=document.createElement("input");i.setAttribute("id","dueDate"),i.setAttribute("type","date"),i.value=t;let d=document.createElement("input");return d.setAttribute("id","descriptionBar"),d.value=n,r.appendChild(l),r.appendChild(i),r.appendChild(d),a=!0,o=!0,r}r.addEventListener("click",(()=>{if(1==a){d++;let o=(t=document.getElementById("title").value,n=document.getElementById("dueDate").value,i=document.getElementById("descriptionBar").value,function(t,n,r,l,i){let a=((e,t,n,r,l)=>({title:e,date:t,description:n,number:r,project:l}))(t,n,r,l,i);return e.push(a),a}(t,n,i,d,c));null!=e&&E(),document.getElementById("inputs").remove(),l.insertBefore(s(o),r),a=!1,r.innerText="Create Task"}else{let e=document.createElement("div");e.setAttribute("id","inputs");let t=document.createElement("input");t.setAttribute("id","title"),t.placeholder="Name";let n=document.createElement("input");n.setAttribute("id","dueDate"),n.setAttribute("type","date");let i=document.createElement("input");i.setAttribute("id","descriptionBar"),i.placeholder="Description",e.appendChild(t),e.appendChild(n),e.appendChild(i),l.insertBefore(e,r),a=!0,r.innerText="Add Task"}var t,n,i}));let p=document.getElementById("addProjectButton"),m=document.querySelector(".listProjects");function y(t){return e.filter((e=>e.project==t))}function T(e){document.querySelectorAll(".task").forEach((e=>e.remove())),null!=task&&e.forEach((e=>l.insertBefore(s(e),r)))}function E(){window.localStorage.setItem("taksArray",JSON.stringify(e)),window.localStorage.setItem("projectArray",JSON.stringify(t))}document.querySelectorAll(".task"),p.addEventListener("click",(()=>{i.innerText="",document.querySelectorAll(".task").forEach((e=>e.remove()));let n=document.createElement("input");n.placeholder="Project_Name",i.appendChild(n);let l=document.createElement("button");l.innerText="Add Project",i.appendChild(l),r.style.display="none",l.addEventListener("click",(()=>{if(""!=n.value){i.innerText=n.value;let l=document.createElement("p");l.innerText=i.innerText,c=l.innerText;let a=document.createElement("p");a.innerText="delete",a.addEventListener("click",(()=>{if(e=e.filter((e=>e.project!=l.innerText)),t=t.filter((e=>e!=l.innerText)),l.innerText==i.innerText){i.innerText="Switch to another project or create a new one",r.style.display="none";let e=document.querySelectorAll(".task");null!=e&&e.forEach((e=>e.remove()))}l.remove(),a.remove(),E()})),l.addEventListener("click",(()=>{i.innerText=l.innerText,c=l.innerText,T(y(c)),r.style.display=""})),m.appendChild(l),m.appendChild(a),r.style.display="",t.push(n.value),E()}}))})),document.querySelector(".all").addEventListener("click",(()=>{i.innerText="All Tasks",T(e),r.style.display="none"})),document.querySelector(".today").addEventListener("click",(()=>{i.innerText="Tasks Due Today";let t=new Date;t=t.setDate(n.getDate());let l=JSON.parse(JSON.stringify(e));l=l.filter((e=>e.date=new Date(`${e.date}`)));let a=l.filter((e=>(e.date-t)/864e5<=1&&(e.date-t)/864e5>=-1));a=a.filter((e=>e.date=e.date.toLocaleDateString())),T(a),r.style.display="none"})),document.querySelector(".days7").addEventListener("click",(()=>{i.innerText="Tasks Due Within 7 days";let t=new Date;t=t.setDate(n.getDate());let l=JSON.parse(JSON.stringify(e));l=l.filter((e=>e.date=new Date(`${e.date}`)));let a=l.filter((e=>(e.date-t)/864e5<=8&&(e.date-t)/864e5>=-1));a=a.filter((e=>e.date=e.date.toLocaleDateString())),T(a),r.style.display="none"})),document.querySelector(".longterm").addEventListener("click",(()=>{i.innerText="Tasks not due in 7 days";let t=new Date;t=t.setDate(n.getDate());let l=JSON.parse(JSON.stringify(e));l=l.filter((e=>e.date=new Date(`${e.date}`)));let a=l.filter((e=>(e.date-t)/864e5>=8));a=a.filter((e=>e.date=e.date.toLocaleDateString())),T(a),r.style.display="none"})),e=JSON.parse(window.localStorage.getItem("taksArray")),t=JSON.parse(window.localStorage.getItem("projectArray")),null!=t&&t.forEach((n=>function(n){i.innerText=n;let l=document.createElement("p");l.innerText=i.innerText,c=l.innerText;let a=document.createElement("p");a.innerText="delete",a.addEventListener("click",(()=>{e=e.filter((e=>e.project!=l.innerText)),t=t.filter((e=>e!=l.innerText)),E(),l.innerText==i.innerText&&(i.innerText="Switch to another project or create a new one",r.style.display="none",document.querySelectorAll(".task").forEach((e=>e.remove()))),l.remove(),a.remove()})),l.addEventListener("click",(()=>{i.innerText=l.innerText,c=l.innerText,T(y(c)),r.style.display=""})),m.appendChild(l),m.appendChild(a),r.style.display=""}(n))),i.innerText="Add a Project",r.style.display="none"})();