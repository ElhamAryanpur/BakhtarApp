var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e){e=""+e,t.data!==e&&(t.data=e)}let h;function g(t){h=t}const p=[],$=Promise.resolve();let m=!1;const v=[],b=[],y=[];function w(t){b.push(t)}function x(){const t=new Set;do{for(;p.length;){const t=p.shift();g(t),D(t.$$)}for(;v.length;)v.shift()();for(;b.length;){const e=b.pop();t.has(e)||(e(),t.add(e))}}while(p.length);for(;y.length;)y.pop()();m=!1}function D(t){t.fragment&&(t.update(t.dirty),a(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(w))}function j(t,n,r){const{fragment:c,on_mount:s,on_destroy:l,after_render:i}=t.$$;c.m(n,r),w(()=>{const n=s.map(e).filter(o);l?l.push(...n):a(n),t.$$.on_mount=[]}),i.forEach(w)}function _(t,e){t.$$.dirty||(p.push(t),m||(m=!0,$.then(x)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function N(e,o,r,c,s,l){const i=h;g(e);const u=o.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(i?i.$$.context:[]),callbacks:n(),dirty:null};let f=!1;var p;d.ctx=r?r(e,u,(t,n)=>{d.ctx&&s(d.ctx[t],d.ctx[t]=n)&&(d.bound[t]&&d.bound[t](n),f&&_(e,t))}):u,d.update(),f=!0,a(d.before_render),d.fragment=c(d.ctx),o.target&&(o.hydrate?d.fragment.l((p=o.target,Array.from(p.childNodes))):d.fragment.c(),o.intro&&e.$$.fragment.i&&e.$$.fragment.i(),j(e,o.target,o.anchor),x()),g(i)}class S{$destroy(){var e,n;n=!0,(e=this).$$&&(a(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function k(t,e,n){const a=Object.create(t);return a.menu=e[n],a.n=n,a}function E(t){var e,n,a,o,r,h=t.menu;function g(){return t.click_handler(t)}return{c(){var t,c,s,l;e=i("tr"),n=i("button"),a=u(h),o=d(),n.className="svelte-1ytadmw",c="click",s=g,(t=n).addEventListener(c,s,l),r=(()=>t.removeEventListener(c,s,l))},m(t,r){s(t,e,r),c(e,n),c(n,a),c(e,o)},p(e,n){t=n,e.Data&&h!==(h=t.menu)&&f(a,h)},d(t){t&&l(e),r()}}}function L(e){for(var n,a=e.Data,o=[],r=0;r<a.length;r+=1)o[r]=E(k(e,a,r));return{c(){n=i("table");for(var t=0;t<o.length;t+=1)o[t].c();n.className="svelte-1ytadmw"},m(t,e){s(t,n,e);for(var a=0;a<o.length;a+=1)o[a].m(n,null)},p(t,e){if(t.Data){a=e.Data;for(var r=0;r<a.length;r+=1){const c=k(e,a,r);o[r]?o[r].p(t,c):(o[r]=E(c),o[r].c(),o[r].m(n,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=a.length}},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function A(t,e,n){let{Data:a,changeSubject:o=(()=>{})}=e;return t.$set=(t=>{"Data"in t&&n("Data",a=t.Data),"changeSubject"in t&&n("changeSubject",o=t.changeSubject)}),{Data:a,changeSubject:o,click_handler:function({n:t}){return o(t)}}}class O extends S{constructor(t){super(),N(this,t,A,L,r,["Data","changeSubject"])}}function W(e){var n,a,o,r,h,g,p=e.data[e.choosen].title,$=e.data[e.choosen].data;return{c(){n=i("div"),a=i("h2"),o=u(p),r=d(),h=u($),n.dir="rtl",n.className="svelte-1qyfvay"},m(t,e){s(t,n,e),c(n,a),c(a,o),c(n,r),c(n,h),g=function(t){t.setAttribute("style",`width: ${window.innerWidth-40}px; height: ${window.innerHeight}px`)}.call(null,n)||{}},p(t,e){(t.data||t.choosen)&&p!==(p=e.data[e.choosen].title)&&f(o,p),(t.data||t.choosen)&&$!==($=e.data[e.choosen].data)&&f(h,$)},i:t,o:t,d(t){t&&l(n),g&&"function"==typeof g.destroy&&g.destroy()}}}function q(t,e,n){let{data:a,choosen:o}=e;return t.$set=(t=>{"data"in t&&n("data",a=t.data),"choosen"in t&&n("choosen",o=t.choosen)}),{data:a,choosen:o}}class C extends S{constructor(t){super(),N(this,t,q,W,r,["data","choosen"])}}function F(t){var e,n,a,o,r,u,f,h,g,p,$,m,v=new O({props:{changeSubject:t.changeSubject,Data:t.Data}}),b=new C({props:{data:t.data,choosen:t.choosen}});return{c(){var t,c,s;e=i("div"),n=i("input"),a=d(),(o=i("label")).innerHTML='<span class="pure-toggle-icon"></span>',r=d(),u=i("div"),v.$$.fragment.c(),f=d(),h=i("div"),g=i("div"),b.$$.fragment.c(),p=d(),$=i("label"),t=n,c="type",null==(s="checkbox")?t.removeAttribute(c):t.setAttribute(c,s),n.id="pure-toggle-left",n.className="pure-toggle",n.dataset.toggle="left",o.className="pure-toggle-label",o.htmlFor="pure-toggle-left",o.dataset.toggleLabel="left",u.className="pure-drawer svelte-157cix3",u.dataset.position="left",g.className="pure-pusher svelte-157cix3",h.className="pure-pusher-container svelte-157cix3",$.className="pure-overlay",$.htmlFor="pure-toggle-left",$.dataset.overlay="left",e.className="pure-container svelte-157cix3",e.dataset.effect="pure-effect-slide"},m(t,l){s(t,e,l),c(e,n),c(e,a),c(e,o),c(e,r),c(e,u),j(v,u,null),c(e,f),c(e,h),c(h,g),j(b,g,null),c(e,p),c(e,$),m=!0},p(t,e){var n={};t.changeSubject&&(n.changeSubject=e.changeSubject),t.Data&&(n.Data=e.Data),v.$set(n);var a={};t.data&&(a.data=e.data),t.choosen&&(a.choosen=e.choosen),b.$set(a)},i(t){m||(v.$$.fragment.i(t),b.$$.fragment.i(t),m=!0)},o(t){v.$$.fragment.o(t),b.$$.fragment.o(t),m=!1},d(t){t&&l(e),v.$destroy(),b.$destroy()}}}function H(t,e,n){let a=0;let o=window.getData();const r=[];for(let t in o)r.push(o[t].title);return window.addEventListener("resize",()=>{window.location.reload()}),window.onload=(()=>{"serviceWorker"in navigator&&"file"!==document.URL.split(":")[0]&&navigator.serviceWorker.register("./sw.js")}),{choosen:a,changeSubject:function(t){n("choosen",a=t)},data:o,Data:r}}return new class extends S{constructor(t){super(),N(this,t,H,F,r,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map