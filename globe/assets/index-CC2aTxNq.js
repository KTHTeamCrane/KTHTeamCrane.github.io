(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="163",Df=0,ul=1,Uf=2,au=1,Nf=2,li=3,Ci=0,pn=1,ci=2,Ti=0,Rr=1,fl=2,hl=3,dl=4,If=5,$i=100,Of=101,Ff=102,Bf=103,Hf=104,zf=200,kf=201,Vf=202,Gf=203,xo=204,yo=205,Wf=206,Xf=207,qf=208,jf=209,Yf=210,$f=211,Kf=212,Zf=213,Jf=214,Qf=0,eh=1,th=2,ra=3,nh=4,ih=5,rh=6,sh=7,Fo=0,ah=1,oh=2,Ai=0,lh=1,ch=2,uh=3,fh=4,hh=5,dh=6,ph=7,ou=300,Dr=301,Ur=302,So=303,Mo=304,ha=306,Eo=1e3,Zi=1001,bo=1002,An=1003,mh=1004,ws=1005,Un=1006,Ia=1007,Ji=1008,wi=1009,gh=1010,_h=1011,lu=1012,cu=1013,Nr=1014,bi=1015,sa=1016,uu=1017,fu=1018,fs=1020,vh=35902,xh=1021,yh=1022,$n=1023,Sh=1024,Mh=1025,Pr=1026,os=1027,Eh=1028,hu=1029,bh=1030,du=1031,pu=1033,Oa=33776,Fa=33777,Ba=33778,Ha=33779,pl=35840,ml=35841,gl=35842,_l=35843,mu=36196,vl=37492,xl=37496,yl=37808,Sl=37809,Ml=37810,El=37811,bl=37812,Tl=37813,Al=37814,wl=37815,Cl=37816,Rl=37817,Pl=37818,Ll=37819,Dl=37820,Ul=37821,za=36492,Nl=36494,Il=36495,Th=36283,Ol=36284,Fl=36285,Bl=36286,Ah=3200,wh=3201,gu=0,Ch=1,Ei="",qn="srgb",Li="srgb-linear",Bo="display-p3",da="display-p3-linear",aa="linear",Nt="srgb",oa="rec709",la="p3",or=7680,Hl=519,Rh=512,Ph=513,Lh=514,_u=515,Dh=516,Uh=517,Nh=518,Ih=519,zl=35044,kl="300 es",ui=2e3,ca=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ka=Math.PI/180,To=180/Math.PI;function hs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function dn(i,e,t){return Math.max(e,Math.min(t,i))}function Oh(i,e){return(i%e+e)%e}function Va(i,e,t){return(1-t)*i+t*e}function Yr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,r,a,l,c,h,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,h,p)}set(e,t,n,r,a,l,c,h,p){const m=this.elements;return m[0]=e,m[1]=r,m[2]=c,m[3]=t,m[4]=a,m[5]=h,m[6]=n,m[7]=l,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],h=n[6],p=n[1],m=n[4],_=n[7],v=n[2],E=n[5],C=n[8],A=r[0],x=r[3],g=r[6],O=r[1],y=r[4],b=r[7],D=r[2],B=r[5],u=r[8];return a[0]=l*A+c*O+h*D,a[3]=l*x+c*y+h*B,a[6]=l*g+c*b+h*u,a[1]=p*A+m*O+_*D,a[4]=p*x+m*y+_*B,a[7]=p*g+m*b+_*u,a[2]=v*A+E*O+C*D,a[5]=v*x+E*y+C*B,a[8]=v*g+E*b+C*u,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],h=e[6],p=e[7],m=e[8];return t*l*m-t*c*p-n*a*m+n*c*h+r*a*p-r*l*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],h=e[6],p=e[7],m=e[8],_=m*l-c*p,v=c*h-m*a,E=p*a-l*h,C=t*_+n*v+r*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(r*p-m*n)*A,e[2]=(c*n-r*l)*A,e[3]=v*A,e[4]=(m*t-r*h)*A,e[5]=(r*a-c*t)*A,e[6]=E*A,e[7]=(n*h-p*t)*A,e[8]=(l*t-n*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const h=Math.cos(a),p=Math.sin(a);return this.set(n*h,n*p,-n*(h*l+p*c)+l+e,-r*p,r*h,-r*(-p*l+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new ft;function vu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fh(){const i=ls("canvas");return i.style.display="block",i}const Vl={};function Bh(i){i in Vl||(Vl[i]=!0,console.warn(i))}const Gl=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[Li]:{transfer:aa,primaries:oa,toReference:i=>i,fromReference:i=>i},[qn]:{transfer:Nt,primaries:oa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[da]:{transfer:aa,primaries:la,toReference:i=>i.applyMatrix3(Wl),fromReference:i=>i.applyMatrix3(Gl)},[Bo]:{transfer:Nt,primaries:la,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wl),fromReference:i=>i.applyMatrix3(Gl).convertLinearToSRGB()}},Hh=new Set([Li,da]),Rt={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Cs[e].toReference,r=Cs[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Cs[i].primaries},getTransfer:function(i){return i===Ei?aa:Cs[i].transfer}};function Lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let lr;class zh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=ls("canvas")),lr.width=e.width,lr.height=e.height;const n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Lr(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Lr(t[n]/255)*255):t[n]=Lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kh=0;class xu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Xa(r[l].image)):a.push(Xa(r[l]))}else a=Xa(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vh=0;class cn extends Or{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Zi,r=Zi,a=Un,l=Ji,c=$n,h=wi,p=cn.DEFAULT_ANISOTROPY,m=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=hs(),this.name="",this.source=new xu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=ou;cn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,n=0,r=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const h=e.elements,p=h[0],m=h[4],_=h[8],v=h[1],E=h[5],C=h[9],A=h[2],x=h[6],g=h[10];if(Math.abs(m-v)<.01&&Math.abs(_-A)<.01&&Math.abs(C-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+A)<.1&&Math.abs(C+x)<.1&&Math.abs(p+E+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(p+1)/2,b=(E+1)/2,D=(g+1)/2,B=(m+v)/4,u=(_+A)/4,F=(C+x)/4;return y>b&&y>D?y<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(y),r=B/n,a=u/n):b>D?b<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),n=B/r,a=F/r):D<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),n=u/a,r=F/a),this.set(n,r,a,t),this}let O=Math.sqrt((x-C)*(x-C)+(_-A)*(_-A)+(v-m)*(v-m));return Math.abs(O)<.001&&(O=1),this.x=(x-C)/O,this.y=(_-A)/O,this.z=(v-m)/O,this.w=Math.acos((p+E+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gh extends Or{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const a=new cn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends Gh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yu extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wh extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let h=n[r+0],p=n[r+1],m=n[r+2],_=n[r+3];const v=a[l+0],E=a[l+1],C=a[l+2],A=a[l+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=E,e[t+2]=C,e[t+3]=A;return}if(_!==A||h!==v||p!==E||m!==C){let x=1-c;const g=h*v+p*E+m*C+_*A,O=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const D=Math.sqrt(y),B=Math.atan2(D,g*O);x=Math.sin(x*B)/D,c=Math.sin(c*B)/D}const b=c*O;if(h=h*x+v*b,p=p*x+E*b,m=m*x+C*b,_=_*x+A*b,x===1-c){const D=1/Math.sqrt(h*h+p*p+m*m+_*_);h*=D,p*=D,m*=D,_*=D}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],h=n[r+1],p=n[r+2],m=n[r+3],_=a[l],v=a[l+1],E=a[l+2],C=a[l+3];return e[t]=c*C+m*_+h*E-p*v,e[t+1]=h*C+m*v+p*_-c*E,e[t+2]=p*C+m*E+c*v-h*_,e[t+3]=m*C-c*_-h*v-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,h=Math.sin,p=c(n/2),m=c(r/2),_=c(a/2),v=h(n/2),E=h(r/2),C=h(a/2);switch(l){case"XYZ":this._x=v*m*_+p*E*C,this._y=p*E*_-v*m*C,this._z=p*m*C+v*E*_,this._w=p*m*_-v*E*C;break;case"YXZ":this._x=v*m*_+p*E*C,this._y=p*E*_-v*m*C,this._z=p*m*C-v*E*_,this._w=p*m*_+v*E*C;break;case"ZXY":this._x=v*m*_-p*E*C,this._y=p*E*_+v*m*C,this._z=p*m*C+v*E*_,this._w=p*m*_-v*E*C;break;case"ZYX":this._x=v*m*_-p*E*C,this._y=p*E*_+v*m*C,this._z=p*m*C-v*E*_,this._w=p*m*_+v*E*C;break;case"YZX":this._x=v*m*_+p*E*C,this._y=p*E*_+v*m*C,this._z=p*m*C-v*E*_,this._w=p*m*_-v*E*C;break;case"XZY":this._x=v*m*_-p*E*C,this._y=p*E*_-v*m*C,this._z=p*m*C+v*E*_,this._w=p*m*_+v*E*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],h=t[9],p=t[2],m=t[6],_=t[10],v=n+c+_;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(m-h)*E,this._y=(a-p)*E,this._z=(l-r)*E}else if(n>c&&n>_){const E=2*Math.sqrt(1+n-c-_);this._w=(m-h)/E,this._x=.25*E,this._y=(r+l)/E,this._z=(a+p)/E}else if(c>_){const E=2*Math.sqrt(1+c-n-_);this._w=(a-p)/E,this._x=(r+l)/E,this._y=.25*E,this._z=(h+m)/E}else{const E=2*Math.sqrt(1+_-n-c);this._w=(l-r)/E,this._x=(a+p)/E,this._y=(h+m)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,h=t._y,p=t._z,m=t._w;return this._x=n*m+l*c+r*p-a*h,this._y=r*m+l*h+a*c-n*p,this._z=a*m+l*p+n*h-r*c,this._w=l*m-n*c-r*h-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const E=1-t;return this._w=E*l+t*this._w,this._x=E*n+t*this._x,this._y=E*r+t*this._y,this._z=E*a+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,c),_=Math.sin((1-t)*m)/p,v=Math.sin(t*m)/p;return this._w=l*_+this._w*v,this._x=n*_+this._x*v,this._y=r*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,h=e.w,p=2*(l*r-c*n),m=2*(c*t-a*r),_=2*(a*n-l*t);return this.x=t+h*p+l*_-c*m,this.y=n+h*m+c*p-a*_,this.z=r+h*_+a*m-l*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,h=t.z;return this.x=r*h-a*c,this.y=a*l-n*h,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new j,Xl=new ds;class ps{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Pn):Pn.fromBufferAttribute(a,l),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Ps.subVectors(this.max,$r),cr.subVectors(e.a,$r),ur.subVectors(e.b,$r),fr.subVectors(e.c,$r),gi.subVectors(ur,cr),_i.subVectors(fr,ur),ki.subVectors(cr,fr);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-ki.z,ki.y,gi.z,0,-gi.x,_i.z,0,-_i.x,ki.z,0,-ki.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-ki.y,ki.x,0];return!ja(t,cr,ur,fr,Ps)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,cr,ur,fr,Ps))?!1:(Ls.crossVectors(gi,_i),t=[Ls.x,Ls.y,Ls.z],ja(t,cr,ur,fr,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new j,new j,new j,new j,new j,new j,new j,new j],Pn=new j,Rs=new ps,cr=new j,ur=new j,fr=new j,gi=new j,_i=new j,ki=new j,$r=new j,Ps=new j,Ls=new j,Vi=new j;function ja(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){Vi.fromArray(i,a);const c=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),h=e.dot(Vi),p=t.dot(Vi),m=n.dot(Vi);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>c)return!1}return!0}const Xh=new ps,Kr=new j,Ya=new j;class ms{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xh.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const t=Kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Kr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Ya)),this.expandByPoint(Kr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new j,$a=new j,Ds=new j,vi=new j,Ka=new j,Us=new j,Za=new j;class pa{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$a.copy(e).add(t).multiplyScalar(.5),Ds.copy(t).sub(e).normalize(),vi.copy(this.origin).sub($a);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Ds),c=vi.dot(this.direction),h=-vi.dot(Ds),p=vi.lengthSq(),m=Math.abs(1-l*l);let _,v,E,C;if(m>0)if(_=l*h-c,v=l*c-h,C=a*m,_>=0)if(v>=-C)if(v<=C){const A=1/m;_*=A,v*=A,E=_*(_+l*v+2*c)+v*(l*_+v+2*h)+p}else v=a,_=Math.max(0,-(l*v+c)),E=-_*_+v*(v+2*h)+p;else v=-a,_=Math.max(0,-(l*v+c)),E=-_*_+v*(v+2*h)+p;else v<=-C?(_=Math.max(0,-(-l*a+c)),v=_>0?-a:Math.min(Math.max(-a,-h),a),E=-_*_+v*(v+2*h)+p):v<=C?(_=0,v=Math.min(Math.max(-a,-h),a),E=v*(v+2*h)+p):(_=Math.max(0,-(l*a+c)),v=_>0?a:Math.min(Math.max(-a,-h),a),E=-_*_+v*(v+2*h)+p);else v=l>0?-a:a,_=Math.max(0,-(l*v+c)),E=-_*_+v*(v+2*h)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy($a).addScaledVector(Ds,v),E}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),r=ri.dot(ri)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,h;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(n=(e.min.x-v.x)*p,r=(e.max.x-v.x)*p):(n=(e.max.x-v.x)*p,r=(e.min.x-v.x)*p),m>=0?(a=(e.min.y-v.y)*m,l=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,l=(e.min.y-v.y)*m),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),_>=0?(c=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),n>h||c>r)||((c>n||n!==n)&&(n=c),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,r,a){Ka.subVectors(t,e),Us.subVectors(n,e),Za.crossVectors(Ka,Us);let l=this.direction.dot(Za),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;vi.subVectors(this.origin,e);const h=c*this.direction.dot(Us.crossVectors(vi,Us));if(h<0)return null;const p=c*this.direction.dot(Ka.cross(vi));if(p<0||h+p>l)return null;const m=-c*vi.dot(Za);return m<0?null:this.at(m/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,n,r,a,l,c,h,p,m,_,v,E,C,A,x){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,h,p,m,_,v,E,C,A,x)}set(e,t,n,r,a,l,c,h,p,m,_,v,E,C,A,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=a,g[5]=l,g[9]=c,g[13]=h,g[2]=p,g[6]=m,g[10]=_,g[14]=v,g[3]=E,g[7]=C,g[11]=A,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),a=1/hr.setFromMatrixColumn(e,1).length(),l=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),p=Math.sin(r),m=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=l*m,E=l*_,C=c*m,A=c*_;t[0]=h*m,t[4]=-h*_,t[8]=p,t[1]=E+C*p,t[5]=v-A*p,t[9]=-c*h,t[2]=A-v*p,t[6]=C+E*p,t[10]=l*h}else if(e.order==="YXZ"){const v=h*m,E=h*_,C=p*m,A=p*_;t[0]=v+A*c,t[4]=C*c-E,t[8]=l*p,t[1]=l*_,t[5]=l*m,t[9]=-c,t[2]=E*c-C,t[6]=A+v*c,t[10]=l*h}else if(e.order==="ZXY"){const v=h*m,E=h*_,C=p*m,A=p*_;t[0]=v-A*c,t[4]=-l*_,t[8]=C+E*c,t[1]=E+C*c,t[5]=l*m,t[9]=A-v*c,t[2]=-l*p,t[6]=c,t[10]=l*h}else if(e.order==="ZYX"){const v=l*m,E=l*_,C=c*m,A=c*_;t[0]=h*m,t[4]=C*p-E,t[8]=v*p+A,t[1]=h*_,t[5]=A*p+v,t[9]=E*p-C,t[2]=-p,t[6]=c*h,t[10]=l*h}else if(e.order==="YZX"){const v=l*h,E=l*p,C=c*h,A=c*p;t[0]=h*m,t[4]=A-v*_,t[8]=C*_+E,t[1]=_,t[5]=l*m,t[9]=-c*m,t[2]=-p*m,t[6]=E*_+C,t[10]=v-A*_}else if(e.order==="XZY"){const v=l*h,E=l*p,C=c*h,A=c*p;t[0]=h*m,t[4]=-_,t[8]=p*m,t[1]=v*_+A,t[5]=l*m,t[9]=E*_-C,t[2]=C*_-E,t[6]=c*m,t[10]=A*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qh,e,jh)}lookAt(e,t,n){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),xi.crossVectors(n,gn),xi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),xi.crossVectors(n,gn)),xi.normalize(),Ns.crossVectors(gn,xi),r[0]=xi.x,r[4]=Ns.x,r[8]=gn.x,r[1]=xi.y,r[5]=Ns.y,r[9]=gn.y,r[2]=xi.z,r[6]=Ns.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],h=n[8],p=n[12],m=n[1],_=n[5],v=n[9],E=n[13],C=n[2],A=n[6],x=n[10],g=n[14],O=n[3],y=n[7],b=n[11],D=n[15],B=r[0],u=r[4],F=r[8],w=r[12],T=r[1],H=r[5],W=r[9],V=r[13],se=r[2],ce=r[6],pe=r[10],xe=r[14],ie=r[3],ve=r[7],ye=r[11],Ne=r[15];return a[0]=l*B+c*T+h*se+p*ie,a[4]=l*u+c*H+h*ce+p*ve,a[8]=l*F+c*W+h*pe+p*ye,a[12]=l*w+c*V+h*xe+p*Ne,a[1]=m*B+_*T+v*se+E*ie,a[5]=m*u+_*H+v*ce+E*ve,a[9]=m*F+_*W+v*pe+E*ye,a[13]=m*w+_*V+v*xe+E*Ne,a[2]=C*B+A*T+x*se+g*ie,a[6]=C*u+A*H+x*ce+g*ve,a[10]=C*F+A*W+x*pe+g*ye,a[14]=C*w+A*V+x*xe+g*Ne,a[3]=O*B+y*T+b*se+D*ie,a[7]=O*u+y*H+b*ce+D*ve,a[11]=O*F+y*W+b*pe+D*ye,a[15]=O*w+y*V+b*xe+D*Ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],h=e[9],p=e[13],m=e[2],_=e[6],v=e[10],E=e[14],C=e[3],A=e[7],x=e[11],g=e[15];return C*(+a*h*_-r*p*_-a*c*v+n*p*v+r*c*E-n*h*E)+A*(+t*h*E-t*p*v+a*l*v-r*l*E+r*p*m-a*h*m)+x*(+t*p*_-t*c*E-a*l*_+n*l*E+a*c*m-n*p*m)+g*(-r*c*m-t*h*_+t*c*v+r*l*_-n*l*v+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],h=e[6],p=e[7],m=e[8],_=e[9],v=e[10],E=e[11],C=e[12],A=e[13],x=e[14],g=e[15],O=_*x*p-A*v*p+A*h*E-c*x*E-_*h*g+c*v*g,y=C*v*p-m*x*p-C*h*E+l*x*E+m*h*g-l*v*g,b=m*A*p-C*_*p+C*c*E-l*A*E-m*c*g+l*_*g,D=C*_*h-m*A*h-C*c*v+l*A*v+m*c*x-l*_*x,B=t*O+n*y+r*b+a*D;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const u=1/B;return e[0]=O*u,e[1]=(A*v*a-_*x*a-A*r*E+n*x*E+_*r*g-n*v*g)*u,e[2]=(c*x*a-A*h*a+A*r*p-n*x*p-c*r*g+n*h*g)*u,e[3]=(_*h*a-c*v*a-_*r*p+n*v*p+c*r*E-n*h*E)*u,e[4]=y*u,e[5]=(m*x*a-C*v*a+C*r*E-t*x*E-m*r*g+t*v*g)*u,e[6]=(C*h*a-l*x*a-C*r*p+t*x*p+l*r*g-t*h*g)*u,e[7]=(l*v*a-m*h*a+m*r*p-t*v*p-l*r*E+t*h*E)*u,e[8]=b*u,e[9]=(C*_*a-m*A*a-C*n*E+t*A*E+m*n*g-t*_*g)*u,e[10]=(l*A*a-C*c*a+C*n*p-t*A*p-l*n*g+t*c*g)*u,e[11]=(m*c*a-l*_*a-m*n*p+t*_*p+l*n*E-t*c*E)*u,e[12]=D*u,e[13]=(m*A*r-C*_*r+C*n*v-t*A*v-m*n*x+t*_*x)*u,e[14]=(C*c*r-l*A*r-C*n*h+t*A*h+l*n*x-t*c*x)*u,e[15]=(l*_*r-m*c*r+m*n*h-t*_*h-l*n*v+t*c*v)*u,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,h=e.z,p=a*l,m=a*c;return this.set(p*l+n,p*c-r*h,p*h+r*c,0,p*c+r*h,m*c+n,m*h-r*l,0,p*h-r*c,m*h+r*l,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,h=t._w,p=a+a,m=l+l,_=c+c,v=a*p,E=a*m,C=a*_,A=l*m,x=l*_,g=c*_,O=h*p,y=h*m,b=h*_,D=n.x,B=n.y,u=n.z;return r[0]=(1-(A+g))*D,r[1]=(E+b)*D,r[2]=(C-y)*D,r[3]=0,r[4]=(E-b)*B,r[5]=(1-(v+g))*B,r[6]=(x+O)*B,r[7]=0,r[8]=(C+y)*u,r[9]=(x-O)*u,r[10]=(1-(v+A))*u,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=hr.set(r[0],r[1],r[2]).length();const l=hr.set(r[4],r[5],r[6]).length(),c=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const p=1/a,m=1/l,_=1/c;return Ln.elements[0]*=p,Ln.elements[1]*=p,Ln.elements[2]*=p,Ln.elements[4]*=m,Ln.elements[5]*=m,Ln.elements[6]*=m,Ln.elements[8]*=_,Ln.elements[9]*=_,Ln.elements[10]*=_,t.setFromRotationMatrix(Ln),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,a,l,c=ui){const h=this.elements,p=2*a/(t-e),m=2*a/(n-r),_=(t+e)/(t-e),v=(n+r)/(n-r);let E,C;if(c===ui)E=-(l+a)/(l-a),C=-2*l*a/(l-a);else if(c===ca)E=-l/(l-a),C=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=ui){const h=this.elements,p=1/(t-e),m=1/(n-r),_=1/(l-a),v=(t+e)*p,E=(n+r)*m;let C,A;if(c===ui)C=(l+a)*_,A=-2*_;else if(c===ca)C=a*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-E,h[2]=0,h[6]=0,h[10]=A,h[14]=-C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hr=new j,Ln=new Ft,qh=new j(0,0,0),jh=new j(1,1,1),xi=new j,Ns=new j,gn=new j,ql=new Ft,jl=new ds;class Zn{constructor(e=0,t=0,n=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],h=r[1],p=r[5],m=r[9],_=r[2],v=r[6],E=r[10];switch(t){case"XYZ":this._y=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,E),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,E),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-l,p)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-dn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-l,p));break;case"YZX":this._z=Math.asin(dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,E));break;case"XZY":this._z=Math.asin(-dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yh=0;const Yl=new j,dr=new ds,si=new Ft,Is=new j,Zr=new j,$h=new j,Kh=new ds,$l=new j(1,0,0),Kl=new j(0,1,0),Zl=new j(0,0,1),Jl={type:"added"},Zh={type:"removed"},pr={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Yt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new j,t=new Zn,n=new ds,r=new j(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ft}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Zr,Is,this.up):si.lookAt(Is,Zr,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),dr.setFromRotationMatrix(si),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jl),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zh),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jl),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,$h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const c=r[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const _=h[p];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(a(e.materials,this.material[h]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];r.animations.push(a(e.animations,h))}}if(t){const c=l(e.geometries),h=l(e.materials),p=l(e.textures),m=l(e.images),_=l(e.shapes),v=l(e.skeletons),E=l(e.animations),C=l(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),p.length>0&&(n.textures=p),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),v.length>0&&(n.skeletons=v),E.length>0&&(n.animations=E),C.length>0&&(n.nodes=C)}return n.object=r,n;function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new j(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new j,ai=new j,Qa=new j,oi=new j,mr=new j,gr=new j,Ql=new j,eo=new j,to=new j,no=new j;class Yn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Dn.subVectors(e,t),r.cross(Dn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Dn.subVectors(r,t),ai.subVectors(n,t),Qa.subVectors(e,t);const l=Dn.dot(Dn),c=Dn.dot(ai),h=Dn.dot(Qa),p=ai.dot(ai),m=ai.dot(Qa),_=l*p-c*c;if(_===0)return a.set(0,0,0),null;const v=1/_,E=(p*h-c*m)*v,C=(l*m-c*h)*v;return a.set(1-E-C,C,E)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,r,a,l,c,h){return this.getBarycoord(e,t,n,r,oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,oi.x),h.addScaledVector(l,oi.y),h.addScaledVector(c,oi.z),h)}static isFrontFacing(e,t,n,r){return Dn.subVectors(n,t),ai.subVectors(e,t),Dn.cross(ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Dn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;mr.subVectors(r,n),gr.subVectors(a,n),eo.subVectors(e,n);const h=mr.dot(eo),p=gr.dot(eo);if(h<=0&&p<=0)return t.copy(n);to.subVectors(e,r);const m=mr.dot(to),_=gr.dot(to);if(m>=0&&_<=m)return t.copy(r);const v=h*_-m*p;if(v<=0&&h>=0&&m<=0)return l=h/(h-m),t.copy(n).addScaledVector(mr,l);no.subVectors(e,a);const E=mr.dot(no),C=gr.dot(no);if(C>=0&&E<=C)return t.copy(a);const A=E*p-h*C;if(A<=0&&p>=0&&C<=0)return c=p/(p-C),t.copy(n).addScaledVector(gr,c);const x=m*C-E*_;if(x<=0&&_-m>=0&&E-C>=0)return Ql.subVectors(a,r),c=(_-m)/(_-m+(E-C)),t.copy(r).addScaledVector(Ql,c);const g=1/(x+A+v);return l=A*g,c=v*g,t.copy(n).addScaledVector(mr,l).addScaledVector(gr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Os={h:0,s:0,l:0};function io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=Oh(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=io(l,a,e+1/3),this.g=io(l,a,e),this.b=io(l,a,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,t=qn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const n=Su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Rt.fromWorkingColorSpace(tn.copy(this),e),Math.round(dn(tn.r*255,0,255))*65536+Math.round(dn(tn.g*255,0,255))*256+Math.round(dn(tn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,r=tn.g,a=tn.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let h,p;const m=(c+l)/2;if(c===l)h=0,p=0;else{const _=l-c;switch(p=m<=.5?_/(l+c):_/(2-l-c),l){case n:h=(r-a)/_+(r<a?6:0);break;case r:h=(a-n)/_+2;break;case a:h=(n-r)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=qn){Rt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,r=tn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Os);const n=Va(yi.h,Os.h,t),r=Va(yi.s,Os.s,t),a=Va(yi.l,Os.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const tn=new xt;xt.NAMES=Su;let Jh=0;class tr extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Rr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=yo,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mu extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new j,Fs=new gt;class Kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),r=hn(r,this.array),a=hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),e}}class Eu extends Kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bu extends Kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends Kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qh=0;const bn=new Ft,ro=new Yt,_r=new j,_n=new ps,Jr=new ps,qt=new j;class vn extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vu(e)?bu:Eu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ft().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];_n.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];Jr.setFromBufferAttribute(c),this.morphTargetsRelative?(qt.addVectors(_n.min,Jr.min),_n.expandByPoint(qt),qt.addVectors(_n.max,Jr.max),_n.expandByPoint(qt)):(_n.expandByPoint(Jr.min),_n.expandByPoint(Jr.max))}_n.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)qt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(qt));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],h=this.morphTargetsRelative;for(let p=0,m=c.count;p<m;p++)qt.fromBufferAttribute(c,p),h&&(_r.fromBufferAttribute(e,p),qt.add(_r)),r=Math.max(r,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],h=[];for(let F=0;F<n.count;F++)c[F]=new j,h[F]=new j;const p=new j,m=new j,_=new j,v=new gt,E=new gt,C=new gt,A=new j,x=new j;function g(F,w,T){p.fromBufferAttribute(n,F),m.fromBufferAttribute(n,w),_.fromBufferAttribute(n,T),v.fromBufferAttribute(a,F),E.fromBufferAttribute(a,w),C.fromBufferAttribute(a,T),m.sub(p),_.sub(p),E.sub(v),C.sub(v);const H=1/(E.x*C.y-C.x*E.y);isFinite(H)&&(A.copy(m).multiplyScalar(C.y).addScaledVector(_,-E.y).multiplyScalar(H),x.copy(_).multiplyScalar(E.x).addScaledVector(m,-C.x).multiplyScalar(H),c[F].add(A),c[w].add(A),c[T].add(A),h[F].add(x),h[w].add(x),h[T].add(x))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let F=0,w=O.length;F<w;++F){const T=O[F],H=T.start,W=T.count;for(let V=H,se=H+W;V<se;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new j,b=new j,D=new j,B=new j;function u(F){D.fromBufferAttribute(r,F),B.copy(D);const w=c[F];y.copy(w),y.sub(D.multiplyScalar(D.dot(w))).normalize(),b.crossVectors(B,w);const H=b.dot(h[F])<0?-1:1;l.setXYZW(F,y.x,y.y,y.z,H)}for(let F=0,w=O.length;F<w;++F){const T=O[F],H=T.start,W=T.count;for(let V=H,se=H+W;V<se;V+=3)u(e.getX(V+0)),u(e.getX(V+1)),u(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,E=n.count;v<E;v++)n.setXYZ(v,0,0,0);const r=new j,a=new j,l=new j,c=new j,h=new j,p=new j,m=new j,_=new j;if(e)for(let v=0,E=e.count;v<E;v+=3){const C=e.getX(v+0),A=e.getX(v+1),x=e.getX(v+2);r.fromBufferAttribute(t,C),a.fromBufferAttribute(t,A),l.fromBufferAttribute(t,x),m.subVectors(l,a),_.subVectors(r,a),m.cross(_),c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,x),c.add(m),h.add(m),p.add(m),n.setXYZ(C,c.x,c.y,c.z),n.setXYZ(A,h.x,h.y,h.z),n.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,E=t.count;v<E;v+=3)r.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),m.subVectors(l,a),_.subVectors(r,a),m.cross(_),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(c,h){const p=c.array,m=c.itemSize,_=c.normalized,v=new p.constructor(h.length*m);let E=0,C=0;for(let A=0,x=h.length;A<x;A++){c.isInterleavedBufferAttribute?E=h[A]*c.data.stride+c.offset:E=h[A]*m;for(let g=0;g<m;g++)v[C++]=p[E++]}return new Kn(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,r=this.attributes;for(const c in r){const h=r[c],p=e(h,n);t.setAttribute(c,p)}const a=this.morphAttributes;for(const c in a){const h=[],p=a[c];for(let m=0,_=p.length;m<_;m++){const v=p[m],E=e(v,n);h.push(E)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const p=l[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const p=n[h];e.data.attributes[h]=p.toJSON(e.data)}const r={};let a=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let _=0,v=p.length;_<v;_++){const E=p[_];m.push(E.toJSON(e.data))}m.length>0&&(r[h]=m,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(t))}const a=e.morphAttributes;for(const p in a){const m=[],_=a[p];for(let v=0,E=_.length;v<E;v++)m.push(_[v].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let p=0,m=l.length;p<m;p++){const _=l[p];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new Ft,Gi=new pa,Bs=new ms,tc=new j,vr=new j,xr=new j,yr=new j,so=new j,Hs=new j,zs=new gt,ks=new gt,Vs=new gt,nc=new j,ic=new j,rc=new j,Gs=new j,Ws=new j;class ln extends Yt{constructor(e=new vn,t=new Mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Hs.set(0,0,0);for(let h=0,p=a.length;h<p;h++){const m=c[h],_=a[h];m!==0&&(so.fromBufferAttribute(_,e),l?Hs.addScaledVector(so,m):Hs.addScaledVector(so.sub(t),m))}t.add(Hs)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(a),Gi.copy(e.ray).recast(e.near),!(Bs.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Bs,tc)===null||Gi.origin.distanceToSquared(tc)>(e.far-e.near)**2))&&(ec.copy(a).invert(),Gi.copy(e.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,h=a.attributes.position,p=a.attributes.uv,m=a.attributes.uv1,_=a.attributes.normal,v=a.groups,E=a.drawRange;if(c!==null)if(Array.isArray(l))for(let C=0,A=v.length;C<A;C++){const x=v[C],g=l[x.materialIndex],O=Math.max(x.start,E.start),y=Math.min(c.count,Math.min(x.start+x.count,E.start+E.count));for(let b=O,D=y;b<D;b+=3){const B=c.getX(b),u=c.getX(b+1),F=c.getX(b+2);r=Xs(this,g,e,n,p,m,_,B,u,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const C=Math.max(0,E.start),A=Math.min(c.count,E.start+E.count);for(let x=C,g=A;x<g;x+=3){const O=c.getX(x),y=c.getX(x+1),b=c.getX(x+2);r=Xs(this,l,e,n,p,m,_,O,y,b),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(l))for(let C=0,A=v.length;C<A;C++){const x=v[C],g=l[x.materialIndex],O=Math.max(x.start,E.start),y=Math.min(h.count,Math.min(x.start+x.count,E.start+E.count));for(let b=O,D=y;b<D;b+=3){const B=b,u=b+1,F=b+2;r=Xs(this,g,e,n,p,m,_,B,u,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const C=Math.max(0,E.start),A=Math.min(h.count,E.start+E.count);for(let x=C,g=A;x<g;x+=3){const O=x,y=x+1,b=x+2;r=Xs(this,l,e,n,p,m,_,O,y,b),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function ed(i,e,t,n,r,a,l,c){let h;if(e.side===pn?h=n.intersectTriangle(l,a,r,!0,c):h=n.intersectTriangle(r,a,l,e.side===Ci,c),h===null)return null;Ws.copy(c),Ws.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Ws);return p<t.near||p>t.far?null:{distance:p,point:Ws.clone(),object:i}}function Xs(i,e,t,n,r,a,l,c,h,p){i.getVertexPosition(c,vr),i.getVertexPosition(h,xr),i.getVertexPosition(p,yr);const m=ed(i,e,t,n,vr,xr,yr,Gs);if(m){r&&(zs.fromBufferAttribute(r,c),ks.fromBufferAttribute(r,h),Vs.fromBufferAttribute(r,p),m.uv=Yn.getInterpolation(Gs,vr,xr,yr,zs,ks,Vs,new gt)),a&&(zs.fromBufferAttribute(a,c),ks.fromBufferAttribute(a,h),Vs.fromBufferAttribute(a,p),m.uv1=Yn.getInterpolation(Gs,vr,xr,yr,zs,ks,Vs,new gt)),l&&(nc.fromBufferAttribute(l,c),ic.fromBufferAttribute(l,h),rc.fromBufferAttribute(l,p),m.normal=Yn.getInterpolation(Gs,vr,xr,yr,nc,ic,rc,new j),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const _={a:c,b:h,c:p,normal:new j,materialIndex:0};Yn.getNormal(vr,xr,yr,_.normal),m.face=_}return m}class gs extends vn{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const h=[],p=[],m=[],_=[];let v=0,E=0;C("z","y","x",-1,-1,n,t,e,l,a,0),C("z","y","x",1,-1,n,t,-e,l,a,1),C("x","z","y",1,1,e,n,t,r,l,2),C("x","z","y",1,-1,e,n,-t,r,l,3),C("x","y","z",1,-1,e,t,n,r,a,4),C("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(h),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(m,3)),this.setAttribute("uv",new un(_,2));function C(A,x,g,O,y,b,D,B,u,F,w){const T=b/u,H=D/F,W=b/2,V=D/2,se=B/2,ce=u+1,pe=F+1;let xe=0,ie=0;const ve=new j;for(let ye=0;ye<pe;ye++){const Ne=ye*H-V;for(let at=0;at<ce;at++){const yt=at*T-W;ve[A]=yt*O,ve[x]=Ne*y,ve[g]=se,p.push(ve.x,ve.y,ve.z),ve[A]=0,ve[x]=0,ve[g]=B>0?1:-1,m.push(ve.x,ve.y,ve.z),_.push(at/u),_.push(1-ye/F),xe+=1}}for(let ye=0;ye<F;ye++)for(let Ne=0;Ne<u;Ne++){const at=v+Ne+ce*ye,yt=v+Ne+ce*(ye+1),ae=v+(Ne+1)+ce*(ye+1),Se=v+(Ne+1)+ce*ye;h.push(at,yt,Se),h.push(yt,ae,Se),ie+=6}c.addGroup(E,ie,w),E+=ie,v+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=Ir(i[t]);for(const r in n)e[r]=n[r]}return e}function td(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const nd={clone:Ir,merge:an};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Au extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new j,sc=new gt,ac=new gt;class Tn extends Au{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,sc,ac),t.subVectors(ac,sc)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,p=l.fullHeight;a+=l.offsetX*r/h,t-=l.offsetY*n/p,r*=l.width/h,n*=l.height/p}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sr=-90,Mr=1;class sd extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Sr,Mr,e,t);r.layers=this.layers,this.add(r);const a=new Tn(Sr,Mr,e,t);a.layers=this.layers,this.add(a);const l=new Tn(Sr,Mr,e,t);l.layers=this.layers,this.add(l);const c=new Tn(Sr,Mr,e,t);c.layers=this.layers,this.add(c);const h=new Tn(Sr,Mr,e,t);h.layers=this.layers,this.add(h);const p=new Tn(Sr,Mr,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,h]=t;for(const p of t)this.remove(p);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,h,p,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,p),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),e.render(t,m),e.setRenderTarget(_,v,E),e.xr.enabled=C,n.texture.needsPMREMUpdate=!0}}class wu extends cn{constructor(e,t,n,r,a,l,c,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,n,r,a,l,c,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ad extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new wu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gs(5,5,5),a=new Nn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Ti});a.uniforms.tEquirect.value=t;const l=new ln(r,a),c=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Un),new sd(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const ao=new j,od=new j,ld=new ft;class ji{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ao.subVectors(n,t).cross(od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ao),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ld.getNormalMatrix(e),r=this.coplanarPoint(ao).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new ms,qs=new j;class zo{constructor(e=new ji,t=new ji,n=new ji,r=new ji,a=new ji,l=new ji){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){const n=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],h=r[3],p=r[4],m=r[5],_=r[6],v=r[7],E=r[8],C=r[9],A=r[10],x=r[11],g=r[12],O=r[13],y=r[14],b=r[15];if(n[0].setComponents(h-a,v-p,x-E,b-g).normalize(),n[1].setComponents(h+a,v+p,x+E,b+g).normalize(),n[2].setComponents(h+l,v+m,x+C,b+O).normalize(),n[3].setComponents(h-l,v-m,x-C,b-O).normalize(),n[4].setComponents(h-c,v-_,x-A,b-y).normalize(),t===ui)n[5].setComponents(h+c,v+_,x+A,b+y).normalize();else if(t===ca)n[5].setComponents(c,_,A,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(qs.x=r.normal.x>0?e.max.x:e.min.x,qs.y=r.normal.y>0?e.max.y:e.min.y,qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function cd(i){const e=new WeakMap;function t(c,h){const p=c.array,m=c.usage,_=p.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,p,m),c.onUploadCallback();let E;if(p instanceof Float32Array)E=i.FLOAT;else if(p instanceof Uint16Array)c.isFloat16BufferAttribute?E=i.HALF_FLOAT:E=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=i.SHORT;else if(p instanceof Uint32Array)E=i.UNSIGNED_INT;else if(p instanceof Int32Array)E=i.INT;else if(p instanceof Int8Array)E=i.BYTE;else if(p instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:_}}function n(c,h,p){const m=h.array,_=h._updateRange,v=h.updateRanges;if(i.bindBuffer(p,c),_.count===-1&&v.length===0&&i.bufferSubData(p,0,m),v.length!==0){for(let E=0,C=v.length;E<C;E++){const A=v[E];i.bufferSubData(p,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}h.clearUpdateRanges()}_.count!==-1&&(i.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count),_.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(i.deleteBuffer(h.buffer),e.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=e.get(c);if(p===void 0)e.set(c,t(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,c,h),p.version=c.version}}return{get:r,remove:a,update:l}}class ma extends vn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),h=Math.floor(r),p=c+1,m=h+1,_=e/c,v=t/h,E=[],C=[],A=[],x=[];for(let g=0;g<m;g++){const O=g*v-l;for(let y=0;y<p;y++){const b=y*_-a;C.push(b,-O,0),A.push(0,0,1),x.push(y/c),x.push(1-g/h)}}for(let g=0;g<h;g++)for(let O=0;O<c;O++){const y=O+p*g,b=O+p*(g+1),D=O+1+p*(g+1),B=O+1+p*g;E.push(y,b,B),E.push(b,D,B)}this.setIndex(E),this.setAttribute("position",new un(C,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
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
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
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
#endif`,bd=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ud=`#define PI 3.141592653589793
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
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Id=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
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
}`,Jd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,ip=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cp=`struct PhysicalMaterial {
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,up=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,xm=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Tm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Am=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wm=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Pm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Lm=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Um=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Nm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Im=`#define STANDARD
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fm=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Bm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Hm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,km=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ut={alphahash_fragment:ud,alphahash_pars_fragment:fd,alphamap_fragment:hd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:vd,batching_vertex:xd,begin_vertex:yd,beginnormal_vertex:Sd,bsdfs:Md,iridescence_fragment:Ed,bumpmap_pars_fragment:bd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Cd,color_fragment:Rd,color_pars_fragment:Pd,color_pars_vertex:Ld,color_vertex:Dd,common:Ud,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Id,displacementmap_pars_vertex:Od,displacementmap_vertex:Fd,emissivemap_fragment:Bd,emissivemap_pars_fragment:Hd,colorspace_fragment:zd,colorspace_pars_fragment:kd,envmap_fragment:Vd,envmap_common_pars_fragment:Gd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:ip,envmap_vertex:qd,fog_vertex:jd,fog_pars_vertex:Yd,fog_fragment:$d,fog_pars_fragment:Kd,gradientmap_pars_fragment:Zd,lightmap_fragment:Jd,lightmap_pars_fragment:Qd,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:rp,lights_toon_pars_fragment:sp,lights_phong_fragment:ap,lights_phong_pars_fragment:op,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:up,lights_fragment_maps:fp,lights_fragment_end:hp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:vp,map_particle_fragment:xp,map_particle_pars_fragment:yp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Ep,morphcolor_vertex:bp,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:wp,normal_fragment_begin:Cp,normal_fragment_maps:Rp,normal_pars_fragment:Pp,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Fp,opaque_fragment:Bp,packing:Hp,premultiplied_alpha_fragment:zp,project_vertex:kp,dithering_fragment:Vp,dithering_pars_fragment:Gp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:jp,shadowmap_vertex:Yp,shadowmask_pars_fragment:$p,skinbase_vertex:Kp,skinning_pars_vertex:Zp,skinning_vertex:Jp,skinnormal_vertex:Qp,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:rm,transmission_pars_fragment:sm,uv_pars_fragment:am,uv_pars_vertex:om,uv_vertex:lm,worldpos_vertex:cm,background_vert:um,background_frag:fm,backgroundCube_vert:hm,backgroundCube_frag:dm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:vm,distanceRGBA_frag:xm,equirect_vert:ym,equirect_frag:Sm,linedashed_vert:Mm,linedashed_frag:Em,meshbasic_vert:bm,meshbasic_frag:Tm,meshlambert_vert:Am,meshlambert_frag:wm,meshmatcap_vert:Cm,meshmatcap_frag:Rm,meshnormal_vert:Pm,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Im,meshtoon_vert:Om,meshtoon_frag:Fm,points_vert:Bm,points_frag:Hm,shadow_vert:zm,shadow_frag:km,sprite_vert:Vm,sprite_frag:Gm},we={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},jn={basic:{uniforms:an([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:an([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new xt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:an([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:an([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:an([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new xt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:an([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:an([we.points,we.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:an([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:an([we.common,we.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:an([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:an([we.sprite,we.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:an([we.common,we.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:an([we.lights,we.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};jn.physical={uniforms:an([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const js={r:0,b:0,g:0},Xi=new Zn,Wm=new Ft;function Xm(i,e,t,n,r,a,l){const c=new xt(0);let h=a===!0?0:1,p,m,_=null,v=0,E=null;function C(x,g){let O=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?A(c,h):y&&y.isColor&&(A(y,1),O=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,l):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||O)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ha)?(m===void 0&&(m=new ln(new gs(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ir(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(D,B,u){this.matrixWorld.copyPosition(u.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),Xi.copy(g.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.material.uniforms.envMap.value=y,m.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(Xi)),m.material.toneMapped=Rt.getTransfer(y.colorSpace)!==Nt,(_!==y||v!==y.version||E!==i.toneMapping)&&(m.material.needsUpdate=!0,_=y,v=y.version,E=i.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):y&&y.isTexture&&(p===void 0&&(p=new ln(new ma(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ir(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=y,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(y.colorSpace)!==Nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),p.material.uniforms.uvTransform.value.copy(y.matrix),(_!==y||v!==y.version||E!==i.toneMapping)&&(p.material.needsUpdate=!0,_=y,v=y.version,E=i.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function A(x,g){x.getRGB(js,Tu(i)),n.buffers.color.setClear(js.r,js.g,js.b,g,l)}return{getClearColor:function(){return c},setClearColor:function(x,g=1){c.set(x),h=g,A(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,A(c,h)},render:C}}function qm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=v(null);let a=r,l=!1;function c(T,H,W,V,se){let ce=!1;const pe=_(V,W,H);a!==pe&&(a=pe,p(a.object)),ce=E(T,V,W,se),ce&&C(T,V,W,se),se!==null&&e.update(se,i.ELEMENT_ARRAY_BUFFER),(ce||l)&&(l=!1,b(T,H,W,V),se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function h(){return i.createVertexArray()}function p(T){return i.bindVertexArray(T)}function m(T){return i.deleteVertexArray(T)}function _(T,H,W){const V=W.wireframe===!0;let se=n[T.id];se===void 0&&(se={},n[T.id]=se);let ce=se[H.id];ce===void 0&&(ce={},se[H.id]=ce);let pe=ce[V];return pe===void 0&&(pe=v(h()),ce[V]=pe),pe}function v(T){const H=[],W=[],V=[];for(let se=0;se<t;se++)H[se]=0,W[se]=0,V[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:W,attributeDivisors:V,object:T,attributes:{},index:null}}function E(T,H,W,V){const se=a.attributes,ce=H.attributes;let pe=0;const xe=W.getAttributes();for(const ie in xe)if(xe[ie].location>=0){const ye=se[ie];let Ne=ce[ie];if(Ne===void 0&&(ie==="instanceMatrix"&&T.instanceMatrix&&(Ne=T.instanceMatrix),ie==="instanceColor"&&T.instanceColor&&(Ne=T.instanceColor)),ye===void 0||ye.attribute!==Ne||Ne&&ye.data!==Ne.data)return!0;pe++}return a.attributesNum!==pe||a.index!==V}function C(T,H,W,V){const se={},ce=H.attributes;let pe=0;const xe=W.getAttributes();for(const ie in xe)if(xe[ie].location>=0){let ye=ce[ie];ye===void 0&&(ie==="instanceMatrix"&&T.instanceMatrix&&(ye=T.instanceMatrix),ie==="instanceColor"&&T.instanceColor&&(ye=T.instanceColor));const Ne={};Ne.attribute=ye,ye&&ye.data&&(Ne.data=ye.data),se[ie]=Ne,pe++}a.attributes=se,a.attributesNum=pe,a.index=V}function A(){const T=a.newAttributes;for(let H=0,W=T.length;H<W;H++)T[H]=0}function x(T){g(T,0)}function g(T,H){const W=a.newAttributes,V=a.enabledAttributes,se=a.attributeDivisors;W[T]=1,V[T]===0&&(i.enableVertexAttribArray(T),V[T]=1),se[T]!==H&&(i.vertexAttribDivisor(T,H),se[T]=H)}function O(){const T=a.newAttributes,H=a.enabledAttributes;for(let W=0,V=H.length;W<V;W++)H[W]!==T[W]&&(i.disableVertexAttribArray(W),H[W]=0)}function y(T,H,W,V,se,ce,pe){pe===!0?i.vertexAttribIPointer(T,H,W,se,ce):i.vertexAttribPointer(T,H,W,V,se,ce)}function b(T,H,W,V){A();const se=V.attributes,ce=W.getAttributes(),pe=H.defaultAttributeValues;for(const xe in ce){const ie=ce[xe];if(ie.location>=0){let ve=se[xe];if(ve===void 0&&(xe==="instanceMatrix"&&T.instanceMatrix&&(ve=T.instanceMatrix),xe==="instanceColor"&&T.instanceColor&&(ve=T.instanceColor)),ve!==void 0){const ye=ve.normalized,Ne=ve.itemSize,at=e.get(ve);if(at===void 0)continue;const yt=at.buffer,ae=at.type,Se=at.bytesPerElement,De=ae===i.INT||ae===i.UNSIGNED_INT||ve.gpuType===cu;if(ve.isInterleavedBufferAttribute){const Pe=ve.data,st=Pe.stride,ot=ve.offset;if(Pe.isInstancedInterleavedBuffer){for(let Je=0;Je<ie.locationSize;Je++)g(ie.location+Je,Pe.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Je=0;Je<ie.locationSize;Je++)x(ie.location+Je);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Je=0;Je<ie.locationSize;Je++)y(ie.location+Je,Ne/ie.locationSize,ae,ye,st*Se,(ot+Ne/ie.locationSize*Je)*Se,De)}else{if(ve.isInstancedBufferAttribute){for(let Pe=0;Pe<ie.locationSize;Pe++)g(ie.location+Pe,ve.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Pe=0;Pe<ie.locationSize;Pe++)x(ie.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Pe=0;Pe<ie.locationSize;Pe++)y(ie.location+Pe,Ne/ie.locationSize,ae,ye,Ne*Se,Ne/ie.locationSize*Pe*Se,De)}}else if(pe!==void 0){const ye=pe[xe];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(ie.location,ye);break;case 3:i.vertexAttrib3fv(ie.location,ye);break;case 4:i.vertexAttrib4fv(ie.location,ye);break;default:i.vertexAttrib1fv(ie.location,ye)}}}}O()}function D(){F();for(const T in n){const H=n[T];for(const W in H){const V=H[W];for(const se in V)m(V[se].object),delete V[se];delete H[W]}delete n[T]}}function B(T){if(n[T.id]===void 0)return;const H=n[T.id];for(const W in H){const V=H[W];for(const se in V)m(V[se].object),delete V[se];delete H[W]}delete n[T.id]}function u(T){for(const H in n){const W=n[H];if(W[T.id]===void 0)continue;const V=W[T.id];for(const se in V)m(V[se].object),delete V[se];delete W[T.id]}}function F(){w(),l=!0,a!==r&&(a=r,p(a.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:F,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:B,releaseStatesOfProgram:u,initAttributes:A,enableAttribute:x,disableUnusedAttributes:O}}function jm(i,e,t){let n;function r(h){n=h}function a(h,p){i.drawArrays(n,h,p),t.update(p,n,1)}function l(h,p,m){m!==0&&(i.drawArraysInstanced(n,h,p,m),t.update(p,n,m))}function c(h,p,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<m;v++)this.render(h[v],p[v]);else{_.multiDrawArraysWEBGL(n,h,0,p,0,m);let v=0;for(let E=0;E<m;E++)v+=p[E];t.update(v,n,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ym(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=a(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),E=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=m>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:v,maxAttributes:E,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:x,vertexTextures:g,maxSamples:O}}function $m(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new ji,c=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const E=_.length!==0||v||n!==0||r;return r=v,n=_.length,E},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,E){const C=_.clippingPlanes,A=_.clipIntersection,x=_.clipShadows,g=i.get(_);if(!r||C===null||C.length===0||a&&!x)a?m(null):p();else{const O=a?0:n,y=O*4;let b=g.clippingState||null;h.value=b,b=m(C,v,y,E);for(let D=0;D!==y;++D)b[D]=t[D];g.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,v,E,C){const A=_!==null?_.length:0;let x=null;if(A!==0){if(x=h.value,C!==!0||x===null){const g=E+A*4,O=v.matrixWorldInverse;c.getNormalMatrix(O),(x===null||x.length<g)&&(x=new Float32Array(g));for(let y=0,b=E;y!==A;++y,b+=4)l.copy(_[y]).applyMatrix4(O,c),l.normal.toArray(x,b),x[b+3]=l.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function Km(i){let e=new WeakMap;function t(l,c){return c===So?l.mapping=Dr:c===Mo&&(l.mapping=Ur),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===So||c===Mo)if(e.has(l)){const h=e.get(l).texture;return t(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const p=new ad(h.height);return p.fromEquirectangularTexture(i,l),e.set(l,p),l.addEventListener("dispose",r),t(p.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Ru extends Au{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,l=a+p*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wr=4,oc=[.125,.215,.35,.446,.526,.582],Ki=20,oo=new Ru,lc=new xt;let lo=null,co=0,uo=0,fo=!1;const Yi=(1+Math.sqrt(5))/2,Er=1/Yi,cc=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Yi,Er),new j(0,Yi,-Er),new j(Er,0,Yi),new j(-Er,0,Yi),new j(Yi,Er,0),new j(-Yi,Er,0)];class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,co,uo),this._renderer.xr.enabled=fo,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:sa,format:$n,colorSpace:Li,depthBuffer:!1},r=fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zm(a)),this._blurMaterial=Jm(a,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,r){const c=new Tn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(lc),m.toneMapping=Ai,m.autoClear=!1;const E=new Mu({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),C=new ln(new gs,E);let A=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,A=!0):(E.color.copy(lc),A=!0);for(let g=0;g<6;g++){const O=g%3;O===0?(c.up.set(0,h[g],0),c.lookAt(p[g],0,0)):O===1?(c.up.set(0,0,h[g]),c.lookAt(0,p[g],0)):(c.up.set(0,h[g],0),c.lookAt(0,0,p[g]));const y=this._cubeSize;Ys(r,O*y,g>2?y:0,y,y),m.setRenderTarget(r),A&&m.render(C,c),m.render(e,c)}C.geometry.dispose(),C.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Dr||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new ln(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;Ys(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=cc[(r-1)%cc.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const h=this._renderer,p=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new ln(this._lodPlanes[r],p),v=p.uniforms,E=this._sizeLods[n]-1,C=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*Ki-1),A=a/C,x=isFinite(a)?1+Math.floor(m*A):Ki;x>Ki&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ki}`);const g=[];let O=0;for(let u=0;u<Ki;++u){const F=u/A,w=Math.exp(-F*F/2);g.push(w),u===0?O+=w:u<x&&(O+=2*w)}for(let u=0;u<g.length;u++)g[u]=g[u]/O;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=g,v.latitudinal.value=l==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:y}=this;v.dTheta.value=C,v.mipInt.value=y-n;const b=this._sizeLods[r],D=3*b*(r>y-wr?r-y+wr:0),B=4*(this._cubeSize-b);Ys(t,D,B,3*b,2*b),h.setRenderTarget(t),h.render(_,oo)}}function Zm(i){const e=[],t=[],n=[];let r=i;const a=i-wr+1+oc.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);t.push(c);let h=1/c;l>i-wr?h=oc[l-i+wr-1]:l===0&&(h=0),n.push(h);const p=1/(c-2),m=-p,_=1+p,v=[m,m,_,m,_,_,m,m,_,_,m,_],E=6,C=6,A=3,x=2,g=1,O=new Float32Array(A*C*E),y=new Float32Array(x*C*E),b=new Float32Array(g*C*E);for(let B=0;B<E;B++){const u=B%3*2/3-1,F=B>2?0:-1,w=[u,F,0,u+2/3,F,0,u+2/3,F+1,0,u,F,0,u+2/3,F+1,0,u,F+1,0];O.set(w,A*C*B),y.set(v,x*C*B);const T=[B,B,B,B,B,B];b.set(T,g*C*B)}const D=new vn;D.setAttribute("position",new Kn(O,A)),D.setAttribute("uv",new Kn(y,x)),D.setAttribute("faceIndex",new Kn(b,g)),e.push(D),r>wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fc(i,e,t){const n=new er(i,e,t);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jm(i,e,t){const n=new Float32Array(Ki),r=new j(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hc(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function dc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}function Qm(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,p=h===So||h===Mo,m=h===Dr||h===Ur;if(p||m){let _=e.get(c);const v=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new uc(i)),_=p?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const E=c.image;return p&&E&&E.height>0||m&&E&&r(E)?(t===null&&(t=new uc(i)),_=p?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",a),_.texture):null}}}return c}function r(c){let h=0;const p=6;for(let m=0;m<p;m++)c[m]!==void 0&&h++;return h===p}function a(c){const h=c.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function eg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function tg(i,e,t,n){const r={},a=new WeakMap;function l(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const C in v.attributes)e.remove(v.attributes[C]);for(const C in v.morphAttributes){const A=v.morphAttributes[C];for(let x=0,g=A.length;x<g;x++)e.remove(A[x])}v.removeEventListener("dispose",l),delete r[v.id];const E=a.get(v);E&&(e.remove(E),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return r[v.id]===!0||(v.addEventListener("dispose",l),r[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const C in v)e.update(v[C],i.ARRAY_BUFFER);const E=_.morphAttributes;for(const C in E){const A=E[C];for(let x=0,g=A.length;x<g;x++)e.update(A[x],i.ARRAY_BUFFER)}}function p(_){const v=[],E=_.index,C=_.attributes.position;let A=0;if(E!==null){const O=E.array;A=E.version;for(let y=0,b=O.length;y<b;y+=3){const D=O[y+0],B=O[y+1],u=O[y+2];v.push(D,B,B,u,u,D)}}else if(C!==void 0){const O=C.array;A=C.version;for(let y=0,b=O.length/3-1;y<b;y+=3){const D=y+0,B=y+1,u=y+2;v.push(D,B,B,u,u,D)}}else return;const x=new(vu(v)?bu:Eu)(v,1);x.version=A;const g=a.get(_);g&&e.remove(g),a.set(_,x)}function m(_){const v=a.get(_);if(v){const E=_.index;E!==null&&v.version<E.version&&p(_)}else p(_);return a.get(_)}return{get:c,update:h,getWireframeAttribute:m}}function ng(i,e,t){let n;function r(_){n=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function h(_,v){i.drawElements(n,v,a,_*l),t.update(v,n,1)}function p(_,v,E){E!==0&&(i.drawElementsInstanced(n,v,a,_*l,E),t.update(v,n,E))}function m(_,v,E){if(E===0)return;const C=e.get("WEBGL_multi_draw");if(C===null)for(let A=0;A<E;A++)this.render(_[A]/l,v[A]);else{C.multiDrawElementsWEBGL(n,v,0,a,_,0,E);let A=0;for(let x=0;x<E;x++)A+=v[x];t.update(A,n,1)}}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function ig(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function rg(i,e,t){const n=new WeakMap,r=new jt;function a(l,c,h){const p=l.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=m!==void 0?m.length:0;let v=n.get(c);if(v===void 0||v.count!==_){let w=function(){u.dispose(),n.delete(c),c.removeEventListener("dispose",w)};v!==void 0&&v.texture.dispose();const E=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],g=c.morphAttributes.normal||[],O=c.morphAttributes.color||[];let y=0;E===!0&&(y=1),C===!0&&(y=2),A===!0&&(y=3);let b=c.attributes.position.count*y,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const B=new Float32Array(b*D*4*_),u=new yu(B,b,D,_);u.type=bi,u.needsUpdate=!0;const F=y*4;for(let T=0;T<_;T++){const H=x[T],W=g[T],V=O[T],se=b*D*4*T;for(let ce=0;ce<H.count;ce++){const pe=ce*F;E===!0&&(r.fromBufferAttribute(H,ce),B[se+pe+0]=r.x,B[se+pe+1]=r.y,B[se+pe+2]=r.z,B[se+pe+3]=0),C===!0&&(r.fromBufferAttribute(W,ce),B[se+pe+4]=r.x,B[se+pe+5]=r.y,B[se+pe+6]=r.z,B[se+pe+7]=0),A===!0&&(r.fromBufferAttribute(V,ce),B[se+pe+8]=r.x,B[se+pe+9]=r.y,B[se+pe+10]=r.z,B[se+pe+11]=V.itemSize===4?r.w:1)}}v={count:_,texture:u,size:new gt(b,D)},n.set(c,v),c.addEventListener("dispose",w)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let E=0;for(let A=0;A<p.length;A++)E+=p[A];const C=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",C),h.getUniforms().setValue(i,"morphTargetInfluences",p)}h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:a}}function sg(i,e,t,n){let r=new WeakMap;function a(h){const p=n.render.frame,m=h.geometry,_=e.get(h,m);if(r.get(_)!==p&&(e.update(_),r.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==p&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,p))),h.isSkinnedMesh){const v=h.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function l(){r=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:l}}class Pu extends cn{constructor(e,t,n,r,a,l,c,h,p,m){if(m=m!==void 0?m:Pr,m!==Pr&&m!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Pr&&(n=Nr),n===void 0&&m===os&&(n=fs),super(null,r,a,l,c,h,m,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:An,this.minFilter=h!==void 0?h:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lu=new cn,Du=new Pu(1,1);Du.compareFunction=_u;const Uu=new yu,Nu=new Wh,Iu=new wu,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function Fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=pc[r];if(a===void 0&&(a=new Float32Array(r),pc[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ga(i,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),Wt(t,n)}}function fg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),Wt(t,n)}}function hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),Wt(t,n)}}function dg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function _g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Sg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?Du:Lu;t.setTexture2D(e||a,r)}function Mg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nu,r)}function Eg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Iu,r)}function bg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Uu,r)}function Tg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return ug;case 35675:return fg;case 35676:return hg;case 5124:case 35670:return dg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return bg}}function Ag(i,e){i.uniform1fv(this.addr,e)}function wg(i,e){const t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Cg(i,e){const t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Rg(i,e){const t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Pg(i,e){const t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lg(i,e){const t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dg(i,e){const t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ug(i,e){i.uniform1iv(this.addr,e)}function Ng(i,e){i.uniform2iv(this.addr,e)}function Ig(i,e){i.uniform3iv(this.addr,e)}function Og(i,e){i.uniform4iv(this.addr,e)}function Fg(i,e){i.uniform1uiv(this.addr,e)}function Bg(i,e){i.uniform2uiv(this.addr,e)}function Hg(i,e){i.uniform3uiv(this.addr,e)}function zg(i,e){i.uniform4uiv(this.addr,e)}function kg(i,e,t){const n=this.cache,r=e.length,a=ga(t,r);Gt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||Lu,a[l])}function Vg(i,e,t){const n=this.cache,r=e.length,a=ga(t,r);Gt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Nu,a[l])}function Gg(i,e,t){const n=this.cache,r=e.length,a=ga(t,r);Gt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Iu,a[l])}function Wg(i,e,t){const n=this.cache,r=e.length,a=ga(t,r);Gt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Uu,a[l])}function Xg(i){switch(i){case 5126:return Ag;case 35664:return wg;case 35665:return Cg;case 35666:return Rg;case 35674:return Pg;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Ig;case 35669:case 35673:return Og;case 5125:return Fg;case 36294:return Bg;case 36295:return Hg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}class qg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}}class jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}}class Yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function xc(i,e){i.seq.push(e),i.map[e.id]=e}function $g(i,e,t){const n=i.name,r=n.length;for(ho.lastIndex=0;;){const a=ho.exec(n),l=ho.lastIndex;let c=a[1];const h=a[2]==="]",p=a[3];if(h&&(c=c|0),p===void 0||p==="["&&l+2===r){xc(t,p===void 0?new qg(c,i,e):new jg(c,i,e));break}else{let _=t.map[c];_===void 0&&(_=new Yg(c),xc(t,_)),t=_}}}class na{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);$g(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function yc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kg=37297;let Zg=0;function Jg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}function Qg(i){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(i);let n;switch(e===t?n="":e===la&&t===oa?n="LinearDisplayP3ToLinearSRGB":e===oa&&t===la&&(n="LinearSRGBToLinearDisplayP3"),i){case Li:case da:return[n,"LinearTransferOETF"];case qn:case Bo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Jg(i.getShaderSource(e),l)}else return r}function e_(i,e){const t=Qg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function t_(i,e){let t;switch(e){case lh:t="Linear";break;case ch:t="Reinhard";break;case uh:t="OptimizedCineon";break;case fh:t="ACESFilmic";break;case dh:t="AgX";break;case ph:t="Neutral";break;case hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function i_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function is(i){return i!==""}function Mc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ec(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(i){return i.replace(s_,o_)}const a_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function o_(i,e){let t=ut[e];if(t===void 0){const n=a_.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ao(t)}const l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(i){return i.replace(l_,c_)}function c_(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Tc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===au?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function f_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Dr:case Ur:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function d_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fo:e="ENVMAP_BLENDING_MULTIPLY";break;case ah:e="ENVMAP_BLENDING_MIX";break;case oh:e="ENVMAP_BLENDING_ADD";break}return e}function p_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function m_(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const h=u_(t),p=f_(t),m=h_(t),_=d_(t),v=p_(t),E=n_(t),C=i_(a),A=r.createProgram();let x,g,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(is).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(is).join(`
`),g.length>0&&(g+=`
`)):(x=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),g=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ai?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),l=Ao(l),l=Mc(l,t),l=Ec(l,t),c=Ao(c),c=Mc(c,t),c=Ec(c,t),l=bc(l),c=bc(c),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=O+x+l,b=O+g+c,D=yc(r,r.VERTEX_SHADER,y),B=yc(r,r.FRAGMENT_SHADER,b);r.attachShader(A,D),r.attachShader(A,B),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function u(H){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(A).trim(),V=r.getShaderInfoLog(D).trim(),se=r.getShaderInfoLog(B).trim();let ce=!0,pe=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(ce=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,D,B);else{const xe=Sc(r,D,"vertex"),ie=Sc(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+W+`
`+xe+`
`+ie)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||se==="")&&(pe=!1);pe&&(H.diagnostics={runnable:ce,programLog:W,vertexShader:{log:V,prefix:x},fragmentShader:{log:se,prefix:g}})}r.deleteShader(D),r.deleteShader(B),F=new na(r,A),w=r_(r,A)}let F;this.getUniforms=function(){return F===void 0&&u(this),F};let w;this.getAttributes=function(){return w===void 0&&u(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(A,Kg)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=B,this}let g_=0;class __{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new v_(e),t.set(e,n)),n}}class v_{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}}function x_(i,e,t,n,r,a,l){const c=new Ho,h=new __,p=new Set,m=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let E=r.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function x(w,T,H,W,V){const se=W.fog,ce=V.geometry,pe=w.isMeshStandardMaterial?W.environment:null,xe=(w.isMeshStandardMaterial?t:e).get(w.envMap||pe),ie=xe&&xe.mapping===ha?xe.image.height:null,ve=C[w.type];w.precision!==null&&(E=r.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const ye=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ne=ye!==void 0?ye.length:0;let at=0;ce.morphAttributes.position!==void 0&&(at=1),ce.morphAttributes.normal!==void 0&&(at=2),ce.morphAttributes.color!==void 0&&(at=3);let yt,ae,Se,De;if(ve){const bt=jn[ve];yt=bt.vertexShader,ae=bt.fragmentShader}else yt=w.vertexShader,ae=w.fragmentShader,h.update(w),Se=h.getVertexShaderID(w),De=h.getFragmentShaderID(w);const Pe=i.getRenderTarget(),st=V.isInstancedMesh===!0,ot=V.isBatchedMesh===!0,Je=!!w.map,K=!!w.matcap,nt=!!xe,Xe=!!w.aoMap,Bt=!!w.lightMap,$e=!!w.bumpMap,Et=!!w.normalMap,I=!!w.displacementMap,P=!!w.emissiveMap,re=!!w.metalnessMap,he=!!w.roughnessMap,me=w.anisotropy>0,de=w.clearcoat>0,Ve=w.iridescence>0,_e=w.sheen>0,ue=w.transmission>0,Ue=me&&!!w.anisotropyMap,Te=de&&!!w.clearcoatMap,Le=de&&!!w.clearcoatNormalMap,Qe=de&&!!w.clearcoatRoughnessMap,Ie=Ve&&!!w.iridescenceMap,Be=Ve&&!!w.iridescenceThicknessMap,lt=_e&&!!w.sheenColorMap,it=_e&&!!w.sheenRoughnessMap,ht=!!w.specularMap,dt=!!w.specularColorMap,Lt=!!w.specularIntensityMap,He=ue&&!!w.transmissionMap,z=ue&&!!w.thicknessMap,be=!!w.gradientMap,Ee=!!w.alphaMap,Oe=w.alphaTest>0,ke=!!w.alphaHash,Tt=!!w.extensions;let Pt=Ai;w.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Pt=i.toneMapping);const _t={shaderID:ve,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:ae,defines:w.defines,customVertexShaderID:Se,customFragmentShaderID:De,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:ot,instancing:st,instancingColor:st&&V.instanceColor!==null,instancingMorph:st&&V.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Li,alphaToCoverage:!!w.alphaToCoverage,map:Je,matcap:K,envMap:nt,envMapMode:nt&&xe.mapping,envMapCubeUVHeight:ie,aoMap:Xe,lightMap:Bt,bumpMap:$e,normalMap:Et,displacementMap:v&&I,emissiveMap:P,normalMapObjectSpace:Et&&w.normalMapType===Ch,normalMapTangentSpace:Et&&w.normalMapType===gu,metalnessMap:re,roughnessMap:he,anisotropy:me,anisotropyMap:Ue,clearcoat:de,clearcoatMap:Te,clearcoatNormalMap:Le,clearcoatRoughnessMap:Qe,iridescence:Ve,iridescenceMap:Ie,iridescenceThicknessMap:Be,sheen:_e,sheenColorMap:lt,sheenRoughnessMap:it,specularMap:ht,specularColorMap:dt,specularIntensityMap:Lt,transmission:ue,transmissionMap:He,thicknessMap:z,gradientMap:be,opaque:w.transparent===!1&&w.blending===Rr&&w.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Oe,alphaHash:ke,combine:w.combine,mapUv:Je&&A(w.map.channel),aoMapUv:Xe&&A(w.aoMap.channel),lightMapUv:Bt&&A(w.lightMap.channel),bumpMapUv:$e&&A(w.bumpMap.channel),normalMapUv:Et&&A(w.normalMap.channel),displacementMapUv:I&&A(w.displacementMap.channel),emissiveMapUv:P&&A(w.emissiveMap.channel),metalnessMapUv:re&&A(w.metalnessMap.channel),roughnessMapUv:he&&A(w.roughnessMap.channel),anisotropyMapUv:Ue&&A(w.anisotropyMap.channel),clearcoatMapUv:Te&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:it&&A(w.sheenRoughnessMap.channel),specularMapUv:ht&&A(w.specularMap.channel),specularColorMapUv:dt&&A(w.specularColorMap.channel),specularIntensityMapUv:Lt&&A(w.specularIntensityMap.channel),transmissionMapUv:He&&A(w.transmissionMap.channel),thicknessMapUv:z&&A(w.thicknessMap.channel),alphaMapUv:Ee&&A(w.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Et||me),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ce.attributes.uv&&(Je||Ee),fog:!!se,useFog:w.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:V.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:at,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Je&&w.map.isVideoTexture===!0&&Rt.getTransfer(w.map.colorSpace)===Nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ci,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Tt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Tt&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return _t.vertexUv1s=p.has(1),_t.vertexUv2s=p.has(2),_t.vertexUv3s=p.has(3),p.clear(),_t}function g(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)T.push(H),T.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(O(T,w),y(T,w),T.push(i.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function O(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function y(w,T){c.disableAll(),T.supportsVertexTextures&&c.enable(0),T.instancing&&c.enable(1),T.instancingColor&&c.enable(2),T.instancingMorph&&c.enable(3),T.matcap&&c.enable(4),T.envMap&&c.enable(5),T.normalMapObjectSpace&&c.enable(6),T.normalMapTangentSpace&&c.enable(7),T.clearcoat&&c.enable(8),T.iridescence&&c.enable(9),T.alphaTest&&c.enable(10),T.vertexColors&&c.enable(11),T.vertexAlphas&&c.enable(12),T.vertexUv1s&&c.enable(13),T.vertexUv2s&&c.enable(14),T.vertexUv3s&&c.enable(15),T.vertexTangents&&c.enable(16),T.anisotropy&&c.enable(17),T.alphaHash&&c.enable(18),T.batching&&c.enable(19),w.push(c.mask),c.disableAll(),T.fog&&c.enable(0),T.useFog&&c.enable(1),T.flatShading&&c.enable(2),T.logarithmicDepthBuffer&&c.enable(3),T.skinning&&c.enable(4),T.morphTargets&&c.enable(5),T.morphNormals&&c.enable(6),T.morphColors&&c.enable(7),T.premultipliedAlpha&&c.enable(8),T.shadowMapEnabled&&c.enable(9),T.useLegacyLights&&c.enable(10),T.doubleSided&&c.enable(11),T.flipSided&&c.enable(12),T.useDepthPacking&&c.enable(13),T.dithering&&c.enable(14),T.transmission&&c.enable(15),T.sheen&&c.enable(16),T.opaque&&c.enable(17),T.pointsUvs&&c.enable(18),T.decodeVideoTexture&&c.enable(19),T.alphaToCoverage&&c.enable(20),w.push(c.mask)}function b(w){const T=C[w.type];let H;if(T){const W=jn[T];H=nd.clone(W.uniforms)}else H=w.uniforms;return H}function D(w,T){let H;for(let W=0,V=m.length;W<V;W++){const se=m[W];if(se.cacheKey===T){H=se,++H.usedTimes;break}}return H===void 0&&(H=new m_(i,T,w,a),m.push(H)),H}function B(w){if(--w.usedTimes===0){const T=m.indexOf(w);m[T]=m[m.length-1],m.pop(),w.destroy()}}function u(w){h.remove(w)}function F(){h.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:D,releaseProgram:B,releaseShaderCache:u,programs:m,dispose:F}}function y_(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function S_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ac(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(_,v,E,C,A,x){let g=i[e];return g===void 0?(g={id:_.id,object:_,geometry:v,material:E,groupOrder:C,renderOrder:_.renderOrder,z:A,group:x},i[e]=g):(g.id=_.id,g.object=_,g.geometry=v,g.material=E,g.groupOrder=C,g.renderOrder=_.renderOrder,g.z=A,g.group=x),e++,g}function c(_,v,E,C,A,x){const g=l(_,v,E,C,A,x);E.transmission>0?n.push(g):E.transparent===!0?r.push(g):t.push(g)}function h(_,v,E,C,A,x){const g=l(_,v,E,C,A,x);E.transmission>0?n.unshift(g):E.transparent===!0?r.unshift(g):t.unshift(g)}function p(_,v){t.length>1&&t.sort(_||S_),n.length>1&&n.sort(v||Ac),r.length>1&&r.sort(v||Ac)}function m(){for(let _=e,v=i.length;_<v;_++){const E=i[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:h,finish:m,sort:p}}function M_(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new wc,i.set(n,[l])):r>=a.length?(l=new wc,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function E_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new xt};break;case"SpotLight":t={position:new j,direction:new j,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function b_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let T_=0;function A_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function w_(i){const e=new E_,t=b_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new j);const r=new j,a=new Ft,l=new Ft;function c(p,m){let _=0,v=0,E=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let C=0,A=0,x=0,g=0,O=0,y=0,b=0,D=0,B=0,u=0,F=0;p.sort(A_);const w=m===!0?Math.PI:1;for(let H=0,W=p.length;H<W;H++){const V=p[H],se=V.color,ce=V.intensity,pe=V.distance,xe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=se.r*ce*w,v+=se.g*ce*w,E+=se.b*ce*w;else if(V.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(V.sh.coefficients[ie],ce);F++}else if(V.isDirectionalLight){const ie=e.get(V);if(ie.color.copy(V.color).multiplyScalar(V.intensity*w),V.castShadow){const ve=V.shadow,ye=t.get(V);ye.shadowBias=ve.bias,ye.shadowNormalBias=ve.normalBias,ye.shadowRadius=ve.radius,ye.shadowMapSize=ve.mapSize,n.directionalShadow[C]=ye,n.directionalShadowMap[C]=xe,n.directionalShadowMatrix[C]=V.shadow.matrix,y++}n.directional[C]=ie,C++}else if(V.isSpotLight){const ie=e.get(V);ie.position.setFromMatrixPosition(V.matrixWorld),ie.color.copy(se).multiplyScalar(ce*w),ie.distance=pe,ie.coneCos=Math.cos(V.angle),ie.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ie.decay=V.decay,n.spot[x]=ie;const ve=V.shadow;if(V.map&&(n.spotLightMap[B]=V.map,B++,ve.updateMatrices(V),V.castShadow&&u++),n.spotLightMatrix[x]=ve.matrix,V.castShadow){const ye=t.get(V);ye.shadowBias=ve.bias,ye.shadowNormalBias=ve.normalBias,ye.shadowRadius=ve.radius,ye.shadowMapSize=ve.mapSize,n.spotShadow[x]=ye,n.spotShadowMap[x]=xe,D++}x++}else if(V.isRectAreaLight){const ie=e.get(V);ie.color.copy(se).multiplyScalar(ce),ie.halfWidth.set(V.width*.5,0,0),ie.halfHeight.set(0,V.height*.5,0),n.rectArea[g]=ie,g++}else if(V.isPointLight){const ie=e.get(V);if(ie.color.copy(V.color).multiplyScalar(V.intensity*w),ie.distance=V.distance,ie.decay=V.decay,V.castShadow){const ve=V.shadow,ye=t.get(V);ye.shadowBias=ve.bias,ye.shadowNormalBias=ve.normalBias,ye.shadowRadius=ve.radius,ye.shadowMapSize=ve.mapSize,ye.shadowCameraNear=ve.camera.near,ye.shadowCameraFar=ve.camera.far,n.pointShadow[A]=ye,n.pointShadowMap[A]=xe,n.pointShadowMatrix[A]=V.shadow.matrix,b++}n.point[A]=ie,A++}else if(V.isHemisphereLight){const ie=e.get(V);ie.skyColor.copy(V.color).multiplyScalar(ce*w),ie.groundColor.copy(V.groundColor).multiplyScalar(ce*w),n.hemi[O]=ie,O++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=_,n.ambient[1]=v,n.ambient[2]=E;const T=n.hash;(T.directionalLength!==C||T.pointLength!==A||T.spotLength!==x||T.rectAreaLength!==g||T.hemiLength!==O||T.numDirectionalShadows!==y||T.numPointShadows!==b||T.numSpotShadows!==D||T.numSpotMaps!==B||T.numLightProbes!==F)&&(n.directional.length=C,n.spot.length=x,n.rectArea.length=g,n.point.length=A,n.hemi.length=O,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=D+B-u,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=u,n.numLightProbes=F,T.directionalLength=C,T.pointLength=A,T.spotLength=x,T.rectAreaLength=g,T.hemiLength=O,T.numDirectionalShadows=y,T.numPointShadows=b,T.numSpotShadows=D,T.numSpotMaps=B,T.numLightProbes=F,n.version=T_++)}function h(p,m){let _=0,v=0,E=0,C=0,A=0;const x=m.matrixWorldInverse;for(let g=0,O=p.length;g<O;g++){const y=p[g];if(y.isDirectionalLight){const b=n.directional[_];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(x),_++}else if(y.isSpotLight){const b=n.spot[E];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(x),E++}else if(y.isRectAreaLight){const b=n.rectArea[C];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),l.identity(),a.copy(y.matrixWorld),a.premultiply(x),l.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),C++}else if(y.isPointLight){const b=n.point[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),v++}else if(y.isHemisphereLight){const b=n.hemi[A];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(x),A++}}}return{setup:c,setupView:h,state:n}}function Cc(i){const e=new w_(i),t=[],n=[];function r(){t.length=0,n.length=0}function a(m){t.push(m)}function l(m){n.push(m)}function c(m){e.setup(t,m)}function h(m){e.setupView(t,m)}return{init:r,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l}}function C_(i){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let c;return l===void 0?(c=new Cc(i),e.set(r,[c])):a>=l.length?(c=new Cc(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class R_ extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P_ extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`;function U_(i,e,t){let n=new zo;const r=new gt,a=new gt,l=new jt,c=new R_({depthPacking:wh}),h=new P_,p={},m=t.maxTextureSize,_={[Ci]:pn,[pn]:Ci,[ci]:ci},v=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const C=new vn;C.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ln(C,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let g=this.type;this.render=function(B,u,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const w=i.getRenderTarget(),T=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Ti),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=g!==li&&this.type===li,se=g===li&&this.type!==li;for(let ce=0,pe=B.length;ce<pe;ce++){const xe=B[ce],ie=xe.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",xe,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);const ve=ie.getFrameExtents();if(r.multiply(ve),a.copy(ie.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/ve.x),r.x=a.x*ve.x,ie.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/ve.y),r.y=a.y*ve.y,ie.mapSize.y=a.y)),ie.map===null||V===!0||se===!0){const Ne=this.type!==li?{minFilter:An,magFilter:An}:{};ie.map!==null&&ie.map.dispose(),ie.map=new er(r.x,r.y,Ne),ie.map.texture.name=xe.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const ye=ie.getViewportCount();for(let Ne=0;Ne<ye;Ne++){const at=ie.getViewport(Ne);l.set(a.x*at.x,a.y*at.y,a.x*at.z,a.y*at.w),W.viewport(l),ie.updateMatrices(xe,Ne),n=ie.getFrustum(),b(u,F,ie.camera,xe,this.type)}ie.isPointLightShadow!==!0&&this.type===li&&O(ie,F),ie.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(w,T,H)};function O(B,u){const F=e.update(A);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new er(r.x,r.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(u,null,F,v,A,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(u,null,F,E,A,null)}function y(B,u,F,w){let T=null;const H=F.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)T=H;else if(T=F.isPointLight===!0?h:c,i.localClippingEnabled&&u.clipShadows===!0&&Array.isArray(u.clippingPlanes)&&u.clippingPlanes.length!==0||u.displacementMap&&u.displacementScale!==0||u.alphaMap&&u.alphaTest>0||u.map&&u.alphaTest>0){const W=T.uuid,V=u.uuid;let se=p[W];se===void 0&&(se={},p[W]=se);let ce=se[V];ce===void 0&&(ce=T.clone(),se[V]=ce,u.addEventListener("dispose",D)),T=ce}if(T.visible=u.visible,T.wireframe=u.wireframe,w===li?T.side=u.shadowSide!==null?u.shadowSide:u.side:T.side=u.shadowSide!==null?u.shadowSide:_[u.side],T.alphaMap=u.alphaMap,T.alphaTest=u.alphaTest,T.map=u.map,T.clipShadows=u.clipShadows,T.clippingPlanes=u.clippingPlanes,T.clipIntersection=u.clipIntersection,T.displacementMap=u.displacementMap,T.displacementScale=u.displacementScale,T.displacementBias=u.displacementBias,T.wireframeLinewidth=u.wireframeLinewidth,T.linewidth=u.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=i.properties.get(T);W.light=F}return T}function b(B,u,F,w,T){if(B.visible===!1)return;if(B.layers.test(u.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&T===li)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,B.matrixWorld);const V=e.update(B),se=B.material;if(Array.isArray(se)){const ce=V.groups;for(let pe=0,xe=ce.length;pe<xe;pe++){const ie=ce[pe],ve=se[ie.materialIndex];if(ve&&ve.visible){const ye=y(B,ve,w,T);B.onBeforeShadow(i,B,u,F,V,ye,ie),i.renderBufferDirect(F,null,V,ye,B,ie),B.onAfterShadow(i,B,u,F,V,ye,ie)}}}else if(se.visible){const ce=y(B,se,w,T);B.onBeforeShadow(i,B,u,F,V,ce,null),i.renderBufferDirect(F,null,V,ce,B,null),B.onAfterShadow(i,B,u,F,V,ce,null)}}const W=B.children;for(let V=0,se=W.length;V<se;V++)b(W[V],u,F,w,T)}function D(B){B.target.removeEventListener("dispose",D);for(const F in p){const w=p[F],T=B.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function N_(i){function e(){let z=!1;const be=new jt;let Ee=null;const Oe=new jt(0,0,0,0);return{setMask:function(ke){Ee!==ke&&!z&&(i.colorMask(ke,ke,ke,ke),Ee=ke)},setLocked:function(ke){z=ke},setClear:function(ke,Tt,Pt,_t,bt){bt===!0&&(ke*=_t,Tt*=_t,Pt*=_t),be.set(ke,Tt,Pt,_t),Oe.equals(be)===!1&&(i.clearColor(ke,Tt,Pt,_t),Oe.copy(be))},reset:function(){z=!1,Ee=null,Oe.set(-1,0,0,0)}}}function t(){let z=!1,be=null,Ee=null,Oe=null;return{setTest:function(ke){ke?De(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(ke){be!==ke&&!z&&(i.depthMask(ke),be=ke)},setFunc:function(ke){if(Ee!==ke){switch(ke){case Qf:i.depthFunc(i.NEVER);break;case eh:i.depthFunc(i.ALWAYS);break;case th:i.depthFunc(i.LESS);break;case ra:i.depthFunc(i.LEQUAL);break;case nh:i.depthFunc(i.EQUAL);break;case ih:i.depthFunc(i.GEQUAL);break;case rh:i.depthFunc(i.GREATER);break;case sh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ke}},setLocked:function(ke){z=ke},setClear:function(ke){Oe!==ke&&(i.clearDepth(ke),Oe=ke)},reset:function(){z=!1,be=null,Ee=null,Oe=null}}}function n(){let z=!1,be=null,Ee=null,Oe=null,ke=null,Tt=null,Pt=null,_t=null,bt=null;return{setTest:function(At){z||(At?De(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(At){be!==At&&!z&&(i.stencilMask(At),be=At)},setFunc:function(At,yn,mn){(Ee!==At||Oe!==yn||ke!==mn)&&(i.stencilFunc(At,yn,mn),Ee=At,Oe=yn,ke=mn)},setOp:function(At,yn,mn){(Tt!==At||Pt!==yn||_t!==mn)&&(i.stencilOp(At,yn,mn),Tt=At,Pt=yn,_t=mn)},setLocked:function(At){z=At},setClear:function(At){bt!==At&&(i.clearStencil(At),bt=At)},reset:function(){z=!1,be=null,Ee=null,Oe=null,ke=null,Tt=null,Pt=null,_t=null,bt=null}}}const r=new e,a=new t,l=new n,c=new WeakMap,h=new WeakMap;let p={},m={},_=new WeakMap,v=[],E=null,C=!1,A=null,x=null,g=null,O=null,y=null,b=null,D=null,B=new xt(0,0,0),u=0,F=!1,w=null,T=null,H=null,W=null,V=null;const se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,pe=0;const xe=i.getParameter(i.VERSION);xe.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(xe)[1]),ce=pe>=1):xe.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),ce=pe>=2);let ie=null,ve={};const ye=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),at=new jt().fromArray(ye),yt=new jt().fromArray(Ne);function ae(z,be,Ee,Oe){const ke=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(z,Tt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<Ee;Pt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(be+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return Tt}const Se={};Se[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),De(i.DEPTH_TEST),a.setFunc(ra),$e(!1),Et(ul),De(i.CULL_FACE),Xe(Ti);function De(z){p[z]!==!0&&(i.enable(z),p[z]=!0)}function Pe(z){p[z]!==!1&&(i.disable(z),p[z]=!1)}function st(z,be){return m[z]!==be?(i.bindFramebuffer(z,be),m[z]=be,z===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=be),z===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=be),!0):!1}function ot(z,be){let Ee=v,Oe=!1;if(z){Ee=_.get(be),Ee===void 0&&(Ee=[],_.set(be,Ee));const ke=z.textures;if(Ee.length!==ke.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Pt=ke.length;Tt<Pt;Tt++)Ee[Tt]=i.COLOR_ATTACHMENT0+Tt;Ee.length=ke.length,Oe=!0}}else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Oe=!0);Oe&&i.drawBuffers(Ee)}function Je(z){return E!==z?(i.useProgram(z),E=z,!0):!1}const K={[$i]:i.FUNC_ADD,[Of]:i.FUNC_SUBTRACT,[Ff]:i.FUNC_REVERSE_SUBTRACT};K[Bf]=i.MIN,K[Hf]=i.MAX;const nt={[zf]:i.ZERO,[kf]:i.ONE,[Vf]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[Yf]:i.SRC_ALPHA_SATURATE,[qf]:i.DST_COLOR,[Wf]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Xf]:i.ONE_MINUS_DST_ALPHA,[$f]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[Zf]:i.CONSTANT_ALPHA,[Jf]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(z,be,Ee,Oe,ke,Tt,Pt,_t,bt,At){if(z===Ti){C===!0&&(Pe(i.BLEND),C=!1);return}if(C===!1&&(De(i.BLEND),C=!0),z!==If){if(z!==A||At!==F){if((x!==$i||y!==$i)&&(i.blendEquation(i.FUNC_ADD),x=$i,y=$i),At)switch(z){case Rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}g=null,O=null,b=null,D=null,B.set(0,0,0),u=0,A=z,F=At}return}ke=ke||be,Tt=Tt||Ee,Pt=Pt||Oe,(be!==x||ke!==y)&&(i.blendEquationSeparate(K[be],K[ke]),x=be,y=ke),(Ee!==g||Oe!==O||Tt!==b||Pt!==D)&&(i.blendFuncSeparate(nt[Ee],nt[Oe],nt[Tt],nt[Pt]),g=Ee,O=Oe,b=Tt,D=Pt),(_t.equals(B)===!1||bt!==u)&&(i.blendColor(_t.r,_t.g,_t.b,bt),B.copy(_t),u=bt),A=z,F=!1}function Bt(z,be){z.side===ci?Pe(i.CULL_FACE):De(i.CULL_FACE);let Ee=z.side===pn;be&&(Ee=!Ee),$e(Ee),z.blending===Rr&&z.transparent===!1?Xe(Ti):Xe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Oe=z.stencilWrite;l.setTest(Oe),Oe&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),P(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(z){w!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),w=z)}function Et(z){z!==Df?(De(i.CULL_FACE),z!==T&&(z===ul?i.cullFace(i.BACK):z===Uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),T=z}function I(z){z!==H&&(ce&&i.lineWidth(z),H=z)}function P(z,be,Ee){z?(De(i.POLYGON_OFFSET_FILL),(W!==be||V!==Ee)&&(i.polygonOffset(be,Ee),W=be,V=Ee)):Pe(i.POLYGON_OFFSET_FILL)}function re(z){z?De(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function he(z){z===void 0&&(z=i.TEXTURE0+se-1),ie!==z&&(i.activeTexture(z),ie=z)}function me(z,be,Ee){Ee===void 0&&(ie===null?Ee=i.TEXTURE0+se-1:Ee=ie);let Oe=ve[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},ve[Ee]=Oe),(Oe.type!==z||Oe.texture!==be)&&(ie!==Ee&&(i.activeTexture(Ee),ie=Ee),i.bindTexture(z,be||Se[z]),Oe.type=z,Oe.texture=be)}function de(){const z=ve[ie];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ve(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(z){at.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),at.copy(z))}function ht(z){yt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),yt.copy(z))}function dt(z,be){let Ee=h.get(be);Ee===void 0&&(Ee=new WeakMap,h.set(be,Ee));let Oe=Ee.get(z);Oe===void 0&&(Oe=i.getUniformBlockIndex(be,z.name),Ee.set(z,Oe))}function Lt(z,be){const Oe=h.get(be).get(z);c.get(be)!==Oe&&(i.uniformBlockBinding(be,Oe,z.__bindingPointIndex),c.set(be,Oe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ie=null,ve={},m={},_=new WeakMap,v=[],E=null,C=!1,A=null,x=null,g=null,O=null,y=null,b=null,D=null,B=new xt(0,0,0),u=0,F=!1,w=null,T=null,H=null,W=null,V=null,at.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:De,disable:Pe,bindFramebuffer:st,drawBuffers:ot,useProgram:Je,setBlending:Xe,setMaterial:Bt,setFlipSided:$e,setCullFace:Et,setLineWidth:I,setPolygonOffset:P,setScissorTest:re,activeTexture:he,bindTexture:me,unbindTexture:de,compressedTexImage2D:Ve,compressedTexImage3D:_e,texImage2D:Be,texImage3D:lt,updateUBOMapping:dt,uniformBlockBinding:Lt,texStorage2D:Qe,texStorage3D:Ie,texSubImage2D:ue,texSubImage3D:Ue,compressedTexSubImage2D:Te,compressedTexSubImage3D:Le,scissor:it,viewport:ht,reset:He}}function I_(i,e,t,n,r,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new gt,m=new WeakMap;let _;const v=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(I,P){return E?new OffscreenCanvas(I,P):ls("canvas")}function A(I,P,re){let he=1;const me=Et(I);if((me.width>re||me.height>re)&&(he=re/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const de=Math.floor(he*me.width),Ve=Math.floor(he*me.height);_===void 0&&(_=C(de,Ve));const _e=P?C(de,Ve):_;return _e.width=de,_e.height=Ve,_e.getContext("2d").drawImage(I,0,0,de,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+de+"x"+Ve+")."),_e}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function x(I){return I.generateMipmaps&&I.minFilter!==An&&I.minFilter!==Un}function g(I){i.generateMipmap(I)}function O(I,P,re,he,me=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de=P;if(P===i.RED&&(re===i.FLOAT&&(de=i.R32F),re===i.HALF_FLOAT&&(de=i.R16F),re===i.UNSIGNED_BYTE&&(de=i.R8)),P===i.RED_INTEGER&&(re===i.UNSIGNED_BYTE&&(de=i.R8UI),re===i.UNSIGNED_SHORT&&(de=i.R16UI),re===i.UNSIGNED_INT&&(de=i.R32UI),re===i.BYTE&&(de=i.R8I),re===i.SHORT&&(de=i.R16I),re===i.INT&&(de=i.R32I)),P===i.RG&&(re===i.FLOAT&&(de=i.RG32F),re===i.HALF_FLOAT&&(de=i.RG16F),re===i.UNSIGNED_BYTE&&(de=i.RG8)),P===i.RG_INTEGER&&(re===i.UNSIGNED_BYTE&&(de=i.RG8UI),re===i.UNSIGNED_SHORT&&(de=i.RG16UI),re===i.UNSIGNED_INT&&(de=i.RG32UI),re===i.BYTE&&(de=i.RG8I),re===i.SHORT&&(de=i.RG16I),re===i.INT&&(de=i.RG32I)),P===i.RGB&&re===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),P===i.RGBA){const Ve=me?aa:Rt.getTransfer(he);re===i.FLOAT&&(de=i.RGBA32F),re===i.HALF_FLOAT&&(de=i.RGBA16F),re===i.UNSIGNED_BYTE&&(de=Ve===Nt?i.SRGB8_ALPHA8:i.RGBA8),re===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),re===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function y(I,P){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==An&&I.minFilter!==Un?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function b(I){const P=I.target;P.removeEventListener("dispose",b),B(P),P.isVideoTexture&&m.delete(P)}function D(I){const P=I.target;P.removeEventListener("dispose",D),F(P)}function B(I){const P=n.get(I);if(P.__webglInit===void 0)return;const re=I.source,he=v.get(re);if(he){const me=he[P.__cacheKey];me.usedTimes--,me.usedTimes===0&&u(I),Object.keys(he).length===0&&v.delete(re)}n.remove(I)}function u(I){const P=n.get(I);i.deleteTexture(P.__webglTexture);const re=I.source,he=v.get(re);delete he[P.__cacheKey],l.memory.textures--}function F(I){const P=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(P.__webglFramebuffer[he]))for(let me=0;me<P.__webglFramebuffer[he].length;me++)i.deleteFramebuffer(P.__webglFramebuffer[he][me]);else i.deleteFramebuffer(P.__webglFramebuffer[he]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[he])}else{if(Array.isArray(P.__webglFramebuffer))for(let he=0;he<P.__webglFramebuffer.length;he++)i.deleteFramebuffer(P.__webglFramebuffer[he]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let he=0;he<P.__webglColorRenderbuffer.length;he++)P.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[he]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const re=I.textures;for(let he=0,me=re.length;he<me;he++){const de=n.get(re[he]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),l.memory.textures--),n.remove(re[he])}n.remove(I)}let w=0;function T(){w=0}function H(){const I=w;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),w+=1,I}function W(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function V(I,P){const re=n.get(I);if(I.isVideoTexture&&Bt(I),I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){const he=I.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(re,I,P);return}}t.bindTexture(i.TEXTURE_2D,re.__webglTexture,i.TEXTURE0+P)}function se(I,P){const re=n.get(I);if(I.version>0&&re.__version!==I.version){at(re,I,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,re.__webglTexture,i.TEXTURE0+P)}function ce(I,P){const re=n.get(I);if(I.version>0&&re.__version!==I.version){at(re,I,P);return}t.bindTexture(i.TEXTURE_3D,re.__webglTexture,i.TEXTURE0+P)}function pe(I,P){const re=n.get(I);if(I.version>0&&re.__version!==I.version){yt(re,I,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture,i.TEXTURE0+P)}const xe={[Eo]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},ie={[An]:i.NEAREST,[mh]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},ve={[Rh]:i.NEVER,[Ih]:i.ALWAYS,[Ph]:i.LESS,[_u]:i.LEQUAL,[Lh]:i.EQUAL,[Nh]:i.GEQUAL,[Dh]:i.GREATER,[Uh]:i.NOTEQUAL};function ye(I,P){if(P.type===bi&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Un||P.magFilter===Ia||P.magFilter===ws||P.magFilter===Ji||P.minFilter===Un||P.minFilter===Ia||P.minFilter===ws||P.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,xe[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,xe[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,xe[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ie[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ie[P.minFilter]),P.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ve[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===An||P.minFilter!==ws&&P.minFilter!==Ji||P.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Ne(I,P){let re=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",b));const he=P.source;let me=v.get(he);me===void 0&&(me={},v.set(he,me));const de=W(P);if(de!==I.__cacheKey){me[de]===void 0&&(me[de]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,re=!0),me[de].usedTimes++;const Ve=me[I.__cacheKey];Ve!==void 0&&(me[I.__cacheKey].usedTimes--,Ve.usedTimes===0&&u(P)),I.__cacheKey=de,I.__webglTexture=me[de].texture}return re}function at(I,P,re){let he=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(he=i.TEXTURE_3D);const me=Ne(I,P),de=P.source;t.bindTexture(he,I.__webglTexture,i.TEXTURE0+re);const Ve=n.get(de);if(de.version!==Ve.__version||me===!0){t.activeTexture(i.TEXTURE0+re);const _e=Rt.getPrimaries(Rt.workingColorSpace),ue=P.colorSpace===Ei?null:Rt.getPrimaries(P.colorSpace),Ue=P.colorSpace===Ei||_e===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Te=A(P.image,!1,r.maxTextureSize);Te=$e(P,Te);const Le=a.convert(P.format,P.colorSpace),Qe=a.convert(P.type);let Ie=O(P.internalFormat,Le,Qe,P.colorSpace,P.isVideoTexture);ye(he,P);let Be;const lt=P.mipmaps,it=P.isVideoTexture!==!0&&Ie!==mu,ht=Ve.__version===void 0||me===!0,dt=de.dataReady,Lt=y(P,Te);if(P.isDepthTexture)Ie=i.DEPTH_COMPONENT16,P.type===bi?Ie=i.DEPTH_COMPONENT32F:P.type===Nr?Ie=i.DEPTH_COMPONENT24:P.type===fs&&(Ie=i.DEPTH24_STENCIL8),ht&&(it?t.texStorage2D(i.TEXTURE_2D,1,Ie,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,Ie,Te.width,Te.height,0,Le,Qe,null));else if(P.isDataTexture)if(lt.length>0){it&&ht&&t.texStorage2D(i.TEXTURE_2D,Lt,Ie,lt[0].width,lt[0].height);for(let He=0,z=lt.length;He<z;He++)Be=lt[He],it?dt&&t.texSubImage2D(i.TEXTURE_2D,He,0,0,Be.width,Be.height,Le,Qe,Be.data):t.texImage2D(i.TEXTURE_2D,He,Ie,Be.width,Be.height,0,Le,Qe,Be.data);P.generateMipmaps=!1}else it?(ht&&t.texStorage2D(i.TEXTURE_2D,Lt,Ie,Te.width,Te.height),dt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,Le,Qe,Te.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,Te.width,Te.height,0,Le,Qe,Te.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){it&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Ie,lt[0].width,lt[0].height,Te.depth);for(let He=0,z=lt.length;He<z;He++)Be=lt[He],P.format!==$n?Le!==null?it?dt&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,He,0,0,0,Be.width,Be.height,Te.depth,Le,Be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,He,Ie,Be.width,Be.height,Te.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?dt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,He,0,0,0,Be.width,Be.height,Te.depth,Le,Qe,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,He,Ie,Be.width,Be.height,Te.depth,0,Le,Qe,Be.data)}else{it&&ht&&t.texStorage2D(i.TEXTURE_2D,Lt,Ie,lt[0].width,lt[0].height);for(let He=0,z=lt.length;He<z;He++)Be=lt[He],P.format!==$n?Le!==null?it?dt&&t.compressedTexSubImage2D(i.TEXTURE_2D,He,0,0,Be.width,Be.height,Le,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,He,Ie,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?dt&&t.texSubImage2D(i.TEXTURE_2D,He,0,0,Be.width,Be.height,Le,Qe,Be.data):t.texImage2D(i.TEXTURE_2D,He,Ie,Be.width,Be.height,0,Le,Qe,Be.data)}else if(P.isDataArrayTexture)it?(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Ie,Te.width,Te.height,Te.depth),dt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Le,Qe,Te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,Te.width,Te.height,Te.depth,0,Le,Qe,Te.data);else if(P.isData3DTexture)it?(ht&&t.texStorage3D(i.TEXTURE_3D,Lt,Ie,Te.width,Te.height,Te.depth),dt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Le,Qe,Te.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,Te.width,Te.height,Te.depth,0,Le,Qe,Te.data);else if(P.isFramebufferTexture){if(ht)if(it)t.texStorage2D(i.TEXTURE_2D,Lt,Ie,Te.width,Te.height);else{let He=Te.width,z=Te.height;for(let be=0;be<Lt;be++)t.texImage2D(i.TEXTURE_2D,be,Ie,He,z,0,Le,Qe,null),He>>=1,z>>=1}}else if(lt.length>0){if(it&&ht){const He=Et(lt[0]);t.texStorage2D(i.TEXTURE_2D,Lt,Ie,He.width,He.height)}for(let He=0,z=lt.length;He<z;He++)Be=lt[He],it?dt&&t.texSubImage2D(i.TEXTURE_2D,He,0,0,Le,Qe,Be):t.texImage2D(i.TEXTURE_2D,He,Ie,Le,Qe,Be);P.generateMipmaps=!1}else if(it){if(ht){const He=Et(Te);t.texStorage2D(i.TEXTURE_2D,Lt,Ie,He.width,He.height)}dt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Qe,Te)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Le,Qe,Te);x(P)&&g(he),Ve.__version=de.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function yt(I,P,re){if(P.image.length!==6)return;const he=Ne(I,P),me=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+re);const de=n.get(me);if(me.version!==de.__version||he===!0){t.activeTexture(i.TEXTURE0+re);const Ve=Rt.getPrimaries(Rt.workingColorSpace),_e=P.colorSpace===Ei?null:Rt.getPrimaries(P.colorSpace),ue=P.colorSpace===Ei||Ve===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ue=P.isCompressedTexture||P.image[0].isCompressedTexture,Te=P.image[0]&&P.image[0].isDataTexture,Le=[];for(let z=0;z<6;z++)!Ue&&!Te?Le[z]=A(P.image[z],!0,r.maxCubemapSize):Le[z]=Te?P.image[z].image:P.image[z],Le[z]=$e(P,Le[z]);const Qe=Le[0],Ie=a.convert(P.format,P.colorSpace),Be=a.convert(P.type),lt=O(P.internalFormat,Ie,Be,P.colorSpace),it=P.isVideoTexture!==!0,ht=de.__version===void 0||he===!0,dt=me.dataReady;let Lt=y(P,Qe);ye(i.TEXTURE_CUBE_MAP,P);let He;if(Ue){it&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,lt,Qe.width,Qe.height);for(let z=0;z<6;z++){He=Le[z].mipmaps;for(let be=0;be<He.length;be++){const Ee=He[be];P.format!==$n?Ie!==null?it?dt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,be,0,0,Ee.width,Ee.height,Ie,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,be,lt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,be,0,0,Ee.width,Ee.height,Ie,Be,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,be,lt,Ee.width,Ee.height,0,Ie,Be,Ee.data)}}}else{if(He=P.mipmaps,it&&ht){He.length>0&&Lt++;const z=Et(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,lt,z.width,z.height)}for(let z=0;z<6;z++)if(Te){it?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Le[z].width,Le[z].height,Ie,Be,Le[z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,lt,Le[z].width,Le[z].height,0,Ie,Be,Le[z].data);for(let be=0;be<He.length;be++){const Oe=He[be].image[z].image;it?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,be+1,0,0,Oe.width,Oe.height,Ie,Be,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,be+1,lt,Oe.width,Oe.height,0,Ie,Be,Oe.data)}}else{it?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ie,Be,Le[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,lt,Ie,Be,Le[z]);for(let be=0;be<He.length;be++){const Ee=He[be];it?dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,be+1,0,0,Ie,Be,Ee.image[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,be+1,lt,Ie,Be,Ee.image[z])}}}x(P)&&g(i.TEXTURE_CUBE_MAP),de.__version=me.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ae(I,P,re,he,me,de){const Ve=a.convert(re.format,re.colorSpace),_e=a.convert(re.type),ue=O(re.internalFormat,Ve,_e,re.colorSpace);if(!n.get(P).__hasExternalTextures){const Te=Math.max(1,P.width>>de),Le=Math.max(1,P.height>>de);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,de,ue,Te,Le,P.depth,0,Ve,_e,null):t.texImage2D(me,de,ue,Te,Le,0,Ve,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Xe(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,me,n.get(re).__webglTexture,0,nt(P)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,me,n.get(re).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(I,P,re){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer&&!P.stencilBuffer){let he=i.DEPTH_COMPONENT24;if(re||Xe(P)){const me=P.depthTexture;me&&me.isDepthTexture&&(me.type===bi?he=i.DEPTH_COMPONENT32F:me.type===Nr&&(he=i.DEPTH_COMPONENT24));const de=nt(P);Xe(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,he,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,he,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,he,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(P.depthBuffer&&P.stencilBuffer){const he=nt(P);re&&Xe(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,i.DEPTH24_STENCIL8,P.width,P.height):Xe(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const he=P.textures;for(let me=0;me<he.length;me++){const de=he[me],Ve=a.convert(de.format,de.colorSpace),_e=a.convert(de.type),ue=O(de.internalFormat,Ve,_e,de.colorSpace),Ue=nt(P);re&&Xe(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ue,P.width,P.height):Xe(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,ue,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ue,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),V(P.depthTexture,0);const he=n.get(P.depthTexture).__webglTexture,me=nt(P);if(P.depthTexture.format===Pr)Xe(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(P.depthTexture.format===os)Xe(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Pe(I){const P=n.get(I),re=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");De(P.__webglFramebuffer,I)}else if(re){P.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[he]),P.__webglDepthbuffer[he]=i.createRenderbuffer(),Se(P.__webglDepthbuffer[he],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Se(P.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(I,P,re){const he=n.get(I);P!==void 0&&ae(he.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),re!==void 0&&Pe(I)}function ot(I){const P=I.texture,re=n.get(I),he=n.get(P);I.addEventListener("dispose",D);const me=I.textures,de=I.isWebGLCubeRenderTarget===!0,Ve=me.length>1;if(Ve||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=P.version,l.memory.textures++),de){re.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(P.mipmaps&&P.mipmaps.length>0){re.__webglFramebuffer[_e]=[];for(let ue=0;ue<P.mipmaps.length;ue++)re.__webglFramebuffer[_e][ue]=i.createFramebuffer()}else re.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){re.__webglFramebuffer=[];for(let _e=0;_e<P.mipmaps.length;_e++)re.__webglFramebuffer[_e]=i.createFramebuffer()}else re.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let _e=0,ue=me.length;_e<ue;_e++){const Ue=n.get(me[_e]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),l.memory.textures++)}if(I.samples>0&&Xe(I)===!1){re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let _e=0;_e<me.length;_e++){const ue=me[_e];re.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,re.__webglColorRenderbuffer[_e]);const Ue=a.convert(ue.format,ue.colorSpace),Te=a.convert(ue.type),Le=O(ue.internalFormat,Ue,Te,ue.colorSpace,I.isXRRenderTarget===!0),Qe=nt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Le,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,re.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(re.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),ye(i.TEXTURE_CUBE_MAP,P);for(let _e=0;_e<6;_e++)if(P.mipmaps&&P.mipmaps.length>0)for(let ue=0;ue<P.mipmaps.length;ue++)ae(re.__webglFramebuffer[_e][ue],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ue);else ae(re.__webglFramebuffer[_e],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);x(P)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let _e=0,ue=me.length;_e<ue;_e++){const Ue=me[_e],Te=n.get(Ue);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),ye(i.TEXTURE_2D,Ue),ae(re.__webglFramebuffer,I,Ue,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),x(Ue)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_e=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,he.__webglTexture),ye(_e,P),P.mipmaps&&P.mipmaps.length>0)for(let ue=0;ue<P.mipmaps.length;ue++)ae(re.__webglFramebuffer[ue],I,P,i.COLOR_ATTACHMENT0,_e,ue);else ae(re.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,_e,0);x(P)&&g(_e),t.unbindTexture()}I.depthBuffer&&Pe(I)}function Je(I){const P=I.textures;for(let re=0,he=P.length;re<he;re++){const me=P[re];if(x(me)){const de=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ve=n.get(me).__webglTexture;t.bindTexture(de,Ve),g(de),t.unbindTexture()}}}function K(I){if(I.samples>0&&Xe(I)===!1){const P=I.textures,re=I.width,he=I.height;let me=i.COLOR_BUFFER_BIT;const de=[],Ve=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(I),ue=P.length>1;if(ue)for(let Ue=0;Ue<P.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ue=0;Ue<P.length;Ue++){de.push(i.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&de.push(Ve);const Te=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Te===!1&&(I.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&_e.__isTransmissionRenderTarget!==!0&&(me|=i.STENCIL_BUFFER_BIT)),ue&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]),Te===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ve])),ue){const Le=n.get(P[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,re,he,0,0,re,he,me,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Ue=0;Ue<P.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]);const Te=n.get(P[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function nt(I){return Math.min(r.maxSamples,I.samples)}function Xe(I){const P=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Bt(I){const P=l.render.frame;m.get(I)!==P&&(m.set(I,P),I.update())}function $e(I,P){const re=I.colorSpace,he=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||re!==Li&&re!==Ei&&(Rt.getTransfer(re)===Nt?(he!==$n||me!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),P}function Et(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=H,this.resetTextureUnits=T,this.setTexture2D=V,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=pe,this.rebindTextures=st,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Xe}function O_(i,e){function t(n,r=Ei){let a;const l=Rt.getTransfer(r);if(n===wi)return i.UNSIGNED_BYTE;if(n===uu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return i.BYTE;if(n===_h)return i.SHORT;if(n===lu)return i.UNSIGNED_SHORT;if(n===cu)return i.INT;if(n===Nr)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===sa)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===yh)return i.RGB;if(n===$n)return i.RGBA;if(n===Sh)return i.LUMINANCE;if(n===Mh)return i.LUMINANCE_ALPHA;if(n===Pr)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Eh)return i.RED;if(n===hu)return i.RED_INTEGER;if(n===bh)return i.RG;if(n===du)return i.RG_INTEGER;if(n===pu)return i.RGBA_INTEGER;if(n===Oa||n===Fa||n===Ba||n===Ha)if(l===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===_l)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===pl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===vl||n===xl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===vl)return l===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===xl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yl||n===Sl||n===Ml||n===El||n===bl||n===Tl||n===Al||n===wl||n===Cl||n===Rl||n===Pl||n===Ll||n===Dl||n===Ul)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===yl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ll)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===Nl||n===Il)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===za)return l===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===Ol||n===Fl||n===Bl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===za)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class F_ extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $s extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B_={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){l=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,n),g=this._getHandJoint(p,A);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=m.position.distanceTo(_.position),E=.02,C=.005;p.inputState.pinching&&v>E+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=E-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),p!==null&&(p.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $s;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new cn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Nn({vertexShader:H_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ln(new ma(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class V_ extends Or{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",h=1,p=null,m=null,_=null,v=null,E=null,C=null;const A=new k_,x=t.getContextAttributes();let g=null,O=null;const y=[],b=[],D=new gt;let B=null;const u=new Tn;u.layers.enable(1),u.viewport=new jt;const F=new Tn;F.layers.enable(2),F.viewport=new jt;const w=[u,F],T=new F_;T.layers.enable(1),T.layers.enable(2);let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Se=y[ae];return Se===void 0&&(Se=new po,y[ae]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ae){let Se=y[ae];return Se===void 0&&(Se=new po,y[ae]=Se),Se.getGripSpace()},this.getHand=function(ae){let Se=y[ae];return Se===void 0&&(Se=new po,y[ae]=Se),Se.getHandSpace()};function V(ae){const Se=b.indexOf(ae.inputSource);if(Se===-1)return;const De=y[Se];De!==void 0&&(De.update(ae.inputSource,ae.frame,p||l),De.dispatchEvent({type:ae.type,data:ae.inputSource}))}function se(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",ce);for(let ae=0;ae<y.length;ae++){const Se=b[ae];Se!==null&&(b[ae]=null,y[ae].disconnect(Se))}H=null,W=null,A.reset(),e.setRenderTarget(g),E=null,v=null,_=null,r=null,O=null,yt.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){a=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){c=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||l},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return _},this.getFrame=function(){return C},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",se),r.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new er(E.framebufferWidth,E.framebufferHeight,{format:$n,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Se=null,De=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?os:Pr,De=x.stencil?fs:Nr);const st={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};_=new XRWebGLBinding(r,t),v=_.createProjectionLayer(st),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),O=new er(v.textureWidth,v.textureHeight,{format:$n,type:wi,depthTexture:new Pu(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ot=e.properties.get(O);ot.__ignoreDepthValues=v.ignoreDepthValues}O.isXRRenderTarget=!0,this.setFoveation(h),p=null,l=await r.requestReferenceSpace(c),yt.setContext(r),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ce(ae){for(let Se=0;Se<ae.removed.length;Se++){const De=ae.removed[Se],Pe=b.indexOf(De);Pe>=0&&(b[Pe]=null,y[Pe].disconnect(De))}for(let Se=0;Se<ae.added.length;Se++){const De=ae.added[Se];let Pe=b.indexOf(De);if(Pe===-1){for(let ot=0;ot<y.length;ot++)if(ot>=b.length){b.push(De),Pe=ot;break}else if(b[ot]===null){b[ot]=De,Pe=ot;break}if(Pe===-1)break}const st=y[Pe];st&&st.connect(De)}}const pe=new j,xe=new j;function ie(ae,Se,De){pe.setFromMatrixPosition(Se.matrixWorld),xe.setFromMatrixPosition(De.matrixWorld);const Pe=pe.distanceTo(xe),st=Se.projectionMatrix.elements,ot=De.projectionMatrix.elements,Je=st[14]/(st[10]-1),K=st[14]/(st[10]+1),nt=(st[9]+1)/st[5],Xe=(st[9]-1)/st[5],Bt=(st[8]-1)/st[0],$e=(ot[8]+1)/ot[0],Et=Je*Bt,I=Je*$e,P=Pe/(-Bt+$e),re=P*-Bt;Se.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(re),ae.translateZ(P),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert();const he=Je+P,me=K+P,de=Et-re,Ve=I+(Pe-re),_e=nt*K/me*he,ue=Xe*K/me*he;ae.projectionMatrix.makePerspective(de,Ve,_e,ue,he,me),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}function ve(ae,Se){Se===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Se.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;A.texture!==null&&(ae.near=A.depthNear,ae.far=A.depthFar),T.near=F.near=u.near=ae.near,T.far=F.far=u.far=ae.far,(H!==T.near||W!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,W=T.far,u.near=H,u.far=W,F.near=H,F.far=W,u.updateProjectionMatrix(),F.updateProjectionMatrix(),ae.updateProjectionMatrix());const Se=ae.parent,De=T.cameras;ve(T,Se);for(let Pe=0;Pe<De.length;Pe++)ve(De[Pe],Se);De.length===2?ie(T,u,F):T.projectionMatrix.copy(u.projectionMatrix),ye(ae,T,Se)};function ye(ae,Se,De){De===null?ae.matrix.copy(Se.matrixWorld):(ae.matrix.copy(De.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Se.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=To*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&E===null))return h},this.setFoveation=function(ae){h=ae,v!==null&&(v.fixedFoveation=ae),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ae)},this.hasDepthSensing=function(){return A.texture!==null};let Ne=null;function at(ae,Se){if(m=Se.getViewerPose(p||l),C=Se,m!==null){const De=m.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let Pe=!1;De.length!==T.cameras.length&&(T.cameras.length=0,Pe=!0);for(let ot=0;ot<De.length;ot++){const Je=De[ot];let K=null;if(E!==null)K=E.getViewport(Je);else{const Xe=_.getViewSubImage(v,Je);K=Xe.viewport,ot===0&&(e.setRenderTargetTextures(O,Xe.colorTexture,v.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(O))}let nt=w[ot];nt===void 0&&(nt=new Tn,nt.layers.enable(ot),nt.viewport=new jt,w[ot]=nt),nt.matrix.fromArray(Je.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Je.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(K.x,K.y,K.width,K.height),ot===0&&(T.matrix.copy(nt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Pe===!0&&T.cameras.push(nt)}const st=r.enabledFeatures;if(st&&st.includes("depth-sensing")){const ot=_.getDepthInformation(De[0]);ot&&ot.isValid&&ot.texture&&A.init(e,ot,r.renderState)}}for(let De=0;De<y.length;De++){const Pe=b[De],st=y[De];Pe!==null&&st!==void 0&&st.update(Pe,Se,p||l)}A.render(e,T),Ne&&Ne(ae,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),C=null}const yt=new Cu;yt.setAnimationLoop(at),this.setAnimationLoop=function(ae){Ne=ae},this.dispose=function(){}}}const qi=new Zn,G_=new Ft;function W_(i,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,Tu(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function r(x,g,O,y,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(x,g):g.isMeshToonMaterial?(a(x,g),_(x,g)):g.isMeshPhongMaterial?(a(x,g),m(x,g)):g.isMeshStandardMaterial?(a(x,g),v(x,g),g.isMeshPhysicalMaterial&&E(x,g,b)):g.isMeshMatcapMaterial?(a(x,g),C(x,g)):g.isMeshDepthMaterial?a(x,g):g.isMeshDistanceMaterial?(a(x,g),A(x,g)):g.isMeshNormalMaterial?a(x,g):g.isLineBasicMaterial?(l(x,g),g.isLineDashedMaterial&&c(x,g)):g.isPointsMaterial?h(x,g,O,y):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===pn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===pn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const O=e.get(g),y=O.envMap,b=O.envMapRotation;if(y&&(x.envMap.value=y,qi.copy(b),qi.x*=-1,qi.y*=-1,qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),x.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(qi)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;const D=i._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*D,t(g.lightMap,x.lightMapTransform)}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function l(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function c(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function h(x,g,O,y){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*O,x.scale.value=y*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function m(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function _(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function v(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function E(x,g,O){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&x.clearcoatNormalScale.value.negate())),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=O.texture,x.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function C(x,g){g.matcap&&(x.matcap.value=g.matcap)}function A(x,g){const O=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(O.matrixWorld),x.nearDistance.value=O.shadow.camera.near,x.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function X_(i,e,t,n){let r={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,y){const b=y.program;n.uniformBlockBinding(O,b)}function p(O,y){let b=r[O.id];b===void 0&&(C(O),b=m(O),r[O.id]=b,O.addEventListener("dispose",x));const D=y.program;n.updateUBOMapping(O,D);const B=e.render.frame;a[O.id]!==B&&(v(O),a[O.id]=B)}function m(O){const y=_();O.__bindingPointIndex=y;const b=i.createBuffer(),D=O.__size,B=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function _(){for(let O=0;O<c;O++)if(l.indexOf(O)===-1)return l.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const y=r[O.id],b=O.uniforms,D=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let B=0,u=b.length;B<u;B++){const F=Array.isArray(b[B])?b[B]:[b[B]];for(let w=0,T=F.length;w<T;w++){const H=F[w];if(E(H,B,w,D)===!0){const W=H.__offset,V=Array.isArray(H.value)?H.value:[H.value];let se=0;for(let ce=0;ce<V.length;ce++){const pe=V[ce],xe=A(pe);typeof pe=="number"||typeof pe=="boolean"?(H.__data[0]=pe,i.bufferSubData(i.UNIFORM_BUFFER,W+se,H.__data)):pe.isMatrix3?(H.__data[0]=pe.elements[0],H.__data[1]=pe.elements[1],H.__data[2]=pe.elements[2],H.__data[3]=0,H.__data[4]=pe.elements[3],H.__data[5]=pe.elements[4],H.__data[6]=pe.elements[5],H.__data[7]=0,H.__data[8]=pe.elements[6],H.__data[9]=pe.elements[7],H.__data[10]=pe.elements[8],H.__data[11]=0):(pe.toArray(H.__data,se),se+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function E(O,y,b,D){const B=O.value,u=y+"_"+b;if(D[u]===void 0)return typeof B=="number"||typeof B=="boolean"?D[u]=B:D[u]=B.clone(),!0;{const F=D[u];if(typeof B=="number"||typeof B=="boolean"){if(F!==B)return D[u]=B,!0}else if(F.equals(B)===!1)return F.copy(B),!0}return!1}function C(O){const y=O.uniforms;let b=0;const D=16;for(let u=0,F=y.length;u<F;u++){const w=Array.isArray(y[u])?y[u]:[y[u]];for(let T=0,H=w.length;T<H;T++){const W=w[T],V=Array.isArray(W.value)?W.value:[W.value];for(let se=0,ce=V.length;se<ce;se++){const pe=V[se],xe=A(pe),ie=b%D;ie!==0&&D-ie<xe.boundary&&(b+=D-ie),W.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=xe.storage}}}const B=b%D;return B>0&&(b+=D-B),O.__size=b,O.__cache={},this}function A(O){const y={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(y.boundary=4,y.storage=4):O.isVector2?(y.boundary=8,y.storage=8):O.isVector3||O.isColor?(y.boundary=16,y.storage=12):O.isVector4?(y.boundary=16,y.storage=16):O.isMatrix3?(y.boundary=48,y.storage=48):O.isMatrix4?(y.boundary=64,y.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),y}function x(O){const y=O.target;y.removeEventListener("dispose",x);const b=l.indexOf(y.__bindingPointIndex);l.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function g(){for(const O in r)i.deleteBuffer(r[O]);l=[],r={},a={}}return{bind:h,update:p,dispose:g}}class q_{constructor(e={}){const{canvas:t=Fh(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const E=new Uint32Array(4),C=new Int32Array(4);let A=null,x=null;const g=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this._useLegacyLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1;const y=this;let b=!1,D=0,B=0,u=null,F=-1,w=null;const T=new jt,H=new jt;let W=null;const V=new xt(0);let se=0,ce=t.width,pe=t.height,xe=1,ie=null,ve=null;const ye=new jt(0,0,ce,pe),Ne=new jt(0,0,ce,pe);let at=!1;const yt=new zo;let ae=!1,Se=!1;const De=new Ft,Pe=new gt,st=new j,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return u===null?xe:1}let K=n;function nt(L,q){const ee=t.getContext(L,q);return ee!==null?ee:null}try{const L={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),K===null){const q="webgl2";if(K=nt(q,L),K===null)throw nt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Xe,Bt,$e,Et,I,P,re,he,me,de,Ve,_e,ue,Ue,Te,Le,Qe,Ie,Be,lt,it,ht,dt,Lt;function He(){Xe=new eg(K),Xe.init(),Bt=new Ym(K,Xe,e),ht=new O_(K,Xe),$e=new N_(K),Et=new ig(K),I=new y_,P=new I_(K,Xe,$e,I,Bt,ht,Et),re=new Km(y),he=new Qm(y),me=new cd(K),dt=new qm(K,me),de=new tg(K,me,Et,dt),Ve=new sg(K,de,me,Et),Be=new rg(K,Bt,P),Le=new $m(I),_e=new x_(y,re,he,Xe,Bt,dt,Le),ue=new W_(y,I),Ue=new M_,Te=new C_(Xe),Ie=new Xm(y,re,he,$e,Ve,v,h),Qe=new U_(y,Ve,Bt),Lt=new X_(K,Et,Bt,$e),lt=new jm(K,Xe,Et),it=new ng(K,Xe,Et),Et.programs=_e.programs,y.capabilities=Bt,y.extensions=Xe,y.properties=I,y.renderLists=Ue,y.shadowMap=Qe,y.state=$e,y.info=Et}He();const z=new V_(y,K);this.xr=z,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const L=Xe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Xe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(L){L!==void 0&&(xe=L,this.setSize(ce,pe,!1))},this.getSize=function(L){return L.set(ce,pe)},this.setSize=function(L,q,ee=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=L,pe=q,t.width=Math.floor(L*xe),t.height=Math.floor(q*xe),ee===!0&&(t.style.width=L+"px",t.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(ce*xe,pe*xe).floor()},this.setDrawingBufferSize=function(L,q,ee){ce=L,pe=q,xe=ee,t.width=Math.floor(L*ee),t.height=Math.floor(q*ee),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(ye)},this.setViewport=function(L,q,ee,te){L.isVector4?ye.set(L.x,L.y,L.z,L.w):ye.set(L,q,ee,te),$e.viewport(T.copy(ye).multiplyScalar(xe).round())},this.getScissor=function(L){return L.copy(Ne)},this.setScissor=function(L,q,ee,te){L.isVector4?Ne.set(L.x,L.y,L.z,L.w):Ne.set(L,q,ee,te),$e.scissor(H.copy(Ne).multiplyScalar(xe).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(L){$e.setScissorTest(at=L)},this.setOpaqueSort=function(L){ie=L},this.setTransparentSort=function(L){ve=L},this.getClearColor=function(L){return L.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(L=!0,q=!0,ee=!0){let te=0;if(L){let Z=!1;if(u!==null){const Ae=u.texture.format;Z=Ae===pu||Ae===du||Ae===hu}if(Z){const Ae=u.texture.type,ze=Ae===wi||Ae===Nr||Ae===lu||Ae===fs||Ae===uu||Ae===fu,qe=Ie.getClearColor(),We=Ie.getClearAlpha(),et=qe.r,Ke=qe.g,tt=qe.b;ze?(E[0]=et,E[1]=Ke,E[2]=tt,E[3]=We,K.clearBufferuiv(K.COLOR,0,E)):(C[0]=et,C[1]=Ke,C[2]=tt,C[3]=We,K.clearBufferiv(K.COLOR,0,C))}else te|=K.COLOR_BUFFER_BIT}q&&(te|=K.DEPTH_BUFFER_BIT),ee&&(te|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Ue.dispose(),Te.dispose(),I.dispose(),re.dispose(),he.dispose(),Ve.dispose(),dt.dispose(),Lt.dispose(),_e.dispose(),z.dispose(),z.removeEventListener("sessionstart",yn),z.removeEventListener("sessionend",mn),Fn.stop()};function be(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=Et.autoReset,q=Qe.enabled,ee=Qe.autoUpdate,te=Qe.needsUpdate,Z=Qe.type;He(),Et.autoReset=L,Qe.enabled=q,Qe.autoUpdate=ee,Qe.needsUpdate=te,Qe.type=Z}function Oe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ke(L){const q=L.target;q.removeEventListener("dispose",ke),Tt(q)}function Tt(L){Pt(L),I.remove(L)}function Pt(L){const q=I.get(L).programs;q!==void 0&&(q.forEach(function(ee){_e.releaseProgram(ee)}),L.isShaderMaterial&&_e.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,ee,te,Z,Ae){q===null&&(q=ot);const ze=Z.isMesh&&Z.matrixWorld.determinant()<0,qe=xa(L,q,ee,te,Z);$e.setMaterial(te,ze);let We=ee.index,et=1;if(te.wireframe===!0){if(We=de.getWireframeAttribute(ee),We===void 0)return;et=2}const Ke=ee.drawRange,tt=ee.attributes.position;let Ot=Ke.start*et,nn=(Ke.start+Ke.count)*et;Ae!==null&&(Ot=Math.max(Ot,Ae.start*et),nn=Math.min(nn,(Ae.start+Ae.count)*et)),We!==null?(Ot=Math.max(Ot,0),nn=Math.min(nn,We.count)):tt!=null&&(Ot=Math.max(Ot,0),nn=Math.min(nn,tt.count));const Ht=nn-Ot;if(Ht<0||Ht===1/0)return;dt.setup(Z,te,qe,ee,We);let wn,Ut=lt;if(We!==null&&(wn=me.get(We),Ut=it,Ut.setIndex(wn)),Z.isMesh)te.wireframe===!0?($e.setLineWidth(te.wireframeLinewidth*Je()),Ut.setMode(K.LINES)):Ut.setMode(K.TRIANGLES);else if(Z.isLine){let rt=te.linewidth;rt===void 0&&(rt=1),$e.setLineWidth(rt*Je()),Z.isLineSegments?Ut.setMode(K.LINES):Z.isLineLoop?Ut.setMode(K.LINE_LOOP):Ut.setMode(K.LINE_STRIP)}else Z.isPoints?Ut.setMode(K.POINTS):Z.isSprite&&Ut.setMode(K.TRIANGLES);if(Z.isBatchedMesh)Ut.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Ut.renderInstances(Ot,Ht,Z.count);else if(ee.isInstancedBufferGeometry){const rt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,rr=Math.min(ee.instanceCount,rt);Ut.renderInstances(Ot,Ht,rr)}else Ut.render(Ot,Ht)};function _t(L,q,ee){L.transparent===!0&&L.side===ci&&L.forceSinglePass===!1?(L.side=pn,L.needsUpdate=!0,ir(L,q,ee),L.side=Ci,L.needsUpdate=!0,ir(L,q,ee),L.side=ci):ir(L,q,ee)}this.compile=function(L,q,ee=null){ee===null&&(ee=L),x=Te.get(ee),x.init(),O.push(x),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),L!==ee&&L.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights(y._useLegacyLights);const te=new Set;return L.traverse(function(Z){const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let ze=0;ze<Ae.length;ze++){const qe=Ae[ze];_t(qe,ee,Z),te.add(qe)}else _t(Ae,ee,Z),te.add(Ae)}),O.pop(),x=null,te},this.compileAsync=function(L,q,ee=null){const te=this.compile(L,q,ee);return new Promise(Z=>{function Ae(){if(te.forEach(function(ze){I.get(ze).currentProgram.isReady()&&te.delete(ze)}),te.size===0){Z(L);return}setTimeout(Ae,10)}Xe.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let bt=null;function At(L){bt&&bt(L)}function yn(){Fn.stop()}function mn(){Fn.start()}const Fn=new Cu;Fn.setAnimationLoop(At),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(L){bt=L,z.setAnimationLoop(L),L===null?Fn.stop():Fn.start()},z.addEventListener("sessionstart",yn),z.addEventListener("sessionend",mn),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(q),q=z.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,q,u),x=Te.get(L,O.length),x.init(),O.push(x),De.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),yt.setFromProjectionMatrix(De),Se=this.localClippingEnabled,ae=Le.init(this.clippingPlanes,Se),A=Ue.get(L,g.length),A.init(),g.push(A),Jn(L,q,0,y.sortObjects),A.finish(),y.sortObjects===!0&&A.sort(ie,ve),this.info.render.frame++,ae===!0&&Le.beginShadows();const ee=x.state.shadowsArray;if(Qe.render(ee,L,q),ae===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1)&&Ie.render(A,L),x.setupLights(y._useLegacyLights),q.isArrayCamera){const te=q.cameras;for(let Z=0,Ae=te.length;Z<Ae;Z++){const ze=te[Z];Qn(A,L,ze,ze.viewport)}}else Qn(A,L,q);u!==null&&(P.updateMultisampleRenderTarget(u),P.updateRenderTargetMipmap(u)),L.isScene===!0&&L.onAfterRender(y,L,q),dt.resetDefaultState(),F=-1,w=null,O.pop(),O.length>0?x=O[O.length-1]:x=null,g.pop(),g.length>0?A=g[g.length-1]:A=null};function Jn(L,q,ee,te){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)ee=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||yt.intersectsSprite(L)){te&&st.setFromMatrixPosition(L.matrixWorld).applyMatrix4(De);const ze=Ve.update(L),qe=L.material;qe.visible&&A.push(L,ze,qe,ee,st.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||yt.intersectsObject(L))){const ze=Ve.update(L),qe=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),st.copy(L.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),st.copy(ze.boundingSphere.center)),st.applyMatrix4(L.matrixWorld).applyMatrix4(De)),Array.isArray(qe)){const We=ze.groups;for(let et=0,Ke=We.length;et<Ke;et++){const tt=We[et],Ot=qe[tt.materialIndex];Ot&&Ot.visible&&A.push(L,ze,Ot,ee,st.z,tt)}}else qe.visible&&A.push(L,ze,qe,ee,st.z,null)}}const Ae=L.children;for(let ze=0,qe=Ae.length;ze<qe;ze++)Jn(Ae[ze],q,ee,te)}function Qn(L,q,ee,te){const Z=L.opaque,Ae=L.transmissive,ze=L.transparent;x.setupLightsView(ee),ae===!0&&Le.setGlobalState(y.clippingPlanes,ee),Ae.length>0&&zr(Z,Ae,q,ee),te&&$e.viewport(T.copy(te)),Z.length>0&&ei(Z,q,ee),Ae.length>0&&ei(Ae,q,ee),ze.length>0&&ei(ze,q,ee),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function zr(L,q,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget===null){x.state.transmissionRenderTarget=new er(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?sa:wi,minFilter:Ji,samples:4,stencilBuffer:a});const et=I.get(x.state.transmissionRenderTarget);et.__isTransmissionRenderTarget=!0}const Ae=x.state.transmissionRenderTarget;y.getDrawingBufferSize(Pe),Ae.setSize(Pe.x,Pe.y);const ze=y.getRenderTarget();y.setRenderTarget(Ae),y.getClearColor(V),se=y.getClearAlpha(),se<1&&y.setClearColor(16777215,.5),y.clear();const qe=y.toneMapping;y.toneMapping=Ai,ei(L,ee,te),P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae);let We=!1;for(let et=0,Ke=q.length;et<Ke;et++){const tt=q[et],Ot=tt.object,nn=tt.geometry,Ht=tt.material,wn=tt.group;if(Ht.side===ci&&Ot.layers.test(te.layers)){const Ut=Ht.side;Ht.side=pn,Ht.needsUpdate=!0,vs(Ot,ee,te,nn,Ht,wn),Ht.side=Ut,Ht.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae)),y.setRenderTarget(ze),y.setClearColor(V,se),y.toneMapping=qe}function ei(L,q,ee){const te=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ae=L.length;Z<Ae;Z++){const ze=L[Z],qe=ze.object,We=ze.geometry,et=te===null?ze.material:te,Ke=ze.group;qe.layers.test(ee.layers)&&vs(qe,q,ee,We,et,Ke)}}function vs(L,q,ee,te,Z,Ae){L.onBeforeRender(y,q,ee,te,Z,Ae),L.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Z.onBeforeRender(y,q,ee,te,L,Ae),Z.transparent===!0&&Z.side===ci&&Z.forceSinglePass===!1?(Z.side=pn,Z.needsUpdate=!0,y.renderBufferDirect(ee,q,te,Z,L,Ae),Z.side=Ci,Z.needsUpdate=!0,y.renderBufferDirect(ee,q,te,Z,L,Ae),Z.side=ci):y.renderBufferDirect(ee,q,te,Z,L,Ae),L.onAfterRender(y,q,ee,te,Z,Ae)}function ir(L,q,ee){q.isScene!==!0&&(q=ot);const te=I.get(L),Z=x.state.lights,Ae=x.state.shadowsArray,ze=Z.state.version,qe=_e.getParameters(L,Z.state,Ae,q,ee),We=_e.getProgramCacheKey(qe);let et=te.programs;te.environment=L.isMeshStandardMaterial?q.environment:null,te.fog=q.fog,te.envMap=(L.isMeshStandardMaterial?he:re).get(L.envMap||te.environment),te.envMapRotation=te.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,et===void 0&&(L.addEventListener("dispose",ke),et=new Map,te.programs=et);let Ke=et.get(We);if(Ke!==void 0){if(te.currentProgram===Ke&&te.lightsStateVersion===ze)return kr(L,qe),Ke}else qe.uniforms=_e.getUniforms(L),L.onBuild(ee,qe,y),L.onBeforeCompile(qe,y),Ke=_e.acquireProgram(qe,We),et.set(We,Ke),te.uniforms=qe.uniforms;const tt=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(tt.clippingPlanes=Le.uniform),kr(L,qe),te.needsLights=ys(L),te.lightsStateVersion=ze,te.needsLights&&(tt.ambientLightColor.value=Z.state.ambient,tt.lightProbe.value=Z.state.probe,tt.directionalLights.value=Z.state.directional,tt.directionalLightShadows.value=Z.state.directionalShadow,tt.spotLights.value=Z.state.spot,tt.spotLightShadows.value=Z.state.spotShadow,tt.rectAreaLights.value=Z.state.rectArea,tt.ltc_1.value=Z.state.rectAreaLTC1,tt.ltc_2.value=Z.state.rectAreaLTC2,tt.pointLights.value=Z.state.point,tt.pointLightShadows.value=Z.state.pointShadow,tt.hemisphereLights.value=Z.state.hemi,tt.directionalShadowMap.value=Z.state.directionalShadowMap,tt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,tt.spotShadowMap.value=Z.state.spotShadowMap,tt.spotLightMatrix.value=Z.state.spotLightMatrix,tt.spotLightMap.value=Z.state.spotLightMap,tt.pointShadowMap.value=Z.state.pointShadowMap,tt.pointShadowMatrix.value=Z.state.pointShadowMatrix),te.currentProgram=Ke,te.uniformsList=null,Ke}function xs(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=na.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function kr(L,q){const ee=I.get(L);ee.outputColorSpace=q.outputColorSpace,ee.batching=q.batching,ee.instancing=q.instancing,ee.instancingColor=q.instancingColor,ee.instancingMorph=q.instancingMorph,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}function xa(L,q,ee,te,Z){q.isScene!==!0&&(q=ot),P.resetTextureUnits();const Ae=q.fog,ze=te.isMeshStandardMaterial?q.environment:null,qe=u===null?y.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:Li,We=(te.isMeshStandardMaterial?he:re).get(te.envMap||ze),et=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),tt=!!ee.morphAttributes.position,Ot=!!ee.morphAttributes.normal,nn=!!ee.morphAttributes.color;let Ht=Ai;te.toneMapped&&(u===null||u.isXRRenderTarget===!0)&&(Ht=y.toneMapping);const wn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ut=wn!==void 0?wn.length:0,rt=I.get(te),rr=x.state.lights;if(ae===!0&&(Se===!0||L!==w)){const rn=L===w&&te.id===F;Le.setState(te,L,rn)}let Ct=!1;te.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==rr.state.version||rt.outputColorSpace!==qe||Z.isBatchedMesh&&rt.batching===!1||!Z.isBatchedMesh&&rt.batching===!0||Z.isInstancedMesh&&rt.instancing===!1||!Z.isInstancedMesh&&rt.instancing===!0||Z.isSkinnedMesh&&rt.skinning===!1||!Z.isSkinnedMesh&&rt.skinning===!0||Z.isInstancedMesh&&rt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&rt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&rt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&rt.instancingMorph===!1&&Z.morphTexture!==null||rt.envMap!==We||te.fog===!0&&rt.fog!==Ae||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Le.numPlanes||rt.numIntersection!==Le.numIntersection)||rt.vertexAlphas!==et||rt.vertexTangents!==Ke||rt.morphTargets!==tt||rt.morphNormals!==Ot||rt.morphColors!==nn||rt.toneMapping!==Ht||rt.morphTargetsCount!==Ut)&&(Ct=!0):(Ct=!0,rt.__version=te.version);let Bn=rt.currentProgram;Ct===!0&&(Bn=ir(te,q,Z));let Kt=!1,Sn=!1,fi=!1;const Xt=Bn.getUniforms(),Hn=rt.uniforms;if($e.useProgram(Bn.program)&&(Kt=!0,Sn=!0,fi=!0),te.id!==F&&(F=te.id,Sn=!0),Kt||w!==L){Xt.setValue(K,"projectionMatrix",L.projectionMatrix),Xt.setValue(K,"viewMatrix",L.matrixWorldInverse);const rn=Xt.map.cameraPosition;rn!==void 0&&rn.setValue(K,st.setFromMatrixPosition(L.matrixWorld)),Bt.logarithmicDepthBuffer&&Xt.setValue(K,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Xt.setValue(K,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,Sn=!0,fi=!0)}if(Z.isSkinnedMesh){Xt.setOptional(K,Z,"bindMatrix"),Xt.setOptional(K,Z,"bindMatrixInverse");const rn=Z.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Xt.setValue(K,"boneTexture",rn.boneTexture,P))}Z.isBatchedMesh&&(Xt.setOptional(K,Z,"batchingTexture"),Xt.setValue(K,"batchingTexture",Z._matricesTexture,P));const Oi=ee.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Be.update(Z,ee,Bn),(Sn||rt.receiveShadow!==Z.receiveShadow)&&(rt.receiveShadow=Z.receiveShadow,Xt.setValue(K,"receiveShadow",Z.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Hn.envMap.value=We,Hn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&q.environment!==null&&(Hn.envMapIntensity.value=q.environmentIntensity),Sn&&(Xt.setValue(K,"toneMappingExposure",y.toneMappingExposure),rt.needsLights&&ya(Hn,fi),Ae&&te.fog===!0&&ue.refreshFogUniforms(Hn,Ae),ue.refreshMaterialUniforms(Hn,te,xe,pe,x.state.transmissionRenderTarget),na.upload(K,xs(rt),Hn,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(na.upload(K,xs(rt),Hn,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Xt.setValue(K,"center",Z.center),Xt.setValue(K,"modelViewMatrix",Z.modelViewMatrix),Xt.setValue(K,"normalMatrix",Z.normalMatrix),Xt.setValue(K,"modelMatrix",Z.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const rn=te.uniformsGroups;for(let hi=0,Ss=rn.length;hi<Ss;hi++){const Ms=rn[hi];Lt.update(Ms,Bn),Lt.bind(Ms,Bn)}}return Bn}function ya(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function ys(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(L,q,ee){I.get(L.texture).__webglTexture=q,I.get(L.depthTexture).__webglTexture=ee;const te=I.get(L);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,q){const ee=I.get(L);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,ee=0){u=L,D=q,B=ee;let te=!0,Z=null,Ae=!1,ze=!1;if(L){const We=I.get(L);We.__useDefaultFramebuffer!==void 0?($e.bindFramebuffer(K.FRAMEBUFFER,null),te=!1):We.__webglFramebuffer===void 0?P.setupRenderTarget(L):We.__hasExternalTextures&&P.rebindTextures(L,I.get(L.texture).__webglTexture,I.get(L.depthTexture).__webglTexture);const et=L.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(ze=!0);const Ke=I.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ke[q])?Z=Ke[q][ee]:Z=Ke[q],Ae=!0):L.samples>0&&P.useMultisampledRTT(L)===!1?Z=I.get(L).__webglMultisampledFramebuffer:Array.isArray(Ke)?Z=Ke[ee]:Z=Ke,T.copy(L.viewport),H.copy(L.scissor),W=L.scissorTest}else T.copy(ye).multiplyScalar(xe).floor(),H.copy(Ne).multiplyScalar(xe).floor(),W=at;if($e.bindFramebuffer(K.FRAMEBUFFER,Z)&&te&&$e.drawBuffers(L,Z),$e.viewport(T),$e.scissor(H),$e.setScissorTest(W),Ae){const We=I.get(L.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+q,We.__webglTexture,ee)}else if(ze){const We=I.get(L.texture),et=q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,We.__webglTexture,ee||0,et)}F=-1},this.readRenderTargetPixels=function(L,q,ee,te,Z,Ae,ze){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=I.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe){$e.bindFramebuffer(K.FRAMEBUFFER,qe);try{const We=L.texture,et=We.format,Ke=We.type;if(et!==$n&&ht.convert(et)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const tt=Ke===sa&&(Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float"));if(Ke!==wi&&ht.convert(Ke)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&Ke!==bi&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-te&&ee>=0&&ee<=L.height-Z&&K.readPixels(q,ee,te,Z,ht.convert(et),ht.convert(Ke),Ae)}finally{const We=u!==null?I.get(u).__webglFramebuffer:null;$e.bindFramebuffer(K.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(L,q,ee=0){const te=Math.pow(2,-ee),Z=Math.floor(q.image.width*te),Ae=Math.floor(q.image.height*te);P.setTexture2D(q,0),K.copyTexSubImage2D(K.TEXTURE_2D,ee,0,0,L.x,L.y,Z,Ae),$e.unbindTexture()},this.copyTextureToTexture=function(L,q,ee,te=0){const Z=q.image.width,Ae=q.image.height,ze=ht.convert(ee.format),qe=ht.convert(ee.type);P.setTexture2D(ee,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ee.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ee.unpackAlignment),q.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,te,L.x,L.y,Z,Ae,ze,qe,q.image.data):q.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,te,L.x,L.y,q.mipmaps[0].width,q.mipmaps[0].height,ze,q.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,te,L.x,L.y,ze,qe,q.image),te===0&&ee.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(L,q,ee,te,Z=0){const Ae=Math.round(L.max.x-L.min.x),ze=Math.round(L.max.y-L.min.y),qe=L.max.z-L.min.z+1,We=ht.convert(te.format),et=ht.convert(te.type);let Ke;if(te.isData3DTexture)P.setTexture3D(te,0),Ke=K.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)P.setTexture2DArray(te,0),Ke=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,te.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,te.unpackAlignment);const tt=K.getParameter(K.UNPACK_ROW_LENGTH),Ot=K.getParameter(K.UNPACK_IMAGE_HEIGHT),nn=K.getParameter(K.UNPACK_SKIP_PIXELS),Ht=K.getParameter(K.UNPACK_SKIP_ROWS),wn=K.getParameter(K.UNPACK_SKIP_IMAGES),Ut=ee.isCompressedTexture?ee.mipmaps[Z]:ee.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Ut.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ut.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,L.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,L.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,L.min.z),ee.isDataTexture||ee.isData3DTexture?K.texSubImage3D(Ke,Z,q.x,q.y,q.z,Ae,ze,qe,We,et,Ut.data):te.isCompressedArrayTexture?K.compressedTexSubImage3D(Ke,Z,q.x,q.y,q.z,Ae,ze,qe,We,Ut.data):K.texSubImage3D(Ke,Z,q.x,q.y,q.z,Ae,ze,qe,We,et,Ut),K.pixelStorei(K.UNPACK_ROW_LENGTH,tt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ot),K.pixelStorei(K.UNPACK_SKIP_PIXELS,nn),K.pixelStorei(K.UNPACK_SKIP_ROWS,Ht),K.pixelStorei(K.UNPACK_SKIP_IMAGES,wn),Z===0&&te.generateMipmaps&&K.generateMipmap(Ke),$e.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?P.setTextureCube(L,0):L.isData3DTexture?P.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?P.setTexture2DArray(L,0):P.setTexture2D(L,0),$e.unbindTexture()},this.resetState=function(){D=0,B=0,u=null,$e.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bo?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===da?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class j_ extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Vo extends tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rc=new j,Pc=new j,Lc=new Ft,mo=new pa,Ks=new ms;class Ou extends Yt{constructor(e=new vn,t=new Vo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Rc.fromBufferAttribute(t,r-1),Pc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Rc.distanceTo(Pc);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),Ks.radius+=a,e.ray.intersectsSphere(Ks)===!1)return;Lc.copy(r).invert(),mo.copy(e.ray).applyMatrix4(Lc);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=new j,m=new j,_=new j,v=new j,E=this.isLineSegments?2:1,C=n.index,x=n.attributes.position;if(C!==null){const g=Math.max(0,l.start),O=Math.min(C.count,l.start+l.count);for(let y=g,b=O-1;y<b;y+=E){const D=C.getX(y),B=C.getX(y+1);if(p.fromBufferAttribute(x,D),m.fromBufferAttribute(x,B),mo.distanceSqToSegment(p,m,v,_)>h)continue;v.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(v);F<e.near||F>e.far||t.push({distance:F,point:_.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,l.start),O=Math.min(x.count,l.start+l.count);for(let y=g,b=O-1;y<b;y+=E){if(p.fromBufferAttribute(x,y),m.fromBufferAttribute(x,y+1),mo.distanceSqToSegment(p,m,v,_)>h)continue;v.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(v);B<e.near||B>e.far||t.push({distance:B,point:_.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}const Dc=new j,Uc=new j;class Y_ extends Ou{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Dc.fromBufferAttribute(t,r),Uc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Dc.distanceTo(Uc);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fu extends tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nc=new Ft,wo=new pa,Zs=new ms,Js=new j;class $_ extends Yt{constructor(e=new vn,t=new Fu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),Zs.radius+=a,e.ray.intersectsSphere(Zs)===!1)return;Nc.copy(r).invert(),wo.copy(e.ray).applyMatrix4(Nc);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=n.index,_=n.attributes.position;if(p!==null){const v=Math.max(0,l.start),E=Math.min(p.count,l.start+l.count);for(let C=v,A=E;C<A;C++){const x=p.getX(C);Js.fromBufferAttribute(_,x),Ic(Js,x,h,r,e,t,this)}}else{const v=Math.max(0,l.start),E=Math.min(_.count,l.start+l.count);for(let C=v,A=E;C<A;C++)Js.fromBufferAttribute(_,C),Ic(Js,C,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Ic(i,e,t,n,r,a,l){const c=wo.distanceSqToPoint(i);if(c<t){const h=new j;wo.closestPointToPoint(i,h),h.applyMatrix4(n);const p=r.ray.origin.distanceTo(h);if(p<r.near||p>r.far)return;a.push({distance:p,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:l})}}class Di extends vn{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(l+c,Math.PI);let p=0;const m=[],_=new j,v=new j,E=[],C=[],A=[],x=[];for(let g=0;g<=n;g++){const O=[],y=g/n;let b=0;g===0&&l===0?b=.5/t:g===n&&h===Math.PI&&(b=-.5/t);for(let D=0;D<=t;D++){const B=D/t;_.x=-e*Math.cos(r+B*a)*Math.sin(l+y*c),_.y=e*Math.cos(l+y*c),_.z=e*Math.sin(r+B*a)*Math.sin(l+y*c),C.push(_.x,_.y,_.z),v.copy(_).normalize(),A.push(v.x,v.y,v.z),x.push(B+b,1-y),O.push(p++)}m.push(O)}for(let g=0;g<n;g++)for(let O=0;O<t;O++){const y=m[g][O+1],b=m[g][O],D=m[g+1][O],B=m[g+1][O+1];(g!==0||l>0)&&E.push(y,b,B),(g!==n-1||h<Math.PI)&&E.push(b,D,B)}this.setIndex(E),this.setAttribute("position",new un(C,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Go extends tr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Oc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class K_{constructor(e,t,n){const r=this;let a=!1,l=0,c=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){c++,a===!1&&r.onStart!==void 0&&r.onStart(m,l,c),a=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return p.push(m,_),this},this.removeHandler=function(m){const _=p.indexOf(m);return _!==-1&&p.splice(_,2),this},this.getHandler=function(m){for(let _=0,v=p.length;_<v;_+=2){const E=p[_],C=p[_+1];if(E.global&&(E.lastIndex=0),E.test(m))return C}return null}}}const Z_=new K_;class Wo{constructor(e){this.manager=e!==void 0?e:Z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";class J_ extends Wo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=Oc.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const c=ls("img");function h(){m(),Oc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function p(_){m(),r&&r(_),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){c.removeEventListener("load",h,!1),c.removeEventListener("error",p,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class Q_ extends Wo{constructor(e){super(e)}load(e,t,n,r){const a=new cn,l=new J_(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Bu extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const go=new Ft,Fc=new j,Bc=new j;class ev{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tv extends ev{constructor(){super(new Ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nv extends Bu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new tv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iv extends Bu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hc=new Ft;class rv{constructor(e,t,n=0,r=1/0){this.ray=new pa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hc),this}intersectObject(e,t=!0,n=[]){return Co(e,this,n,t),n.sort(zc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Co(e[r],this,n,t);return n.sort(zc),n}}function zc(i,e){return i.distance-e.distance}function Co(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let a=0,l=r.length;a<l;a++)Co(r[a],e,t,!0)}}class sv extends Y_{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new vn;r.setAttribute("position",new un(t,3)),r.setAttribute("color",new un(n,3));const a=new Vo({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,n){const r=new xt,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(n),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);function av(i){if(i&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function Cr(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),a=Math.round(i.b),l=i.a,c=Math.round(i.h),h=i.s.toFixed(1),p=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var m=i.hex.toString(16);m.length<6;)m="0"+m;return"#"+m}else{if(t==="CSS_RGB")return"rgb("+n+","+r+","+a+")";if(t==="CSS_RGBA")return"rgba("+n+","+r+","+a+","+l+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+r+","+a+"]";if(t==="RGBA_ARRAY")return"["+n+","+r+","+a+","+l+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+a+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+a+",a:"+l+"}";if(t==="HSV_OBJ")return"{h:"+c+",s:"+h+",v:"+p+"}";if(t==="HSVA_OBJ")return"{h:"+c+",s:"+h+",v:"+p+",a:"+l+"}"}return"unknown format"}var kc=Array.prototype.forEach,Qr=Array.prototype.slice,fe={BREAK:{},extend:function(e){return this.each(Qr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(r){this.isUndefined(t[r])||(e[r]=t[r])}.bind(this))},this),e},defaults:function(e){return this.each(Qr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(r){this.isUndefined(e[r])&&(e[r]=t[r])}.bind(this))},this),e},compose:function(){var e=Qr.call(arguments);return function(){for(var t=Qr.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(kc&&e.forEach&&e.forEach===kc)e.forEach(t,n);else if(e.length===e.length+0){var r=void 0,a=void 0;for(r=0,a=e.length;r<a;r++)if(r in e&&t.call(n,e[r],r)===this.BREAK)return}else for(var l in e)if(t.call(n,e[l],l)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var r=void 0;return function(){var a=this,l=arguments;function c(){r=null,n||e.apply(a,l)}var h=n||!r;clearTimeout(r),r=setTimeout(c,t),h&&e.apply(a,l)}},toArray:function(e){return e.toArray?e.toArray():Qr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},ov=[{litmus:fe.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Cr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Cr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Cr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Cr}}},{litmus:fe.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:fe.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:fe.isObject,conversions:{RGBA_OBJ:{read:function(e){return fe.isNumber(e.r)&&fe.isNumber(e.g)&&fe.isNumber(e.b)&&fe.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return fe.isNumber(e.r)&&fe.isNumber(e.g)&&fe.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return fe.isNumber(e.h)&&fe.isNumber(e.s)&&fe.isNumber(e.v)&&fe.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return fe.isNumber(e.h)&&fe.isNumber(e.s)&&fe.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],es=void 0,Qs=void 0,Ro=function(){Qs=!1;var e=arguments.length>1?fe.toArray(arguments):arguments[0];return fe.each(ov,function(t){if(t.litmus(e))return fe.each(t.conversions,function(n,r){if(es=n.read(e),Qs===!1&&es!==!1)return Qs=es,es.conversionName=r,es.conversion=n,fe.BREAK}),fe.BREAK}),Qs},Vc=void 0,ua={hsv_to_rgb:function(e,t,n){var r=Math.floor(e/60)%6,a=e/60-Math.floor(e/60),l=n*(1-t),c=n*(1-a*t),h=n*(1-(1-a)*t),p=[[n,h,l],[c,n,l],[l,n,h],[l,c,n],[h,l,n],[n,l,c]][r];return{r:p[0]*255,g:p[1]*255,b:p[2]*255}},rgb_to_hsv:function(e,t,n){var r=Math.min(e,t,n),a=Math.max(e,t,n),l=a-r,c=void 0,h=void 0;if(a!==0)h=l/a;else return{h:NaN,s:0,v:0};return e===a?c=(t-n)/l:t===a?c=2+(n-e)/l:c=4+(e-t)/l,c/=6,c<0&&(c+=1),{h:c*360,s:h,v:a/255}},rgb_to_hex:function(e,t,n){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,n),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Vc=t*8)|e&~(255<<Vc)}},lv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},In=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},On=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),Ri=function i(e,t,n){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:i(a,t,n)}else{if("value"in r)return r.value;var l=r.get;return l===void 0?void 0:l.call(n)}},Ui=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Ni=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},$t=function(){function i(){if(In(this,i),this.__state=Ro.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return On(i,[{key:"toString",value:function(){return Cr(this)}},{key:"toHexString",value:function(){return Cr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function Xo(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:($t.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&($t.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function qo(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:($t.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&($t.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}$t.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=ua.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")fe.extend(i.__state,ua.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};$t.recalculateHSV=function(i){var e=ua.rgb_to_hsv(i.r,i.g,i.b);fe.extend(i.__state,{s:e.s,v:e.v}),fe.isNaN(e.h)?fe.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};$t.COMPONENTS=["r","g","b","h","s","v","hex","a"];Xo($t.prototype,"r",2);Xo($t.prototype,"g",1);Xo($t.prototype,"b",0);qo($t.prototype,"h");qo($t.prototype,"s");qo($t.prototype,"v");Object.defineProperty($t.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty($t.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=ua.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var nr=function(){function i(e,t){In(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return On(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),cv={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Hu={};fe.each(cv,function(i,e){fe.each(i,function(t){Hu[t]=e})});var uv=/(\d+(\.\d+)?)px/;function Xn(i){if(i==="0"||fe.isUndefined(i))return 0;var e=i.match(uv);return fe.isNull(e)?0:parseFloat(e[1])}var J={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var r=n,a=t;fe.isUndefined(a)&&(a=!0),fe.isUndefined(r)&&(r=!0),e.style.position="absolute",a&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,r){var a=n||{},l=Hu[t];if(!l)throw new Error("Event type "+t+" not supported.");var c=document.createEvent(l);switch(l){case"MouseEvents":{var h=a.x||a.clientX||0,p=a.y||a.clientY||0;c.initMouseEvent(t,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,h,p,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var m=c.initKeyboardEvent||c.initKeyEvent;fe.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),m(t,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break}default:{c.initEvent(t,a.bubbles||!1,a.cancelable||!0);break}}fe.defaults(c,r),e.dispatchEvent(c)},bind:function(e,t,n,r){var a=r||!1;return e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,n),J},unbind:function(e,t,n,r){var a=r||!1;return e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n),J},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return J},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),r=n.indexOf(t);r!==-1&&(n.splice(r,1),e.className=n.join(" "))}else e.className=void 0;return J},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Xn(t["border-left-width"])+Xn(t["border-right-width"])+Xn(t["padding-left"])+Xn(t["padding-right"])+Xn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Xn(t["border-top-width"])+Xn(t["border-bottom-width"])+Xn(t["padding-top"])+Xn(t["padding-bottom"])+Xn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},zu=function(i){Ui(e,i);function e(t,n){In(this,e);var r=Ni(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function l(){a.setValue(!a.__prev)}return J.bind(r.__checkbox,"change",l,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return On(e,[{key:"setValue",value:function(n){var r=Ri(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ri(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(nr),fv=function(i){Ui(e,i);function e(t,n,r){In(this,e);var a=Ni(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=r,c=a;if(a.__select=document.createElement("select"),fe.isArray(l)){var h={};fe.each(l,function(p){h[p]=p}),l=h}return fe.each(l,function(p,m){var _=document.createElement("option");_.innerHTML=m,_.setAttribute("value",p),c.__select.appendChild(_)}),a.updateDisplay(),J.bind(a.__select,"change",function(){var p=this.options[this.selectedIndex].value;c.setValue(p)}),a.domElement.appendChild(a.__select),a}return On(e,[{key:"setValue",value:function(n){var r=Ri(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return J.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ri(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(nr),hv=function(i){Ui(e,i);function e(t,n){In(this,e);var r=Ni(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r;function l(){a.setValue(a.__input.value)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),J.bind(r.__input,"keyup",l),J.bind(r.__input,"change",l),J.bind(r.__input,"blur",c),J.bind(r.__input,"keydown",function(h){h.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return On(e,[{key:"updateDisplay",value:function(){return J.isActive(this.__input)||(this.__input.value=this.getValue()),Ri(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(nr);function Gc(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var ku=function(i){Ui(e,i);function e(t,n,r){In(this,e);var a=Ni(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=r||{};return a.__min=l.min,a.__max=l.max,a.__step=l.step,fe.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=Gc(a.__impliedStep),a}return On(e,[{key:"setValue",value:function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),Ri(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Gc(n),this}}]),e}(nr);function dv(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var fa=function(i){Ui(e,i);function e(t,n,r){In(this,e);var a=Ni(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,r));a.__truncationSuspended=!1;var l=a,c=void 0;function h(){var C=parseFloat(l.__input.value);fe.isNaN(C)||l.setValue(C)}function p(){l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function m(){p()}function _(C){var A=c-C.clientY;l.setValue(l.getValue()+A*l.__impliedStep),c=C.clientY}function v(){J.unbind(window,"mousemove",_),J.unbind(window,"mouseup",v),p()}function E(C){J.bind(window,"mousemove",_),J.bind(window,"mouseup",v),c=C.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),J.bind(a.__input,"change",h),J.bind(a.__input,"blur",m),J.bind(a.__input,"mousedown",E),J.bind(a.__input,"keydown",function(C){C.keyCode===13&&(l.__truncationSuspended=!0,this.blur(),l.__truncationSuspended=!1,p())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return On(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():dv(this.getValue(),this.__precision),Ri(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ku);function Wc(i,e,t,n,r){return n+(r-n)*((i-e)/(t-e))}var Po=function(i){Ui(e,i);function e(t,n,r,a,l){In(this,e);var c=Ni(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:r,max:a,step:l})),h=c;c.__background=document.createElement("div"),c.__foreground=document.createElement("div"),J.bind(c.__background,"mousedown",p),J.bind(c.__background,"touchstart",v),J.addClass(c.__background,"slider"),J.addClass(c.__foreground,"slider-fg");function p(A){document.activeElement.blur(),J.bind(window,"mousemove",m),J.bind(window,"mouseup",_),m(A)}function m(A){A.preventDefault();var x=h.__background.getBoundingClientRect();return h.setValue(Wc(A.clientX,x.left,x.right,h.__min,h.__max)),!1}function _(){J.unbind(window,"mousemove",m),J.unbind(window,"mouseup",_),h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}function v(A){A.touches.length===1&&(J.bind(window,"touchmove",E),J.bind(window,"touchend",C),E(A))}function E(A){var x=A.touches[0].clientX,g=h.__background.getBoundingClientRect();h.setValue(Wc(x,g.left,g.right,h.__min,h.__max))}function C(){J.unbind(window,"touchmove",E),J.unbind(window,"touchend",C),h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}return c.updateDisplay(),c.__background.appendChild(c.__foreground),c.domElement.appendChild(c.__background),c}return On(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Ri(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ku),Vu=function(i){Ui(e,i);function e(t,n,r){In(this,e);var a=Ni(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=a;return a.__button=document.createElement("div"),a.__button.innerHTML=r===void 0?"Fire":r,J.bind(a.__button,"click",function(c){return c.preventDefault(),l.fire(),!1}),J.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return On(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(nr),Lo=function(i){Ui(e,i);function e(t,n){In(this,e);var r=Ni(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));r.__color=new $t(r.getValue()),r.__temp=new $t(0);var a=r;r.domElement=document.createElement("div"),J.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",J.bind(r.__input,"keydown",function(A){A.keyCode===13&&_.call(this)}),J.bind(r.__input,"blur",_),J.bind(r.__selector,"mousedown",function(){J.addClass(this,"drag").bind(window,"mouseup",function(){J.removeClass(a.__selector,"drag")})}),J.bind(r.__selector,"touchstart",function(){J.addClass(this,"drag").bind(window,"touchend",function(){J.removeClass(a.__selector,"drag")})});var l=document.createElement("div");fe.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),fe.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),fe.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),fe.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),fe.extend(l.style,{width:"100%",height:"100%",background:"none"}),Xc(l,"top","rgba(0,0,0,0)","#000"),fe.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),mv(r.__hue_field),fe.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),J.bind(r.__saturation_field,"mousedown",c),J.bind(r.__saturation_field,"touchstart",c),J.bind(r.__field_knob,"mousedown",c),J.bind(r.__field_knob,"touchstart",c),J.bind(r.__hue_field,"mousedown",h),J.bind(r.__hue_field,"touchstart",h);function c(A){E(A),J.bind(window,"mousemove",E),J.bind(window,"touchmove",E),J.bind(window,"mouseup",p),J.bind(window,"touchend",p)}function h(A){C(A),J.bind(window,"mousemove",C),J.bind(window,"touchmove",C),J.bind(window,"mouseup",m),J.bind(window,"touchend",m)}function p(){J.unbind(window,"mousemove",E),J.unbind(window,"touchmove",E),J.unbind(window,"mouseup",p),J.unbind(window,"touchend",p),v()}function m(){J.unbind(window,"mousemove",C),J.unbind(window,"touchmove",C),J.unbind(window,"mouseup",m),J.unbind(window,"touchend",m),v()}function _(){var A=Ro(this.value);A!==!1?(a.__color.__state=A,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function v(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}r.__saturation_field.appendChild(l),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function E(A){A.type.indexOf("touch")===-1&&A.preventDefault();var x=a.__saturation_field.getBoundingClientRect(),g=A.touches&&A.touches[0]||A,O=g.clientX,y=g.clientY,b=(O-x.left)/(x.right-x.left),D=1-(y-x.top)/(x.bottom-x.top);return D>1?D=1:D<0&&(D=0),b>1?b=1:b<0&&(b=0),a.__color.v=D,a.__color.s=b,a.setValue(a.__color.toOriginal()),!1}function C(A){A.type.indexOf("touch")===-1&&A.preventDefault();var x=a.__hue_field.getBoundingClientRect(),g=A.touches&&A.touches[0]||A,O=g.clientY,y=1-(O-x.top)/(x.bottom-x.top);return y>1?y=1:y<0&&(y=0),a.__color.h=y*360,a.setValue(a.__color.toOriginal()),!1}return r}return On(e,[{key:"updateDisplay",value:function(){var n=Ro(this.getValue());if(n!==!1){var r=!1;fe.each($t.COMPONENTS,function(c){if(!fe.isUndefined(n[c])&&!fe.isUndefined(this.__color.__state[c])&&n[c]!==this.__color.__state[c])return r=!0,{}},this),r&&fe.extend(this.__color.__state,n)}fe.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var a=this.__color.v<.5||this.__color.s>.5?255:0,l=255-a;fe.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+a+","+a+","+a+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Xc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),fe.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+a+","+a+","+a+")",textShadow:this.__input_textShadow+"rgba("+l+","+l+","+l+",.7)"})}}]),e}(nr),pv=["-moz-","-o-","-webkit-","-ms-",""];function Xc(i,e,t,n){i.style.background="",fe.each(pv,function(r){i.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function mv(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var gv={load:function(e,t){var n=t||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,n.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var n=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var a=n.getElementsByTagName("head")[0];try{a.appendChild(r)}catch{}}},_v=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,vv=function(e,t){var n=e[t];return fe.isArray(arguments[2])||fe.isObject(arguments[2])?new fv(e,t,arguments[2]):fe.isNumber(n)?fe.isNumber(arguments[2])&&fe.isNumber(arguments[3])?fe.isNumber(arguments[4])?new Po(e,t,arguments[2],arguments[3],arguments[4]):new Po(e,t,arguments[2],arguments[3]):fe.isNumber(arguments[4])?new fa(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new fa(e,t,{min:arguments[2],max:arguments[3]}):fe.isString(n)?new hv(e,t):fe.isFunction(n)?new Vu(e,t,""):fe.isBoolean(n)?new zu(e,t):null};function xv(i){setTimeout(i,1e3/60)}var yv=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||xv,Sv=function(){function i(){In(this,i),this.backgroundElement=document.createElement("div"),fe.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),J.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),fe.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;J.bind(this.backgroundElement,"click",function(){e.hide()})}return On(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),fe.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",J.unbind(t.domElement,"webkitTransitionEnd",r),J.unbind(t.domElement,"transitionend",r),J.unbind(t.domElement,"oTransitionEnd",r)};J.bind(this.domElement,"webkitTransitionEnd",n),J.bind(this.domElement,"transitionend",n),J.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-J.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-J.getHeight(this.domElement)/2+"px"}}]),i}(),Mv=av(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);gv.inject(Mv);var qc="dg",jc=72,Yc=20,cs="Default",rs=function(){try{return!!window.localStorage}catch{return!1}}(),ss=void 0,$c=!0,br=void 0,_o=!1,Gu=[],It=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),J.addClass(this.domElement,qc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=fe.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=fe.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),fe.isUndefined(n.load)?n.load={preset:cs}:n.preset&&(n.load.preset=n.preset),fe.isUndefined(n.parent)&&n.hideable&&Gu.push(this),n.resizable=fe.isUndefined(n.parent)&&n.resizable,n.autoPlace&&fe.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=rs&&localStorage.getItem(Tr(this,"isLocal"))==="true",a=void 0,l=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(v){t.parent?t.getRoot().preset=v:n.load.preset=v,Av(this),t.revert()}},width:{get:function(){return n.width},set:function(v){n.width=v,No(t,v)}},name:{get:function(){return n.name},set:function(v){n.name=v,l&&(l.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(v){n.closed=v,n.closed?J.addClass(t.__ul,i.CLASS_CLOSED):J.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=v?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return r},set:function(v){rs&&(r=v,v?J.bind(window,"unload",a):J.unbind(window,"unload",a),localStorage.setItem(Tr(t,"isLocal"),v))}}}),fe.isUndefined(n.parent)){if(this.closed=n.closed||!1,J.addClass(this.domElement,i.CLASS_MAIN),J.makeSelectable(this.domElement,!1),rs&&r){t.useLocalStorage=!0;var c=localStorage.getItem(Tr(this,"gui"));c&&(n.load=JSON.parse(c))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,J.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(J.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(J.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),J.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var h=document.createTextNode(n.name);J.addClass(h,"controller-name"),l=jo(t,h);var p=function(v){return v.preventDefault(),t.closed=!t.closed,!1};J.addClass(this.__ul,i.CLASS_CLOSED),J.addClass(l,"title"),J.bind(l,"click",p),n.closed||(this.closed=!1)}n.autoPlace&&(fe.isUndefined(n.parent)&&($c&&(br=document.createElement("div"),J.addClass(br,qc),J.addClass(br,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(br),$c=!1),br.appendChild(this.domElement),J.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||No(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},J.bind(window,"resize",this.__resizeHandler),J.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),J.bind(this.__ul,"transitionend",this.__resizeHandler),J.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Tv(this),a=function(){rs&&localStorage.getItem(Tr(t,"isLocal"))==="true"&&localStorage.setItem(Tr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function m(){var _=t.getRoot();_.width+=1,fe.defer(function(){_.width-=1})}n.parent||m()};It.toggleHide=function(){_o=!_o,fe.each(Gu,function(i){i.domElement.style.display=_o?"none":""})};It.CLASS_AUTO_PLACE="a";It.CLASS_AUTO_PLACE_CONTAINER="ac";It.CLASS_MAIN="main";It.CLASS_CONTROLLER_ROW="cr";It.CLASS_TOO_TALL="taller-than-window";It.CLASS_CLOSED="closed";It.CLASS_CLOSE_BUTTON="close-button";It.CLASS_CLOSE_TOP="close-top";It.CLASS_CLOSE_BOTTOM="close-bottom";It.CLASS_DRAG="drag";It.DEFAULT_WIDTH=245;It.TEXT_CLOSED="Close Controls";It.TEXT_OPEN="Open Controls";It._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===jc||i.keyCode===jc)&&It.toggleHide()};J.bind(window,"keydown",It._keydownHandler,!1);fe.extend(It.prototype,{add:function(e,t){return as(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return as(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;fe.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&br.removeChild(this.domElement);var e=this;fe.each(this.__folders,function(t){e.removeFolder(t)}),J.unbind(window,"keydown",It._keydownHandler,!1),Kc(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new It(t);this.__folders[e]=n;var r=jo(this,n.domElement);return J.addClass(r,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Kc(e);var t=this;fe.each(e.__folders,function(n){e.removeFolder(n)}),fe.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=J.getOffset(e.__ul).top,n=0;fe.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(n+=J.getHeight(r))}),window.innerHeight-t-Yc<n?(J.addClass(e.domElement,It.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Yc+"px"):(J.removeClass(e.domElement,It.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&fe.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:fe.debounce(function(){this.onResize()},50),remember:function(){if(fe.isUndefined(ss)&&(ss=new Sv,ss.domElement.innerHTML=_v),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;fe.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&bv(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&No(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ea(this)),e.folders={},fe.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ea(this),Do(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[cs]=ea(this,!0)),this.load.remembered[e]=ea(this),this.preset=e,Uo(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){fe.each(this.__controllers,function(t){this.getRoot().load.remembered?Wu(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),fe.each(this.__folders,function(t){t.revert(t)}),e||Do(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Xu(this.__listening)},updateDisplay:function(){fe.each(this.__controllers,function(e){e.updateDisplay()}),fe.each(this.__folders,function(e){e.updateDisplay()})}});function jo(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function Kc(i){J.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&J.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function Do(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Ev(i,e,t){if(t.__li=e,t.__gui=i,fe.extend(t,{options:function(l){if(arguments.length>1){var c=t.__li.nextElementSibling;return t.remove(),as(i,t.object,t.property,{before:c,factoryArgs:[fe.toArray(arguments)]})}if(fe.isArray(l)||fe.isObject(l)){var h=t.__li.nextElementSibling;return t.remove(),as(i,t.object,t.property,{before:h,factoryArgs:[l]})}},name:function(l){return t.__li.firstElementChild.firstElementChild.innerHTML=l,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Po){var n=new fa(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});fe.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var l=t[a],c=n[a];t[a]=n[a]=function(){var h=Array.prototype.slice.call(arguments);return c.apply(n,h),l.apply(t,h)}}),J.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof fa){var r=function(l){if(fe.isNumber(t.__min)&&fe.isNumber(t.__max)){var c=t.__li.firstElementChild.firstElementChild.innerHTML,h=t.__gui.__listening.indexOf(t)>-1;t.remove();var p=as(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return p.name(c),h&&p.listen(),p}return l};t.min=fe.compose(r,t.min),t.max=fe.compose(r,t.max)}else t instanceof zu?(J.bind(e,"click",function(){J.fakeEvent(t.__checkbox,"click")}),J.bind(t.__checkbox,"click",function(a){a.stopPropagation()})):t instanceof Vu?(J.bind(e,"click",function(){J.fakeEvent(t.__button,"click")}),J.bind(e,"mouseover",function(){J.addClass(t.__button,"hover")}),J.bind(e,"mouseout",function(){J.removeClass(t.__button,"hover")})):t instanceof Lo&&(J.addClass(e,"color"),t.updateDisplay=fe.compose(function(a){return e.style.borderLeftColor=t.__color.toString(),a},t.updateDisplay),t.updateDisplay());t.setValue=fe.compose(function(a){return i.getRoot().__preset_select&&t.isModified()&&Do(i.getRoot(),!0),a},t.setValue)}function Wu(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var r=t.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[n]=r),r[e.property]=e,t.load&&t.load.remembered){var a=t.load.remembered,l=void 0;if(a[i.preset])l=a[i.preset];else if(a[cs])l=a[cs];else return;if(l[n]&&l[n][e.property]!==void 0){var c=l[n][e.property];e.initialValue=c,e.setValue(c)}}}}function as(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(n.color)r=new Lo(e,t);else{var a=[e,t].concat(n.factoryArgs);r=vv.apply(i,a)}n.before instanceof nr&&(n.before=n.before.__li),Wu(i,r),J.addClass(r.domElement,"c");var l=document.createElement("span");J.addClass(l,"property-name"),l.innerHTML=r.property;var c=document.createElement("div");c.appendChild(l),c.appendChild(r.domElement);var h=jo(i,c,n.before);return J.addClass(h,It.CLASS_CONTROLLER_ROW),r instanceof Lo?J.addClass(h,"color"):J.addClass(h,lv(r.getValue())),Ev(i,h,r),i.__controllers.push(r),r}function Tr(i,e){return document.location.href+"."+e}function Uo(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Zc(i,e){e.style.display=i.useLocalStorage?"block":"none"}function bv(i){var e=i.__save_row=document.createElement("li");J.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),J.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",J.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",J.addClass(n,"button"),J.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",J.addClass(r,"button"),J.addClass(r,"save-as");var a=document.createElement("span");a.innerHTML="Revert",J.addClass(a,"button"),J.addClass(a,"revert");var l=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?fe.each(i.load.remembered,function(_,v){Uo(i,v,v===i.preset)}):Uo(i,cs,!1),J.bind(l,"change",function(){for(var _=0;_<i.__preset_select.length;_++)i.__preset_select[_].innerHTML=i.__preset_select[_].value;i.preset=this.value}),e.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(a),rs){var c=document.getElementById("dg-local-explain"),h=document.getElementById("dg-local-storage"),p=document.getElementById("dg-save-locally");p.style.display="block",localStorage.getItem(Tr(i,"isLocal"))==="true"&&h.setAttribute("checked","checked"),Zc(i,c),J.bind(h,"change",function(){i.useLocalStorage=!i.useLocalStorage,Zc(i,c)})}var m=document.getElementById("dg-new-constructor");J.bind(m,"keydown",function(_){_.metaKey&&(_.which===67||_.keyCode===67)&&ss.hide()}),J.bind(t,"click",function(){m.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),ss.show(),m.focus(),m.select()}),J.bind(n,"click",function(){i.save()}),J.bind(r,"click",function(){var _=prompt("Enter a new preset name.");_&&i.saveAs(_)}),J.bind(a,"click",function(){i.revert()})}function Tv(i){var e=void 0;i.__resize_handle=document.createElement("div"),fe.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(a){return a.preventDefault(),i.width+=e-a.clientX,i.onResize(),e=a.clientX,!1}function n(){J.removeClass(i.__closeButton,It.CLASS_DRAG),J.unbind(window,"mousemove",t),J.unbind(window,"mouseup",n)}function r(a){return a.preventDefault(),e=a.clientX,J.addClass(i.__closeButton,It.CLASS_DRAG),J.bind(window,"mousemove",t),J.bind(window,"mouseup",n),!1}J.bind(i.__resize_handle,"mousedown",r),J.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function No(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function ea(i,e){var t={};return fe.each(i.__rememberedObjects,function(n,r){var a={},l=i.__rememberedObjectIndecesToControllers[r];fe.each(l,function(c,h){a[h]=e?c.initialValue:c.getValue()}),t[r]=a}),t}function Av(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function Xu(i){i.length!==0&&yv.call(window,function(){Xu(i)}),fe.each(i,function(e){e.updateDisplay()})}var wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ju={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:wv,function(e,t){var n=[],r=Object.getPrototypeOf,a=n.slice,l=n.flat?function(s){return n.flat.call(s)}:function(s){return n.concat.apply([],s)},c=n.push,h=n.indexOf,p={},m=p.toString,_=p.hasOwnProperty,v=_.toString,E=v.call(Object),C={},A=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},x=function(o){return o!=null&&o===o.window},g=e.document,O={type:!0,src:!0,nonce:!0,noModule:!0};function y(s,o,f){f=f||g;var d,S,M=f.createElement("script");if(M.text=s,o)for(d in O)S=o[d]||o.getAttribute&&o.getAttribute(d),S&&M.setAttribute(d,S);f.head.appendChild(M).parentNode.removeChild(M)}function b(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?p[m.call(s)]||"object":typeof s}var D="3.7.1",B=/HTML$/i,u=function(s,o){return new u.fn.init(s,o)};u.fn=u.prototype={jquery:D,constructor:u,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var o=u.merge(this.constructor(),s);return o.prevObject=this,o},each:function(s){return u.each(this,s)},map:function(s){return this.pushStack(u.map(this,function(o,f){return s.call(o,f,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(s,o){return(o+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(s,o){return o%2}))},eq:function(s){var o=this.length,f=+s+(s<0?o:0);return this.pushStack(f>=0&&f<o?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:n.sort,splice:n.splice},u.extend=u.fn.extend=function(){var s,o,f,d,S,M,R=arguments[0]||{},k=1,N=arguments.length,X=!1;for(typeof R=="boolean"&&(X=R,R=arguments[k]||{},k++),typeof R!="object"&&!A(R)&&(R={}),k===N&&(R=this,k--);k<N;k++)if((s=arguments[k])!=null)for(o in s)d=s[o],!(o==="__proto__"||R===d)&&(X&&d&&(u.isPlainObject(d)||(S=Array.isArray(d)))?(f=R[o],S&&!Array.isArray(f)?M=[]:!S&&!u.isPlainObject(f)?M={}:M=f,S=!1,R[o]=u.extend(X,M,d)):d!==void 0&&(R[o]=d));return R},u.extend({expando:"jQuery"+(D+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var o,f;return!s||m.call(s)!=="[object Object]"?!1:(o=r(s),o?(f=_.call(o,"constructor")&&o.constructor,typeof f=="function"&&v.call(f)===E):!0)},isEmptyObject:function(s){var o;for(o in s)return!1;return!0},globalEval:function(s,o,f){y(s,{nonce:o&&o.nonce},f)},each:function(s,o){var f,d=0;if(F(s))for(f=s.length;d<f&&o.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(o.call(s[d],d,s[d])===!1)break;return s},text:function(s){var o,f="",d=0,S=s.nodeType;if(!S)for(;o=s[d++];)f+=u.text(o);return S===1||S===11?s.textContent:S===9?s.documentElement.textContent:S===3||S===4?s.nodeValue:f},makeArray:function(s,o){var f=o||[];return s!=null&&(F(Object(s))?u.merge(f,typeof s=="string"?[s]:s):c.call(f,s)),f},inArray:function(s,o,f){return o==null?-1:h.call(o,s,f)},isXMLDoc:function(s){var o=s&&s.namespaceURI,f=s&&(s.ownerDocument||s).documentElement;return!B.test(o||f&&f.nodeName||"HTML")},merge:function(s,o){for(var f=+o.length,d=0,S=s.length;d<f;d++)s[S++]=o[d];return s.length=S,s},grep:function(s,o,f){for(var d,S=[],M=0,R=s.length,k=!f;M<R;M++)d=!o(s[M],M),d!==k&&S.push(s[M]);return S},map:function(s,o,f){var d,S,M=0,R=[];if(F(s))for(d=s.length;M<d;M++)S=o(s[M],M,f),S!=null&&R.push(S);else for(M in s)S=o(s[M],M,f),S!=null&&R.push(S);return l(R)},guid:1,support:C}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=n[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,o){p["[object "+o+"]"]=o.toLowerCase()});function F(s){var o=!!s&&"length"in s&&s.length,f=b(s);return A(s)||x(s)?!1:f==="array"||o===0||typeof o=="number"&&o>0&&o-1 in s}function w(s,o){return s.nodeName&&s.nodeName.toLowerCase()===o.toLowerCase()}var T=n.pop,H=n.sort,W=n.splice,V="[\\x20\\t\\r\\n\\f]",se=new RegExp("^"+V+"+|((?:^|[^\\\\])(?:\\\\.)*)"+V+"+$","g");u.contains=function(s,o){var f=o&&o.parentNode;return s===f||!!(f&&f.nodeType===1&&(s.contains?s.contains(f):s.compareDocumentPosition&&s.compareDocumentPosition(f)&16))};var ce=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function pe(s,o){return o?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}u.escapeSelector=function(s){return(s+"").replace(ce,pe)};var xe=g,ie=c;(function(){var s,o,f,d,S,M=ie,R,k,N,X,ne,le=u.expando,$=0,ge=0,Ye=Es(),St=Es(),ct=Es(),Zt=Es(),Vt=function(U,G){return U===G&&(S=!0),0},zn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",kn="(?:\\\\[\\da-fA-F]{1,6}"+V+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",vt="\\["+V+"*("+kn+")(?:"+V+"*([*^$|!~]?=)"+V+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+kn+"))|)"+V+"*\\]",Hi=":("+kn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+vt+")*)|.*)\\)|)",Mt=new RegExp(V+"+","g"),zt=new RegExp("^"+V+"*,"+V+"*"),Xr=new RegExp("^"+V+"*([>+~]|"+V+")"+V+"*"),Ca=new RegExp(V+"|>"),Vn=new RegExp(Hi),qr=new RegExp("^"+kn+"$"),Gn={ID:new RegExp("^#("+kn+")"),CLASS:new RegExp("^\\.("+kn+")"),TAG:new RegExp("^("+kn+"|[*])"),ATTR:new RegExp("^"+vt),PSEUDO:new RegExp("^"+Hi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+V+"*(even|odd|(([+-]|)(\\d*)n|)"+V+"*(?:([+-]|)"+V+"*(\\d+)|))"+V+"*\\)|)","i"),bool:new RegExp("^(?:"+zn+")$","i"),needsContext:new RegExp("^"+V+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+V+"*((?:-\\d)?\\d*)"+V+"*\\)|)(?=[^-]|$)","i")},di=/^(?:input|select|textarea|button)$/i,pi=/^h\d$/i,Mn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ra=/[+~]/,ti=new RegExp("\\\\[\\da-fA-F]{1,6}"+V+"?|\\\\([^\\r\\n\\f])","g"),ni=function(U,G){var Y="0x"+U.slice(1)-65536;return G||(Y<0?String.fromCharCode(Y+65536):String.fromCharCode(Y>>10|55296,Y&1023|56320))},Tf=function(){mi()},Af=Ts(function(U){return U.disabled===!0&&w(U,"fieldset")},{dir:"parentNode",next:"legend"});function wf(){try{return R.activeElement}catch{}}try{M.apply(n=a.call(xe.childNodes),xe.childNodes),n[xe.childNodes.length].nodeType}catch{M={apply:function(G,Y){ie.apply(G,a.call(Y))},call:function(G){ie.apply(G,a.call(arguments,1))}}}function wt(U,G,Y,Q){var oe,Me,Ce,Fe,Re,pt,je,Ze=G&&G.ownerDocument,mt=G?G.nodeType:9;if(Y=Y||[],typeof U!="string"||!U||mt!==1&&mt!==9&&mt!==11)return Y;if(!Q&&(mi(G),G=G||R,N)){if(mt!==11&&(Re=Mn.exec(U)))if(oe=Re[1]){if(mt===9)if(Ce=G.getElementById(oe)){if(Ce.id===oe)return M.call(Y,Ce),Y}else return Y;else if(Ze&&(Ce=Ze.getElementById(oe))&&wt.contains(G,Ce)&&Ce.id===oe)return M.call(Y,Ce),Y}else{if(Re[2])return M.apply(Y,G.getElementsByTagName(U)),Y;if((oe=Re[3])&&G.getElementsByClassName)return M.apply(Y,G.getElementsByClassName(oe)),Y}if(!Zt[U+" "]&&(!X||!X.test(U))){if(je=U,Ze=G,mt===1&&(Ca.test(U)||Xr.test(U))){for(Ze=Ra.test(U)&&Pa(G.parentNode)||G,(Ze!=G||!C.scope)&&((Fe=G.getAttribute("id"))?Fe=u.escapeSelector(Fe):G.setAttribute("id",Fe=le)),pt=jr(U),Me=pt.length;Me--;)pt[Me]=(Fe?"#"+Fe:":scope")+" "+bs(pt[Me]);je=pt.join(",")}try{return M.apply(Y,Ze.querySelectorAll(je)),Y}catch{Zt(U,!0)}finally{Fe===le&&G.removeAttribute("id")}}}return cl(U.replace(se,"$1"),G,Y,Q)}function Es(){var U=[];function G(Y,Q){return U.push(Y+" ")>o.cacheLength&&delete G[U.shift()],G[Y+" "]=Q}return G}function Rn(U){return U[le]=!0,U}function sr(U){var G=R.createElement("fieldset");try{return!!U(G)}catch{return!1}finally{G.parentNode&&G.parentNode.removeChild(G),G=null}}function Cf(U){return function(G){return w(G,"input")&&G.type===U}}function Rf(U){return function(G){return(w(G,"input")||w(G,"button"))&&G.type===U}}function ol(U){return function(G){return"form"in G?G.parentNode&&G.disabled===!1?"label"in G?"label"in G.parentNode?G.parentNode.disabled===U:G.disabled===U:G.isDisabled===U||G.isDisabled!==!U&&Af(G)===U:G.disabled===U:"label"in G?G.disabled===U:!1}}function zi(U){return Rn(function(G){return G=+G,Rn(function(Y,Q){for(var oe,Me=U([],Y.length,G),Ce=Me.length;Ce--;)Y[oe=Me[Ce]]&&(Y[oe]=!(Q[oe]=Y[oe]))})})}function Pa(U){return U&&typeof U.getElementsByTagName<"u"&&U}function mi(U){var G,Y=U?U.ownerDocument||U:xe;return Y==R||Y.nodeType!==9||!Y.documentElement||(R=Y,k=R.documentElement,N=!u.isXMLDoc(R),ne=k.matches||k.webkitMatchesSelector||k.msMatchesSelector,k.msMatchesSelector&&xe!=R&&(G=R.defaultView)&&G.top!==G&&G.addEventListener("unload",Tf),C.getById=sr(function(Q){return k.appendChild(Q).id=u.expando,!R.getElementsByName||!R.getElementsByName(u.expando).length}),C.disconnectedMatch=sr(function(Q){return ne.call(Q,"*")}),C.scope=sr(function(){return R.querySelectorAll(":scope")}),C.cssHas=sr(function(){try{return R.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),C.getById?(o.filter.ID=function(Q){var oe=Q.replace(ti,ni);return function(Me){return Me.getAttribute("id")===oe}},o.find.ID=function(Q,oe){if(typeof oe.getElementById<"u"&&N){var Me=oe.getElementById(Q);return Me?[Me]:[]}}):(o.filter.ID=function(Q){var oe=Q.replace(ti,ni);return function(Me){var Ce=typeof Me.getAttributeNode<"u"&&Me.getAttributeNode("id");return Ce&&Ce.value===oe}},o.find.ID=function(Q,oe){if(typeof oe.getElementById<"u"&&N){var Me,Ce,Fe,Re=oe.getElementById(Q);if(Re){if(Me=Re.getAttributeNode("id"),Me&&Me.value===Q)return[Re];for(Fe=oe.getElementsByName(Q),Ce=0;Re=Fe[Ce++];)if(Me=Re.getAttributeNode("id"),Me&&Me.value===Q)return[Re]}return[]}}),o.find.TAG=function(Q,oe){return typeof oe.getElementsByTagName<"u"?oe.getElementsByTagName(Q):oe.querySelectorAll(Q)},o.find.CLASS=function(Q,oe){if(typeof oe.getElementsByClassName<"u"&&N)return oe.getElementsByClassName(Q)},X=[],sr(function(Q){var oe;k.appendChild(Q).innerHTML="<a id='"+le+"' href='' disabled='disabled'></a><select id='"+le+"-\r\\' disabled='disabled'><option selected=''></option></select>",Q.querySelectorAll("[selected]").length||X.push("\\["+V+"*(?:value|"+zn+")"),Q.querySelectorAll("[id~="+le+"-]").length||X.push("~="),Q.querySelectorAll("a#"+le+"+*").length||X.push(".#.+[+~]"),Q.querySelectorAll(":checked").length||X.push(":checked"),oe=R.createElement("input"),oe.setAttribute("type","hidden"),Q.appendChild(oe).setAttribute("name","D"),k.appendChild(Q).disabled=!0,Q.querySelectorAll(":disabled").length!==2&&X.push(":enabled",":disabled"),oe=R.createElement("input"),oe.setAttribute("name",""),Q.appendChild(oe),Q.querySelectorAll("[name='']").length||X.push("\\["+V+"*name"+V+"*="+V+`*(?:''|"")`)}),C.cssHas||X.push(":has"),X=X.length&&new RegExp(X.join("|")),Vt=function(Q,oe){if(Q===oe)return S=!0,0;var Me=!Q.compareDocumentPosition-!oe.compareDocumentPosition;return Me||(Me=(Q.ownerDocument||Q)==(oe.ownerDocument||oe)?Q.compareDocumentPosition(oe):1,Me&1||!C.sortDetached&&oe.compareDocumentPosition(Q)===Me?Q===R||Q.ownerDocument==xe&&wt.contains(xe,Q)?-1:oe===R||oe.ownerDocument==xe&&wt.contains(xe,oe)?1:d?h.call(d,Q)-h.call(d,oe):0:Me&4?-1:1)}),R}wt.matches=function(U,G){return wt(U,null,null,G)},wt.matchesSelector=function(U,G){if(mi(U),N&&!Zt[G+" "]&&(!X||!X.test(G)))try{var Y=ne.call(U,G);if(Y||C.disconnectedMatch||U.document&&U.document.nodeType!==11)return Y}catch{Zt(G,!0)}return wt(G,R,null,[U]).length>0},wt.contains=function(U,G){return(U.ownerDocument||U)!=R&&mi(U),u.contains(U,G)},wt.attr=function(U,G){(U.ownerDocument||U)!=R&&mi(U);var Y=o.attrHandle[G.toLowerCase()],Q=Y&&_.call(o.attrHandle,G.toLowerCase())?Y(U,G,!N):void 0;return Q!==void 0?Q:U.getAttribute(G)},wt.error=function(U){throw new Error("Syntax error, unrecognized expression: "+U)},u.uniqueSort=function(U){var G,Y=[],Q=0,oe=0;if(S=!C.sortStable,d=!C.sortStable&&a.call(U,0),H.call(U,Vt),S){for(;G=U[oe++];)G===U[oe]&&(Q=Y.push(oe));for(;Q--;)W.call(U,Y[Q],1)}return d=null,U},u.fn.uniqueSort=function(){return this.pushStack(u.uniqueSort(a.apply(this)))},o=u.expr={cacheLength:50,createPseudo:Rn,match:Gn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(U){return U[1]=U[1].replace(ti,ni),U[3]=(U[3]||U[4]||U[5]||"").replace(ti,ni),U[2]==="~="&&(U[3]=" "+U[3]+" "),U.slice(0,4)},CHILD:function(U){return U[1]=U[1].toLowerCase(),U[1].slice(0,3)==="nth"?(U[3]||wt.error(U[0]),U[4]=+(U[4]?U[5]+(U[6]||1):2*(U[3]==="even"||U[3]==="odd")),U[5]=+(U[7]+U[8]||U[3]==="odd")):U[3]&&wt.error(U[0]),U},PSEUDO:function(U){var G,Y=!U[6]&&U[2];return Gn.CHILD.test(U[0])?null:(U[3]?U[2]=U[4]||U[5]||"":Y&&Vn.test(Y)&&(G=jr(Y,!0))&&(G=Y.indexOf(")",Y.length-G)-Y.length)&&(U[0]=U[0].slice(0,G),U[2]=Y.slice(0,G)),U.slice(0,3))}},filter:{TAG:function(U){var G=U.replace(ti,ni).toLowerCase();return U==="*"?function(){return!0}:function(Y){return w(Y,G)}},CLASS:function(U){var G=Ye[U+" "];return G||(G=new RegExp("(^|"+V+")"+U+"("+V+"|$)"))&&Ye(U,function(Y){return G.test(typeof Y.className=="string"&&Y.className||typeof Y.getAttribute<"u"&&Y.getAttribute("class")||"")})},ATTR:function(U,G,Y){return function(Q){var oe=wt.attr(Q,U);return oe==null?G==="!=":G?(oe+="",G==="="?oe===Y:G==="!="?oe!==Y:G==="^="?Y&&oe.indexOf(Y)===0:G==="*="?Y&&oe.indexOf(Y)>-1:G==="$="?Y&&oe.slice(-Y.length)===Y:G==="~="?(" "+oe.replace(Mt," ")+" ").indexOf(Y)>-1:G==="|="?oe===Y||oe.slice(0,Y.length+1)===Y+"-":!1):!0}},CHILD:function(U,G,Y,Q,oe){var Me=U.slice(0,3)!=="nth",Ce=U.slice(-4)!=="last",Fe=G==="of-type";return Q===1&&oe===0?function(Re){return!!Re.parentNode}:function(Re,pt,je){var Ze,mt,Ge,Dt,fn,Qt=Me!==Ce?"nextSibling":"previousSibling",En=Re.parentNode,Wn=Fe&&Re.nodeName.toLowerCase(),ar=!je&&!Fe,sn=!1;if(En){if(Me){for(;Qt;){for(Ge=Re;Ge=Ge[Qt];)if(Fe?w(Ge,Wn):Ge.nodeType===1)return!1;fn=Qt=U==="only"&&!fn&&"nextSibling"}return!0}if(fn=[Ce?En.firstChild:En.lastChild],Ce&&ar){for(mt=En[le]||(En[le]={}),Ze=mt[U]||[],Dt=Ze[0]===$&&Ze[1],sn=Dt&&Ze[2],Ge=Dt&&En.childNodes[Dt];Ge=++Dt&&Ge&&Ge[Qt]||(sn=Dt=0)||fn.pop();)if(Ge.nodeType===1&&++sn&&Ge===Re){mt[U]=[$,Dt,sn];break}}else if(ar&&(mt=Re[le]||(Re[le]={}),Ze=mt[U]||[],Dt=Ze[0]===$&&Ze[1],sn=Dt),sn===!1)for(;(Ge=++Dt&&Ge&&Ge[Qt]||(sn=Dt=0)||fn.pop())&&!((Fe?w(Ge,Wn):Ge.nodeType===1)&&++sn&&(ar&&(mt=Ge[le]||(Ge[le]={}),mt[U]=[$,sn]),Ge===Re)););return sn-=oe,sn===Q||sn%Q===0&&sn/Q>=0}}},PSEUDO:function(U,G){var Y,Q=o.pseudos[U]||o.setFilters[U.toLowerCase()]||wt.error("unsupported pseudo: "+U);return Q[le]?Q(G):Q.length>1?(Y=[U,U,"",G],o.setFilters.hasOwnProperty(U.toLowerCase())?Rn(function(oe,Me){for(var Ce,Fe=Q(oe,G),Re=Fe.length;Re--;)Ce=h.call(oe,Fe[Re]),oe[Ce]=!(Me[Ce]=Fe[Re])}):function(oe){return Q(oe,0,Y)}):Q}},pseudos:{not:Rn(function(U){var G=[],Y=[],Q=Na(U.replace(se,"$1"));return Q[le]?Rn(function(oe,Me,Ce,Fe){for(var Re,pt=Q(oe,null,Fe,[]),je=oe.length;je--;)(Re=pt[je])&&(oe[je]=!(Me[je]=Re))}):function(oe,Me,Ce){return G[0]=oe,Q(G,null,Ce,Y),G[0]=null,!Y.pop()}}),has:Rn(function(U){return function(G){return wt(U,G).length>0}}),contains:Rn(function(U){return U=U.replace(ti,ni),function(G){return(G.textContent||u.text(G)).indexOf(U)>-1}}),lang:Rn(function(U){return qr.test(U||"")||wt.error("unsupported lang: "+U),U=U.replace(ti,ni).toLowerCase(),function(G){var Y;do if(Y=N?G.lang:G.getAttribute("xml:lang")||G.getAttribute("lang"))return Y=Y.toLowerCase(),Y===U||Y.indexOf(U+"-")===0;while((G=G.parentNode)&&G.nodeType===1);return!1}}),target:function(U){var G=e.location&&e.location.hash;return G&&G.slice(1)===U.id},root:function(U){return U===k},focus:function(U){return U===wf()&&R.hasFocus()&&!!(U.type||U.href||~U.tabIndex)},enabled:ol(!1),disabled:ol(!0),checked:function(U){return w(U,"input")&&!!U.checked||w(U,"option")&&!!U.selected},selected:function(U){return U.parentNode&&U.parentNode.selectedIndex,U.selected===!0},empty:function(U){for(U=U.firstChild;U;U=U.nextSibling)if(U.nodeType<6)return!1;return!0},parent:function(U){return!o.pseudos.empty(U)},header:function(U){return pi.test(U.nodeName)},input:function(U){return di.test(U.nodeName)},button:function(U){return w(U,"input")&&U.type==="button"||w(U,"button")},text:function(U){var G;return w(U,"input")&&U.type==="text"&&((G=U.getAttribute("type"))==null||G.toLowerCase()==="text")},first:zi(function(){return[0]}),last:zi(function(U,G){return[G-1]}),eq:zi(function(U,G,Y){return[Y<0?Y+G:Y]}),even:zi(function(U,G){for(var Y=0;Y<G;Y+=2)U.push(Y);return U}),odd:zi(function(U,G){for(var Y=1;Y<G;Y+=2)U.push(Y);return U}),lt:zi(function(U,G,Y){var Q;for(Y<0?Q=Y+G:Y>G?Q=G:Q=Y;--Q>=0;)U.push(Q);return U}),gt:zi(function(U,G,Y){for(var Q=Y<0?Y+G:Y;++Q<G;)U.push(Q);return U})}},o.pseudos.nth=o.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[s]=Cf(s);for(s in{submit:!0,reset:!0})o.pseudos[s]=Rf(s);function ll(){}ll.prototype=o.filters=o.pseudos,o.setFilters=new ll;function jr(U,G){var Y,Q,oe,Me,Ce,Fe,Re,pt=St[U+" "];if(pt)return G?0:pt.slice(0);for(Ce=U,Fe=[],Re=o.preFilter;Ce;){(!Y||(Q=zt.exec(Ce)))&&(Q&&(Ce=Ce.slice(Q[0].length)||Ce),Fe.push(oe=[])),Y=!1,(Q=Xr.exec(Ce))&&(Y=Q.shift(),oe.push({value:Y,type:Q[0].replace(se," ")}),Ce=Ce.slice(Y.length));for(Me in o.filter)(Q=Gn[Me].exec(Ce))&&(!Re[Me]||(Q=Re[Me](Q)))&&(Y=Q.shift(),oe.push({value:Y,type:Me,matches:Q}),Ce=Ce.slice(Y.length));if(!Y)break}return G?Ce.length:Ce?wt.error(U):St(U,Fe).slice(0)}function bs(U){for(var G=0,Y=U.length,Q="";G<Y;G++)Q+=U[G].value;return Q}function Ts(U,G,Y){var Q=G.dir,oe=G.next,Me=oe||Q,Ce=Y&&Me==="parentNode",Fe=ge++;return G.first?function(Re,pt,je){for(;Re=Re[Q];)if(Re.nodeType===1||Ce)return U(Re,pt,je);return!1}:function(Re,pt,je){var Ze,mt,Ge=[$,Fe];if(je){for(;Re=Re[Q];)if((Re.nodeType===1||Ce)&&U(Re,pt,je))return!0}else for(;Re=Re[Q];)if(Re.nodeType===1||Ce)if(mt=Re[le]||(Re[le]={}),oe&&w(Re,oe))Re=Re[Q]||Re;else{if((Ze=mt[Me])&&Ze[0]===$&&Ze[1]===Fe)return Ge[2]=Ze[2];if(mt[Me]=Ge,Ge[2]=U(Re,pt,je))return!0}return!1}}function La(U){return U.length>1?function(G,Y,Q){for(var oe=U.length;oe--;)if(!U[oe](G,Y,Q))return!1;return!0}:U[0]}function Pf(U,G,Y){for(var Q=0,oe=G.length;Q<oe;Q++)wt(U,G[Q],Y);return Y}function As(U,G,Y,Q,oe){for(var Me,Ce=[],Fe=0,Re=U.length,pt=G!=null;Fe<Re;Fe++)(Me=U[Fe])&&(!Y||Y(Me,Q,oe))&&(Ce.push(Me),pt&&G.push(Fe));return Ce}function Da(U,G,Y,Q,oe,Me){return Q&&!Q[le]&&(Q=Da(Q)),oe&&!oe[le]&&(oe=Da(oe,Me)),Rn(function(Ce,Fe,Re,pt){var je,Ze,mt,Ge,Dt=[],fn=[],Qt=Fe.length,En=Ce||Pf(G||"*",Re.nodeType?[Re]:Re,[]),Wn=U&&(Ce||!G)?As(En,Dt,U,Re,pt):En;if(Y?(Ge=oe||(Ce?U:Qt||Q)?[]:Fe,Y(Wn,Ge,Re,pt)):Ge=Wn,Q)for(je=As(Ge,fn),Q(je,[],Re,pt),Ze=je.length;Ze--;)(mt=je[Ze])&&(Ge[fn[Ze]]=!(Wn[fn[Ze]]=mt));if(Ce){if(oe||U){if(oe){for(je=[],Ze=Ge.length;Ze--;)(mt=Ge[Ze])&&je.push(Wn[Ze]=mt);oe(null,Ge=[],je,pt)}for(Ze=Ge.length;Ze--;)(mt=Ge[Ze])&&(je=oe?h.call(Ce,mt):Dt[Ze])>-1&&(Ce[je]=!(Fe[je]=mt))}}else Ge=As(Ge===Fe?Ge.splice(Qt,Ge.length):Ge),oe?oe(null,Fe,Ge,pt):M.apply(Fe,Ge)})}function Ua(U){for(var G,Y,Q,oe=U.length,Me=o.relative[U[0].type],Ce=Me||o.relative[" "],Fe=Me?1:0,Re=Ts(function(Ze){return Ze===G},Ce,!0),pt=Ts(function(Ze){return h.call(G,Ze)>-1},Ce,!0),je=[function(Ze,mt,Ge){var Dt=!Me&&(Ge||mt!=f)||((G=mt).nodeType?Re(Ze,mt,Ge):pt(Ze,mt,Ge));return G=null,Dt}];Fe<oe;Fe++)if(Y=o.relative[U[Fe].type])je=[Ts(La(je),Y)];else{if(Y=o.filter[U[Fe].type].apply(null,U[Fe].matches),Y[le]){for(Q=++Fe;Q<oe&&!o.relative[U[Q].type];Q++);return Da(Fe>1&&La(je),Fe>1&&bs(U.slice(0,Fe-1).concat({value:U[Fe-2].type===" "?"*":""})).replace(se,"$1"),Y,Fe<Q&&Ua(U.slice(Fe,Q)),Q<oe&&Ua(U=U.slice(Q)),Q<oe&&bs(U))}je.push(Y)}return La(je)}function Lf(U,G){var Y=G.length>0,Q=U.length>0,oe=function(Me,Ce,Fe,Re,pt){var je,Ze,mt,Ge=0,Dt="0",fn=Me&&[],Qt=[],En=f,Wn=Me||Q&&o.find.TAG("*",pt),ar=$+=En==null?1:Math.random()||.1,sn=Wn.length;for(pt&&(f=Ce==R||Ce||pt);Dt!==sn&&(je=Wn[Dt])!=null;Dt++){if(Q&&je){for(Ze=0,!Ce&&je.ownerDocument!=R&&(mi(je),Fe=!N);mt=U[Ze++];)if(mt(je,Ce||R,Fe)){M.call(Re,je);break}pt&&($=ar)}Y&&((je=!mt&&je)&&Ge--,Me&&fn.push(je))}if(Ge+=Dt,Y&&Dt!==Ge){for(Ze=0;mt=G[Ze++];)mt(fn,Qt,Ce,Fe);if(Me){if(Ge>0)for(;Dt--;)fn[Dt]||Qt[Dt]||(Qt[Dt]=T.call(Re));Qt=As(Qt)}M.apply(Re,Qt),pt&&!Me&&Qt.length>0&&Ge+G.length>1&&u.uniqueSort(Re)}return pt&&($=ar,f=En),fn};return Y?Rn(oe):oe}function Na(U,G){var Y,Q=[],oe=[],Me=ct[U+" "];if(!Me){for(G||(G=jr(U)),Y=G.length;Y--;)Me=Ua(G[Y]),Me[le]?Q.push(Me):oe.push(Me);Me=ct(U,Lf(oe,Q)),Me.selector=U}return Me}function cl(U,G,Y,Q){var oe,Me,Ce,Fe,Re,pt=typeof U=="function"&&U,je=!Q&&jr(U=pt.selector||U);if(Y=Y||[],je.length===1){if(Me=je[0]=je[0].slice(0),Me.length>2&&(Ce=Me[0]).type==="ID"&&G.nodeType===9&&N&&o.relative[Me[1].type]){if(G=(o.find.ID(Ce.matches[0].replace(ti,ni),G)||[])[0],G)pt&&(G=G.parentNode);else return Y;U=U.slice(Me.shift().value.length)}for(oe=Gn.needsContext.test(U)?0:Me.length;oe--&&(Ce=Me[oe],!o.relative[Fe=Ce.type]);)if((Re=o.find[Fe])&&(Q=Re(Ce.matches[0].replace(ti,ni),Ra.test(Me[0].type)&&Pa(G.parentNode)||G))){if(Me.splice(oe,1),U=Q.length&&bs(Me),!U)return M.apply(Y,Q),Y;break}}return(pt||Na(U,je))(Q,G,!N,Y,!G||Ra.test(U)&&Pa(G.parentNode)||G),Y}C.sortStable=le.split("").sort(Vt).join("")===le,mi(),C.sortDetached=sr(function(U){return U.compareDocumentPosition(R.createElement("fieldset"))&1}),u.find=wt,u.expr[":"]=u.expr.pseudos,u.unique=u.uniqueSort,wt.compile=Na,wt.select=cl,wt.setDocument=mi,wt.tokenize=jr,wt.escape=u.escapeSelector,wt.getText=u.text,wt.isXML=u.isXMLDoc,wt.selectors=u.expr,wt.support=u.support,wt.uniqueSort=u.uniqueSort})();var ve=function(s,o,f){for(var d=[],S=f!==void 0;(s=s[o])&&s.nodeType!==9;)if(s.nodeType===1){if(S&&u(s).is(f))break;d.push(s)}return d},ye=function(s,o){for(var f=[];s;s=s.nextSibling)s.nodeType===1&&s!==o&&f.push(s);return f},Ne=u.expr.match.needsContext,at=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function yt(s,o,f){return A(o)?u.grep(s,function(d,S){return!!o.call(d,S,d)!==f}):o.nodeType?u.grep(s,function(d){return d===o!==f}):typeof o!="string"?u.grep(s,function(d){return h.call(o,d)>-1!==f}):u.filter(o,s,f)}u.filter=function(s,o,f){var d=o[0];return f&&(s=":not("+s+")"),o.length===1&&d.nodeType===1?u.find.matchesSelector(d,s)?[d]:[]:u.find.matches(s,u.grep(o,function(S){return S.nodeType===1}))},u.fn.extend({find:function(s){var o,f,d=this.length,S=this;if(typeof s!="string")return this.pushStack(u(s).filter(function(){for(o=0;o<d;o++)if(u.contains(S[o],this))return!0}));for(f=this.pushStack([]),o=0;o<d;o++)u.find(s,S[o],f);return d>1?u.uniqueSort(f):f},filter:function(s){return this.pushStack(yt(this,s||[],!1))},not:function(s){return this.pushStack(yt(this,s||[],!0))},is:function(s){return!!yt(this,typeof s=="string"&&Ne.test(s)?u(s):s||[],!1).length}});var ae,Se=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,De=u.fn.init=function(s,o,f){var d,S;if(!s)return this;if(f=f||ae,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=Se.exec(s),d&&(d[1]||!o))if(d[1]){if(o=o instanceof u?o[0]:o,u.merge(this,u.parseHTML(d[1],o&&o.nodeType?o.ownerDocument||o:g,!0)),at.test(d[1])&&u.isPlainObject(o))for(d in o)A(this[d])?this[d](o[d]):this.attr(d,o[d]);return this}else return S=g.getElementById(d[2]),S&&(this[0]=S,this.length=1),this;else return!o||o.jquery?(o||f).find(s):this.constructor(o).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(A(s))return f.ready!==void 0?f.ready(s):s(u)}return u.makeArray(s,this)};De.prototype=u.fn,ae=u(g);var Pe=/^(?:parents|prev(?:Until|All))/,st={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(s){var o=u(s,this),f=o.length;return this.filter(function(){for(var d=0;d<f;d++)if(u.contains(this,o[d]))return!0})},closest:function(s,o){var f,d=0,S=this.length,M=[],R=typeof s!="string"&&u(s);if(!Ne.test(s)){for(;d<S;d++)for(f=this[d];f&&f!==o;f=f.parentNode)if(f.nodeType<11&&(R?R.index(f)>-1:f.nodeType===1&&u.find.matchesSelector(f,s))){M.push(f);break}}return this.pushStack(M.length>1?u.uniqueSort(M):M)},index:function(s){return s?typeof s=="string"?h.call(u(s),this[0]):h.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,o){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(s,o))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function ot(s,o){for(;(s=s[o])&&s.nodeType!==1;);return s}u.each({parent:function(s){var o=s.parentNode;return o&&o.nodeType!==11?o:null},parents:function(s){return ve(s,"parentNode")},parentsUntil:function(s,o,f){return ve(s,"parentNode",f)},next:function(s){return ot(s,"nextSibling")},prev:function(s){return ot(s,"previousSibling")},nextAll:function(s){return ve(s,"nextSibling")},prevAll:function(s){return ve(s,"previousSibling")},nextUntil:function(s,o,f){return ve(s,"nextSibling",f)},prevUntil:function(s,o,f){return ve(s,"previousSibling",f)},siblings:function(s){return ye((s.parentNode||{}).firstChild,s)},children:function(s){return ye(s.firstChild)},contents:function(s){return s.contentDocument!=null&&r(s.contentDocument)?s.contentDocument:(w(s,"template")&&(s=s.content||s),u.merge([],s.childNodes))}},function(s,o){u.fn[s]=function(f,d){var S=u.map(this,o,f);return s.slice(-5)!=="Until"&&(d=f),d&&typeof d=="string"&&(S=u.filter(d,S)),this.length>1&&(st[s]||u.uniqueSort(S),Pe.test(s)&&S.reverse()),this.pushStack(S)}});var Je=/[^\x20\t\r\n\f]+/g;function K(s){var o={};return u.each(s.match(Je)||[],function(f,d){o[d]=!0}),o}u.Callbacks=function(s){s=typeof s=="string"?K(s):u.extend({},s);var o,f,d,S,M=[],R=[],k=-1,N=function(){for(S=S||s.once,d=o=!0;R.length;k=-1)for(f=R.shift();++k<M.length;)M[k].apply(f[0],f[1])===!1&&s.stopOnFalse&&(k=M.length,f=!1);s.memory||(f=!1),o=!1,S&&(f?M=[]:M="")},X={add:function(){return M&&(f&&!o&&(k=M.length-1,R.push(f)),function ne(le){u.each(le,function($,ge){A(ge)?(!s.unique||!X.has(ge))&&M.push(ge):ge&&ge.length&&b(ge)!=="string"&&ne(ge)})}(arguments),f&&!o&&N()),this},remove:function(){return u.each(arguments,function(ne,le){for(var $;($=u.inArray(le,M,$))>-1;)M.splice($,1),$<=k&&k--}),this},has:function(ne){return ne?u.inArray(ne,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return S=R=[],M=f="",this},disabled:function(){return!M},lock:function(){return S=R=[],!f&&!o&&(M=f=""),this},locked:function(){return!!S},fireWith:function(ne,le){return S||(le=le||[],le=[ne,le.slice?le.slice():le],R.push(le),o||N()),this},fire:function(){return X.fireWith(this,arguments),this},fired:function(){return!!d}};return X};function nt(s){return s}function Xe(s){throw s}function Bt(s,o,f,d){var S;try{s&&A(S=s.promise)?S.call(s).done(o).fail(f):s&&A(S=s.then)?S.call(s,o,f):o.apply(void 0,[s].slice(d))}catch(M){f.apply(void 0,[M])}}u.extend({Deferred:function(s){var o=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],f="pending",d={state:function(){return f},always:function(){return S.done(arguments).fail(arguments),this},catch:function(M){return d.then(null,M)},pipe:function(){var M=arguments;return u.Deferred(function(R){u.each(o,function(k,N){var X=A(M[N[4]])&&M[N[4]];S[N[1]](function(){var ne=X&&X.apply(this,arguments);ne&&A(ne.promise)?ne.promise().progress(R.notify).done(R.resolve).fail(R.reject):R[N[0]+"With"](this,X?[ne]:arguments)})}),M=null}).promise()},then:function(M,R,k){var N=0;function X(ne,le,$,ge){return function(){var Ye=this,St=arguments,ct=function(){var Vt,zn;if(!(ne<N)){if(Vt=$.apply(Ye,St),Vt===le.promise())throw new TypeError("Thenable self-resolution");zn=Vt&&(typeof Vt=="object"||typeof Vt=="function")&&Vt.then,A(zn)?ge?zn.call(Vt,X(N,le,nt,ge),X(N,le,Xe,ge)):(N++,zn.call(Vt,X(N,le,nt,ge),X(N,le,Xe,ge),X(N,le,nt,le.notifyWith))):($!==nt&&(Ye=void 0,St=[Vt]),(ge||le.resolveWith)(Ye,St))}},Zt=ge?ct:function(){try{ct()}catch(Vt){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(Vt,Zt.error),ne+1>=N&&($!==Xe&&(Ye=void 0,St=[Vt]),le.rejectWith(Ye,St))}};ne?Zt():(u.Deferred.getErrorHook?Zt.error=u.Deferred.getErrorHook():u.Deferred.getStackHook&&(Zt.error=u.Deferred.getStackHook()),e.setTimeout(Zt))}}return u.Deferred(function(ne){o[0][3].add(X(0,ne,A(k)?k:nt,ne.notifyWith)),o[1][3].add(X(0,ne,A(M)?M:nt)),o[2][3].add(X(0,ne,A(R)?R:Xe))}).promise()},promise:function(M){return M!=null?u.extend(M,d):d}},S={};return u.each(o,function(M,R){var k=R[2],N=R[5];d[R[1]]=k.add,N&&k.add(function(){f=N},o[3-M][2].disable,o[3-M][3].disable,o[0][2].lock,o[0][3].lock),k.add(R[3].fire),S[R[0]]=function(){return S[R[0]+"With"](this===S?void 0:this,arguments),this},S[R[0]+"With"]=k.fireWith}),d.promise(S),s&&s.call(S,S),S},when:function(s){var o=arguments.length,f=o,d=Array(f),S=a.call(arguments),M=u.Deferred(),R=function(k){return function(N){d[k]=this,S[k]=arguments.length>1?a.call(arguments):N,--o||M.resolveWith(d,S)}};if(o<=1&&(Bt(s,M.done(R(f)).resolve,M.reject,!o),M.state()==="pending"||A(S[f]&&S[f].then)))return M.then();for(;f--;)Bt(S[f],R(f),M.reject);return M.promise()}});var $e=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(s,o){e.console&&e.console.warn&&s&&$e.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,o)},u.readyException=function(s){e.setTimeout(function(){throw s})};var Et=u.Deferred();u.fn.ready=function(s){return Et.then(s).catch(function(o){u.readyException(o)}),this},u.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(s!==!0&&--u.readyWait>0)&&Et.resolveWith(g,[u]))}}),u.ready.then=Et.then;function I(){g.removeEventListener("DOMContentLoaded",I),e.removeEventListener("load",I),u.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(u.ready):(g.addEventListener("DOMContentLoaded",I),e.addEventListener("load",I));var P=function(s,o,f,d,S,M,R){var k=0,N=s.length,X=f==null;if(b(f)==="object"){S=!0;for(k in f)P(s,o,k,f[k],!0,M,R)}else if(d!==void 0&&(S=!0,A(d)||(R=!0),X&&(R?(o.call(s,d),o=null):(X=o,o=function(ne,le,$){return X.call(u(ne),$)})),o))for(;k<N;k++)o(s[k],f,R?d:d.call(s[k],k,o(s[k],f)));return S?s:X?o.call(s):N?o(s[0],f):M},re=/^-ms-/,he=/-([a-z])/g;function me(s,o){return o.toUpperCase()}function de(s){return s.replace(re,"ms-").replace(he,me)}var Ve=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function _e(){this.expando=u.expando+_e.uid++}_e.uid=1,_e.prototype={cache:function(s){var o=s[this.expando];return o||(o={},Ve(s)&&(s.nodeType?s[this.expando]=o:Object.defineProperty(s,this.expando,{value:o,configurable:!0}))),o},set:function(s,o,f){var d,S=this.cache(s);if(typeof o=="string")S[de(o)]=f;else for(d in o)S[de(d)]=o[d];return S},get:function(s,o){return o===void 0?this.cache(s):s[this.expando]&&s[this.expando][de(o)]},access:function(s,o,f){return o===void 0||o&&typeof o=="string"&&f===void 0?this.get(s,o):(this.set(s,o,f),f!==void 0?f:o)},remove:function(s,o){var f,d=s[this.expando];if(d!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(de):(o=de(o),o=o in d?[o]:o.match(Je)||[]),f=o.length;f--;)delete d[o[f]];(o===void 0||u.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var o=s[this.expando];return o!==void 0&&!u.isEmptyObject(o)}};var ue=new _e,Ue=new _e,Te=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Le=/[A-Z]/g;function Qe(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Te.test(s)?JSON.parse(s):s}function Ie(s,o,f){var d;if(f===void 0&&s.nodeType===1)if(d="data-"+o.replace(Le,"-$&").toLowerCase(),f=s.getAttribute(d),typeof f=="string"){try{f=Qe(f)}catch{}Ue.set(s,o,f)}else f=void 0;return f}u.extend({hasData:function(s){return Ue.hasData(s)||ue.hasData(s)},data:function(s,o,f){return Ue.access(s,o,f)},removeData:function(s,o){Ue.remove(s,o)},_data:function(s,o,f){return ue.access(s,o,f)},_removeData:function(s,o){ue.remove(s,o)}}),u.fn.extend({data:function(s,o){var f,d,S,M=this[0],R=M&&M.attributes;if(s===void 0){if(this.length&&(S=Ue.get(M),M.nodeType===1&&!ue.get(M,"hasDataAttrs"))){for(f=R.length;f--;)R[f]&&(d=R[f].name,d.indexOf("data-")===0&&(d=de(d.slice(5)),Ie(M,d,S[d])));ue.set(M,"hasDataAttrs",!0)}return S}return typeof s=="object"?this.each(function(){Ue.set(this,s)}):P(this,function(k){var N;if(M&&k===void 0)return N=Ue.get(M,s),N!==void 0||(N=Ie(M,s),N!==void 0)?N:void 0;this.each(function(){Ue.set(this,s,k)})},null,o,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){Ue.remove(this,s)})}}),u.extend({queue:function(s,o,f){var d;if(s)return o=(o||"fx")+"queue",d=ue.get(s,o),f&&(!d||Array.isArray(f)?d=ue.access(s,o,u.makeArray(f)):d.push(f)),d||[]},dequeue:function(s,o){o=o||"fx";var f=u.queue(s,o),d=f.length,S=f.shift(),M=u._queueHooks(s,o),R=function(){u.dequeue(s,o)};S==="inprogress"&&(S=f.shift(),d--),S&&(o==="fx"&&f.unshift("inprogress"),delete M.stop,S.call(s,R,M)),!d&&M&&M.empty.fire()},_queueHooks:function(s,o){var f=o+"queueHooks";return ue.get(s,f)||ue.access(s,f,{empty:u.Callbacks("once memory").add(function(){ue.remove(s,[o+"queue",f])})})}}),u.fn.extend({queue:function(s,o){var f=2;return typeof s!="string"&&(o=s,s="fx",f--),arguments.length<f?u.queue(this[0],s):o===void 0?this:this.each(function(){var d=u.queue(this,s,o);u._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&u.dequeue(this,s)})},dequeue:function(s){return this.each(function(){u.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,o){var f,d=1,S=u.Deferred(),M=this,R=this.length,k=function(){--d||S.resolveWith(M,[M])};for(typeof s!="string"&&(o=s,s=void 0),s=s||"fx";R--;)f=ue.get(M[R],s+"queueHooks"),f&&f.empty&&(d++,f.empty.add(k));return k(),S.promise(o)}});var Be=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=new RegExp("^(?:([+-])=|)("+Be+")([a-z%]*)$","i"),it=["Top","Right","Bottom","Left"],ht=g.documentElement,dt=function(s){return u.contains(s.ownerDocument,s)},Lt={composed:!0};ht.getRootNode&&(dt=function(s){return u.contains(s.ownerDocument,s)||s.getRootNode(Lt)===s.ownerDocument});var He=function(s,o){return s=o||s,s.style.display==="none"||s.style.display===""&&dt(s)&&u.css(s,"display")==="none"};function z(s,o,f,d){var S,M,R=20,k=d?function(){return d.cur()}:function(){return u.css(s,o,"")},N=k(),X=f&&f[3]||(u.cssNumber[o]?"":"px"),ne=s.nodeType&&(u.cssNumber[o]||X!=="px"&&+N)&&lt.exec(u.css(s,o));if(ne&&ne[3]!==X){for(N=N/2,X=X||ne[3],ne=+N||1;R--;)u.style(s,o,ne+X),(1-M)*(1-(M=k()/N||.5))<=0&&(R=0),ne=ne/M;ne=ne*2,u.style(s,o,ne+X),f=f||[]}return f&&(ne=+ne||+N||0,S=f[1]?ne+(f[1]+1)*f[2]:+f[2],d&&(d.unit=X,d.start=ne,d.end=S)),S}var be={};function Ee(s){var o,f=s.ownerDocument,d=s.nodeName,S=be[d];return S||(o=f.body.appendChild(f.createElement(d)),S=u.css(o,"display"),o.parentNode.removeChild(o),S==="none"&&(S="block"),be[d]=S,S)}function Oe(s,o){for(var f,d,S=[],M=0,R=s.length;M<R;M++)d=s[M],d.style&&(f=d.style.display,o?(f==="none"&&(S[M]=ue.get(d,"display")||null,S[M]||(d.style.display="")),d.style.display===""&&He(d)&&(S[M]=Ee(d))):f!=="none"&&(S[M]="none",ue.set(d,"display",f)));for(M=0;M<R;M++)S[M]!=null&&(s[M].style.display=S[M]);return s}u.fn.extend({show:function(){return Oe(this,!0)},hide:function(){return Oe(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){He(this)?u(this).show():u(this).hide()})}});var ke=/^(?:checkbox|radio)$/i,Tt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Pt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=g.createDocumentFragment(),o=s.appendChild(g.createElement("div")),f=g.createElement("input");f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),o.appendChild(f),C.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",C.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",C.option=!!o.lastChild})();var _t={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};_t.tbody=_t.tfoot=_t.colgroup=_t.caption=_t.thead,_t.th=_t.td,C.option||(_t.optgroup=_t.option=[1,"<select multiple='multiple'>","</select>"]);function bt(s,o){var f;return typeof s.getElementsByTagName<"u"?f=s.getElementsByTagName(o||"*"):typeof s.querySelectorAll<"u"?f=s.querySelectorAll(o||"*"):f=[],o===void 0||o&&w(s,o)?u.merge([s],f):f}function At(s,o){for(var f=0,d=s.length;f<d;f++)ue.set(s[f],"globalEval",!o||ue.get(o[f],"globalEval"))}var yn=/<|&#?\w+;/;function mn(s,o,f,d,S){for(var M,R,k,N,X,ne,le=o.createDocumentFragment(),$=[],ge=0,Ye=s.length;ge<Ye;ge++)if(M=s[ge],M||M===0)if(b(M)==="object")u.merge($,M.nodeType?[M]:M);else if(!yn.test(M))$.push(o.createTextNode(M));else{for(R=R||le.appendChild(o.createElement("div")),k=(Tt.exec(M)||["",""])[1].toLowerCase(),N=_t[k]||_t._default,R.innerHTML=N[1]+u.htmlPrefilter(M)+N[2],ne=N[0];ne--;)R=R.lastChild;u.merge($,R.childNodes),R=le.firstChild,R.textContent=""}for(le.textContent="",ge=0;M=$[ge++];){if(d&&u.inArray(M,d)>-1){S&&S.push(M);continue}if(X=dt(M),R=bt(le.appendChild(M),"script"),X&&At(R),f)for(ne=0;M=R[ne++];)Pt.test(M.type||"")&&f.push(M)}return le}var Fn=/^([^.]*)(?:\.(.+)|)/;function Jn(){return!0}function Qn(){return!1}function zr(s,o,f,d,S,M){var R,k;if(typeof o=="object"){typeof f!="string"&&(d=d||f,f=void 0);for(k in o)zr(s,k,f,d,o[k],M);return s}if(d==null&&S==null?(S=f,d=f=void 0):S==null&&(typeof f=="string"?(S=d,d=void 0):(S=d,d=f,f=void 0)),S===!1)S=Qn;else if(!S)return s;return M===1&&(R=S,S=function(N){return u().off(N),R.apply(this,arguments)},S.guid=R.guid||(R.guid=u.guid++)),s.each(function(){u.event.add(this,o,S,d,f)})}u.event={global:{},add:function(s,o,f,d,S){var M,R,k,N,X,ne,le,$,ge,Ye,St,ct=ue.get(s);if(Ve(s))for(f.handler&&(M=f,f=M.handler,S=M.selector),S&&u.find.matchesSelector(ht,S),f.guid||(f.guid=u.guid++),(N=ct.events)||(N=ct.events=Object.create(null)),(R=ct.handle)||(R=ct.handle=function(Zt){return typeof u<"u"&&u.event.triggered!==Zt.type?u.event.dispatch.apply(s,arguments):void 0}),o=(o||"").match(Je)||[""],X=o.length;X--;)k=Fn.exec(o[X])||[],ge=St=k[1],Ye=(k[2]||"").split(".").sort(),ge&&(le=u.event.special[ge]||{},ge=(S?le.delegateType:le.bindType)||ge,le=u.event.special[ge]||{},ne=u.extend({type:ge,origType:St,data:d,handler:f,guid:f.guid,selector:S,needsContext:S&&u.expr.match.needsContext.test(S),namespace:Ye.join(".")},M),($=N[ge])||($=N[ge]=[],$.delegateCount=0,(!le.setup||le.setup.call(s,d,Ye,R)===!1)&&s.addEventListener&&s.addEventListener(ge,R)),le.add&&(le.add.call(s,ne),ne.handler.guid||(ne.handler.guid=f.guid)),S?$.splice($.delegateCount++,0,ne):$.push(ne),u.event.global[ge]=!0)},remove:function(s,o,f,d,S){var M,R,k,N,X,ne,le,$,ge,Ye,St,ct=ue.hasData(s)&&ue.get(s);if(!(!ct||!(N=ct.events))){for(o=(o||"").match(Je)||[""],X=o.length;X--;){if(k=Fn.exec(o[X])||[],ge=St=k[1],Ye=(k[2]||"").split(".").sort(),!ge){for(ge in N)u.event.remove(s,ge+o[X],f,d,!0);continue}for(le=u.event.special[ge]||{},ge=(d?le.delegateType:le.bindType)||ge,$=N[ge]||[],k=k[2]&&new RegExp("(^|\\.)"+Ye.join("\\.(?:.*\\.|)")+"(\\.|$)"),R=M=$.length;M--;)ne=$[M],(S||St===ne.origType)&&(!f||f.guid===ne.guid)&&(!k||k.test(ne.namespace))&&(!d||d===ne.selector||d==="**"&&ne.selector)&&($.splice(M,1),ne.selector&&$.delegateCount--,le.remove&&le.remove.call(s,ne));R&&!$.length&&((!le.teardown||le.teardown.call(s,Ye,ct.handle)===!1)&&u.removeEvent(s,ge,ct.handle),delete N[ge])}u.isEmptyObject(N)&&ue.remove(s,"handle events")}},dispatch:function(s){var o,f,d,S,M,R,k=new Array(arguments.length),N=u.event.fix(s),X=(ue.get(this,"events")||Object.create(null))[N.type]||[],ne=u.event.special[N.type]||{};for(k[0]=N,o=1;o<arguments.length;o++)k[o]=arguments[o];if(N.delegateTarget=this,!(ne.preDispatch&&ne.preDispatch.call(this,N)===!1)){for(R=u.event.handlers.call(this,N,X),o=0;(S=R[o++])&&!N.isPropagationStopped();)for(N.currentTarget=S.elem,f=0;(M=S.handlers[f++])&&!N.isImmediatePropagationStopped();)(!N.rnamespace||M.namespace===!1||N.rnamespace.test(M.namespace))&&(N.handleObj=M,N.data=M.data,d=((u.event.special[M.origType]||{}).handle||M.handler).apply(S.elem,k),d!==void 0&&(N.result=d)===!1&&(N.preventDefault(),N.stopPropagation()));return ne.postDispatch&&ne.postDispatch.call(this,N),N.result}},handlers:function(s,o){var f,d,S,M,R,k=[],N=o.delegateCount,X=s.target;if(N&&X.nodeType&&!(s.type==="click"&&s.button>=1)){for(;X!==this;X=X.parentNode||this)if(X.nodeType===1&&!(s.type==="click"&&X.disabled===!0)){for(M=[],R={},f=0;f<N;f++)d=o[f],S=d.selector+" ",R[S]===void 0&&(R[S]=d.needsContext?u(S,this).index(X)>-1:u.find(S,this,null,[X]).length),R[S]&&M.push(d);M.length&&k.push({elem:X,handlers:M})}}return X=this,N<o.length&&k.push({elem:X,handlers:o.slice(N)}),k},addProp:function(s,o){Object.defineProperty(u.Event.prototype,s,{enumerable:!0,configurable:!0,get:A(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(f){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:f})}})},fix:function(s){return s[u.expando]?s:new u.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var o=this||s;return ke.test(o.type)&&o.click&&w(o,"input")&&ei(o,"click",!0),!1},trigger:function(s){var o=this||s;return ke.test(o.type)&&o.click&&w(o,"input")&&ei(o,"click"),!0},_default:function(s){var o=s.target;return ke.test(o.type)&&o.click&&w(o,"input")&&ue.get(o,"click")||w(o,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function ei(s,o,f){if(!f){ue.get(s,o)===void 0&&u.event.add(s,o,Jn);return}ue.set(s,o,!1),u.event.add(s,o,{namespace:!1,handler:function(d){var S,M=ue.get(this,o);if(d.isTrigger&1&&this[o]){if(M)(u.event.special[o]||{}).delegateType&&d.stopPropagation();else if(M=a.call(arguments),ue.set(this,o,M),this[o](),S=ue.get(this,o),ue.set(this,o,!1),M!==S)return d.stopImmediatePropagation(),d.preventDefault(),S}else M&&(ue.set(this,o,u.event.trigger(M[0],M.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=Jn)}})}u.removeEvent=function(s,o,f){s.removeEventListener&&s.removeEventListener(o,f)},u.Event=function(s,o){if(!(this instanceof u.Event))return new u.Event(s,o);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Jn:Qn,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,o&&u.extend(this,o),this.timeStamp=s&&s.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:Qn,isPropagationStopped:Qn,isImmediatePropagationStopped:Qn,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Jn,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Jn,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Jn,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(s,o){function f(d){if(g.documentMode){var S=ue.get(this,"handle"),M=u.event.fix(d);M.type=d.type==="focusin"?"focus":"blur",M.isSimulated=!0,S(d),M.target===M.currentTarget&&S(M)}else u.event.simulate(o,d.target,u.event.fix(d))}u.event.special[s]={setup:function(){var d;if(ei(this,s,!0),g.documentMode)d=ue.get(this,o),d||this.addEventListener(o,f),ue.set(this,o,(d||0)+1);else return!1},trigger:function(){return ei(this,s),!0},teardown:function(){var d;if(g.documentMode)d=ue.get(this,o)-1,d?ue.set(this,o,d):(this.removeEventListener(o,f),ue.remove(this,o));else return!1},_default:function(d){return ue.get(d.target,s)},delegateType:o},u.event.special[o]={setup:function(){var d=this.ownerDocument||this.document||this,S=g.documentMode?this:d,M=ue.get(S,o);M||(g.documentMode?this.addEventListener(o,f):d.addEventListener(s,f,!0)),ue.set(S,o,(M||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,S=g.documentMode?this:d,M=ue.get(S,o)-1;M?ue.set(S,o,M):(g.documentMode?this.removeEventListener(o,f):d.removeEventListener(s,f,!0),ue.remove(S,o))}}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,o){u.event.special[s]={delegateType:o,bindType:o,handle:function(f){var d,S=this,M=f.relatedTarget,R=f.handleObj;return(!M||M!==S&&!u.contains(S,M))&&(f.type=R.origType,d=R.handler.apply(this,arguments),f.type=o),d}}}),u.fn.extend({on:function(s,o,f,d){return zr(this,s,o,f,d)},one:function(s,o,f,d){return zr(this,s,o,f,d,1)},off:function(s,o,f){var d,S;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,u(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(S in s)this.off(S,o,s[S]);return this}return(o===!1||typeof o=="function")&&(f=o,o=void 0),f===!1&&(f=Qn),this.each(function(){u.event.remove(this,s,f,o)})}});var vs=/<script|<style|<link/i,ir=/checked\s*(?:[^=]|=\s*.checked.)/i,xs=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function kr(s,o){return w(s,"table")&&w(o.nodeType!==11?o:o.firstChild,"tr")&&u(s).children("tbody")[0]||s}function xa(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function ya(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function ys(s,o){var f,d,S,M,R,k,N;if(o.nodeType===1){if(ue.hasData(s)&&(M=ue.get(s),N=M.events,N)){ue.remove(o,"handle events");for(S in N)for(f=0,d=N[S].length;f<d;f++)u.event.add(o,S,N[S][f])}Ue.hasData(s)&&(R=Ue.access(s),k=u.extend({},R),Ue.set(o,k))}}function L(s,o){var f=o.nodeName.toLowerCase();f==="input"&&ke.test(s.type)?o.checked=s.checked:(f==="input"||f==="textarea")&&(o.defaultValue=s.defaultValue)}function q(s,o,f,d){o=l(o);var S,M,R,k,N,X,ne=0,le=s.length,$=le-1,ge=o[0],Ye=A(ge);if(Ye||le>1&&typeof ge=="string"&&!C.checkClone&&ir.test(ge))return s.each(function(St){var ct=s.eq(St);Ye&&(o[0]=ge.call(this,St,ct.html())),q(ct,o,f,d)});if(le&&(S=mn(o,s[0].ownerDocument,!1,s,d),M=S.firstChild,S.childNodes.length===1&&(S=M),M||d)){for(R=u.map(bt(S,"script"),xa),k=R.length;ne<le;ne++)N=S,ne!==$&&(N=u.clone(N,!0,!0),k&&u.merge(R,bt(N,"script"))),f.call(s[ne],N,ne);if(k)for(X=R[R.length-1].ownerDocument,u.map(R,ya),ne=0;ne<k;ne++)N=R[ne],Pt.test(N.type||"")&&!ue.access(N,"globalEval")&&u.contains(X,N)&&(N.src&&(N.type||"").toLowerCase()!=="module"?u._evalUrl&&!N.noModule&&u._evalUrl(N.src,{nonce:N.nonce||N.getAttribute("nonce")},X):y(N.textContent.replace(xs,""),N,X))}return s}function ee(s,o,f){for(var d,S=o?u.filter(o,s):s,M=0;(d=S[M])!=null;M++)!f&&d.nodeType===1&&u.cleanData(bt(d)),d.parentNode&&(f&&dt(d)&&At(bt(d,"script")),d.parentNode.removeChild(d));return s}u.extend({htmlPrefilter:function(s){return s},clone:function(s,o,f){var d,S,M,R,k=s.cloneNode(!0),N=dt(s);if(!C.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!u.isXMLDoc(s))for(R=bt(k),M=bt(s),d=0,S=M.length;d<S;d++)L(M[d],R[d]);if(o)if(f)for(M=M||bt(s),R=R||bt(k),d=0,S=M.length;d<S;d++)ys(M[d],R[d]);else ys(s,k);return R=bt(k,"script"),R.length>0&&At(R,!N&&bt(s,"script")),k},cleanData:function(s){for(var o,f,d,S=u.event.special,M=0;(f=s[M])!==void 0;M++)if(Ve(f)){if(o=f[ue.expando]){if(o.events)for(d in o.events)S[d]?u.event.remove(f,d):u.removeEvent(f,d,o.handle);f[ue.expando]=void 0}f[Ue.expando]&&(f[Ue.expando]=void 0)}}}),u.fn.extend({detach:function(s){return ee(this,s,!0)},remove:function(s){return ee(this,s)},text:function(s){return P(this,function(o){return o===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,s,arguments.length)},append:function(){return q(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=kr(this,s);o.appendChild(s)}})},prepend:function(){return q(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=kr(this,s);o.insertBefore(s,o.firstChild)}})},before:function(){return q(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return q(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,o=0;(s=this[o])!=null;o++)s.nodeType===1&&(u.cleanData(bt(s,!1)),s.textContent="");return this},clone:function(s,o){return s=s??!1,o=o??s,this.map(function(){return u.clone(this,s,o)})},html:function(s){return P(this,function(o){var f=this[0]||{},d=0,S=this.length;if(o===void 0&&f.nodeType===1)return f.innerHTML;if(typeof o=="string"&&!vs.test(o)&&!_t[(Tt.exec(o)||["",""])[1].toLowerCase()]){o=u.htmlPrefilter(o);try{for(;d<S;d++)f=this[d]||{},f.nodeType===1&&(u.cleanData(bt(f,!1)),f.innerHTML=o);f=0}catch{}}f&&this.empty().append(o)},null,s,arguments.length)},replaceWith:function(){var s=[];return q(this,arguments,function(o){var f=this.parentNode;u.inArray(this,s)<0&&(u.cleanData(bt(this)),f&&f.replaceChild(o,this))},s)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,o){u.fn[s]=function(f){for(var d,S=[],M=u(f),R=M.length-1,k=0;k<=R;k++)d=k===R?this:this.clone(!0),u(M[k])[o](d),c.apply(S,d.get());return this.pushStack(S)}});var te=new RegExp("^("+Be+")(?!px)[a-z%]+$","i"),Z=/^--/,Ae=function(s){var o=s.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(s)},ze=function(s,o,f){var d,S,M={};for(S in o)M[S]=s.style[S],s.style[S]=o[S];d=f.call(s);for(S in o)s.style[S]=M[S];return d},qe=new RegExp(it.join("|"),"i");(function(){function s(){if(X){N.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",X.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ht.appendChild(N).appendChild(X);var ne=e.getComputedStyle(X);f=ne.top!=="1%",k=o(ne.marginLeft)===12,X.style.right="60%",M=o(ne.right)===36,d=o(ne.width)===36,X.style.position="absolute",S=o(X.offsetWidth/3)===12,ht.removeChild(N),X=null}}function o(ne){return Math.round(parseFloat(ne))}var f,d,S,M,R,k,N=g.createElement("div"),X=g.createElement("div");X.style&&(X.style.backgroundClip="content-box",X.cloneNode(!0).style.backgroundClip="",C.clearCloneStyle=X.style.backgroundClip==="content-box",u.extend(C,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),M},pixelPosition:function(){return s(),f},reliableMarginLeft:function(){return s(),k},scrollboxSize:function(){return s(),S},reliableTrDimensions:function(){var ne,le,$,ge;return R==null&&(ne=g.createElement("table"),le=g.createElement("tr"),$=g.createElement("div"),ne.style.cssText="position:absolute;left:-11111px;border-collapse:separate",le.style.cssText="box-sizing:content-box;border:1px solid",le.style.height="1px",$.style.height="9px",$.style.display="block",ht.appendChild(ne).appendChild(le).appendChild($),ge=e.getComputedStyle(le),R=parseInt(ge.height,10)+parseInt(ge.borderTopWidth,10)+parseInt(ge.borderBottomWidth,10)===le.offsetHeight,ht.removeChild(ne)),R}}))})();function We(s,o,f){var d,S,M,R,k=Z.test(o),N=s.style;return f=f||Ae(s),f&&(R=f.getPropertyValue(o)||f[o],k&&R&&(R=R.replace(se,"$1")||void 0),R===""&&!dt(s)&&(R=u.style(s,o)),!C.pixelBoxStyles()&&te.test(R)&&qe.test(o)&&(d=N.width,S=N.minWidth,M=N.maxWidth,N.minWidth=N.maxWidth=N.width=R,R=f.width,N.width=d,N.minWidth=S,N.maxWidth=M)),R!==void 0?R+"":R}function et(s,o){return{get:function(){if(s()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var Ke=["Webkit","Moz","ms"],tt=g.createElement("div").style,Ot={};function nn(s){for(var o=s[0].toUpperCase()+s.slice(1),f=Ke.length;f--;)if(s=Ke[f]+o,s in tt)return s}function Ht(s){var o=u.cssProps[s]||Ot[s];return o||(s in tt?s:Ot[s]=nn(s)||s)}var wn=/^(none|table(?!-c[ea]).+)/,Ut={position:"absolute",visibility:"hidden",display:"block"},rt={letterSpacing:"0",fontWeight:"400"};function rr(s,o,f){var d=lt.exec(o);return d?Math.max(0,d[2]-(f||0))+(d[3]||"px"):o}function Ct(s,o,f,d,S,M){var R=o==="width"?1:0,k=0,N=0,X=0;if(f===(d?"border":"content"))return 0;for(;R<4;R+=2)f==="margin"&&(X+=u.css(s,f+it[R],!0,S)),d?(f==="content"&&(N-=u.css(s,"padding"+it[R],!0,S)),f!=="margin"&&(N-=u.css(s,"border"+it[R]+"Width",!0,S))):(N+=u.css(s,"padding"+it[R],!0,S),f!=="padding"?N+=u.css(s,"border"+it[R]+"Width",!0,S):k+=u.css(s,"border"+it[R]+"Width",!0,S));return!d&&M>=0&&(N+=Math.max(0,Math.ceil(s["offset"+o[0].toUpperCase()+o.slice(1)]-M-N-k-.5))||0),N+X}function Bn(s,o,f){var d=Ae(s),S=!C.boxSizingReliable()||f,M=S&&u.css(s,"boxSizing",!1,d)==="border-box",R=M,k=We(s,o,d),N="offset"+o[0].toUpperCase()+o.slice(1);if(te.test(k)){if(!f)return k;k="auto"}return(!C.boxSizingReliable()&&M||!C.reliableTrDimensions()&&w(s,"tr")||k==="auto"||!parseFloat(k)&&u.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(M=u.css(s,"boxSizing",!1,d)==="border-box",R=N in s,R&&(k=s[N])),k=parseFloat(k)||0,k+Ct(s,o,f||(M?"border":"content"),R,d,k)+"px"}u.extend({cssHooks:{opacity:{get:function(s,o){if(o){var f=We(s,"opacity");return f===""?"1":f}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,o,f,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var S,M,R,k=de(o),N=Z.test(o),X=s.style;if(N||(o=Ht(k)),R=u.cssHooks[o]||u.cssHooks[k],f!==void 0){if(M=typeof f,M==="string"&&(S=lt.exec(f))&&S[1]&&(f=z(s,o,S),M="number"),f==null||f!==f)return;M==="number"&&!N&&(f+=S&&S[3]||(u.cssNumber[k]?"":"px")),!C.clearCloneStyle&&f===""&&o.indexOf("background")===0&&(X[o]="inherit"),(!R||!("set"in R)||(f=R.set(s,f,d))!==void 0)&&(N?X.setProperty(o,f):X[o]=f)}else return R&&"get"in R&&(S=R.get(s,!1,d))!==void 0?S:X[o]}},css:function(s,o,f,d){var S,M,R,k=de(o),N=Z.test(o);return N||(o=Ht(k)),R=u.cssHooks[o]||u.cssHooks[k],R&&"get"in R&&(S=R.get(s,!0,f)),S===void 0&&(S=We(s,o,d)),S==="normal"&&o in rt&&(S=rt[o]),f===""||f?(M=parseFloat(S),f===!0||isFinite(M)?M||0:S):S}}),u.each(["height","width"],function(s,o){u.cssHooks[o]={get:function(f,d,S){if(d)return wn.test(u.css(f,"display"))&&(!f.getClientRects().length||!f.getBoundingClientRect().width)?ze(f,Ut,function(){return Bn(f,o,S)}):Bn(f,o,S)},set:function(f,d,S){var M,R=Ae(f),k=!C.scrollboxSize()&&R.position==="absolute",N=k||S,X=N&&u.css(f,"boxSizing",!1,R)==="border-box",ne=S?Ct(f,o,S,X,R):0;return X&&k&&(ne-=Math.ceil(f["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(R[o])-Ct(f,o,"border",!1,R)-.5)),ne&&(M=lt.exec(d))&&(M[3]||"px")!=="px"&&(f.style[o]=d,d=u.css(f,o)),rr(f,d,ne)}}}),u.cssHooks.marginLeft=et(C.reliableMarginLeft,function(s,o){if(o)return(parseFloat(We(s,"marginLeft"))||s.getBoundingClientRect().left-ze(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(s,o){u.cssHooks[s+o]={expand:function(f){for(var d=0,S={},M=typeof f=="string"?f.split(" "):[f];d<4;d++)S[s+it[d]+o]=M[d]||M[d-2]||M[0];return S}},s!=="margin"&&(u.cssHooks[s+o].set=rr)}),u.fn.extend({css:function(s,o){return P(this,function(f,d,S){var M,R,k={},N=0;if(Array.isArray(d)){for(M=Ae(f),R=d.length;N<R;N++)k[d[N]]=u.css(f,d[N],!1,M);return k}return S!==void 0?u.style(f,d,S):u.css(f,d)},s,o,arguments.length>1)}});function Kt(s,o,f,d,S){return new Kt.prototype.init(s,o,f,d,S)}u.Tween=Kt,Kt.prototype={constructor:Kt,init:function(s,o,f,d,S,M){this.elem=s,this.prop=f,this.easing=S||u.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=d,this.unit=M||(u.cssNumber[f]?"":"px")},cur:function(){var s=Kt.propHooks[this.prop];return s&&s.get?s.get(this):Kt.propHooks._default.get(this)},run:function(s){var o,f=Kt.propHooks[this.prop];return this.options.duration?this.pos=o=u.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=o=s,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):Kt.propHooks._default.set(this),this}},Kt.prototype.init.prototype=Kt.prototype,Kt.propHooks={_default:{get:function(s){var o;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(o=u.css(s.elem,s.prop,""),!o||o==="auto"?0:o)},set:function(s){u.fx.step[s.prop]?u.fx.step[s.prop](s):s.elem.nodeType===1&&(u.cssHooks[s.prop]||s.elem.style[Ht(s.prop)]!=null)?u.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Kt.propHooks.scrollTop=Kt.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},u.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},u.fx=Kt.prototype.init,u.fx.step={};var Sn,fi,Xt=/^(?:toggle|show|hide)$/,Hn=/queueHooks$/;function Oi(){fi&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Oi):e.setTimeout(Oi,u.fx.interval),u.fx.tick())}function rn(){return e.setTimeout(function(){Sn=void 0}),Sn=Date.now()}function hi(s,o){var f,d=0,S={height:s};for(o=o?1:0;d<4;d+=2-o)f=it[d],S["margin"+f]=S["padding"+f]=s;return o&&(S.opacity=S.width=s),S}function Ss(s,o,f){for(var d,S=(Cn.tweeners[o]||[]).concat(Cn.tweeners["*"]),M=0,R=S.length;M<R;M++)if(d=S[M].call(f,o,s))return d}function Ms(s,o,f){var d,S,M,R,k,N,X,ne,le="width"in o||"height"in o,$=this,ge={},Ye=s.style,St=s.nodeType&&He(s),ct=ue.get(s,"fxshow");f.queue||(R=u._queueHooks(s,"fx"),R.unqueued==null&&(R.unqueued=0,k=R.empty.fire,R.empty.fire=function(){R.unqueued||k()}),R.unqueued++,$.always(function(){$.always(function(){R.unqueued--,u.queue(s,"fx").length||R.empty.fire()})}));for(d in o)if(S=o[d],Xt.test(S)){if(delete o[d],M=M||S==="toggle",S===(St?"hide":"show"))if(S==="show"&&ct&&ct[d]!==void 0)St=!0;else continue;ge[d]=ct&&ct[d]||u.style(s,d)}if(N=!u.isEmptyObject(o),!(!N&&u.isEmptyObject(ge))){le&&s.nodeType===1&&(f.overflow=[Ye.overflow,Ye.overflowX,Ye.overflowY],X=ct&&ct.display,X==null&&(X=ue.get(s,"display")),ne=u.css(s,"display"),ne==="none"&&(X?ne=X:(Oe([s],!0),X=s.style.display||X,ne=u.css(s,"display"),Oe([s]))),(ne==="inline"||ne==="inline-block"&&X!=null)&&u.css(s,"float")==="none"&&(N||($.done(function(){Ye.display=X}),X==null&&(ne=Ye.display,X=ne==="none"?"":ne)),Ye.display="inline-block")),f.overflow&&(Ye.overflow="hidden",$.always(function(){Ye.overflow=f.overflow[0],Ye.overflowX=f.overflow[1],Ye.overflowY=f.overflow[2]})),N=!1;for(d in ge)N||(ct?"hidden"in ct&&(St=ct.hidden):ct=ue.access(s,"fxshow",{display:X}),M&&(ct.hidden=!St),St&&Oe([s],!0),$.done(function(){St||Oe([s]),ue.remove(s,"fxshow");for(d in ge)u.style(s,d,ge[d])})),N=Ss(St?ct[d]:0,d,$),d in ct||(ct[d]=N.start,St&&(N.end=N.start,N.start=0))}}function sf(s,o){var f,d,S,M,R;for(f in s)if(d=de(f),S=o[d],M=s[f],Array.isArray(M)&&(S=M[1],M=s[f]=M[0]),f!==d&&(s[d]=M,delete s[f]),R=u.cssHooks[d],R&&"expand"in R){M=R.expand(M),delete s[d];for(f in M)f in s||(s[f]=M[f],o[f]=S)}else o[d]=S}function Cn(s,o,f){var d,S,M=0,R=Cn.prefilters.length,k=u.Deferred().always(function(){delete N.elem}),N=function(){if(S)return!1;for(var le=Sn||rn(),$=Math.max(0,X.startTime+X.duration-le),ge=$/X.duration||0,Ye=1-ge,St=0,ct=X.tweens.length;St<ct;St++)X.tweens[St].run(Ye);return k.notifyWith(s,[X,Ye,$]),Ye<1&&ct?$:(ct||k.notifyWith(s,[X,1,0]),k.resolveWith(s,[X]),!1)},X=k.promise({elem:s,props:u.extend({},o),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},f),originalProperties:o,originalOptions:f,startTime:Sn||rn(),duration:f.duration,tweens:[],createTween:function(le,$){var ge=u.Tween(s,X.opts,le,$,X.opts.specialEasing[le]||X.opts.easing);return X.tweens.push(ge),ge},stop:function(le){var $=0,ge=le?X.tweens.length:0;if(S)return this;for(S=!0;$<ge;$++)X.tweens[$].run(1);return le?(k.notifyWith(s,[X,1,0]),k.resolveWith(s,[X,le])):k.rejectWith(s,[X,le]),this}}),ne=X.props;for(sf(ne,X.opts.specialEasing);M<R;M++)if(d=Cn.prefilters[M].call(X,s,ne,X.opts),d)return A(d.stop)&&(u._queueHooks(X.elem,X.opts.queue).stop=d.stop.bind(d)),d;return u.map(ne,Ss,X),A(X.opts.start)&&X.opts.start.call(s,X),X.progress(X.opts.progress).done(X.opts.done,X.opts.complete).fail(X.opts.fail).always(X.opts.always),u.fx.timer(u.extend(N,{elem:s,anim:X,queue:X.opts.queue})),X}u.Animation=u.extend(Cn,{tweeners:{"*":[function(s,o){var f=this.createTween(s,o);return z(f.elem,s,lt.exec(o),f),f}]},tweener:function(s,o){A(s)?(o=s,s=["*"]):s=s.match(Je);for(var f,d=0,S=s.length;d<S;d++)f=s[d],Cn.tweeners[f]=Cn.tweeners[f]||[],Cn.tweeners[f].unshift(o)},prefilters:[Ms],prefilter:function(s,o){o?Cn.prefilters.unshift(s):Cn.prefilters.push(s)}}),u.speed=function(s,o,f){var d=s&&typeof s=="object"?u.extend({},s):{complete:f||!f&&o||A(s)&&s,duration:s,easing:f&&o||o&&!A(o)&&o};return u.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in u.fx.speeds?d.duration=u.fx.speeds[d.duration]:d.duration=u.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){A(d.old)&&d.old.call(this),d.queue&&u.dequeue(this,d.queue)},d},u.fn.extend({fadeTo:function(s,o,f,d){return this.filter(He).css("opacity",0).show().end().animate({opacity:o},s,f,d)},animate:function(s,o,f,d){var S=u.isEmptyObject(s),M=u.speed(o,f,d),R=function(){var k=Cn(this,u.extend({},s),M);(S||ue.get(this,"finish"))&&k.stop(!0)};return R.finish=R,S||M.queue===!1?this.each(R):this.queue(M.queue,R)},stop:function(s,o,f){var d=function(S){var M=S.stop;delete S.stop,M(f)};return typeof s!="string"&&(f=o,o=s,s=void 0),o&&this.queue(s||"fx",[]),this.each(function(){var S=!0,M=s!=null&&s+"queueHooks",R=u.timers,k=ue.get(this);if(M)k[M]&&k[M].stop&&d(k[M]);else for(M in k)k[M]&&k[M].stop&&Hn.test(M)&&d(k[M]);for(M=R.length;M--;)R[M].elem===this&&(s==null||R[M].queue===s)&&(R[M].anim.stop(f),S=!1,R.splice(M,1));(S||!f)&&u.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var o,f=ue.get(this),d=f[s+"queue"],S=f[s+"queueHooks"],M=u.timers,R=d?d.length:0;for(f.finish=!0,u.queue(this,s,[]),S&&S.stop&&S.stop.call(this,!0),o=M.length;o--;)M[o].elem===this&&M[o].queue===s&&(M[o].anim.stop(!0),M.splice(o,1));for(o=0;o<R;o++)d[o]&&d[o].finish&&d[o].finish.call(this);delete f.finish})}}),u.each(["toggle","show","hide"],function(s,o){var f=u.fn[o];u.fn[o]=function(d,S,M){return d==null||typeof d=="boolean"?f.apply(this,arguments):this.animate(hi(o,!0),d,S,M)}}),u.each({slideDown:hi("show"),slideUp:hi("hide"),slideToggle:hi("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,o){u.fn[s]=function(f,d,S){return this.animate(o,f,d,S)}}),u.timers=[],u.fx.tick=function(){var s,o=0,f=u.timers;for(Sn=Date.now();o<f.length;o++)s=f[o],!s()&&f[o]===s&&f.splice(o--,1);f.length||u.fx.stop(),Sn=void 0},u.fx.timer=function(s){u.timers.push(s),u.fx.start()},u.fx.interval=13,u.fx.start=function(){fi||(fi=!0,Oi())},u.fx.stop=function(){fi=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(s,o){return s=u.fx&&u.fx.speeds[s]||s,o=o||"fx",this.queue(o,function(f,d){var S=e.setTimeout(f,s);d.stop=function(){e.clearTimeout(S)}})},function(){var s=g.createElement("input"),o=g.createElement("select"),f=o.appendChild(g.createElement("option"));s.type="checkbox",C.checkOn=s.value!=="",C.optSelected=f.selected,s=g.createElement("input"),s.value="t",s.type="radio",C.radioValue=s.value==="t"}();var Zo,Vr=u.expr.attrHandle;u.fn.extend({attr:function(s,o){return P(this,u.attr,s,o,arguments.length>1)},removeAttr:function(s){return this.each(function(){u.removeAttr(this,s)})}}),u.extend({attr:function(s,o,f){var d,S,M=s.nodeType;if(!(M===3||M===8||M===2)){if(typeof s.getAttribute>"u")return u.prop(s,o,f);if((M!==1||!u.isXMLDoc(s))&&(S=u.attrHooks[o.toLowerCase()]||(u.expr.match.bool.test(o)?Zo:void 0)),f!==void 0){if(f===null){u.removeAttr(s,o);return}return S&&"set"in S&&(d=S.set(s,f,o))!==void 0?d:(s.setAttribute(o,f+""),f)}return S&&"get"in S&&(d=S.get(s,o))!==null?d:(d=u.find.attr(s,o),d??void 0)}},attrHooks:{type:{set:function(s,o){if(!C.radioValue&&o==="radio"&&w(s,"input")){var f=s.value;return s.setAttribute("type",o),f&&(s.value=f),o}}}},removeAttr:function(s,o){var f,d=0,S=o&&o.match(Je);if(S&&s.nodeType===1)for(;f=S[d++];)s.removeAttribute(f)}}),Zo={set:function(s,o,f){return o===!1?u.removeAttr(s,f):s.setAttribute(f,f),f}},u.each(u.expr.match.bool.source.match(/\w+/g),function(s,o){var f=Vr[o]||u.find.attr;Vr[o]=function(d,S,M){var R,k,N=S.toLowerCase();return M||(k=Vr[N],Vr[N]=R,R=f(d,S,M)!=null?N:null,Vr[N]=k),R}});var af=/^(?:input|select|textarea|button)$/i,of=/^(?:a|area)$/i;u.fn.extend({prop:function(s,o){return P(this,u.prop,s,o,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[u.propFix[s]||s]})}}),u.extend({prop:function(s,o,f){var d,S,M=s.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!u.isXMLDoc(s))&&(o=u.propFix[o]||o,S=u.propHooks[o]),f!==void 0?S&&"set"in S&&(d=S.set(s,f,o))!==void 0?d:s[o]=f:S&&"get"in S&&(d=S.get(s,o))!==null?d:s[o]},propHooks:{tabIndex:{get:function(s){var o=u.find.attr(s,"tabindex");return o?parseInt(o,10):af.test(s.nodeName)||of.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),C.optSelected||(u.propHooks.selected={get:function(s){var o=s.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(s){var o=s.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function Fi(s){var o=s.match(Je)||[];return o.join(" ")}function Bi(s){return s.getAttribute&&s.getAttribute("class")||""}function Sa(s){return Array.isArray(s)?s:typeof s=="string"?s.match(Je)||[]:[]}u.fn.extend({addClass:function(s){var o,f,d,S,M,R;return A(s)?this.each(function(k){u(this).addClass(s.call(this,k,Bi(this)))}):(o=Sa(s),o.length?this.each(function(){if(d=Bi(this),f=this.nodeType===1&&" "+Fi(d)+" ",f){for(M=0;M<o.length;M++)S=o[M],f.indexOf(" "+S+" ")<0&&(f+=S+" ");R=Fi(f),d!==R&&this.setAttribute("class",R)}}):this)},removeClass:function(s){var o,f,d,S,M,R;return A(s)?this.each(function(k){u(this).removeClass(s.call(this,k,Bi(this)))}):arguments.length?(o=Sa(s),o.length?this.each(function(){if(d=Bi(this),f=this.nodeType===1&&" "+Fi(d)+" ",f){for(M=0;M<o.length;M++)for(S=o[M];f.indexOf(" "+S+" ")>-1;)f=f.replace(" "+S+" "," ");R=Fi(f),d!==R&&this.setAttribute("class",R)}}):this):this.attr("class","")},toggleClass:function(s,o){var f,d,S,M,R=typeof s,k=R==="string"||Array.isArray(s);return A(s)?this.each(function(N){u(this).toggleClass(s.call(this,N,Bi(this),o),o)}):typeof o=="boolean"&&k?o?this.addClass(s):this.removeClass(s):(f=Sa(s),this.each(function(){if(k)for(M=u(this),S=0;S<f.length;S++)d=f[S],M.hasClass(d)?M.removeClass(d):M.addClass(d);else(s===void 0||R==="boolean")&&(d=Bi(this),d&&ue.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":ue.get(this,"__className__")||""))}))},hasClass:function(s){var o,f,d=0;for(o=" "+s+" ";f=this[d++];)if(f.nodeType===1&&(" "+Fi(Bi(f))+" ").indexOf(o)>-1)return!0;return!1}});var lf=/\r/g;u.fn.extend({val:function(s){var o,f,d,S=this[0];return arguments.length?(d=A(s),this.each(function(M){var R;this.nodeType===1&&(d?R=s.call(this,M,u(this).val()):R=s,R==null?R="":typeof R=="number"?R+="":Array.isArray(R)&&(R=u.map(R,function(k){return k==null?"":k+""})),o=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,R,"value")===void 0)&&(this.value=R))})):S?(o=u.valHooks[S.type]||u.valHooks[S.nodeName.toLowerCase()],o&&"get"in o&&(f=o.get(S,"value"))!==void 0?f:(f=S.value,typeof f=="string"?f.replace(lf,""):f??"")):void 0}}),u.extend({valHooks:{option:{get:function(s){var o=u.find.attr(s,"value");return o??Fi(u.text(s))}},select:{get:function(s){var o,f,d,S=s.options,M=s.selectedIndex,R=s.type==="select-one",k=R?null:[],N=R?M+1:S.length;for(M<0?d=N:d=R?M:0;d<N;d++)if(f=S[d],(f.selected||d===M)&&!f.disabled&&(!f.parentNode.disabled||!w(f.parentNode,"optgroup"))){if(o=u(f).val(),R)return o;k.push(o)}return k},set:function(s,o){for(var f,d,S=s.options,M=u.makeArray(o),R=S.length;R--;)d=S[R],(d.selected=u.inArray(u.valHooks.option.get(d),M)>-1)&&(f=!0);return f||(s.selectedIndex=-1),M}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(s,o){if(Array.isArray(o))return s.checked=u.inArray(u(s).val(),o)>-1}},C.checkOn||(u.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Gr=e.location,Jo={guid:Date.now()},Ma=/\?/;u.parseXML=function(s){var o,f;if(!s||typeof s!="string")return null;try{o=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return f=o&&o.getElementsByTagName("parsererror")[0],(!o||f)&&u.error("Invalid XML: "+(f?u.map(f.childNodes,function(d){return d.textContent}).join(`
`):s)),o};var Qo=/^(?:focusinfocus|focusoutblur)$/,el=function(s){s.stopPropagation()};u.extend(u.event,{trigger:function(s,o,f,d){var S,M,R,k,N,X,ne,le,$=[f||g],ge=_.call(s,"type")?s.type:s,Ye=_.call(s,"namespace")?s.namespace.split("."):[];if(M=le=R=f=f||g,!(f.nodeType===3||f.nodeType===8)&&!Qo.test(ge+u.event.triggered)&&(ge.indexOf(".")>-1&&(Ye=ge.split("."),ge=Ye.shift(),Ye.sort()),N=ge.indexOf(":")<0&&"on"+ge,s=s[u.expando]?s:new u.Event(ge,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=Ye.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+Ye.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=f),o=o==null?[s]:u.makeArray(o,[s]),ne=u.event.special[ge]||{},!(!d&&ne.trigger&&ne.trigger.apply(f,o)===!1))){if(!d&&!ne.noBubble&&!x(f)){for(k=ne.delegateType||ge,Qo.test(k+ge)||(M=M.parentNode);M;M=M.parentNode)$.push(M),R=M;R===(f.ownerDocument||g)&&$.push(R.defaultView||R.parentWindow||e)}for(S=0;(M=$[S++])&&!s.isPropagationStopped();)le=M,s.type=S>1?k:ne.bindType||ge,X=(ue.get(M,"events")||Object.create(null))[s.type]&&ue.get(M,"handle"),X&&X.apply(M,o),X=N&&M[N],X&&X.apply&&Ve(M)&&(s.result=X.apply(M,o),s.result===!1&&s.preventDefault());return s.type=ge,!d&&!s.isDefaultPrevented()&&(!ne._default||ne._default.apply($.pop(),o)===!1)&&Ve(f)&&N&&A(f[ge])&&!x(f)&&(R=f[N],R&&(f[N]=null),u.event.triggered=ge,s.isPropagationStopped()&&le.addEventListener(ge,el),f[ge](),s.isPropagationStopped()&&le.removeEventListener(ge,el),u.event.triggered=void 0,R&&(f[N]=R)),s.result}},simulate:function(s,o,f){var d=u.extend(new u.Event,f,{type:s,isSimulated:!0});u.event.trigger(d,null,o)}}),u.fn.extend({trigger:function(s,o){return this.each(function(){u.event.trigger(s,o,this)})},triggerHandler:function(s,o){var f=this[0];if(f)return u.event.trigger(s,o,f,!0)}});var cf=/\[\]$/,tl=/\r?\n/g,uf=/^(?:submit|button|image|reset|file)$/i,ff=/^(?:input|select|textarea|keygen)/i;function Ea(s,o,f,d){var S;if(Array.isArray(o))u.each(o,function(M,R){f||cf.test(s)?d(s,R):Ea(s+"["+(typeof R=="object"&&R!=null?M:"")+"]",R,f,d)});else if(!f&&b(o)==="object")for(S in o)Ea(s+"["+S+"]",o[S],f,d);else d(s,o)}u.param=function(s,o){var f,d=[],S=function(M,R){var k=A(R)?R():R;d[d.length]=encodeURIComponent(M)+"="+encodeURIComponent(k??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!u.isPlainObject(s))u.each(s,function(){S(this.name,this.value)});else for(f in s)Ea(f,s[f],o,S);return d.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=u.prop(this,"elements");return s?u.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!u(this).is(":disabled")&&ff.test(this.nodeName)&&!uf.test(s)&&(this.checked||!ke.test(s))}).map(function(s,o){var f=u(this).val();return f==null?null:Array.isArray(f)?u.map(f,function(d){return{name:o.name,value:d.replace(tl,`\r
`)}}):{name:o.name,value:f.replace(tl,`\r
`)}}).get()}});var hf=/%20/g,df=/#.*$/,pf=/([?&])_=[^&]*/,mf=/^(.*?):[ \t]*([^\r\n]*)$/mg,gf=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,_f=/^(?:GET|HEAD)$/,vf=/^\/\//,nl={},ba={},il="*/".concat("*"),Ta=g.createElement("a");Ta.href=Gr.href;function rl(s){return function(o,f){typeof o!="string"&&(f=o,o="*");var d,S=0,M=o.toLowerCase().match(Je)||[];if(A(f))for(;d=M[S++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(f)):(s[d]=s[d]||[]).push(f)}}function sl(s,o,f,d){var S={},M=s===ba;function R(k){var N;return S[k]=!0,u.each(s[k]||[],function(X,ne){var le=ne(o,f,d);if(typeof le=="string"&&!M&&!S[le])return o.dataTypes.unshift(le),R(le),!1;if(M)return!(N=le)}),N}return R(o.dataTypes[0])||!S["*"]&&R("*")}function Aa(s,o){var f,d,S=u.ajaxSettings.flatOptions||{};for(f in o)o[f]!==void 0&&((S[f]?s:d||(d={}))[f]=o[f]);return d&&u.extend(!0,s,d),s}function xf(s,o,f){for(var d,S,M,R,k=s.contents,N=s.dataTypes;N[0]==="*";)N.shift(),d===void 0&&(d=s.mimeType||o.getResponseHeader("Content-Type"));if(d){for(S in k)if(k[S]&&k[S].test(d)){N.unshift(S);break}}if(N[0]in f)M=N[0];else{for(S in f){if(!N[0]||s.converters[S+" "+N[0]]){M=S;break}R||(R=S)}M=M||R}if(M)return M!==N[0]&&N.unshift(M),f[M]}function yf(s,o,f,d){var S,M,R,k,N,X={},ne=s.dataTypes.slice();if(ne[1])for(R in s.converters)X[R.toLowerCase()]=s.converters[R];for(M=ne.shift();M;)if(s.responseFields[M]&&(f[s.responseFields[M]]=o),!N&&d&&s.dataFilter&&(o=s.dataFilter(o,s.dataType)),N=M,M=ne.shift(),M){if(M==="*")M=N;else if(N!=="*"&&N!==M){if(R=X[N+" "+M]||X["* "+M],!R){for(S in X)if(k=S.split(" "),k[1]===M&&(R=X[N+" "+k[0]]||X["* "+k[0]],R)){R===!0?R=X[S]:X[S]!==!0&&(M=k[0],ne.unshift(k[1]));break}}if(R!==!0)if(R&&s.throws)o=R(o);else try{o=R(o)}catch(le){return{state:"parsererror",error:R?le:"No conversion from "+N+" to "+M}}}}return{state:"success",data:o}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Gr.href,type:"GET",isLocal:gf.test(Gr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":il,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,o){return o?Aa(Aa(s,u.ajaxSettings),o):Aa(u.ajaxSettings,s)},ajaxPrefilter:rl(nl),ajaxTransport:rl(ba),ajax:function(s,o){typeof s=="object"&&(o=s,s=void 0),o=o||{};var f,d,S,M,R,k,N,X,ne,le,$=u.ajaxSetup({},o),ge=$.context||$,Ye=$.context&&(ge.nodeType||ge.jquery)?u(ge):u.event,St=u.Deferred(),ct=u.Callbacks("once memory"),Zt=$.statusCode||{},Vt={},zn={},kn="canceled",vt={readyState:0,getResponseHeader:function(Mt){var zt;if(N){if(!M)for(M={};zt=mf.exec(S);)M[zt[1].toLowerCase()+" "]=(M[zt[1].toLowerCase()+" "]||[]).concat(zt[2]);zt=M[Mt.toLowerCase()+" "]}return zt==null?null:zt.join(", ")},getAllResponseHeaders:function(){return N?S:null},setRequestHeader:function(Mt,zt){return N==null&&(Mt=zn[Mt.toLowerCase()]=zn[Mt.toLowerCase()]||Mt,Vt[Mt]=zt),this},overrideMimeType:function(Mt){return N==null&&($.mimeType=Mt),this},statusCode:function(Mt){var zt;if(Mt)if(N)vt.always(Mt[vt.status]);else for(zt in Mt)Zt[zt]=[Zt[zt],Mt[zt]];return this},abort:function(Mt){var zt=Mt||kn;return f&&f.abort(zt),Hi(0,zt),this}};if(St.promise(vt),$.url=((s||$.url||Gr.href)+"").replace(vf,Gr.protocol+"//"),$.type=o.method||o.type||$.method||$.type,$.dataTypes=($.dataType||"*").toLowerCase().match(Je)||[""],$.crossDomain==null){k=g.createElement("a");try{k.href=$.url,k.href=k.href,$.crossDomain=Ta.protocol+"//"+Ta.host!=k.protocol+"//"+k.host}catch{$.crossDomain=!0}}if($.data&&$.processData&&typeof $.data!="string"&&($.data=u.param($.data,$.traditional)),sl(nl,$,o,vt),N)return vt;X=u.event&&$.global,X&&u.active++===0&&u.event.trigger("ajaxStart"),$.type=$.type.toUpperCase(),$.hasContent=!_f.test($.type),d=$.url.replace(df,""),$.hasContent?$.data&&$.processData&&($.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&($.data=$.data.replace(hf,"+")):(le=$.url.slice(d.length),$.data&&($.processData||typeof $.data=="string")&&(d+=(Ma.test(d)?"&":"?")+$.data,delete $.data),$.cache===!1&&(d=d.replace(pf,"$1"),le=(Ma.test(d)?"&":"?")+"_="+Jo.guid+++le),$.url=d+le),$.ifModified&&(u.lastModified[d]&&vt.setRequestHeader("If-Modified-Since",u.lastModified[d]),u.etag[d]&&vt.setRequestHeader("If-None-Match",u.etag[d])),($.data&&$.hasContent&&$.contentType!==!1||o.contentType)&&vt.setRequestHeader("Content-Type",$.contentType),vt.setRequestHeader("Accept",$.dataTypes[0]&&$.accepts[$.dataTypes[0]]?$.accepts[$.dataTypes[0]]+($.dataTypes[0]!=="*"?", "+il+"; q=0.01":""):$.accepts["*"]);for(ne in $.headers)vt.setRequestHeader(ne,$.headers[ne]);if($.beforeSend&&($.beforeSend.call(ge,vt,$)===!1||N))return vt.abort();if(kn="abort",ct.add($.complete),vt.done($.success),vt.fail($.error),f=sl(ba,$,o,vt),!f)Hi(-1,"No Transport");else{if(vt.readyState=1,X&&Ye.trigger("ajaxSend",[vt,$]),N)return vt;$.async&&$.timeout>0&&(R=e.setTimeout(function(){vt.abort("timeout")},$.timeout));try{N=!1,f.send(Vt,Hi)}catch(Mt){if(N)throw Mt;Hi(-1,Mt)}}function Hi(Mt,zt,Xr,Ca){var Vn,qr,Gn,di,pi,Mn=zt;N||(N=!0,R&&e.clearTimeout(R),f=void 0,S=Ca||"",vt.readyState=Mt>0?4:0,Vn=Mt>=200&&Mt<300||Mt===304,Xr&&(di=xf($,vt,Xr)),!Vn&&u.inArray("script",$.dataTypes)>-1&&u.inArray("json",$.dataTypes)<0&&($.converters["text script"]=function(){}),di=yf($,di,vt,Vn),Vn?($.ifModified&&(pi=vt.getResponseHeader("Last-Modified"),pi&&(u.lastModified[d]=pi),pi=vt.getResponseHeader("etag"),pi&&(u.etag[d]=pi)),Mt===204||$.type==="HEAD"?Mn="nocontent":Mt===304?Mn="notmodified":(Mn=di.state,qr=di.data,Gn=di.error,Vn=!Gn)):(Gn=Mn,(Mt||!Mn)&&(Mn="error",Mt<0&&(Mt=0))),vt.status=Mt,vt.statusText=(zt||Mn)+"",Vn?St.resolveWith(ge,[qr,Mn,vt]):St.rejectWith(ge,[vt,Mn,Gn]),vt.statusCode(Zt),Zt=void 0,X&&Ye.trigger(Vn?"ajaxSuccess":"ajaxError",[vt,$,Vn?qr:Gn]),ct.fireWith(ge,[vt,Mn]),X&&(Ye.trigger("ajaxComplete",[vt,$]),--u.active||u.event.trigger("ajaxStop")))}return vt},getJSON:function(s,o,f){return u.get(s,o,f,"json")},getScript:function(s,o){return u.get(s,void 0,o,"script")}}),u.each(["get","post"],function(s,o){u[o]=function(f,d,S,M){return A(d)&&(M=M||S,S=d,d=void 0),u.ajax(u.extend({url:f,type:o,dataType:M,data:d,success:S},u.isPlainObject(f)&&f))}}),u.ajaxPrefilter(function(s){var o;for(o in s.headers)o.toLowerCase()==="content-type"&&(s.contentType=s.headers[o]||"")}),u._evalUrl=function(s,o,f){return u.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){u.globalEval(d,o,f)}})},u.fn.extend({wrapAll:function(s){var o;return this[0]&&(A(s)&&(s=s.call(this[0])),o=u(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var f=this;f.firstElementChild;)f=f.firstElementChild;return f}).append(this)),this},wrapInner:function(s){return A(s)?this.each(function(o){u(this).wrapInner(s.call(this,o))}):this.each(function(){var o=u(this),f=o.contents();f.length?f.wrapAll(s):o.append(s)})},wrap:function(s){var o=A(s);return this.each(function(f){u(this).wrapAll(o?s.call(this,f):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(s){return!u.expr.pseudos.visible(s)},u.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Sf={0:200,1223:204},Wr=u.ajaxSettings.xhr();C.cors=!!Wr&&"withCredentials"in Wr,C.ajax=Wr=!!Wr,u.ajaxTransport(function(s){var o,f;if(C.cors||Wr&&!s.crossDomain)return{send:function(d,S){var M,R=s.xhr();if(R.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(M in s.xhrFields)R[M]=s.xhrFields[M];s.mimeType&&R.overrideMimeType&&R.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(M in d)R.setRequestHeader(M,d[M]);o=function(k){return function(){o&&(o=f=R.onload=R.onerror=R.onabort=R.ontimeout=R.onreadystatechange=null,k==="abort"?R.abort():k==="error"?typeof R.status!="number"?S(0,"error"):S(R.status,R.statusText):S(Sf[R.status]||R.status,R.statusText,(R.responseType||"text")!=="text"||typeof R.responseText!="string"?{binary:R.response}:{text:R.responseText},R.getAllResponseHeaders()))}},R.onload=o(),f=R.onerror=R.ontimeout=o("error"),R.onabort!==void 0?R.onabort=f:R.onreadystatechange=function(){R.readyState===4&&e.setTimeout(function(){o&&f()})},o=o("abort");try{R.send(s.hasContent&&s.data||null)}catch(k){if(o)throw k}},abort:function(){o&&o()}}}),u.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return u.globalEval(s),s}}}),u.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),u.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var o,f;return{send:function(d,S){o=u("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",f=function(M){o.remove(),f=null,M&&S(M.type==="error"?404:200,M.type)}),g.head.appendChild(o[0])},abort:function(){f&&f()}}}});var al=[],wa=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=al.pop()||u.expando+"_"+Jo.guid++;return this[s]=!0,s}}),u.ajaxPrefilter("json jsonp",function(s,o,f){var d,S,M,R=s.jsonp!==!1&&(wa.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&wa.test(s.data)&&"data");if(R||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=A(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,R?s[R]=s[R].replace(wa,"$1"+d):s.jsonp!==!1&&(s.url+=(Ma.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return M||u.error(d+" was not called"),M[0]},s.dataTypes[0]="json",S=e[d],e[d]=function(){M=arguments},f.always(function(){S===void 0?u(e).removeProp(d):e[d]=S,s[d]&&(s.jsonpCallback=o.jsonpCallback,al.push(d)),M&&A(S)&&S(M[0]),M=S=void 0}),"script"}),C.createHTMLDocument=function(){var s=g.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),u.parseHTML=function(s,o,f){if(typeof s!="string")return[];typeof o=="boolean"&&(f=o,o=!1);var d,S,M;return o||(C.createHTMLDocument?(o=g.implementation.createHTMLDocument(""),d=o.createElement("base"),d.href=g.location.href,o.head.appendChild(d)):o=g),S=at.exec(s),M=!f&&[],S?[o.createElement(S[1])]:(S=mn([s],o,M),M&&M.length&&u(M).remove(),u.merge([],S.childNodes))},u.fn.load=function(s,o,f){var d,S,M,R=this,k=s.indexOf(" ");return k>-1&&(d=Fi(s.slice(k)),s=s.slice(0,k)),A(o)?(f=o,o=void 0):o&&typeof o=="object"&&(S="POST"),R.length>0&&u.ajax({url:s,type:S||"GET",dataType:"html",data:o}).done(function(N){M=arguments,R.html(d?u("<div>").append(u.parseHTML(N)).find(d):N)}).always(f&&function(N,X){R.each(function(){f.apply(this,M||[N.responseText,X,N])})}),this},u.expr.pseudos.animated=function(s){return u.grep(u.timers,function(o){return s===o.elem}).length},u.offset={setOffset:function(s,o,f){var d,S,M,R,k,N,X,ne=u.css(s,"position"),le=u(s),$={};ne==="static"&&(s.style.position="relative"),k=le.offset(),M=u.css(s,"top"),N=u.css(s,"left"),X=(ne==="absolute"||ne==="fixed")&&(M+N).indexOf("auto")>-1,X?(d=le.position(),R=d.top,S=d.left):(R=parseFloat(M)||0,S=parseFloat(N)||0),A(o)&&(o=o.call(s,f,u.extend({},k))),o.top!=null&&($.top=o.top-k.top+R),o.left!=null&&($.left=o.left-k.left+S),"using"in o?o.using.call(s,$):le.css($)}},u.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(S){u.offset.setOffset(this,s,S)});var o,f,d=this[0];if(d)return d.getClientRects().length?(o=d.getBoundingClientRect(),f=d.ownerDocument.defaultView,{top:o.top+f.pageYOffset,left:o.left+f.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,o,f,d=this[0],S={top:0,left:0};if(u.css(d,"position")==="fixed")o=d.getBoundingClientRect();else{for(o=this.offset(),f=d.ownerDocument,s=d.offsetParent||f.documentElement;s&&(s===f.body||s===f.documentElement)&&u.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(S=u(s).offset(),S.top+=u.css(s,"borderTopWidth",!0),S.left+=u.css(s,"borderLeftWidth",!0))}return{top:o.top-S.top-u.css(d,"marginTop",!0),left:o.left-S.left-u.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&u.css(s,"position")==="static";)s=s.offsetParent;return s||ht})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,o){var f=o==="pageYOffset";u.fn[s]=function(d){return P(this,function(S,M,R){var k;if(x(S)?k=S:S.nodeType===9&&(k=S.defaultView),R===void 0)return k?k[o]:S[M];k?k.scrollTo(f?k.pageXOffset:R,f?R:k.pageYOffset):S[M]=R},s,d,arguments.length)}}),u.each(["top","left"],function(s,o){u.cssHooks[o]=et(C.pixelPosition,function(f,d){if(d)return d=We(f,o),te.test(d)?u(f).position()[o]+"px":d})}),u.each({Height:"height",Width:"width"},function(s,o){u.each({padding:"inner"+s,content:o,"":"outer"+s},function(f,d){u.fn[d]=function(S,M){var R=arguments.length&&(f||typeof S!="boolean"),k=f||(S===!0||M===!0?"margin":"border");return P(this,function(N,X,ne){var le;return x(N)?d.indexOf("outer")===0?N["inner"+s]:N.document.documentElement["client"+s]:N.nodeType===9?(le=N.documentElement,Math.max(N.body["scroll"+s],le["scroll"+s],N.body["offset"+s],le["offset"+s],le["client"+s])):ne===void 0?u.css(N,X,k):u.style(N,X,ne,k)},o,R?S:void 0,R)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,o){u.fn[o]=function(f){return this.on(o,f)}}),u.fn.extend({bind:function(s,o,f){return this.on(s,null,o,f)},unbind:function(s,o){return this.off(s,null,o)},delegate:function(s,o,f,d){return this.on(o,s,f,d)},undelegate:function(s,o,f){return arguments.length===1?this.off(s,"**"):this.off(o,s||"**",f)},hover:function(s,o){return this.on("mouseenter",s).on("mouseleave",o||s)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,o){u.fn[o]=function(f,d){return arguments.length>0?this.on(o,null,f,d):this.trigger(o)}});var Mf=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(s,o){var f,d,S;if(typeof o=="string"&&(f=s[o],o=s,s=f),!!A(s))return d=a.call(arguments,2),S=function(){return s.apply(o||this,d.concat(a.call(arguments)))},S.guid=s.guid=s.guid||u.guid++,S},u.holdReady=function(s){s?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=w,u.isFunction=A,u.isWindow=x,u.camelCase=de,u.type=b,u.now=Date.now,u.isNumeric=function(s){var o=u.type(s);return(o==="number"||o==="string")&&!isNaN(s-parseFloat(s))},u.trim=function(s){return s==null?"":(s+"").replace(Mf,"$1")};var Ef=e.jQuery,bf=e.$;return u.noConflict=function(s){return e.$===u&&(e.$=bf),s&&e.jQuery===u&&(e.jQuery=Ef),u},typeof t>"u"&&(e.jQuery=e.$=u),u})})(ju);var Cv=ju.exports;const _s=qu(Cv);var Yu={exports:{}},$u=Rv,Jc=+(Math.pow(2,27)+1);function Rv(i,e,t){var n=i*e,r=Jc*i,a=r-i,l=r-a,c=i-l,h=Jc*e,p=h-e,m=h-p,_=e-m,v=n-l*m,E=v-c*m,C=E-l*_,A=c*_-C;return t?(t[0]=A,t[1]=n,t):[A,n]}var Pv=Dv;function Lv(i,e){var t=i+e,n=t-i,r=t-n,a=e-n,l=i-r,c=l+a;return c?[c,t]:[t]}function Dv(i,e){var t=i.length|0,n=e.length|0;if(t===1&&n===1)return Lv(i[0],e[0]);var r=t+n,a=new Array(r),l=0,c=0,h=0,p=Math.abs,m=i[c],_=p(m),v=e[h],E=p(v),C,A;_<E?(A=m,c+=1,c<t&&(m=i[c],_=p(m))):(A=v,h+=1,h<n&&(v=e[h],E=p(v))),c<t&&_<E||h>=n?(C=m,c+=1,c<t&&(m=i[c],_=p(m))):(C=v,h+=1,h<n&&(v=e[h],E=p(v)));for(var x=C+A,g=x-C,O=A-g,y=O,b=x,D,B,u,F,w;c<t&&h<n;)_<E?(C=m,c+=1,c<t&&(m=i[c],_=p(m))):(C=v,h+=1,h<n&&(v=e[h],E=p(v))),A=y,x=C+A,g=x-C,O=A-g,O&&(a[l++]=O),D=b+x,B=D-b,u=D-B,F=x-B,w=b-u,y=w+F,b=D;for(;c<t;)C=m,A=y,x=C+A,g=x-C,O=A-g,O&&(a[l++]=O),D=b+x,B=D-b,u=D-B,F=x-B,w=b-u,y=w+F,b=D,c+=1,c<t&&(m=i[c]);for(;h<n;)C=v,A=y,x=C+A,g=x-C,O=A-g,O&&(a[l++]=O),D=b+x,B=D-b,u=D-B,F=x-B,w=b-u,y=w+F,b=D,h+=1,h<n&&(v=e[h]);return y&&(a[l++]=y),b&&(a[l++]=b),l||(a[l++]=0),a.length=l,a}var Uv=Nv;function Nv(i,e,t){var n=i+e,r=n-i,a=n-r,l=e-r,c=i-a;return t?(t[0]=c+l,t[1]=n,t):[c+l,n]}var vo=$u,Iv=Uv,Ov=Fv;function Fv(i,e){var t=i.length;if(t===1){var n=vo(i[0],e);return n[0]?n:[n[1]]}var r=new Array(2*t),a=[.1,.1],l=[.1,.1],c=0;vo(i[0],e,a),a[0]&&(r[c++]=a[0]);for(var h=1;h<t;++h){vo(i[h],e,l);var p=a[1];Iv(p,l[0],a),a[0]&&(r[c++]=a[0]);var m=l[1],_=a[1],v=m+_,E=v-m,C=_-E;a[1]=v,C&&(r[c++]=C)}return a[1]&&(r[c++]=a[1]),c===0&&(r[c++]=0),r.length=c,r}var Bv=zv;function Hv(i,e){var t=i+e,n=t-i,r=t-n,a=e-n,l=i-r,c=l+a;return c?[c,t]:[t]}function zv(i,e){var t=i.length|0,n=e.length|0;if(t===1&&n===1)return Hv(i[0],-e[0]);var r=t+n,a=new Array(r),l=0,c=0,h=0,p=Math.abs,m=i[c],_=p(m),v=-e[h],E=p(v),C,A;_<E?(A=m,c+=1,c<t&&(m=i[c],_=p(m))):(A=v,h+=1,h<n&&(v=-e[h],E=p(v))),c<t&&_<E||h>=n?(C=m,c+=1,c<t&&(m=i[c],_=p(m))):(C=v,h+=1,h<n&&(v=-e[h],E=p(v)));for(var x=C+A,g=x-C,O=A-g,y=O,b=x,D,B,u,F,w;c<t&&h<n;)_<E?(C=m,c+=1,c<t&&(m=i[c],_=p(m))):(C=v,h+=1,h<n&&(v=-e[h],E=p(v))),A=y,x=C+A,g=x-C,O=A-g,O&&(a[l++]=O),D=b+x,B=D-b,u=D-B,F=x-B,w=b-u,y=w+F,b=D;for(;c<t;)C=m,A=y,x=C+A,g=x-C,O=A-g,O&&(a[l++]=O),D=b+x,B=D-b,u=D-B,F=x-B,w=b-u,y=w+F,b=D,c+=1,c<t&&(m=i[c]);for(;h<n;)C=v,A=y,x=C+A,g=x-C,O=A-g,O&&(a[l++]=O),D=b+x,B=D-b,u=D-B,F=x-B,w=b-u,y=w+F,b=D,h+=1,h<n&&(v=-e[h]);return y&&(a[l++]=y),b&&(a[l++]=b),l||(a[l++]=0),a.length=l,a}(function(i){var e=$u,t=Pv,n=Ov,r=Bv,a=5,l=11102230246251565e-32,c=(3+16*l)*l,h=(7+56*l)*l;function p(y,b,D,B){return function(F,w,T){var H=y(y(b(w[1],T[0]),b(-T[1],w[0])),y(b(F[1],w[0]),b(-w[1],F[0]))),W=y(b(F[1],T[0]),b(-T[1],F[0])),V=B(H,W);return V[V.length-1]}}function m(y,b,D,B){return function(F,w,T,H){var W=y(y(D(y(b(T[1],H[0]),b(-H[1],T[0])),w[2]),y(D(y(b(w[1],H[0]),b(-H[1],w[0])),-T[2]),D(y(b(w[1],T[0]),b(-T[1],w[0])),H[2]))),y(D(y(b(w[1],H[0]),b(-H[1],w[0])),F[2]),y(D(y(b(F[1],H[0]),b(-H[1],F[0])),-w[2]),D(y(b(F[1],w[0]),b(-w[1],F[0])),H[2])))),V=y(y(D(y(b(T[1],H[0]),b(-H[1],T[0])),F[2]),y(D(y(b(F[1],H[0]),b(-H[1],F[0])),-T[2]),D(y(b(F[1],T[0]),b(-T[1],F[0])),H[2]))),y(D(y(b(w[1],T[0]),b(-T[1],w[0])),F[2]),y(D(y(b(F[1],T[0]),b(-T[1],F[0])),-w[2]),D(y(b(F[1],w[0]),b(-w[1],F[0])),T[2])))),se=B(W,V);return se[se.length-1]}}function _(y,b,D,B){return function(F,w,T,H,W){var V=y(y(y(D(y(D(y(b(H[1],W[0]),b(-W[1],H[0])),T[2]),y(D(y(b(T[1],W[0]),b(-W[1],T[0])),-H[2]),D(y(b(T[1],H[0]),b(-H[1],T[0])),W[2]))),w[3]),y(D(y(D(y(b(H[1],W[0]),b(-W[1],H[0])),w[2]),y(D(y(b(w[1],W[0]),b(-W[1],w[0])),-H[2]),D(y(b(w[1],H[0]),b(-H[1],w[0])),W[2]))),-T[3]),D(y(D(y(b(T[1],W[0]),b(-W[1],T[0])),w[2]),y(D(y(b(w[1],W[0]),b(-W[1],w[0])),-T[2]),D(y(b(w[1],T[0]),b(-T[1],w[0])),W[2]))),H[3]))),y(D(y(D(y(b(T[1],H[0]),b(-H[1],T[0])),w[2]),y(D(y(b(w[1],H[0]),b(-H[1],w[0])),-T[2]),D(y(b(w[1],T[0]),b(-T[1],w[0])),H[2]))),-W[3]),y(D(y(D(y(b(H[1],W[0]),b(-W[1],H[0])),w[2]),y(D(y(b(w[1],W[0]),b(-W[1],w[0])),-H[2]),D(y(b(w[1],H[0]),b(-H[1],w[0])),W[2]))),F[3]),D(y(D(y(b(H[1],W[0]),b(-W[1],H[0])),F[2]),y(D(y(b(F[1],W[0]),b(-W[1],F[0])),-H[2]),D(y(b(F[1],H[0]),b(-H[1],F[0])),W[2]))),-w[3])))),y(y(D(y(D(y(b(w[1],W[0]),b(-W[1],w[0])),F[2]),y(D(y(b(F[1],W[0]),b(-W[1],F[0])),-w[2]),D(y(b(F[1],w[0]),b(-w[1],F[0])),W[2]))),H[3]),y(D(y(D(y(b(w[1],H[0]),b(-H[1],w[0])),F[2]),y(D(y(b(F[1],H[0]),b(-H[1],F[0])),-w[2]),D(y(b(F[1],w[0]),b(-w[1],F[0])),H[2]))),-W[3]),D(y(D(y(b(T[1],H[0]),b(-H[1],T[0])),w[2]),y(D(y(b(w[1],H[0]),b(-H[1],w[0])),-T[2]),D(y(b(w[1],T[0]),b(-T[1],w[0])),H[2]))),F[3]))),y(D(y(D(y(b(T[1],H[0]),b(-H[1],T[0])),F[2]),y(D(y(b(F[1],H[0]),b(-H[1],F[0])),-T[2]),D(y(b(F[1],T[0]),b(-T[1],F[0])),H[2]))),-w[3]),y(D(y(D(y(b(w[1],H[0]),b(-H[1],w[0])),F[2]),y(D(y(b(F[1],H[0]),b(-H[1],F[0])),-w[2]),D(y(b(F[1],w[0]),b(-w[1],F[0])),H[2]))),T[3]),D(y(D(y(b(w[1],T[0]),b(-T[1],w[0])),F[2]),y(D(y(b(F[1],T[0]),b(-T[1],F[0])),-w[2]),D(y(b(F[1],w[0]),b(-w[1],F[0])),T[2]))),-H[3]))))),se=y(y(y(D(y(D(y(b(H[1],W[0]),b(-W[1],H[0])),T[2]),y(D(y(b(T[1],W[0]),b(-W[1],T[0])),-H[2]),D(y(b(T[1],H[0]),b(-H[1],T[0])),W[2]))),F[3]),D(y(D(y(b(H[1],W[0]),b(-W[1],H[0])),F[2]),y(D(y(b(F[1],W[0]),b(-W[1],F[0])),-H[2]),D(y(b(F[1],H[0]),b(-H[1],F[0])),W[2]))),-T[3])),y(D(y(D(y(b(T[1],W[0]),b(-W[1],T[0])),F[2]),y(D(y(b(F[1],W[0]),b(-W[1],F[0])),-T[2]),D(y(b(F[1],T[0]),b(-T[1],F[0])),W[2]))),H[3]),D(y(D(y(b(T[1],H[0]),b(-H[1],T[0])),F[2]),y(D(y(b(F[1],H[0]),b(-H[1],F[0])),-T[2]),D(y(b(F[1],T[0]),b(-T[1],F[0])),H[2]))),-W[3]))),y(y(D(y(D(y(b(T[1],W[0]),b(-W[1],T[0])),w[2]),y(D(y(b(w[1],W[0]),b(-W[1],w[0])),-T[2]),D(y(b(w[1],T[0]),b(-T[1],w[0])),W[2]))),F[3]),D(y(D(y(b(T[1],W[0]),b(-W[1],T[0])),F[2]),y(D(y(b(F[1],W[0]),b(-W[1],F[0])),-T[2]),D(y(b(F[1],T[0]),b(-T[1],F[0])),W[2]))),-w[3])),y(D(y(D(y(b(w[1],W[0]),b(-W[1],w[0])),F[2]),y(D(y(b(F[1],W[0]),b(-W[1],F[0])),-w[2]),D(y(b(F[1],w[0]),b(-w[1],F[0])),W[2]))),T[3]),D(y(D(y(b(w[1],T[0]),b(-T[1],w[0])),F[2]),y(D(y(b(F[1],T[0]),b(-T[1],F[0])),-w[2]),D(y(b(F[1],w[0]),b(-w[1],F[0])),T[2]))),-W[3])))),ce=B(V,se);return ce[ce.length-1]}}function v(y){var b=y===3?p:y===4?m:_;return b(t,e,n,r)}var E=v(3),C=v(4),A=[function(){return 0},function(){return 0},function(b,D){return D[0]-b[0]},function(b,D,B){var u=(b[1]-B[1])*(D[0]-B[0]),F=(b[0]-B[0])*(D[1]-B[1]),w=u-F,T;if(u>0){if(F<=0)return w;T=u+F}else if(u<0){if(F>=0)return w;T=-(u+F)}else return w;var H=c*T;return w>=H||w<=-H?w:E(b,D,B)},function(b,D,B,u){var F=b[0]-u[0],w=D[0]-u[0],T=B[0]-u[0],H=b[1]-u[1],W=D[1]-u[1],V=B[1]-u[1],se=b[2]-u[2],ce=D[2]-u[2],pe=B[2]-u[2],xe=w*V,ie=T*W,ve=T*H,ye=F*V,Ne=F*W,at=w*H,yt=se*(xe-ie)+ce*(ve-ye)+pe*(Ne-at),ae=(Math.abs(xe)+Math.abs(ie))*Math.abs(se)+(Math.abs(ve)+Math.abs(ye))*Math.abs(ce)+(Math.abs(Ne)+Math.abs(at))*Math.abs(pe),Se=h*ae;return yt>Se||-yt>Se?yt:C(b,D,B,u)}];function x(y){var b=A[y.length];return b||(b=A[y.length]=v(y.length)),b.apply(void 0,y)}function g(y,b,D,B,u,F,w){return function(H,W,V,se,ce){switch(arguments.length){case 0:case 1:return 0;case 2:return B(H,W);case 3:return u(H,W,V);case 4:return F(H,W,V,se);case 5:return w(H,W,V,se,ce)}for(var pe=new Array(arguments.length),xe=0;xe<arguments.length;++xe)pe[xe]=arguments[xe];return y(pe)}}function O(){for(;A.length<=a;)A.push(v(A.length));i.exports=g.apply(void 0,[x].concat(A));for(var y=0;y<=a;++y)i.exports[y]=A[y]}O()})(Yu);var kv=Yu.exports,Vv=Gv,ta=kv;function Gv(i,e){for(var t=e[0],n=e[1],r=i.length,a=1,l=r,c=0,h=r-1;c<l;h=c++){var p=i[c],m=i[h],_=p[1],v=m[1];if(v<_){if(v<n&&n<_){var E=ta(p,m,e);if(E===0)return 0;a^=0<E|0}else if(n===_){var C=i[(c+1)%r],A=C[1];if(_<A){var E=ta(p,m,e);if(E===0)return 0;a^=0<E|0}}}else if(_<v){if(_<n&&n<v){var E=ta(p,m,e);if(E===0)return 0;a^=E<0|0}else if(n===_){var C=i[(c+1)%r],A=C[1];if(A<_){var E=ta(p,m,e);if(E===0)return 0;a^=E<0|0}}}else if(n===_){var x=Math.min(p[0],m[0]),g=Math.max(p[0],m[0]);if(c===0){for(;h>0;){var O=(h+r-1)%r,y=i[O];if(y[1]!==n)break;var b=y[0];x=Math.min(x,b),g=Math.max(g,b),h=O}if(h===0)return x<=t&&t<=g?0:1;l=h+1}for(var D=i[(h+r-1)%r][1];c+1<l;){var y=i[c+1];if(y[1]!==n)break;var b=y[0];x=Math.min(x,b),g=Math.max(g,b),c+=1}if(x<=t&&t<=g)return 0;var B=i[(c+1)%r][1];t<x&&D<n!=B<n&&(a^=1)}}return 2*a-1}const Qc=qu(Vv),Wv=.1,Br=new Q_,Pi=1.5,Xv="./assets/earth/8k_earth_daymap.png",qv="./assets/earth/8k_earth_normal_map.png",jv="./assets/earth/earthheight.jpg",Yv="./assets/earth/earthspec.jpg",ia=15e-5,$v=Br.load(Xv,i=>{i.image.width,i.image.height}),Ku=Pi*1.4,Zu=Pi*1.05,eu=-3e-4,Kv="./assets/moon/moon-4k.png",tu=-.0035,Zv=1.02,Jv=.98;let Yo=!1,Ju=Pi*4.5;const Qv=document.querySelector("canvas.webgl"),Mi={theta:0,phi:0},xn=new j_;xn.background=new xt(0);const _a=new q_({canvas:Qv,antialias:!0});_a.setSize(window.innerWidth,window.innerHeight);const e0=window.innerWidth/window.innerHeight,on=new Tn(45,e0,.1,1e3);let Qi=us(0,0,Ju);on.position.set(Qi.x,Qi.y,Qi.z);on.lookAt(0,0,0);on.zoom=1;const t0=new iv(4294967295,.01);xn.add(t0);const $o=new nv(4294967295,1.5);$o.position.set(400,150,0);xn.add($o);const n0=new Fu({color:16777215}),Qu=new vn,ef=[];for(let i=0;i<1e4;i++){let e=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;new j(e,t,n).length()<=200||ef.push(e,t,n)}Qu.setAttribute("position",new un(ef,3));const i0=new $_(Qu,n0);xn.add(i0);Br.load(qv,Hr);const r0=Br.load(jv,Hr),s0=Br.load(Yv,Hr),a0=new Go({map:$v,displacementMap:r0,displacementScale:.005,specular:11579568,specularMap:s0,flatShading:!1}),o0=new Di(Pi,64,64),va=new ln(o0,a0);va.position.set(0,0,0);xn.add(va);async function l0(){const e=(await Ii("./assets/earth/cities/worldcities.csv")).split(/\n/);for(let t=1;t<e.length;t++){const n=e[t].replaceAll('"',"").split(/,/);e[t]={name:n[0],theta:(parseFloat(n[3])+180)*(Math.PI/180),phi:parseFloat(n[2])+90*(Math.PI/180)}}return e.shift(),e}await l0();function c0(){Ko.rotateOnAxis(new j(0,1,0),ia*1.5)}const nu=await Br.loadAsync("./assets/earth/fair_clouds_8k.jpg"),u0=new Di(Pi+.008,32,32),f0=new Go({map:nu,alphaMap:nu,transparent:!0}),Ko=new ln(u0,f0);Ko.position.set(0,0,0);xn.add(Ko);const h0=await Ii("./assets/adv_atm_fs.glsl"),d0=await Ii("./assets/adv_atm_vs.glsl"),p0=new Di(Ku,32,32),m0=new Nn({fragmentShader:h0,vertexShader:d0,uniforms:{atmradius:{value:Ku},eradius:{value:Pi},sunPos:{value:$o.position},epos:{value:new j(0)}},transparent:!0}),g0=new ln(p0,m0);xn.add(g0);const _0=await Ii("./assets/atm2_FS.glsl"),v0=await Ii("./assets/atm2_VS.glsl"),x0=new Di(Zu,32,32),y0=new Nn({fragmentShader:_0,vertexShader:v0,uniforms:{radius:{value:Zu}},transparent:!0}),S0=new ln(x0,y0);S0.position.set(0,0,0);let M0=5,ts={theta:3.14,phi:.2};const E0=await Ii("./assets/sunFS.glsl"),b0=await Ii("./assets/sunVS.glsl"),T0=new Di(10,16,16),A0=new Nn({uniforms:{sunOrigin:{value:new j(650,0,0)}},fragmentShader:E0,vertexShader:b0,transparent:!0}),tf=new ln(T0,A0);tf.position.set(650,0,0);xn.add(tf);const w0=new Di(.2,16,16),C0=Br.load(Kv,Hr),R0=new Go({map:C0}),Io=new ln(w0,R0);xn.add(Io);function P0(){ts.theta+=eu,ts.theta=rf(ts.theta);const i=us(ts.theta,ts.phi,M0);Io.position.set(i.x,i.y,i.z),Io.rotateY(-eu),Hr()}window.addEventListener("resize",L0,!1);function L0(){on.aspect=window.innerWidth/window.innerHeight,on.updateProjectionMatrix(),_a.setSize(window.innerWidth,window.innerHeight),Hr()}const D0=new sv(5);D0.setColors(16562691,2733325,596958);const Jt=JSON.parse(await Ii("./assets/earth/borderdat.json")).countries,ns=I0();function U0(){va.rotateY(ia);for(let i=0;i<ns.length;i++)if(ns[i].isMultiPolygon)for(let e=0;e<ns[i].border.length;e++)ns[i].border[e].rotateOnWorldAxis(new j(0,1,0),ia);else ns[i].border.rotateOnWorldAxis(new j(0,1,0),ia)}function N0(i,e){for(let t=0;t<Jt.length;t++){let n=Jt[t].name;if(Jt[t].isMultiPolygon){let a=Jt[t].borderPoints;for(let l=0;l<a.length;l++)for(let c=0;c<a[l].length;c++){let h=a[l][c];if(Qc(h,[i,e])!=1)return n}}else{let a=Jt[t].borderPoints;if(Qc(a,[i,e])!=1)return n}}return""}function I0(){const t=[];for(let n=0;n<Jt.length;n++)if(Jt[n].isMultiPolygon){const r=[];for(let a=0;a<Jt[n].borderPoints.length;a++)for(let l=0;l<Jt[n].borderPoints[a].length;l++){const c=Jt[n].borderPoints[a][l],h=[];for(let m=0;m<c.length;m++)h.push(us(-(.5+c[m][0])*Math.PI*2,-(.5-c[m][1])*Math.PI,Pi+.007));const p=su(h,16777215);r.push(p)}t.push({name:Jt[n].name,isMultiPolygon:Jt[n].isMultiPolygon,border:r})}else{const r=[];for(let l=0;l<Jt[n].borderPoints.length;l++)r.push(us(-(.5+Jt[n].borderPoints[l][0])*Math.PI*2,-(.5-Jt[n].borderPoints[l][1])*Math.PI,Pi+.007));const a=su(r,16777215);t.push({name:Jt[n].name,isMultiPolygon:Jt[n].isMultiPolygon,border:a})}return t}const iu=new rv;function O0(i){let e=new gt(i.clientX/window.innerWidth*2-1,-i.clientY/window.innerHeight*2+1);iu.setFromCamera(e,on);const t=iu.intersectObjects(xn.children);for(let n=0;n<t.length;n++){if(t[n].object!=va)continue;let r=N0(t[n].uv.x,t[n].uv.y);if(r=="")return;fetch("https://api-gateway-slixmjmf2a-ez.a.run.app/fetchnews/"+r,{method:"get",url:"https://api-gateway-slixmjmf2a-ez.a.run.app/fetchnews/"+r}).then(a=>a.text()).then(a=>{F0(r,JSON.parse(a))}),console.log(`Country chosen: ${r}`)}}const ru=_s(".news-container");function F0(i,e){ru.attr("style","display: block"),ru.find("h1").text(`News from ${i}`);const t=document.querySelector("table.news-table");t.innerHTML="";for(let n=0;n<e.articles.length;n++){let r=e.articles[n];if(r.publishedAt.startsWith("1970"))continue;const a=document.createElement("tr"),l=document.createElement("td");l.setAttribute("class","article-headline");const c=document.createElement("td");c.setAttribute("class","article-url");const h=document.createElement("a");h.setAttribute("href",r.url),h.setAttribute("target","_blank"),h.textContent="Read more",c.appendChild(h),l.textContent=r.title,a.appendChild(l),a.appendChild(c),t.appendChild(a)}}_s(document.body).on("mousemove",i=>{z0(i)});document.querySelector("canvas.webgl").onclick=O0;_s(document.body).on("mousedown",()=>{Yo=!0,Ar=null});_s(document.body).on("mouseup",()=>{Yo=!1});_s(window).on("scroll mousewheel DOMMouseScroll",i=>{B0(i.originalEvent.wheelDelta)});function B0(i){i>0?on.fov*=Zv:on.fov*=Jv,on.fov=nf(on.fov,100,20),on.updateProjectionMatrix()}function H0(){Qi=us(Mi.theta,Mi.phi,Ju),on.position.set(Qi.x,Qi.y,Qi.z),on.lookAt(0,0,0),_a.render(xn,on)}let Ar=null;function z0(i){if(!Yo)return;const e=new gt(i.clientX,i.clientY);if(Ar==null){Ar=new gt(e.x,e.y);return}const t=Ar.sub(e);Mi.theta+=tu*t.x,Mi.theta=rf(Mi.theta),Mi.phi+=tu*t.y,Mi.phi=nf(Mi.phi,1.5,-1.5),H0(),Ar.x=e.x,Ar.y=e.y}function us(i,e,t){let n=Math.cos(i)*Math.cos(e)*t,r=Math.sin(e)*t,a=Math.cos(e)*Math.sin(i)*t;return new j(n,r,a)}async function Ii(i){try{return await(await fetch(i)).text()}catch(e){console.log(e)}}function su(i,e){const t=new vn().setFromPoints(i),n=new Vo({color:e}),r=new Ou(t,n);return xn.add(r),r}function nf(i,e,t){return i>e?e:i<t?t:i}function rf(i){return i>=2*Math.PI?i-2*Math.PI:i<=0?i+2*Math.PI:i}function Hr(){_a.render(xn,on)}function k0(){U0(),c0(),P0()}window.setInterval(k0,Wv);
