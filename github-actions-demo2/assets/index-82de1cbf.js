(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zs="155",Jt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ou=0,ba=1,Iu=2,Yc=1,Uu=2,pi=3,Ii=0,Et=1,hi=2,yi=0,Cn=1,Ra=2,Ea=3,Ma=4,Nu=5,Tn=100,Fu=101,Bu=102,Ca=103,Sa=104,ku=200,zu=201,qu=202,Hu=203,Kc=204,Zc=205,Gu=206,Vu=207,Wu=208,ju=209,Xu=210,$u=0,Yu=1,Ku=2,_s=3,Zu=4,Ju=5,Qu=6,ep=7,qs=0,tp=1,ip=2,Li=0,np=1,rp=2,op=3,sp=4,ap=5,Jc=300,Pn=301,wn=302,fs=303,hs=304,so=306,ms=1e3,Vt=1001,gs=1002,bt=1003,Pa=1004,bo=1005,Ut=1006,dp=1007,sr=1008,Di=1009,cp=1010,lp=1011,Hs=1012,Qc=1013,wi=1014,Ai=1015,An=1016,el=1017,tl=1018,ji=1020,up=1021,Wt=1023,pp=1024,_p=1025,Xi=1026,Ln=1027,fp=1028,il=1029,hp=1030,nl=1031,rl=1033,Ro=33776,Eo=33777,Mo=33778,Co=33779,wa=35840,Aa=35841,La=35842,Da=35843,mp=36196,Oa=37492,Ia=37496,Ua=37808,Na=37809,Fa=37810,Ba=37811,ka=37812,za=37813,qa=37814,Ha=37815,Ga=37816,Va=37817,Wa=37818,ja=37819,Xa=37820,$a=37821,So=36492,gp=36283,Ya=36284,Ka=36285,Za=36286,ol=3e3,$i=3001,yp=3200,vp=3201,sl=0,Tp=1,Yi="",Ue="srgb",ti="srgb-linear",al="display-p3",Po=7680,xp=519,bp=512,Rp=513,Ep=514,Mp=515,Cp=516,Sp=517,Pp=518,wp=519,Ja=35044,Qa="300 es",ys=1035,mi=2e3,Kr=2001;class Kt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ed=1234567;const tr=Math.PI/180,ar=180/Math.PI;function In(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Gs(i,e){return(i%e+e)%e}function Ap(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Lp(i,e,t){return i!==e?(t-i)/(e-i):0}function ir(i,e,t){return(1-t)*i+t*e}function Dp(i,e,t,n){return ir(i,e,1-Math.exp(-t*n))}function Op(i,e=1){return e-Math.abs(Gs(i,e*2)-e)}function Ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Up(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Np(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fp(i,e){return i+Math.random()*(e-i)}function Bp(i){return i*(.5-Math.random())}function kp(i){i!==void 0&&(ed=i);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zp(i){return i*tr}function qp(i){return i*ar}function vs(i){return(i&i-1)===0&&i!==0}function Hp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gp(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),d=s(t/2),c=o((e+n)/2),l=s((e+n)/2),u=o((e-n)/2),_=s((e-n)/2),f=o((n-e)/2),m=s((n-e)/2);switch(r){case"XYX":i.set(a*l,d*u,d*_,a*c);break;case"YZY":i.set(d*_,a*l,d*u,a*c);break;case"ZXZ":i.set(d*u,d*_,a*l,a*c);break;case"XZX":i.set(a*l,d*m,d*f,a*c);break;case"YXY":i.set(d*f,a*l,d*m,a*c);break;case"ZYZ":i.set(d*m,d*f,a*l,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ts={DEG2RAD:tr,RAD2DEG:ar,generateUUID:In,clamp:pt,euclideanModulo:Gs,mapLinear:Ap,inverseLerp:Lp,lerp:ir,damp:Dp,pingpong:Op,smoothstep:Ip,smootherstep:Up,randInt:Np,randFloat:Fp,randFloatSpread:Bp,seededRandom:kp,degToRad:zp,radToDeg:qp,isPowerOfTwo:vs,ceilPowerOfTwo:Hp,floorPowerOfTwo:Zr,setQuaternionFromProperEuler:Gp,normalize:Tt,denormalize:xn};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,r,o,s,a,d,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,d,c)}set(e,t,n,r,o,s,a,d,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=o,l[5]=d,l[6]=n,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],d=n[6],c=n[1],l=n[4],u=n[7],_=n[2],f=n[5],m=n[8],g=r[0],h=r[3],p=r[6],x=r[1],y=r[4],v=r[7],T=r[2],R=r[5],E=r[8];return o[0]=s*g+a*x+d*T,o[3]=s*h+a*y+d*R,o[6]=s*p+a*v+d*E,o[1]=c*g+l*x+u*T,o[4]=c*h+l*y+u*R,o[7]=c*p+l*v+u*E,o[2]=_*g+f*x+m*T,o[5]=_*h+f*y+m*R,o[8]=_*p+f*v+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],d=e[6],c=e[7],l=e[8];return t*s*l-t*a*c-n*o*l+n*a*d+r*o*c-r*s*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],d=e[6],c=e[7],l=e[8],u=l*s-a*c,_=a*d-l*o,f=c*o-s*d,m=t*u+n*_+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(r*c-l*n)*g,e[2]=(a*n-r*s)*g,e[3]=_*g,e[4]=(l*t-r*d)*g,e[5]=(r*o-a*t)*g,e[6]=f*g,e[7]=(n*d-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const d=Math.cos(o),c=Math.sin(o);return this.set(n*d,n*c,-n*(d*s+c*a)+s+e,-r*c,r*d,-r*(-c*s+d*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new ke;function dl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const td={};function nr(i){i in td||(td[i]=!0,console.warn(i))}function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vp=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Wp=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function jp(i){return i.convertSRGBToLinear().applyMatrix3(Wp)}function Xp(i){return i.applyMatrix3(Vp).convertLinearToSRGB()}const $p={[ti]:i=>i,[Ue]:i=>i.convertSRGBToLinear(),[al]:jp},Yp={[ti]:i=>i,[Ue]:i=>i.convertLinearToSRGB(),[al]:Xp},Ft={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return ti},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=$p[e],r=Yp[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let en;class cl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{en===void 0&&(en=dr("canvas")),en.width=e.width,en.height=e.height;const n=en.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=en}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Sn(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kp=0;class ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=In(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Lo(r[s].image)):o.push(Lo(r[s]))}else o=Lo(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zp=0;class Ct extends Kt{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Vt,r=Vt,o=Ut,s=sr,a=Wt,d=Di,c=Ct.DEFAULT_ANISOTROPY,l=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=In(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=d,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===$i?Ue:Yi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?$i:ol}set encoding(e){nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?Ue:Yi}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Jc;Ct.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const d=e.elements,c=d[0],l=d[4],u=d[8],_=d[1],f=d[5],m=d[9],g=d[2],h=d[6],p=d[10];if(Math.abs(l-_)<.01&&Math.abs(u-g)<.01&&Math.abs(m-h)<.01){if(Math.abs(l+_)<.1&&Math.abs(u+g)<.1&&Math.abs(m+h)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,T=(p+1)/2,R=(l+_)/4,E=(u+g)/4,A=(m+h)/4;return y>v&&y>T?y<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(y),r=R/n,o=E/n):v>T?v<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),n=R/r,o=A/r):T<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),n=E/o,r=A/o),this.set(n,r,o,t),this}let x=Math.sqrt((h-m)*(h-m)+(u-g)*(u-g)+(_-l)*(_-l));return Math.abs(x)<.001&&(x=1),this.x=(h-m)/x,this.y=(u-g)/x,this.z=(_-l)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jp extends Kt{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$i?Ue:Yi),this.texture=new Ct(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ll(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Jp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ul extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qp extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let d=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3];const _=o[s+0],f=o[s+1],m=o[s+2],g=o[s+3];if(a===0){e[t+0]=d,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(a===1){e[t+0]=_,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||d!==_||c!==f||l!==m){let h=1-a;const p=d*_+c*f+l*m+u*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),R=Math.atan2(T,p*x);h=Math.sin(h*R)/T,a=Math.sin(a*R)/T}const v=a*x;if(d=d*h+_*v,c=c*h+f*v,l=l*h+m*v,u=u*h+g*v,h===1-a){const T=1/Math.sqrt(d*d+c*c+l*l+u*u);d*=T,c*=T,l*=T,u*=T}}e[t]=d,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],d=n[r+1],c=n[r+2],l=n[r+3],u=o[s],_=o[s+1],f=o[s+2],m=o[s+3];return e[t]=a*m+l*u+d*f-c*_,e[t+1]=d*m+l*_+c*u-a*f,e[t+2]=c*m+l*f+a*_-d*u,e[t+3]=l*m-a*u-d*_-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,d=Math.sin,c=a(n/2),l=a(r/2),u=a(o/2),_=d(n/2),f=d(r/2),m=d(o/2);switch(s){case"XYZ":this._x=_*l*u+c*f*m,this._y=c*f*u-_*l*m,this._z=c*l*m+_*f*u,this._w=c*l*u-_*f*m;break;case"YXZ":this._x=_*l*u+c*f*m,this._y=c*f*u-_*l*m,this._z=c*l*m-_*f*u,this._w=c*l*u+_*f*m;break;case"ZXY":this._x=_*l*u-c*f*m,this._y=c*f*u+_*l*m,this._z=c*l*m+_*f*u,this._w=c*l*u-_*f*m;break;case"ZYX":this._x=_*l*u-c*f*m,this._y=c*f*u+_*l*m,this._z=c*l*m-_*f*u,this._w=c*l*u+_*f*m;break;case"YZX":this._x=_*l*u+c*f*m,this._y=c*f*u+_*l*m,this._z=c*l*m-_*f*u,this._w=c*l*u-_*f*m;break;case"XZY":this._x=_*l*u-c*f*m,this._y=c*f*u-_*l*m,this._z=c*l*m+_*f*u,this._w=c*l*u+_*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],d=t[9],c=t[2],l=t[6],u=t[10],_=n+a+u;if(_>0){const f=.5/Math.sqrt(_+1);this._w=.25/f,this._x=(l-d)*f,this._y=(o-c)*f,this._z=(s-r)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(l-d)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(d+l)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(s-r)/f,this._x=(o+c)/f,this._y=(d+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,d=t._y,c=t._z,l=t._w;return this._x=n*l+s*a+r*c-o*d,this._y=r*l+s*d+o*a-n*c,this._z=o*l+s*c+n*d-r*a,this._w=s*l-n*a-r*d-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const d=1-a*a;if(d<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(d),l=Math.atan2(c,a),u=Math.sin((1-t)*l)/c,_=Math.sin(t*l)/c;return this._w=s*u+this._w*_,this._x=n*u+this._x*_,this._y=r*u+this._y*_,this._z=o*u+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(id.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,d=e.w,c=d*t+s*r-a*n,l=d*n+a*t-o*r,u=d*r+o*n-s*t,_=-o*t-s*n-a*r;return this.x=c*d+_*-o+l*-a-u*-s,this.y=l*d+_*-s+u*-o-c*-a,this.z=u*d+_*-a+c*-s-l*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,d=t.z;return this.x=r*d-o*a,this.y=o*s-n*d,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new O,id=new Yt;class Ji{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),tn.copy(e.boundingBox),tn.applyMatrix4(e.matrixWorld),this.union(tn);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)oi.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(oi)}else r.boundingBox===null&&r.computeBoundingBox(),tn.copy(r.boundingBox),tn.applyMatrix4(e.matrixWorld),this.union(tn)}const n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kn),gr.subVectors(this.max,kn),nn.subVectors(e.a,kn),rn.subVectors(e.b,kn),on.subVectors(e.c,kn),Ri.subVectors(rn,nn),Ei.subVectors(on,rn),ki.subVectors(nn,on);let t=[0,-Ri.z,Ri.y,0,-Ei.z,Ei.y,0,-ki.z,ki.y,Ri.z,0,-Ri.x,Ei.z,0,-Ei.x,ki.z,0,-ki.x,-Ri.y,Ri.x,0,-Ei.y,Ei.x,0,-ki.y,ki.x,0];return!Oo(t,nn,rn,on,gr)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,nn,rn,on,gr))?!1:(yr.crossVectors(Ri,Ei),t=[yr.x,yr.y,yr.z],Oo(t,nn,rn,on,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new O,new O,new O,new O,new O,new O,new O,new O],oi=new O,tn=new Ji,nn=new O,rn=new O,on=new O,Ri=new O,Ei=new O,ki=new O,kn=new O,gr=new O,yr=new O,zi=new O;function Oo(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){zi.fromArray(i,o);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),d=e.dot(zi),c=t.dot(zi),l=n.dot(zi);if(Math.max(-Math.max(d,c,l),Math.min(d,c,l))>a)return!1}return!0}const e_=new Ji,zn=new O,Io=new O;class ao{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):e_.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zn.subVectors(e,this.center);const t=zn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(zn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zn.copy(e.center).add(Io)),this.expandByPoint(zn.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new O,Uo=new O,vr=new O,Mi=new O,No=new O,Tr=new O,Fo=new O;class co{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Uo.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Uo);const o=e.distanceTo(t)*.5,s=-this.direction.dot(vr),a=Mi.dot(this.direction),d=-Mi.dot(vr),c=Mi.lengthSq(),l=Math.abs(1-s*s);let u,_,f,m;if(l>0)if(u=s*d-a,_=s*a-d,m=o*l,u>=0)if(_>=-m)if(_<=m){const g=1/l;u*=g,_*=g,f=u*(u+s*_+2*a)+_*(s*u+_+2*d)+c}else _=o,u=Math.max(0,-(s*_+a)),f=-u*u+_*(_+2*d)+c;else _=-o,u=Math.max(0,-(s*_+a)),f=-u*u+_*(_+2*d)+c;else _<=-m?(u=Math.max(0,-(-s*o+a)),_=u>0?-o:Math.min(Math.max(-o,-d),o),f=-u*u+_*(_+2*d)+c):_<=m?(u=0,_=Math.min(Math.max(-o,-d),o),f=_*(_+2*d)+c):(u=Math.max(0,-(s*o+a)),_=u>0?o:Math.min(Math.max(-o,-d),o),f=-u*u+_*(_+2*d)+c);else _=s>0?-o:o,u=Math.max(0,-(s*_+a)),f=-u*u+_*(_+2*d)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Uo).addScaledVector(vr,_),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),r=si.dot(si)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,d=n+s;return d<0?null:a<0?this.at(d,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,d;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,_=this.origin;return c>=0?(n=(e.min.x-_.x)*c,r=(e.max.x-_.x)*c):(n=(e.max.x-_.x)*c,r=(e.min.x-_.x)*c),l>=0?(o=(e.min.y-_.y)*l,s=(e.max.y-_.y)*l):(o=(e.max.y-_.y)*l,s=(e.min.y-_.y)*l),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(e.min.z-_.z)*u,d=(e.max.z-_.z)*u):(a=(e.max.z-_.z)*u,d=(e.min.z-_.z)*u),n>d||a>r)||((a>n||n!==n)&&(n=a),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,r,o){No.subVectors(t,e),Tr.subVectors(n,e),Fo.crossVectors(No,Tr);let s=this.direction.dot(Fo),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Mi.subVectors(this.origin,e);const d=a*this.direction.dot(Tr.crossVectors(Mi,Tr));if(d<0)return null;const c=a*this.direction.dot(No.cross(Mi));if(c<0||d+c>s)return null;const l=-a*Mi.dot(Fo);return l<0?null:this.at(l/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,r,o,s,a,d,c,l,u,_,f,m,g,h){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,d,c,l,u,_,f,m,g,h)}set(e,t,n,r,o,s,a,d,c,l,u,_,f,m,g,h){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=d,p[2]=c,p[6]=l,p[10]=u,p[14]=_,p[3]=f,p[7]=m,p[11]=g,p[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/sn.setFromMatrixColumn(e,0).length(),o=1/sn.setFromMatrixColumn(e,1).length(),s=1/sn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),d=Math.cos(r),c=Math.sin(r),l=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const _=s*l,f=s*u,m=a*l,g=a*u;t[0]=d*l,t[4]=-d*u,t[8]=c,t[1]=f+m*c,t[5]=_-g*c,t[9]=-a*d,t[2]=g-_*c,t[6]=m+f*c,t[10]=s*d}else if(e.order==="YXZ"){const _=d*l,f=d*u,m=c*l,g=c*u;t[0]=_+g*a,t[4]=m*a-f,t[8]=s*c,t[1]=s*u,t[5]=s*l,t[9]=-a,t[2]=f*a-m,t[6]=g+_*a,t[10]=s*d}else if(e.order==="ZXY"){const _=d*l,f=d*u,m=c*l,g=c*u;t[0]=_-g*a,t[4]=-s*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=s*l,t[9]=g-_*a,t[2]=-s*c,t[6]=a,t[10]=s*d}else if(e.order==="ZYX"){const _=s*l,f=s*u,m=a*l,g=a*u;t[0]=d*l,t[4]=m*c-f,t[8]=_*c+g,t[1]=d*u,t[5]=g*c+_,t[9]=f*c-m,t[2]=-c,t[6]=a*d,t[10]=s*d}else if(e.order==="YZX"){const _=s*d,f=s*c,m=a*d,g=a*c;t[0]=d*l,t[4]=g-_*u,t[8]=m*u+f,t[1]=u,t[5]=s*l,t[9]=-a*l,t[2]=-c*l,t[6]=f*u+m,t[10]=_-g*u}else if(e.order==="XZY"){const _=s*d,f=s*c,m=a*d,g=a*c;t[0]=d*l,t[4]=-u,t[8]=c*l,t[1]=_*u+g,t[5]=s*l,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*l,t[10]=g*u+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,i_)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),Ci.crossVectors(n,wt),Ci.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),Ci.crossVectors(n,wt)),Ci.normalize(),xr.crossVectors(wt,Ci),r[0]=Ci.x,r[4]=xr.x,r[8]=wt.x,r[1]=Ci.y,r[5]=xr.y,r[9]=wt.y,r[2]=Ci.z,r[6]=xr.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],d=n[8],c=n[12],l=n[1],u=n[5],_=n[9],f=n[13],m=n[2],g=n[6],h=n[10],p=n[14],x=n[3],y=n[7],v=n[11],T=n[15],R=r[0],E=r[4],A=r[8],b=r[12],C=r[1],V=r[5],G=r[9],B=r[13],L=r[2],w=r[6],F=r[10],X=r[14],Q=r[3],re=r[7],k=r[11],I=r[15];return o[0]=s*R+a*C+d*L+c*Q,o[4]=s*E+a*V+d*w+c*re,o[8]=s*A+a*G+d*F+c*k,o[12]=s*b+a*B+d*X+c*I,o[1]=l*R+u*C+_*L+f*Q,o[5]=l*E+u*V+_*w+f*re,o[9]=l*A+u*G+_*F+f*k,o[13]=l*b+u*B+_*X+f*I,o[2]=m*R+g*C+h*L+p*Q,o[6]=m*E+g*V+h*w+p*re,o[10]=m*A+g*G+h*F+p*k,o[14]=m*b+g*B+h*X+p*I,o[3]=x*R+y*C+v*L+T*Q,o[7]=x*E+y*V+v*w+T*re,o[11]=x*A+y*G+v*F+T*k,o[15]=x*b+y*B+v*X+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],d=e[9],c=e[13],l=e[2],u=e[6],_=e[10],f=e[14],m=e[3],g=e[7],h=e[11],p=e[15];return m*(+o*d*u-r*c*u-o*a*_+n*c*_+r*a*f-n*d*f)+g*(+t*d*f-t*c*_+o*s*_-r*s*f+r*c*l-o*d*l)+h*(+t*c*u-t*a*f-o*s*u+n*s*f+o*a*l-n*c*l)+p*(-r*a*l-t*d*u+t*a*_+r*s*u-n*s*_+n*d*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],d=e[6],c=e[7],l=e[8],u=e[9],_=e[10],f=e[11],m=e[12],g=e[13],h=e[14],p=e[15],x=u*h*c-g*_*c+g*d*f-a*h*f-u*d*p+a*_*p,y=m*_*c-l*h*c-m*d*f+s*h*f+l*d*p-s*_*p,v=l*g*c-m*u*c+m*a*f-s*g*f-l*a*p+s*u*p,T=m*u*d-l*g*d-m*a*_+s*g*_+l*a*h-s*u*h,R=t*x+n*y+r*v+o*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=x*E,e[1]=(g*_*o-u*h*o-g*r*f+n*h*f+u*r*p-n*_*p)*E,e[2]=(a*h*o-g*d*o+g*r*c-n*h*c-a*r*p+n*d*p)*E,e[3]=(u*d*o-a*_*o-u*r*c+n*_*c+a*r*f-n*d*f)*E,e[4]=y*E,e[5]=(l*h*o-m*_*o+m*r*f-t*h*f-l*r*p+t*_*p)*E,e[6]=(m*d*o-s*h*o-m*r*c+t*h*c+s*r*p-t*d*p)*E,e[7]=(s*_*o-l*d*o+l*r*c-t*_*c-s*r*f+t*d*f)*E,e[8]=v*E,e[9]=(m*u*o-l*g*o-m*n*f+t*g*f+l*n*p-t*u*p)*E,e[10]=(s*g*o-m*a*o+m*n*c-t*g*c-s*n*p+t*a*p)*E,e[11]=(l*a*o-s*u*o-l*n*c+t*u*c+s*n*f-t*a*f)*E,e[12]=T*E,e[13]=(l*g*r-m*u*r+m*n*_-t*g*_-l*n*h+t*u*h)*E,e[14]=(m*a*r-s*g*r-m*n*d+t*g*d+s*n*h-t*a*h)*E,e[15]=(s*u*r-l*a*r+l*n*d-t*u*d-s*n*_+t*a*_)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,d=e.z,c=o*s,l=o*a;return this.set(c*s+n,c*a-r*d,c*d+r*a,0,c*a+r*d,l*a+n,l*d-r*s,0,c*d-r*a,l*d+r*s,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,d=t._w,c=o+o,l=s+s,u=a+a,_=o*c,f=o*l,m=o*u,g=s*l,h=s*u,p=a*u,x=d*c,y=d*l,v=d*u,T=n.x,R=n.y,E=n.z;return r[0]=(1-(g+p))*T,r[1]=(f+v)*T,r[2]=(m-y)*T,r[3]=0,r[4]=(f-v)*R,r[5]=(1-(_+p))*R,r[6]=(h+x)*R,r[7]=0,r[8]=(m+y)*E,r[9]=(h-x)*E,r[10]=(1-(_+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=sn.set(r[0],r[1],r[2]).length();const s=sn.set(r[4],r[5],r[6]).length(),a=sn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const c=1/o,l=1/s,u=1/a;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=l,Bt.elements[5]*=l,Bt.elements[6]*=l,Bt.elements[8]*=u,Bt.elements[9]*=u,Bt.elements[10]*=u,t.setFromRotationMatrix(Bt),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=mi){const d=this.elements,c=2*o/(t-e),l=2*o/(n-r),u=(t+e)/(t-e),_=(n+r)/(n-r);let f,m;if(a===mi)f=-(s+o)/(s-o),m=-2*s*o/(s-o);else if(a===Kr)f=-s/(s-o),m=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return d[0]=c,d[4]=0,d[8]=u,d[12]=0,d[1]=0,d[5]=l,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=f,d[14]=m,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=mi){const d=this.elements,c=1/(t-e),l=1/(n-r),u=1/(s-o),_=(t+e)*c,f=(n+r)*l;let m,g;if(a===mi)m=(s+o)*u,g=-2*u;else if(a===Kr)m=o*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return d[0]=2*c,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*l,d[9]=0,d[13]=-f,d[2]=0,d[6]=0,d[10]=g,d[14]=-m,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sn=new O,Bt=new Je,t_=new O(0,0,0),i_=new O(1,1,1),Ci=new O,xr=new O,wt=new O,nd=new Je,rd=new Yt;class lo{constructor(e=0,t=0,n=0,r=lo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],d=r[1],c=r[5],l=r[9],u=r[2],_=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(_,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(d,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,f),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(_,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lo.DEFAULT_ORDER="XYZ";class Vs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const od=new O,an=new Yt,ai=new Je,br=new O,qn=new O,r_=new O,o_=new Yt,sd=new O(1,0,0),ad=new O(0,1,0),dd=new O(0,0,1),s_={type:"added"},cd={type:"removed"};class ft extends Kt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new O,t=new lo,n=new Yt,r=new O(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new ke}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return an.setFromAxisAngle(e,t),this.quaternion.multiply(an),this}rotateOnWorldAxis(e,t){return an.setFromAxisAngle(e,t),this.quaternion.premultiply(an),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(ad,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(ad,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(qn,br,this.up):ai.lookAt(br,qn,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),an.setFromRotationMatrix(ai),this.quaternion.premultiply(an.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(s_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(cd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qn,e,r_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qn,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,d){return a[d.uuid]===void 0&&(a[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const d=a.shapes;if(Array.isArray(d))for(let c=0,l=d.length;c<l;c++){const u=d[c];o(e.shapes,u)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let d=0,c=this.material.length;d<c;d++)a.push(o(e.materials,this.material[d]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const d=this.animations[a];r.animations.push(o(e.animations,d))}}if(t){const a=s(e.geometries),d=s(e.materials),c=s(e.textures),l=s(e.images),u=s(e.shapes),_=s(e.skeletons),f=s(e.animations),m=s(e.nodes);a.length>0&&(n.geometries=a),d.length>0&&(n.materials=d),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),_.length>0&&(n.skeletons=_),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function s(a){const d=[];for(const c in a){const l=a[c];delete l.metadata,d.push(l)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ft.DEFAULT_UP=new O(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kt=new O,di=new O,Bo=new O,ci=new O,dn=new O,cn=new O,ld=new O,ko=new O,zo=new O,qo=new O;let Rr=!1;class Gt{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kt.subVectors(e,t),r.cross(kt);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){kt.subVectors(r,t),di.subVectors(n,t),Bo.subVectors(e,t);const s=kt.dot(kt),a=kt.dot(di),d=kt.dot(Bo),c=di.dot(di),l=di.dot(Bo),u=s*c-a*a;if(u===0)return o.set(-2,-1,-1);const _=1/u,f=(c*d-a*l)*_,m=(s*l-a*d)*_;return o.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,n,r,o,s,a,d){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),this.getInterpolation(e,t,n,r,o,s,a,d)}static getInterpolation(e,t,n,r,o,s,a,d){return this.getBarycoord(e,t,n,r,ci),d.setScalar(0),d.addScaledVector(o,ci.x),d.addScaledVector(s,ci.y),d.addScaledVector(a,ci.z),d}static isFrontFacing(e,t,n,r){return kt.subVectors(n,t),di.subVectors(e,t),kt.cross(di).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),di.subVectors(this.a,this.b),kt.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),Gt.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}getInterpolation(e,t,n,r,o){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;dn.subVectors(r,n),cn.subVectors(o,n),ko.subVectors(e,n);const d=dn.dot(ko),c=cn.dot(ko);if(d<=0&&c<=0)return t.copy(n);zo.subVectors(e,r);const l=dn.dot(zo),u=cn.dot(zo);if(l>=0&&u<=l)return t.copy(r);const _=d*u-l*c;if(_<=0&&d>=0&&l<=0)return s=d/(d-l),t.copy(n).addScaledVector(dn,s);qo.subVectors(e,o);const f=dn.dot(qo),m=cn.dot(qo);if(m>=0&&f<=m)return t.copy(o);const g=f*c-d*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(cn,a);const h=l*m-f*u;if(h<=0&&u-l>=0&&f-m>=0)return ld.subVectors(o,r),a=(u-l)/(u-l+(f-m)),t.copy(r).addScaledVector(ld,a);const p=1/(h+g+_);return s=g*p,a=_*p,t.copy(n).addScaledVector(dn,s).addScaledVector(cn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let a_=0;class Un extends Kt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Cn,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cn&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const d=o[a];delete d.metadata,s.push(d)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zt={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ft.workingColorSpace){if(e=Gs(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Ho(s,o,e+1/3),this.g=Ho(s,o,e),this.b=Ho(s,o,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Ue){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){const n=pl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Ft.fromWorkingColorSpace(mt.copy(this),e),Math.round(pt(mt.r*255,0,255))*65536+Math.round(pt(mt.g*255,0,255))*256+Math.round(pt(mt.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,o=mt.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let d,c;const l=(a+s)/2;if(a===s)d=0,c=0;else{const u=s-a;switch(c=l<=.5?u/(s+a):u/(2-s-a),s){case n:d=(r-o)/u+(r<o?6:0);break;case r:d=(o-n)/u+2;break;case o:d=(n-r)/u+4;break}d/=6}return e.h=d,e.s=c,e.l=l,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Ue){Ft.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==Ue?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(Er);const n=ir(zt.h,Er.h,t),r=ir(zt.s,Er.s,t),o=ir(zt.l,Er.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new je;je.NAMES=pl;class Ws extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new O,Mr=new he;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this.updateRange={offset:0,count:-1},this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),o=Tt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class _l extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fl extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d_=0;const It=new Je,Go=new ft,ln=new O,At=new Ji,Hn=new Ji,ut=new O;class Dt extends Kt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dl(e)?fl:_l)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ke().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ln).negate(),this.translate(ln.x,ln.y,ln.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];At.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Hn.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(At.min,Hn.min),At.expandByPoint(ut),ut.addVectors(At.max,Hn.max),At.expandByPoint(ut)):(At.expandByPoint(Hn.min),At.expandByPoint(Hn.max))}At.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)ut.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(ut));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],d=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)ut.fromBufferAttribute(a,c),d&&(ln.fromBufferAttribute(e,c),ut.add(ln)),r=Math.max(r,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*a),4));const d=this.getAttribute("tangent").array,c=[],l=[];for(let C=0;C<a;C++)c[C]=new O,l[C]=new O;const u=new O,_=new O,f=new O,m=new he,g=new he,h=new he,p=new O,x=new O;function y(C,V,G){u.fromArray(r,C*3),_.fromArray(r,V*3),f.fromArray(r,G*3),m.fromArray(s,C*2),g.fromArray(s,V*2),h.fromArray(s,G*2),_.sub(u),f.sub(u),g.sub(m),h.sub(m);const B=1/(g.x*h.y-h.x*g.y);isFinite(B)&&(p.copy(_).multiplyScalar(h.y).addScaledVector(f,-g.y).multiplyScalar(B),x.copy(f).multiplyScalar(g.x).addScaledVector(_,-h.x).multiplyScalar(B),c[C].add(p),c[V].add(p),c[G].add(p),l[C].add(x),l[V].add(x),l[G].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let C=0,V=v.length;C<V;++C){const G=v[C],B=G.start,L=G.count;for(let w=B,F=B+L;w<F;w+=3)y(n[w+0],n[w+1],n[w+2])}const T=new O,R=new O,E=new O,A=new O;function b(C){E.fromArray(o,C*3),A.copy(E);const V=c[C];T.copy(V),T.sub(E.multiplyScalar(E.dot(V))).normalize(),R.crossVectors(A,V);const B=R.dot(l[C])<0?-1:1;d[C*4]=T.x,d[C*4+1]=T.y,d[C*4+2]=T.z,d[C*4+3]=B}for(let C=0,V=v.length;C<V;++C){const G=v[C],B=G.start,L=G.count;for(let w=B,F=B+L;w<F;w+=3)b(n[w+0]),b(n[w+1]),b(n[w+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,f=n.count;_<f;_++)n.setXYZ(_,0,0,0);const r=new O,o=new O,s=new O,a=new O,d=new O,c=new O,l=new O,u=new O;if(e)for(let _=0,f=e.count;_<f;_+=3){const m=e.getX(_+0),g=e.getX(_+1),h=e.getX(_+2);r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,h),l.subVectors(s,o),u.subVectors(r,o),l.cross(u),a.fromBufferAttribute(n,m),d.fromBufferAttribute(n,g),c.fromBufferAttribute(n,h),a.add(l),d.add(l),c.add(l),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,d.x,d.y,d.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let _=0,f=t.count;_<f;_+=3)r.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),s.fromBufferAttribute(t,_+2),l.subVectors(s,o),u.subVectors(r,o),l.cross(u),n.setXYZ(_+0,l.x,l.y,l.z),n.setXYZ(_+1,l.x,l.y,l.z),n.setXYZ(_+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,d){const c=a.array,l=a.itemSize,u=a.normalized,_=new c.constructor(d.length*l);let f=0,m=0;for(let g=0,h=d.length;g<h;g++){a.isInterleavedBufferAttribute?f=d[g]*a.data.stride+a.offset:f=d[g]*l;for(let p=0;p<l;p++)_[m++]=c[f++]}return new $t(_,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,r=this.attributes;for(const a in r){const d=r[a],c=e(d,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const d=[],c=o[a];for(let l=0,u=c.length;l<u;l++){const _=c[l],f=e(_,n);d.push(f)}t.morphAttributes[a]=d}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,d=s.length;a<d;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const c in d)d[c]!==void 0&&(e[c]=d[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const c=n[d];e.data.attributes[d]=c.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const c=this.morphAttributes[d],l=[];for(let u=0,_=c.length;u<_;u++){const f=c[u];l.push(f.toJSON(e.data))}l.length>0&&(r[d]=l,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const l=r[c];this.setAttribute(c,l.clone(t))}const o=e.morphAttributes;for(const c in o){const l=[],u=o[c];for(let _=0,f=u.length;_<f;_++)l.push(u[_].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new Je,qi=new co,Cr=new ao,pd=new O,un=new O,pn=new O,_n=new O,Vo=new O,Sr=new O,Pr=new he,wr=new he,Ar=new he,_d=new O,fd=new O,hd=new O,Lr=new O,Dr=new O;class jt extends ft{constructor(e=new Dt,t=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Sr.set(0,0,0);for(let d=0,c=o.length;d<c;d++){const l=a[d],u=o[d];l!==0&&(Vo.fromBufferAttribute(u,e),s?Sr.addScaledVector(Vo,l):Sr.addScaledVector(Vo.sub(t),l))}t.add(Sr)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(o),qi.copy(e.ray).recast(e.near),!(Cr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Cr,pd)===null||qi.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(ud.copy(o).invert(),qi.copy(e.ray).applyMatrix4(ud),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,d=o.attributes.position,c=o.attributes.uv,l=o.attributes.uv1,u=o.attributes.normal,_=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,g=_.length;m<g;m++){const h=_[m],p=s[h.materialIndex],x=Math.max(h.start,f.start),y=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let v=x,T=y;v<T;v+=3){const R=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);r=Or(this,p,e,n,c,l,u,R,E,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let h=m,p=g;h<p;h+=3){const x=a.getX(h),y=a.getX(h+1),v=a.getX(h+2);r=Or(this,s,e,n,c,l,u,x,y,v),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(s))for(let m=0,g=_.length;m<g;m++){const h=_[m],p=s[h.materialIndex],x=Math.max(h.start,f.start),y=Math.min(d.count,Math.min(h.start+h.count,f.start+f.count));for(let v=x,T=y;v<T;v+=3){const R=v,E=v+1,A=v+2;r=Or(this,p,e,n,c,l,u,R,E,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),g=Math.min(d.count,f.start+f.count);for(let h=m,p=g;h<p;h+=3){const x=h,y=h+1,v=h+2;r=Or(this,s,e,n,c,l,u,x,y,v),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function c_(i,e,t,n,r,o,s,a){let d;if(e.side===Et?d=n.intersectTriangle(s,o,r,!0,a):d=n.intersectTriangle(r,o,s,e.side===Ii,a),d===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:i}}function Or(i,e,t,n,r,o,s,a,d,c){i.getVertexPosition(a,un),i.getVertexPosition(d,pn),i.getVertexPosition(c,_n);const l=c_(i,e,t,n,un,pn,_n,Lr);if(l){r&&(Pr.fromBufferAttribute(r,a),wr.fromBufferAttribute(r,d),Ar.fromBufferAttribute(r,c),l.uv=Gt.getInterpolation(Lr,un,pn,_n,Pr,wr,Ar,new he)),o&&(Pr.fromBufferAttribute(o,a),wr.fromBufferAttribute(o,d),Ar.fromBufferAttribute(o,c),l.uv1=Gt.getInterpolation(Lr,un,pn,_n,Pr,wr,Ar,new he),l.uv2=l.uv1),s&&(_d.fromBufferAttribute(s,a),fd.fromBufferAttribute(s,d),hd.fromBufferAttribute(s,c),l.normal=Gt.getInterpolation(Lr,un,pn,_n,_d,fd,hd,new O),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:d,c,normal:new O,materialIndex:0};Gt.getNormal(un,pn,_n,u.normal),l.face=u}return l}class pr extends Dt{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const d=[],c=[],l=[],u=[];let _=0,f=0;m("z","y","x",-1,-1,n,t,e,s,o,0),m("z","y","x",1,-1,n,t,-e,s,o,1),m("x","z","y",1,1,e,n,t,r,s,2),m("x","z","y",1,-1,e,n,-t,r,s,3),m("x","y","z",1,-1,e,t,n,r,o,4),m("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(d),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(u,2));function m(g,h,p,x,y,v,T,R,E,A,b){const C=v/E,V=T/A,G=v/2,B=T/2,L=R/2,w=E+1,F=A+1;let X=0,Q=0;const re=new O;for(let k=0;k<F;k++){const I=k*V-B;for(let q=0;q<w;q++){const oe=q*C-G;re[g]=oe*x,re[h]=I*y,re[p]=L,c.push(re.x,re.y,re.z),re[g]=0,re[h]=0,re[p]=R>0?1:-1,l.push(re.x,re.y,re.z),u.push(q/E),u.push(1-k/A),X+=1}}for(let k=0;k<A;k++)for(let I=0;I<E;I++){const q=_+I+w*k,oe=_+I+w*(k+1),J=_+(I+1)+w*(k+1),W=_+(I+1)+w*k;d.push(q,oe,W),d.push(oe,J,W),Q+=6}a.addGroup(f,Q,b),f+=Q,_+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=Dn(i[t]);for(const r in n)e[r]=n[r]}return e}function l_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hl(i){return i.getRenderTarget()===null?i.outputColorSpace:ti}const ml={clone:Dn,merge:xt};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=p_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dn(e.uniforms),this.uniformsGroups=l_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gl extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends gl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const d=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/d,t-=s.offsetY*n/c,r*=s.width/d,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fn=-90,hn=1;class __ extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Nt(fn,hn,e,t);r.layers=this.layers,this.add(r);const o=new Nt(fn,hn,e,t);o.layers=this.layers,this.add(o);const s=new Nt(fn,hn,e,t);s.layers=this.layers,this.add(s);const a=new Nt(fn,hn,e,t);a.layers=this.layers,this.add(a);const d=new Nt(fn,hn,e,t);d.layers=this.layers,this.add(d);const c=new Nt(fn,hn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,d]=t;for(const c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,a,d,c]=this.children,l=e.getRenderTarget(),u=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,o),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,d),n.texture.generateMipmaps=_,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(l),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class yl extends Ct{constructor(e,t,n,r,o,s,a,d,c,l){e=e!==void 0?e:[],t=t!==void 0?t:Pn,super(e,t,n,r,o,s,a,d,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f_ extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$i?Ue:Yi),this.texture=new yl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pr(5,5,5),o=new Ti({name:"CubemapFromEquirect",uniforms:Dn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:yi});o.uniforms.tEquirect.value=t;const s=new jt(r,o),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=Ut),new __(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const Wo=new O,h_=new O,m_=new ke;class _i{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Wo.subVectors(n,t).cross(h_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m_.getNormalMatrix(e),r=this.coplanarPoint(Wo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new ao,Ir=new O;class js{constructor(e=new _i,t=new _i,n=new _i,r=new _i,o=new _i,s=new _i){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],d=r[3],c=r[4],l=r[5],u=r[6],_=r[7],f=r[8],m=r[9],g=r[10],h=r[11],p=r[12],x=r[13],y=r[14],v=r[15];if(n[0].setComponents(d-o,_-c,h-f,v-p).normalize(),n[1].setComponents(d+o,_+c,h+f,v+p).normalize(),n[2].setComponents(d+s,_+l,h+m,v+x).normalize(),n[3].setComponents(d-s,_-l,h-m,v-x).normalize(),n[4].setComponents(d-a,_-u,h-g,v-y).normalize(),t===mi)n[5].setComponents(d+a,_+u,h+g,v+y).normalize();else if(t===Kr)n[5].setComponents(a,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ir.x=r.normal.x>0?e.max.x:e.min.x,Ir.y=r.normal.y>0?e.max.y:e.min.y,Ir.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vl(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function g_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,l){const u=c.array,_=c.usage,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,_),c.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function o(c,l,u){const _=l.array,f=l.updateRange;i.bindBuffer(u,c),f.count===-1?i.bufferSubData(u,0,_):(t?i.bufferSubData(u,f.offset*_.BYTES_PER_ELEMENT,_,f.offset,f.count):i.bufferSubData(u,f.offset*_.BYTES_PER_ELEMENT,_.subarray(f.offset,f.offset+f.count)),f.count=-1),l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=n.get(c);l&&(i.deleteBuffer(l.buffer),n.delete(c))}function d(c,l){if(c.isGLBufferAttribute){const _=n.get(c);(!_||_.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,l)):u.version<c.version&&(o(u.buffer,c,l),u.version=c.version)}return{get:s,remove:a,update:d}}class Xs extends Dt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),d=Math.floor(r),c=a+1,l=d+1,u=e/a,_=t/d,f=[],m=[],g=[],h=[];for(let p=0;p<l;p++){const x=p*_-s;for(let y=0;y<c;y++){const v=y*u-o;m.push(v,-x,0),g.push(0,0,1),h.push(y/a),h.push(1-p/d)}}for(let p=0;p<d;p++)for(let x=0;x<a;x++){const y=x+c*p,v=x+c*(p+1),T=x+1+c*(p+1),R=x+1+c*p;f.push(y,v,R),f.push(v,T,R)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,R_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,k_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,of=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ef=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Df=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,If=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,th=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ih=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,rh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ah=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ch=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Eh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ph=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ah=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ih=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Uh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$h=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:y_,alphahash_pars_fragment:v_,alphamap_fragment:T_,alphamap_pars_fragment:x_,alphatest_fragment:b_,alphatest_pars_fragment:R_,aomap_fragment:E_,aomap_pars_fragment:M_,begin_vertex:C_,beginnormal_vertex:S_,bsdfs:P_,iridescence_fragment:w_,bumpmap_pars_fragment:A_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:D_,clipping_planes_pars_vertex:O_,clipping_planes_vertex:I_,color_fragment:U_,color_pars_fragment:N_,color_pars_vertex:F_,color_vertex:B_,common:k_,cube_uv_reflection_fragment:z_,defaultnormal_vertex:q_,displacementmap_pars_vertex:H_,displacementmap_vertex:G_,emissivemap_fragment:V_,emissivemap_pars_fragment:W_,colorspace_fragment:j_,colorspace_pars_fragment:X_,envmap_fragment:$_,envmap_common_pars_fragment:Y_,envmap_pars_fragment:K_,envmap_pars_vertex:Z_,envmap_physical_pars_fragment:lf,envmap_vertex:J_,fog_vertex:Q_,fog_pars_vertex:ef,fog_fragment:tf,fog_pars_fragment:nf,gradientmap_pars_fragment:rf,lightmap_fragment:of,lightmap_pars_fragment:sf,lights_lambert_fragment:af,lights_lambert_pars_fragment:df,lights_pars_begin:cf,lights_toon_fragment:uf,lights_toon_pars_fragment:pf,lights_phong_fragment:_f,lights_phong_pars_fragment:ff,lights_physical_fragment:hf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:yf,lights_fragment_end:vf,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:xf,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:Rf,map_fragment:Ef,map_pars_fragment:Mf,map_particle_fragment:Cf,map_particle_pars_fragment:Sf,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:wf,morphcolor_vertex:Af,morphnormal_vertex:Lf,morphtarget_pars_vertex:Df,morphtarget_vertex:Of,normal_fragment_begin:If,normal_fragment_maps:Uf,normal_pars_fragment:Nf,normal_pars_vertex:Ff,normal_vertex:Bf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:zf,clearcoat_normal_fragment_maps:qf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Gf,opaque_fragment:Vf,packing:Wf,premultiplied_alpha_fragment:jf,project_vertex:Xf,dithering_fragment:$f,dithering_pars_fragment:Yf,roughnessmap_fragment:Kf,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:Jf,shadowmap_pars_vertex:Qf,shadowmap_vertex:eh,shadowmask_pars_fragment:th,skinbase_vertex:ih,skinning_pars_vertex:nh,skinning_vertex:rh,skinnormal_vertex:oh,specularmap_fragment:sh,specularmap_pars_fragment:ah,tonemapping_fragment:dh,tonemapping_pars_fragment:ch,transmission_fragment:lh,transmission_pars_fragment:uh,uv_pars_fragment:ph,uv_pars_vertex:_h,uv_vertex:fh,worldpos_vertex:hh,background_vert:mh,background_frag:gh,backgroundCube_vert:yh,backgroundCube_frag:vh,cube_vert:Th,cube_frag:xh,depth_vert:bh,depth_frag:Rh,distanceRGBA_vert:Eh,distanceRGBA_frag:Mh,equirect_vert:Ch,equirect_frag:Sh,linedashed_vert:Ph,linedashed_frag:wh,meshbasic_vert:Ah,meshbasic_frag:Lh,meshlambert_vert:Dh,meshlambert_frag:Oh,meshmatcap_vert:Ih,meshmatcap_frag:Uh,meshnormal_vert:Nh,meshnormal_frag:Fh,meshphong_vert:Bh,meshphong_frag:kh,meshphysical_vert:zh,meshphysical_frag:qh,meshtoon_vert:Hh,meshtoon_frag:Gh,points_vert:Vh,points_frag:Wh,shadow_vert:jh,shadow_frag:Xh,sprite_vert:$h,sprite_frag:Yh},pe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Qt={basic:{uniforms:xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:xt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:xt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:xt([pe.points,pe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:xt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:xt([pe.common,pe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:xt([pe.sprite,pe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:xt([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:xt([pe.lights,pe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Qt.physical={uniforms:xt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ur={r:0,b:0,g:0};function Kh(i,e,t,n,r,o,s){const a=new je(0);let d=o===!0?0:1,c,l,u=null,_=0,f=null;function m(h,p){let x=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(a,d):y&&y.isColor&&(g(y,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,s),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,s),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===so)?(l===void 0&&(l=new jt(new pr(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Dn(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=y.colorSpace!==Ue,(u!==y||_!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,_=y.version,f=i.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new jt(new Xs(2,2),new Ti({name:"BackgroundMaterial",uniforms:Dn(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.colorSpace!==Ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||_!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,_=y.version,f=i.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function g(h,p){h.getRGB(Ur,hl(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,p,s)}return{getClearColor:function(){return a},setClearColor:function(h,p=1){a.set(h),d=p,g(a,d)},getClearAlpha:function(){return d},setClearAlpha:function(h){d=h,g(a,d)},render:m}}function Zh(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||o!==null,a={},d=h(null);let c=d,l=!1;function u(L,w,F,X,Q){let re=!1;if(s){const k=g(X,F,w);c!==k&&(c=k,f(c.object)),re=p(L,X,F,Q),re&&x(L,X,F,Q)}else{const k=w.wireframe===!0;(c.geometry!==X.id||c.program!==F.id||c.wireframe!==k)&&(c.geometry=X.id,c.program=F.id,c.wireframe=k,re=!0)}Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(re||l)&&(l=!1,A(L,w,F,X),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function _(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):o.bindVertexArrayOES(L)}function m(L){return n.isWebGL2?i.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function g(L,w,F){const X=F.wireframe===!0;let Q=a[L.id];Q===void 0&&(Q={},a[L.id]=Q);let re=Q[w.id];re===void 0&&(re={},Q[w.id]=re);let k=re[X];return k===void 0&&(k=h(_()),re[X]=k),k}function h(L){const w=[],F=[],X=[];for(let Q=0;Q<r;Q++)w[Q]=0,F[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:X,object:L,attributes:{},index:null}}function p(L,w,F,X){const Q=c.attributes,re=w.attributes;let k=0;const I=F.getAttributes();for(const q in I)if(I[q].location>=0){const J=Q[q];let W=re[q];if(W===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),J===void 0||J.attribute!==W||W&&J.data!==W.data)return!0;k++}return c.attributesNum!==k||c.index!==X}function x(L,w,F,X){const Q={},re=w.attributes;let k=0;const I=F.getAttributes();for(const q in I)if(I[q].location>=0){let J=re[q];J===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));const W={};W.attribute=J,J&&J.data&&(W.data=J.data),Q[q]=W,k++}c.attributes=Q,c.attributesNum=k,c.index=X}function y(){const L=c.newAttributes;for(let w=0,F=L.length;w<F;w++)L[w]=0}function v(L){T(L,0)}function T(L,w){const F=c.newAttributes,X=c.enabledAttributes,Q=c.attributeDivisors;F[L]=1,X[L]===0&&(i.enableVertexAttribArray(L),X[L]=1),Q[L]!==w&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,w),Q[L]=w)}function R(){const L=c.newAttributes,w=c.enabledAttributes;for(let F=0,X=w.length;F<X;F++)w[F]!==L[F]&&(i.disableVertexAttribArray(F),w[F]=0)}function E(L,w,F,X,Q,re,k){k===!0?i.vertexAttribIPointer(L,w,F,Q,re):i.vertexAttribPointer(L,w,F,X,Q,re)}function A(L,w,F,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Q=X.attributes,re=F.getAttributes(),k=w.defaultAttributeValues;for(const I in re){const q=re[I];if(q.location>=0){let oe=Q[I];if(oe===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){const J=oe.normalized,W=oe.itemSize,ie=t.get(oe);if(ie===void 0)continue;const N=ie.buffer,Z=ie.type,ge=ie.bytesPerElement,Me=n.isWebGL2===!0&&(Z===i.INT||Z===i.UNSIGNED_INT||oe.gpuType===Qc);if(oe.isInterleavedBufferAttribute){const ve=oe.data,z=ve.stride,Ye=oe.offset;if(ve.isInstancedInterleavedBuffer){for(let Te=0;Te<q.locationSize;Te++)T(q.location+Te,ve.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Te=0;Te<q.locationSize;Te++)v(q.location+Te);i.bindBuffer(i.ARRAY_BUFFER,N);for(let Te=0;Te<q.locationSize;Te++)E(q.location+Te,W/q.locationSize,Z,J,z*ge,(Ye+W/q.locationSize*Te)*ge,Me)}else{if(oe.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)T(q.location+ve,oe.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<q.locationSize;ve++)v(q.location+ve);i.bindBuffer(i.ARRAY_BUFFER,N);for(let ve=0;ve<q.locationSize;ve++)E(q.location+ve,W/q.locationSize,Z,J,W*ge,W/q.locationSize*ve*ge,Me)}}else if(k!==void 0){const J=k[I];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(q.location,J);break;case 3:i.vertexAttrib3fv(q.location,J);break;case 4:i.vertexAttrib4fv(q.location,J);break;default:i.vertexAttrib1fv(q.location,J)}}}}R()}function b(){G();for(const L in a){const w=a[L];for(const F in w){const X=w[F];for(const Q in X)m(X[Q].object),delete X[Q];delete w[F]}delete a[L]}}function C(L){if(a[L.id]===void 0)return;const w=a[L.id];for(const F in w){const X=w[F];for(const Q in X)m(X[Q].object),delete X[Q];delete w[F]}delete a[L.id]}function V(L){for(const w in a){const F=a[w];if(F[L.id]===void 0)continue;const X=F[L.id];for(const Q in X)m(X[Q].object),delete X[Q];delete F[L.id]}}function G(){B(),l=!0,c!==d&&(c=d,f(c.object))}function B(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:u,reset:G,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:V,initAttributes:y,enableAttribute:v,disableUnusedAttributes:R}}function Jh(i,e,t,n){const r=n.isWebGL2;let o;function s(c){o=c}function a(c,l){i.drawArrays(o,c,l),t.update(l,o,1)}function d(c,l,u){if(u===0)return;let _,f;if(r)_=i,f="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[f](o,c,l,u),t.update(l,o,u)}this.setMode=s,this.render=a,this.renderInstances=d}function Qh(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const d=o(a);d!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",d,"instead."),a=d);const c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=_>0,v=s||e.has("OES_texture_float"),T=y&&v,R=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:_,maxTextureSize:f,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:h,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:R}}function e0(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new _i,a=new ke,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(u,_){const f=u.length!==0||_||n!==0||r;return r=_,n=u.length,f},this.beginShadows=function(){o=!0,l(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,_){t=l(u,_,0)},this.setState=function(u,_,f){const m=u.clippingPlanes,g=u.clipIntersection,h=u.clipShadows,p=i.get(u);if(!r||m===null||m.length===0||o&&!h)o?l(null):c();else{const x=o?0:n,y=x*4;let v=p.clippingState||null;d.value=v,v=l(m,_,y,f);for(let T=0;T!==y;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,_,f,m){const g=u!==null?u.length:0;let h=null;if(g!==0){if(h=d.value,m!==!0||h===null){const p=f+g*4,x=_.matrixWorldInverse;a.getNormalMatrix(x),(h===null||h.length<p)&&(h=new Float32Array(p));for(let y=0,v=f;y!==g;++y,v+=4)s.copy(u[y]).applyMatrix4(x,a),s.normal.toArray(h,v),h[v+3]=s.constant}d.value=h,d.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,h}}function t0(i){let e=new WeakMap;function t(s,a){return a===fs?s.mapping=Pn:a===hs&&(s.mapping=wn),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===fs||a===hs)if(e.has(s)){const d=e.get(s).texture;return t(d,s.mapping)}else{const d=s.image;if(d&&d.height>0){const c=new f_(d.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const d=e.get(a);d!==void 0&&(e.delete(a),d.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class $s extends gl{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=l*this.view.offsetY,d=a-l*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bn=4,md=[.125,.215,.35,.446,.526,.582],Vi=20,jo=new $s,gd=new je;let Xo=null;const Gi=(1+Math.sqrt(5))/2,mn=1/Gi,yd=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Gi,mn),new O(0,Gi,-mn),new O(mn,0,Gi),new O(-mn,0,Gi),new O(Gi,mn,0),new O(-Gi,mn,0)];class vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xo=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo),e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pn||e.mapping===wn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:An,format:Wt,colorSpace:ti,depthBuffer:!1},r=Td(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i0(o)),this._blurMaterial=n0(o,e,t)}return r}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,n,r){const a=new Nt(90,1,t,n),d=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,_=l.toneMapping;l.getClearColor(gd),l.toneMapping=Li,l.autoClear=!1;const f=new Ws({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),m=new jt(new pr,f);let g=!1;const h=e.background;h?h.isColor&&(f.color.copy(h),e.background=null,g=!0):(f.color.copy(gd),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,d[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,d[p]),a.lookAt(0,c[p],0)):(a.up.set(0,d[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Nr(r,x*y,p>2?y:0,y,y),l.setRenderTarget(r),g&&l.render(m,a),l.render(e,a)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=_,l.autoClear=u,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pn||e.mapping===wn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new jt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const d=this._cubeSize;Nr(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(s,jo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=yd[(r-1)%yd.length];this._blur(e,r-1,r,o,s)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const d=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new jt(this._lodPlanes[r],c),_=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),g=o/m,h=isFinite(o)?1+Math.floor(l*g):Vi;h>Vi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Vi}`);const p=[];let x=0;for(let E=0;E<Vi;++E){const A=E/g,b=Math.exp(-A*A/2);p.push(b),E===0?x+=b:E<h&&(x+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;_.envMap.value=e.texture,_.samples.value=h,_.weights.value=p,_.latitudinal.value=s==="latitudinal",a&&(_.poleAxis.value=a);const{_lodMax:y}=this;_.dTheta.value=m,_.mipInt.value=y-n;const v=this._sizeLods[r],T=3*v*(r>y-bn?r-y+bn:0),R=4*(this._cubeSize-v);Nr(t,T,R,3*v,2*v),d.setRenderTarget(t),d.render(u,jo)}}function i0(i){const e=[],t=[],n=[];let r=i;const o=i-bn+1+md.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let d=1/a;s>i-bn?d=md[s-i+bn-1]:s===0&&(d=0),n.push(d);const c=1/(a-2),l=-c,u=1+c,_=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,m=6,g=3,h=2,p=1,x=new Float32Array(g*m*f),y=new Float32Array(h*m*f),v=new Float32Array(p*m*f);for(let R=0;R<f;R++){const E=R%3*2/3-1,A=R>2?0:-1,b=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];x.set(b,g*m*R),y.set(_,h*m*R);const C=[R,R,R,R,R,R];v.set(C,p*m*R)}const T=new Dt;T.setAttribute("position",new $t(x,g)),T.setAttribute("uv",new $t(y,h)),T.setAttribute("faceIndex",new $t(v,p)),e.push(T),r>bn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Td(i,e,t){const n=new Ui(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function n0(i,e,t){const n=new Float32Array(Vi),r=new O(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function xd(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function bd(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ys(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const d=a.mapping,c=d===fs||d===hs,l=d===Pn||d===wn;if(c||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new vd(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||l&&u&&r(u)){t===null&&(t=new vd(i));const _=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,_),a.addEventListener("dispose",o),_.texture}else return null}}}return a}function r(a){let d=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&d++;return d===c}function o(a){const d=a.target;d.removeEventListener("dispose",o);const c=e.get(d);c!==void 0&&(e.delete(d),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function o0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function s0(i,e,t,n){const r={},o=new WeakMap;function s(u){const _=u.target;_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);for(const m in _.morphAttributes){const g=_.morphAttributes[m];for(let h=0,p=g.length;h<p;h++)e.remove(g[h])}_.removeEventListener("dispose",s),delete r[_.id];const f=o.get(_);f&&(e.remove(f),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function a(u,_){return r[_.id]===!0||(_.addEventListener("dispose",s),r[_.id]=!0,t.memory.geometries++),_}function d(u){const _=u.attributes;for(const m in _)e.update(_[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const g=f[m];for(let h=0,p=g.length;h<p;h++)e.update(g[h],i.ARRAY_BUFFER)}}function c(u){const _=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let y=0,v=x.length;y<v;y+=3){const T=x[y+0],R=x[y+1],E=x[y+2];_.push(T,R,R,E,E,T)}}else if(m!==void 0){const x=m.array;g=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const T=y+0,R=y+1,E=y+2;_.push(T,R,R,E,E,T)}}else return;const h=new(dl(_)?fl:_l)(_,1);h.version=g;const p=o.get(u);p&&e.remove(p),o.set(u,h)}function l(u){const _=o.get(u);if(_){const f=u.index;f!==null&&_.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:d,getWireframeAttribute:l}}function a0(i,e,t,n){const r=n.isWebGL2;let o;function s(_){o=_}let a,d;function c(_){a=_.type,d=_.bytesPerElement}function l(_,f){i.drawElements(o,f,a,_*d),t.update(f,o,1)}function u(_,f,m){if(m===0)return;let g,h;if(r)g=i,h="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[h](o,f,a,_*d,m),t.update(f,o,m)}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=u}function d0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function c0(i,e){return i[0]-e[0]}function l0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function u0(i,e,t){const n={},r=new Float32Array(8),o=new WeakMap,s=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function d(c,l,u){const _=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=m!==void 0?m.length:0;let h=o.get(l);if(h===void 0||h.count!==g){let w=function(){B.dispose(),o.delete(l),l.removeEventListener("dispose",w)};var f=w;h!==void 0&&h.texture.dispose();const y=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,T=l.morphAttributes.color!==void 0,R=l.morphAttributes.position||[],E=l.morphAttributes.normal||[],A=l.morphAttributes.color||[];let b=0;y===!0&&(b=1),v===!0&&(b=2),T===!0&&(b=3);let C=l.attributes.position.count*b,V=1;C>e.maxTextureSize&&(V=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const G=new Float32Array(C*V*4*g),B=new ul(G,C,V,g);B.type=Ai,B.needsUpdate=!0;const L=b*4;for(let F=0;F<g;F++){const X=R[F],Q=E[F],re=A[F],k=C*V*4*F;for(let I=0;I<X.count;I++){const q=I*L;y===!0&&(s.fromBufferAttribute(X,I),G[k+q+0]=s.x,G[k+q+1]=s.y,G[k+q+2]=s.z,G[k+q+3]=0),v===!0&&(s.fromBufferAttribute(Q,I),G[k+q+4]=s.x,G[k+q+5]=s.y,G[k+q+6]=s.z,G[k+q+7]=0),T===!0&&(s.fromBufferAttribute(re,I),G[k+q+8]=s.x,G[k+q+9]=s.y,G[k+q+10]=s.z,G[k+q+11]=re.itemSize===4?s.w:1)}}h={count:g,texture:B,size:new he(C,V)},o.set(l,h),l.addEventListener("dispose",w)}let p=0;for(let y=0;y<_.length;y++)p+=_[y];const x=l.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",_),u.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}else{const m=_===void 0?0:_.length;let g=n[l.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[l.id]=g}for(let v=0;v<m;v++){const T=g[v];T[0]=v,T[1]=_[v]}g.sort(l0);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(c0);const h=l.morphAttributes.position,p=l.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const T=a[v],R=T[0],E=T[1];R!==Number.MAX_SAFE_INTEGER&&E?(h&&l.getAttribute("morphTarget"+v)!==h[R]&&l.setAttribute("morphTarget"+v,h[R]),p&&l.getAttribute("morphNormal"+v)!==p[R]&&l.setAttribute("morphNormal"+v,p[R]),r[v]=E,x+=E):(h&&l.hasAttribute("morphTarget"+v)===!0&&l.deleteAttribute("morphTarget"+v),p&&l.hasAttribute("morphNormal"+v)===!0&&l.deleteAttribute("morphNormal"+v),r[v]=0)}const y=l.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:d}}function p0(i,e,t,n){let r=new WeakMap;function o(d){const c=n.render.frame,l=d.geometry,u=e.get(d,l);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),d.isInstancedMesh&&(d.hasEventListener("dispose",a)===!1&&d.addEventListener("dispose",a),r.get(d)!==c&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,c))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==c&&(_.update(),r.set(_,c))}return u}function s(){r=new WeakMap}function a(d){const c=d.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const Tl=new Ct,xl=new ul,bl=new Qp,Rl=new yl,Rd=[],Ed=[],Md=new Float32Array(16),Cd=new Float32Array(9),Sd=new Float32Array(4);function Nn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Rd[r];if(o===void 0&&(o=new Float32Array(r),Rd[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uo(i,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function g0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(dt(t,n))return;Sd.set(n),i.uniformMatrix2fv(this.addr,!1,Sd),ct(t,n)}}function y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(dt(t,n))return;Cd.set(n),i.uniformMatrix3fv(this.addr,!1,Cd),ct(t,n)}}function v0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(dt(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),ct(t,n)}}function T0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function E0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function P0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Tl,r)}function w0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bl,r)}function A0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rl,r)}function L0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xl,r)}function D0(i){switch(i){case 5126:return _0;case 35664:return f0;case 35665:return h0;case 35666:return m0;case 35674:return g0;case 35675:return y0;case 35676:return v0;case 5124:case 35670:return T0;case 35667:case 35671:return x0;case 35668:case 35672:return b0;case 35669:case 35673:return R0;case 5125:return E0;case 36294:return M0;case 36295:return C0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return L0}}function O0(i,e){i.uniform1fv(this.addr,e)}function I0(i,e){const t=Nn(e,this.size,2);i.uniform2fv(this.addr,t)}function U0(i,e){const t=Nn(e,this.size,3);i.uniform3fv(this.addr,t)}function N0(i,e){const t=Nn(e,this.size,4);i.uniform4fv(this.addr,t)}function F0(i,e){const t=Nn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function B0(i,e){const t=Nn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function k0(i,e){const t=Nn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function z0(i,e){i.uniform1iv(this.addr,e)}function q0(i,e){i.uniform2iv(this.addr,e)}function H0(i,e){i.uniform3iv(this.addr,e)}function G0(i,e){i.uniform4iv(this.addr,e)}function V0(i,e){i.uniform1uiv(this.addr,e)}function W0(i,e){i.uniform2uiv(this.addr,e)}function j0(i,e){i.uniform3uiv(this.addr,e)}function X0(i,e){i.uniform4uiv(this.addr,e)}function $0(i,e,t){const n=this.cache,r=e.length,o=uo(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),ct(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Tl,o[s])}function Y0(i,e,t){const n=this.cache,r=e.length,o=uo(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),ct(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||bl,o[s])}function K0(i,e,t){const n=this.cache,r=e.length,o=uo(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),ct(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Rl,o[s])}function Z0(i,e,t){const n=this.cache,r=e.length,o=uo(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),ct(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||xl,o[s])}function J0(i){switch(i){case 5126:return O0;case 35664:return I0;case 35665:return U0;case 35666:return N0;case 35674:return F0;case 35675:return B0;case 35676:return k0;case 5124:case 35670:return z0;case 35667:case 35671:return q0;case 35668:case 35672:return H0;case 35669:case 35673:return G0;case 5125:return V0;case 36294:return W0;case 36295:return j0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return Z0}}class Q0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=D0(t.type)}}class e1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=J0(t.type)}}class t1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function Pd(i,e){i.seq.push(e),i.map[e.id]=e}function i1(i,e,t){const n=i.name,r=n.length;for($o.lastIndex=0;;){const o=$o.exec(n),s=$o.lastIndex;let a=o[1];const d=o[2]==="]",c=o[3];if(d&&(a=a|0),c===void 0||c==="["&&s+2===r){Pd(t,c===void 0?new Q0(a,i,e):new e1(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new t1(a),Pd(t,u)),t=u}}}class Vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);i1(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],d=n[a.id];d.needsUpdate!==!1&&a.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function wd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let n1=0;function r1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function o1(i){switch(i){case ti:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Ad(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+r1(i.getShaderSource(e),s)}else return r}function s1(i,e){const t=o1(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function a1(i,e){let t;switch(e){case np:t="Linear";break;case rp:t="Reinhard";break;case op:t="OptimizedCineon";break;case sp:t="ACESFilmic";break;case ap:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function d1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Kn).join(`
`)}function c1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Kn(i){return i!==""}function Ld(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xs(i){return i.replace(u1,_1)}const p1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _1(i,e){let t=Fe[e];if(t===void 0){const n=p1.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xs(t)}const f1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(i){return i.replace(f1,h1)}function h1(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Id(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function g1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pn:case wn:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wn:e="ENVMAP_MODE_REFRACTION";break}return e}function v1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qs:e="ENVMAP_BLENDING_MULTIPLY";break;case tp:e="ENVMAP_BLENDING_MIX";break;case ip:e="ENVMAP_BLENDING_ADD";break}return e}function T1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function x1(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const d=m1(t),c=g1(t),l=y1(t),u=v1(t),_=T1(t),f=t.isWebGL2?"":d1(t),m=c1(o),g=r.createProgram();let h,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Kn).join(`
`),h.length>0&&(h+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Kn).join(`
`),p.length>0&&(p+=`
`)):(h=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kn).join(`
`),p=[f,Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Li?a1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,s1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kn).join(`
`)),s=xs(s),s=Ld(s,t),s=Dd(s,t),a=xs(a),a=Ld(a,t),a=Dd(a,t),s=Od(s),a=Od(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,p=["#define varying in",t.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+h+s,v=x+p+a,T=wd(r,r.VERTEX_SHADER,y),R=wd(r,r.FRAGMENT_SHADER,v);if(r.attachShader(g,T),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const b=r.getProgramInfoLog(g).trim(),C=r.getShaderInfoLog(T).trim(),V=r.getShaderInfoLog(R).trim();let G=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,T,R);else{const L=Ad(r,T,"vertex"),w=Ad(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+L+`
`+w)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(C===""||V==="")&&(B=!1);B&&(this.diagnostics={runnable:G,programLog:b,vertexShader:{log:C,prefix:h},fragmentShader:{log:V,prefix:p}})}r.deleteShader(T),r.deleteShader(R);let E;this.getUniforms=function(){return E===void 0&&(E=new Vr(r,g)),E};let A;return this.getAttributes=function(){return A===void 0&&(A=l1(r,g)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=R,this}let b1=0;class R1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new E1(e),t.set(e,n)),n}}class E1{constructor(e){this.id=b1++,this.code=e,this.usedTimes=0}}function M1(i,e,t,n,r,o,s){const a=new Vs,d=new R1,c=[],l=r.isWebGL2,u=r.logarithmicDepthBuffer,_=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function h(b,C,V,G,B){const L=G.fog,w=B.geometry,F=b.isMeshStandardMaterial?G.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||F),Q=X&&X.mapping===so?X.image.height:null,re=m[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const k=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,I=k!==void 0?k.length:0;let q=0;w.morphAttributes.position!==void 0&&(q=1),w.morphAttributes.normal!==void 0&&(q=2),w.morphAttributes.color!==void 0&&(q=3);let oe,J,W,ie;if(re){const Ze=Qt[re];oe=Ze.vertexShader,J=Ze.fragmentShader}else oe=b.vertexShader,J=b.fragmentShader,d.update(b),W=d.getVertexShaderID(b),ie=d.getFragmentShaderID(b);const N=i.getRenderTarget(),Z=B.isInstancedMesh===!0,ge=!!b.map,Me=!!b.matcap,ve=!!X,z=!!b.aoMap,Ye=!!b.lightMap,Te=!!b.bumpMap,Ce=!!b.normalMap,Ee=!!b.displacementMap,He=!!b.emissiveMap,Oe=!!b.metalnessMap,Ie=!!b.roughnessMap,Ve=b.anisotropy>0,st=b.clearcoat>0,lt=b.iridescence>0,P=b.sheen>0,M=b.transmission>0,Y=Ve&&!!b.anisotropyMap,de=st&&!!b.clearcoatMap,se=st&&!!b.clearcoatNormalMap,ce=st&&!!b.clearcoatRoughnessMap,Re=lt&&!!b.iridescenceMap,le=lt&&!!b.iridescenceThicknessMap,K=P&&!!b.sheenColorMap,D=P&&!!b.sheenRoughnessMap,ne=!!b.specularMap,ye=!!b.specularColorMap,ue=!!b.specularIntensityMap,me=M&&!!b.transmissionMap,De=M&&!!b.thicknessMap,Ge=!!b.gradientMap,U=!!b.alphaMap,_e=b.alphaTest>0,$=!!b.alphaHash,ae=!!b.extensions,fe=!!w.attributes.uv1,Be=!!w.attributes.uv2,Xe=!!w.attributes.uv3;let Ke=Li;return b.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ke=i.toneMapping),{isWebGL2:l,shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:oe,fragmentShader:J,defines:b.defines,customVertexShaderID:W,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:Z,instancingColor:Z&&B.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ti,map:ge,matcap:Me,envMap:ve,envMapMode:ve&&X.mapping,envMapCubeUVHeight:Q,aoMap:z,lightMap:Ye,bumpMap:Te,normalMap:Ce,displacementMap:_&&Ee,emissiveMap:He,normalMapObjectSpace:Ce&&b.normalMapType===Tp,normalMapTangentSpace:Ce&&b.normalMapType===sl,metalnessMap:Oe,roughnessMap:Ie,anisotropy:Ve,anisotropyMap:Y,clearcoat:st,clearcoatMap:de,clearcoatNormalMap:se,clearcoatRoughnessMap:ce,iridescence:lt,iridescenceMap:Re,iridescenceThicknessMap:le,sheen:P,sheenColorMap:K,sheenRoughnessMap:D,specularMap:ne,specularColorMap:ye,specularIntensityMap:ue,transmission:M,transmissionMap:me,thicknessMap:De,gradientMap:Ge,opaque:b.transparent===!1&&b.blending===Cn,alphaMap:U,alphaTest:_e,alphaHash:$,combine:b.combine,mapUv:ge&&g(b.map.channel),aoMapUv:z&&g(b.aoMap.channel),lightMapUv:Ye&&g(b.lightMap.channel),bumpMapUv:Te&&g(b.bumpMap.channel),normalMapUv:Ce&&g(b.normalMap.channel),displacementMapUv:Ee&&g(b.displacementMap.channel),emissiveMapUv:He&&g(b.emissiveMap.channel),metalnessMapUv:Oe&&g(b.metalnessMap.channel),roughnessMapUv:Ie&&g(b.roughnessMap.channel),anisotropyMapUv:Y&&g(b.anisotropyMap.channel),clearcoatMapUv:de&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:K&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:D&&g(b.sheenRoughnessMap.channel),specularMapUv:ne&&g(b.specularMap.channel),specularColorMapUv:ye&&g(b.specularColorMap.channel),specularIntensityMapUv:ue&&g(b.specularIntensityMap.channel),transmissionMapUv:me&&g(b.transmissionMap.channel),thicknessMapUv:De&&g(b.thicknessMap.channel),alphaMapUv:U&&g(b.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Ce||Ve),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:Be,vertexUv3s:Xe,pointsUvs:B.isPoints===!0&&!!w.attributes.uv&&(ge||U),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,useLegacyLights:i._useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hi,flipSided:b.side===Et,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ae&&b.extensions.derivatives===!0,extensionFragDepth:ae&&b.extensions.fragDepth===!0,extensionDrawBuffers:ae&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)C.push(V),C.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(x(C,b),y(C,b),C.push(i.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function x(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function y(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),b.push(a.mask)}function v(b){const C=m[b.type];let V;if(C){const G=Qt[C];V=ml.clone(G.uniforms)}else V=b.uniforms;return V}function T(b,C){let V;for(let G=0,B=c.length;G<B;G++){const L=c[G];if(L.cacheKey===C){V=L,++V.usedTimes;break}}return V===void 0&&(V=new x1(i,C,b,o),c.push(V)),V}function R(b){if(--b.usedTimes===0){const C=c.indexOf(b);c[C]=c[c.length-1],c.pop(),b.destroy()}}function E(b){d.remove(b)}function A(){d.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:A}}function C1(){let i=new WeakMap;function e(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function t(o){i.delete(o)}function n(o,s,a){i.get(o)[s]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function S1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ud(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nd(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(u,_,f,m,g,h){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:_,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:h},i[e]=p):(p.id=u.id,p.object=u,p.geometry=_,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=h),e++,p}function a(u,_,f,m,g,h){const p=s(u,_,f,m,g,h);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function d(u,_,f,m,g,h){const p=s(u,_,f,m,g,h);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,_){t.length>1&&t.sort(u||S1),n.length>1&&n.sort(_||Ud),r.length>1&&r.sort(_||Ud)}function l(){for(let u=e,_=i.length;u<_;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:d,finish:l,sort:c}}function P1(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new Nd,i.set(n,[s])):r>=o.length?(s=new Nd,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function w1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new je};break;case"SpotLight":t={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function A1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let L1=0;function D1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O1(i,e){const t=new w1,n=A1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)r.probe.push(new O);const o=new O,s=new Je,a=new Je;function d(l,u){let _=0,f=0,m=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let g=0,h=0,p=0,x=0,y=0,v=0,T=0,R=0,E=0,A=0;l.sort(D1);const b=u===!0?Math.PI:1;for(let V=0,G=l.length;V<G;V++){const B=l[V],L=B.color,w=B.intensity,F=B.distance,X=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=L.r*w*b,f+=L.g*w*b,m+=L.b*w*b;else if(B.isLightProbe)for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(B.sh.coefficients[Q],w);else if(B.isDirectionalLight){const Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*b),B.castShadow){const re=B.shadow,k=n.get(B);k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,r.directionalShadow[g]=k,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=B.shadow.matrix,v++}r.directional[g]=Q,g++}else if(B.isSpotLight){const Q=t.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(L).multiplyScalar(w*b),Q.distance=F,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,r.spot[p]=Q;const re=B.shadow;if(B.map&&(r.spotLightMap[E]=B.map,E++,re.updateMatrices(B),B.castShadow&&A++),r.spotLightMatrix[p]=re.matrix,B.castShadow){const k=n.get(B);k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,r.spotShadow[p]=k,r.spotShadowMap[p]=X,R++}p++}else if(B.isRectAreaLight){const Q=t.get(B);Q.color.copy(L).multiplyScalar(w),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=Q,x++}else if(B.isPointLight){const Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*b),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const re=B.shadow,k=n.get(B);k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,k.shadowCameraNear=re.camera.near,k.shadowCameraFar=re.camera.far,r.pointShadow[h]=k,r.pointShadowMap[h]=X,r.pointShadowMatrix[h]=B.shadow.matrix,T++}r.point[h]=Q,h++}else if(B.isHemisphereLight){const Q=t.get(B);Q.skyColor.copy(B.color).multiplyScalar(w*b),Q.groundColor.copy(B.groundColor).multiplyScalar(w*b),r.hemi[y]=Q,y++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=f,r.ambient[2]=m;const C=r.hash;(C.directionalLength!==g||C.pointLength!==h||C.spotLength!==p||C.rectAreaLength!==x||C.hemiLength!==y||C.numDirectionalShadows!==v||C.numPointShadows!==T||C.numSpotShadows!==R||C.numSpotMaps!==E)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=x,r.point.length=h,r.hemi.length=y,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+E-A,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=A,C.directionalLength=g,C.pointLength=h,C.spotLength=p,C.rectAreaLength=x,C.hemiLength=y,C.numDirectionalShadows=v,C.numPointShadows=T,C.numSpotShadows=R,C.numSpotMaps=E,r.version=L1++)}function c(l,u){let _=0,f=0,m=0,g=0,h=0;const p=u.matrixWorldInverse;for(let x=0,y=l.length;x<y;x++){const v=l[x];if(v.isDirectionalLight){const T=r.directional[_];T.direction.setFromMatrixPosition(v.matrixWorld),o.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(p),_++}else if(v.isSpotLight){const T=r.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),o.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const T=r.rectArea[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const T=r.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const T=r.hemi[h];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),h++}}}return{setup:d,setupView:c,state:r}}function Fd(i,e){const t=new O1(i,e),n=[],r=[];function o(){n.length=0,r.length=0}function s(u){n.push(u)}function a(u){r.push(u)}function d(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:d,setupLightsView:c,pushLight:s,pushShadow:a}}function I1(i,e){let t=new WeakMap;function n(o,s=0){const a=t.get(o);let d;return a===void 0?(d=new Fd(i,e),t.set(o,[d])):s>=a.length?(d=new Fd(i,e),a.push(d)):d=a[s],d}function r(){t=new WeakMap}return{get:n,dispose:r}}class U1 extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N1 extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const F1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k1(i,e,t){let n=new js;const r=new he,o=new he,s=new _t,a=new U1({depthPacking:vp}),d=new N1,c={},l=t.maxTextureSize,u={[Ii]:Et,[Et]:Ii,[hi]:hi},_=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:F1,fragmentShader:B1}),f=_.clone();f.defines.HORIZONTAL_PASS=1;const m=new Dt;m.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new jt(m,_),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let p=this.type;this.render=function(T,R,E){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||T.length===0)return;const A=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(yi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=p!==pi&&this.type===pi,B=p===pi&&this.type!==pi;for(let L=0,w=T.length;L<w;L++){const F=T[L],X=F.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Q=X.getFrameExtents();if(r.multiply(Q),o.copy(X.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(o.x=Math.floor(l/Q.x),r.x=o.x*Q.x,X.mapSize.x=o.x),r.y>l&&(o.y=Math.floor(l/Q.y),r.y=o.y*Q.y,X.mapSize.y=o.y)),X.map===null||G===!0||B===!0){const k=this.type!==pi?{minFilter:bt,magFilter:bt}:{};X.map!==null&&X.map.dispose(),X.map=new Ui(r.x,r.y,k),X.map.texture.name=F.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const re=X.getViewportCount();for(let k=0;k<re;k++){const I=X.getViewport(k);s.set(o.x*I.x,o.y*I.y,o.x*I.z,o.y*I.w),V.viewport(s),X.updateMatrices(F,k),n=X.getFrustum(),v(R,E,X.camera,F,this.type)}X.isPointLightShadow!==!0&&this.type===pi&&x(X,E),X.needsUpdate=!1}p=this.type,h.needsUpdate=!1,i.setRenderTarget(A,b,C)};function x(T,R){const E=e.update(g);_.defines.VSM_SAMPLES!==T.blurSamples&&(_.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,_.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ui(r.x,r.y)),_.uniforms.shadow_pass.value=T.map.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,E,_,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,E,f,g,null)}function y(T,R,E,A){let b=null;const C=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)b=C;else if(b=E.isPointLight===!0?d:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=b.uuid,G=R.uuid;let B=c[V];B===void 0&&(B={},c[V]=B);let L=B[G];L===void 0&&(L=b.clone(),B[G]=L),b=L}if(b.visible=R.visible,b.wireframe=R.wireframe,A===pi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=i.properties.get(b);V.light=E}return b}function v(T,R,E,A,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===pi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const G=e.update(T),B=T.material;if(Array.isArray(B)){const L=G.groups;for(let w=0,F=L.length;w<F;w++){const X=L[w],Q=B[X.materialIndex];if(Q&&Q.visible){const re=y(T,Q,A,b);i.renderBufferDirect(E,null,G,re,T,X)}}}else if(B.visible){const L=y(T,B,A,b);i.renderBufferDirect(E,null,G,L,T,null)}}const V=T.children;for(let G=0,B=V.length;G<B;G++)v(V[G],R,E,A,b)}}function z1(i,e,t){const n=t.isWebGL2;function r(){let U=!1;const _e=new _t;let $=null;const ae=new _t(0,0,0,0);return{setMask:function(fe){$!==fe&&!U&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){U=fe},setClear:function(fe,Be,Xe,Ke,bi){bi===!0&&(fe*=Ke,Be*=Ke,Xe*=Ke),_e.set(fe,Be,Xe,Ke),ae.equals(_e)===!1&&(i.clearColor(fe,Be,Xe,Ke),ae.copy(_e))},reset:function(){U=!1,$=null,ae.set(-1,0,0,0)}}}function o(){let U=!1,_e=null,$=null,ae=null;return{setTest:function(fe){fe?N(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(fe){_e!==fe&&!U&&(i.depthMask(fe),_e=fe)},setFunc:function(fe){if($!==fe){switch(fe){case $u:i.depthFunc(i.NEVER);break;case Yu:i.depthFunc(i.ALWAYS);break;case Ku:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Zu:i.depthFunc(i.EQUAL);break;case Ju:i.depthFunc(i.GEQUAL);break;case Qu:i.depthFunc(i.GREATER);break;case ep:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=fe}},setLocked:function(fe){U=fe},setClear:function(fe){ae!==fe&&(i.clearDepth(fe),ae=fe)},reset:function(){U=!1,_e=null,$=null,ae=null}}}function s(){let U=!1,_e=null,$=null,ae=null,fe=null,Be=null,Xe=null,Ke=null,bi=null;return{setTest:function(Ze){U||(Ze?N(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(Ze){_e!==Ze&&!U&&(i.stencilMask(Ze),_e=Ze)},setFunc:function(Ze,Zt,yt){($!==Ze||ae!==Zt||fe!==yt)&&(i.stencilFunc(Ze,Zt,yt),$=Ze,ae=Zt,fe=yt)},setOp:function(Ze,Zt,yt){(Be!==Ze||Xe!==Zt||Ke!==yt)&&(i.stencilOp(Ze,Zt,yt),Be=Ze,Xe=Zt,Ke=yt)},setLocked:function(Ze){U=Ze},setClear:function(Ze){bi!==Ze&&(i.clearStencil(Ze),bi=Ze)},reset:function(){U=!1,_e=null,$=null,ae=null,fe=null,Be=null,Xe=null,Ke=null,bi=null}}}const a=new r,d=new o,c=new s,l=new WeakMap,u=new WeakMap;let _={},f={},m=new WeakMap,g=[],h=null,p=!1,x=null,y=null,v=null,T=null,R=null,E=null,A=null,b=!1,C=null,V=null,G=null,B=null,L=null;const w=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),F=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),F=X>=2);let re=null,k={};const I=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),oe=new _t().fromArray(I),J=new _t().fromArray(q);function W(U,_e,$,ae){const fe=new Uint8Array(4),Be=i.createTexture();i.bindTexture(U,Be),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<$;Xe++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(_e,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(_e+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return Be}const ie={};ie[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ie[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),d.setClear(1),c.setClear(0),N(i.DEPTH_TEST),d.setFunc(_s),Ee(!1),He(ba),N(i.CULL_FACE),Te(yi);function N(U){_[U]!==!0&&(i.enable(U),_[U]=!0)}function Z(U){_[U]!==!1&&(i.disable(U),_[U]=!1)}function ge(U,_e){return f[U]!==_e?(i.bindFramebuffer(U,_e),f[U]=_e,n&&(U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_e),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_e)),!0):!1}function Me(U,_e){let $=g,ae=!1;if(U)if($=m.get(_e),$===void 0&&($=[],m.set(_e,$)),U.isWebGLMultipleRenderTargets){const fe=U.texture;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Be=0,Xe=fe.length;Be<Xe;Be++)$[Be]=i.COLOR_ATTACHMENT0+Be;$.length=fe.length,ae=!0}}else $[0]!==i.COLOR_ATTACHMENT0&&($[0]=i.COLOR_ATTACHMENT0,ae=!0);else $[0]!==i.BACK&&($[0]=i.BACK,ae=!0);ae&&(t.isWebGL2?i.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function ve(U){return h!==U?(i.useProgram(U),h=U,!0):!1}const z={[Tn]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Bu]:i.FUNC_REVERSE_SUBTRACT};if(n)z[Ca]=i.MIN,z[Sa]=i.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(z[Ca]=U.MIN_EXT,z[Sa]=U.MAX_EXT)}const Ye={[ku]:i.ZERO,[zu]:i.ONE,[qu]:i.SRC_COLOR,[Kc]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Hu]:i.ONE_MINUS_SRC_COLOR,[Zc]:i.ONE_MINUS_SRC_ALPHA,[ju]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA};function Te(U,_e,$,ae,fe,Be,Xe,Ke){if(U===yi){p===!0&&(Z(i.BLEND),p=!1);return}if(p===!1&&(N(i.BLEND),p=!0),U!==Nu){if(U!==x||Ke!==b){if((y!==Tn||R!==Tn)&&(i.blendEquation(i.FUNC_ADD),y=Tn,R=Tn),Ke)switch(U){case Cn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.ONE,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Cn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ma:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,T=null,E=null,A=null,x=U,b=Ke}return}fe=fe||_e,Be=Be||$,Xe=Xe||ae,(_e!==y||fe!==R)&&(i.blendEquationSeparate(z[_e],z[fe]),y=_e,R=fe),($!==v||ae!==T||Be!==E||Xe!==A)&&(i.blendFuncSeparate(Ye[$],Ye[ae],Ye[Be],Ye[Xe]),v=$,T=ae,E=Be,A=Xe),x=U,b=!1}function Ce(U,_e){U.side===hi?Z(i.CULL_FACE):N(i.CULL_FACE);let $=U.side===Et;_e&&($=!$),Ee($),U.blending===Cn&&U.transparent===!1?Te(yi):Te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),d.setFunc(U.depthFunc),d.setTest(U.depthTest),d.setMask(U.depthWrite),a.setMask(U.colorWrite);const ae=U.stencilWrite;c.setTest(ae),ae&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(U){C!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),C=U)}function He(U){U!==Ou?(N(i.CULL_FACE),U!==V&&(U===ba?i.cullFace(i.BACK):U===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),V=U}function Oe(U){U!==G&&(F&&i.lineWidth(U),G=U)}function Ie(U,_e,$){U?(N(i.POLYGON_OFFSET_FILL),(B!==_e||L!==$)&&(i.polygonOffset(_e,$),B=_e,L=$)):Z(i.POLYGON_OFFSET_FILL)}function Ve(U){U?N(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function st(U){U===void 0&&(U=i.TEXTURE0+w-1),re!==U&&(i.activeTexture(U),re=U)}function lt(U,_e,$){$===void 0&&(re===null?$=i.TEXTURE0+w-1:$=re);let ae=k[$];ae===void 0&&(ae={type:void 0,texture:void 0},k[$]=ae),(ae.type!==U||ae.texture!==_e)&&(re!==$&&(i.activeTexture($),re=$),i.bindTexture(U,_e||ie[U]),ae.type=U,ae.texture=_e)}function P(){const U=k[re];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(U){oe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),oe.copy(U))}function ue(U){J.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),J.copy(U))}function me(U,_e){let $=u.get(_e);$===void 0&&($=new WeakMap,u.set(_e,$));let ae=$.get(U);ae===void 0&&(ae=i.getUniformBlockIndex(_e,U.name),$.set(U,ae))}function De(U,_e){const ae=u.get(_e).get(U);l.get(_e)!==ae&&(i.uniformBlockBinding(_e,ae,U.__bindingPointIndex),l.set(_e,ae))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},re=null,k={},f={},m=new WeakMap,g=[],h=null,p=!1,x=null,y=null,v=null,T=null,R=null,E=null,A=null,b=!1,C=null,V=null,G=null,B=null,L=null,oe.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),a.reset(),d.reset(),c.reset()}return{buffers:{color:a,depth:d,stencil:c},enable:N,disable:Z,bindFramebuffer:ge,drawBuffers:Me,useProgram:ve,setBlending:Te,setMaterial:Ce,setFlipSided:Ee,setCullFace:He,setLineWidth:Oe,setPolygonOffset:Ie,setScissorTest:Ve,activeTexture:st,bindTexture:lt,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:D,texImage3D:ne,updateUBOMapping:me,uniformBlockBinding:De,texStorage2D:le,texStorage3D:K,texSubImage2D:de,texSubImage3D:se,compressedTexSubImage2D:ce,compressedTexSubImage3D:Re,scissor:ye,viewport:ue,reset:Ge}}function q1(i,e,t,n,r,o,s){const a=r.isWebGL2,d=r.maxTextures,c=r.maxCubemapSize,l=r.maxTextureSize,u=r.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let g;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return p?new OffscreenCanvas(P,M):dr("canvas")}function y(P,M,Y,de){let se=1;if((P.width>de||P.height>de)&&(se=de/Math.max(P.width,P.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ce=M?Zr:Math.floor,Re=ce(se*P.width),le=ce(se*P.height);g===void 0&&(g=x(Re,le));const K=Y?x(Re,le):g;return K.width=Re,K.height=le,K.getContext("2d").drawImage(P,0,0,Re,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Re+"x"+le+")."),K}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return vs(P.width)&&vs(P.height)}function T(P){return a?!1:P.wrapS!==Vt||P.wrapT!==Vt||P.minFilter!==bt&&P.minFilter!==Ut}function R(P,M){return P.generateMipmaps&&M&&P.minFilter!==bt&&P.minFilter!==Ut}function E(P){i.generateMipmap(P)}function A(P,M,Y,de,se=!1){if(a===!1)return M;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce=M;return M===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8)),M===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.R8UI),Y===i.UNSIGNED_SHORT&&(ce=i.R16UI),Y===i.UNSIGNED_INT&&(ce=i.R32UI),Y===i.BYTE&&(ce=i.R8I),Y===i.SHORT&&(ce=i.R16I),Y===i.INT&&(ce=i.R32I)),M===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8)),M===i.RGBA&&(Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=de===Ue&&se===!1?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)),(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(P,M,Y){return R(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==bt&&P.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){return P===bt||P===Pa||P===bo?i.NEAREST:i.LINEAR}function V(P){const M=P.target;M.removeEventListener("dispose",V),B(M),M.isVideoTexture&&m.delete(M)}function G(P){const M=P.target;M.removeEventListener("dispose",G),w(M)}function B(P){const M=n.get(P);if(M.__webglInit===void 0)return;const Y=P.source,de=h.get(Y);if(de){const se=de[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&L(P),Object.keys(de).length===0&&h.delete(Y)}n.remove(P)}function L(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const Y=P.source,de=h.get(Y);delete de[M.__cacheKey],s.memory.textures--}function w(P){const M=P.texture,Y=n.get(P),de=n.get(M);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),s.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(Y.__webglFramebuffer[se]))for(let ce=0;ce<Y.__webglFramebuffer[se].length;ce++)i.deleteFramebuffer(Y.__webglFramebuffer[se][ce]);else i.deleteFramebuffer(Y.__webglFramebuffer[se]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[se])}else{if(Array.isArray(Y.__webglFramebuffer))for(let se=0;se<Y.__webglFramebuffer.length;se++)i.deleteFramebuffer(Y.__webglFramebuffer[se]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let se=0;se<Y.__webglColorRenderbuffer.length;se++)Y.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[se]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let se=0,ce=M.length;se<ce;se++){const Re=n.get(M[se]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),s.memory.textures--),n.remove(M[se])}n.remove(M),n.remove(P)}let F=0;function X(){F=0}function Q(){const P=F;return P>=d&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+d),F+=1,P}function re(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function k(P,M){const Y=n.get(P);if(P.isVideoTexture&&st(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const de=P.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(Y,P,M);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+M)}function I(P,M){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ge(Y,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+M)}function q(P,M){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ge(Y,P,M);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+M)}function oe(P,M){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Me(Y,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+M)}const J={[ms]:i.REPEAT,[Vt]:i.CLAMP_TO_EDGE,[gs]:i.MIRRORED_REPEAT},W={[bt]:i.NEAREST,[Pa]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[dp]:i.LINEAR_MIPMAP_NEAREST,[sr]:i.LINEAR_MIPMAP_LINEAR},ie={[bp]:i.NEVER,[wp]:i.ALWAYS,[Rp]:i.LESS,[Mp]:i.LEQUAL,[Ep]:i.EQUAL,[Pp]:i.GEQUAL,[Cp]:i.GREATER,[Sp]:i.NOTEQUAL};function N(P,M,Y){if(Y?(i.texParameteri(P,i.TEXTURE_WRAP_S,J[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,J[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,J[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,W[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,W[M.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Vt||M.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,C(M.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==bt&&M.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===bt||M.minFilter!==bo&&M.minFilter!==sr||M.type===Ai&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===An&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(P,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Z(P,M){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",V));const de=M.source;let se=h.get(de);se===void 0&&(se={},h.set(de,se));const ce=re(M);if(ce!==P.__cacheKey){se[ce]===void 0&&(se[ce]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),se[ce].usedTimes++;const Re=se[P.__cacheKey];Re!==void 0&&(se[P.__cacheKey].usedTimes--,Re.usedTimes===0&&L(M)),P.__cacheKey=ce,P.__webglTexture=se[ce].texture}return Y}function ge(P,M,Y){let de=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=i.TEXTURE_3D);const se=Z(P,M),ce=M.source;t.bindTexture(de,P.__webglTexture,i.TEXTURE0+Y);const Re=n.get(ce);if(ce.version!==Re.__version||se===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const le=T(M)&&v(M.image)===!1;let K=y(M.image,le,!1,l);K=lt(M,K);const D=v(K)||a,ne=o.convert(M.format,M.colorSpace);let ye=o.convert(M.type),ue=A(M.internalFormat,ne,ye,M.colorSpace);N(de,M,D);let me;const De=M.mipmaps,Ge=a&&M.isVideoTexture!==!0,U=Re.__version===void 0||se===!0,_e=b(M,K,D);if(M.isDepthTexture)ue=i.DEPTH_COMPONENT,a?M.type===Ai?ue=i.DEPTH_COMPONENT32F:M.type===wi?ue=i.DEPTH_COMPONENT24:M.type===ji?ue=i.DEPTH24_STENCIL8:ue=i.DEPTH_COMPONENT16:M.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Xi&&ue===i.DEPTH_COMPONENT&&M.type!==Hs&&M.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=wi,ye=o.convert(M.type)),M.format===Ln&&ue===i.DEPTH_COMPONENT&&(ue=i.DEPTH_STENCIL,M.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ji,ye=o.convert(M.type))),U&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ue,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ue,K.width,K.height,0,ne,ye,null));else if(M.isDataTexture)if(De.length>0&&D){Ge&&U&&t.texStorage2D(i.TEXTURE_2D,_e,ue,De[0].width,De[0].height);for(let $=0,ae=De.length;$<ae;$++)me=De[$],Ge?t.texSubImage2D(i.TEXTURE_2D,$,0,0,me.width,me.height,ne,ye,me.data):t.texImage2D(i.TEXTURE_2D,$,ue,me.width,me.height,0,ne,ye,me.data);M.generateMipmaps=!1}else Ge?(U&&t.texStorage2D(i.TEXTURE_2D,_e,ue,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,ne,ye,K.data)):t.texImage2D(i.TEXTURE_2D,0,ue,K.width,K.height,0,ne,ye,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&U&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ue,De[0].width,De[0].height,K.depth);for(let $=0,ae=De.length;$<ae;$++)me=De[$],M.format!==Wt?ne!==null?Ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,me.width,me.height,K.depth,ne,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ue,me.width,me.height,K.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,me.width,me.height,K.depth,ne,ye,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,ue,me.width,me.height,K.depth,0,ne,ye,me.data)}else{Ge&&U&&t.texStorage2D(i.TEXTURE_2D,_e,ue,De[0].width,De[0].height);for(let $=0,ae=De.length;$<ae;$++)me=De[$],M.format!==Wt?ne!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,me.width,me.height,ne,me.data):t.compressedTexImage2D(i.TEXTURE_2D,$,ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(i.TEXTURE_2D,$,0,0,me.width,me.height,ne,ye,me.data):t.texImage2D(i.TEXTURE_2D,$,ue,me.width,me.height,0,ne,ye,me.data)}else if(M.isDataArrayTexture)Ge?(U&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ue,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ne,ye,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,K.width,K.height,K.depth,0,ne,ye,K.data);else if(M.isData3DTexture)Ge?(U&&t.texStorage3D(i.TEXTURE_3D,_e,ue,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ne,ye,K.data)):t.texImage3D(i.TEXTURE_3D,0,ue,K.width,K.height,K.depth,0,ne,ye,K.data);else if(M.isFramebufferTexture){if(U)if(Ge)t.texStorage2D(i.TEXTURE_2D,_e,ue,K.width,K.height);else{let $=K.width,ae=K.height;for(let fe=0;fe<_e;fe++)t.texImage2D(i.TEXTURE_2D,fe,ue,$,ae,0,ne,ye,null),$>>=1,ae>>=1}}else if(De.length>0&&D){Ge&&U&&t.texStorage2D(i.TEXTURE_2D,_e,ue,De[0].width,De[0].height);for(let $=0,ae=De.length;$<ae;$++)me=De[$],Ge?t.texSubImage2D(i.TEXTURE_2D,$,0,0,ne,ye,me):t.texImage2D(i.TEXTURE_2D,$,ue,ne,ye,me);M.generateMipmaps=!1}else Ge?(U&&t.texStorage2D(i.TEXTURE_2D,_e,ue,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,ye,K)):t.texImage2D(i.TEXTURE_2D,0,ue,ne,ye,K);R(M,D)&&E(de),Re.__version=ce.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Me(P,M,Y){if(M.image.length!==6)return;const de=Z(P,M),se=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);const ce=n.get(se);if(se.version!==ce.__version||de===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,K=[];for(let $=0;$<6;$++)!Re&&!le?K[$]=y(M.image[$],!1,!0,c):K[$]=le?M.image[$].image:M.image[$],K[$]=lt(M,K[$]);const D=K[0],ne=v(D)||a,ye=o.convert(M.format,M.colorSpace),ue=o.convert(M.type),me=A(M.internalFormat,ye,ue,M.colorSpace),De=a&&M.isVideoTexture!==!0,Ge=ce.__version===void 0||de===!0;let U=b(M,D,ne);N(i.TEXTURE_CUBE_MAP,M,ne);let _e;if(Re){De&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,U,me,D.width,D.height);for(let $=0;$<6;$++){_e=K[$].mipmaps;for(let ae=0;ae<_e.length;ae++){const fe=_e[ae];M.format!==Wt?ye!==null?De?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,fe.width,fe.height,ye,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,fe.width,fe.height,ye,ue,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,me,fe.width,fe.height,0,ye,ue,fe.data)}}}else{_e=M.mipmaps,De&&Ge&&(_e.length>0&&U++,t.texStorage2D(i.TEXTURE_CUBE_MAP,U,me,K[0].width,K[0].height));for(let $=0;$<6;$++)if(le){De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,K[$].width,K[$].height,ye,ue,K[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,me,K[$].width,K[$].height,0,ye,ue,K[$].data);for(let ae=0;ae<_e.length;ae++){const Be=_e[ae].image[$].image;De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,Be.width,Be.height,ye,ue,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,me,Be.width,Be.height,0,ye,ue,Be.data)}}else{De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,ue,K[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,me,ye,ue,K[$]);for(let ae=0;ae<_e.length;ae++){const fe=_e[ae];De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,ye,ue,fe.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,me,ye,ue,fe.image[$])}}}R(M,ne)&&E(i.TEXTURE_CUBE_MAP),ce.__version=se.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ve(P,M,Y,de,se,ce){const Re=o.convert(Y.format,Y.colorSpace),le=o.convert(Y.type),K=A(Y.internalFormat,Re,le,Y.colorSpace);if(!n.get(M).__hasExternalTextures){const ne=Math.max(1,M.width>>ce),ye=Math.max(1,M.height>>ce);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ce,K,ne,ye,M.depth,0,Re,le,null):t.texImage2D(se,ce,K,ne,ye,0,Re,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Ve(M)?_.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,se,n.get(Y).__webglTexture,0,Ie(M)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,se,n.get(Y).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function z(P,M,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer&&!M.stencilBuffer){let de=i.DEPTH_COMPONENT16;if(Y||Ve(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===Ai?de=i.DEPTH_COMPONENT32F:se.type===wi&&(de=i.DEPTH_COMPONENT24));const ce=Ie(M);Ve(M)?_.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,de,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,de,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,de,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(M.depthBuffer&&M.stencilBuffer){const de=Ie(M);Y&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,M.width,M.height):Ve(M)?_.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const de=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<de.length;se++){const ce=de[se],Re=o.convert(ce.format,ce.colorSpace),le=o.convert(ce.type),K=A(ce.internalFormat,Re,le,ce.colorSpace),D=Ie(M);Y&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,D,K,M.width,M.height):Ve(M)?_.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D,K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const de=n.get(M.depthTexture).__webglTexture,se=Ie(M);if(M.depthTexture.format===Xi)Ve(M)?_.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(M.depthTexture.format===Ln)Ve(M)?_.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Te(P){const M=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ye(M.__webglFramebuffer,P)}else if(Y){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]=i.createRenderbuffer(),z(M.__webglDepthbuffer[de],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),z(M.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(P,M,Y){const de=n.get(P);M!==void 0&&ve(de.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Te(P)}function Ee(P){const M=P.texture,Y=n.get(P),de=n.get(M);P.addEventListener("dispose",G),P.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=M.version,s.memory.textures++);const se=P.isWebGLCubeRenderTarget===!0,ce=P.isWebGLMultipleRenderTargets===!0,Re=v(P)||a;if(se){Y.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[le]=[];for(let K=0;K<M.mipmaps.length;K++)Y.__webglFramebuffer[le][K]=i.createFramebuffer()}else Y.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)Y.__webglFramebuffer[le]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(ce)if(r.drawBuffers){const le=P.texture;for(let K=0,D=le.length;K<D;K++){const ne=n.get(le[K]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ve(P)===!1){const le=ce?M:[M];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let K=0;K<le.length;K++){const D=le[K];Y.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[K]);const ne=o.convert(D.format,D.colorSpace),ye=o.convert(D.type),ue=A(D.internalFormat,ne,ye,D.colorSpace,P.isXRRenderTarget===!0),me=Ie(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ue,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,Y.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),z(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),N(i.TEXTURE_CUBE_MAP,M,Re);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)ve(Y.__webglFramebuffer[le][K],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,K);else ve(Y.__webglFramebuffer[le],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);R(M,Re)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const le=P.texture;for(let K=0,D=le.length;K<D;K++){const ne=le[K],ye=n.get(ne);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),N(i.TEXTURE_2D,ne,Re),ve(Y.__webglFramebuffer,P,ne,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),R(ne,Re)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?le=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,de.__webglTexture),N(le,M,Re),a&&M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)ve(Y.__webglFramebuffer[K],P,M,i.COLOR_ATTACHMENT0,le,K);else ve(Y.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,le,0);R(M,Re)&&E(le),t.unbindTexture()}P.depthBuffer&&Te(P)}function He(P){const M=v(P)||a,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let de=0,se=Y.length;de<se;de++){const ce=Y[de];if(R(ce,M)){const Re=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(ce).__webglTexture;t.bindTexture(Re,le),E(Re),t.unbindTexture()}}}function Oe(P){if(a&&P.samples>0&&Ve(P)===!1){const M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,de=P.height;let se=i.COLOR_BUFFER_BIT;const ce=[],Re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(P),K=P.isWebGLMultipleRenderTargets===!0;if(K)for(let D=0;D<M.length;D++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let D=0;D<M.length;D++){ce.push(i.COLOR_ATTACHMENT0+D),P.depthBuffer&&ce.push(Re);const ne=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ne===!1&&(P.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),K&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[D]),ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Re])),K){const ye=n.get(M[D]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,Y,de,0,0,Y,de,se,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let D=0;D<M.length;D++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,le.__webglColorRenderbuffer[D]);const ne=n.get(M[D]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ie(P){return Math.min(u,P.samples)}function Ve(P){const M=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function st(P){const M=s.render.frame;m.get(P)!==M&&(m.set(P,M),P.update())}function lt(P,M){const Y=P.colorSpace,de=P.format,se=P.type;return P.isCompressedTexture===!0||P.format===ys||Y!==ti&&Y!==Yi&&(Y===Ue?a===!1?e.has("EXT_sRGB")===!0&&de===Wt?(P.format=ys,P.minFilter=Ut,P.generateMipmaps=!1):M=cl.sRGBToLinear(M):(de!==Wt||se!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}this.allocateTextureUnit=Q,this.resetTextureUnits=X,this.setTexture2D=k,this.setTexture2DArray=I,this.setTexture3D=q,this.setTextureCube=oe,this.rebindTextures=Ce,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ve}function H1(i,e,t){const n=t.isWebGL2;function r(o,s=Yi){let a;if(o===Di)return i.UNSIGNED_BYTE;if(o===el)return i.UNSIGNED_SHORT_4_4_4_4;if(o===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(o===cp)return i.BYTE;if(o===lp)return i.SHORT;if(o===Hs)return i.UNSIGNED_SHORT;if(o===Qc)return i.INT;if(o===wi)return i.UNSIGNED_INT;if(o===Ai)return i.FLOAT;if(o===An)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===up)return i.ALPHA;if(o===Wt)return i.RGBA;if(o===pp)return i.LUMINANCE;if(o===_p)return i.LUMINANCE_ALPHA;if(o===Xi)return i.DEPTH_COMPONENT;if(o===Ln)return i.DEPTH_STENCIL;if(o===ys)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===fp)return i.RED;if(o===il)return i.RED_INTEGER;if(o===hp)return i.RG;if(o===nl)return i.RG_INTEGER;if(o===rl)return i.RGBA_INTEGER;if(o===Ro||o===Eo||o===Mo||o===Co)if(s===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Ro)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Ro)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Mo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===wa||o===Aa||o===La||o===Da)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Aa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===La)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Da)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===mp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Oa||o===Ia)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Oa)return s===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Ia)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Ua||o===Na||o===Fa||o===Ba||o===ka||o===za||o===qa||o===Ha||o===Ga||o===Va||o===Wa||o===ja||o===Xa||o===$a)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Ua)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Na)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Fa)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ba)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ka)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===za)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===qa)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ha)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Ga)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Va)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Wa)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ja)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Xa)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===$a)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===So)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===So)return s===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===gp||o===Ya||o===Ka||o===Za)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===So)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Ya)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Ka)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Za)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===ji?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class G1 extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Rn=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}};const V1={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,d=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const h=t.getJointPose(g,n),p=this._getHandJoint(c,g);h!==null&&(p.matrix.fromArray(h.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=h.radius),p.visible=h!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],_=l.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&_>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&_<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V1)))}return a!==null&&(a.visible=r!==null),d!==null&&(d.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class W1 extends Ct{constructor(e,t,n,r,o,s,a,d,c,l){if(l=l!==void 0?l:Xi,l!==Xi&&l!==Ln)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Xi&&(n=wi),n===void 0&&l===Ln&&(n=ji),super(null,r,o,s,a,d,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=d!==void 0?d:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class j1 extends Kt{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",d=1,c=null,l=null,u=null,_=null,f=null,m=null;const g=t.getContextAttributes();let h=null,p=null;const x=[],y=[],v=new Nt;v.layers.enable(1),v.viewport=new _t;const T=new Nt;T.layers.enable(2),T.viewport=new _t;const R=[v,T],E=new G1;E.layers.enable(1),E.layers.enable(2);let A=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let q=x[I];return q===void 0&&(q=new Yo,x[I]=q),q.getTargetRaySpace()},this.getControllerGrip=function(I){let q=x[I];return q===void 0&&(q=new Yo,x[I]=q),q.getGripSpace()},this.getHand=function(I){let q=x[I];return q===void 0&&(q=new Yo,x[I]=q),q.getHandSpace()};function C(I){const q=y.indexOf(I.inputSource);if(q===-1)return;const oe=x[q];oe!==void 0&&(oe.update(I.inputSource,I.frame,c||s),oe.dispatchEvent({type:I.type,data:I.inputSource}))}function V(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",G);for(let I=0;I<x.length;I++){const q=y[I];q!==null&&(y[I]=null,x[I].disconnect(q))}A=null,b=null,e.setRenderTarget(h),f=null,_=null,u=null,r=null,p=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return _!==null?_:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",V),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:f}),p=new Ui(f.framebufferWidth,f.framebufferHeight,{format:Wt,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let q=null,oe=null,J=null;g.depth&&(J=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=g.stencil?Ln:Xi,oe=g.stencil?ji:wi);const W={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:o};u=new XRWebGLBinding(r,t),_=u.createProjectionLayer(W),r.updateRenderState({layers:[_]}),p=new Ui(_.textureWidth,_.textureHeight,{format:Wt,type:Di,depthTexture:new W1(_.textureWidth,_.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ie=e.properties.get(p);ie.__ignoreDepthValues=_.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(d),c=null,s=await r.requestReferenceSpace(a),k.setContext(r),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(I){for(let q=0;q<I.removed.length;q++){const oe=I.removed[q],J=y.indexOf(oe);J>=0&&(y[J]=null,x[J].disconnect(oe))}for(let q=0;q<I.added.length;q++){const oe=I.added[q];let J=y.indexOf(oe);if(J===-1){for(let ie=0;ie<x.length;ie++)if(ie>=y.length){y.push(oe),J=ie;break}else if(y[ie]===null){y[ie]=oe,J=ie;break}if(J===-1)break}const W=x[J];W&&W.connect(oe)}}const B=new O,L=new O;function w(I,q,oe){B.setFromMatrixPosition(q.matrixWorld),L.setFromMatrixPosition(oe.matrixWorld);const J=B.distanceTo(L),W=q.projectionMatrix.elements,ie=oe.projectionMatrix.elements,N=W[14]/(W[10]-1),Z=W[14]/(W[10]+1),ge=(W[9]+1)/W[5],Me=(W[9]-1)/W[5],ve=(W[8]-1)/W[0],z=(ie[8]+1)/ie[0],Ye=N*ve,Te=N*z,Ce=J/(-ve+z),Ee=Ce*-ve;q.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ee),I.translateZ(Ce),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const He=N+Ce,Oe=Z+Ce,Ie=Ye-Ee,Ve=Te+(J-Ee),st=ge*Z/Oe*He,lt=Me*Z/Oe*He;I.projectionMatrix.makePerspective(Ie,Ve,st,lt,He,Oe),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function F(I,q){q===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(q.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;E.near=T.near=v.near=I.near,E.far=T.far=v.far=I.far,(A!==E.near||b!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,b=E.far);const q=I.parent,oe=E.cameras;F(E,q);for(let J=0;J<oe.length;J++)F(oe[J],q);oe.length===2?w(E,v,T):E.projectionMatrix.copy(v.projectionMatrix),X(I,E,q)};function X(I,q,oe){oe===null?I.matrix.copy(q.matrixWorld):(I.matrix.copy(oe.matrixWorld),I.matrix.invert(),I.matrix.multiply(q.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const J=I.children;for(let W=0,ie=J.length;W<ie;W++)J[W].updateMatrixWorld(!0);I.projectionMatrix.copy(q.projectionMatrix),I.projectionMatrixInverse.copy(q.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=ar*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(_===null&&f===null))return d},this.setFoveation=function(I){d=I,_!==null&&(_.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let Q=null;function re(I,q){if(l=q.getViewerPose(c||s),m=q,l!==null){const oe=l.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let J=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,J=!0);for(let W=0;W<oe.length;W++){const ie=oe[W];let N=null;if(f!==null)N=f.getViewport(ie);else{const ge=u.getViewSubImage(_,ie);N=ge.viewport,W===0&&(e.setRenderTargetTextures(p,ge.colorTexture,_.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(p))}let Z=R[W];Z===void 0&&(Z=new Nt,Z.layers.enable(W),Z.viewport=new _t,R[W]=Z),Z.matrix.fromArray(ie.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ie.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(N.x,N.y,N.width,N.height),W===0&&(E.matrix.copy(Z.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),J===!0&&E.cameras.push(Z)}}for(let oe=0;oe<x.length;oe++){const J=y[oe],W=x[oe];J!==null&&W!==void 0&&W.update(J,q,c||s)}Q&&Q(I,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),m=null}const k=new vl;k.setAnimationLoop(re),this.setAnimationLoop=function(I){Q=I},this.dispose=function(){}}}function X1(i,e){function t(h,p){h.matrixAutoUpdate===!0&&h.updateMatrix(),p.value.copy(h.matrix)}function n(h,p){p.color.getRGB(h.fogColor.value,hl(i)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function r(h,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(h,p):p.isMeshToonMaterial?(o(h,p),u(h,p)):p.isMeshPhongMaterial?(o(h,p),l(h,p)):p.isMeshStandardMaterial?(o(h,p),_(h,p),p.isMeshPhysicalMaterial&&f(h,p,v)):p.isMeshMatcapMaterial?(o(h,p),m(h,p)):p.isMeshDepthMaterial?o(h,p):p.isMeshDistanceMaterial?(o(h,p),g(h,p)):p.isMeshNormalMaterial?o(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&a(h,p)):p.isPointsMaterial?d(h,p,x,y):p.isSpriteMaterial?c(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.bumpMap&&(h.bumpMap.value=p.bumpMap,t(p.bumpMap,h.bumpMapTransform),h.bumpScale.value=p.bumpScale,p.side===Et&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,t(p.normalMap,h.normalMapTransform),h.normalScale.value.copy(p.normalScale),p.side===Et&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,t(p.displacementMap,h.displacementMapTransform),h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,h.emissiveMapTransform)),p.specularMap&&(h.specularMap.value=p.specularMap,t(p.specularMap,h.specularMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(h.envMap.value=x,h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,h.lightMapTransform)}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,h.aoMapTransform))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform))}function a(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function d(h,p,x,y){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*x,h.scale.value=y*.5,p.map&&(h.map.value=p.map,t(p.map,h.uvTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function c(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function l(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function _(h,p){h.metalness.value=p.metalness,p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,h.metalnessMapTransform)),h.roughness.value=p.roughness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,h.roughnessMapTransform)),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,x){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,h.sheenColorMapTransform)),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,h.sheenRoughnessMapTransform))),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,h.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(h.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Et&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,h.iridescenceMapTransform)),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=x.texture,h.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,h.transmissionMapTransform)),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(h.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(h.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,h.specularColorMapTransform)),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,h.specularIntensityMapTransform))}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function g(h,p){const x=e.get(p).light;h.referencePosition.value.setFromMatrixPosition(x.matrixWorld),h.nearDistance.value=x.shadow.camera.near,h.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $1(i,e,t,n){let r={},o={},s=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=r[x.id];v===void 0&&(m(x),v=l(x),r[x.id]=v,x.addEventListener("dispose",h));const T=y.program;n.updateUBOMapping(x,T);const R=e.render.frame;o[x.id]!==R&&(_(x),o[x.id]=R)}function l(x){const y=u();x.__bindingPointIndex=y;const v=i.createBuffer(),T=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(x){const y=r[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,E=v.length;R<E;R++){const A=v[R];if(f(A,R,T)===!0){const b=A.__offset,C=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let G=0;G<C.length;G++){const B=C[G],L=g(B);typeof B=="number"?(A.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,b+V,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=B.elements[0],A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=B.elements[0],A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=B.elements[0]):(B.toArray(A.__data,V),V+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,A.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v){const T=x.value;if(v[y]===void 0){if(typeof T=="number")v[y]=T;else{const R=Array.isArray(T)?T:[T],E=[];for(let A=0;A<R.length;A++)E.push(R[A].clone());v[y]=E}return!0}else if(typeof T=="number"){if(v[y]!==T)return v[y]=T,!0}else{const R=Array.isArray(v[y])?v[y]:[v[y]],E=Array.isArray(T)?T:[T];for(let A=0;A<R.length;A++){const b=R[A];if(b.equals(E[A])===!1)return b.copy(E[A]),!0}}return!1}function m(x){const y=x.uniforms;let v=0;const T=16;let R=0;for(let E=0,A=y.length;E<A;E++){const b=y[E],C={boundary:0,storage:0},V=Array.isArray(b.value)?b.value:[b.value];for(let G=0,B=V.length;G<B;G++){const L=V[G],w=g(L);C.boundary+=w.boundary,C.storage+=w.storage}if(b.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=v,E>0){R=v%T;const G=T-R;R!==0&&G-C.boundary<0&&(v+=T-R,b.__offset=v)}v+=C.storage}return R=v%T,R>0&&(v+=T-R),x.__size=v,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function h(x){const y=x.target;y.removeEventListener("dispose",h);const v=s.indexOf(y.__bindingPointIndex);s.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:d,update:c,dispose:p}}function Y1(){const i=dr("canvas");return i.style.display="block",i}class El{constructor(e={}){const{canvas:t=Y1(),context:n=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let _;n!==null?_=n.getContextAttributes().alpha:_=s;const f=new Uint32Array(4),m=new Int32Array(4);let g=null,h=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const y=this;let v=!1,T=0,R=0,E=null,A=-1,b=null;const C=new _t,V=new _t;let G=null;const B=new je(0);let L=0,w=t.width,F=t.height,X=1,Q=null,re=null;const k=new _t(0,0,w,F),I=new _t(0,0,w,F);let q=!1;const oe=new js;let J=!1,W=!1,ie=null;const N=new Je,Z=new he,ge=new O,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return E===null?X:1}let z=n;function Ye(S,j){for(let te=0;te<S.length;te++){const H=S[te],ee=t.getContext(H,j);if(ee!==null)return ee}return null}try{const S={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zs}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ae,!1),z===null){const j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),z=Ye(j,S),z===null)throw Ye(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Te,Ce,Ee,He,Oe,Ie,Ve,st,lt,P,M,Y,de,se,ce,Re,le,K,D,ne,ye,ue,me,De;function Ge(){Te=new o0(z),Ce=new Qh(z,Te,e),Te.init(Ce),ue=new H1(z,Te,Ce),Ee=new z1(z,Te,Ce),He=new d0(z),Oe=new C1,Ie=new q1(z,Te,Ee,Oe,Ce,ue,He),Ve=new t0(y),st=new r0(y),lt=new g_(z,Ce),me=new Zh(z,Te,lt,Ce),P=new s0(z,lt,He,me),M=new p0(z,P,lt,He),D=new u0(z,Ce,Ie),Re=new e0(Oe),Y=new M1(y,Ve,st,Te,Ce,me,Re),de=new X1(y,Oe),se=new P1,ce=new I1(Te,Ce),K=new Kh(y,Ve,st,Ee,M,_,d),le=new k1(y,M,Ce),De=new $1(z,He,Ce,Ee),ne=new Jh(z,Te,He,Ce),ye=new a0(z,Te,He,Ce),He.programs=Y.programs,y.capabilities=Ce,y.extensions=Te,y.properties=Oe,y.renderLists=se,y.shadowMap=le,y.state=Ee,y.info=He}Ge();const U=new j1(y,z);this.xr=U,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=Te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(w,F,!1))},this.getSize=function(S){return S.set(w,F)},this.setSize=function(S,j,te=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=S,F=j,t.width=Math.floor(S*X),t.height=Math.floor(j*X),te===!0&&(t.style.width=S+"px",t.style.height=j+"px"),this.setViewport(0,0,S,j)},this.getDrawingBufferSize=function(S){return S.set(w*X,F*X).floor()},this.setDrawingBufferSize=function(S,j,te){w=S,F=j,X=te,t.width=Math.floor(S*te),t.height=Math.floor(j*te),this.setViewport(0,0,S,j)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(k)},this.setViewport=function(S,j,te,H){S.isVector4?k.set(S.x,S.y,S.z,S.w):k.set(S,j,te,H),Ee.viewport(C.copy(k).multiplyScalar(X).floor())},this.getScissor=function(S){return S.copy(I)},this.setScissor=function(S,j,te,H){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,j,te,H),Ee.scissor(V.copy(I).multiplyScalar(X).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(S){Ee.setScissorTest(q=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){re=S},this.getClearColor=function(S){return S.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(S=!0,j=!0,te=!0){let H=0;if(S){let ee=!1;if(E!==null){const xe=E.texture.format;ee=xe===rl||xe===nl||xe===il}if(ee){const xe=E.texture.type,Se=xe===Di||xe===wi||xe===Hs||xe===ji||xe===el||xe===tl,Ae=K.getClearColor(),Le=K.getClearAlpha(),ze=Ae.r,we=Ae.g,Ne=Ae.b;Se?(f[0]=ze,f[1]=we,f[2]=Ne,f[3]=Le,z.clearBufferuiv(z.COLOR,0,f)):(m[0]=ze,m[1]=we,m[2]=Ne,m[3]=Le,z.clearBufferiv(z.COLOR,0,m))}else H|=z.COLOR_BUFFER_BIT}j&&(H|=z.DEPTH_BUFFER_BIT),te&&(H|=z.STENCIL_BUFFER_BIT),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),se.dispose(),ce.dispose(),Oe.dispose(),Ve.dispose(),st.dispose(),M.dispose(),me.dispose(),De.dispose(),Y.dispose(),U.dispose(),U.removeEventListener("sessionstart",Ze),U.removeEventListener("sessionend",Zt),ie&&(ie.dispose(),ie=null),yt.stop()};function _e(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const S=He.autoReset,j=le.enabled,te=le.autoUpdate,H=le.needsUpdate,ee=le.type;Ge(),He.autoReset=S,le.enabled=j,le.autoUpdate=te,le.needsUpdate=H,le.type=ee}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){const j=S.target;j.removeEventListener("dispose",fe),Be(j)}function Be(S){Xe(S),Oe.remove(S)}function Xe(S){const j=Oe.get(S).programs;j!==void 0&&(j.forEach(function(te){Y.releaseProgram(te)}),S.isShaderMaterial&&Y.releaseShaderCache(S))}this.renderBufferDirect=function(S,j,te,H,ee,xe){j===null&&(j=Me);const Se=ee.isMesh&&ee.matrixWorld.determinant()<0,Ae=wu(S,j,te,H,ee);Ee.setMaterial(H,Se);let Le=te.index,ze=1;if(H.wireframe===!0){if(Le=P.getWireframeAttribute(te),Le===void 0)return;ze=2}const we=te.drawRange,Ne=te.attributes.position;let tt=we.start*ze,it=(we.start+we.count)*ze;xe!==null&&(tt=Math.max(tt,xe.start*ze),it=Math.min(it,(xe.start+xe.count)*ze)),Le!==null?(tt=Math.max(tt,0),it=Math.min(it,Le.count)):Ne!=null&&(tt=Math.max(tt,0),it=Math.min(it,Ne.count));const Ot=it-tt;if(Ot<0||Ot===1/0)return;me.setup(ee,H,Ae,te,Le);let ni,nt=ne;if(Le!==null&&(ni=lt.get(Le),nt=ye,nt.setIndex(ni)),ee.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*ve()),nt.setMode(z.LINES)):nt.setMode(z.TRIANGLES);else if(ee.isLine){let qe=H.linewidth;qe===void 0&&(qe=1),Ee.setLineWidth(qe*ve()),ee.isLineSegments?nt.setMode(z.LINES):ee.isLineLoop?nt.setMode(z.LINE_LOOP):nt.setMode(z.LINE_STRIP)}else ee.isPoints?nt.setMode(z.POINTS):ee.isSprite&&nt.setMode(z.TRIANGLES);if(ee.isInstancedMesh)nt.renderInstances(tt,Ot,ee.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,yo=Math.min(te.instanceCount,qe);nt.renderInstances(tt,Ot,yo)}else nt.render(tt,Ot)},this.compile=function(S,j){function te(H,ee,xe){H.transparent===!0&&H.side===hi&&H.forceSinglePass===!1?(H.side=Et,H.needsUpdate=!0,mr(H,ee,xe),H.side=Ii,H.needsUpdate=!0,mr(H,ee,xe),H.side=hi):mr(H,ee,xe)}h=ce.get(S),h.init(),x.push(h),S.traverseVisible(function(H){H.isLight&&H.layers.test(j.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights(y._useLegacyLights),S.traverse(function(H){const ee=H.material;if(ee)if(Array.isArray(ee))for(let xe=0;xe<ee.length;xe++){const Se=ee[xe];te(Se,S,H)}else te(ee,S,H)}),x.pop(),h=null};let Ke=null;function bi(S){Ke&&Ke(S)}function Ze(){yt.stop()}function Zt(){yt.start()}const yt=new vl;yt.setAnimationLoop(bi),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(S){Ke=S,U.setAnimationLoop(S),S===null?yt.stop():yt.start()},U.addEventListener("sessionstart",Ze),U.addEventListener("sessionend",Zt),this.render=function(S,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(j),j=U.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,j,E),h=ce.get(S,x.length),h.init(),x.push(h),N.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),oe.setFromProjectionMatrix(N),W=this.localClippingEnabled,J=Re.init(this.clippingPlanes,W),g=se.get(S,p.length),g.init(),p.push(g),ma(S,j,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Q,re),this.info.render.frame++,J===!0&&Re.beginShadows();const te=h.state.shadowsArray;if(le.render(te,S,j),J===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(g,S),h.setupLights(y._useLegacyLights),j.isArrayCamera){const H=j.cameras;for(let ee=0,xe=H.length;ee<xe;ee++){const Se=H[ee];ga(g,S,Se,Se.viewport)}}else ga(g,S,j);E!==null&&(Ie.updateMultisampleRenderTarget(E),Ie.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(y,S,j),me.resetDefaultState(),A=-1,b=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function ma(S,j,te,H){if(S.visible===!1)return;if(S.layers.test(j.layers)){if(S.isGroup)te=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(j);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||oe.intersectsSprite(S)){H&&ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(N);const Se=M.update(S),Ae=S.material;Ae.visible&&g.push(S,Se,Ae,te,ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||oe.intersectsObject(S))){const Se=M.update(S),Ae=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ge.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ge.copy(Se.boundingSphere.center)),ge.applyMatrix4(S.matrixWorld).applyMatrix4(N)),Array.isArray(Ae)){const Le=Se.groups;for(let ze=0,we=Le.length;ze<we;ze++){const Ne=Le[ze],tt=Ae[Ne.materialIndex];tt&&tt.visible&&g.push(S,Se,tt,te,ge.z,Ne)}}else Ae.visible&&g.push(S,Se,Ae,te,ge.z,null)}}const xe=S.children;for(let Se=0,Ae=xe.length;Se<Ae;Se++)ma(xe[Se],j,te,H)}function ga(S,j,te,H){const ee=S.opaque,xe=S.transmissive,Se=S.transparent;h.setupLightsView(te),J===!0&&Re.setGlobalState(y.clippingPlanes,te),xe.length>0&&Pu(ee,xe,j,te),H&&Ee.viewport(C.copy(H)),ee.length>0&&hr(ee,j,te),xe.length>0&&hr(xe,j,te),Se.length>0&&hr(Se,j,te),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Pu(S,j,te,H){const ee=Ce.isWebGL2;ie===null&&(ie=new Ui(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?An:Di,minFilter:sr,samples:ee?4:0})),y.getDrawingBufferSize(Z),ee?ie.setSize(Z.x,Z.y):ie.setSize(Zr(Z.x),Zr(Z.y));const xe=y.getRenderTarget();y.setRenderTarget(ie),y.getClearColor(B),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();const Se=y.toneMapping;y.toneMapping=Li,hr(S,te,H),Ie.updateMultisampleRenderTarget(ie),Ie.updateRenderTargetMipmap(ie);let Ae=!1;for(let Le=0,ze=j.length;Le<ze;Le++){const we=j[Le],Ne=we.object,tt=we.geometry,it=we.material,Ot=we.group;if(it.side===hi&&Ne.layers.test(H.layers)){const ni=it.side;it.side=Et,it.needsUpdate=!0,ya(Ne,te,H,tt,it,Ot),it.side=ni,it.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ie.updateMultisampleRenderTarget(ie),Ie.updateRenderTargetMipmap(ie)),y.setRenderTarget(xe),y.setClearColor(B,L),y.toneMapping=Se}function hr(S,j,te){const H=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,xe=S.length;ee<xe;ee++){const Se=S[ee],Ae=Se.object,Le=Se.geometry,ze=H===null?Se.material:H,we=Se.group;Ae.layers.test(te.layers)&&ya(Ae,j,te,Le,ze,we)}}function ya(S,j,te,H,ee,xe){S.onBeforeRender(y,j,te,H,ee,xe),S.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ee.onBeforeRender(y,j,te,H,S,xe),ee.transparent===!0&&ee.side===hi&&ee.forceSinglePass===!1?(ee.side=Et,ee.needsUpdate=!0,y.renderBufferDirect(te,j,H,ee,S,xe),ee.side=Ii,ee.needsUpdate=!0,y.renderBufferDirect(te,j,H,ee,S,xe),ee.side=hi):y.renderBufferDirect(te,j,H,ee,S,xe),S.onAfterRender(y,j,te,H,ee,xe)}function mr(S,j,te){j.isScene!==!0&&(j=Me);const H=Oe.get(S),ee=h.state.lights,xe=h.state.shadowsArray,Se=ee.state.version,Ae=Y.getParameters(S,ee.state,xe,j,te),Le=Y.getProgramCacheKey(Ae);let ze=H.programs;H.environment=S.isMeshStandardMaterial?j.environment:null,H.fog=j.fog,H.envMap=(S.isMeshStandardMaterial?st:Ve).get(S.envMap||H.environment),ze===void 0&&(S.addEventListener("dispose",fe),ze=new Map,H.programs=ze);let we=ze.get(Le);if(we!==void 0){if(H.currentProgram===we&&H.lightsStateVersion===Se)return va(S,Ae),we}else Ae.uniforms=Y.getUniforms(S),S.onBuild(te,Ae,y),S.onBeforeCompile(Ae,y),we=Y.acquireProgram(Ae,Le),ze.set(Le,we),H.uniforms=Ae.uniforms;const Ne=H.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=Re.uniform),va(S,Ae),H.needsLights=Lu(S),H.lightsStateVersion=Se,H.needsLights&&(Ne.ambientLightColor.value=ee.state.ambient,Ne.lightProbe.value=ee.state.probe,Ne.directionalLights.value=ee.state.directional,Ne.directionalLightShadows.value=ee.state.directionalShadow,Ne.spotLights.value=ee.state.spot,Ne.spotLightShadows.value=ee.state.spotShadow,Ne.rectAreaLights.value=ee.state.rectArea,Ne.ltc_1.value=ee.state.rectAreaLTC1,Ne.ltc_2.value=ee.state.rectAreaLTC2,Ne.pointLights.value=ee.state.point,Ne.pointLightShadows.value=ee.state.pointShadow,Ne.hemisphereLights.value=ee.state.hemi,Ne.directionalShadowMap.value=ee.state.directionalShadowMap,Ne.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ne.spotShadowMap.value=ee.state.spotShadowMap,Ne.spotLightMatrix.value=ee.state.spotLightMatrix,Ne.spotLightMap.value=ee.state.spotLightMap,Ne.pointShadowMap.value=ee.state.pointShadowMap,Ne.pointShadowMatrix.value=ee.state.pointShadowMatrix);const tt=we.getUniforms(),it=Vr.seqWithValue(tt.seq,Ne);return H.currentProgram=we,H.uniformsList=it,we}function va(S,j){const te=Oe.get(S);te.outputColorSpace=j.outputColorSpace,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function wu(S,j,te,H,ee){j.isScene!==!0&&(j=Me),Ie.resetTextureUnits();const xe=j.fog,Se=H.isMeshStandardMaterial?j.environment:null,Ae=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ti,Le=(H.isMeshStandardMaterial?st:Ve).get(H.envMap||Se),ze=H.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,we=!!te.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!te.morphAttributes.position,tt=!!te.morphAttributes.normal,it=!!te.morphAttributes.color;let Ot=Li;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ot=y.toneMapping);const ni=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,nt=ni!==void 0?ni.length:0,qe=Oe.get(H),yo=h.state.lights;if(J===!0&&(W===!0||S!==b)){const Pt=S===b&&H.id===A;Re.setState(H,S,Pt)}let rt=!1;H.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==yo.state.version||qe.outputColorSpace!==Ae||ee.isInstancedMesh&&qe.instancing===!1||!ee.isInstancedMesh&&qe.instancing===!0||ee.isSkinnedMesh&&qe.skinning===!1||!ee.isSkinnedMesh&&qe.skinning===!0||ee.isInstancedMesh&&qe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&qe.instancingColor===!1&&ee.instanceColor!==null||qe.envMap!==Le||H.fog===!0&&qe.fog!==xe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Re.numPlanes||qe.numIntersection!==Re.numIntersection)||qe.vertexAlphas!==ze||qe.vertexTangents!==we||qe.morphTargets!==Ne||qe.morphNormals!==tt||qe.morphColors!==it||qe.toneMapping!==Ot||Ce.isWebGL2===!0&&qe.morphTargetsCount!==nt)&&(rt=!0):(rt=!0,qe.__version=H.version);let Fi=qe.currentProgram;rt===!0&&(Fi=mr(H,j,ee));let Ta=!1,Bn=!1,vo=!1;const vt=Fi.getUniforms(),Bi=qe.uniforms;if(Ee.useProgram(Fi.program)&&(Ta=!0,Bn=!0,vo=!0),H.id!==A&&(A=H.id,Bn=!0),Ta||b!==S){if(vt.setValue(z,"projectionMatrix",S.projectionMatrix),Ce.logarithmicDepthBuffer&&vt.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),b!==S&&(b=S,Bn=!0,vo=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Pt=vt.map.cameraPosition;Pt!==void 0&&Pt.setValue(z,ge.setFromMatrixPosition(S.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||ee.isSkinnedMesh)&&vt.setValue(z,"viewMatrix",S.matrixWorldInverse)}if(ee.isSkinnedMesh){vt.setOptional(z,ee,"bindMatrix"),vt.setOptional(z,ee,"bindMatrixInverse");const Pt=ee.skeleton;Pt&&(Ce.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),vt.setValue(z,"boneTexture",Pt.boneTexture,Ie),vt.setValue(z,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const To=te.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&Ce.isWebGL2===!0)&&D.update(ee,te,Fi),(Bn||qe.receiveShadow!==ee.receiveShadow)&&(qe.receiveShadow=ee.receiveShadow,vt.setValue(z,"receiveShadow",ee.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Bi.envMap.value=Le,Bi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Bn&&(vt.setValue(z,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&Au(Bi,vo),xe&&H.fog===!0&&de.refreshFogUniforms(Bi,xe),de.refreshMaterialUniforms(Bi,H,X,F,ie),Vr.upload(z,qe.uniformsList,Bi,Ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Vr.upload(z,qe.uniformsList,Bi,Ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(z,"center",ee.center),vt.setValue(z,"modelViewMatrix",ee.modelViewMatrix),vt.setValue(z,"normalMatrix",ee.normalMatrix),vt.setValue(z,"modelMatrix",ee.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pt=H.uniformsGroups;for(let xo=0,Du=Pt.length;xo<Du;xo++)if(Ce.isWebGL2){const xa=Pt[xo];De.update(xa,Fi),De.bind(xa,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function Au(S,j){S.ambientLightColor.needsUpdate=j,S.lightProbe.needsUpdate=j,S.directionalLights.needsUpdate=j,S.directionalLightShadows.needsUpdate=j,S.pointLights.needsUpdate=j,S.pointLightShadows.needsUpdate=j,S.spotLights.needsUpdate=j,S.spotLightShadows.needsUpdate=j,S.rectAreaLights.needsUpdate=j,S.hemisphereLights.needsUpdate=j}function Lu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,j,te){Oe.get(S.texture).__webglTexture=j,Oe.get(S.depthTexture).__webglTexture=te;const H=Oe.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=te===void 0,H.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,j){const te=Oe.get(S);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(S,j=0,te=0){E=S,T=j,R=te;let H=!0,ee=null,xe=!1,Se=!1;if(S){const Le=Oe.get(S);Le.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(z.FRAMEBUFFER,null),H=!1):Le.__webglFramebuffer===void 0?Ie.setupRenderTarget(S):Le.__hasExternalTextures&&Ie.rebindTextures(S,Oe.get(S.texture).__webglTexture,Oe.get(S.depthTexture).__webglTexture);const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const we=Oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[j])?ee=we[j][te]:ee=we[j],xe=!0):Ce.isWebGL2&&S.samples>0&&Ie.useMultisampledRTT(S)===!1?ee=Oe.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?ee=we[te]:ee=we,C.copy(S.viewport),V.copy(S.scissor),G=S.scissorTest}else C.copy(k).multiplyScalar(X).floor(),V.copy(I).multiplyScalar(X).floor(),G=q;if(Ee.bindFramebuffer(z.FRAMEBUFFER,ee)&&Ce.drawBuffers&&H&&Ee.drawBuffers(S,ee),Ee.viewport(C),Ee.scissor(V),Ee.setScissorTest(G),xe){const Le=Oe.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le.__webglTexture,te)}else if(Se){const Le=Oe.get(S.texture),ze=j||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.__webglTexture,te||0,ze)}A=-1},this.readRenderTargetPixels=function(S,j,te,H,ee,xe,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){Ee.bindFramebuffer(z.FRAMEBUFFER,Ae);try{const Le=S.texture,ze=Le.format,we=Le.type;if(ze!==Wt&&ue.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=we===An&&(Te.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Te.has("EXT_color_buffer_float"));if(we!==Di&&ue.convert(we)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===Ai&&(Ce.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=S.width-H&&te>=0&&te<=S.height-ee&&z.readPixels(j,te,H,ee,ue.convert(ze),ue.convert(we),xe)}finally{const Le=E!==null?Oe.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(z.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(S,j,te=0){const H=Math.pow(2,-te),ee=Math.floor(j.image.width*H),xe=Math.floor(j.image.height*H);Ie.setTexture2D(j,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,S.x,S.y,ee,xe),Ee.unbindTexture()},this.copyTextureToTexture=function(S,j,te,H=0){const ee=j.image.width,xe=j.image.height,Se=ue.convert(te.format),Ae=ue.convert(te.type);Ie.setTexture2D(te,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,te.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,te.unpackAlignment),j.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,S.x,S.y,ee,xe,Se,Ae,j.image.data):j.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,S.x,S.y,j.mipmaps[0].width,j.mipmaps[0].height,Se,j.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,H,S.x,S.y,Se,Ae,j.image),H===0&&te.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(S,j,te,H,ee=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=S.max.x-S.min.x+1,Se=S.max.y-S.min.y+1,Ae=S.max.z-S.min.z+1,Le=ue.convert(H.format),ze=ue.convert(H.type);let we;if(H.isData3DTexture)Ie.setTexture3D(H,0),we=z.TEXTURE_3D;else if(H.isDataArrayTexture)Ie.setTexture2DArray(H,0),we=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const Ne=z.getParameter(z.UNPACK_ROW_LENGTH),tt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),it=z.getParameter(z.UNPACK_SKIP_PIXELS),Ot=z.getParameter(z.UNPACK_SKIP_ROWS),ni=z.getParameter(z.UNPACK_SKIP_IMAGES),nt=te.isCompressedTexture?te.mipmaps[0]:te.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,nt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,nt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,S.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,S.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,S.min.z),te.isDataTexture||te.isData3DTexture?z.texSubImage3D(we,ee,j.x,j.y,j.z,xe,Se,Ae,Le,ze,nt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(we,ee,j.x,j.y,j.z,xe,Se,Ae,Le,nt.data)):z.texSubImage3D(we,ee,j.x,j.y,j.z,xe,Se,Ae,Le,ze,nt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,tt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,it),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ot),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ni),ee===0&&H.generateMipmaps&&z.generateMipmap(we),Ee.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ie.setTextureCube(S,0):S.isData3DTexture?Ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ie.setTexture2DArray(S,0):Ie.setTexture2D(S,0),Ee.unbindTexture()},this.resetState=function(){T=0,R=0,E=null,Ee.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?$i:ol}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?Ue:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class K1 extends El{}K1.prototype.isWebGL1Renderer=!0;class Z1 extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ml extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bd=new O,kd=new O,zd=new Je,Ko=new co,Fr=new ao;class J1 extends ft{constructor(e=new Dt,t=new Ml){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Bd.fromBufferAttribute(t,r-1),kd.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Bd.distanceTo(kd);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Fr.radius+=o,e.ray.intersectsSphere(Fr)===!1)return;zd.copy(r).invert(),Ko.copy(e.ray).applyMatrix4(zd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=a*a,c=new O,l=new O,u=new O,_=new O,f=this.isLineSegments?2:1,m=n.index,h=n.attributes.position;if(m!==null){const p=Math.max(0,s.start),x=Math.min(m.count,s.start+s.count);for(let y=p,v=x-1;y<v;y+=f){const T=m.getX(y),R=m.getX(y+1);if(c.fromBufferAttribute(h,T),l.fromBufferAttribute(h,R),Ko.distanceSqToSegment(c,l,_,u)>d)continue;_.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(_);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let y=p,v=x-1;y<v;y+=f){if(c.fromBufferAttribute(h,y),l.fromBufferAttribute(h,y+1),Ko.distanceSqToSegment(c,l,_,u)>d)continue;_.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(_);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const o=n.length;let s;t?s=t:s=e*n[o-1];let a=0,d=o-1,c;for(;a<=d;)if(r=Math.floor(a+(d-a)/2),c=n[r]-s,c<0)a=r+1;else if(c>0)d=r-1;else{d=r;break}if(r=d,n[r]===s)return r/(o-1);const l=n[r],_=n[r+1]-l,f=(s-l)/_;return(r+f)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),d=t||(s.isVector2?new he:new O);return d.copy(a).sub(s).normalize(),d}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,r=[],o=[],s=[],a=new O,d=new Je;for(let f=0;f<=e;f++){const m=f/e;r[f]=this.getTangentAt(m,new O)}o[0]=new O,s[0]=new O;let c=Number.MAX_VALUE;const l=Math.abs(r[0].x),u=Math.abs(r[0].y),_=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),_<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(pt(r[f-1].dot(r[f]),-1,1));o[f].applyMatrix4(d.makeRotationAxis(a,m))}s[f].crossVectors(r[f],o[f])}if(t===!0){let f=Math.acos(pt(o[0].dot(o[e]),-1,1));f/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let m=1;m<=e;m++)o[m].applyMatrix4(d.makeRotationAxis(r[m],f*m)),s[m].crossVectors(r[m],o[m])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cl extends xi{constructor(e=0,t=0,n=1,r=1,o=0,s=Math.PI*2,a=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=d}getPoint(e,t){const n=t||new he,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let d=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),_=d-this.aX,f=c-this.aY;d=_*l-f*u+this.aX,c=_*u+f*l+this.aY}return n.set(d,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Q1 extends Cl{constructor(e,t,n,r,o,s){super(e,t,n,n,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Ks(){let i=0,e=0,t=0,n=0;function r(o,s,a,d){i=o,e=a,t=-3*o+3*s-2*a-d,n=2*o-2*s+a+d}return{initCatmullRom:function(o,s,a,d,c){r(s,a,c*(a-o),c*(d-s))},initNonuniformCatmullRom:function(o,s,a,d,c,l,u){let _=(s-o)/c-(a-o)/(c+l)+(a-s)/l,f=(a-s)/l-(d-s)/(l+u)+(d-a)/u;_*=l,f*=l,r(s,a,_,f)},calc:function(o){const s=o*o,a=s*o;return i+e*o+t*s+n*a}}}const Br=new O,Zo=new Ks,Jo=new Ks,Qo=new Ks;class em extends xi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),d=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:d===0&&a===o-1&&(a=o-2,d=1);let c,l;this.closed||a>0?c=r[(a-1)%o]:(Br.subVectors(r[0],r[1]).add(r[0]),c=Br);const u=r[a%o],_=r[(a+1)%o];if(this.closed||a+2<o?l=r[(a+2)%o]:(Br.subVectors(r[o-1],r[o-2]).add(r[o-1]),l=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(_),f),h=Math.pow(_.distanceToSquared(l),f);g<1e-4&&(g=1),m<1e-4&&(m=g),h<1e-4&&(h=g),Zo.initNonuniformCatmullRom(c.x,u.x,_.x,l.x,m,g,h),Jo.initNonuniformCatmullRom(c.y,u.y,_.y,l.y,m,g,h),Qo.initNonuniformCatmullRom(c.z,u.z,_.z,l.z,m,g,h)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(c.x,u.x,_.x,l.x,this.tension),Jo.initCatmullRom(c.y,u.y,_.y,l.y,this.tension),Qo.initCatmullRom(c.z,u.z,_.z,l.z,this.tension));return n.set(Zo.calc(d),Jo.calc(d),Qo.calc(d)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qd(i,e,t,n,r){const o=(n-e)*.5,s=(r-t)*.5,a=i*i,d=i*a;return(2*t-2*n+o+s)*d+(-3*t+3*n-2*o-s)*a+o*i+t}function tm(i,e){const t=1-i;return t*t*e}function im(i,e){return 2*(1-i)*i*e}function nm(i,e){return i*i*e}function rr(i,e,t,n){return tm(i,e)+im(i,t)+nm(i,n)}function rm(i,e){const t=1-i;return t*t*t*e}function om(i,e){const t=1-i;return 3*t*t*i*e}function sm(i,e){return 3*(1-i)*i*i*e}function am(i,e){return i*i*i*e}function or(i,e,t,n,r){return rm(i,e)+om(i,t)+sm(i,n)+am(i,r)}class dm extends xi{constructor(e=new he,t=new he,n=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new he){const n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(or(e,r.x,o.x,s.x,a.x),or(e,r.y,o.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sl extends xi{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(or(e,r.x,o.x,s.x,a.x),or(e,r.y,o.y,s.y,a.y),or(e,r.z,o.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cm extends xi{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lm extends xi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class um extends xi{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(rr(e,r.x,o.x,s.x),rr(e,r.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zs extends xi{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(rr(e,r.x,o.x,s.x),rr(e,r.y,o.y,s.y),rr(e,r.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pm extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,d=r[s===0?s:s-1],c=r[s],l=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return n.set(qd(a,d.x,c.x,l.x,u.x),qd(a,d.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new he().fromArray(r))}return this}}var _m=Object.freeze({__proto__:null,ArcCurve:Q1,CatmullRomCurve3:em,CubicBezierCurve:dm,CubicBezierCurve3:Sl,EllipseCurve:Cl,LineCurve:cm,LineCurve3:lm,QuadraticBezierCurve:um,QuadraticBezierCurve3:Zs,SplineCurve:pm});class po extends Dt{constructor(e=1,t=1,n=1,r=32,o=1,s=!1,a=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:d};const c=this;r=Math.floor(r),o=Math.floor(o);const l=[],u=[],_=[],f=[];let m=0;const g=[],h=n/2;let p=0;x(),s===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(l),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(f,2));function x(){const v=new O,T=new O;let R=0;const E=(t-e)/n;for(let A=0;A<=o;A++){const b=[],C=A/o,V=C*(t-e)+e;for(let G=0;G<=r;G++){const B=G/r,L=B*d+a,w=Math.sin(L),F=Math.cos(L);T.x=V*w,T.y=-C*n+h,T.z=V*F,u.push(T.x,T.y,T.z),v.set(w,E,F).normalize(),_.push(v.x,v.y,v.z),f.push(B,1-C),b.push(m++)}g.push(b)}for(let A=0;A<r;A++)for(let b=0;b<o;b++){const C=g[b][A],V=g[b+1][A],G=g[b+1][A+1],B=g[b][A+1];l.push(C,V,B),l.push(V,G,B),R+=6}c.addGroup(p,R,0),p+=R}function y(v){const T=m,R=new he,E=new O;let A=0;const b=v===!0?e:t,C=v===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,h*C,0),_.push(0,C,0),f.push(.5,.5),m++;const V=m;for(let G=0;G<=r;G++){const L=G/r*d+a,w=Math.cos(L),F=Math.sin(L);E.x=b*F,E.y=h*C,E.z=b*w,u.push(E.x,E.y,E.z),_.push(0,C,0),R.x=w*.5+.5,R.y=F*.5*C+.5,f.push(R.x,R.y),m++}for(let G=0;G<r;G++){const B=T+G,L=V+G;v===!0?l.push(L,L+1,B):l.push(L+1,L,B),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends po{constructor(e=1,t=1,n=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,n,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new Js(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends Dt{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(s+a,Math.PI);let c=0;const l=[],u=new O,_=new O,f=[],m=[],g=[],h=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&s===0?v=.5/t:p===n&&d===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const R=T/t;u.x=-e*Math.cos(r+R*o)*Math.sin(s+y*a),u.y=e*Math.cos(s+y*a),u.z=e*Math.sin(r+R*o)*Math.sin(s+y*a),m.push(u.x,u.y,u.z),_.copy(u).normalize(),g.push(_.x,_.y,_.z),h.push(R+v,1-y),x.push(c++)}l.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=l[p][x+1],v=l[p][x],T=l[p+1][x],R=l[p+1][x+1];(p!==0||s>0)&&f.push(y,v,R),(p!==n-1||d<Math.PI)&&f.push(v,T,R)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qs extends Dt{constructor(e=new Zs(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:o};const s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new O,d=new O,c=new he;let l=new O;const u=[],_=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(f,2));function g(){for(let y=0;y<t;y++)h(y);h(o===!1?t:0),x(),p()}function h(y){l=e.getPointAt(y/t,l);const v=s.normals[y],T=s.binormals[y];for(let R=0;R<=r;R++){const E=R/r*Math.PI*2,A=Math.sin(E),b=-Math.cos(E);d.x=b*v.x+A*T.x,d.y=b*v.y+A*T.y,d.z=b*v.z+A*T.z,d.normalize(),_.push(d.x,d.y,d.z),a.x=l.x+n*d.x,a.y=l.y+n*d.y,a.z=l.z+n*d.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=r;v++){const T=(r+1)*(y-1)+(v-1),R=(r+1)*y+(v-1),E=(r+1)*y+v,A=(r+1)*(y-1)+v;m.push(T,R,A),m.push(R,E,A)}}function x(){for(let y=0;y<=t;y++)for(let v=0;v<=r;v++)c.x=y/t,c.y=v/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Qs(new _m[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class fm extends Un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Hd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hm{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,d;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,o===!1&&r.onStart!==void 0&&r.onStart(l,s,a),o=!0},this.itemEnd=function(l){s++,r.onProgress!==void 0&&r.onProgress(l,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return d?d(l):l},this.setURLModifier=function(l){return d=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,_=c.length;u<_;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return m}return null}}}const mm=new hm;class ea{constructor(e){this.manager=e!==void 0?e:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ea.DEFAULT_MATERIAL_NAME="__DEFAULT";class gm extends ea{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Hd.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=dr("img");function d(){l(),Hd.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(u){l(),r&&r(u),o.manager.itemError(e),o.manager.itemEnd(e)}function l(){a.removeEventListener("load",d,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",d,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class ym extends ea{constructor(e){super(e)}load(e,t,n,r){const o=new Ct,s=new gm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Pl extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const es=new Je,Gd=new O,Vd=new O;class vm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gd),Vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vd),t.updateMatrixWorld(),es.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(es),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tm extends vm{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xm extends Pl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Tm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bm extends Pl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wd(){return(typeof performance>"u"?Date:performance).now()}class Al{constructor(e,t,n=0,r=1/0){this.ray=new co(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return bs(e,this,n,t),n.sort(jd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)bs(e[r],this,n,t);return n.sort(jd),n}}function jd(i,e){return i.distance-e.distance}function bs(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let o=0,s=r.length;o<s;o++)bs(r[o],e,t,!0)}}class Rs{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zs);const gn=new _i,Si=new Al,Gn=new he,Xd=new O,kr=new O,ts=new O,$d=new Je;class Rm extends Kt{constructor(e,t,n){super(),n.style.touchAction="none";let r=null,o=null;const s=[],a=this;function d(){n.addEventListener("pointermove",f),n.addEventListener("pointerdown",m),n.addEventListener("pointerup",g),n.addEventListener("pointerleave",g)}function c(){n.removeEventListener("pointermove",f),n.removeEventListener("pointerdown",m),n.removeEventListener("pointerup",g),n.removeEventListener("pointerleave",g),n.style.cursor=""}function l(){c()}function u(){return e}function _(){return Si}function f(p){if(a.enabled!==!1){if(h(p),Si.setFromCamera(Gn,t),r){Si.ray.intersectPlane(gn,kr)&&r.position.copy(kr.sub(Xd).applyMatrix4($d)),a.dispatchEvent({type:"drag",object:r});return}if(p.pointerType==="mouse"||p.pointerType==="pen")if(s.length=0,Si.setFromCamera(Gn,t),Si.intersectObjects(e,!0,s),s.length>0){const x=s[0].object;gn.setFromNormalAndCoplanarPoint(t.getWorldDirection(gn.normal),ts.setFromMatrixPosition(x.matrixWorld)),o!==x&&o!==null&&(a.dispatchEvent({type:"hoveroff",object:o}),n.style.cursor="auto",o=null),o!==x&&(a.dispatchEvent({type:"hoveron",object:x}),n.style.cursor="pointer",o=x)}else o!==null&&(a.dispatchEvent({type:"hoveroff",object:o}),n.style.cursor="auto",o=null)}}function m(p){a.enabled!==!1&&(h(p),s.length=0,Si.setFromCamera(Gn,t),Si.intersectObjects(e,!0,s),s.length>0&&(r=a.transformGroup===!0?e[0]:s[0].object,gn.setFromNormalAndCoplanarPoint(t.getWorldDirection(gn.normal),ts.setFromMatrixPosition(r.matrixWorld)),Si.ray.intersectPlane(gn,kr)&&($d.copy(r.parent.matrixWorld).invert(),Xd.copy(kr).sub(ts.setFromMatrixPosition(r.matrixWorld))),n.style.cursor="move",a.dispatchEvent({type:"dragstart",object:r})))}function g(){a.enabled!==!1&&(r&&(a.dispatchEvent({type:"dragend",object:r}),r=null),n.style.cursor=o?"pointer":"auto")}function h(p){const x=n.getBoundingClientRect();Gn.x=(p.clientX-x.left)/x.width*2-1,Gn.y=-(p.clientY-x.top)/x.height*2+1}d(),this.enabled=!0,this.transformGroup=!1,this.activate=d,this.deactivate=c,this.dispose=l,this.getObjects=u,this.getRaycaster=_}}function Em(i,e,t){var n,r=1;i==null&&(i=0),e==null&&(e=0),t==null&&(t=0);function o(){var s,a=n.length,d,c=0,l=0,u=0;for(s=0;s<a;++s)d=n[s],c+=d.x||0,l+=d.y||0,u+=d.z||0;for(c=(c/a-i)*r,l=(l/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)d=n[s],c&&(d.x-=c),l&&(d.y-=l),u&&(d.z-=u)}return o.initialize=function(s){n=s},o.x=function(s){return arguments.length?(i=+s,o):i},o.y=function(s){return arguments.length?(e=+s,o):e},o.z=function(s){return arguments.length?(t=+s,o):t},o.strength=function(s){return arguments.length?(r=+s,o):r},o}function Mm(i){const e=+this._x.call(null,i);return Ll(this.cover(e),e,i)}function Ll(i,e,t){if(isNaN(e))return i;var n,r=i._root,o={data:t},s=i._x0,a=i._x1,d,c,l,u,_;if(!r)return i._root=o,i;for(;r.length;)if((l=e>=(d=(s+a)/2))?s=d:a=d,n=r,!(r=r[u=+l]))return n[u]=o,i;if(c=+i._x.call(null,r.data),e===c)return o.next=r,n?n[u]=o:i._root=o,i;do n=n?n[u]=new Array(2):i._root=new Array(2),(l=e>=(d=(s+a)/2))?s=d:a=d;while((u=+l)==(_=+(c>=d)));return n[_]=r,n[u]=o,i}function Cm(i){Array.isArray(i)||(i=Array.from(i));const e=i.length,t=new Float64Array(e);let n=1/0,r=-1/0;for(let o=0,s;o<e;++o)isNaN(s=+this._x.call(null,i[o]))||(t[o]=s,s<n&&(n=s),s>r&&(r=s));if(n>r)return this;this.cover(n).cover(r);for(let o=0;o<e;++o)Ll(this,t[o],i[o]);return this}function Sm(i){if(isNaN(i=+i))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(i))+1;else{for(var n=t-e||1,r=this._root,o,s;e>i||i>=t;)switch(s=+(i<e),o=new Array(2),o[s]=r,r=o,n*=2,s){case 0:t=e+n;break;case 1:e=t-n;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function Pm(){var i=[];return this.visit(function(e){if(!e.length)do i.push(e.data);while(e=e.next)}),i}function wm(i){return arguments.length?this.cover(+i[0][0]).cover(+i[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function vi(i,e,t){this.node=i,this.x0=e,this.x1=t}function Am(i,e){var t,n=this._x0,r,o,s=this._x1,a=[],d=this._root,c,l;for(d&&a.push(new vi(d,n,s)),e==null?e=1/0:(n=i-e,s=i+e);c=a.pop();)if(!(!(d=c.node)||(r=c.x0)>s||(o=c.x1)<n))if(d.length){var u=(r+o)/2;a.push(new vi(d[1],u,o),new vi(d[0],r,u)),(l=+(i>=u))&&(c=a[a.length-1],a[a.length-1]=a[a.length-1-l],a[a.length-1-l]=c)}else{var _=Math.abs(i-+this._x.call(null,d.data));_<e&&(e=_,n=i-_,s=i+_,t=d.data)}return t}function Lm(i){if(isNaN(d=+this._x.call(null,i)))return this;var e,t=this._root,n,r,o,s=this._x0,a=this._x1,d,c,l,u,_;if(!t)return this;if(t.length)for(;;){if((l=d>=(c=(s+a)/2))?s=c:a=c,e=t,!(t=t[u=+l]))return this;if(!t.length)break;e[u+1&1]&&(n=e,_=u)}for(;t.data!==i;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[u]=o:delete e[u],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(n?n[_]=t:this._root=t),this):(this._root=o,this)}function Dm(i){for(var e=0,t=i.length;e<t;++e)this.remove(i[e]);return this}function Om(){return this._root}function Im(){var i=0;return this.visit(function(e){if(!e.length)do++i;while(e=e.next)}),i}function Um(i){var e=[],t,n=this._root,r,o,s;for(n&&e.push(new vi(n,this._x0,this._x1));t=e.pop();)if(!i(n=t.node,o=t.x0,s=t.x1)&&n.length){var a=(o+s)/2;(r=n[1])&&e.push(new vi(r,a,s)),(r=n[0])&&e.push(new vi(r,o,a))}return this}function Nm(i){var e=[],t=[],n;for(this._root&&e.push(new vi(this._root,this._x0,this._x1));n=e.pop();){var r=n.node;if(r.length){var o,s=n.x0,a=n.x1,d=(s+a)/2;(o=r[0])&&e.push(new vi(o,s,d)),(o=r[1])&&e.push(new vi(o,d,a))}t.push(n)}for(;n=t.pop();)i(n.node,n.x0,n.x1);return this}function Fm(i){return i[0]}function Bm(i){return arguments.length?(this._x=i,this):this._x}function Dl(i,e){var t=new ta(e??Fm,NaN,NaN);return i==null?t:t.addAll(i)}function ta(i,e,t){this._x=i,this._x0=e,this._x1=t,this._root=void 0}function Yd(i){for(var e={data:i.data},t=e;i=i.next;)t=t.next={data:i.data};return e}var St=Dl.prototype=ta.prototype;St.copy=function(){var i=new ta(this._x,this._x0,this._x1),e=this._root,t,n;if(!e)return i;if(!e.length)return i._root=Yd(e),i;for(t=[{source:e,target:i._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(n=e.source[r])&&(n.length?t.push({source:n,target:e.target[r]=new Array(2)}):e.target[r]=Yd(n));return i};St.add=Mm;St.addAll=Cm;St.cover=Sm;St.data=Pm;St.extent=wm;St.find=Am;St.remove=Lm;St.removeAll=Dm;St.root=Om;St.size=Im;St.visit=Um;St.visitAfter=Nm;St.x=Bm;function km(i){const e=+this._x.call(null,i),t=+this._y.call(null,i);return Ol(this.cover(e,t),e,t,i)}function Ol(i,e,t,n){if(isNaN(e)||isNaN(t))return i;var r,o=i._root,s={data:n},a=i._x0,d=i._y0,c=i._x1,l=i._y1,u,_,f,m,g,h,p,x;if(!o)return i._root=s,i;for(;o.length;)if((g=e>=(u=(a+c)/2))?a=u:c=u,(h=t>=(_=(d+l)/2))?d=_:l=_,r=o,!(o=o[p=h<<1|g]))return r[p]=s,i;if(f=+i._x.call(null,o.data),m=+i._y.call(null,o.data),e===f&&t===m)return s.next=o,r?r[p]=s:i._root=s,i;do r=r?r[p]=new Array(4):i._root=new Array(4),(g=e>=(u=(a+c)/2))?a=u:c=u,(h=t>=(_=(d+l)/2))?d=_:l=_;while((p=h<<1|g)===(x=(m>=_)<<1|f>=u));return r[x]=o,r[p]=s,i}function zm(i){var e,t,n=i.length,r,o,s=new Array(n),a=new Array(n),d=1/0,c=1/0,l=-1/0,u=-1/0;for(t=0;t<n;++t)isNaN(r=+this._x.call(null,e=i[t]))||isNaN(o=+this._y.call(null,e))||(s[t]=r,a[t]=o,r<d&&(d=r),r>l&&(l=r),o<c&&(c=o),o>u&&(u=o));if(d>l||c>u)return this;for(this.cover(d,c).cover(l,u),t=0;t<n;++t)Ol(this,s[t],a[t],i[t]);return this}function qm(i,e){if(isNaN(i=+i)||isNaN(e=+e))return this;var t=this._x0,n=this._y0,r=this._x1,o=this._y1;if(isNaN(t))r=(t=Math.floor(i))+1,o=(n=Math.floor(e))+1;else{for(var s=r-t||1,a=this._root,d,c;t>i||i>=r||n>e||e>=o;)switch(c=(e<n)<<1|i<t,d=new Array(4),d[c]=a,a=d,s*=2,c){case 0:r=t+s,o=n+s;break;case 1:t=r-s,o=n+s;break;case 2:r=t+s,n=o-s;break;case 3:t=r-s,n=o-s;break}this._root&&this._root.length&&(this._root=a)}return this._x0=t,this._y0=n,this._x1=r,this._y1=o,this}function Hm(){var i=[];return this.visit(function(e){if(!e.length)do i.push(e.data);while(e=e.next)}),i}function Gm(i){return arguments.length?this.cover(+i[0][0],+i[0][1]).cover(+i[1][0],+i[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Rt(i,e,t,n,r){this.node=i,this.x0=e,this.y0=t,this.x1=n,this.y1=r}function Vm(i,e,t){var n,r=this._x0,o=this._y0,s,a,d,c,l=this._x1,u=this._y1,_=[],f=this._root,m,g;for(f&&_.push(new Rt(f,r,o,l,u)),t==null?t=1/0:(r=i-t,o=e-t,l=i+t,u=e+t,t*=t);m=_.pop();)if(!(!(f=m.node)||(s=m.x0)>l||(a=m.y0)>u||(d=m.x1)<r||(c=m.y1)<o))if(f.length){var h=(s+d)/2,p=(a+c)/2;_.push(new Rt(f[3],h,p,d,c),new Rt(f[2],s,p,h,c),new Rt(f[1],h,a,d,p),new Rt(f[0],s,a,h,p)),(g=(e>=p)<<1|i>=h)&&(m=_[_.length-1],_[_.length-1]=_[_.length-1-g],_[_.length-1-g]=m)}else{var x=i-+this._x.call(null,f.data),y=e-+this._y.call(null,f.data),v=x*x+y*y;if(v<t){var T=Math.sqrt(t=v);r=i-T,o=e-T,l=i+T,u=e+T,n=f.data}}return n}function Wm(i){if(isNaN(l=+this._x.call(null,i))||isNaN(u=+this._y.call(null,i)))return this;var e,t=this._root,n,r,o,s=this._x0,a=this._y0,d=this._x1,c=this._y1,l,u,_,f,m,g,h,p;if(!t)return this;if(t.length)for(;;){if((m=l>=(_=(s+d)/2))?s=_:d=_,(g=u>=(f=(a+c)/2))?a=f:c=f,e=t,!(t=t[h=g<<1|m]))return this;if(!t.length)break;(e[h+1&3]||e[h+2&3]||e[h+3&3])&&(n=e,p=h)}for(;t.data!==i;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[h]=o:delete e[h],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(n?n[p]=t:this._root=t),this):(this._root=o,this)}function jm(i){for(var e=0,t=i.length;e<t;++e)this.remove(i[e]);return this}function Xm(){return this._root}function $m(){var i=0;return this.visit(function(e){if(!e.length)do++i;while(e=e.next)}),i}function Ym(i){var e=[],t,n=this._root,r,o,s,a,d;for(n&&e.push(new Rt(n,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!i(n=t.node,o=t.x0,s=t.y0,a=t.x1,d=t.y1)&&n.length){var c=(o+a)/2,l=(s+d)/2;(r=n[3])&&e.push(new Rt(r,c,l,a,d)),(r=n[2])&&e.push(new Rt(r,o,l,c,d)),(r=n[1])&&e.push(new Rt(r,c,s,a,l)),(r=n[0])&&e.push(new Rt(r,o,s,c,l))}return this}function Km(i){var e=[],t=[],n;for(this._root&&e.push(new Rt(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var r=n.node;if(r.length){var o,s=n.x0,a=n.y0,d=n.x1,c=n.y1,l=(s+d)/2,u=(a+c)/2;(o=r[0])&&e.push(new Rt(o,s,a,l,u)),(o=r[1])&&e.push(new Rt(o,l,a,d,u)),(o=r[2])&&e.push(new Rt(o,s,u,l,c)),(o=r[3])&&e.push(new Rt(o,l,u,d,c))}t.push(n)}for(;n=t.pop();)i(n.node,n.x0,n.y0,n.x1,n.y1);return this}function Zm(i){return i[0]}function Jm(i){return arguments.length?(this._x=i,this):this._x}function Qm(i){return i[1]}function eg(i){return arguments.length?(this._y=i,this):this._y}function Il(i,e,t){var n=new ia(e??Zm,t??Qm,NaN,NaN,NaN,NaN);return i==null?n:n.addAll(i)}function ia(i,e,t,n,r,o){this._x=i,this._y=e,this._x0=t,this._y0=n,this._x1=r,this._y1=o,this._root=void 0}function Kd(i){for(var e={data:i.data},t=e;i=i.next;)t=t.next={data:i.data};return e}var Mt=Il.prototype=ia.prototype;Mt.copy=function(){var i=new ia(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,n;if(!e)return i;if(!e.length)return i._root=Kd(e),i;for(t=[{source:e,target:i._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(n=e.source[r])&&(n.length?t.push({source:n,target:e.target[r]=new Array(4)}):e.target[r]=Kd(n));return i};Mt.add=km;Mt.addAll=zm;Mt.cover=qm;Mt.data=Hm;Mt.extent=Gm;Mt.find=Vm;Mt.remove=Wm;Mt.removeAll=jm;Mt.root=Xm;Mt.size=$m;Mt.visit=Ym;Mt.visitAfter=Km;Mt.x=Jm;Mt.y=eg;function tg(i){const e=+this._x.call(null,i),t=+this._y.call(null,i),n=+this._z.call(null,i);return Ul(this.cover(e,t,n),e,t,n,i)}function Ul(i,e,t,n,r){if(isNaN(e)||isNaN(t)||isNaN(n))return i;var o,s=i._root,a={data:r},d=i._x0,c=i._y0,l=i._z0,u=i._x1,_=i._y1,f=i._z1,m,g,h,p,x,y,v,T,R,E,A;if(!s)return i._root=a,i;for(;s.length;)if((v=e>=(m=(d+u)/2))?d=m:u=m,(T=t>=(g=(c+_)/2))?c=g:_=g,(R=n>=(h=(l+f)/2))?l=h:f=h,o=s,!(s=s[E=R<<2|T<<1|v]))return o[E]=a,i;if(p=+i._x.call(null,s.data),x=+i._y.call(null,s.data),y=+i._z.call(null,s.data),e===p&&t===x&&n===y)return a.next=s,o?o[E]=a:i._root=a,i;do o=o?o[E]=new Array(8):i._root=new Array(8),(v=e>=(m=(d+u)/2))?d=m:u=m,(T=t>=(g=(c+_)/2))?c=g:_=g,(R=n>=(h=(l+f)/2))?l=h:f=h;while((E=R<<2|T<<1|v)===(A=(y>=h)<<2|(x>=g)<<1|p>=m));return o[A]=s,o[E]=a,i}function ig(i){Array.isArray(i)||(i=Array.from(i));const e=i.length,t=new Float64Array(e),n=new Float64Array(e),r=new Float64Array(e);let o=1/0,s=1/0,a=1/0,d=-1/0,c=-1/0,l=-1/0;for(let u=0,_,f,m,g;u<e;++u)isNaN(f=+this._x.call(null,_=i[u]))||isNaN(m=+this._y.call(null,_))||isNaN(g=+this._z.call(null,_))||(t[u]=f,n[u]=m,r[u]=g,f<o&&(o=f),f>d&&(d=f),m<s&&(s=m),m>c&&(c=m),g<a&&(a=g),g>l&&(l=g));if(o>d||s>c||a>l)return this;this.cover(o,s,a).cover(d,c,l);for(let u=0;u<e;++u)Ul(this,t[u],n[u],r[u],i[u]);return this}function ng(i,e,t){if(isNaN(i=+i)||isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,o=this._z0,s=this._x1,a=this._y1,d=this._z1;if(isNaN(n))s=(n=Math.floor(i))+1,a=(r=Math.floor(e))+1,d=(o=Math.floor(t))+1;else{for(var c=s-n||1,l=this._root,u,_;n>i||i>=s||r>e||e>=a||o>t||t>=d;)switch(_=(t<o)<<2|(e<r)<<1|i<n,u=new Array(8),u[_]=l,l=u,c*=2,_){case 0:s=n+c,a=r+c,d=o+c;break;case 1:n=s-c,a=r+c,d=o+c;break;case 2:s=n+c,r=a-c,d=o+c;break;case 3:n=s-c,r=a-c,d=o+c;break;case 4:s=n+c,a=r+c,o=d-c;break;case 5:n=s-c,a=r+c,o=d-c;break;case 6:s=n+c,r=a-c,o=d-c;break;case 7:n=s-c,r=a-c,o=d-c;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._z0=o,this._x1=s,this._y1=a,this._z1=d,this}function rg(){var i=[];return this.visit(function(e){if(!e.length)do i.push(e.data);while(e=e.next)}),i}function og(i){return arguments.length?this.cover(+i[0][0],+i[0][1],+i[0][2]).cover(+i[1][0],+i[1][1],+i[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function $e(i,e,t,n,r,o,s){this.node=i,this.x0=e,this.y0=t,this.z0=n,this.x1=r,this.y1=o,this.z1=s}function sg(i,e,t,n){var r,o=this._x0,s=this._y0,a=this._z0,d,c,l,u,_,f,m=this._x1,g=this._y1,h=this._z1,p=[],x=this._root,y,v;for(x&&p.push(new $e(x,o,s,a,m,g,h)),n==null?n=1/0:(o=i-n,s=e-n,a=t-n,m=i+n,g=e+n,h=t+n,n*=n);y=p.pop();)if(!(!(x=y.node)||(d=y.x0)>m||(c=y.y0)>g||(l=y.z0)>h||(u=y.x1)<o||(_=y.y1)<s||(f=y.z1)<a))if(x.length){var T=(d+u)/2,R=(c+_)/2,E=(l+f)/2;p.push(new $e(x[7],T,R,E,u,_,f),new $e(x[6],d,R,E,T,_,f),new $e(x[5],T,c,E,u,R,f),new $e(x[4],d,c,E,T,R,f),new $e(x[3],T,R,l,u,_,E),new $e(x[2],d,R,l,T,_,E),new $e(x[1],T,c,l,u,R,E),new $e(x[0],d,c,l,T,R,E)),(v=(t>=E)<<2|(e>=R)<<1|i>=T)&&(y=p[p.length-1],p[p.length-1]=p[p.length-1-v],p[p.length-1-v]=y)}else{var A=i-+this._x.call(null,x.data),b=e-+this._y.call(null,x.data),C=t-+this._z.call(null,x.data),V=A*A+b*b+C*C;if(V<n){var G=Math.sqrt(n=V);o=i-G,s=e-G,a=t-G,m=i+G,g=e+G,h=t+G,r=x.data}}return r}function ag(i){if(isNaN(_=+this._x.call(null,i))||isNaN(f=+this._y.call(null,i))||isNaN(m=+this._z.call(null,i)))return this;var e,t=this._root,n,r,o,s=this._x0,a=this._y0,d=this._z0,c=this._x1,l=this._y1,u=this._z1,_,f,m,g,h,p,x,y,v,T,R;if(!t)return this;if(t.length)for(;;){if((x=_>=(g=(s+c)/2))?s=g:c=g,(y=f>=(h=(a+l)/2))?a=h:l=h,(v=m>=(p=(d+u)/2))?d=p:u=p,e=t,!(t=t[T=v<<2|y<<1|x]))return this;if(!t.length)break;(e[T+1&7]||e[T+2&7]||e[T+3&7]||e[T+4&7]||e[T+5&7]||e[T+6&7]||e[T+7&7])&&(n=e,R=T)}for(;t.data!==i;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[T]=o:delete e[T],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(n?n[R]=t:this._root=t),this):(this._root=o,this)}function dg(i){for(var e=0,t=i.length;e<t;++e)this.remove(i[e]);return this}function cg(){return this._root}function lg(){var i=0;return this.visit(function(e){if(!e.length)do++i;while(e=e.next)}),i}function ug(i){var e=[],t,n=this._root,r,o,s,a,d,c,l;for(n&&e.push(new $e(n,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!i(n=t.node,o=t.x0,s=t.y0,a=t.z0,d=t.x1,c=t.y1,l=t.z1)&&n.length){var u=(o+d)/2,_=(s+c)/2,f=(a+l)/2;(r=n[7])&&e.push(new $e(r,u,_,f,d,c,l)),(r=n[6])&&e.push(new $e(r,o,_,f,u,c,l)),(r=n[5])&&e.push(new $e(r,u,s,f,d,_,l)),(r=n[4])&&e.push(new $e(r,o,s,f,u,_,l)),(r=n[3])&&e.push(new $e(r,u,_,a,d,c,f)),(r=n[2])&&e.push(new $e(r,o,_,a,u,c,f)),(r=n[1])&&e.push(new $e(r,u,s,a,d,_,f)),(r=n[0])&&e.push(new $e(r,o,s,a,u,_,f))}return this}function pg(i){var e=[],t=[],n;for(this._root&&e.push(new $e(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();){var r=n.node;if(r.length){var o,s=n.x0,a=n.y0,d=n.z0,c=n.x1,l=n.y1,u=n.z1,_=(s+c)/2,f=(a+l)/2,m=(d+u)/2;(o=r[0])&&e.push(new $e(o,s,a,d,_,f,m)),(o=r[1])&&e.push(new $e(o,_,a,d,c,f,m)),(o=r[2])&&e.push(new $e(o,s,f,d,_,l,m)),(o=r[3])&&e.push(new $e(o,_,f,d,c,l,m)),(o=r[4])&&e.push(new $e(o,s,a,m,_,f,u)),(o=r[5])&&e.push(new $e(o,_,a,m,c,f,u)),(o=r[6])&&e.push(new $e(o,s,f,m,_,l,u)),(o=r[7])&&e.push(new $e(o,_,f,m,c,l,u))}t.push(n)}for(;n=t.pop();)i(n.node,n.x0,n.y0,n.z0,n.x1,n.y1,n.z1);return this}function _g(i){return i[0]}function fg(i){return arguments.length?(this._x=i,this):this._x}function hg(i){return i[1]}function mg(i){return arguments.length?(this._y=i,this):this._y}function gg(i){return i[2]}function yg(i){return arguments.length?(this._z=i,this):this._z}function Nl(i,e,t,n){var r=new na(e??_g,t??hg,n??gg,NaN,NaN,NaN,NaN,NaN,NaN);return i==null?r:r.addAll(i)}function na(i,e,t,n,r,o,s,a,d){this._x=i,this._y=e,this._z=t,this._x0=n,this._y0=r,this._z0=o,this._x1=s,this._y1=a,this._z1=d,this._root=void 0}function Zd(i){for(var e={data:i.data},t=e;i=i.next;)t=t.next={data:i.data};return e}var gt=Nl.prototype=na.prototype;gt.copy=function(){var i=new na(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,n;if(!e)return i;if(!e.length)return i._root=Zd(e),i;for(t=[{source:e,target:i._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(n=e.source[r])&&(n.length?t.push({source:n,target:e.target[r]=new Array(8)}):e.target[r]=Zd(n));return i};gt.add=tg;gt.addAll=ig;gt.cover=ng;gt.data=rg;gt.extent=og;gt.find=sg;gt.remove=ag;gt.removeAll=dg;gt.root=cg;gt.size=lg;gt.visit=ug;gt.visitAfter=pg;gt.x=fg;gt.y=mg;gt.z=yg;function gi(i){return function(){return i}}function fi(i){return(i()-.5)*1e-6}function vg(i){return i.index}function Jd(i,e){var t=i.get(e);if(!t)throw new Error("node not found: "+e);return t}function Tg(i){var e=vg,t=_,n,r=gi(30),o,s,a,d,c,l,u=1;i==null&&(i=[]);function _(p){return 1/Math.min(d[p.source.index],d[p.target.index])}function f(p){for(var x=0,y=i.length;x<u;++x)for(var v=0,T,R,E,A=0,b=0,C=0,V,G;v<y;++v)T=i[v],R=T.source,E=T.target,A=E.x+E.vx-R.x-R.vx||fi(l),a>1&&(b=E.y+E.vy-R.y-R.vy||fi(l)),a>2&&(C=E.z+E.vz-R.z-R.vz||fi(l)),V=Math.sqrt(A*A+b*b+C*C),V=(V-o[v])/V*p*n[v],A*=V,b*=V,C*=V,E.vx-=A*(G=c[v]),a>1&&(E.vy-=b*G),a>2&&(E.vz-=C*G),R.vx+=A*(G=1-G),a>1&&(R.vy+=b*G),a>2&&(R.vz+=C*G)}function m(){if(s){var p,x=s.length,y=i.length,v=new Map(s.map((R,E)=>[e(R,E,s),R])),T;for(p=0,d=new Array(x);p<y;++p)T=i[p],T.index=p,typeof T.source!="object"&&(T.source=Jd(v,T.source)),typeof T.target!="object"&&(T.target=Jd(v,T.target)),d[T.source.index]=(d[T.source.index]||0)+1,d[T.target.index]=(d[T.target.index]||0)+1;for(p=0,c=new Array(y);p<y;++p)T=i[p],c[p]=d[T.source.index]/(d[T.source.index]+d[T.target.index]);n=new Array(y),g(),o=new Array(y),h()}}function g(){if(s)for(var p=0,x=i.length;p<x;++p)n[p]=+t(i[p],p,i)}function h(){if(s)for(var p=0,x=i.length;p<x;++p)o[p]=+r(i[p],p,i)}return f.initialize=function(p,...x){s=p,l=x.find(y=>typeof y=="function")||Math.random,a=x.find(y=>[1,2,3].includes(y))||2,m()},f.links=function(p){return arguments.length?(i=p,m(),f):i},f.id=function(p){return arguments.length?(e=p,f):e},f.iterations=function(p){return arguments.length?(u=+p,f):u},f.strength=function(p){return arguments.length?(t=typeof p=="function"?p:gi(+p),g(),f):t},f.distance=function(p){return arguments.length?(r=typeof p=="function"?p:gi(+p),h(),f):r},f}var xg={value:()=>{}};function Fl(){for(var i=0,e=arguments.length,t={},n;i<e;++i){if(!(n=arguments[i]+"")||n in t||/[\s.]/.test(n))throw new Error("illegal type: "+n);t[n]=[]}return new Wr(t)}function Wr(i){this._=i}function bg(i,e){return i.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}Wr.prototype=Fl.prototype={constructor:Wr,on:function(i,e){var t=this._,n=bg(i+"",t),r,o=-1,s=n.length;if(arguments.length<2){for(;++o<s;)if((r=(i=n[o]).type)&&(r=Rg(t[r],i.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(i=n[o]).type)t[r]=Qd(t[r],i.name,e);else if(e==null)for(r in t)t[r]=Qd(t[r],i.name,null);return this},copy:function(){var i={},e=this._;for(var t in e)i[t]=e[t].slice();return new Wr(i)},call:function(i,e){if((r=arguments.length-2)>0)for(var t=new Array(r),n=0,r,o;n<r;++n)t[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(o=this._[i],n=0,r=o.length;n<r;++n)o[n].value.apply(e,t)},apply:function(i,e,t){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,o=n.length;r<o;++r)n[r].value.apply(e,t)}};function Rg(i,e){for(var t=0,n=i.length,r;t<n;++t)if((r=i[t]).name===e)return r.value}function Qd(i,e,t){for(var n=0,r=i.length;n<r;++n)if(i[n].name===e){i[n]=xg,i=i.slice(0,n).concat(i.slice(n+1));break}return t!=null&&i.push({name:e,value:t}),i}var On=0,Zn=0,Vn=0,Bl=1e3,Jr,Jn,Qr=0,Zi=0,fo=0,cr=typeof performance=="object"&&performance.now?performance:Date,kl=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function zl(){return Zi||(kl(Eg),Zi=cr.now()+fo)}function Eg(){Zi=0}function Es(){this._call=this._time=this._next=null}Es.prototype=ql.prototype={constructor:Es,restart:function(i,e,t){if(typeof i!="function")throw new TypeError("callback is not a function");t=(t==null?zl():+t)+(e==null?0:+e),!this._next&&Jn!==this&&(Jn?Jn._next=this:Jr=this,Jn=this),this._call=i,this._time=t,Ms()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ms())}};function ql(i,e,t){var n=new Es;return n.restart(i,e,t),n}function Mg(){zl(),++On;for(var i=Jr,e;i;)(e=Zi-i._time)>=0&&i._call.call(void 0,e),i=i._next;--On}function ec(){Zi=(Qr=cr.now())+fo,On=Zn=0;try{Mg()}finally{On=0,Sg(),Zi=0}}function Cg(){var i=cr.now(),e=i-Qr;e>Bl&&(fo-=e,Qr=i)}function Sg(){for(var i,e=Jr,t,n=1/0;e;)e._call?(n>e._time&&(n=e._time),i=e,e=e._next):(t=e._next,e._next=null,e=i?i._next=t:Jr=t);Jn=i,Ms(n)}function Ms(i){if(!On){Zn&&(Zn=clearTimeout(Zn));var e=i-Zi;e>24?(i<1/0&&(Zn=setTimeout(ec,i-cr.now()-fo)),Vn&&(Vn=clearInterval(Vn))):(Vn||(Qr=cr.now(),Vn=setInterval(Cg,Bl)),On=1,kl(ec))}}const Pg=1664525,wg=1013904223,tc=4294967296;function Ag(){let i=1;return()=>(i=(Pg*i+wg)%tc)/tc}var ic=3;function is(i){return i.x}function nc(i){return i.y}function Lg(i){return i.z}var Dg=10,Og=Math.PI*(3-Math.sqrt(5)),Ig=Math.PI*20/(9+Math.sqrt(221));function Ug(i,e){e=e||2;var t=Math.min(ic,Math.max(1,Math.round(e))),n,r=1,o=.001,s=1-Math.pow(o,1/300),a=0,d=.6,c=new Map,l=ql(f),u=Fl("tick","end"),_=Ag();i==null&&(i=[]);function f(){m(),u.call("tick",n),r<o&&(l.stop(),u.call("end",n))}function m(p){var x,y=i.length,v;p===void 0&&(p=1);for(var T=0;T<p;++T)for(r+=(a-r)*s,c.forEach(function(R){R(r)}),x=0;x<y;++x)v=i[x],v.fx==null?v.x+=v.vx*=d:(v.x=v.fx,v.vx=0),t>1&&(v.fy==null?v.y+=v.vy*=d:(v.y=v.fy,v.vy=0)),t>2&&(v.fz==null?v.z+=v.vz*=d:(v.z=v.fz,v.vz=0));return n}function g(){for(var p=0,x=i.length,y;p<x;++p){if(y=i[p],y.index=p,y.fx!=null&&(y.x=y.fx),y.fy!=null&&(y.y=y.fy),y.fz!=null&&(y.z=y.fz),isNaN(y.x)||t>1&&isNaN(y.y)||t>2&&isNaN(y.z)){var v=Dg*(t>2?Math.cbrt(.5+p):t>1?Math.sqrt(.5+p):p),T=p*Og,R=p*Ig;t===1?y.x=v:t===2?(y.x=v*Math.cos(T),y.y=v*Math.sin(T)):(y.x=v*Math.sin(T)*Math.cos(R),y.y=v*Math.cos(T),y.z=v*Math.sin(T)*Math.sin(R))}(isNaN(y.vx)||t>1&&isNaN(y.vy)||t>2&&isNaN(y.vz))&&(y.vx=0,t>1&&(y.vy=0),t>2&&(y.vz=0))}}function h(p){return p.initialize&&p.initialize(i,_,t),p}return g(),n={tick:m,restart:function(){return l.restart(f),n},stop:function(){return l.stop(),n},numDimensions:function(p){return arguments.length?(t=Math.min(ic,Math.max(1,Math.round(p))),c.forEach(h),n):t},nodes:function(p){return arguments.length?(i=p,g(),c.forEach(h),n):i},alpha:function(p){return arguments.length?(r=+p,n):r},alphaMin:function(p){return arguments.length?(o=+p,n):o},alphaDecay:function(p){return arguments.length?(s=+p,n):+s},alphaTarget:function(p){return arguments.length?(a=+p,n):a},velocityDecay:function(p){return arguments.length?(d=1-p,n):1-d},randomSource:function(p){return arguments.length?(_=p,c.forEach(h),n):_},force:function(p,x){return arguments.length>1?(x==null?c.delete(p):c.set(p,h(x)),n):c.get(p)},find:function(){var p=Array.prototype.slice.call(arguments),x=p.shift()||0,y=(t>1?p.shift():null)||0,v=(t>2?p.shift():null)||0,T=p.shift()||1/0,R=0,E=i.length,A,b,C,V,G,B;for(T*=T,R=0;R<E;++R)G=i[R],A=x-G.x,b=y-(G.y||0),C=v-(G.z||0),V=A*A+b*b+C*C,V<T&&(B=G,T=V);return B},on:function(p,x){return arguments.length>1?(u.on(p,x),n):u.on(p)}}}function Ng(){var i,e,t,n,r,o=gi(-30),s,a=1,d=1/0,c=.81;function l(m){var g,h=i.length,p=(e===1?Dl(i,is):e===2?Il(i,is,nc):e===3?Nl(i,is,nc,Lg):null).visitAfter(_);for(r=m,g=0;g<h;++g)t=i[g],p.visit(f)}function u(){if(i){var m,g=i.length,h;for(s=new Array(g),m=0;m<g;++m)h=i[m],s[h.index]=+o(h,m,i)}}function _(m){var g=0,h,p,x=0,y,v,T,R,E=m.length;if(E){for(y=v=T=R=0;R<E;++R)(h=m[R])&&(p=Math.abs(h.value))&&(g+=h.value,x+=p,y+=p*(h.x||0),v+=p*(h.y||0),T+=p*(h.z||0));g*=Math.sqrt(4/E),m.x=y/x,e>1&&(m.y=v/x),e>2&&(m.z=T/x)}else{h=m,h.x=h.data.x,e>1&&(h.y=h.data.y),e>2&&(h.z=h.data.z);do g+=s[h.data.index];while(h=h.next)}m.value=g}function f(m,g,h,p,x){if(!m.value)return!0;var y=[h,p,x][e-1],v=m.x-t.x,T=e>1?m.y-t.y:0,R=e>2?m.z-t.z:0,E=y-g,A=v*v+T*T+R*R;if(E*E/c<A)return A<d&&(v===0&&(v=fi(n),A+=v*v),e>1&&T===0&&(T=fi(n),A+=T*T),e>2&&R===0&&(R=fi(n),A+=R*R),A<a&&(A=Math.sqrt(a*A)),t.vx+=v*m.value*r/A,e>1&&(t.vy+=T*m.value*r/A),e>2&&(t.vz+=R*m.value*r/A)),!0;if(m.length||A>=d)return;(m.data!==t||m.next)&&(v===0&&(v=fi(n),A+=v*v),e>1&&T===0&&(T=fi(n),A+=T*T),e>2&&R===0&&(R=fi(n),A+=R*R),A<a&&(A=Math.sqrt(a*A)));do m.data!==t&&(E=s[m.data.index]*r/A,t.vx+=v*E,e>1&&(t.vy+=T*E),e>2&&(t.vz+=R*E));while(m=m.next)}return l.initialize=function(m,...g){i=m,n=g.find(h=>typeof h=="function")||Math.random,e=g.find(h=>[1,2,3].includes(h))||2,u()},l.strength=function(m){return arguments.length?(o=typeof m=="function"?m:gi(+m),u(),l):o},l.distanceMin=function(m){return arguments.length?(a=m*m,l):Math.sqrt(a)},l.distanceMax=function(m){return arguments.length?(d=m*m,l):Math.sqrt(d)},l.theta=function(m){return arguments.length?(c=m*m,l):Math.sqrt(c)},l}function Fg(i,e,t,n){var r,o,s=gi(.1),a,d;typeof i!="function"&&(i=gi(+i)),e==null&&(e=0),t==null&&(t=0),n==null&&(n=0);function c(u){for(var _=0,f=r.length;_<f;++_){var m=r[_],g=m.x-e||1e-6,h=(m.y||0)-t||1e-6,p=(m.z||0)-n||1e-6,x=Math.sqrt(g*g+h*h+p*p),y=(d[_]-x)*a[_]*u/x;m.vx+=g*y,o>1&&(m.vy+=h*y),o>2&&(m.vz+=p*y)}}function l(){if(r){var u,_=r.length;for(a=new Array(_),d=new Array(_),u=0;u<_;++u)d[u]=+i(r[u],u,r),a[u]=isNaN(d[u])?0:+s(r[u],u,r)}}return c.initialize=function(u,..._){r=u,o=_.find(f=>[1,2,3].includes(f))||2,l()},c.strength=function(u){return arguments.length?(s=typeof u=="function"?u:gi(+u),l(),c):s},c.radius=function(u){return arguments.length?(i=typeof u=="function"?u:gi(+u),l(),c):i},c.x=function(u){return arguments.length?(e=+u,c):e},c.y=function(u){return arguments.length?(t=+u,c):t},c.z=function(u){return arguments.length?(n=+u,c):n},c}function Hl(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ra=function(e){kg(e);var t=Bg(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function Bg(i){var e=Object.create(null);return{on:function(t,n,r){if(typeof n!="function")throw new Error("callback is expected to be a function");var o=e[t];return o||(o=e[t]=[]),o.push({callback:n,ctx:r}),i},off:function(t,n){var r=typeof t>"u";if(r)return e=Object.create(null),i;if(e[t]){var o=typeof n!="function";if(o)delete e[t];else for(var s=e[t],a=0;a<s.length;++a)s[a].callback===n&&s.splice(a,1)}return i},fire:function(t){var n=e[t];if(!n)return i;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var o=0;o<n.length;++o){var s=n[o];s.callback.apply(s.ctx,r)}return i}}}function kg(i){if(!i)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(i.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var zg=Hg,qg=ra;function Hg(i){if(i=i||{},"uniqueLinkId"in i&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),i.multigraph=i.uniqueLinkId),i.multigraph===void 0&&(i.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,n={},r=0,o=i.multigraph?v:y,s=[],a=F,d=F,c=F,l=F,u={version:20,addNode:g,addLink:x,removeLink:A,removeNode:p,getNode:h,getNodeCount:T,getLinkCount:R,getEdgeCount:R,getLinksCount:R,getNodesCount:T,getLinks:E,forEachNode:re,forEachLinkedNode:B,forEachLink:G,beginUpdate:c,endUpdate:l,clear:V,hasLink:C,hasNode:h,getLink:C};return qg(u),_(),u;function _(){var k=u.on;u.on=I;function I(){return u.beginUpdate=c=X,u.endUpdate=l=Q,a=f,d=m,u.on=k,k.apply(u,arguments)}}function f(k,I){s.push({link:k,changeType:I})}function m(k,I){s.push({node:k,changeType:I})}function g(k,I){if(k===void 0)throw new Error("Invalid node identifier");c();var q=h(k);return q?(q.data=I,d(q,"update")):(q=new Gg(k,I),d(q,"add")),e.set(k,q),l(),q}function h(k){return e.get(k)}function p(k){var I=h(k);if(!I)return!1;c();var q=I.links;return q&&(q.forEach(b),I.links=null),e.delete(k),d(I,"remove"),l(),!0}function x(k,I,q){c();var oe=h(k)||g(k),J=h(I)||g(I),W=o(k,I,q),ie=t.has(W.id);return t.set(W.id,W),rc(oe,W),k!==I&&rc(J,W),a(W,ie?"update":"add"),l(),W}function y(k,I,q){var oe=zr(k,I),J=t.get(oe);return J?(J.data=q,J):new oc(k,I,q,oe)}function v(k,I,q){var oe=zr(k,I),J=n.hasOwnProperty(oe);if(J||C(k,I)){J||(n[oe]=0);var W="@"+ ++n[oe];oe=zr(k+W,I+W)}return new oc(k,I,q,oe)}function T(){return e.size}function R(){return t.size}function E(k){var I=h(k);return I?I.links:null}function A(k,I){return I!==void 0&&(k=C(k,I)),b(k)}function b(k){if(!k||!t.get(k.id))return!1;c(),t.delete(k.id);var I=h(k.fromId),q=h(k.toId);return I&&I.links.delete(k),q&&q.links.delete(k),a(k,"remove"),l(),!0}function C(k,I){if(!(k===void 0||I===void 0))return t.get(zr(k,I))}function V(){c(),re(function(k){p(k.id)}),l()}function G(k){if(typeof k=="function")for(var I=t.values(),q=I.next();!q.done;){if(k(q.value))return!0;q=I.next()}}function B(k,I,q){var oe=h(k);if(oe&&oe.links&&typeof I=="function")return q?w(oe.links,k,I):L(oe.links,k,I)}function L(k,I,q){for(var oe,J=k.values(),W=J.next();!W.done;){var ie=W.value,N=ie.fromId===I?ie.toId:ie.fromId;if(oe=q(e.get(N),ie),oe)return!0;W=J.next()}}function w(k,I,q){for(var oe,J=k.values(),W=J.next();!W.done;){var ie=W.value;if(ie.fromId===I&&(oe=q(e.get(ie.toId),ie),oe))return!0;W=J.next()}}function F(){}function X(){r+=1}function Q(){r-=1,r===0&&s.length>0&&(u.fire("changed",s),s.length=0)}function re(k){if(typeof k!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+k);for(var I=e.values(),q=I.next();!q.done;){if(k(q.value))return!0;q=I.next()}}}function Gg(i,e){this.id=i,this.links=null,this.data=e}function rc(i,e){i.links?i.links.add(e):i.links=new Set([e])}function oc(i,e,t,n){this.fromId=i,this.toId=e,this.data=t,this.id=n}function zr(i,e){return i.toString()+"👉 "+e.toString()}const Vg=Hl(zg);var oa={exports:{}},_r={exports:{}},Gl=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const Wg=Gl;var Fn=function(e){return t;function t(n,r){let o=r&&r.indent||0,s=r&&r.join!==void 0?r.join:`
`,a=Array(o+1).join(" "),d=[];for(let c=0;c<e;++c){let l=Wg(c),u=c===0?"":a;d.push(u+n.replace(/{var}/g,l))}return d.join(s)}};const Vl=Fn;_r.exports=jg;_r.exports.generateCreateBodyFunctionBody=Wl;_r.exports.getVectorCode=Xl;_r.exports.getBodyCode=jl;function jg(i,e){let t=Wl(i,e),{Body:n}=new Function(t)();return n}function Wl(i,e){return`
${Xl(i,e)}
${jl(i)}
return {Body: Body, Vector: Vector};
`}function jl(i){let e=Vl(i),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function Xl(i,e){let t=Vl(i),n="";return e&&(n=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${n}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var Xg=_r.exports,Ni={exports:{}};const sa=Fn,Pi=Gl;Ni.exports=$g;Ni.exports.generateQuadTreeFunctionBody=$l;Ni.exports.getInsertStackCode=Ql;Ni.exports.getQuadNodeCode=Jl;Ni.exports.isSamePosition=Yl;Ni.exports.getChildBodyCode=Zl;Ni.exports.setChildBodyCode=Kl;function $g(i){let e=$l(i);return new Function(e)()}function $l(i){let e=sa(i),t=Math.pow(2,i);return`
${Ql()}
${Jl(i)}
${Yl(i)}
${Zl(i)}
${Kl(i)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${s("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${Pi(0)} - node.min_${Pi(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${r(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function r(a){let d=[],c=Array(a+1).join(" ");for(let l=0;l<i;++l)d.push(c+`if (${Pi(l)} > max_${Pi(l)}) {`),d.push(c+`  quadIdx = quadIdx + ${Math.pow(2,l)};`),d.push(c+`  min_${Pi(l)} = max_${Pi(l)};`),d.push(c+`  max_${Pi(l)} = node.max_${Pi(l)};`),d.push(c+"}");return d.join(`
`)}function o(){let a=Array(11).join(" "),d=[];for(let c=0;c<t;++c)d.push(a+`if (node.quad${c}) {`),d.push(a+`  queue[pushIdx] = node.quad${c};`),d.push(a+"  queueLength += 1;"),d.push(a+"  pushIdx += 1;"),d.push(a+"}");return d.join(`
`)}function s(a){let d=[];for(let c=0;c<t;++c)d.push(`${a}quad${c} = null;`);return d.join(`
`)}}function Yl(i){let e=sa(i);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Kl(i){var e=Math.pow(2,i);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let n=[];for(let r=0;r<e;++r){let o=r===0?"  ":"  else ";n.push(`${o}if (idx === ${r}) node.quad${r} = child;`)}return n.join(`
`)}}function Zl(i){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],n=Math.pow(2,i);for(let r=0;r<n;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function Jl(i){let e=sa(i),t=Math.pow(2,i);var n=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${r("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return n;function r(o){let s=[];for(let a=0;a<t;++a)s.push(`${o}quad${a} = null;`);return s.join(`
`)}}function Ql(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var Yg=Ni.exports,aa={exports:{}};aa.exports=Zg;aa.exports.generateFunctionBody=eu;const Kg=Fn;function Zg(i){let e=eu(i);return new Function("bodies","settings","random",e)}function eu(i){let e=Kg(i);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var Jg=aa.exports,da={exports:{}};const Qg=Fn;da.exports=ey;da.exports.generateCreateDragForceFunctionBody=tu;function ey(i){let e=tu(i);return new Function("options",e)}function tu(i){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Qg(i)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var ty=da.exports,ca={exports:{}};const iy=Fn;ca.exports=ny;ca.exports.generateCreateSpringForceFunctionBody=iu;function ny(i){let e=iu(i);return new Function("options","random",e)}function iu(i){let e=iy(i);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var ry=ca.exports,la={exports:{}};const oy=Fn;la.exports=sy;la.exports.generateIntegratorFunctionBody=nu;function sy(i){let e=nu(i);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function nu(i){let e=oy(i);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var ay=la.exports,ns,sc;function dy(){if(sc)return ns;sc=1,ns=i;function i(e,t,n,r){this.from=e,this.to=t,this.length=n,this.coefficient=r}return ns}var rs,ac;function cy(){if(ac)return rs;ac=1,rs=i;function i(e,t){var n;if(e||(e={}),t){for(n in t)if(t.hasOwnProperty(n)){var r=e.hasOwnProperty(n),o=typeof t[n],s=!r||typeof e[n]!==o;s?e[n]=t[n]:o==="object"&&(e[n]=i(e[n],t[n]))}}return e}return rs}var Wn={exports:{}},dc;function ly(){if(dc)return Wn.exports;dc=1,Wn.exports=i,Wn.exports.random=i,Wn.exports.randomIterator=a;function i(d){var c=typeof d=="number"?d:+new Date;return new e(c)}function e(d){this.seed=d}e.prototype.next=s,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=t;function t(){var d,c,l;do c=this.nextDouble()*2-1,l=this.nextDouble()*2-1,d=c*c+l*l;while(d>=1||d===0);return c*Math.sqrt(-2*Math.log(d)/d)}e.prototype.levy=n;function n(){var d=1.5,c=Math.pow(r(1+d)*Math.sin(Math.PI*d/2)/(r((1+d)/2)*d*Math.pow(2,(d-1)/2)),1/d);return this.gaussian()*c/Math.pow(Math.abs(this.gaussian()),1/d)}function r(d){return Math.sqrt(2*Math.PI/d)*Math.pow(1/Math.E*(d+1/(12*d-1/(10*d))),d)}function o(){var d=this.seed;return d=d+2127912214+(d<<12)&4294967295,d=(d^3345072700^d>>>19)&4294967295,d=d+374761393+(d<<5)&4294967295,d=(d+3550635116^d<<9)&4294967295,d=d+4251993797+(d<<3)&4294967295,d=(d^3042594569^d>>>16)&4294967295,this.seed=d,(d&268435455)/268435456}function s(d){return Math.floor(this.nextDouble()*d)}function a(d,c){var l=c||i();if(typeof l.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:_,shuffle:u};function u(){var f,m,g;for(f=d.length-1;f>0;--f)m=l.next(f+1),g=d[m],d[m]=d[f],d[f]=g;return d}function _(f){var m,g,h;for(m=d.length-1;m>0;--m)g=l.next(m+1),h=d[g],d[g]=d[m],d[m]=h,f(h);d.length&&f(d[0])}}return Wn.exports}var ru=gy,uy=Xg,py=Yg,_y=Jg,fy=ty,hy=ry,my=ay,cc={};function gy(i){var e=dy(),t=cy(),n=ra;if(i){if(i.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(i.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}i=t(i,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=cc[i.dimensions];if(!r){var o=i.dimensions;r={Body:uy(o,i.debug),createQuadTree:py(o),createBounds:_y(o),createDragForce:fy(o),createSpringForce:hy(o),integrate:my(o)},cc[o]=r}var s=r.Body,a=r.createQuadTree,d=r.createBounds,c=r.createDragForce,l=r.createSpringForce,u=r.integrate,_=w=>new s(w),f=ly().random(42),m=[],g=[],h=a(i,f),p=d(m,i,f),x=l(i,f),y=c(i),v=0,T=[],R=new Map,E=0;C("nbody",B),C("spring",L);var A={bodies:m,quadTree:h,springs:g,settings:i,addForce:C,removeForce:V,getForces:G,step:function(){for(var w=0;w<T.length;++w)T[w](E);var F=u(m,i.timeStep,i.adaptiveTimeStepWeight);return E+=1,F},addBody:function(w){if(!w)throw new Error("Body is required");return m.push(w),w},addBodyAt:function(w){if(!w)throw new Error("Body position is required");var F=_(w);return m.push(F),F},removeBody:function(w){if(w){var F=m.indexOf(w);if(!(F<0))return m.splice(F,1),m.length===0&&p.reset(),!0}},addSpring:function(w,F,X,Q){if(!w||!F)throw new Error("Cannot add null spring to force simulator");typeof X!="number"&&(X=-1);var re=new e(w,F,X,Q>=0?Q:-1);return g.push(re),re},getTotalMovement:function(){return v},removeSpring:function(w){if(w){var F=g.indexOf(w);if(F>-1)return g.splice(F,1),!0}},getBestNewBodyPosition:function(w){return p.getBestNewPosition(w)},getBBox:b,getBoundingBox:b,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(w){return w!==void 0?(i.gravity=w,h.options({gravity:w}),this):i.gravity},theta:function(w){return w!==void 0?(i.theta=w,h.options({theta:w}),this):i.theta},random:f};return yy(i,A),n(A),A;function b(){return p.update(),p.box}function C(w,F){if(R.has(w))throw new Error("Force "+w+" is already added");R.set(w,F),T.push(F)}function V(w){var F=T.indexOf(R.get(w));F<0||(T.splice(F,1),R.delete(w))}function G(){return R}function B(){if(m.length!==0){h.insertBodies(m);for(var w=m.length;w--;){var F=m[w];F.isPinned||(F.reset(),h.updateBodyForce(F),y.update(F))}}}function L(){for(var w=g.length;w--;)x.update(g[w])}}function yy(i,e){for(var t in i)vy(i,e,t)}function vy(i,e,t){if(i.hasOwnProperty(t)&&typeof e[t]!="function"){var n=Number.isFinite(i[t]);n?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return i[t]=r,e}return i[t]}:e[t]=function(r){return r!==void 0?(i[t]=r,e):i[t]}}}oa.exports=xy;oa.exports.simulator=ru;var Ty=ra;function xy(i,e){if(!i)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||ru,n=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=i.version>19?B:G;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var o=new Map,s={},a=0,d=n.settings.springTransform||by;y(),h();var c=!1,l={step:function(){if(a===0)return u(!0),!0;var L=n.step();l.lastMove=L,l.fire("step");var w=L/a,F=w<=.01;return u(F),F},getNodePosition:function(L){return V(L).pos},setNodePosition:function(L){var w=V(L);w.setPosition.apply(w,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(L){var w=s[L];if(w)return{from:w.from.pos,to:w.to.pos}},getGraphRect:function(){return n.getBBox()},forEachBody:_,pinNode:function(L,w){var F=V(L.id);F.isPinned=!!w},isNodePinned:function(L){return V(L.id).isPinned},dispose:function(){i.off("changed",x),l.fire("disposed")},getBody:g,getSpring:m,getForceVectorLength:f,simulator:n,graph:i,lastMove:0};return Ty(l),l;function u(L){c!==L&&(c=L,p(L))}function _(L){o.forEach(L)}function f(){var L=0,w=0;return _(function(F){L+=Math.abs(F.force.x),w+=Math.abs(F.force.y)}),Math.sqrt(L*L+w*w)}function m(L,w){var F;if(w===void 0)typeof L!="object"?F=L:F=L.id;else{var X=i.hasLink(L,w);if(!X)return;F=X.id}return s[F]}function g(L){return o.get(L)}function h(){i.on("changed",x)}function p(L){l.fire("stable",L)}function x(L){for(var w=0;w<L.length;++w){var F=L[w];F.changeType==="add"?(F.node&&v(F.node.id),F.link&&R(F.link)):F.changeType==="remove"&&(F.node&&T(F.node),F.link&&E(F.link))}a=i.getNodesCount()}function y(){a=0,i.forEachNode(function(L){v(L.id),a+=1}),i.forEachLink(R)}function v(L){var w=o.get(L);if(!w){var F=i.getNode(L);if(!F)throw new Error("initBody() was called with unknown node id");var X=F.position;if(!X){var Q=A(F);X=n.getBestNewBodyPosition(Q)}w=n.addBodyAt(X),w.id=L,o.set(L,w),b(L),C(F)&&(w.isPinned=!0)}}function T(L){var w=L.id,F=o.get(w);F&&(o.delete(w),n.removeBody(F))}function R(L){b(L.fromId),b(L.toId);var w=o.get(L.fromId),F=o.get(L.toId),X=n.addSpring(w,F,L.length);d(L,X),s[L.id]=X}function E(L){var w=s[L.id];if(w){var F=i.getNode(L.fromId),X=i.getNode(L.toId);F&&b(F.id),X&&b(X.id),delete s[L.id],n.removeSpring(w)}}function A(L){var w=[];if(!L.links)return w;for(var F=Math.min(L.links.length,2),X=0;X<F;++X){var Q=L.links[X],re=Q.fromId!==L.id?o.get(Q.fromId):o.get(Q.toId);re&&re.pos&&w.push(re)}return w}function b(L){var w=o.get(L);if(w.mass=r(L),Number.isNaN(w.mass))throw new Error("Node mass should be a number")}function C(L){return L&&(L.isPinned||L.data&&L.data.isPinned)}function V(L){var w=o.get(L);return w||(v(L),w=o.get(L)),w}function G(L){var w=i.getLinks(L);return w?1+w.length/3:1}function B(L){var w=i.getLinks(L);return w?1+w.size/3:1}}function by(){}var Ry=oa.exports;const Ey=Hl(Ry);var My=typeof global=="object"&&global&&global.Object===Object&&global;const Cy=My;var Sy=typeof self=="object"&&self&&self.Object===Object&&self,Py=Cy||Sy||Function("return this")();const ou=Py;var wy=ou.Symbol;const eo=wy;var su=Object.prototype,Ay=su.hasOwnProperty,Ly=su.toString,jn=eo?eo.toStringTag:void 0;function Dy(i){var e=Ay.call(i,jn),t=i[jn];try{i[jn]=void 0;var n=!0}catch{}var r=Ly.call(i);return n&&(e?i[jn]=t:delete i[jn]),r}var Oy=Object.prototype,Iy=Oy.toString;function Uy(i){return Iy.call(i)}var Ny="[object Null]",Fy="[object Undefined]",lc=eo?eo.toStringTag:void 0;function By(i){return i==null?i===void 0?Fy:Ny:lc&&lc in Object(i)?Dy(i):Uy(i)}function ky(i){return i!=null&&typeof i=="object"}var zy="[object Symbol]";function qy(i){return typeof i=="symbol"||ky(i)&&By(i)==zy}var Hy=/\s/;function Gy(i){for(var e=i.length;e--&&Hy.test(i.charAt(e)););return e}var Vy=/^\s+/;function Wy(i){return i&&i.slice(0,Gy(i)+1).replace(Vy,"")}function Cs(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")}var uc=0/0,jy=/^[-+]0x[0-9a-f]+$/i,Xy=/^0b[01]+$/i,$y=/^0o[0-7]+$/i,Yy=parseInt;function pc(i){if(typeof i=="number")return i;if(qy(i))return uc;if(Cs(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=Cs(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=Wy(i);var t=Xy.test(i);return t||$y.test(i)?Yy(i.slice(2),t?2:8):jy.test(i)?uc:+i}var Ky=function(){return ou.Date.now()};const os=Ky;var Zy="Expected a function",Jy=Math.max,Qy=Math.min;function ev(i,e,t){var n,r,o,s,a,d,c=0,l=!1,u=!1,_=!0;if(typeof i!="function")throw new TypeError(Zy);e=pc(e)||0,Cs(t)&&(l=!!t.leading,u="maxWait"in t,o=u?Jy(pc(t.maxWait)||0,e):o,_="trailing"in t?!!t.trailing:_);function f(R){var E=n,A=r;return n=r=void 0,c=R,s=i.apply(A,E),s}function m(R){return c=R,a=setTimeout(p,e),l?f(R):s}function g(R){var E=R-d,A=R-c,b=e-E;return u?Qy(b,o-A):b}function h(R){var E=R-d,A=R-c;return d===void 0||E>=e||E<0||u&&A>=o}function p(){var R=os();if(h(R))return x(R);a=setTimeout(p,g(R))}function x(R){return a=void 0,_&&n?f(R):(n=r=void 0,s)}function y(){a!==void 0&&clearTimeout(a),c=0,n=d=r=a=void 0}function v(){return a===void 0?s:x(os())}function T(){var R=os(),E=h(R);if(n=arguments,r=this,d=R,E){if(a===void 0)return m(d);if(u)return clearTimeout(a),a=setTimeout(p,e),f(d)}return a===void 0&&(a=setTimeout(p,e)),s}return T.cancel=y,T.flush=v,T}function tv(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,s,a=[],d=!0,c=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;d=!1}else for(;!(d=(n=o.call(t)).done)&&(a.push(n.value),a.length!==e);d=!0);}catch(l){c=!0,r=l}finally{try{if(!d&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}function iv(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function _c(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,cv(n.key),n)}}function nv(i,e,t){return e&&_c(i.prototype,e),t&&_c(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function rv(i,e){return ov(i)||tv(i,e)||sv(i,e)||av()}function ov(i){if(Array.isArray(i))return i}function sv(i,e){if(i){if(typeof i=="string")return fc(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fc(i,e)}}function fc(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function av(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dv(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function cv(i){var e=dv(i,"string");return typeof e=="symbol"?e:String(e)}var lv=nv(function i(e,t){var n=t.default,r=n===void 0?null:n,o=t.triggerUpdate,s=o===void 0?!0:o,a=t.onChange,d=a===void 0?function(c,l){}:a;iv(this,i),this.name=e,this.defaultVal=r,this.triggerUpdate=s,this.onChange=d});function ua(i){var e=i.stateInit,t=e===void 0?function(){return{}}:e,n=i.props,r=n===void 0?{}:n,o=i.methods,s=o===void 0?{}:o,a=i.aliases,d=a===void 0?{}:a,c=i.init,l=c===void 0?function(){}:c,u=i.update,_=u===void 0?function(){}:u,f=Object.keys(r).map(function(m){return new lv(m,r[m])});return function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=Object.assign({},t instanceof Function?t(m):t,{initialised:!1}),h={};function p(v){return x(v,m),y(),p}var x=function(T,R){l.call(p,T,g,R),g.initialised=!0},y=ev(function(){g.initialised&&(_.call(p,g,h),h={})},1);return f.forEach(function(v){p[v.name]=T(v);function T(R){var E=R.name,A=R.triggerUpdate,b=A===void 0?!1:A,C=R.onChange,V=C===void 0?function(L,w){}:C,G=R.defaultVal,B=G===void 0?null:G;return function(L){var w=g[E];if(!arguments.length)return w;var F=L===void 0?B:L;return g[E]=F,V.call(p,F,g,w),!h.hasOwnProperty(E)&&(h[E]=w),b&&y(),p}}}),Object.keys(s).forEach(function(v){p[v]=function(){for(var T,R=arguments.length,E=new Array(R),A=0;A<R;A++)E[A]=arguments[A];return(T=s[v]).call.apply(T,[p,g].concat(E))}}),Object.entries(d).forEach(function(v){var T=rv(v,2),R=T[0],E=T[1];return p[R]=p[E]}),p.resetProps=function(){return f.forEach(function(v){p[v.name](v.defaultVal)}),p},p.resetProps(),g._rerender=y,p}}var We=function(i){return typeof i=="function"?i:typeof i=="string"?function(e){return e[i]}:function(e){return i}};class hc extends Map{constructor(e,t=_v){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[n,r]of e)this.set(n,r)}get(e){return super.get(mc(this,e))}has(e){return super.has(mc(this,e))}set(e,t){return super.set(uv(this,e),t)}delete(e){return super.delete(pv(this,e))}}function mc({_intern:i,_key:e},t){const n=e(t);return i.has(n)?i.get(n):t}function uv({_intern:i,_key:e},t){const n=e(t);return i.has(n)?i.get(n):(i.set(n,t),t)}function pv({_intern:i,_key:e},t){const n=e(t);return i.has(n)&&(t=i.get(n),i.delete(n)),t}function _v(i){return i!==null&&typeof i=="object"?i.valueOf():i}function fv(i,e){let t;if(e===void 0)for(const n of i)n!=null&&(t<n||t===void 0&&n>=n)&&(t=n);else{let n=-1;for(let r of i)(r=e(r,++n,i))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function hv(i,e){let t;if(e===void 0)for(const n of i)n!=null&&(t>n||t===void 0&&n>=n)&&(t=n);else{let n=-1;for(let r of i)(r=e(r,++n,i))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function mv(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,s,a=[],d=!0,c=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;d=!1}else for(;!(d=(n=o.call(t)).done)&&(a.push(n.value),a.length!==e);d=!0);}catch(l){c=!0,r=l}finally{try{if(!d&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}function gv(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,o;for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function yv(i,e){if(i==null)return{};var t=gv(i,e),n,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function vv(i,e){return bv(i)||mv(i,e)||au(i,e)||Mv()}function Tv(i){return xv(i)||Rv(i)||au(i)||Ev()}function xv(i){if(Array.isArray(i))return Ss(i)}function bv(i){if(Array.isArray(i))return i}function Rv(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function au(i,e){if(i){if(typeof i=="string")return Ss(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ss(i,e)}}function Ss(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Ev(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cv(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Sv(i){var e=Cv(i,"string");return typeof e=="symbol"?e:String(e)}var gc=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(a){return{keyAccessor:a,isProp:!(a instanceof Function)}}),o=i.reduce(function(a,d){var c=a,l=d;return r.forEach(function(u,_){var f=u.keyAccessor,m=u.isProp,g;if(m){var h=l,p=h[f],x=yv(h,[f].map(Sv));g=p,l=x}else g=f(l,_);_+1<r.length?(c.hasOwnProperty(g)||(c[g]={}),c=c[g]):t?(c.hasOwnProperty(g)||(c[g]=[]),c[g].push(l)):c[g]=l}),a},{});t instanceof Function&&function a(d){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;c===r.length?Object.keys(d).forEach(function(l){return d[l]=t(d[l])}):Object.values(d).forEach(function(l){return a(l,c+1)})}(o);var s=o;return n&&(s=[],function a(d){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];c.length===r.length?s.push({keys:c,vals:d}):Object.entries(d).forEach(function(l){var u=vv(l,2),_=u[0],f=u[1];return a(f,[].concat(Tv(c),[_]))})}(o),e instanceof Array&&e.length===0&&s.length===1&&(s[0].keys=[])),s};function Pv(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,s,a=[],d=!0,c=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;d=!1}else for(;!(d=(n=o.call(t)).done)&&(a.push(n.value),a.length!==e);d=!0);}catch(l){c=!0,r=l}finally{try{if(!d&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}function yc(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function wv(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?yc(Object(t),!0).forEach(function(n){du(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):yc(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function du(i,e,t){return e=Bv(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Av(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,o;for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function Lv(i,e){if(i==null)return{};var t=Av(i,e),n,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function cu(i,e){return Ov(i)||Pv(i,e)||lu(i,e)||Nv()}function to(i){return Dv(i)||Iv(i)||lu(i)||Uv()}function Dv(i){if(Array.isArray(i))return Ps(i)}function Ov(i){if(Array.isArray(i))return i}function Iv(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function lu(i,e){if(i){if(typeof i=="string")return Ps(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ps(i,e)}}function Ps(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Uv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fv(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Bv(i){var e=Fv(i,"string");return typeof e=="symbol"?e:String(e)}var kv=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function zv(i,e,t){var n={enter:[],update:[],exit:[]};if(t){var s=gc(i,t,!1),a=gc(e,t,!1),d=Object.assign({},s,a);Object.entries(d).forEach(function(c){var l=cu(c,2),u=l[0],_=l[1],f=s.hasOwnProperty(u)?a.hasOwnProperty(u)?"update":"exit":"enter";n[f].push(f==="update"?[s[u],a[u]]:_)})}else{var r=new Set(i),o=new Set(e);new Set([].concat(to(r),to(o))).forEach(function(c){var l=r.has(c)?o.has(c)?"update":"exit":"enter";n[l].push(l==="update"?[c,c]:c)})}return n}function qv(i,e,t){var n=t.objBindAttr,r=n===void 0?"__obj":n,o=t.dataBindAttr,s=o===void 0?"__data":o,a=t.idAccessor,d=t.purge,c=d===void 0?!1:d,l=function(h){return h.hasOwnProperty(s)},u=e.filter(function(g){return!l(g)}),_=e.filter(l).map(function(g){return g[s]}),f=i,m=c?{enter:f,exit:_,update:[]}:zv(_,f,a);return m.update=m.update.map(function(g){var h=cu(g,2),p=h[0],x=h[1];return p!==x&&(x[r]=p[r],x[r][s]=x),x}),m.exit=m.exit.concat(u.map(function(g){return du({},r,g)})),m}function Hv(i,e,t,n,r){var o=r.createObj,s=o===void 0?function(A){return{}}:o,a=r.updateObj,d=a===void 0?function(A,b){}:a,c=r.exitObj,l=c===void 0?function(A){}:c,u=r.objBindAttr,_=u===void 0?"__obj":u,f=r.dataBindAttr,m=f===void 0?"__data":f,g=Lv(r,kv),h=qv(i,e,wv({objBindAttr:_,dataBindAttr:m},g)),p=h.enter,x=h.update,y=h.exit;y.forEach(function(A){var b=A[_];delete A[_],l(b),n(b)});var v=R(p),T=[].concat(to(p),to(x));E(T),v.forEach(t);function R(A){var b=[];return A.forEach(function(C){var V=s(C);V&&(V[m]=C,C[_]=V,b.push(V))}),b}function E(A){A.forEach(function(b){var C=b[_];C&&(C[m]=b,d(C,b))})}}function Gv(i,e){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(e).domain(i);break}return this}const vc=Symbol("implicit");function uu(){var i=new hc,e=[],t=[],n=vc;function r(o){let s=i.get(o);if(s===void 0){if(n!==vc)return n;i.set(o,s=e.push(o)-1)}return t[s%t.length]}return r.domain=function(o){if(!arguments.length)return e.slice();e=[],i=new hc;for(const s of o)i.has(s)||i.set(s,e.push(s)-1);return r},r.range=function(o){return arguments.length?(t=Array.from(o),r):t.slice()},r.unknown=function(o){return arguments.length?(n=o,r):n},r.copy=function(){return uu(e,t).unknown(n)},Gv.apply(r,arguments),r}function Vv(i){for(var e=i.length/6|0,t=new Array(e),n=0;n<e;)t[n]="#"+i.slice(n*6,++n*6);return t}const Wv=Vv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function io(i){"@babel/helpers - typeof";return io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},io(i)}var jv=/^\s+/,Xv=/\s+$/;function be(i,e){if(i=i||"",e=e||{},i instanceof be)return i;if(!(this instanceof be))return new be(i,e);var t=$v(i);this._originalInput=i,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}be.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,n,r,o,s,a;return t=e.r/255,n=e.g/255,r=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),r<=.03928?a=r/12.92:a=Math.pow((r+.055)/1.055,2.4),.2126*o+.7152*s+.0722*a},setAlpha:function(e){return this._a=pu(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=xc(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=xc(this._r,this._g,this._b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Tc(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Tc(this._r,this._g,this._b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return bc(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Jv(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(et(this._r,255)*100)+"%",g:Math.round(et(this._g,255)*100)+"%",b:Math.round(et(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(et(this._r,255)*100)+"%, "+Math.round(et(this._g,255)*100)+"%, "+Math.round(et(this._b,255)*100)+"%)":"rgba("+Math.round(et(this._r,255)*100)+"%, "+Math.round(et(this._g,255)*100)+"%, "+Math.round(et(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:lT[bc(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Rc(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=be(e);n="#"+Rc(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0,o=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},clone:function(){return be(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(iT,arguments)},brighten:function(){return this._applyModification(nT,arguments)},darken:function(){return this._applyModification(rT,arguments)},desaturate:function(){return this._applyModification(Qv,arguments)},saturate:function(){return this._applyModification(eT,arguments)},greyscale:function(){return this._applyModification(tT,arguments)},spin:function(){return this._applyModification(oT,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(dT,arguments)},complement:function(){return this._applyCombination(sT,arguments)},monochromatic:function(){return this._applyCombination(cT,arguments)},splitcomplement:function(){return this._applyCombination(aT,arguments)},triad:function(){return this._applyCombination(Ec,[3])},tetrad:function(){return this._applyCombination(Ec,[4])}};be.fromRatio=function(i,e){if(io(i)=="object"){var t={};for(var n in i)i.hasOwnProperty(n)&&(n==="a"?t[n]=i[n]:t[n]=Qn(i[n]));i=t}return be(i,e)};function $v(i){var e={r:0,g:0,b:0},t=1,n=null,r=null,o=null,s=!1,a=!1;return typeof i=="string"&&(i=fT(i)),io(i)=="object"&&(li(i.r)&&li(i.g)&&li(i.b)?(e=Yv(i.r,i.g,i.b),s=!0,a=String(i.r).substr(-1)==="%"?"prgb":"rgb"):li(i.h)&&li(i.s)&&li(i.v)?(n=Qn(i.s),r=Qn(i.v),e=Zv(i.h,n,r),s=!0,a="hsv"):li(i.h)&&li(i.s)&&li(i.l)&&(n=Qn(i.s),o=Qn(i.l),e=Kv(i.h,n,o),s=!0,a="hsl"),i.hasOwnProperty("a")&&(t=i.a)),t=pu(t),{ok:s,format:i.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function Yv(i,e,t){return{r:et(i,255)*255,g:et(e,255)*255,b:et(t,255)*255}}function Tc(i,e,t){i=et(i,255),e=et(e,255),t=et(t,255);var n=Math.max(i,e,t),r=Math.min(i,e,t),o,s,a=(n+r)/2;if(n==r)o=s=0;else{var d=n-r;switch(s=a>.5?d/(2-n-r):d/(n+r),n){case i:o=(e-t)/d+(e<t?6:0);break;case e:o=(t-i)/d+2;break;case t:o=(i-e)/d+4;break}o/=6}return{h:o,s,l:a}}function Kv(i,e,t){var n,r,o;i=et(i,360),e=et(e,100),t=et(t,100);function s(c,l,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?c+(l-c)*6*u:u<1/2?l:u<2/3?c+(l-c)*(2/3-u)*6:c}if(e===0)n=r=o=t;else{var a=t<.5?t*(1+e):t+e-t*e,d=2*t-a;n=s(d,a,i+1/3),r=s(d,a,i),o=s(d,a,i-1/3)}return{r:n*255,g:r*255,b:o*255}}function xc(i,e,t){i=et(i,255),e=et(e,255),t=et(t,255);var n=Math.max(i,e,t),r=Math.min(i,e,t),o,s,a=n,d=n-r;if(s=n===0?0:d/n,n==r)o=0;else{switch(n){case i:o=(e-t)/d+(e<t?6:0);break;case e:o=(t-i)/d+2;break;case t:o=(i-e)/d+4;break}o/=6}return{h:o,s,v:a}}function Zv(i,e,t){i=et(i,360)*6,e=et(e,100),t=et(t,100);var n=Math.floor(i),r=i-n,o=t*(1-e),s=t*(1-r*e),a=t*(1-(1-r)*e),d=n%6,c=[t,s,o,o,a,t][d],l=[a,t,t,s,o,o][d],u=[o,o,a,t,t,s][d];return{r:c*255,g:l*255,b:u*255}}function bc(i,e,t,n){var r=[Xt(Math.round(i).toString(16)),Xt(Math.round(e).toString(16)),Xt(Math.round(t).toString(16))];return n&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Jv(i,e,t,n,r){var o=[Xt(Math.round(i).toString(16)),Xt(Math.round(e).toString(16)),Xt(Math.round(t).toString(16)),Xt(_u(n))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Rc(i,e,t,n){var r=[Xt(_u(n)),Xt(Math.round(i).toString(16)),Xt(Math.round(e).toString(16)),Xt(Math.round(t).toString(16))];return r.join("")}be.equals=function(i,e){return!i||!e?!1:be(i).toRgbString()==be(e).toRgbString()};be.random=function(){return be.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Qv(i,e){e=e===0?0:e||10;var t=be(i).toHsl();return t.s-=e/100,t.s=ho(t.s),be(t)}function eT(i,e){e=e===0?0:e||10;var t=be(i).toHsl();return t.s+=e/100,t.s=ho(t.s),be(t)}function tT(i){return be(i).desaturate(100)}function iT(i,e){e=e===0?0:e||10;var t=be(i).toHsl();return t.l+=e/100,t.l=ho(t.l),be(t)}function nT(i,e){e=e===0?0:e||10;var t=be(i).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),be(t)}function rT(i,e){e=e===0?0:e||10;var t=be(i).toHsl();return t.l-=e/100,t.l=ho(t.l),be(t)}function oT(i,e){var t=be(i).toHsl(),n=(t.h+e)%360;return t.h=n<0?360+n:n,be(t)}function sT(i){var e=be(i).toHsl();return e.h=(e.h+180)%360,be(e)}function Ec(i,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=be(i).toHsl(),n=[be(i)],r=360/e,o=1;o<e;o++)n.push(be({h:(t.h+o*r)%360,s:t.s,l:t.l}));return n}function aT(i){var e=be(i).toHsl(),t=e.h;return[be(i),be({h:(t+72)%360,s:e.s,l:e.l}),be({h:(t+216)%360,s:e.s,l:e.l})]}function dT(i,e,t){e=e||6,t=t||30;var n=be(i).toHsl(),r=360/t,o=[be(i)];for(n.h=(n.h-(r*e>>1)+720)%360;--e;)n.h=(n.h+r)%360,o.push(be(n));return o}function cT(i,e){e=e||6;for(var t=be(i).toHsv(),n=t.h,r=t.s,o=t.v,s=[],a=1/e;e--;)s.push(be({h:n,s:r,v:o})),o=(o+a)%1;return s}be.mix=function(i,e,t){t=t===0?0:t||50;var n=be(i).toRgb(),r=be(e).toRgb(),o=t/100,s={r:(r.r-n.r)*o+n.r,g:(r.g-n.g)*o+n.g,b:(r.b-n.b)*o+n.b,a:(r.a-n.a)*o+n.a};return be(s)};be.readability=function(i,e){var t=be(i),n=be(e);return(Math.max(t.getLuminance(),n.getLuminance())+.05)/(Math.min(t.getLuminance(),n.getLuminance())+.05)};be.isReadable=function(i,e,t){var n=be.readability(i,e),r,o;switch(o=!1,r=hT(t),r.level+r.size){case"AAsmall":case"AAAlarge":o=n>=4.5;break;case"AAlarge":o=n>=3;break;case"AAAsmall":o=n>=7;break}return o};be.mostReadable=function(i,e,t){var n=null,r=0,o,s,a,d;t=t||{},s=t.includeFallbackColors,a=t.level,d=t.size;for(var c=0;c<e.length;c++)o=be.readability(i,e[c]),o>r&&(r=o,n=be(e[c]));return be.isReadable(i,n,{level:a,size:d})||!s?n:(t.includeFallbackColors=!1,be.mostReadable(i,["#fff","#000"],t))};var ws=be.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},lT=be.hexNames=uT(ws);function uT(i){var e={};for(var t in i)i.hasOwnProperty(t)&&(e[i[t]]=t);return e}function pu(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function et(i,e){pT(i)&&(i="100%");var t=_T(i);return i=Math.min(e,Math.max(0,parseFloat(i))),t&&(i=parseInt(i*e,10)/100),Math.abs(i-e)<1e-6?1:i%e/parseFloat(e)}function ho(i){return Math.min(1,Math.max(0,i))}function Lt(i){return parseInt(i,16)}function pT(i){return typeof i=="string"&&i.indexOf(".")!=-1&&parseFloat(i)===1}function _T(i){return typeof i=="string"&&i.indexOf("%")!=-1}function Xt(i){return i.length==1?"0"+i:""+i}function Qn(i){return i<=1&&(i=i*100+"%"),i}function _u(i){return Math.round(parseFloat(i)*255).toString(16)}function Mc(i){return Lt(i)/255}var qt=function(){var i="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+i+")",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function li(i){return!!qt.CSS_UNIT.exec(i)}function fT(i){i=i.replace(jv,"").replace(Xv,"").toLowerCase();var e=!1;if(ws[i])i=ws[i],e=!0;else if(i=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=qt.rgb.exec(i))?{r:t[1],g:t[2],b:t[3]}:(t=qt.rgba.exec(i))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=qt.hsl.exec(i))?{h:t[1],s:t[2],l:t[3]}:(t=qt.hsla.exec(i))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=qt.hsv.exec(i))?{h:t[1],s:t[2],v:t[3]}:(t=qt.hsva.exec(i))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=qt.hex8.exec(i))?{r:Lt(t[1]),g:Lt(t[2]),b:Lt(t[3]),a:Mc(t[4]),format:e?"name":"hex8"}:(t=qt.hex6.exec(i))?{r:Lt(t[1]),g:Lt(t[2]),b:Lt(t[3]),format:e?"name":"hex"}:(t=qt.hex4.exec(i))?{r:Lt(t[1]+""+t[1]),g:Lt(t[2]+""+t[2]),b:Lt(t[3]+""+t[3]),a:Mc(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=qt.hex3.exec(i))?{r:Lt(t[1]+""+t[1]),g:Lt(t[2]+""+t[2]),b:Lt(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function hT(i){var e,t;return i=i||{level:"AA",size:"small"},e=(i.level||"AA").toUpperCase(),t=(i.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function mT(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,s,a=[],d=!0,c=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;d=!1}else for(;!(d=(n=o.call(t)).done)&&(a.push(n.value),a.length!==e);d=!0);}catch(l){c=!0,r=l}finally{try{if(!d&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}function Cc(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function fu(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Cc(Object(t),!0).forEach(function(n){pa(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Cc(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function As(i){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},As(i)}function gT(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Sc(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,yu(n.key),n)}}function yT(i,e,t){return e&&Sc(i.prototype,e),t&&Sc(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function pa(i,e,t){return e=yu(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function vT(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&ro(i,e)}function no(i){return no=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},no(i)}function ro(i,e){return ro=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ro(i,e)}function hu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function jr(i,e,t){return hu()?jr=Reflect.construct.bind():jr=function(r,o,s){var a=[null];a.push.apply(a,o);var d=Function.bind.apply(r,a),c=new d;return s&&ro(c,s.prototype),c},jr.apply(null,arguments)}function TT(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,o;for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function xT(i,e){if(i==null)return{};var t=TT(i,e),n,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function mu(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function bT(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mu(i)}function RT(i){var e=hu();return function(){var n=no(i),r;if(e){var o=no(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return bT(this,r)}}function Pc(i,e){return MT(i)||mT(i,e)||gu(i,e)||PT()}function Ht(i){return ET(i)||CT(i)||gu(i)||ST()}function ET(i){if(Array.isArray(i))return Ls(i)}function MT(i){if(Array.isArray(i))return i}function CT(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function gu(i,e){if(i){if(typeof i=="string")return Ls(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ls(i,e)}}function Ls(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function ST(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wT(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function yu(i){var e=wT(i,"string");return typeof e=="symbol"?e:String(e)}var AT=function i(e){e instanceof Array?e.forEach(i):(e.map&&e.map.dispose(),e.dispose())},LT=function i(e){e.geometry&&e.geometry.dispose(),e.material&&AT(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(i)},Ds=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),LT(t)}},DT=["objFilter"];function Xn(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.objFilter,r=n===void 0?function(){return!0}:n,o=xT(t,DT);return Hv(i,e.children.filter(r),function(s){return e.add(s)},function(s){e.remove(s),Ds(s)},fu({objBindAttr:"__threeObj"},o))}var $n=function(e){return isNaN(e)?parseInt(be(e).toHex(),16):e},ss=function(e){return isNaN(e)?be(e).getAlpha():1},OT=uu(Wv);function wc(i,e,t){!e||typeof t!="string"||i.filter(function(n){return!n[t]}).forEach(function(n){n[t]=OT(e(n))})}function IT(i,e){var t=i.nodes,n=i.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=r.nodeFilter,s=o===void 0?function(){return!0}:o,a=r.onLoopError,d=a===void 0?function(f){throw"Invalid DAG structure! Found cycle in node path: ".concat(f.join(" -> "),".")}:a,c={};t.forEach(function(f){return c[e(f)]={data:f,out:[],depth:-1,skip:!s(f)}}),n.forEach(function(f){var m=f.source,g=f.target,h=v(m),p=v(g);if(!c.hasOwnProperty(h))throw"Missing source node with id: ".concat(h);if(!c.hasOwnProperty(p))throw"Missing target node with id: ".concat(p);var x=c[h],y=c[p];x.out.push(y);function v(T){return As(T)==="object"?e(T):T}});var l=[];_(Object.values(c));var u=Object.assign.apply(Object,[{}].concat(Ht(Object.entries(c).filter(function(f){var m=Pc(f,2),g=m[1];return!g.skip}).map(function(f){var m=Pc(f,2),g=m[0],h=m[1];return pa({},g,h.depth)}))));return u;function _(f){for(var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,h=function(){var T=f[p];if(m.indexOf(T)!==-1){var R=[].concat(Ht(m.slice(m.indexOf(T))),[T]).map(function(E){return e(E.data)});return l.some(function(E){return E.length===R.length&&E.every(function(A,b){return A===R[b]})})||(l.push(R),d(R)),"continue"}g>T.depth&&(T.depth=g,_(T.out,[].concat(Ht(m),[T]),g+(T.skip?0:1)))},p=0,x=f.length;p<x;p++)var y=h()}}var Pe=window.THREE?window.THREE:{Group:Rn,Mesh:jt,MeshLambertMaterial:fm,Color:je,BufferGeometry:Dt,BufferAttribute:$t,Matrix4:Je,Vector3:O,SphereGeometry:_o,CylinderGeometry:po,TubeGeometry:Qs,ConeGeometry:Js,Line:J1,LineBasicMaterial:Ml,QuadraticBezierCurve3:Zs,CubicBezierCurve3:Sl,Box3:Ji},Ac={graph:Vg,forcelayout:Ey},UT=2,Lc=new Pe.BufferGeometry().setAttribute?"setAttribute":"addAttribute",qr=new Pe.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",NT=ua({props:{jsonUrl:{onChange:function(e,t){var n=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),n.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var n=t.d3ForceLayout.force("charge");n&&n.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(o,s){o.forEach(function(a){delete a[s],delete a["v".concat(s)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(n){return n.fx=n.fy=n.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,n){return n===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,n),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&n(),r(),o(),this;function n(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var s=We(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(_){var f=_.__threeObj;if(f){var m=t?_:e.layout.getNodePosition(_[e.nodeId]),g=s(_);(!e.nodePositionUpdate||!e.nodePositionUpdate(g?f.children[0]:f,{x:m.x,y:m.y,z:m.z},_)||g)&&(f.position.x=m.x,f.position.y=m.y||0,f.position.z=m.z||0)}});var a=We(e.linkWidth),d=We(e.linkCurvature),c=We(e.linkCurveRotation),l=We(e.linkThreeObjectExtend);e.graphData.links.forEach(function(_){var f=_.__lineObj;if(f){var m=t?_:e.layout.getLinkPosition(e.layout.graph.getLink(_.source,_.target).id),g=m[t?"source":"from"],h=m[t?"target":"to"];if(!(!g||!h||!g.hasOwnProperty("x")||!h.hasOwnProperty("x"))){u(_);var p=l(_);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(p?f.children[1]:f,{start:{x:g.x,y:g.y,z:g.z},end:{x:h.x,y:h.y,z:h.z}},_)&&!p)){var x=30,y=_.__curve,v=f.children.length?f.children[0]:f;if(v.type==="Line"){if(y)v.geometry.setFromPoints(y.getPoints(x));else{var T=v.geometry.getAttribute("position");(!T||!T.array||T.array.length!==6)&&v.geometry[Lc]("position",T=new Pe.BufferAttribute(new Float32Array(2*3),3)),T.array[0]=g.x,T.array[1]=g.y||0,T.array[2]=g.z||0,T.array[3]=h.x,T.array[4]=h.y||0,T.array[5]=h.z||0,T.needsUpdate=!0}v.geometry.computeBoundingSphere()}else if(v.type==="Mesh")if(y){v.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(v.position.set(0,0,0),v.rotation.set(0,0,0),v.scale.set(1,1,1));var G=Math.ceil(a(_)*10)/10,B=G/2,L=new Pe.TubeGeometry(y,x,B,e.linkResolution,!1);v.geometry.dispose(),v.geometry=L}else{if(!v.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var R=Math.ceil(a(_)*10)/10,E=R/2,A=new Pe.CylinderGeometry(E,E,1,e.linkResolution,1,!1);A[qr](new Pe.Matrix4().makeTranslation(0,1/2,0)),A[qr](new Pe.Matrix4().makeRotationX(Math.PI/2)),v.geometry.dispose(),v.geometry=A}var b=new Pe.Vector3(g.x,g.y||0,g.z||0),C=new Pe.Vector3(h.x,h.y||0,h.z||0),V=b.distanceTo(C);v.position.x=b.x,v.position.y=b.y,v.position.z=b.z,v.scale.z=V,v.parent.localToWorld(C),v.lookAt(C)}}}}});function u(_){var f=t?_:e.layout.getLinkPosition(e.layout.graph.getLink(_.source,_.target).id),m=f[t?"source":"from"],g=f[t?"target":"to"];if(!(!m||!g||!m.hasOwnProperty("x")||!g.hasOwnProperty("x"))){var h=d(_);if(!h)_.__curve=null;else{var p=new Pe.Vector3(m.x,m.y||0,m.z||0),x=new Pe.Vector3(g.x,g.y||0,g.z||0),y=p.distanceTo(x),v,T=c(_);if(y>0){var R=g.x-m.x,E=g.y-m.y||0,A=new Pe.Vector3().subVectors(x,p),b=A.clone().multiplyScalar(h).cross(R!==0||E!==0?new Pe.Vector3(0,0,1):new Pe.Vector3(0,1,0)).applyAxisAngle(A.normalize(),T).add(new Pe.Vector3().addVectors(p,x).divideScalar(2));v=new Pe.QuadraticBezierCurve3(p,b,x)}else{var C=h*70,V=-T,G=V+Math.PI/2;v=new Pe.CubicBezierCurve3(p,new Pe.Vector3(C*Math.cos(G),C*Math.sin(G),0).add(p),new Pe.Vector3(C*Math.cos(V),C*Math.sin(V),0).add(p),x)}_.__curve=v}}}}function r(){var s=We(e.linkDirectionalArrowRelPos),a=We(e.linkDirectionalArrowLength),d=We(e.nodeVal);e.graphData.links.forEach(function(c){var l=c.__arrowObj;if(l){var u=t?c:e.layout.getLinkPosition(e.layout.graph.getLink(c.source,c.target).id),_=u[t?"source":"from"],f=u[t?"target":"to"];if(!(!_||!f||!_.hasOwnProperty("x")||!f.hasOwnProperty("x"))){var m=Math.cbrt(Math.max(0,d(_)||1))*e.nodeRelSize,g=Math.cbrt(Math.max(0,d(f)||1))*e.nodeRelSize,h=a(c),p=s(c),x=c.__curve?function(A){return c.__curve.getPoint(A)}:function(A){var b=function(V,G,B,L){return G[V]+(B[V]-G[V])*L||0};return{x:b("x",_,f,A),y:b("y",_,f,A),z:b("z",_,f,A)}},y=c.__curve?c.__curve.getLength():Math.sqrt(["x","y","z"].map(function(A){return Math.pow((f[A]||0)-(_[A]||0),2)}).reduce(function(A,b){return A+b},0)),v=m+h+(y-m-g-h)*p,T=x(v/y),R=x((v-h)/y);["x","y","z"].forEach(function(A){return l.position[A]=R[A]});var E=jr(Pe.Vector3,Ht(["x","y","z"].map(function(A){return T[A]})));l.parent.localToWorld(E),l.lookAt(E)}}})}function o(){var s=We(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(a){var d=a.__photonsObj&&a.__photonsObj.children,c=a.__singleHopPhotonsObj&&a.__singleHopPhotonsObj.children;if(!((!c||!c.length)&&(!d||!d.length))){var l=t?a:e.layout.getLinkPosition(e.layout.graph.getLink(a.source,a.target).id),u=l[t?"source":"from"],_=l[t?"target":"to"];if(!(!u||!_||!u.hasOwnProperty("x")||!_.hasOwnProperty("x"))){var f=s(a),m=a.__curve?function(h){return a.__curve.getPoint(h)}:function(h){var p=function(y,v,T,R){return v[y]+(T[y]-v[y])*R||0};return{x:p("x",u,_,h),y:p("y",u,_,h),z:p("z",u,_,h)}},g=[].concat(Ht(d||[]),Ht(c||[]));g.forEach(function(h,p){var x=h.parent.__linkThreeObjType==="singleHopPhotons";if(h.hasOwnProperty("__progressRatio")||(h.__progressRatio=x?0:p/d.length),h.__progressRatio+=f,h.__progressRatio>=1)if(!x)h.__progressRatio=h.__progressRatio%1;else{h.parent.remove(h),Ds(h);return}var y=h.__progressRatio,v=m(y);["x","y","z"].forEach(function(T){return h.position[T]=v[T]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var n=new Pe.Group;n.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=n,e.graphScene.add(n)}var r=We(e.linkDirectionalParticleWidth),o=Math.ceil(r(t)*10)/10/2,s=e.linkDirectionalParticleResolution,a=new Pe.SphereGeometry(o,s,s),d=We(e.linkColor),c=We(e.linkDirectionalParticleColor),l=c(t)||d(t)||"#f0f0f0",u=new Pe.Color($n(l)),_=e.linkOpacity*3,f=new Pe.MeshLambertMaterial({color:u,transparent:!0,opacity:_});t.__singleHopPhotonsObj.add(new Pe.Mesh(a,f))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var n=function r(o){var s=[];if(o.geometry){o.geometry.computeBoundingBox();var a=new Pe.Box3;a.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),s.push(a)}return s.concat.apply(s,Ht((o.children||[]).filter(function(d){return!d.hasOwnProperty("__graphObjType")||d.__graphObjType==="node"&&t(d.__data)}).map(r)))}(e.graphScene);return n.length?Object.assign.apply(Object,Ht(["x","y","z"].map(function(r){return pa({},r,[hv(n,function(o){return o.min[r]}),fv(n,function(o){return o.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:Ug().force("link",Tg()).force("charge",Ng()).force("center",Em()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var n=function(W){return W.some(function(ie){return t.hasOwnProperty(ie)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&n(["nodeAutoColorBy","graphData","nodeColor"])&&wc(e.graphData.nodes,We(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&n(["linkAutoColorBy","graphData","linkColor"])&&wc(e.graphData.links,We(e.linkAutoColorBy),e.linkColor),e._flushObjects||n(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=We(e.nodeThreeObject),o=We(e.nodeThreeObjectExtend),s=We(e.nodeVal),a=We(e.nodeColor),d=We(e.nodeVisibility),c={},l={};Xn(e.graphData.nodes.filter(d),e.graphScene,{purge:e._flushObjects||n(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(W){return W.__graphObjType==="node"},createObj:function(W){var ie=r(W),N=o(W);ie&&e.nodeThreeObject===ie&&(ie=ie.clone());var Z;return ie&&!N?Z=ie:(Z=new Pe.Mesh,Z.__graphDefaultObj=!0,ie&&N&&Z.add(ie)),Z.__graphObjType="node",Z},updateObj:function(W,ie){if(W.__graphDefaultObj){var N=s(ie)||1,Z=Math.cbrt(N)*e.nodeRelSize,ge=e.nodeResolution;(!W.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||W.geometry.parameters.radius!==Z||W.geometry.parameters.widthSegments!==ge)&&(c.hasOwnProperty(N)||(c[N]=new Pe.SphereGeometry(Z,ge,ge)),W.geometry.dispose(),W.geometry=c[N]);var Me=a(ie),ve=new Pe.Color($n(Me||"#ffffaa")),z=e.nodeOpacity*ss(Me);(W.material.type!=="MeshLambertMaterial"||!W.material.color.equals(ve)||W.material.opacity!==z)&&(l.hasOwnProperty(Me)||(l[Me]=new Pe.MeshLambertMaterial({color:ve,transparent:!0,opacity:z})),W.material.dispose(),W.material=l[Me])}}})}if(e._flushObjects||n(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var u=We(e.linkThreeObject),_=We(e.linkThreeObjectExtend),f=We(e.linkMaterial),m=We(e.linkVisibility),g=We(e.linkColor),h=We(e.linkWidth),p={},x={},y={},v=e.graphData.links.filter(m);if(Xn(v,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||n(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(W){return W.__graphObjType==="link"},exitObj:function(W){var ie=W.__data&&W.__data.__singleHopPhotonsObj;ie&&(ie.parent.remove(ie),Ds(ie),delete W.__data.__singleHopPhotonsObj)},createObj:function(W){var ie=u(W),N=_(W);ie&&e.linkThreeObject===ie&&(ie=ie.clone());var Z;if(!ie||N){var ge=!!h(W);if(ge)Z=new Pe.Mesh;else{var Me=new Pe.BufferGeometry;Me[Lc]("position",new Pe.BufferAttribute(new Float32Array(2*3),3)),Z=new Pe.Line(Me)}}var ve;return ie?N?(ve=new Pe.Group,ve.__graphDefaultObj=!0,ve.add(Z),ve.add(ie)):ve=ie:(ve=Z,ve.__graphDefaultObj=!0),ve.renderOrder=10,ve.__graphObjType="link",ve},updateObj:function(W,ie){if(W.__graphDefaultObj){var N=W.children.length?W.children[0]:W,Z=Math.ceil(h(ie)*10)/10,ge=!!Z;if(ge){var Me=Z/2,ve=e.linkResolution;if(!N.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||N.geometry.parameters.radiusTop!==Me||N.geometry.parameters.radialSegments!==ve){if(!p.hasOwnProperty(Z)){var z=new Pe.CylinderGeometry(Me,Me,1,ve,1,!1);z[qr](new Pe.Matrix4().makeTranslation(0,1/2,0)),z[qr](new Pe.Matrix4().makeRotationX(Math.PI/2)),p[Z]=z}N.geometry.dispose(),N.geometry=p[Z]}}var Ye=f(ie);if(Ye)N.material=Ye;else{var Te=g(ie),Ce=new Pe.Color($n(Te||"#f0f0f0")),Ee=e.linkOpacity*ss(Te),He=ge?"MeshLambertMaterial":"LineBasicMaterial";if(N.material.type!==He||!N.material.color.equals(Ce)||N.material.opacity!==Ee){var Oe=ge?x:y;Oe.hasOwnProperty(Te)||(Oe[Te]=new Pe[He]({color:Ce,transparent:Ee<1,opacity:Ee,depthWrite:Ee>=1})),N.material.dispose(),N.material=Oe[Te]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var T=We(e.linkDirectionalArrowLength),R=We(e.linkDirectionalArrowColor);Xn(v.filter(T),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(W){return W.__linkThreeObjType==="arrow"},createObj:function(){var W=new Pe.Mesh(void 0,new Pe.MeshLambertMaterial({transparent:!0}));return W.__linkThreeObjType="arrow",W},updateObj:function(W,ie){var N=T(ie),Z=e.linkDirectionalArrowResolution;if(!W.geometry.type.match(/^Cone(Buffer)?Geometry$/)||W.geometry.parameters.height!==N||W.geometry.parameters.radialSegments!==Z){var ge=new Pe.ConeGeometry(N*.25,N,Z);ge.translate(0,N/2,0),ge.rotateX(Math.PI/2),W.geometry.dispose(),W.geometry=ge}var Me=R(ie)||g(ie)||"#f0f0f0";W.material.color=new Pe.Color($n(Me)),W.material.opacity=e.linkOpacity*3*ss(Me)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var E=We(e.linkDirectionalParticles),A=We(e.linkDirectionalParticleWidth),b=We(e.linkDirectionalParticleColor),C={},V={};Xn(v.filter(E),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(W){return W.__linkThreeObjType==="photons"},createObj:function(){var W=new Pe.Group;return W.__linkThreeObjType="photons",W},updateObj:function(W,ie){var N=Math.round(Math.abs(E(ie))),Z=!!W.children.length&&W.children[0],ge=Math.ceil(A(ie)*10)/10/2,Me=e.linkDirectionalParticleResolution,ve;Z&&Z.geometry.parameters.radius===ge&&Z.geometry.parameters.widthSegments===Me?ve=Z.geometry:(V.hasOwnProperty(ge)||(V[ge]=new Pe.SphereGeometry(ge,Me,Me)),ve=V[ge],Z&&Z.geometry.dispose());var z=b(ie)||g(ie)||"#f0f0f0",Ye=new Pe.Color($n(z)),Te=e.linkOpacity*3,Ce;Z&&Z.material.color.equals(Ye)&&Z.material.opacity===Te?Ce=Z.material:(C.hasOwnProperty(z)||(C[z]=new Pe.MeshLambertMaterial({color:Ye,transparent:!0,opacity:Te})),Ce=C[z],Z&&Z.material.dispose()),Xn(Ht(new Array(N)).map(function(Ee,He){return{idx:He}}),W,{idAccessor:function(He){return He.idx},createObj:function(){return new Pe.Mesh(ve,Ce)},updateObj:function(He){He.geometry=ve,He.material=Ce}})}})}}if(e._flushObjects=!1,n(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(J){J.source=J[e.linkSource],J.target=J[e.linkTarget]});var G=e.forceEngine!=="ngraph",B;if(G){(B=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var L=e.d3ForceLayout.force("link");L&&L.id(function(J){return J[e.nodeId]}).links(e.graphData.links);var w=e.dagMode&&IT(e.graphData,function(J){return J[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),F=Math.max.apply(Math,Ht(Object.values(w||[]))),X=e.dagLevelDistance||e.graphData.nodes.length/(F||1)*UT*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var Q=function(W,ie){return function(N){return W?(w[N[e.nodeId]]-F/2)*X*(ie?-1:1):void 0}},re=Q(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),k=Q(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),I=Q(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(J){J.fx=re(J),J.fy=k(J),J.fz=I(J)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?Fg(function(J){var W=w[J[e.nodeId]]||-1;return(e.dagMode==="radialin"?F-W:W)*X}).strength(function(J){return e.dagNodeFilter(J)?1:0}):null)}else{var q=Ac.graph();e.graphData.nodes.forEach(function(J){q.addNode(J[e.nodeId])}),e.graphData.links.forEach(function(J){q.addLink(J.source,J.target)}),B=Ac.forcelayout(q,fu({dimensions:e.numDimensions},e.ngraphPhysics)),B.graph=q}for(var oe=0;oe<e.warmupTicks&&!(G&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);oe++)B[G?"tick":"step"]();e.layout=B,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function FT(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=function(r){vT(s,r);var o=RT(s);function s(){var a;gT(this,s);for(var d=arguments.length,c=new Array(d),l=0;l<d;l++)c[l]=arguments[l];return a=o.call.apply(o,[this].concat(c)),a.__kapsuleInstance=i().apply(void 0,[].concat(Ht(t?[mu(a)]:[]),c)),a}return yT(s)}(e);return Object.keys(i()).forEach(function(r){return n.prototype[r]=function(){var o,s=(o=this.__kapsuleInstance)[r].apply(o,arguments);return s===this.__kapsuleInstance?this:s}}),n}var BT=window.THREE?window.THREE:{Group:Rn},vu=FT(NT,BT.Group,!0);const as={type:"change"},ds={type:"start"},cs={type:"end"};class kT extends Kt{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Jt.ROTATE,MIDDLE:Jt.DOLLY,RIGHT:Jt.PAN},this.target=new O;const o=1e-6,s=new O;let a=1,d=r.NONE,c=r.NONE,l=0,u=0,_=0;const f=new O,m=new he,g=new he,h=new O,p=new he,x=new he,y=new he,v=new he,T=[],R={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const N=n.domElement.getBoundingClientRect(),Z=n.domElement.ownerDocument.documentElement;n.screen.left=N.left+window.pageXOffset-Z.clientLeft,n.screen.top=N.top+window.pageYOffset-Z.clientTop,n.screen.width=N.width,n.screen.height=N.height};const E=function(){const N=new he;return function(ge,Me){return N.set((ge-n.screen.left)/n.screen.width,(Me-n.screen.top)/n.screen.height),N}}(),A=function(){const N=new he;return function(ge,Me){return N.set((ge-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-Me))/n.screen.width),N}}();this.rotateCamera=function(){const N=new O,Z=new Yt,ge=new O,Me=new O,ve=new O,z=new O;return function(){z.set(g.x-m.x,g.y-m.y,0);let Te=z.length();Te?(f.copy(n.object.position).sub(n.target),ge.copy(f).normalize(),Me.copy(n.object.up).normalize(),ve.crossVectors(Me,ge).normalize(),Me.setLength(g.y-m.y),ve.setLength(g.x-m.x),z.copy(Me.add(ve)),N.crossVectors(z,f).normalize(),Te*=n.rotateSpeed,Z.setFromAxisAngle(N,Te),f.applyQuaternion(Z),n.object.up.applyQuaternion(Z),h.copy(N),_=Te):!n.staticMoving&&_&&(_*=Math.sqrt(1-n.dynamicDampingFactor),f.copy(n.object.position).sub(n.target),Z.setFromAxisAngle(h,_),f.applyQuaternion(Z),n.object.up.applyQuaternion(Z)),m.copy(g)}}(),this.zoomCamera=function(){let N;d===r.TOUCH_ZOOM_PAN?(N=l/u,l=u,n.object.isPerspectiveCamera?f.multiplyScalar(N):n.object.isOrthographicCamera?(n.object.zoom=Ts.clamp(n.object.zoom/N,n.minZoom,n.maxZoom),a!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(N=1+(x.y-p.y)*n.zoomSpeed,N!==1&&N>0&&(n.object.isPerspectiveCamera?f.multiplyScalar(N):n.object.isOrthographicCamera?(n.object.zoom=Ts.clamp(n.object.zoom/N,n.minZoom,n.maxZoom),a!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?p.copy(x):p.y+=(x.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const N=new he,Z=new O,ge=new O;return function(){if(N.copy(v).sub(y),N.lengthSq()){if(n.object.isOrthographicCamera){const ve=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,z=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;N.x*=ve,N.y*=z}N.multiplyScalar(f.length()*n.panSpeed),ge.copy(f).cross(n.object.up).setLength(N.x),ge.add(Z.copy(n.object.up).setLength(N.y)),n.object.position.add(ge),n.target.add(ge),n.staticMoving?y.copy(v):y.add(N.subVectors(v,y).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(f.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,f.setLength(n.maxDistance)),p.copy(x)),f.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,f.setLength(n.minDistance)),p.copy(x)))},this.update=function(){f.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,f),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),s.distanceToSquared(n.object.position)>o&&(n.dispatchEvent(as),s.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(s.distanceToSquared(n.object.position)>o||a!==n.object.zoom)&&(n.dispatchEvent(as),s.copy(n.object.position),a=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){d=r.NONE,c=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),f.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(as),s.copy(n.object.position),a=n.object.zoom};function b(N){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",V)),oe(N),N.pointerType==="touch"?re(N):w(N))}function C(N){n.enabled!==!1&&(N.pointerType==="touch"?k(N):F(N))}function V(N){n.enabled!==!1&&(N.pointerType==="touch"?I(N):X(),J(N),T.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",V)))}function G(N){J(N)}function B(N){n.enabled!==!1&&(window.removeEventListener("keydown",B),c===r.NONE&&(N.code===n.keys[r.ROTATE]&&!n.noRotate?c=r.ROTATE:N.code===n.keys[r.ZOOM]&&!n.noZoom?c=r.ZOOM:N.code===n.keys[r.PAN]&&!n.noPan&&(c=r.PAN)))}function L(){n.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",B))}function w(N){if(d===r.NONE)switch(N.button){case n.mouseButtons.LEFT:d=r.ROTATE;break;case n.mouseButtons.MIDDLE:d=r.ZOOM;break;case n.mouseButtons.RIGHT:d=r.PAN;break}const Z=c!==r.NONE?c:d;Z===r.ROTATE&&!n.noRotate?(g.copy(A(N.pageX,N.pageY)),m.copy(g)):Z===r.ZOOM&&!n.noZoom?(p.copy(E(N.pageX,N.pageY)),x.copy(p)):Z===r.PAN&&!n.noPan&&(y.copy(E(N.pageX,N.pageY)),v.copy(y)),n.dispatchEvent(ds)}function F(N){const Z=c!==r.NONE?c:d;Z===r.ROTATE&&!n.noRotate?(m.copy(g),g.copy(A(N.pageX,N.pageY))):Z===r.ZOOM&&!n.noZoom?x.copy(E(N.pageX,N.pageY)):Z===r.PAN&&!n.noPan&&v.copy(E(N.pageX,N.pageY))}function X(){d=r.NONE,n.dispatchEvent(cs)}function Q(N){if(n.enabled!==!1&&n.noZoom!==!0){switch(N.preventDefault(),N.deltaMode){case 2:p.y-=N.deltaY*.025;break;case 1:p.y-=N.deltaY*.01;break;default:p.y-=N.deltaY*25e-5;break}n.dispatchEvent(ds),n.dispatchEvent(cs)}}function re(N){switch(W(N),T.length){case 1:d=r.TOUCH_ROTATE,g.copy(A(T[0].pageX,T[0].pageY)),m.copy(g);break;default:d=r.TOUCH_ZOOM_PAN;const Z=T[0].pageX-T[1].pageX,ge=T[0].pageY-T[1].pageY;u=l=Math.sqrt(Z*Z+ge*ge);const Me=(T[0].pageX+T[1].pageX)/2,ve=(T[0].pageY+T[1].pageY)/2;y.copy(E(Me,ve)),v.copy(y);break}n.dispatchEvent(ds)}function k(N){switch(W(N),T.length){case 1:m.copy(g),g.copy(A(N.pageX,N.pageY));break;default:const Z=ie(N),ge=N.pageX-Z.x,Me=N.pageY-Z.y;u=Math.sqrt(ge*ge+Me*Me);const ve=(N.pageX+Z.x)/2,z=(N.pageY+Z.y)/2;v.copy(E(ve,z));break}}function I(N){switch(T.length){case 0:d=r.NONE;break;case 1:d=r.TOUCH_ROTATE,g.copy(A(N.pageX,N.pageY)),m.copy(g);break;case 2:d=r.TOUCH_ZOOM_PAN;for(let Z=0;Z<T.length;Z++)if(T[Z].pointerId!==N.pointerId){const ge=R[T[Z].pointerId];g.copy(A(ge.x,ge.y)),m.copy(g);break}break}n.dispatchEvent(cs)}function q(N){n.enabled!==!1&&N.preventDefault()}function oe(N){T.push(N)}function J(N){delete R[N.pointerId];for(let Z=0;Z<T.length;Z++)if(T[Z].pointerId==N.pointerId){T.splice(Z,1);return}}function W(N){let Z=R[N.pointerId];Z===void 0&&(Z=new he,R[N.pointerId]=Z),Z.set(N.pageX,N.pageY)}function ie(N){const Z=N.pointerId===T[0].pointerId?T[1]:T[0];return R[Z.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",b),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",V),window.removeEventListener("keydown",B),window.removeEventListener("keyup",L)},this.domElement.addEventListener("contextmenu",q),this.domElement.addEventListener("pointerdown",b),this.domElement.addEventListener("pointercancel",G),this.domElement.addEventListener("wheel",Q,{passive:!1}),window.addEventListener("keydown",B),window.addEventListener("keyup",L),this.handleResize(),this.update()}}const Dc={type:"change"},ls={type:"start"},Oc={type:"end"},Hr=new co,Ic=new _i,zT=Math.cos(70*Ts.DEG2RAD);class qT extends Kt{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jt.ROTATE,MIDDLE:Jt.DOLLY,RIGHT:Jt.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",M),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dc),n.update(),o=r.NONE},this.update=function(){const D=new O,ne=new Yt().setFromUnitVectors(e.up,new O(0,1,0)),ye=ne.clone().invert(),ue=new O,me=new Yt,De=new O,Ge=2*Math.PI;return function(){const _e=n.object.position;D.copy(_e).sub(n.target),D.applyQuaternion(ne),a.setFromVector3(D),n.autoRotate&&o===r.NONE&&V(b()),n.enableDamping?(a.theta+=d.theta*n.dampingFactor,a.phi+=d.phi*n.dampingFactor):(a.theta+=d.theta,a.phi+=d.phi);let $=n.minAzimuthAngle,ae=n.maxAzimuthAngle;isFinite($)&&isFinite(ae)&&($<-Math.PI?$+=Ge:$>Math.PI&&($-=Ge),ae<-Math.PI?ae+=Ge:ae>Math.PI&&(ae-=Ge),$<=ae?a.theta=Math.max($,Math.min(ae,a.theta)):a.theta=a.theta>($+ae)/2?Math.max($,a.theta):Math.min(ae,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=re(a.radius):a.radius=re(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(ye),_e.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),l.set(0,0,0));let fe=!1;if(n.zoomToCursor&&R){let Be=null;if(n.object.isPerspectiveCamera){const Xe=D.length();Be=re(Xe*c);const Ke=Xe-Be;n.object.position.addScaledVector(v,Ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Xe=new O(T.x,T.y,0);Xe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),fe=!0;const Ke=new O(T.x,T.y,0);Ke.unproject(n.object),n.object.position.sub(Ke).add(Xe),n.object.updateMatrixWorld(),Be=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Be!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Be).add(n.object.position):(Hr.origin.copy(n.object.position),Hr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Hr.direction))<zT?e.lookAt(n.target):(Ic.setFromNormalAndCoplanarPoint(n.object.up,n.target),Hr.intersectPlane(Ic,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),fe=!0);return c=1,R=!1,fe||ue.distanceToSquared(n.object.position)>s||8*(1-me.dot(n.object.quaternion))>s||De.distanceToSquared(n.target)>0?(n.dispatchEvent(Dc),ue.copy(n.object.position),me.copy(n.object.quaternion),De.copy(n.target),fe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",se),n.domElement.removeEventListener("pointerdown",Oe),n.domElement.removeEventListener("pointercancel",Ve),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Ie),n.domElement.removeEventListener("pointerup",Ve),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",M),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Rs,d=new Rs;let c=1;const l=new O,u=new he,_=new he,f=new he,m=new he,g=new he,h=new he,p=new he,x=new he,y=new he,v=new O,T=new he;let R=!1;const E=[],A={};function b(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function V(D){d.theta-=D}function G(D){d.phi-=D}const B=function(){const D=new O;return function(ye,ue){D.setFromMatrixColumn(ue,0),D.multiplyScalar(-ye),l.add(D)}}(),L=function(){const D=new O;return function(ye,ue){n.screenSpacePanning===!0?D.setFromMatrixColumn(ue,1):(D.setFromMatrixColumn(ue,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(ye),l.add(D)}}(),w=function(){const D=new O;return function(ye,ue){const me=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;D.copy(De).sub(n.target);let Ge=D.length();Ge*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ye*Ge/me.clientHeight,n.object.matrix),L(2*ue*Ge/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ye*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),L(ue*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(D){if(!n.zoomToCursor)return;R=!0;const ne=n.domElement.getBoundingClientRect(),ye=D.clientX-ne.left,ue=D.clientY-ne.top,me=ne.width,De=ne.height;T.x=ye/me*2-1,T.y=-(ue/De)*2+1,v.set(T.x,T.y,1).unproject(e).sub(e.position).normalize()}function re(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function k(D){u.set(D.clientX,D.clientY)}function I(D){Q(D),p.set(D.clientX,D.clientY)}function q(D){m.set(D.clientX,D.clientY)}function oe(D){_.set(D.clientX,D.clientY),f.subVectors(_,u).multiplyScalar(n.rotateSpeed);const ne=n.domElement;V(2*Math.PI*f.x/ne.clientHeight),G(2*Math.PI*f.y/ne.clientHeight),u.copy(_),n.update()}function J(D){x.set(D.clientX,D.clientY),y.subVectors(x,p),y.y>0?F(C()):y.y<0&&X(C()),p.copy(x),n.update()}function W(D){g.set(D.clientX,D.clientY),h.subVectors(g,m).multiplyScalar(n.panSpeed),w(h.x,h.y),m.copy(g),n.update()}function ie(D){Q(D),D.deltaY<0?X(C()):D.deltaY>0&&F(C()),n.update()}function N(D){let ne=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(-n.keyPanSpeed,0),ne=!0;break}ne&&(D.preventDefault(),n.update())}function Z(){if(E.length===1)u.set(E[0].pageX,E[0].pageY);else{const D=.5*(E[0].pageX+E[1].pageX),ne=.5*(E[0].pageY+E[1].pageY);u.set(D,ne)}}function ge(){if(E.length===1)m.set(E[0].pageX,E[0].pageY);else{const D=.5*(E[0].pageX+E[1].pageX),ne=.5*(E[0].pageY+E[1].pageY);m.set(D,ne)}}function Me(){const D=E[0].pageX-E[1].pageX,ne=E[0].pageY-E[1].pageY,ye=Math.sqrt(D*D+ne*ne);p.set(0,ye)}function ve(){n.enableZoom&&Me(),n.enablePan&&ge()}function z(){n.enableZoom&&Me(),n.enableRotate&&Z()}function Ye(D){if(E.length==1)_.set(D.pageX,D.pageY);else{const ye=K(D),ue=.5*(D.pageX+ye.x),me=.5*(D.pageY+ye.y);_.set(ue,me)}f.subVectors(_,u).multiplyScalar(n.rotateSpeed);const ne=n.domElement;V(2*Math.PI*f.x/ne.clientHeight),G(2*Math.PI*f.y/ne.clientHeight),u.copy(_)}function Te(D){if(E.length===1)g.set(D.pageX,D.pageY);else{const ne=K(D),ye=.5*(D.pageX+ne.x),ue=.5*(D.pageY+ne.y);g.set(ye,ue)}h.subVectors(g,m).multiplyScalar(n.panSpeed),w(h.x,h.y),m.copy(g)}function Ce(D){const ne=K(D),ye=D.pageX-ne.x,ue=D.pageY-ne.y,me=Math.sqrt(ye*ye+ue*ue);x.set(0,me),y.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),F(y.y),p.copy(x)}function Ee(D){n.enableZoom&&Ce(D),n.enablePan&&Te(D)}function He(D){n.enableZoom&&Ce(D),n.enableRotate&&Ye(D)}function Oe(D){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",Ie),n.domElement.addEventListener("pointerup",Ve)),ce(D),D.pointerType==="touch"?Y(D):st(D))}function Ie(D){n.enabled!==!1&&(D.pointerType==="touch"?de(D):lt(D))}function Ve(D){Re(D),E.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",Ie),n.domElement.removeEventListener("pointerup",Ve)),n.dispatchEvent(Oc),o=r.NONE}function st(D){let ne;switch(D.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Jt.DOLLY:if(n.enableZoom===!1)return;I(D),o=r.DOLLY;break;case Jt.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;q(D),o=r.PAN}else{if(n.enableRotate===!1)return;k(D),o=r.ROTATE}break;case Jt.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;k(D),o=r.ROTATE}else{if(n.enablePan===!1)return;q(D),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(ls)}function lt(D){switch(o){case r.ROTATE:if(n.enableRotate===!1)return;oe(D);break;case r.DOLLY:if(n.enableZoom===!1)return;J(D);break;case r.PAN:if(n.enablePan===!1)return;W(D);break}}function P(D){n.enabled===!1||n.enableZoom===!1||o!==r.NONE||(D.preventDefault(),n.dispatchEvent(ls),ie(D),n.dispatchEvent(Oc))}function M(D){n.enabled===!1||n.enablePan===!1||N(D)}function Y(D){switch(le(D),E.length){case 1:switch(n.touches.ONE){case Qi.ROTATE:if(n.enableRotate===!1)return;Z(),o=r.TOUCH_ROTATE;break;case Qi.PAN:if(n.enablePan===!1)return;ge(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(n.touches.TWO){case Qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(),o=r.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(ls)}function de(D){switch(le(D),o){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ye(D),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Te(D),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(D),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;He(D),n.update();break;default:o=r.NONE}}function se(D){n.enabled!==!1&&D.preventDefault()}function ce(D){E.push(D)}function Re(D){delete A[D.pointerId];for(let ne=0;ne<E.length;ne++)if(E[ne].pointerId==D.pointerId){E.splice(ne,1);return}}function le(D){let ne=A[D.pointerId];ne===void 0&&(ne=new he,A[D.pointerId]=ne),ne.set(D.pageX,D.pageY)}function K(D){const ne=D.pointerId===E[0].pointerId?E[1]:E[0];return A[ne.pointerId]}n.domElement.addEventListener("contextmenu",se),n.domElement.addEventListener("pointerdown",Oe),n.domElement.addEventListener("pointercancel",Ve),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const HT={type:"change"};class GT extends Kt{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const n=this,r=1e-6,o=new Yt,s=new O;this.tmpQuaternion=new Yt,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new O(0,0,0),this.rotationVector=new O(0,0,0),this.keydown=function(f){if(!(f.altKey||this.enabled===!1)){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(f){if(this.enabled!==!1){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(f){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(f.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(f){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const m=this.getContainerDimensions(),g=m.size[0]/2,h=m.size[1]/2;this.moveState.yawLeft=-(f.pageX-m.offset[0]-g)/g,this.moveState.pitchDown=(f.pageY-m.offset[1]-h)/h,this.updateRotationVector()}},this.pointerup=function(f){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(f.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.contextMenu=function(f){this.enabled!==!1&&f.preventDefault()},this.update=function(f){if(this.enabled===!1)return;const m=f*n.movementSpeed,g=f*n.rollSpeed;n.object.translateX(n.moveVector.x*m),n.object.translateY(n.moveVector.y*m),n.object.translateZ(n.moveVector.z*m),n.tmpQuaternion.set(n.rotationVector.x*g,n.rotationVector.y*g,n.rotationVector.z*g,1).normalize(),n.object.quaternion.multiply(n.tmpQuaternion),(s.distanceToSquared(n.object.position)>r||8*(1-o.dot(n.object.quaternion))>r)&&(n.dispatchEvent(HT),o.copy(n.object.quaternion),s.copy(n.object.position))},this.updateMovementVector=function(){const f=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-f+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",a),this.domElement.removeEventListener("pointerdown",c),this.domElement.removeEventListener("pointermove",d),this.domElement.removeEventListener("pointerup",l),window.removeEventListener("keydown",u),window.removeEventListener("keyup",_)};const a=this.contextMenu.bind(this),d=this.pointermove.bind(this),c=this.pointerdown.bind(this),l=this.pointerup.bind(this),u=this.keydown.bind(this),_=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",a),this.domElement.addEventListener("pointerdown",c),this.domElement.addEventListener("pointermove",d),this.domElement.addEventListener("pointerup",l),window.addEventListener("keydown",u),window.addEventListener("keyup",_),this.updateMovementVector(),this.updateRotationVector()}}const VT={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const WT=new $s(-1,1,1,-1,0,1),_a=new Dt;_a.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3));_a.setAttribute("uv",new at([0,2,0,0,2,0],2));class jT{constructor(e){this._mesh=new jt(_a,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,WT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class XT extends mo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ti?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ml.clone(e.uniforms),this.material=new Ti({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jT(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Uc extends mo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class $T extends mo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class YT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Ui(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new XT(VT),this.copyPass.material.blending=yi,this.clock=new wl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,o=this.passes.length;r<o;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const a=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uc!==void 0&&(s instanceof Uc?n=!0:s instanceof $T&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class KT extends mo{constructor(e,t,n,r,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=r}}function Os(){return Os=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Os.apply(this,arguments)}function ZT(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function lr(i,e){return lr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},lr(i,e)}function JT(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,lr(i,e)}function Is(i){return Is=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Is(i)}function QT(i){return Function.toString.call(i).indexOf("[native code]")!==-1}function ex(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Xr(i,e,t){return ex()?Xr=Reflect.construct.bind():Xr=function(r,o,s){var a=[null];a.push.apply(a,o);var d=Function.bind.apply(r,a),c=new d;return s&&lr(c,s.prototype),c},Xr.apply(null,arguments)}function Us(i){var e=typeof Map=="function"?new Map:void 0;return Us=function(n){if(n===null||!QT(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return Xr(n,arguments,Is(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),lr(r,n)},Us(i)}var En=function(i){JT(e,i);function e(t){var n;return n=i.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,ZT(n)}return e}(Us(Error));function us(i){return Math.round(i*255)}function tx(i,e,t){return us(i)+","+us(e)+","+us(t)}function Nc(i,e,t,n){if(n===void 0&&(n=tx),e===0)return n(t,t,t);var r=(i%360+360)%360/60,o=(1-Math.abs(2*t-1))*e,s=o*(1-Math.abs(r%2-1)),a=0,d=0,c=0;r>=0&&r<1?(a=o,d=s):r>=1&&r<2?(a=s,d=o):r>=2&&r<3?(d=o,c=s):r>=3&&r<4?(d=s,c=o):r>=4&&r<5?(a=s,c=o):r>=5&&r<6&&(a=o,c=s);var l=t-o/2,u=a+l,_=d+l,f=c+l;return n(u,_,f)}var Fc={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ix(i){if(typeof i!="string")return i;var e=i.toLowerCase();return Fc[e]?"#"+Fc[e]:i}var nx=/^#[a-fA-F0-9]{6}$/,rx=/^#[a-fA-F0-9]{8}$/,ox=/^#[a-fA-F0-9]{3}$/,sx=/^#[a-fA-F0-9]{4}$/,ps=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ax=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,dx=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,cx=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function fa(i){if(typeof i!="string")throw new En(3);var e=ix(i);if(e.match(nx))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(rx)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(ox))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(sx)){var n=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:n}}var r=ps.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var o=ax.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var s=dx.exec(e);if(s){var a=parseInt(""+s[1],10),d=parseInt(""+s[2],10)/100,c=parseInt(""+s[3],10)/100,l="rgb("+Nc(a,d,c)+")",u=ps.exec(l);if(!u)throw new En(4,e,l);return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10)}}var _=cx.exec(e.substring(0,50));if(_){var f=parseInt(""+_[1],10),m=parseInt(""+_[2],10)/100,g=parseInt(""+_[3],10)/100,h="rgb("+Nc(f,m,g)+")",p=ps.exec(h);if(!p)throw new En(4,e,h);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10),alpha:parseFloat(""+_[4])>1?parseFloat(""+_[4])/100:parseFloat(""+_[4])}}throw new En(5)}var lx=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},Bc=lx;function yn(i){var e=i.toString(16);return e.length===1?"0"+e:e}function kc(i,e,t){if(typeof i=="number"&&typeof e=="number"&&typeof t=="number")return Bc("#"+yn(i)+yn(e)+yn(t));if(typeof i=="object"&&e===void 0&&t===void 0)return Bc("#"+yn(i.red)+yn(i.green)+yn(i.blue));throw new En(6)}function ux(i,e,t,n){if(typeof i=="string"&&typeof e=="number"){var r=fa(i);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof i=="number"&&typeof e=="number"&&typeof t=="number"&&typeof n=="number")return n>=1?kc(i,e,t):"rgba("+i+","+e+","+t+","+n+")";if(typeof i=="object"&&e===void 0&&t===void 0&&n===void 0)return i.alpha>=1?kc(i.red,i.green,i.blue):"rgba("+i.red+","+i.green+","+i.blue+","+i.alpha+")"}throw new En(7)}function Tu(i,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?i.apply(this,r):Tu(i,e,r)}}function px(i){return Tu(i,i.length,[])}function _x(i,e,t){return Math.max(i,Math.min(e,t))}function fx(i,e){if(e==="transparent")return e;var t=fa(e),n=typeof t.alpha=="number"?t.alpha:1,r=Os({},t,{alpha:_x(0,1,(n*100+parseFloat(i)*100)/100)});return ux(r)}var hx=px(fx),mx=hx,Ki=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return this.None(i)},Out:function(i){return this.None(i)},InOut:function(i){return this.None(i)}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var e=1.70158;return i===1?1:i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return i===0?0:--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}}),Bounce:Object.freeze({In:function(i){return 1-Ki.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?Ki.Bounce.In(i*2)*.5:Ki.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(e){return Math.pow(e,i)},Out:function(e){return 1-Math.pow(1-e,i)},InOut:function(e){return e<.5?Math.pow(e*2,i)/2:(1-Math.pow(2-e*2,i))/2+.5}}}}),er=function(){return performance.now()},gx=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=er()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var o=this._tweens[n[r]],s=!t;o&&o.update(e,s)===!1&&!t&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),Mn={Linear:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),o=Mn.Utils.Linear;return e<0?o(i[0],i[1],n):e>1?o(i[t],i[t-1],t-n):o(i[r],i[r+1>t?t:r+1],n-r)},Bezier:function(i,e){for(var t=0,n=i.length-1,r=Math.pow,o=Mn.Utils.Bernstein,s=0;s<=n;s++)t+=r(1-e,n-s)*r(e,s)*i[s]*o(n,s);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),o=Mn.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(r=Math.floor(n=t*(1+e))),o(i[(r-1+t)%t],i[r],i[(r+1)%t],i[(r+2)%t],n-r)):e<0?i[0]-(o(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(o(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):o(i[r?r-1:0],i[r],i[t<r+1?t:r+1],i[t<r+2?t:r+2],n-r)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=Mn.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,r){var o=(t-i)*.5,s=(n-e)*.5,a=r*r,d=r*a;return(2*e-2*t+o+s)*d+(-3*e+3*t-2*o-s)*a+o*r+e}}},yx=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Ns=new gx,zc=function(){function i(e,t){t===void 0&&(t=Ns),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Ki.Linear.None,this._interpolationFunction=Mn.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=yx.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},i.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},i.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},i.prototype.start=function(e,t){if(e===void 0&&(e=er()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var o in this._valuesEnd)r[o]=this._valuesEnd[o];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},i.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},i.prototype._setupProperties=function(e,t,n,r,o){for(var s in n){var a=e[s],d=Array.isArray(a),c=d?"array":typeof a,l=!d&&Array.isArray(n[s]);if(!(c==="undefined"||c==="function")){if(l){var u=n[s];if(u.length===0)continue;for(var _=[a],f=0,m=u.length;f<m;f+=1){var g=this._handleRelativeValue(a,u[f]);if(isNaN(g)){l=!1,console.warn("Found invalid interpolation list. Skipping.");break}_.push(g)}l&&(n[s]=_)}if((c==="object"||d)&&a&&!l){t[s]=d?[]:{};var h=a;for(var p in h)t[s][p]=h[p];r[s]=d?[]:{};var u=n[s];if(!this._isDynamic){var x={};for(var p in u)x[p]=u[p];n[s]=u=x}this._setupProperties(h,t[s],u,r[s],o)}else(typeof t[s]>"u"||o)&&(t[s]=a),d||(t[s]*=1),l?r[s]=n[s].slice().reverse():r[s]=t[s]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=er()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=er()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return e===void 0&&(e=Ns),this._group=e,this},i.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},i.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},i.prototype.easing=function(e){return e===void 0&&(e=Ki.Linear.None),this._easingFunction=e,this},i.prototype.interpolation=function(e){return e===void 0&&(e=Mn.Linear),this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=er()),t===void 0&&(t=!0),this._isPaused)return!0;var n,r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var s=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,d=this._chainedTweens.length;a<d;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,r){for(var o in n)if(t[o]!==void 0){var s=t[o]||0,a=n[o],d=Array.isArray(e[o]),c=Array.isArray(a),l=!d&&c;l?e[o]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[o],s,a,r):(a=this._handleRelativeValue(s,a),typeof a=="number"&&(e[o]=s+(a-s)*r))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),ii=Ns;ii.getAll.bind(ii);ii.removeAll.bind(ii);ii.add.bind(ii);ii.remove.bind(ii);var vx=ii.update.bind(ii);function Tx(i,e){e===void 0&&(e={});var t=e.insertAt;if(!(!i||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}var xx=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;Tx(xx);function bx(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,s,a=[],d=!0,c=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;d=!1}else for(;!(d=(n=o.call(t)).done)&&(a.push(n.value),a.length!==e);d=!0);}catch(l){c=!0,r=l}finally{try{if(!d&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}function Rx(i,e,t){return e=Lx(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Ex(i,e){return Cx(i)||bx(i,e)||xu(i,e)||wx()}function Yn(i){return Mx(i)||Sx(i)||xu(i)||Px()}function Mx(i){if(Array.isArray(i))return Fs(i)}function Cx(i){if(Array.isArray(i))return i}function Sx(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function xu(i,e){if(i){if(typeof i=="string")return Fs(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fs(i,e)}}function Fs(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Px(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ax(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Lx(i){var e=Ax(i,"string");return typeof e=="symbol"?e:String(e)}var Qe=window.THREE?window.THREE:{WebGLRenderer:El,Scene:Z1,PerspectiveCamera:Nt,Raycaster:Al,SRGBColorSpace:Ue,TextureLoader:ym,Vector2:he,Vector3:O,Box3:Ji,Color:je,Mesh:jt,SphereGeometry:_o,MeshBasicMaterial:Ws,BackSide:Et,EventDispatcher:Kt,MOUSE:Jt,Quaternion:Yt,Spherical:Rs,Clock:wl},bu=ua({props:{width:{default:window.innerWidth,onChange:function(e,t,n){isNaN(e)&&(t.width=n)}},height:{default:window.innerHeight,onChange:function(e,t,n){isNaN(e)&&(t.height=n)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(o){return o.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var n=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(o){return e.hoverFilter(o.object)}).sort(function(o,s){return e.hoverOrderComparator(o.object,s.object)}),r=n.length?n[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&We(e.tooltipContent)(t)||"",e.hoverObj=t)}vx()}return this},getPointerPos:function(e){var t=e.pointerPos,n=t.x,r=t.y;return{x:n,y:r}},cameraPosition:function(e,t,n,r){var o=e.camera;if(t&&e.initialised){var s=t,a=n||{x:0,y:0,z:0};if(!r)l(s),u(a);else{var d=Object.assign({},o.position),c=_();new zc(d).to(s,r).easing(Ki.Quadratic.Out).onUpdate(l).start(),new zc(c).to(a,r/3).easing(Ki.Quadratic.Out).onUpdate(u).start()}return this}return Object.assign({},o.position,{lookAt:_()});function l(f){var m=f.x,g=f.y,h=f.z;m!==void 0&&(o.position.x=m),g!==void 0&&(o.position.y=g),h!==void 0&&(o.position.z=h)}function u(f){var m=new Qe.Vector3(f.x,f.y,f.z);e.controls.target?e.controls.target=m:o.lookAt(m)}function _(){return Object.assign(new Qe.Vector3(0,0,-1e3).applyQuaternion(o.quaternion).add(o.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,o=new Array(r>3?r-3:0),s=3;s<r;s++)o[s-3]=arguments[s];return this.fitToBbox(this.getBbox.apply(this,o),t,n)},fitToBbox:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,o=e.camera;if(t){var s=new Qe.Vector3(0,0,0),a=Math.max.apply(Math,Yn(Object.entries(t).map(function(f){var m=Ex(f,2),g=m[0],h=m[1];return Math.max.apply(Math,Yn(h.map(function(p){return Math.abs(s[g]-p)})))})))*2,d=(1-r*2/e.height)*o.fov,c=a/Math.atan(d*Math.PI/180),l=c/o.aspect,u=Math.max(c,l);if(u>0){var _=s.clone().sub(o.position).normalize().multiplyScalar(-u);this.cameraPosition(_,s,n)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},n=new Qe.Box3(new Qe.Vector3(0,0,0),new Qe.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(o){return n.expandByObject(o)}),Object.assign.apply(Object,Yn(["x","y","z"].map(function(o){return Rx({},o,[n.min[o],n.max[o]])})))):null},getScreenCoords:function(e,t,n,r){var o=new Qe.Vector3(t,n,r);return o.project(this.camera()),{x:(o.x+1)*e.width/2,y:-(o.y-1)*e.height/2}},getSceneCoords:function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=new Qe.Vector2(t/e.width*2-1,-(n/e.height)*2+1),s=new Qe.Raycaster;return s.setFromCamera(o,e.camera),Object.assign({},s.ray.at(r,new Qe.Vector3))},intersectingObjects:function(e,t,n){var r=new Qe.Vector2(t/e.width*2-1,-(n/e.height)*2+1),o=new Qe.Raycaster;return o.params.Line.threshold=e.lineHoverPrecision,o.setFromCamera(r,e.camera),o.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new Qe.Scene,camera:new Qe.PerspectiveCamera,clock:new Qe.Clock}},init:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.controlType,o=r===void 0?"trackball":r,s=n.rendererConfig,a=s===void 0?{}:s,d=n.extraRenderers,c=d===void 0?[]:d,l=n.waitForLoadComplete,u=l===void 0?!0:l;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[o]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new Qe.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(_){return t.container.addEventListener(_,function(f){if(_==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&f.type==="pointermove"&&(f.pressure>0||t.isPointerPressed)&&(f.pointerType!=="touch"||f.movementX===void 0||[f.movementX,f.movementY].some(function(h){return Math.abs(h)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var m=g(t.container);t.pointerPos.x=f.pageX-m.left,t.pointerPos.y=f.pageY-m.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function g(h){var p=h.getBoundingClientRect(),x=window.pageXOffset||document.documentElement.scrollLeft,y=window.pageYOffset||document.documentElement.scrollTop;return{top:p.top+y,left:p.left+x}}},{passive:!0})}),t.container.addEventListener("pointerup",function(_){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){_.button===0&&t.onClick(t.hoverObj||null,_,t.intersectionPoint),_.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,_,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(_){t.onRightClick&&_.preventDefault()}),t.renderer=new Qe.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},a)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=c,t.extraRenderers.forEach(function(_){_.domElement.style.position="absolute",_.domElement.style.top="0px",_.domElement.style.pointerEvents="none",t.container.appendChild(_.domElement)}),t.postProcessingComposer=new YT(t.renderer),t.postProcessingComposer.addPass(new KT(t.scene,t.camera)),t.controls=new{trackball:kT,orbit:qT,fly:GT}[o](t.camera,t.renderer.domElement),o==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(o==="trackball"||o==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(Yn(t.extraRenderers)).forEach(function(_){return _.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new Qe.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!u,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(Yn(e.extraRenderers)).forEach(function(o){return o.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new Qe.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var n=fa(e.backgroundColor).alpha;n===void 0&&(n=1),e.renderer.setClearColor(new Qe.Color(mx(1,e.backgroundColor)),n)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new Qe.TextureLoader().load(e.backgroundImageUrl,function(o){o.colorSpace=Qe.SRGBColorSpace,e.skysphere.material=new Qe.MeshBasicMaterial({map:o,side:Qe.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(o){return e.scene.remove(o)}),e.objects.forEach(function(o){return e.scene.add(o)}));function r(){e.loadComplete=e.scene.visible=!0}}});function Dx(i,e){e===void 0&&(e={});var t=e.insertAt;if(!(!i||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}var Ox=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;Dx(Ox);function qc(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function Gr(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?qc(Object(t),!0).forEach(function(n){fr(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):qc(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function fr(i,e,t){return e=kx(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function go(i){return Ix(i)||Ux(i)||Nx(i)||Fx()}function Ix(i){if(Array.isArray(i))return Bs(i)}function Ux(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Nx(i,e){if(i){if(typeof i=="string")return Bs(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Bs(i,e)}}function Bs(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Fx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bx(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function kx(i){var e=Bx(i,"string");return typeof e=="symbol"?e:String(e)}function Ru(i,e){var t=new e;return t._destructor&&t._destructor(),{linkProp:function(r){return{default:t[r](),onChange:function(s,a){a[i][r](s)},triggerUpdate:!1}},linkMethod:function(r){return function(o){for(var s=o[i],a=arguments.length,d=new Array(a>1?a-1:0),c=1;c<a;c++)d[c-1]=arguments[c];var l=s[r].apply(s,d);return l===s?this:l}}}}var Hc=window.THREE?window.THREE:{AmbientLight:bm,DirectionalLight:xm,Vector3:O},zx=170,Eu=Ru("forceGraph",vu),qx=Object.assign.apply(Object,go(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(i){return fr({},i,Eu.linkProp(i))}))),Hx=Object.assign.apply(Object,go(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(i){return fr({},i,Eu.linkMethod(i))}))),$r=Ru("renderObjs",bu),Gx=Object.assign.apply(Object,go(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(i){return fr({},i,$r.linkProp(i))}))),Vx=Object.assign.apply(Object,go(["cameraPosition","postProcessingComposer"].map(function(i){return fr({},i,$r.linkMethod(i))})).concat([{graph2ScreenCoords:$r.linkMethod("getScreenCoords"),screen2GraphCoords:$r.linkMethod("getSceneCoords")}])),Wx=ua({props:Gr(Gr({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var n=t.renderObjs.controls();n&&(n.enabled=e,e&&n.domElement&&n.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},qx),Gx),methods:Gr(Gr({zoomToFit:function(e,t,n){for(var r,o=arguments.length,s=new Array(o>3?o-3:0),a=3;a<o;a++)s[a-3]=arguments[a];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,s),t,n),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},Hx),Vx),stateInit:function(e){var t=e.controlType,n=e.rendererConfig,r=e.extraRenderers;return{forceGraph:new vu,renderObjs:bu({controlType:t,rendererConfig:n,extraRenderers:r})}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var n=document.createElement("div");t.container.appendChild(n),t.renderObjs(n);var r=t.renderObjs.camera(),o=t.renderObjs.renderer(),s=t.renderObjs.controls();s.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var a;t.container.appendChild(a=document.createElement("div")),a.className="graph-info-msg",a.textContent="",t.forceGraph.onLoading(function(){a.textContent="Loading..."}).onFinishLoading(function(){a.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*zx)}).onFinishUpdate(function(){if(t._dragControls){var d=t.graphData.nodes.find(function(l){return l.__initialFixedPos&&!l.__disposeControlsAfterDrag});d?d.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var c=t._dragControls=new Rm(t.graphData.nodes.map(function(l){return l.__threeObj}).filter(function(l){return l}),r,o.domElement);c.addEventListener("dragstart",function(l){s.enabled=!1,l.object.__initialPos=l.object.position.clone(),l.object.__prevPos=l.object.position.clone();var u=ui(l.object).__data;!u.__initialFixedPos&&(u.__initialFixedPos={fx:u.fx,fy:u.fy,fz:u.fz}),!u.__initialPos&&(u.__initialPos={x:u.x,y:u.y,z:u.z}),["x","y","z"].forEach(function(_){return u["f".concat(_)]=u[_]}),o.domElement.classList.add("grabbable")}),c.addEventListener("drag",function(l){var u=ui(l.object);if(!l.object.hasOwnProperty("__graphObjType")){var _=l.object.__initialPos,f=l.object.__prevPos,m=l.object.position;u.position.add(m.clone().sub(f)),f.copy(m),m.copy(_)}var g=u.__data,h=u.position,p={x:h.x-g.x,y:h.y-g.y,z:h.z-g.z};["x","y","z"].forEach(function(x){return g["f".concat(x)]=g[x]=h[x]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),g.__dragged=!0,t.onNodeDrag(g,p)}),c.addEventListener("dragend",function(l){delete l.object.__initialPos,delete l.object.__prevPos;var u=ui(l.object).__data;u.__disposeControlsAfterDrag&&(c.dispose(),delete u.__disposeControlsAfterDrag);var _=u.__initialFixedPos,f=u.__initialPos,m={x:f.x-u.x,y:f.y-u.y,z:f.z-u.z};_&&(["x","y","z"].forEach(function(g){var h="f".concat(g);_[h]===void 0&&delete u[h]}),delete u.__initialFixedPos,delete u.__initialPos,u.__dragged&&(delete u.__dragged,t.onNodeDragEnd(u,m))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(s.enabled=!0,s.domElement&&s.domElement.ownerDocument&&s.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),o.domElement.classList.remove("grabbable")})}}),t.renderObjs.renderer().useLegacyLights=!1,t.renderObjs.objects([new Hc.AmbientLight(13421772,Math.PI),new Hc.DirectionalLight(16777215,.6*Math.PI),t.forceGraph]).hoverOrderComparator(function(d,c){var l=ui(d);if(!l)return 1;var u=ui(c);if(!u)return-1;var _=function(m){return m.__graphObjType==="node"};return _(u)-_(l)}).tooltipContent(function(d){var c=ui(d);return c&&We(t["".concat(c.__graphObjType,"Label")])(c.__data)||""}).hoverDuringDrag(!1).onHover(function(d){var c=ui(d);if(c!==t.hoverObj){var l=t.hoverObj?t.hoverObj.__graphObjType:null,u=t.hoverObj?t.hoverObj.__data:null,_=c?c.__graphObjType:null,f=c?c.__data:null;if(l&&l!==_){var m=t["on".concat(l==="node"?"Node":"Link","Hover")];m&&m(null,u)}if(_){var g=t["on".concat(_==="node"?"Node":"Link","Hover")];g&&g(f,l===_?u:null)}o.domElement.classList[c&&t["on".concat(_==="node"?"Node":"Link","Click")]||!c&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=c}}).clickAfterDrag(!1).onClick(function(d,c){var l=ui(d);if(l){var u=t["on".concat(l.__graphObjType==="node"?"Node":"Link","Click")];u&&u(l.__data,c)}else t.onBackgroundClick&&t.onBackgroundClick(c)}).onRightClick(function(d,c){var l=ui(d);if(l){var u=t["on".concat(l.__graphObjType==="node"?"Node":"Link","RightClick")];u&&u(l.__data,c)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(c)}),this._animationCycle()}});function ui(i){for(var e=i;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}class jx extends ft{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new he(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const vn=new O,Gc=new Je,Vc=new Je,Wc=new O,jc=new O;class Xx{constructor(e={}){const t=this;let n,r,o,s;const a={objects:new WeakMap},d=e.element!==void 0?e.element:document.createElement("div");d.style.overflow="hidden",this.domElement=d,this.getSize=function(){return{width:n,height:r}},this.render=function(f,m){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),Gc.copy(m.matrixWorldInverse),Vc.multiplyMatrices(m.projectionMatrix,Gc),c(f,f,m),_(f)},this.setSize=function(f,m){n=f,r=m,o=n/2,s=r/2,d.style.width=f+"px",d.style.height=m+"px"};function c(f,m,g){if(f.isCSS2DObject){vn.setFromMatrixPosition(f.matrixWorld),vn.applyMatrix4(Vc);const h=f.visible===!0&&vn.z>=-1&&vn.z<=1&&f.layers.test(g.layers)===!0;if(f.element.style.display=h===!0?"":"none",h===!0){f.onBeforeRender(t,m,g);const x=f.element;x.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(vn.x*o+o)+"px,"+(-vn.y*s+s)+"px)",x.parentNode!==d&&d.appendChild(x),f.onAfterRender(t,m,g)}const p={distanceToCameraSquared:l(g,f)};a.objects.set(f,p)}for(let h=0,p=f.children.length;h<p;h++)c(f.children[h],m,g)}function l(f,m){return Wc.setFromMatrixPosition(f.matrixWorld),jc.setFromMatrixPosition(m.matrixWorld),Wc.distanceToSquared(jc)}function u(f){const m=[];return f.traverse(function(g){g.isCSS2DObject&&m.push(g)}),m}function _(f){const m=u(f).sort(function(h,p){if(h.renderOrder!==p.renderOrder)return p.renderOrder-h.renderOrder;const x=a.objects.get(h).distanceToCameraSquared,y=a.objects.get(p).distanceToCameraSquared;return x-y}),g=m.length;for(let h=0,p=m.length;h<p;h++)m[h].element.style.zIndex=g-h}}}const $x="SUCCESS",Yx="",Kx={instance_data:[{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:256533.6392857143,TCP重传比例:.0177128393,TCP建连失败比例:0,TCP建连时延:161.8666666667,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.11"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:122961.2595238095,TCP重传比例:.0232658345,TCP建连失败比例:1.6342650246,TCP建连时延:1551.2135389082,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"172.16.0.196"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:93412.7619047619,TCP重传比例:.0293352288,TCP建连失败比例:0,TCP建连时延:1443.125,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.6,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.6"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:50955.1142857143,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.32,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.32"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:50184.1238095238,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.20,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.20"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:49438.1,TCP重传比例:.0597367204,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.114,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.114"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:26861.7833333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:32.3214285714,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.16,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.16"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:25467.8773809524,TCP重传比例:.0011141565,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.30"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:22499.2833333333,TCP重传比例:.0424983748,TCP建连失败比例:0,TCP建连时延:32.0297619048,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.4"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:22317.3761904762,TCP重传比例:.0477374086,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.1.102,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.1.102"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:17205.0357142857,TCP重传比例:.1459370369,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.4"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:15792.5154761905,TCP重传比例:0,TCP建连失败比例:54.0300082829,TCP建连时延:566.7791976152,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"172.16.0.196"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:12990.9083333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:33.7428571429,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.45"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:12919.9369047619,TCP重传比例:.2707707109,TCP建连失败比例:0,TCP建连时延:266.8651360544,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.1.99"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:12192.919047619,TCP重传比例:.0114197112,TCP建连失败比例:0,TCP建连时延:230.5476190476,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.111"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:11143.2202380952,TCP重传比例:.0166112957,TCP建连失败比例:0,TCP建连时延:35.5333333333,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.58"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:9639.6892857143,TCP重传比例:.0625262419,TCP建连失败比例:0,TCP建连时延:207.9846354167,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.1.93"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:9564.3261904762,TCP重传比例:.0043633825,TCP建连失败比例:0,TCP建连时延:29.986318408,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.94,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.94"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:9494.9773809524,TCP重传比例:.0023511709,TCP建连失败比例:0,TCP建连时延:339.1428571429,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.3"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:9417.1630952381,TCP重传比例:.0350875851,TCP建连失败比例:0,TCP建连时延:208.5724789916,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.1.94"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:8890.4738095238,TCP重传比例:.0090598808,TCP建连失败比例:0,TCP建连时延:282.3,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.17"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:8033.6214285714,TCP重传比例:.020878897,TCP建连失败比例:59.7948056456,TCP建连时延:661.7081570595,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.25,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.25"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:8010.8619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:42.2833333333,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.47,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.47"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:7742.8107142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:32.3745098039,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.38"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:6968.7797619048,TCP重传比例:.0166116738,TCP建连失败比例:54.9593391412,TCP建连时延:37682.9506107344,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"172.16.0.197"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:6498.7214285714,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:54.0769230769,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.18,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.18"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:6495.819047619,TCP重传比例:.0809296573,TCP建连失败比例:0,TCP建连时延:336.2692307692,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.8,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.8"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:6451.605952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:36.369047619,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.39"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:6310.4702380952,TCP重传比例:.0296122181,TCP建连失败比例:0,TCP建连时延:1707.5,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.96,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.96"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:6246.5785714286,TCP重传比例:.0668953549,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.30"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:5476.3142857143,TCP重传比例:.0062877264,TCP建连失败比例:61.9801414438,TCP建连时延:872.1358681092,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"172.16.0.197"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:5439.6607142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:40.6404761905,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.53"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:4686.7130952381,TCP重传比例:0,TCP建连失败比例:30.8136416022,TCP建连时延:74,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.45"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:4667.8547619048,TCP重传比例:.0024596616,TCP建连失败比例:0,TCP建连时延:31.5047559655,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.124,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.124"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:4634.0678571429,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:35.6476190476,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.48,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.48"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:4632.519047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:43.0785714286,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.43,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.43"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:4630.519047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:38.530952381,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.34,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.34"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:4559.1297619048,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:42.15,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.54,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.54"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:4218.7130952381,TCP重传比例:.0633767364,TCP建连失败比例:0,TCP建连时延:387.15,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.112,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.112"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:4190.1238095238,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:39.3119047619,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.46,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.46"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:4163.7428571429,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.97,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.97"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:4158.1023809524,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:40.1047619048,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.41"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:4036.444047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:40.6,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.52,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.52"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:3923.1738095238,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:354.6666666667,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.23,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.23"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:3904.730952381,TCP重传比例:.0106292517,TCP建连失败比例:0,TCP建连时延:70.8,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.19,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.19"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:3893.7761904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:318.4761904762,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.27"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:3872.5738095238,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:32.3857142857,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.36"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:3824.6273809524,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:35.8714285714,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.37"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:3784.0357142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:34.3714285714,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.42,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.42"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:3782.6738095238,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:22,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.27"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:3591.4357142857,TCP重传比例:.0974250669,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.24,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.24"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:3487.9511904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:39.7476190476,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.56"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:3441.8130952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:46.0880952381,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.1.90"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:3266.7214285714,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:36.0261904762,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.35,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.35"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:3259.6523809524,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:38.0404761905,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.55,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.55"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:3258.0880952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:38.4880952381,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.49,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.49"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:3124.0988095238,TCP重传比例:0,TCP建连失败比例:2.9428476886,TCP建连时延:46.1839874552,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.39"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:3082.2595238095,TCP重传比例:.0058452186,TCP建连失败比例:0,TCP建连时延:399.4851190476,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.28,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.28"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:2967.6583333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.1.99"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:2884.8964285714,TCP重传比例:.0107735402,TCP建连失败比例:0,TCP建连时延:1691.75,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.13"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:2740.6345238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:25,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.3"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:2580.4666666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:54.5416666667,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.15,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.15"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:2505.0654761905,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:40.5738095238,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.51,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.51"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:2328.2071428571,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:35.1071428571,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.57"},{rs_set_id:"R1","Enum(tap_side)":"服务端网卡",tap_side:"s",流量速率:2327.6833333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:42.7071428571,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"10.104.0.50"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:2110.3214285714,TCP重传比例:0,TCP建连失败比例:4.2153869931,TCP建连时延:41.9577124183,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.41"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1928.819047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:331.7638888889,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.2,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.2"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1862.0476190476,TCP重传比例:0,TCP建连失败比例:43.1279456255,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.56"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1692.8547619048,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:306.2962962963,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.29,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.29"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1654.1773809524,TCP重传比例:0,TCP建连失败比例:1.6892704237,TCP建连时延:43.0322860963,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.36"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1638.905952381,TCP重传比例:0,TCP建连失败比例:41.819623212,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.58"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1634.5821428571,TCP重传比例:0,TCP建连失败比例:2.9562871358,TCP建连时延:41.9608112374,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.37"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1382.725,TCP重传比例:0,TCP建连失败比例:18.4798534799,TCP建连时延:68,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.59,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.59"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1379.1392857143,TCP重传比例:0,TCP建连失败比例:23.9285714286,TCP建连时延:75,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.57"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1265.9107142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:1789,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.1.89,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.1.89"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:1047.2595238095,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.22,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.22"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:818.6297619048,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:57.0892857143,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.125,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.125"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:804.4845238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:53.9871794872,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.9,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.9"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:791.925,TCP重传比例:0,TCP建连失败比例:19.693877551,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.50"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:706.9476190476,TCP重传比例:0,TCP建连失败比例:25.0444793302,TCP建连时延:54,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.53"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:703.719047619,TCP重传比例:0,TCP建连失败比例:22.2649969079,TCP建连时延:302,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.1.90"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:699.3595238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:66.5,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.122,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.122"},{rs_set_id:"R1","Enum(tap_side)":"客户端网卡",tap_side:"c",流量速率:664.6416666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=10.104.0.16,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"10.104.0.16"},{rs_set_id:"R1","Enum(tap_side)":"本机网卡",tap_side:"local",流量速率:67.9452380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:27.4642857143,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"172.16.0.197"},{rs_set_id:"R1","Enum(tap_side)":"本机网卡",tap_side:"local",流量速率:67.9452380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:27.4642857143,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"172.16.0.197"},{rs_set_id:"R1","Enum(tap_side)":"本机网卡",tap_side:"local",流量速率:67.5380952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:23.6607142857,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1",role:"c",node_type:"ip",icon_id:-10,ip:"172.16.0.196"},{rs_set_id:"R1","Enum(tap_side)":"本机网卡",tap_side:"local",流量速率:67.5380952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:23.6607142857,_querier_region:"华北2-北京",uid:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1",role:"s",node_type:"ip",icon_id:-10,ip:"172.16.0.196"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.156.176,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.156.176"},{rs_set_id:"R1",uid:"icon_id=-10,ip=172.16.0.192,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"172.16.0.192"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.157.54,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.157.54"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.0.1,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.0.1"},{rs_set_id:"R1",uid:"icon_id=-10,ip=172.16.0.247,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"172.16.0.247"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.230.34,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.230.34"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.6.149"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.68.181,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.68.181"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.71.12,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.71.12"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.97.112,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.97.112"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.40.138,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.40.138"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.27.78,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.27.78"},{rs_set_id:"R1",uid:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"192.168.0.10"},{rs_set_id:"R1",uid:"icon_id=-10,ip=172.16.0.2,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"172.16.0.2"},{rs_set_id:"R1",uid:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"10.104.0.1"},{rs_set_id:"R1",uid:"icon_id=-10,ip=10.104.1.1,node_type=ip,rs_set_id=R1",add_description:"双端不在单端的补点",node_type:"ip",icon_id:-10,ip:"10.104.1.1"}],peers_data:[{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.156.176",流量速率:102975.2785714286,TCP重传比例:.0294894323,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.156.176,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.32","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.156.176",流量速率:50955.1142857143,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.32,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.156.176,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.20","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.156.176",流量速率:50184.1238095238,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.20,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.156.176,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.114","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.156.176",流量速率:49438.1,TCP重传比例:.0597367204,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.114,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.156.176,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.196","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.192",流量速率:36440.3821428571,TCP重传比例:.0158585584,TCP建连失败比例:0,TCP建连时延:1685.7948979592,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.192,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.16",流量速率:26648.7690476191,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.16,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.16",流量速率:26648.5690476191,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.16,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.102","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.157.54",流量速率:22317.3761904762,TCP重传比例:.0477374086,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.102,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.157.54,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.102","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.4",流量速率:22317.3761904762,TCP重传比例:.0477374086,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.102,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.102","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.4",流量速率:22305.5119047619,TCP重传比例:.0482915458,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.102,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.102","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.4",流量速率:22305.5119047619,TCP重传比例:.0482915458,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.102,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.1",流量速率:16364.955952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:1661,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.1,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.247","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.196",流量速率:13604.7435897436,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:905,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.247,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.6","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.196",流量速率:10281.7928571429,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.6,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:10270.9857142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:10270.9857142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.4","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.99",流量速率:8999.2488095238,TCP重传比例:.3135661307,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.4","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.230.34",流量速率:8999.2488095238,TCP重传比例:.3135661307,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.230.34,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.4","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.99",流量速率:8999.2488095238,TCP重传比例:.3135661307,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.4","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.99",流量速率:8999.2488095238,TCP重传比例:.3135661307,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.58",流量速率:8969.8702380952,TCP重传比例:.1373626374,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.58",流量速率:8969.6702380952,TCP重传比例:.1373626374,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.47",流量速率:7434.3738095238,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.47,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.47",流量速率:7434.1738095238,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.47,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.96","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.1",流量速率:6310.4702380952,TCP重传比例:.0296122181,TCP建连失败比例:0,TCP建连时延:1707.5,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.96,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.1,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.30","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.196",流量速率:6141.8702380952,TCP重传比例:.0682810042,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.25",流量速率:5644.1619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.25,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.25",流量速率:5644.1619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.25,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.53",流量速率:4892.905952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.53",流量速率:4892.905952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:4730.8607142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:4730.8607142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.197","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.192",流量速率:4561.4011904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:1733,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.192,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.3","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:4418.330952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.3","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:4418.330952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.4","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.68.181",流量速率:4129.2214285714,TCP重传比例:.002944294,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.68.181,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.4","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.124",流量速率:4129.2214285714,TCP重传比例:.002944294,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.124,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.54",流量速率:4014.7916666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.54,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.54",流量速率:4014.5916666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.54,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.43",流量速率:3930.994047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.43,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.43",流量速率:3930.994047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.43,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.48",流量速率:3919.4428571429,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.48,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.48",流量速率:3919.4428571429,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.48,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.34",流量速率:3919.0142857143,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.34,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.34",流量速率:3918.9357142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.34,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.39",流量速率:3796.4583333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.39",流量速率:3796.4583333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.46",流量速率:3700.4023809524,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.46,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.46",流量速率:3700.4023809524,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.46,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.24","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.99",流量速率:3591.4357142857,TCP重传比例:.0974250669,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.24,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.24","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.99",流量速率:3591.4357142857,TCP重传比例:.0974250669,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.24,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.24","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.99",流量速率:3591.4357142857,TCP重传比例:.0974250669,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.24,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.24","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.230.34",流量速率:3591.4357142857,TCP重传比例:.0974250669,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.24,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.230.34,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.192",流量速率:3588.8607142857,TCP重传比例:.0476190476,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.192,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.3","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.71.12",流量速率:3554.8833333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.71.12,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.3","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.97",流量速率:3554.8833333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.97,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.18","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.94",流量速率:3427.9583333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:29.9807692308,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.18,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.18","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.97.112",流量速率:3427.9583333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:54.0769230769,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.18,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.97.112,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.8","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.40.138",流量速率:3419.4523809524,TCP重传比例:.1068637701,TCP建连失败比例:0,TCP建连时延:336.2692307692,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.8,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.40.138,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.8","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:3419.4523809524,TCP重传比例:.1068637701,TCP建连失败比例:0,TCP建连时延:249.5256410256,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.8,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.8","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:3419.4523809524,TCP重传比例:.1068637701,TCP建连失败比例:0,TCP建连时延:310.7564102564,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.8,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.8","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:3419.4523809524,TCP重传比例:.1068637701,TCP建连失败比例:0,TCP建连时延:273.7948717949,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.8,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.27.78",流量速率:3316.6535714286,TCP重传比例:.0530098585,TCP建连失败比例:0,TCP建连时延:343.8846153846,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.27.78,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:3316.6535714286,TCP重传比例:.0530098585,TCP建连失败比例:0,TCP建连时延:270,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:3316.6535714286,TCP重传比例:.0530098585,TCP建连失败比例:0,TCP建连时延:323.9615384615,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:3316.6535714286,TCP重传比例:.0530098585,TCP建连失败比例:0,TCP建连时延:245.0384615385,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.27","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:3085.519047619,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.27","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:3085.519047619,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.56",流量速率:2996.0083333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.56",流量速率:2996.0083333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.99","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:2967.6583333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.90",流量速率:2964.6345238095,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.90",流量速率:2964.6345238095,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.90",流量速率:2962.5130952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.90",流量速率:2962.5130952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.52",流量速率:2926.1452380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.52,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.52",流量速率:2926.1452380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.52,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:2908.9773809524,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:2908.9773809524,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.42",流量速率:2903.1011904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.42,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.42",流量速率:2903.1011904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.42,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.41",流量速率:2897.1845238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.41",流量速率:2897.1845238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.36",流量速率:2870.4761904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.36",流量速率:2870.4761904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.1",流量速率:2846.4964285714,TCP重传比例:.0118849536,TCP建连失败比例:0,TCP建连时延:1691.75,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.1,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.37",流量速率:2841.5071428571,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.37",流量速率:2841.5071428571,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.35",流量速率:2781.5261904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.35,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.35",流量速率:2781.5261904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.35,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.49",流量速率:2768.1333333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.49,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.49",流量速率:2768.1333333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.49,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.55",流量速率:2757.5214285714,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.55,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.55",流量速率:2757.1214285714,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.55,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.3",流量速率:2738.2345238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:46.25,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.3",流量速率:2738.2345238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:25,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:2735.6321428571,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:2735.6321428571,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.196","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.197",流量速率:2536.0261904762,TCP重传比例:0,TCP建连失败比例:100,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.196","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.197",流量速率:2327.975,TCP重传比例:0,TCP建连失败比例:100,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.28","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:2281.0011904762,TCP重传比例:.0067195269,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.28,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.28","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:2281.0011904762,TCP重传比例:.0067195269,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.28,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.8","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:2212.9607142857,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.8,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.18","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:2212.85,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.18,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.45","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.39",流量速率:2176.669047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.45","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.39",流量速率:2176.669047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.112","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.40.138",流量速率:2144.6380952381,TCP重传比例:.1292339999,TCP建连失败比例:0,TCP建连时延:387.15,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.112,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.40.138,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.112","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:2144.6380952381,TCP重传比例:.1292339999,TCP建连失败比例:0,TCP建连时延:364.15,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.112,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.112","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:2144.6380952381,TCP重传比例:.1292339999,TCP建连失败比例:0,TCP建连时延:304.65,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.112,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.112","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:2144.6380952381,TCP重传比例:.1292339999,TCP建连失败比例:0,TCP建连时延:276.45,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.112,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:2076.3857142857,TCP重传比例:.0669802505,TCP建连失败比例:0,TCP建连时延:278.84375,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:2076.3857142857,TCP重传比例:.0669802505,TCP建连失败比例:0,TCP建连时延:252.625,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:2076.3857142857,TCP重传比例:.0669802505,TCP建连失败比例:0,TCP建连时延:321.875,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.27.78",流量速率:2076.3857142857,TCP重传比例:.0669802505,TCP建连失败比例:0,TCP建连时延:342.875,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.27.78,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.15","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.94",流量速率:2076.3416666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:29.1666666667,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.15,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.15","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.97.112",流量速率:2076.3416666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:54.5416666667,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.15,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.97.112,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.8","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:2016.9761904762,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.8,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.18","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:2006.4035714286,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.18,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.6","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.197",流量速率:1988.4178571429,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.6,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.51",流量速率:1975.530952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.51,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.51",流量速率:1975.330952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.51,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.27",流量速率:1949.755952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:40,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.27",流量速率:1949.755952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:22,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.57",流量速率:1856.2857142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.57",流量速率:1855.6857142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.50",流量速率:1854.7404761905,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.50",流量速率:1854.7404761905,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.27",流量速率:1830.3178571429,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.27",流量速率:1830.3178571429,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.23","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:1683.7071428571,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.23,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.2","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.196",流量速率:1678.7869047619,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.2,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.56","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.58",流量速率:1665.6428571429,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.56","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.58",流量速率:1665.6428571429,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.19","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:1665.0547619048,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.19,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.112","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:1543.880952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.112,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.19","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.94",流量速率:1540.9226190476,TCP重传比例:.0298864316,TCP建连失败比例:0,TCP建连时延:39.5,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.19,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.19","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.97.112",流量速率:1540.9226190476,TCP重传比例:.0298864316,TCP建连失败比例:0,TCP建连时延:70.8,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.19,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.97.112,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.23","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:1530.6119047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:298.5,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.23,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.23","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.40.138",流量速率:1530.6119047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:354.6666666667,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.23,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.40.138,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.23","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:1530.6119047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:335.7222222222,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.23,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.23","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:1530.6119047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:267,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.23,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.3","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.27.78",流量速率:1516.5464285714,TCP重传比例:.0309214595,TCP建连失败比例:0,TCP建连时延:339.1428571429,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.27.78,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.3","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:1516.5464285714,TCP重传比例:.0309214595,TCP建连失败比例:0,TCP建连时延:320.1428571429,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.3","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:1516.5464285714,TCP重传比例:.0309214595,TCP建连失败比例:0,TCP建连时延:254,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.3","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:1516.5464285714,TCP重传比例:.0309214595,TCP建连失败比例:0,TCP建连时延:274.7142857143,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.23","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:1515.9571428571,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.23,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.19","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:1502.9238095238,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.19,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.25",流量速率:1429.9202380952,TCP重传比例:.0246838547,TCP建连失败比例:57.7835880472,TCP建连时延:474.1921566825,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.25,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.112","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:1350.5404761905,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.112,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.89","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.1",流量速率:1265.9107142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:1789,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.89,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.1,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.247","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.197",流量速率:1139.3551282051,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:950,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.247,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.2","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:1103.680952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.2,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.22","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.1",流量速率:1047.2595238095,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.22,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.1,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.6","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.1",流量速率:1045.7535714286,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:1710.8333333333,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.6,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.1,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.197","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.25",流量速率:957.4178571429,TCP重传比例:.0170473917,TCP建连失败比例:62.2894442908,TCP建连时延:927.3120448142,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.25,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.197","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.25",流量速率:957.4178571429,TCP重传比例:.0170473917,TCP建连失败比例:62.2894442908,TCP建连时延:849.2241574365,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.25,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.197","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.25",流量速率:957.4178571429,TCP重传比例:.0170473917,TCP建连失败比例:62.2894442908,TCP建连时延:871.3992273635,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.25,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.2","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:938.6571428571,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.2,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:920.9714285714,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:30.7797619048,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:920.7357142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:28.0416666667,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.94",流量速率:920.6571428571,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:24.7857142857,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.2","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.197",流量速率:907,TCP重传比例:.0476190476,TCP建连失败比例:0,TCP建连时延:286.5,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.2,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.29","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.6.149",流量速率:876.5702380952,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.29,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.6.149,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.2","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:814.430952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:257.0916666667,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.2,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.2","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:814.430952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:314.3638888889,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.2,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.2","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:814.430952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:279.9972222222,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.2,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.2","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.40.138",流量速率:814.430952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:331.7638888889,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.2,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.40.138,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.29","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:809.8202380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:292.7592592593,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.29,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.29","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.40.138",流量速率:809.8202380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:306.2962962963,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.29,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.40.138,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.29","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:809.8202380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:247,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.29,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.29","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.93",流量速率:809.8202380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:263.9074074074,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.29,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.93,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.125","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.94",流量速率:805.2154761905,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:31.8095238095,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.125,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.125","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.97.112",流量速率:805.2154761905,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:57.0892857143,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.125,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.97.112,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.27","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.27.78",流量速率:796.4619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:318.4761904762,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.27.78,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.27","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:796.4619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:266.375,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.27","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:796.4619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:300.5238095238,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.27","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:796.4619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:251.3452380952,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.9","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.94",流量速率:793.230952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:30.4743589744,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.9,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.9","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.97.112",流量速率:793.230952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:53.9871794872,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.9,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.97.112,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.28","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.27.78",流量速率:790.144047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:399.4851190476,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.28,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.27.78,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.28","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:790.144047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:383.3363095238,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.28,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.28","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:790.144047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:291.1130952381,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.28,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.28","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.94",流量速率:790.144047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:270.7232142857,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.28,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.94,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.45","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.41",流量速率:784.1607142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.45","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.41",流量速率:784.1607142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.196",流量速率:776.1130952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.41","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:772.8011904762,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.41","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:772.8011904762,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.39","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:753.7380952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.39","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:753.7380952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.59","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:750.830952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.59,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.59","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:750.830952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.59,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.50","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:744.7178571429,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.50","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:744.7178571429,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.57","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:744.430952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.57","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:744.430952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.29","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.30",流量速率:706.9583333333,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.29,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.16","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.1",流量速率:664.0416666667,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.16,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.1,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.58","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.52",流量速率:618.7630952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.52,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.58","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.52",流量速率:618.7630952381,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.52,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.97",流量速率:608.8595238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.97,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.71.12",流量速率:608.8595238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.71.12,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.47",流量速率:567.1452380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:42.2833333333,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.47,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.45","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.36",流量速率:528.819047619,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.45","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.36",流量速率:528.819047619,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.36","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:509.7273809524,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:28,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.36","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:509.7273809524,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:41,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.45","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.37",流量速率:508.8488095238,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.45","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.37",流量速率:508.8488095238,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.37","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:499.5404761905,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:42,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.37","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:499.5404761905,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:30,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.39","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:496.4714285714,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.49",流量速率:468.5011904762,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:38.4880952381,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.49,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:33.169047619,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.90",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:46.0880952381,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.34",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:38.530952381,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.34,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.36",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:32.3857142857,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.54",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:42.15,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.54,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.48",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:35.6476190476,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.48,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.56",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:39.7476190476,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.52",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:40.6,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.52,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.50",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:42.7071428571,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.58",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:35.5333333333,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.46",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:39.3119047619,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.46,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.42",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:34.3714285714,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.42,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.39",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:36.369047619,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.35",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:36.0261904762,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.35,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.37",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:35.8714285714,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.55",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:38.0404761905,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.55,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.57",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:35.1071428571,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.53",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:40.6404761905,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.51",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:40.5738095238,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.51,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:33.7428571429,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.43",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:43.0785714286,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.43,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.41",流量速率:468.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:40.1047619048,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.197",流量速率:337.4238095238,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.58","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:283.4666666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.41","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:263.330952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.58","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.48",流量速率:233.0821428571,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.48,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.58","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.48",流量速率:233.0821428571,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.48,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.58","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.34",流量速率:230.6476190476,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.34,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.58","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.34",流量速率:230.6476190476,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.34,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.58","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.43",流量速率:224.025,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.43,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.58","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.43",流量速率:224.025,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.43,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.36","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:218.5619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.37","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:215.5095238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.16",流量速率:213.2142857143,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:32.3214285714,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.16,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.197","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.196",流量速率:209.6226190476,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.4",流量速率:193.7714285714,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:32.0297619048,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.4,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.56","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:156.3642857143,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.30","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.1",流量速率:104.7083333333,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.30,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.1,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.45","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:76.5226190476,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.6","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:74.75,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.6,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.197","Enum(tap_side)":"本机网卡",tap_side:"local",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.197",流量速率:67.9452380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:27.4642857143,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.197,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"172.16.0.196","Enum(tap_side)":"本机网卡",tap_side:"local",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.196",流量速率:67.5380952381,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:23.6607142857,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.196,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.90","Enum(tap_side)":"服务端容器节点",tap_side:"s-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.53",流量速率:67.0095238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.90","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.53",流量速率:67.0095238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.90","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.53",流量速率:67.0095238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.90","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.53",流量速率:67.0095238095,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.53","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.54",流量速率:60.0571428571,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.54,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.53","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.54",流量速率:60.0571428571,TCP重传比例:0,TCP建连失败比例:null,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.54,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.90","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:34.0619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.90,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.53","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:34.0619047619,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.11","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:30.0166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.11,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.57","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:24.1857142857,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.59","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:23.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.59,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.50","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:22.7476190476,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.9","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:14.0681818182,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.9,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.122","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:13.4785714286,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.122,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.125","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:13.2642857143,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.125,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.28","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:12.7916666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.28,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.2","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:12.375,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.2,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.27","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:11.6952380952,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.17","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:11.5125,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.17,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.15","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:10.3166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.15,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.19","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:10.3166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.19,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.3","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:10.2333333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.23","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:9.9,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.23,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.29","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:9.9,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.29,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.18","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:9.5797619048,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.18,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.111","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:9.5023809524,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.111,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.112","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:9.2037037037,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.112,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.8","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"192.168.0.10",流量速率:9.1928571429,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.8,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=192.168.0.10,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.1.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.1.99",流量速率:2.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.1.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.1.99,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.3",流量速率:2.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.3,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.1","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.27",流量速率:2.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.1,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.27,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.52",流量速率:1.9384615385,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.52,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.52",流量速率:1.9384615385,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.52,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.54",流量速率:1.82,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.54,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.54",流量速率:1.82,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.54,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.42",流量速率:1.7818181818,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.42,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.42",流量速率:1.7818181818,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.42,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.25",流量速率:1.6545454545,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.25,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.46",流量速率:1.6545454545,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.46,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.25",流量速率:1.6545454545,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.25,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.46",流量速率:1.6545454545,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.46,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.51",流量速率:1.6333333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.51,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.50",流量速率:1.6333333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.50",流量速率:1.6333333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.50,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.51",流量速率:1.6333333333,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.51,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.47",流量速率:1.6153846154,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.47,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.47",流量速率:1.6153846154,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.47,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.55",流量速率:1.5272727273,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.55,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.55",流量速率:1.5272727273,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.55,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.57",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.43",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.43,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.48",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.48,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.48",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.48,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.38",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.38,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.45",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.45,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.43",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.43,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.57",流量速率:1.5166666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.57,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.34",流量速率:1.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.34,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.41",流量速率:1.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.58",流量速率:1.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.58",流量速率:1.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.58,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.41",流量速率:1.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.41,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.34",流量速率:1.5,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.34,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.49",流量速率:1.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.49,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.36",流量速率:1.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.53",流量速率:1.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.39",流量速率:1.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.39",流量速率:1.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.39,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.49",流量速率:1.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.49,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.36",流量速率:1.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.36,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.53",流量速率:1.4,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.53,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.35",流量速率:1.3,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.35,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.37",流量速率:1.3,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.35",流量速率:1.3,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.35,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.37",流量速率:1.3,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.37,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端网卡",tap_side:"c",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.56",流量速率:1.1666666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"服务端网卡",tap_side:"s",server_node_type:"ip",server_icon_id:-10,ip_1:"10.104.0.56",流量速率:1.1666666667,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=10.104.0.56,node_type=ip,rs_set_id=R1"},{query_id:"R1-R1",client_node_type:"ip",client_icon_id:-10,ip_0:"10.104.0.13","Enum(tap_side)":"客户端容器节点",tap_side:"c-nd",server_node_type:"ip",server_icon_id:-10,ip_1:"172.16.0.192",流量速率:.9,TCP重传比例:0,TCP建连失败比例:0,TCP建连时延:null,_querier_region:"华北2-北京",uid_0:"icon_id=-10,ip=10.104.0.13,node_type=ip,rs_set_id=R1",uid_1:"icon_id=-10,ip=172.16.0.192,node_type=ip,rs_set_id=R1"}]},Zx="Application_Detail_List",Jx={query_id:{label_type:"",pre_as:"newTag('R1-R1')",type:0,unit:"",value_type:"String"},client_node_type:{label_type:"",pre_as:"node_type(ip_0)",type:0,unit:"",value_type:"String"},client_icon_id:{label_type:"",pre_as:"icon_id(ip_0)",type:0,unit:"",value_type:"Int"},ip_0:{label_type:"",pre_as:"",type:0,unit:"",value_type:"String"},"Enum(tap_side)":{label_type:"",pre_as:"",type:0,unit:"",value_type:"String"},tap_side:{label_type:"",pre_as:"",type:0,unit:"",value_type:"String"},server_node_type:{label_type:"",pre_as:"node_type(ip_1)",type:0,unit:"",value_type:"String"},server_icon_id:{label_type:"",pre_as:"icon_id(ip_1)",type:0,unit:"",value_type:"Int"},ip_1:{label_type:"",pre_as:"",type:0,unit:"",value_type:"String"},流量速率:{label_type:"",pre_as:"PerSecond(Avg(byte))",type:1,unit:"字节/s",value_type:"Float64"},TCP重传比例:{label_type:"",pre_as:"Avg(retrans_ratio)",type:1,unit:"%",value_type:"Float64"},TCP建连失败比例:{label_type:"",pre_as:"Avg(tcp_establish_fail_ratio)",type:1,unit:"%",value_type:"Float64"},TCP建连时延:{label_type:"",pre_as:"Avg(rtt)",type:1,unit:"微秒",value_type:"Float64"},rs_set_id:{label_type:"",pre_as:"newTag('R1')",type:0,unit:"",value_type:"String"}},Qx={OPT_STATUS:$x,DESCRIPTION:Yx,DATA:Kx,TYPE:Zx,SCHEMAS:Jx},eb=function(){return[...new Array(4)].map(()=>["rgba(255, 173, 30, 1)","rgba(255, 231, 28, 1)","rgba(255, 200, 50, 1)","rgba(206, 255, 38, 1)","rgba(100, 235, 18, 1)","rgba(91, 191, 96, 1)","rgba(46, 243, 180, 1)","rgba(52, 201, 126, 1)","rgba(50, 255, 142, 1)","rgba(73, 255, 240, 1)","rgba(126, 223, 255, 1)","rgba(47, 218, 255, 1)","rgba(84, 148, 255, 1)","rgba(131, 144, 245, 1)","rgba(54, 78, 255, 1)","rgba(137, 79, 255, 1)","rgba(200, 53, 255, 1)","rgba(255, 104, 218, 1)","rgba(255, 29, 178, 1)","rgba(255, 161, 119, 1)"]).flat()}(),tb=()=>Math.floor(Math.random()*20),ib=()=>[...new Array(80)].map((i,e)=>({root:!0,ip:e,color:eb[e],group:e,groupName:`业务系统${e+1}`}));function nb(i){const e=new Map;return i.forEach(t=>{e.has(t.ip)||e.set(t.ip,t)}),[...e.values()]}const Xc=ib();let ks=null;const Wi=new Set,oo=new Set,ur=new Set,{DATA:ei}=Qx,Mu=[];ei.nodes=nb(ei.instance_data).map(i=>{const e=Xc[tb()],t={...e,ip_0:i.ip,ip_1:e.group,root:!1};return Mu.push(t),{...e,...i,root:!1}}).concat(Xc);ei.links=[...Mu].map(i=>{const e=ei.nodes.find(n=>n.ip===i.ip_0),t=ei.nodes.find(n=>n.ip===i.ip_1);return!e.neighbors&&(e.neighbors=[]),!t.neighbors&&(t.neighbors=[]),e.neighbors.push(t),t.neighbors.push(e),!e.links&&(e.links=[]),!t.links&&(t.links=[]),e.links.push(i),t.links.push(i),i});const rb=i=>i.replace(/^rgba\(((,?\s*\d+){3}).+$/,"rgba($1, .2)"),ob=document.getElementById("3d-graph"),Yr={},Oi=Wx({extraRenderers:[new Xx]})(ob);function sb(i=ei){Oi.backgroundColor("#ff000000")}function ha(i=ei){Oi.graphData(i).zoomToFit(400).cameraPosition({x:0,y:0,z:2e3})}function Cu(){Oi.nodeResolution(15).nodeId("ip").nodeOpacity(1).nodeLabel(i=>i.root?"":i.ip).nodeColor(i=>Wi.size?Wi.has(i)?i.color:rb(i.color):i.color).nodeVal(i=>i.root?4:2).nodeThreeObject(i=>{if(i.root){const e=document.createElement("div");return e.textContent=i.groupName,e.style.backgroundImage=`linear-gradient(-87deg, ${i.color} 0%, #ffffff00)`,e.className="node-label",Yr[i.ip]=e,new jx(e)}}).nodeThreeObjectExtend(!0)}function Su(){Oi.linkSource("ip_0").linkTarget("ip_1").linkOpacity(1).linkWidth(1).linkResolution(10).linkDirectionalParticles(i=>oo.has(i)?4:0).linkDirectionalParticleWidth(4)}function ab(){Oi.onNodeClick(i=>{if(!i&&!Wi.size)return;if(i&&ks===i){$c();return}if(Wi.clear(),oo.clear(),ur.clear(),i){const r=i.neighbors.map(o=>o.ip);ei.peers_data.filter(o=>r.includes(o.ip_1)).forEach(o=>{o.color=i.color,ur.add(o)}),Wi.add(i),i.neighbors.forEach(o=>Wi.add(o)),i.links.forEach(o=>oo.add(o)),Oi.linkOpacity(.3);for(let o of Object.values(Yr))o.className="node-label label-opacity";Yr[i.ip]&&(Yr[i.ip].className="node-label")}ks=i||null,cb();const e=260,t=1+e/Math.hypot(i.x,i.y,i.z),n=i.x||i.y||i.z?{x:i.x*t,y:i.y*t,z:i.z*t}:{x:0,y:0,z:e};Oi.cameraPosition(n,i,800)}).onBackgroundClick(()=>{$c()})}function db(){Oi.d3Force("link").distance(i=>60)}function cb(){ha({...ei,links:[...ei.links,...ur]})}function $c(){Wi.clear(),oo.clear(),ks=null,ur.size&&(ur.clear(),ha(),Cu(),Su())}sb();ha();Cu();Su();ab();db();
