!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("chart.js"),require("chart.js/helpers")):"function"==typeof define&&define.amd?define(["exports","chart.js","chart.js/helpers"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ChartWordCloud={},t.Chart,t.Chart.helpers)}(this,(function(t,e,n){"use strict";function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var n=function t(){return this instanceof t?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})})),n}var a={value:function(){}};function i(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new s(r)}function s(t){this._=t}function l(t,e){for(var n,r=0,o=t.length;r<o;++r)if((n=t[r]).name===e)return n.value}function u(t,e,n){for(var r=0,o=t.length;r<o;++r)if(t[r].name===e){t[r]=a,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=n&&t.push({name:e,value:n}),t}s.prototype=i.prototype={constructor:s,on:function(t,e){var n,r,o=this._,a=(r=o,(t+"").trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");if(n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),t&&!r.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))),i=-1,s=a.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++i<s;)if(n=(t=a[i]).type)o[n]=u(o[n],t.name,e);else if(null==e)for(n in o)o[n]=u(o[n],t.name,null);return this}for(;++i<s;)if((n=(t=a[i]).type)&&(n=l(o[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new s(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,o=new Array(n),a=0;a<n;++a)o[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,n=(r=this._[t]).length;a<n;++a)r[a].value.apply(e,o)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],o=0,a=r.length;o<a;++o)r[o].value.apply(e,n)}};const c=o(Object.freeze({__proto__:null,dispatch:i})).dispatch,h=Math.PI/180,f={archimedean:E,rectangular:function(t){var e=4*t[0]/t[1],n=0,r=0;return function(t){var o=t<0?-1:1;switch(Math.sqrt(1+4*o*t)-o&3){case 0:n+=e;break;case 1:r+=4;break;case 2:n-=e;break;default:r-=4}return[n,r]}}},d=2048;var y=function(){var t=[256,256],e=p,n=x,r=m,o=g,a=g,i=v,s=w,l=E,u=[],h=1/0,y=c("word","end"),R=null,C=Math.random,P={},z=_;function O(e,n,r){t[0],t[1];for(var o,a,i,s,u,c=n.x,h=n.y,f=Math.sqrt(t[0]*t[0]+t[1]*t[1]),d=l(t),y=C()<.5?1:-1,p=-y;(o=d(p+=y))&&(a=~~o[0],i=~~o[1],!(Math.min(Math.abs(a),Math.abs(i))>=f));)if(n.x=c+a,n.y=h+i,!(n.x+n.x0<0||n.y+n.y0<0||n.x+n.x1>t[0]||n.y+n.y1>t[1]||r&&(u=r,!((s=n).x+s.x1>u[0].x&&s.x+s.x0<u[1].x&&s.y+s.y1>u[0].y&&s.y+s.y0<u[1].y))||M(n,e,t[0]))){for(var x,g=n.sprite,m=n.width>>5,v=t[0]>>5,w=n.x-(m<<4),b=127&w,S=32-b,E=n.y1-n.y0,_=(n.y+n.y0)*v+(w>>5),k=0;k<E;k++){x=0;for(var R=0;R<=m;R++)e[_+R]|=x<<S|(R<m?(x=g[k*m+R])>>>b:0);_+=v}return!0}return!1}return P.canvas=function(t){return arguments.length?(z=k(t),P):z},P.start=function(){var l=function(t){const e=t.getContext("2d",{willReadFrequently:!0});t.width=t.height=1;const n=Math.sqrt(e.getImageData(0,0,1,1).data.length>>2);return t.width=2048/n,t.height=d/n,e.fillStyle=e.strokeStyle="red",{context:e,ratio:n}}(z()),c=function(t){var e=[],n=-1;for(;++n<t;)e[n]=0;return e}((t[0]>>5)*t[1]),f=null,p=u.length,x=-1,g=[],m=u.map((function(t,l){return t.text=e.call(this,t,l),t.font=n.call(this,t,l),t.style=o.call(this,t,l),t.weight=a.call(this,t,l),t.rotate=i.call(this,t,l),t.size=~~r.call(this,t,l),t.padding=s.call(this,t,l),t})).sort((function(t,e){return e.size-t.size}));return R&&clearInterval(R),R=setInterval(v,0),v(),P;function v(){for(var e=Date.now();Date.now()-e<h&&++x<p&&R;){var n=m[x];n.x=t[0]*(C()+.5)>>1,n.y=t[1]*(C()+.5)>>1,b(l,n,m,x),n.hasText&&O(c,n,f)&&(g.push(n),y.call("word",P,n),f?S(f,n):f=[{x:n.x+n.x0,y:n.y+n.y0},{x:n.x+n.x1,y:n.y+n.y1}],n.x-=t[0]>>1,n.y-=t[1]>>1)}x>=p&&(P.stop(),y.call("end",P,g,f))}},P.stop=function(){R&&(clearInterval(R),R=null);for(const t of u)delete t.sprite;return P},P.timeInterval=function(t){return arguments.length?(h=null==t?1/0:t,P):h},P.words=function(t){return arguments.length?(u=t,P):u},P.size=function(e){return arguments.length?(t=[+e[0],+e[1]],P):t},P.font=function(t){return arguments.length?(n=k(t),P):n},P.fontStyle=function(t){return arguments.length?(o=k(t),P):o},P.fontWeight=function(t){return arguments.length?(a=k(t),P):a},P.rotate=function(t){return arguments.length?(i=k(t),P):i},P.text=function(t){return arguments.length?(e=k(t),P):e},P.spiral=function(t){return arguments.length?(l=f[t]||t,P):l},P.fontSize=function(t){return arguments.length?(r=k(t),P):r},P.padding=function(t){return arguments.length?(s=k(t),P):s},P.random=function(t){return arguments.length?(C=t,P):C},P.on=function(){var t=y.on.apply(y,arguments);return t===y?P:t},P};function p(t){return t.text}function x(){return"serif"}function g(){return"normal"}function m(t){return Math.sqrt(t.value)}function v(){return 30*(~~(6*random())-3)}function w(){return 1}function b(t,e,n,r){if(!e.sprite){var o=t.context,a=t.ratio;o.clearRect(0,0,2048/a,d/a);var i=0,s=0,l=0,u=n.length;for(--r;++r<u;){e=n[r],o.save(),o.font=e.style+" "+e.weight+" "+~~((e.size+1)/a)+"px "+e.font;const t=o.measureText(e.text),u=-Math.floor(t.width/2);let m=(t.width+1)*a,v=e.size<<1;if(e.rotate){var c=Math.sin(e.rotate*h),f=Math.cos(e.rotate*h),y=m*f,p=m*c,x=v*f,g=v*c;m=Math.max(Math.abs(y+g),Math.abs(y-g))+31>>5<<5,v=~~Math.max(Math.abs(p+x),Math.abs(p-x))}else m=m+31>>5<<5;if(v>l&&(l=v),i+m>=2048&&(i=0,s+=l,l=0),s+v>=d)break;o.translate((i+(m>>1))/a,(s+(v>>1))/a),e.rotate&&o.rotate(e.rotate*h),o.fillText(e.text,u,0),e.padding&&(o.lineWidth=2*e.padding,o.strokeText(e.text,u,0)),o.restore(),e.width=m,e.height=v,e.xoff=i,e.yoff=s,e.x1=m>>1,e.y1=v>>1,e.x0=-e.x1,e.y0=-e.y1,e.hasText=!0,i+=m}for(var m=o.getImageData(0,0,2048/a,d/a).data,v=[];--r>=0;)if((e=n[r]).hasText){for(var w=e.width,b=w>>5,M=e.y1-e.y0,S=0;S<M*b;S++)v[S]=0;if(null==(i=e.xoff))return;s=e.yoff;for(var E=0,_=-1,k=0;k<M;k++){for(S=0;S<w;S++){var R=b*k+(S>>5),C=m[2048*(s+k)+(i+S)<<2]?1<<31-S%32:0;v[R]|=C,E|=C}E?_=k:(e.y0++,M--,k--,s++)}e.y1=e.y0+_,e.sprite=v.slice(0,(e.y1-e.y0)*b)}}}function M(t,e,n){n>>=5;for(var r,o=t.sprite,a=t.width>>5,i=t.x-(a<<4),s=127&i,l=32-s,u=t.y1-t.y0,c=(t.y+t.y0)*n+(i>>5),h=0;h<u;h++){r=0;for(var f=0;f<=a;f++)if((r<<l|(f<a?(r=o[h*a+f])>>>s:0))&e[c+f])return!0;c+=n}return!1}function S(t,e){var n=t[0],r=t[1];e.x+e.x0<n.x&&(n.x=e.x+e.x0),e.y+e.y0<n.y&&(n.y=e.y+e.y0),e.x+e.x1>r.x&&(r.x=e.x+e.x1),e.y+e.y1>r.y&&(r.y=e.y+e.y1)}function E(t){var e=t[0]/t[1];return function(t){return[e*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function _(){return document.createElement("canvas")}function k(t){return"function"==typeof t?t:function(){return t}}var R=r(y);class C extends e.Element{static computeRotation(t,e){if(t.rotationSteps<=1)return 0;if(t.minRotation===t.maxRotation)return t.minRotation;const n=Math.min(t.rotationSteps,Math.floor(e()*t.rotationSteps))/(t.rotationSteps-1),r=t.maxRotation-t.minRotation;return t.minRotation+n*r}inRange(t,e){const n=this.getProps(["x","y","width","height","scale"]);if(n.scale<=0)return!1;const r=Number.isNaN(t)?n.x:t,o=Number.isNaN(e)?n.y:e;return r>=n.x-n.width/2&&r<=n.x+n.width/2&&o>=n.y-n.height/2&&o<=n.y+n.height/2}inXRange(t){return this.inRange(t,Number.NaN)}inYRange(t){return this.inRange(Number.NaN,t)}getCenterPoint(){return this.getProps(["x","y"])}tooltipPosition(){return this.getCenterPoint()}draw(t){const{options:e}=this,r=this.getProps(["x","y","width","height","text","scale"]);if(r.scale<=0)return;t.save();const o=n.toFont({...e,size:e.size*r.scale});t.font=o.string,t.fillStyle=e.color,t.textAlign="center",t.translate(r.x,r.y),t.rotate(e.rotate/180*Math.PI),e.strokeStyle&&(null!=e.strokeWidth&&(t.lineWidth=e.strokeWidth),t.strokeStyle=e.strokeStyle,t.strokeText(r.text,0,0)),t.fillText(r.text,0,0),t.restore()}}C.id="word",C.defaults={minRotation:-90,maxRotation:0,rotationSteps:2,padding:1,strokeStyle:void 0,strokeWidth:void 0,size:t=>t.parsed.y,hoverColor:"#ababab"},C.defaultRoutes={color:"color",family:"font.family",style:"font.style",weight:"font.weight",lineHeight:"font.lineHeight"};class P extends e.DatasetController{constructor(){super(...arguments),this.wordLayout=R().text((t=>t.text)).padding((t=>t.options.padding)).rotate((t=>t.options.rotate)).font((t=>t.options.family)).fontSize((t=>t.options.size)).fontStyle((t=>t.options.style)).fontWeight((t=>{var e;return null!==(e=t.options.weight)&&void 0!==e?e:1})),this.rand=Math.random}update(t){var e;super.update(t);const n=this.options;this.rand=function(t=Date.now()){let e="number"==typeof t?t:Array.from(t).reduce(((t,e)=>t+e.charCodeAt(0)),0);return()=>(e=(9301*e+49297)%233280,e/233280)}(null!==(e=n.randomRotationSeed)&&void 0!==e?e:this.chart.id);const r=this._cachedMeta.data||[];this.updateElements(r,0,r.length,t)}updateElements(t,e,r,o){var a,i,s,l,u;this.wordLayout.stop();const c=this.options,h=this._cachedMeta.xScale,f=this._cachedMeta.yScale,d=h.right-h.left,y=f.bottom-f.top,p=this.chart.data.labels,x={maxTries:3,scalingFactor:1.2};Object.assign(x,null!==(a=null==c?void 0:c.autoGrow)&&void 0!==a?a:{});const g=[];for(let t=e;t<e+r;t+=1){const e=this.resolveDataElementOptions(t,o);null==e.rotate&&(e.rotate=C.computeRotation(e,this.rand));const r={options:{...n.toFont(e),...e},x:null!==(s=null===(i=this._cachedMeta.xScale)||void 0===i?void 0:i.getPixelForDecimal(.5))&&void 0!==s?s:0,y:null!==(u=null===(l=this._cachedMeta.yScale)||void 0===l?void 0:l.getPixelForDecimal(.5))&&void 0!==u?u:0,width:10,height:10,scale:1,index:t,text:p[t]};g.push(r)}if("reset"===o)return void g.forEach((e=>{this.updateElement(t[e.index],e.index,e,o)}));this.wordLayout.random(this.rand).words(g);const m=(e=1,n=x.maxTries)=>{this.wordLayout.size([d*e,y*e]).on("end",((r,a)=>{if(r.length<p.length){if(n>0){const t="function"==typeof x.scalingFactor?x.scalingFactor(e,r,p.length):e*x.scalingFactor;return void m(t,n-1)}console.warn("cannot fit all text elements in three tries")}const i=a[1].x-a[0].x,s=a[1].y-a[0].y,l=c.fit?Math.min(d/i,y/s):1,u=new Set(p.map(((t,e)=>e)));r.forEach((e=>{u.delete(e.index),this.updateElement(t[e.index],e.index,{options:e.options,scale:l,x:h.left+l*e.x+d/2,y:f.top+l*e.y+y/2,width:l*e.width,height:l*e.height,text:e.text},o)})),u.forEach((e=>this.updateElement(t[e],e,{scale:0},o)))})).start()};m()}draw(){const t=this._cachedMeta.data,{ctx:e}=this.chart;t.forEach((t=>t.draw(e)))}getLabelAndValue(t){const e=super.getLabelAndValue(t),n=this.chart.data.labels;return e.label=n[t],e}}P.id="wordCloud",P.defaults={datasets:{animation:{colors:{properties:["color","strokeStyle"]},numbers:{properties:["x","y","size","rotate"]}}},maintainAspectRatio:!1,dataElementType:C.id},P.overrides={scales:{x:{type:"linear",min:-1,max:1,display:!1},y:{type:"linear",min:-1,max:1,display:!1}}};class z extends e.Chart{constructor(t,n){super(t,function(t,n,r,o=[],a=[]){e.registry.addControllers(r),Array.isArray(o)?e.registry.addElements(...o):e.registry.addElements(o),Array.isArray(a)?e.registry.addScales(...a):e.registry.addScales(a);const i=n;return i.type=t,i}("wordCloud",n,P,C))}}z.id=P.id,e.registry.addControllers(P),e.registry.addElements(C),t.WordCloudChart=z,t.WordCloudController=P,t.WordElement=C}));
//# sourceMappingURL=index.umd.min.js.map