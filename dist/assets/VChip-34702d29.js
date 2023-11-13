import{r as K,M as Y,V as Ae}from"./VAvatar-89ad20fc.js";import{a as Z,d as b,M as q,aS as ve,Y as J,aT as z,y as V,C as O,$ as qe,A as B,z as pe,an as Q,aU as Qe,aE as ke,aV as ze,aW as $,aX as et,aY as Se,aZ as tt,a_ as Oe,a$ as ie,b0 as re,b1 as Te,b2 as nt,b3 as Ie,O as M,D as Ve,x as at,J as ot,b4 as je,aa as lt,b5 as it,aD as rt,m as Ee,aH as st,S as xe,G as Ce,U as we,b6 as ct,a0 as ut,X as G,aM as dt,b7 as ft,u as Pe,b8 as se,b9 as vt,a1 as ne,a3 as Ne,a2 as me,F as ye,ba as mt,K as U,bb as yt,aw as gt,Q as ht,R as We,aJ as Ge,T as bt,W as pt,Z as kt,E as ce,aG as Be,ae as St,af as Et,a4 as xt,a5 as Ct,a6 as wt,aI as Pt,as as At,H as Ot,ai as Tt,aL as It,aj as Vt,a8 as Bt,a9 as Lt,bc as Ft,a7 as Dt,aK as Rt,aN as Mt,V as te}from"./index-d8bdc496.js";import{c as X,d as $t,s as ge,e as Ht,n as Ue,B as ue,g as Le,b as _t}from"./VCounter-f846fe82.js";import{m as qt,u as zt}from"./lazy-93080ec6.js";import{a as oe,h as jt,g as Nt}from"./getScrollParent-7b3d9385.js";import{m as Wt,M as Gt}from"./VImg-d0ac8ec7.js";import{C as Ut}from"./index-a4fb869b.js";import{a as Xt}from"./index-3dc29f8e.js";function Kt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Yt=Z()({name:"VDialogTransition",props:{target:Object},setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,c){var m;await new Promise(h=>requestAnimationFrame(h)),await new Promise(h=>requestAnimationFrame(h)),a.style.visibility="";const{x:r,y:l,sx:u,sy:d,speed:s}=De(e.target,a),v=X(a,[{transform:`translate(${r}px, ${l}px) scale(${u}, ${d})`,opacity:0},{}],{duration:225*s,easing:$t});(m=Fe(a))==null||m.forEach(h=>{X(h,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:ge})}),v.finished.then(()=>c())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,c){var m;await new Promise(h=>requestAnimationFrame(h));const{x:r,y:l,sx:u,sy:d,speed:s}=De(e.target,a);X(a,[{},{transform:`translate(${r}px, ${l}px) scale(${u}, ${d})`,opacity:0}],{duration:125*s,easing:Ht}).finished.then(()=>c()),(m=Fe(a))==null||m.forEach(h=>{X(h,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:ge})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?b(ve,q({name:"dialog-transition"},o,{css:!1}),t):b(ve,{name:"dialog-transition"},t)}});function Fe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function De(e,n){const t=e.getBoundingClientRect(),o=Ue(n),[a,c]=getComputedStyle(n).transformOrigin.split(" ").map(S=>parseFloat(S)),[r,l]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;r==="left"||l==="left"?u-=t.width/2:(r==="right"||l==="right")&&(u+=t.width/2);let d=t.top+t.height/2;r==="top"||l==="top"?d-=t.height/2:(r==="bottom"||l==="bottom")&&(d+=t.height/2);const s=t.width/o.width,v=t.height/o.height,m=Math.max(1,s,v),h=s/m||0,g=v/m||0,y=o.width*o.height/(window.innerWidth*window.innerHeight),f=y>.12?Math.min(1.5,(y-.12)*10+1):1;return{x:u-(a+o.left),y:d-(c+o.top),sx:h,sy:g,speed:f}}function On(e){return K({url:"/order",headers:{"Content-Type":"application/json"},method:Y.POST,needToken:!0,data:e})}function Tn(){return K({url:"/cart",headers:{"Content-Type":"application/json"},method:Y.GET,needToken:!0})}function In(e){return K({url:"/order",headers:{"Content-Type":"application/json"},method:Y.GET,needToken:!0,params:e})}function Vn(e){return K({url:"/cart",headers:{"Content-Type":"application/json"},method:Y.POST,needToken:!0,data:e})}function Bn(e){return K({url:`/order/${e}/cancel`,headers:{"Content-Type":"application/json"},method:Y.PUT,needToken:!0})}const Zt=J({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Jt(e,n){const t={},o=a=>()=>{if(!z)return Promise.resolve(!0);const c=a==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(r=>{const l=parseInt(e[a]??0,10);t[a]=window.setTimeout(()=>{n==null||n(c),r(c)},l)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const Qt=Symbol.for("vuetify:v-menu"),en=J({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Zt()},"v-overlay-activator");function tn(e,n){let{isActive:t,isTop:o}=n;const a=V();let c=!1,r=!1,l=!0;const u=O(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=O(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:s,runCloseDelay:v}=Jt(e,i=>{i===(e.openOnHover&&c||u.value&&r)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==i&&(l=!0),t.value=i)}),m={click:i=>{i.stopPropagation(),a.value=i.currentTarget||i.target,t.value=!t.value},mouseenter:i=>{var I;(I=i.sourceCapabilities)!=null&&I.firesTouchEvents||(c=!0,a.value=i.currentTarget||i.target,s())},mouseleave:i=>{c=!1,v()},focus:i=>{et&&!i.target.matches(":focus-visible")||(r=!0,i.stopPropagation(),a.value=i.currentTarget||i.target,s())},blur:i=>{r=!1,i.stopPropagation(),v()}},h=O(()=>{const i={};return d.value&&(i.click=m.click),e.openOnHover&&(i.mouseenter=m.mouseenter,i.mouseleave=m.mouseleave),u.value&&(i.focus=m.focus,i.blur=m.blur),i}),g=O(()=>{const i={};if(e.openOnHover&&(i.mouseenter=()=>{c=!0,s()},i.mouseleave=()=>{c=!1,v()}),e.closeOnContentClick){const I=qe(Qt,null);i.click=()=>{t.value=!1,I==null||I.closeParents()}}return i}),y=O(()=>{const i={};return e.openOnHover&&(i.mouseenter=()=>{l&&(c=!0,l=!1,s())},i.mouseleave=()=>{c=!1,v()}),i});B(o,i=>{i&&(e.openOnHover&&!c&&(!u.value||!r)||u.value&&!r&&(!e.openOnHover||!c))&&(t.value=!1)});const f=V();pe(()=>{f.value&&Q(()=>{const i=f.value;a.value=Qe(i)?i.$el:i})});const S=ke("useActivator");let x;return B(()=>!!e.activator,i=>{i&&z?(x=ze(),x.run(()=>{nn(e,S,{activatorEl:a,activatorEvents:h})})):x&&x.stop()},{flush:"post",immediate:!0}),$(()=>{x==null||x.stop()}),{activatorEl:a,activatorRef:f,activatorEvents:h,contentEvents:g,scrimEvents:y}}function nn(e,n,t){let{activatorEl:o,activatorEvents:a}=t;B(()=>e.activator,(u,d)=>{if(d&&u!==d){const s=l(d);s&&r(s)}u&&Q(()=>c())},{immediate:!0}),B(()=>e.activatorProps,()=>{c()}),$(()=>{r()});function c(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(a.value).forEach(s=>{let[v,m]=s;u.addEventListener(v,m)}),Object.keys(d).forEach(s=>{d[s]==null?u.removeAttribute(s):u.setAttribute(s,d[s])}))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(a.value).forEach(s=>{let[v,m]=s;u.removeEventListener(v,m)}),Object.keys(d).forEach(s=>{u.removeAttribute(s)}))}function l(){var s,v;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,d;if(u)if(u==="parent"){let m=(v=(s=n==null?void 0:n.proxy)==null?void 0:s.$el)==null?void 0:v.parentNode;for(;m.hasAttribute("data-no-activator");)m=m.parentNode;d=m}else typeof u=="string"?d=document.querySelector(u):"$el"in u?d=u.$el:d=u;return o.value=(d==null?void 0:d.nodeType)===Node.ELEMENT_NODE?d:null,o.value}}function de(e,n){return{x:e.x+n.x,y:e.y+n.y}}function an(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Re(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,c=t==="top"?0:t==="bottom"?n.height:t;return de({x:a,y:c},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,c=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return de({x:a,y:c},n)}return de({x:n.width/2,y:n.height/2},n)}const Xe={static:rn,connected:cn},on=J({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Xe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function ln(e,n){const t=V({}),o=V();z&&(Se(()=>!!(n.isActive.value&&e.locationStrategy),c=>{var r,l;B(()=>e.locationStrategy,c),$(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(r=e.locationStrategy(n,e,t))==null?void 0:r.updateLocation:o.value=(l=Xe[e.locationStrategy](n,e,t))==null?void 0:l.updateLocation}),window.addEventListener("resize",a,{passive:!0}),$(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(c){var r;(r=o.value)==null||r.call(o,c)}return{contentStyles:t,updateLocation:o}}function rn(){}function sn(e,n){const t=Ue(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function cn(e,n,t){Kt(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:c}=tt(()=>{const g=Oe(n.location,e.isRtl.value),y=n.origin==="overlap"?g:n.origin==="auto"?ie(g):Oe(n.origin,e.isRtl.value);return g.side===y.side&&g.align===re(y).align?{preferredAnchor:Te(g),preferredOrigin:Te(y)}:{preferredAnchor:g,preferredOrigin:y}}),[r,l,u,d]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>O(()=>{const y=parseFloat(n[g]);return isNaN(y)?1/0:y})),s=O(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const g=n.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let v=!1;const m=new ResizeObserver(()=>{v&&h()});B([e.activatorEl,e.contentEl],(g,y)=>{let[f,S]=g,[x,i]=y;x&&m.unobserve(x),f&&m.observe(f),i&&m.unobserve(i),S&&m.observe(S)},{immediate:!0}),$(()=>{m.disconnect()});function h(){if(v=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>v=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const g=e.activatorEl.value.getBoundingClientRect(),y=sn(e.contentEl.value,e.isRtl.value),f=oe(e.contentEl.value),S=12;f.length||(f.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(y.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),y.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=f.reduce((w,C)=>{const p=C.getBoundingClientRect(),k=new ue({x:C===document.documentElement?0:p.x,y:C===document.documentElement?0:p.y,width:C.clientWidth,height:C.clientHeight});return w?new ue({x:Math.max(w.left,k.left),y:Math.max(w.top,k.top),width:Math.min(w.right,k.right)-Math.max(w.left,k.left),height:Math.min(w.bottom,k.bottom)-Math.max(w.top,k.top)}):k},void 0);x.x+=S,x.y+=S,x.width-=S*2,x.height-=S*2;let i={anchor:a.value,origin:c.value};function I(w){const C=new ue(y),p=Re(w.anchor,g),k=Re(w.origin,C);let{x:T,y:R}=an(p,k);switch(w.anchor.side){case"top":R-=s.value[0];break;case"bottom":R+=s.value[0];break;case"left":T-=s.value[0];break;case"right":T+=s.value[0];break}switch(w.anchor.align){case"top":R-=s.value[1];break;case"bottom":R+=s.value[1];break;case"left":T-=s.value[1];break;case"right":T+=s.value[1];break}return C.x+=T,C.y+=R,C.width=Math.min(C.width,u.value),C.height=Math.min(C.height,d.value),{overflows:Le(C,x),x:T,y:R}}let L=0,H=0;const P={x:0,y:0},F={x:!1,y:!1};let j=-1;for(;;){if(j++>10){nt("Infinite loop detected in connectedLocationStrategy");break}const{x:w,y:C,overflows:p}=I(i);L+=w,H+=C,y.x+=w,y.y+=C;{const k=Ie(i.anchor),T=p.x.before||p.x.after,R=p.y.before||p.y.after;let N=!1;if(["x","y"].forEach(A=>{if(A==="x"&&T&&!F.x||A==="y"&&R&&!F.y){const E={anchor:{...i.anchor},origin:{...i.origin}},_=A==="x"?k==="y"?re:ie:k==="y"?ie:re;E.anchor=_(E.anchor),E.origin=_(E.origin);const{overflows:ee}=I(E);(ee[A].before<=p[A].before&&ee[A].after<=p[A].after||ee[A].before+ee[A].after<(p[A].before+p[A].after)/2)&&(i=E,N=F[A]=!0)}}),N)continue}p.x.before&&(L+=p.x.before,y.x+=p.x.before),p.x.after&&(L-=p.x.after,y.x-=p.x.after),p.y.before&&(H+=p.y.before,y.y+=p.y.before),p.y.after&&(H-=p.y.after,y.y-=p.y.after);{const k=Le(y,x);P.x=x.width-k.x.before-k.x.after,P.y=x.height-k.y.before-k.y.after,L+=k.x.before,y.x+=k.x.before,H+=k.y.before,y.y+=k.y.before}break}const D=Ie(i.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${i.anchor.side} ${i.anchor.align}`,transformOrigin:`${i.origin.side} ${i.origin.align}`,top:M(fe(H)),left:e.isRtl.value?void 0:M(fe(L)),right:e.isRtl.value?M(fe(-L)):void 0,minWidth:M(D==="y"?Math.min(r.value,g.width):r.value),maxWidth:M(Me(Ve(P.x,r.value===1/0?0:r.value,u.value))),maxHeight:M(Me(Ve(P.y,l.value===1/0?0:l.value,d.value)))}),{available:P,contentBox:y}}return B(()=>[a.value,c.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>h()),Q(()=>{const g=h();if(!g)return;const{available:y,contentBox:f}=g;f.height>y.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function fe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Me(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let he=!0;const le=[];function un(e){!he||le.length?(le.push(e),be()):(he=!1,e(),be())}let $e=-1;function be(){cancelAnimationFrame($e),$e=requestAnimationFrame(()=>{const e=le.shift();e&&e(),le.length?be():he=!0})}const ae={none:null,close:vn,block:mn,reposition:yn},dn=J({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ae}},"v-overlay-scroll-strategies");function fn(e,n){if(!z)return;let t;pe(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=ze(),await Q(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=ae[e.scrollStrategy])==null||o.call(ae,n,e,t)}))}),$(()=>{t==null||t.stop()})}function vn(e){function n(t){e.isActive.value=!1}Ke(e.activatorEl.value??e.contentEl.value,n)}function mn(e,n){var r;const t=(r=e.root.value)==null?void 0:r.offsetParent,o=[...new Set([...oe(e.activatorEl.value,n.contained?t:void 0),...oe(e.contentEl.value,n.contained?t:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,c=(l=>jt(l)&&l)(t||document.documentElement);c&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((l,u)=>{l.style.setProperty("--v-body-scroll-x",M(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",M(-l.scrollTop)),l.style.setProperty("--v-scrollbar-offset",M(a)),l.classList.add("v-overlay-scroll-blocked")}),$(()=>{o.forEach((l,u)=>{const d=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-d,l.scrollTop=-s}),c&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function yn(e,n,t){let o=!1,a=-1,c=-1;function r(l){un(()=>{var s,v;const u=performance.now();(v=(s=e.updateLocation).value)==null||v.call(s,l),o=(performance.now()-u)/(1e3/60)>2})}c=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{t.run(()=>{Ke(e.activatorEl.value??e.contentEl.value,l=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{r(l)})})):r(l)})})}),$(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(c),cancelAnimationFrame(a)})}function Ke(e,n){const t=[document,...oe(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),$(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}function gn(){if(!z)return V(!1);const{ssr:e}=at();if(e){const n=V(!1);return ot(()=>{n.value=!0}),n}else return V(!0)}function Ye(){const n=ke("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const He=Symbol.for("vuetify:stack"),W=je([]);function hn(e,n,t){const o=ke("useStack"),a=!t,c=qe(He,void 0),r=je({activeChildren:new Set});lt(He,r);const l=V(+n.value);Se(e,()=>{var v;const s=(v=W.at(-1))==null?void 0:v[1];l.value=s?s+10:+n.value,a&&W.push([o.uid,l.value]),c==null||c.activeChildren.add(o.uid),$(()=>{if(a){const m=rt(W).findIndex(h=>h[0]===o.uid);W.splice(m,1)}c==null||c.activeChildren.delete(o.uid)})});const u=V(!0);a&&pe(()=>{var v;const s=((v=W.at(-1))==null?void 0:v[0])===o.uid;setTimeout(()=>u.value=s)});const d=O(()=>!r.activeChildren.size);return{globalTop:it(u),localTop:d,stackStyles:O(()=>({zIndex:l.value}))}}function bn(e){return{teleportTarget:O(()=>{const t=e.value;if(t===!0||!z)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function pn(e){const{modelValue:n,color:t,...o}=e;return b(ve,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&b("div",q({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Ze=J({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...en(),...Ee(),...st(),...qt(),...on(),...dn(),...xe(),...Wt()},"v-overlay"),_e=Z()({name:"VOverlay",directives:{ClickOutside:Ut},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ze()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const c=Ce(e,"modelValue"),r=O({get:()=>c.value,set:E=>{E&&e.disabled||(c.value=E)}}),{teleportTarget:l}=bn(O(()=>e.attach||e.contained)),{themeClasses:u}=we(e),{rtlClasses:d,isRtl:s}=ct(),{hasContent:v,onAfterLeave:m}=zt(e,r),h=ut(O(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:g,localTop:y,stackStyles:f}=hn(r,G(e,"zIndex"),e._disableGlobalStack),{activatorEl:S,activatorRef:x,activatorEvents:i,contentEvents:I,scrimEvents:L}=tn(e,{isActive:r,isTop:y}),{dimensionStyles:H}=dt(e),P=gn(),{scopeId:F}=Ye();B(()=>e.disabled,E=>{E&&(r.value=!1)});const j=V(),D=V(),{contentStyles:w,updateLocation:C}=ln(e,{isRtl:s,contentEl:D,activatorEl:S,isActive:r});fn(e,{root:j,contentEl:D,activatorEl:S,isActive:r,updateLocation:C});function p(E){a("click:outside",E),e.persistent?A():r.value=!1}function k(){return r.value&&g.value}z&&B(r,E=>{E?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(E){E.key==="Escape"&&g.value&&(e.persistent?A():r.value=!1)}const R=ft();Se(()=>e.closeOnBack,()=>{mt(R,E=>{g.value&&r.value?(E(!1),e.persistent?A():r.value=!1):E()})});const N=V();B(()=>r.value&&(e.absolute||e.contained)&&l.value==null,E=>{if(E){const _=Nt(j.value);_&&_!==document.scrollingElement&&(N.value=_.scrollTop)}});function A(){e.noClickAnimation||D.value&&X(D.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ge})}return Pe(()=>{var E;return b(ye,null,[(E=t.activator)==null?void 0:E.call(t,{isActive:r.value,props:q({ref:x},se(i.value),e.activatorProps)}),P.value&&b(vt,{disabled:!l.value,to:l.value},{default:()=>[v.value&&b("div",q({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},u.value,d.value,e.class],style:[f.value,{top:M(N.value)},e.style],ref:j},F,o),[b(pn,q({color:h,modelValue:r.value&&!!e.scrim},se(L.value)),null),b(Gt,{appear:!0,persisted:!0,transition:e.transition,target:S.value,onAfterLeave:()=>{m(),a("afterLeave")}},{default:()=>{var _;return[ne(b("div",q({ref:D,class:["v-overlay__content",e.contentClass],style:[H.value,w.value]},se(I.value),e.contentProps),[(_=t.default)==null?void 0:_.call(t,{isActive:r})]),[[Ne,r.value],[me("click-outside"),{handler:p,closeConditional:k,include:()=>[S.value]}]])]}})])]})])}),{activatorEl:S,animateClick:A,contentEl:D,globalTop:g,localTop:y,updateLocation:C}}}),Ln=Z()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Ze({origin:"center center",scrollStrategy:"block",transition:{component:Yt},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Ce(e,"modelValue"),{scopeId:a}=Ye(),c=V();function r(u){var v,m;const d=u.relatedTarget,s=u.target;if(d!==s&&((v=c.value)!=null&&v.contentEl)&&((m=c.value)!=null&&m.globalTop)&&![document,c.value.contentEl].includes(s)&&!c.value.contentEl.contains(s)){const h=yt(c.value.contentEl);if(!h.length)return;const g=h[0],y=h[h.length-1];d===g?y.focus():g.focus()}}z&&B(()=>o.value&&e.retainFocus,u=>{u?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)},{immediate:!0}),B(o,async u=>{var d,s;await Q(),u?(d=c.value.contentEl)==null||d.focus({preventScroll:!0}):(s=c.value.activatorEl)==null||s.focus({preventScroll:!0})});const l=O(()=>q({"aria-haspopup":"dialog","aria-expanded":String(o.value)},e.activatorProps));return Pe(()=>{const[u]=_e.filterProps(e);return b(_e,q({ref:c,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},u,{modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,"aria-modal":"true",activatorProps:l.value,role:"dialog"},a),{activator:t.activator,default:function(){for(var d=arguments.length,s=new Array(d),v=0;v<d;v++)s[v]=arguments[v];return b(U,{root:!0},{default:()=>{var m;return[(m=t.default)==null?void 0:m.call(t,...s)]}})}})}),_t({},c)}});const Je=Symbol.for("vuetify:v-chip-group");Z()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:gt},...Ee(),...ht({selectedClass:"v-chip--selected"}),...We(),...xe(),...Ge({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=we(e),{isSelected:a,select:c,next:r,prev:l,selected:u}=bt(e,Je);return pt({VChip:{color:G(e,"color"),disabled:G(e,"disabled"),filter:G(e,"filter"),variant:G(e,"variant")}}),Pe(()=>b(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,{isSelected:a,select:c,next:r,prev:l,selected:u.value})]}})),{}}});const Fn=Z()({name:"VChip",directives:{Ripple:kt},props:{activeClass:String,appendAvatar:String,appendIcon:ce,closable:Boolean,closeIcon:{type:ce,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:ce,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Be(),onClickOnce:Be(),...St(),...Ee(),...Et(),...xt(),...Ct(),...wt(),...Pt(),...At(),...We({tag:"span"}),...xe(),...Ge({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:t,emit:o,slots:a}=n;const{t:c}=Ot(),{borderClasses:r}=Tt(e),{colorClasses:l,colorStyles:u,variantClasses:d}=It(e),{densityClasses:s}=Vt(e),{elevationClasses:v}=Bt(e),{roundedClasses:m}=Lt(e),{sizeClasses:h}=Ft(e),{themeClasses:g}=we(e),y=Ce(e,"modelValue"),f=Dt(e,Je,!1),S=Rt(e,t),x=O(()=>e.link!==!1&&S.isLink.value),i=O(()=>!e.disabled&&e.link!==!1&&(!!f||e.link||S.isClickable.value)),I=O(()=>({"aria-label":c(e.closeLabel),onClick(P){y.value=!1,o("click:close",P)}}));function L(P){var F;o("click",P),i.value&&((F=S.navigate)==null||F.call(S,P),f==null||f.toggle())}function H(P){(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),L(P))}return()=>{const P=S.isLink.value?"a":e.tag,F=!!(e.appendIcon||e.appendAvatar),j=!!(F||a.append),D=!!(a.close||e.closable),w=!!(a.filter||e.filter)&&f,C=!!(e.prependIcon||e.prependAvatar),p=!!(C||a.prepend),k=!f||f.isSelected.value;return y.value&&ne(b(P,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":w,"v-chip--pill":e.pill},g.value,r.value,k?l.value:void 0,s.value,v.value,m.value,h.value,d.value,f==null?void 0:f.selectedClass.value,e.class],style:[k?u.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:S.href.value,tabindex:i.value?0:void 0,onClick:L,onKeydown:i.value&&!x.value&&H},{default:()=>{var T;return[Mt(i.value,"v-chip"),w&&b(Xt,{key:"filter"},{default:()=>[ne(b("div",{class:"v-chip__filter"},[a.filter?ne(b(U,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[me("slot"),a.filter,"default"]]):b(te,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ne,f.isSelected.value]])]}),p&&b("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?b(U,{key:"prepend-defaults",disabled:!C,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):b(ye,null,[e.prependIcon&&b(te,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&b(Ae,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((T=a.default)==null?void 0:T.call(a,{isSelected:f==null?void 0:f.isSelected.value,selectedClass:f==null?void 0:f.selectedClass.value,select:f==null?void 0:f.select,toggle:f==null?void 0:f.toggle,value:f==null?void 0:f.value.value,disabled:e.disabled}))??e.text,j&&b("div",{key:"append",class:"v-chip__append"},[a.append?b(U,{key:"append-defaults",disabled:!F,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):b(ye,null,[e.appendIcon&&b(te,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&b(Ae,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),D&&b("div",q({key:"close",class:"v-chip__close"},I.value),[a.close?b(U,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):b(te,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[me("ripple"),i.value&&e.ripple,null]])}}});export{Ln as V,Vn as a,Fn as b,Bn as c,Tn as d,Yt as e,Qt as f,In as g,_e as h,Ze as m,On as o,Ye as u};