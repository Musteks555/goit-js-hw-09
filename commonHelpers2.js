import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const s=document.querySelector(".feedback-form"),r=s.elements.email,m=s.elements.message,l="feedback-form-state",t={email:"",message:""},n=localStorage.getItem(l);let a=JSON.parse(n);if(a===null)a=t;else for(const e in a)t[e]=a[e];r.value=t.email;m.value=t.message;s.addEventListener("input",e=>{t[e.target.name]=e.target.value,localStorage.setItem(l,JSON.stringify(t))});s.addEventListener("submit",e=>{e.preventDefault(),console.log(e.target.elements.email.value),console.log(e.target.elements.message.value),localStorage.removeItem(l),Object.keys(t).forEach(o=>{t[o]=""}),e.currentTarget.reset()});
//# sourceMappingURL=commonHelpers2.js.map