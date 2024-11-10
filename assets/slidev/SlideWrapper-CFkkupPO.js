import{t as k,z as P,B as b,R as Xt,U as dt,aA as Qt,N as Rt,y as Jt,n as Wt,E as te,d as xt,o as j,b as B,g as st,aB as ee,aC as se,aD as F,K as ne,e as Q,f as Pt,h as et,F as re,l as gt,$ as ie,x as ae,v as oe,ag as le,c as he,a0 as ue,i as ce}from"../modules/vue-Bf5brfQp.js";import{Q as jt,a as Ot,v as mt,Z as ft,$ as Et,a0 as de,Y as fe,a1 as V,a2 as pe,a3 as ge,a4 as Mt,K as $t,z as Ct,A as kt,R as me,a5 as ve,_ as Ut,a6 as ye,a7 as _e,a8 as xe,a9 as we,aa as Se,ab as be,ac as Pe}from"../index-BhC9N_uN.js";import{A as Ee}from"../modules/unplugin-icons-Dj6ip7Q3.js";import{u as Me}from"./context-D5j8jOeb.js";function $e(t){var e;return{info:k(((e=jt(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const pt={};function $s(t){function e(s){return pt[s]??(pt[s]=$e(s))}return{info:P({get(){return e(b(t)).info.value},set(s){e(b(t)).info.value=s}}),update:async(s,n)=>{const r=e(n??b(t)),i=await r.update(s);return i&&(r.info.value=i),i}}}var Ce=Object.defineProperty,Lt=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Dt=(t,e,s)=>e in t?Ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,vt=(t,e)=>{for(var s in e||(e={}))ke.call(e,s)&&Dt(t,s,e[s]);if(Lt)for(var s of Lt(e))Le.call(e,s)&&Dt(t,s,e[s]);return t},De=()=>({emit(t,...e){for(let s=0,n=this.events[t]||[],r=n.length;s<r;s++)n[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(r=>e!==r)}}});function Nt(t,e,s,n=r=>r){return t*n(.5-e*(.5-s))}function Ne(t){return[-t[0],-t[1]]}function C(t,e){return[t[0]+e[0],t[1]+e[1]]}function E(t,e){return[t[0]-e[0],t[1]-e[1]]}function $(t,e){return[t[0]*e,t[1]*e]}function Ie(t,e){return[t[0]/e,t[1]/e]}function Y(t){return[t[1],-t[0]]}function It(t,e){return t[0]*e[0]+t[1]*e[1]}function Ae(t,e){return t[0]===e[0]&&t[1]===e[1]}function Fe(t){return Math.hypot(t[0],t[1])}function Te(t){return t[0]*t[0]+t[1]*t[1]}function At(t,e){return Te(E(t,e))}function Bt(t){return Ie(t,Fe(t))}function Ke(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function Z(t,e,s){let n=Math.sin(s),r=Math.cos(s),i=t[0]-e[0],o=t[1]-e[1],a=i*r-o*n,l=i*n+o*r;return[a+e[0],l+e[1]]}function yt(t,e,s){return C(t,$(E(e,t),s))}function Ft(t,e,s){return C(t,$(e,s))}var{min:U,PI:ze}=Math,Tt=.275,X=ze+1e-4;function Re(t,e={}){let{size:s=16,smoothing:n=.5,thinning:r=.5,simulatePressure:i=!0,easing:o=u=>u,start:a={},end:l={},last:p=!1}=e,{cap:m=!0,easing:y=u=>u*(2-u)}=a,{cap:_=!0,easing:f=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,c=a.taper===!1?0:a.taper===!0?Math.max(s,d):a.taper,M=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,O=Math.pow(s*n,2),D=[],h=[],x=t.slice(0,10).reduce((u,S)=>{let g=S.pressure;if(i){let v=U(1,S.distance/s),ht=U(1,1-v);g=U(1,u+(ht-u)*(v*Tt))}return(u+g)/2},t[0].pressure),w=Nt(s,r,t[t.length-1].pressure,o),it,at=t[0].vector,q=t[0].point,J=q,K=q,z=J,ot=!1;for(let u=0;u<t.length;u++){let{pressure:S}=t[u],{point:g,vector:v,distance:ht,runningLength:H}=t[u];if(u<t.length-1&&d-H<3)continue;if(r){if(i){let A=U(1,ht/s),ct=U(1,1-A);S=U(1,x+(ct-x)*(A*Tt))}w=Nt(s,r,S,o)}else w=s/2;it===void 0&&(it=w);let Ht=H<c?y(H/c):1,Yt=d-H<M?f((d-H)/M):1;w=Math.max(.01,w*Math.min(Ht,Yt));let wt=(u<t.length-1?t[u+1]:t[u]).vector,ut=u<t.length-1?It(v,wt):1,Zt=It(v,at)<0&&!ot,St=ut!==null&&ut<0;if(Zt||St){let A=$(Y(at),w);for(let ct=1/13,tt=0;tt<=1;tt+=ct)K=Z(E(g,A),g,X*tt),D.push(K),z=Z(C(g,A),g,X*-tt),h.push(z);q=K,J=z,St&&(ot=!0);continue}if(ot=!1,u===t.length-1){let A=$(Y(v),w);D.push(E(g,A)),h.push(C(g,A));continue}let bt=$(Y(yt(wt,v,ut)),w);K=E(g,bt),(u<=1||At(q,K)>O)&&(D.push(K),q=K),z=C(g,bt),(u<=1||At(J,z)>O)&&(h.push(z),J=z),x=S,at=v}let N=t[0].point.slice(0,2),I=t.length>1?t[t.length-1].point.slice(0,2):C(t[0].point,[1,1]),lt=[],W=[];if(t.length===1){if(!(c||M)||p){let u=Ft(N,Bt(Y(E(N,I))),-(it||w)),S=[];for(let g=1/13,v=g;v<=1;v+=g)S.push(Z(u,N,X*2*v));return S}}else{if(!(c||M&&t.length===1))if(m)for(let S=1/13,g=S;g<=1;g+=S){let v=Z(h[0],N,X*g);lt.push(v)}else{let S=E(D[0],h[0]),g=$(S,.5),v=$(S,.51);lt.push(E(N,g),E(N,v),C(N,v),C(N,g))}let u=Y(Ne(t[t.length-1].vector));if(M||c&&t.length===1)W.push(I);else if(_){let S=Ft(I,u,w);for(let g=1/29,v=g;v<1;v+=g)W.push(Z(S,I,X*3*v))}else W.push(C(I,$(u,w)),C(I,$(u,w*.99)),E(I,$(u,w*.99)),E(I,$(u,w)))}return D.concat(W,h.reverse(),lt)}function je(t,e={}){var s;let{streamline:n=.5,size:r=16,last:i=!1}=e;if(t.length===0)return[];let o=.15+(1-n)*.85,a=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:c=.5})=>[f,d,c]);if(a.length===2){let f=a[1];a=a.slice(0,-1);for(let d=1;d<5;d++)a.push(yt(a[0],f,d/4))}a.length===1&&(a=[...a,[...C(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,m=0,y=l[0],_=a.length-1;for(let f=1;f<a.length;f++){let d=i&&f===_?a[f].slice(0,2):yt(y.point,a[f],o);if(Ae(y.point,d))continue;let c=Ke(d,y.point);if(m+=c,f<_&&!p){if(m<r)continue;p=!0}y={point:d,pressure:a[f][2]>=0?a[f][2]:.5,vector:Bt(E(y.point,d)),distance:c,runningLength:m},l.push(y)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function Oe(t,e={}){return Re(je(t,e),e)}function nt(t,e){return t-e}function Ue(t){return t<0?-1:1}function rt(t){return[Math.abs(t),Ue(t)]}function Vt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Be=2,L=Be,G=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const r=this.drauu.el,i=(e=this.drauu.options.coordinateScale)!=null?e:1,o=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-a.left+o.x)*i,y:(t.pageY-a.top+o.y)*i,pressure:t.pressure}}else{const a=this.drauu.svgPoint;a.x=t.clientX+o.x,a.y=t.clientY+o.y;const l=a.matrixTransform((n=r.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*i,y:l.y*i,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),r=e?vt(vt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=r.fill)!=null?s:"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(L))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Ve=class Gt extends G{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return Gt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=Oe(e,vt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const r=n.reduce((i,[o,a],l,p)=>{const[m,y]=p[(l+1)%p.length];return i.push(o,a,(o+m)/2,(a+y)/2),i},["M",...n[0],"Q"]);return r.push("Z"),r.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}},Ge=class extends G{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=rt(t.x-this.start.x),[n,r]=rt(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(nt),[a,l]=[this.start.y,this.start.y+n*r].sort(nt);this.attr("cx",(i+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-i)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function qt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(r),s.appendChild(n),s}var qe=class extends G{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Vt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(qt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let i=n/r;i=Math.round(i),Math.abs(i)<=1?(e=this.start.x+r*i,s=this.start.y+r):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},He=class extends G{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=rt(t.x-this.start.x),[n,r]=rt(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(nt),[a,l]=[this.start.y,this.start.y+n*r].sort(nt);this.attr("x",i),this.attr("y",a),this.attr("width",o-i),this.attr("height",l-a)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ye(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function Ze(t,e,s){let n=e.x,r=e.y,i=s.x-n,o=s.y-r;if(i!==0||o!==0){const a=((t.x-n)*i+(t.y-r)*o)/(i*i+o*o);a>1?(n=s.x,r=s.y):a>0&&(n+=i*a,r+=o*a)}return i=t.x-n,o=t.y-r,i*i+o*o}function Xe(t,e){let s=t[0];const n=[s];let r;for(let i=1,o=t.length;i<o;i++)r=t[i],Ye(r,s)>e&&(n.push(r),s=r);return s!==r&&r&&n.push(r),n}function _t(t,e,s,n,r){let i=n,o=0;for(let a=e+1;a<s;a++){const l=Ze(t[a],t[e],t[s]);l>i&&(o=a,i=l)}i>n&&(o-e>1&&_t(t,e,o,n,r),r.push(t[o]),s-o>1&&_t(t,o,s,n,r))}function Qe(t,e){const s=t.length-1,n=[t[0]];return _t(t,0,s,e,n),n.push(t[s]),n}function Kt(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:Xe(t,n),t=Qe(t,n),t}var Je=class R extends G{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Vt();const s=qt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Kt(this.points,1,!0),this.count=0),this.attr("d",R.toSvgData(this.points)),!0}onEnd(){const e=this.el;if(this.el=null,!e)return!1;if(e.setAttribute("d",R.toSvgData(Kt(this.points,1,!0))),!e.getTotalLength()){const{x:s,y:n}=this.points[0],r=this.brush.size/2;e.setAttribute("d",`M ${s-r} ${n} a ${r},${r} 0 1,0 ${r*2},0 a ${r},${r} 0 1,0 ${-r*2},0`),e.setAttribute("fill",this.brush.color),e.setAttribute("stroke-width","0")}return!0}static line(e,s){const n=s.x-e.x,r=s.y-e.y;return{length:Math.sqrt(n**2+r**2),angle:Math.atan2(r,n)}}static controlPoint(e,s,n,r){const i=s||e,o=n||e,a=.2,l=R.line(i,o),p=l.angle+(r?Math.PI:0),m=l.length*a,y=e.x+Math.cos(p)*m,_=e.y+Math.sin(p)*m;return{x:y,y:_}}static bezierCommand(e,s,n){const r=R.controlPoint(n[s-1],n[s-2],e),i=R.controlPoint(e,n[s-1],n[s+1],!0);return`C ${r.x.toFixed(L)},${r.y.toFixed(L)} ${i.x.toFixed(L)},${i.y.toFixed(L)} ${e.x.toFixed(L)},${e.y.toFixed(L)}`}static toSvgData(e){return e.reduce((s,n,r,i)=>r===0?`M ${n.x.toFixed(L)},${n.y.toFixed(L)}`:`${s} ${R.bezierCommand(n,r,i)}`,"")}},We=class extends G{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const i=s[r];if(i.getTotalLength){const o=i.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=i.getPointAtLength(o*a/this.pathSubFactor),p=i.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:p.x,y1:l.y,y2:p.y,segment:a,element:n||i})}}else i.children&&e(i.children,i)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,r=e.x1,i=e.x2,o=t.y1,a=t.y2,l=e.y1,p=e.y2,m=(s-n)*(l-p)-(o-a)*(r-i),y=(s*a-o*n)*(r-i)-(s-n)*(r*p-l*i),_=(s*a-o*n)*(l-p)-(o-a)*(r*p-l*i),f=(d,c,M)=>d>=c&&d<=M?!0:d>=M&&d<=c;if(m===0)return!1;{const d={x:y/m,y:_/m};return f(d.x,s,n)&&f(d.y,o,a)&&f(d.x,r,i)&&f(d.y,l,p)}}};function ts(t){return{draw:new Je(t),stylus:new Ve(t),line:new qe(t),rectangle:new He(t),ellipse:new Ge(t),eraseLine:new We(t)}}var es=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=De(),this._originalPointerId=null,this._models=ts(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,r=this.eventStart.bind(this),i=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),s.addEventListener("pointermove",i,{passive:!1}),s.addEventListener("pointerup",o,{passive:!1}),s.addEventListener("pointercancel",o,{passive:!1}),s.addEventListener("keydown",a,!1),s.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),s.removeEventListener("pointermove",i),s.removeEventListener("pointerup",o),s.removeEventListener("pointercancel",o),s.removeEventListener("keydown",a,!1),s.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this._elements=[],this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function ss(t){return new es(t)}const ns=Xt(()=>{const{currentSlideNo:t,isPresenter:e}=Ot(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=dt("slidev-drawing-enabled",!1),r=dt("slidev-drawing-pinned",!1),i=Qt(dt("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),o=k(!1),a=k(!1),l=k(!1),p=k(!1),m=k("stylus"),y=P(()=>mt.drawings.syncAll||e.value);let _=!1;const f=P({get(){return m.value},set(h){m.value=h,h==="arrow"?(c.mode="line",i.arrowEnd=!0):(c.mode=h,i.arrowEnd=!1)}}),d=Rt({brush:i,acceptsInputTypes:P(()=>n.value&&(!mt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=Jt(ss(d));function M(){c.clear(),y.value&&Et(t.value,"")}function O(){var h;l.value=c.canRedo(),a.value=c.canUndo(),p.value=!!((h=c.el)!=null&&h.children.length)}function D(h){_=!0;const x=ft[h||t.value];x!=null?c.load(x):c.clear(),O(),_=!1}return c.on("changed",()=>{if(O(),!_){const h=c.dump(),x=t.value;(ft[x]||"")!==h&&y.value&&Et(x,c.dump())}}),de(h=>{_=!0,h[t.value]!=null&&c.load(h[t.value]||""),_=!1,O()}),Wt(()=>{te(t,()=>{c.mounted&&D()},{immediate:!0})}),c.on("start",()=>o.value=!0),c.on("end",()=>o.value=!1),window.addEventListener("keydown",h=>{if(!n.value||fe.value)return;const x=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let w=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?n.value=!1:h.code==="KeyL"&&x?f.value="line":h.code==="KeyA"&&x?f.value="arrow":h.code==="KeyS"&&x?f.value="stylus":h.code==="KeyR"&&x?f.value="rectangle":h.code==="KeyE"&&x?f.value="ellipse":h.code==="KeyC"&&x?M():h.code.startsWith("Digit")&&x&&+h.code[5]<=s.length?i.color=s[+h.code[5]-1]:w=!1,w&&(h.preventDefault(),h.stopPropagation())},!1),{brush:i,brushColors:s,canClear:p,canRedo:l,canUndo:a,clear:M,drauu:c,drauuOptions:d,drawingEnabled:n,drawingMode:f,drawingPinned:r,drawingState:ft,isDrawing:o,loadCanvas:D}}),rs=["innerHTML"],Cs=xt({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=ns();return(s,n)=>b(e)[s.page]?(j(),B("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(e)[s.page]},null,8,rs)):st("v-if",!0)}}),T=Rt({});let is=[],as=[];V(T,"$syncUp",!0);V(T,"$syncDown",!0);V(T,"$paused",!1);V(T,"$onSet",t=>is.push(t));V(T,"$onPatch",t=>as.push(t));pe();V(T,"$patch",async()=>!1);const os=ge(T,T,!0);class ls{constructor(){this._capturePromises=new Map}getSnapshot(e){const s=os.state[e];if(!s)return;const n=jt(e);if(n&&(s==null?void 0:s.revision)===(n==null?void 0:n.meta.slide.revision))return s.image}async captureSnapshot(e,s,n=1e3){}async _captureSnapshot(e,s,n){}}const zt=new ls,hs=["id"],us=["id"],cs=["src"],ds=xt({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1},no:{type:Number,required:!1},useSnapshot:{type:Boolean,default:!1}},setup(t){const e=t,{isPrintMode:s}=Ot(),n=k(null),r=ee(n),i=k(null),o=P(()=>e.width??r.width.value),a=P(()=>e.width?e.width/Mt.value:r.height.value),l=P(()=>$t.value&&!s.value?+$t.value:Math.min(o.value/Ct.value,a.value/kt.value)),p=P(()=>({height:`${kt.value}px`,width:`${Ct.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),m=P(()=>e.width?{width:`${e.width}px`,height:`${e.width/Mt.value}px`}:{});e.isMain&&se(P(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),F(me,l),F(ve,i);const y=P(()=>{if(!(!e.useSnapshot||e.no==null))return zt.getSnapshot(e.no)});return ne(()=>{n.value&&e.useSnapshot&&e.no!=null&&zt.captureSnapshot(e.no,n.value)}),(_,f)=>y.value?(j(),B(re,{key:1},[st(" Image preview "),Q("img",{src:y.value,class:"w-full object-cover",style:et(m.value)},null,12,cs)],2112)):(j(),B("div",{key:0,id:t.isMain?"slide-container":void 0,ref_key:"container",ref:n,class:"slidev-slide-container",style:et(m.value)},[Q("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:i,class:"slidev-slide-content",style:et(p.value)},[Pt(_.$slots,"default",{},void 0,!0)],12,us),Pt(_.$slots,"controls",{},void 0,!0)],12,hs))}}),ks=Ut(ds,[["__scopeId","data-v-0e1f422a"]]),fs={key:0,class:"absolute bottom-0 p-4 mt-auto flex items-center w-full text-primary dark:text-white z-10"},ps={class:"mb-0 flex items-center"},gs=["href"],ms=["src"],vs=["href"],ys={__name:"global-top",setup(t){const{$slidev:e,$nav:s,$clicksContext:n,$clicks:r,$page:i,$renderContext:o,$frontmatter:a}=Me();return(l,p)=>{const m=Ee;return b(e).themeConfigs.eventLogo||b(e).themeConfigs.twitter?(j(),B("footer",fs,[Q("div",ps,[Q("a",{href:b(e).themeConfigs.eventUrl,target:"_blank"},[Q("img",{src:b(e).themeConfigs.eventLogo,class:"h-8 mr-4",alt:"Event image"},null,8,ms)],8,gs)]),b(e).themeConfigs.twitter?(j(),B("a",{key:0,href:b(e).themeConfigs.twitterUrl,target:"_blank"},[gt(m),ie(ae(b(e).themeConfigs.twitter),1)],8,vs)):st("v-if",!0)])):st("v-if",!0)}}},Ls={render:()=>[oe(ys)]},Ds={render:()=>[]},_s={render:()=>[]},xs={render:()=>[]},ws=["data-slidev-no"],Ss=xt({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=P(()=>{var i,o;return((o=(i=e.route.meta)==null?void 0:i.slide)==null?void 0:o.frontmatter.zoom)??1});F(ye,e.route),F(_e,e.route.meta.slide.frontmatter),F(xe,k(e.route.no)),F(we,k(e.renderContext)),F(Se,le(e,"clicksContext")),F(be,s);const n=P(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),r=P(()=>({...n.value,"user-select":mt.selectable?void 0:"none"}));return(i,o)=>(j(),B("div",{"data-slidev-no":e.route.no,class:ce(b(Pe)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:et(r.value)},[gt(b(xs)),(j(),he(ue(e.route.component))),gt(b(_s))],14,ws))}}),Ns=Ut(Ss,[["__scopeId","data-v-d740c2fd"]]);export{Ds as G,Ns as S,Cs as _,ks as a,$e as b,ns as c,Ls as d,$s as u};
