import{j as e}from"./jsx-runtime-DEdD30eg.js";import{c as ae,R as ie,r as M}from"./index-RYns6xqu.js";import{H as ve,a as ke}from"./HubspotForm-Cfp1Jc_R.js";import{c as fe,B as xe,a as qe,b as le,d as je,e as we,f as _e}from"./Breadcrumb-DCZ5crBR.js";import{B as Fe}from"./Button-Bu93-K_l.js";import{H as oe}from"./Heading-DZBEpwTQ.js";/* empty css                *//**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=fe("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]),ce=({text:d})=>e.jsx("li",{style:{listStyleType:"disc",paddingLeft:"1.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"},children:d});ce.__docgenInfo={description:"",methods:[],displayName:"Li",props:{text:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:`(
	| string
	| number
	| boolean
	| JSX.Element
	| Iterable<React.ReactNode>
	| null
	| undefined
)[]`},description:""}}};const Se=["video","image","embed","figma"],ge=({block:d,mapImageUrl:g})=>{var w;const r=d.value,c=d.value.type;if(!Se.includes(c))return null;const b=r.format,{display_source:v=void 0,block_aspect_ratio:y=void 0,block_height:i=1,block_width:s=1}=b??{},f=y||i/s;if(c==="embed"||c==="video"||c==="figma")return e.jsx("div",{style:{paddingBottom:`${f*100}%`,position:"relative"},children:e.jsx("iframe",{className:"notion-image-inset",src:c==="figma"?r.properties.source[0][0]:v,title:"notion iframe"})});if(d.value.type==="image"){const x=g(r.properties.source[0][0],d),u=(w=r.properties.caption)==null?void 0:w[0][0];return y?e.jsx("div",{style:{paddingBottom:`${f*100}%`,position:"relative"},children:e.jsx("img",{className:"notion-image-inset",alt:u||"notion image",src:x})}):e.jsx("img",{alt:u,src:x})}return null};ge.__docgenInfo={description:"",methods:[],displayName:"Asset",props:{block:{required:!0,tsType:{name:"BlockType"},description:""},mapImageUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(image: string, block?: BlockType) => string",signature:{arguments:[{type:{name:"string"},name:"image"},{type:{name:"BlockType"},name:"block"}],return:{name:"string"}}},description:""}}};var pe={exports:{}};(function(d){var g=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(c){var b=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,y={},i={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(n){return n instanceof s?new s(n.type,t(n.content),n.alias):Array.isArray(n)?n.map(t):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++v}),t.__id},clone:function t(n,a){a=a||{};var l,o;switch(i.util.type(n)){case"Object":if(o=i.util.objId(n),a[o])return a[o];l={},a[o]=l;for(var m in n)n.hasOwnProperty(m)&&(l[m]=t(n[m],a));return l;case"Array":return o=i.util.objId(n),a[o]?a[o]:(l=[],a[o]=l,n.forEach(function(q,p){l[p]=t(q,a)}),l);default:return n}},getLanguage:function(t){for(;t;){var n=b.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,n){t.className=t.className.replace(RegExp(b,"gi"),""),t.classList.add("language-"+n)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(l){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(l.stack)||[])[1];if(t){var n=document.getElementsByTagName("script");for(var a in n)if(n[a].src==t)return n[a]}return null}},isActive:function(t,n,a){for(var l="no-"+n;t;){var o=t.classList;if(o.contains(n))return!0;if(o.contains(l))return!1;t=t.parentElement}return!!a}},languages:{plain:y,plaintext:y,text:y,txt:y,extend:function(t,n){var a=i.util.clone(i.languages[t]);for(var l in n)a[l]=n[l];return a},insertBefore:function(t,n,a,l){l=l||i.languages;var o=l[t],m={};for(var q in o)if(o.hasOwnProperty(q)){if(q==n)for(var p in a)a.hasOwnProperty(p)&&(m[p]=a[p]);a.hasOwnProperty(q)||(m[q]=o[q])}var F=l[t];return l[t]=m,i.languages.DFS(i.languages,function(N,D){D===F&&N!=t&&(this[N]=m)}),m},DFS:function t(n,a,l,o){o=o||{};var m=i.util.objId;for(var q in n)if(n.hasOwnProperty(q)){a.call(n,q,n[q],l||q);var p=n[q],F=i.util.type(p);F==="Object"&&!o[m(p)]?(o[m(p)]=!0,t(p,a,null,o)):F==="Array"&&!o[m(p)]&&(o[m(p)]=!0,t(p,a,q,o))}}},plugins:{},highlightAll:function(t,n){i.highlightAllUnder(document,t,n)},highlightAllUnder:function(t,n,a){var l={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",l),l.elements=Array.prototype.slice.apply(l.container.querySelectorAll(l.selector)),i.hooks.run("before-all-elements-highlight",l);for(var o=0,m;m=l.elements[o++];)i.highlightElement(m,n===!0,l.callback)},highlightElement:function(t,n,a){var l=i.util.getLanguage(t),o=i.languages[l];i.util.setLanguage(t,l);var m=t.parentElement;m&&m.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(m,l);var q=t.textContent,p={element:t,language:l,grammar:o,code:q};function F(D){p.highlightedCode=D,i.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,i.hooks.run("after-highlight",p),i.hooks.run("complete",p),a&&a.call(p.element)}if(i.hooks.run("before-sanity-check",p),m=p.element.parentElement,m&&m.nodeName.toLowerCase()==="pre"&&!m.hasAttribute("tabindex")&&m.setAttribute("tabindex","0"),!p.code){i.hooks.run("complete",p),a&&a.call(p.element);return}if(i.hooks.run("before-highlight",p),!p.grammar){F(i.util.encode(p.code));return}if(n&&c.Worker){var N=new Worker(i.filename);N.onmessage=function(D){F(D.data)},N.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else F(i.highlight(p.code,p.grammar,p.language))},highlight:function(t,n,a){var l={code:t,grammar:n,language:a};if(i.hooks.run("before-tokenize",l),!l.grammar)throw new Error('The language "'+l.language+'" has no grammar.');return l.tokens=i.tokenize(l.code,l.grammar),i.hooks.run("after-tokenize",l),s.stringify(i.util.encode(l.tokens),l.language)},tokenize:function(t,n){var a=n.rest;if(a){for(var l in a)n[l]=a[l];delete n.rest}var o=new x;return u(o,o.head,t),w(t,o,n,o.head,0),L(o)},hooks:{all:{},add:function(t,n){var a=i.hooks.all;a[t]=a[t]||[],a[t].push(n)},run:function(t,n){var a=i.hooks.all[t];if(!(!a||!a.length))for(var l=0,o;o=a[l++];)o(n)}},Token:s};c.Prism=i;function s(t,n,a,l){this.type=t,this.content=n,this.alias=a,this.length=(l||"").length|0}s.stringify=function t(n,a){if(typeof n=="string")return n;if(Array.isArray(n)){var l="";return n.forEach(function(F){l+=t(F,a)}),l}var o={type:n.type,content:t(n.content,a),tag:"span",classes:["token",n.type],attributes:{},language:a},m=n.alias;m&&(Array.isArray(m)?Array.prototype.push.apply(o.classes,m):o.classes.push(m)),i.hooks.run("wrap",o);var q="";for(var p in o.attributes)q+=" "+p+'="'+(o.attributes[p]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+q+">"+o.content+"</"+o.tag+">"};function f(t,n,a,l){t.lastIndex=n;var o=t.exec(a);if(o&&l&&o[1]){var m=o[1].length;o.index+=m,o[0]=o[0].slice(m)}return o}function w(t,n,a,l,o,m){for(var q in a)if(!(!a.hasOwnProperty(q)||!a[q])){var p=a[q];p=Array.isArray(p)?p:[p];for(var F=0;F<p.length;++F){if(m&&m.cause==q+","+F)return;var N=p[F],D=N.inside,H=!!N.lookbehind,k=!!N.greedy,_=N.alias;if(k&&!N.pattern.global){var A=N.pattern.toString().match(/[imsuy]*$/)[0];N.pattern=RegExp(N.pattern.source,A+"g")}for(var C=N.pattern||N,j=l.next,E=o;j!==n.tail&&!(m&&E>=m.reach);E+=j.value.length,j=j.next){var $=j.value;if(n.length>t.length)return;if(!($ instanceof s)){var B=1,P;if(k){if(P=f(C,E,t,H),!P||P.index>=t.length)break;var K=P.index,O=P.index+P[0].length,R=E;for(R+=j.value.length;K>=R;)j=j.next,R+=j.value.length;if(R-=j.value.length,E=R,j.value instanceof s)continue;for(var U=j;U!==n.tail&&(R<O||typeof U.value=="string");U=U.next)B++,R+=U.value.length;B--,$=t.slice(E,R),P.index-=E}else if(P=f(C,0,$,H),!P)continue;var K=P.index,W=P[0],Z=$.slice(0,K),re=$.slice(K+W.length),Y=E+$.length;m&&Y>m.reach&&(m.reach=Y);var J=j.prev;Z&&(J=u(n,J,Z),E+=Z.length),I(n,J,B);var he=new s(q,D?i.tokenize(W,D):W,_,W);if(j=u(n,J,he),re&&u(n,j,re),B>1){var Q={cause:q+","+F,reach:Y};w(t,n,a,j.prev,E,Q),m&&Q.reach>m.reach&&(m.reach=Q.reach)}}}}}}function x(){var t={value:null,prev:null,next:null},n={value:null,prev:t,next:null};t.next=n,this.head=t,this.tail=n,this.length=0}function u(t,n,a){var l=n.next,o={value:a,prev:n,next:l};return n.next=o,l.prev=o,t.length++,o}function I(t,n,a){for(var l=n.next,o=0;o<a&&l!==t.tail;o++)l=l.next;n.next=l,l.prev=n,t.length-=o}function L(t){for(var n=[],a=t.head.next;a!==t.tail;)n.push(a.value),a=a.next;return n}if(!c.document)return c.addEventListener&&(i.disableWorkerMessageHandler||c.addEventListener("message",function(t){var n=JSON.parse(t.data),a=n.language,l=n.code,o=n.immediateClose;c.postMessage(i.highlight(l,i.languages[a],a)),o&&c.close()},!1)),i;var T=i.util.currentScript();T&&(i.filename=T.src,T.hasAttribute("data-manual")&&(i.manual=!0));function h(){i.manual||i.highlightAll()}if(!i.manual){var S=document.readyState;S==="loading"||S==="interactive"&&T&&T.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return i}(g);d.exports&&(d.exports=r),typeof ae<"u"&&(ae.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(b,v){var y={};y["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[v]},y.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:y}};i["language-"+v]={pattern:/[\s\S]+/,inside:r.languages[v]};var s={};s[b]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return b}),"i"),lookbehind:!0,greedy:!0,inside:i},r.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(c,b){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[b,"language-"+b],inside:r.languages[b]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(c){var b=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+b.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+b.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+b.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+b.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:b,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var v=c.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var c="Loading…",b=function(T,h){return"✖ Error "+T+" while fetching file: "+h},v="✖ Error: File does not exist or is empty",y={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",s="loading",f="loaded",w="failed",x="pre[data-src]:not(["+i+'="'+f+'"]):not(['+i+'="'+s+'"])';function u(T,h,S){var t=new XMLHttpRequest;t.open("GET",T,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?h(t.responseText):t.status>=400?S(b(t.status,t.statusText)):S(v))},t.send(null)}function I(T){var h=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(T||"");if(h){var S=Number(h[1]),t=h[2],n=h[3];return t?n?[S,Number(n)]:[S,void 0]:[S,S]}}r.hooks.add("before-highlightall",function(T){T.selector+=", "+x}),r.hooks.add("before-sanity-check",function(T){var h=T.element;if(h.matches(x)){T.code="",h.setAttribute(i,s);var S=h.appendChild(document.createElement("CODE"));S.textContent=c;var t=h.getAttribute("data-src"),n=T.language;if(n==="none"){var a=(/\.(\w+)$/.exec(t)||[,"none"])[1];n=y[a]||a}r.util.setLanguage(S,n),r.util.setLanguage(h,n);var l=r.plugins.autoloader;l&&l.loadLanguages(n),u(t,function(o){h.setAttribute(i,f);var m=I(h.getAttribute("data-range"));if(m){var q=o.split(/\r\n?|\n/g),p=m[0],F=m[1]==null?q.length:m[1];p<0&&(p+=q.length),p=Math.max(0,Math.min(p-1,q.length)),F<0&&(F+=q.length),F=Math.max(0,Math.min(F,q.length)),o=q.slice(p,F).join(`
`),h.hasAttribute("data-start")||h.setAttribute("data-start",String(p+1))}S.textContent=o,r.highlightElement(S)},function(o){h.setAttribute(i,w),S.textContent=o})}}),r.plugins.fileHighlight={highlight:function(h){for(var S=(h||document).querySelectorAll(x),t=0,n;n=S[t++];)r.highlightElement(n)}};var L=!1;r.fileHighlight=function(){L||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),L=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(pe);var ee=pe.exports;(function(d){var g=d.util.clone(d.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,c=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,b=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function v(s,f){return s=s.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return c}).replace(/<SPREAD>/g,function(){return b}),RegExp(s,f)}b=v(b).source,d.languages.jsx=d.languages.extend("markup",g),d.languages.jsx.tag.pattern=v(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),d.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,d.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,d.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,d.languages.jsx.tag.inside.comment=g.comment,d.languages.insertBefore("inside","attr-name",{spread:{pattern:v(/<SPREAD>/.source),inside:d.languages.jsx}},d.languages.jsx.tag),d.languages.insertBefore("inside","special-attr",{script:{pattern:v(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:d.languages.jsx}}},d.languages.jsx.tag);var y=function(s){return s?typeof s=="string"?s:typeof s.content=="string"?s.content:s.content.map(y).join(""):""},i=function(s){for(var f=[],w=0;w<s.length;w++){var x=s[w],u=!1;if(typeof x!="string"&&(x.type==="tag"&&x.content[0]&&x.content[0].type==="tag"?x.content[0].content[0].content==="</"?f.length>0&&f[f.length-1].tagName===y(x.content[0].content[1])&&f.pop():x.content[x.content.length-1].content==="/>"||f.push({tagName:y(x.content[0].content[1]),openedBraces:0}):f.length>0&&x.type==="punctuation"&&x.content==="{"?f[f.length-1].openedBraces++:f.length>0&&f[f.length-1].openedBraces>0&&x.type==="punctuation"&&x.content==="}"?f[f.length-1].openedBraces--:u=!0),(u||typeof x=="string")&&f.length>0&&f[f.length-1].openedBraces===0){var I=y(x);w<s.length-1&&(typeof s[w+1]=="string"||s[w+1].type==="plain-text")&&(I+=y(s[w+1]),s.splice(w+1,1)),w>0&&(typeof s[w-1]=="string"||s[w-1].type==="plain-text")&&(I=y(s[w-1])+I,s.splice(w-1,1),w--),s[w]=new d.Token("plain-text",I,null,I)}x.content&&typeof x.content!="string"&&i(x.content)}};d.hooks.add("after-tokenize",function(s){s.language!=="jsx"&&s.language!=="tsx"||i(s.tokens)})})(Prism);const me=({code:d,language:g="javascript"})=>{const r=g.toLowerCase(),c=ee.languages[r]||ee.languages.javascript,b=`language-${g.toLowerCase()}`;return e.jsx("pre",{className:`notion-code ${b}`,children:e.jsx("code",{className:b,dangerouslySetInnerHTML:{__html:ee.highlight(d,c,g)}})})};me.__docgenInfo={description:"",methods:[],displayName:"Code",props:{code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"javascript"',computed:!1}}}};const Ce=d=>(g,r)=>g==null?void 0:g.map(([c,b])=>{switch(r){case"1":return e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"text-3xl font-bold",children:[c,e.jsx("hr",{className:"my-2 border-t border-gray-300"})]},c)});case"2":return e.jsx(e.Fragment,{children:e.jsxs(oe,{level:2,id:encodeURIComponent(c),children:[c,e.jsx("hr",{className:"my-2 border-t border-gray-300"})]},c)});case"3":return e.jsxs(oe,{level:3,id:encodeURIComponent(c),children:[c,e.jsx("hr",{className:"my-2 border-t border-gray-300"})]},c)}return b?b.reduceRight((v,y)=>{const i=()=>{switch(y[0]){case"h":return e.jsx("span",{className:`notion-${y[1]}`,children:v},y[0]);case"c":return e.jsx("code",{className:"text-red-500 bg-gray-300 p-1 rounded-sm bg-opacity-50",children:v},y[0]);case"b":return e.jsx("b",{className:"font-semibold",children:v},y[0]);case"i":return e.jsx("em",{children:v},y[0]);case"s":return e.jsx("s",{children:v},y[0]);case"a":return e.jsx("a",{style:{color:"#0070f3"},href:y[1],children:v},y[0]);default:return e.jsx(ie.Fragment,{children:e.jsx("span",{children:v})},y[0])}},s=d==null?void 0:d[y[0]];if(s){const f=y[1]?{decoratorValue:y[1],renderComponent:()=>null}:{decoratorValue:"",renderComponent:()=>null};return e.jsx(s,{...f,renderComponent:i,children:i()},c)}return i()},c):e.jsx(ie.Fragment,{children:c},c)}),z=(...d)=>d.filter(g=>!!g).join(" "),V=d=>d.reduce((g,r)=>g+r[0],""),Ae=(d,g)=>{const r=new URL(`https://www.notion.so${d.startsWith("/image")?d:`/image/${encodeURIComponent(d)}`}`);if(g&&!d.includes("/images/page-cover/")){const c=g.value.parent_table==="space"?"block":g.value.parent_table;r.searchParams.set("table",c),r.searchParams.set("id",g.value.id),r.searchParams.set("cache","v2")}return r.toString()},Ne=(d="")=>`/${d.replace(/-/g,"")}`,Ee=d=>d.type==="page"||d.type==="callout",G=({block:d,className:g,big:r,mapImageUrl:c})=>{var y,i;if(!Ee(d.value))return null;const b=(y=d.value.format)==null?void 0:y.page_icon,v=(i=d.value.properties)==null?void 0:i.title;if(b!=null&&b.includes("http")){const s=c(b,d);return e.jsx("img",{className:z(g,r?"w-12 h-12":"w-8 h-8"),src:s,alt:v?V(v):"Icon"})}return e.jsx("span",{className:"text-2xl",role:"img","aria-label":b,children:b})};G.__docgenInfo={description:"",methods:[],displayName:"PageIcon",props:{block:{required:!0,tsType:{name:"BlockType"},description:""},mapImageUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(image: string, block?: BlockType) => string",signature:{arguments:[{type:{name:"string"},name:"image"},{type:{name:"BlockType"},name:"block"}],return:{name:"string"}}},description:""},big:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ye=({blockMap:d,mapPageUrl:g,mapImageUrl:r})=>{var i,s,f,w,x;const b=Object.keys(d)[0];if(!b)return null;const v=[];let y=b;do{const u=d[y];if(!u||!u.value)break;const I=((f=(s=(i=u.value.properties)==null?void 0:i.title)==null?void 0:s[0])==null?void 0:f[0])??"";if(!I)break;const L=((x=(w=u.value)==null?void 0:w.format)==null?void 0:x.page_icon)??void 0;if(!(I||L))break;v.push({block:u,active:y===b,pageId:y,title:I,icon:L});const T=u.value.parent_id;if(!T)break;y=T}while(y);return v.reverse(),e.jsx("header",{className:"notion-page-header",children:e.jsx("div",{className:"notion-nav-breadcrumbs",children:v.map((u,I)=>e.jsxs(M.Fragment,{children:[e.jsxs("a",{className:`notion-nav-breadcrumb ${u.active?"notion-nav-breadcrumb-active":""}`,href:u.active?void 0:g(u.pageId),children:[u.icon&&e.jsx(G,{className:"notion-nav-icon",block:u.block,mapImageUrl:r}),u.title&&e.jsx("span",{className:"notion-nav-title",children:u.title||""})]}),I<v.length-1&&e.jsx("span",{className:"notion-nav-spacer",children:"/"})]},u.pageId))})})};ye.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{blockMap:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	[key: string]: BlockType;
}`,signature:{properties:[{key:{name:"string"},value:{name:"BlockType",required:!0}}]}},description:""},mapPageUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(pageId: string) => string",signature:{arguments:[{type:{name:"string"},name:"pageId"}],return:{name:"string"}}},description:""},mapImageUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(image: string, block?: BlockType) => string",signature:{arguments:[{type:{name:"string"},name:"image"},{type:{name:"BlockType"},name:"block"}],return:{name:"string"}}},description:""}}};const be=d=>{const{block:g,portalId:r,children:c,level:b,fullPage:v,hideHeader:y,blockMap:i,mapPageUrl:s,mapImageUrl:f,customDecoratorComponents:w,notionData:x}=d,u=g==null?void 0:g.value,[I,L]=M.useState(!1);M.useEffect(()=>{const h=()=>{const S=document.createElement("style");S.innerHTML=`
				.znc pre:not(.language-css) {
					padding: 16px;
					color: white;
					font-size: 14px;
				}
			`,document.head.appendChild(S)};L(!0),h()},[]);const T=()=>{var t,n,a,l,o,m,q,p,F,N,D,H;const h=Ce(w),S=()=>e.jsx(xe,{children:e.jsxs(qe,{children:[e.jsx(le,{children:e.jsx(je,{href:"/",children:"Home"})}),e.jsx(we,{children:e.jsx(Te,{})}),e.jsx(le,{children:e.jsx(_e,{children:u.properties&&"title"in u.properties?u.properties.title[0][0]:null})})]})});switch(u==null?void 0:u.type){case"page":if(b===0){if(v){if(!u.properties)return null;const{page_cover:k,page_full_width:_,page_small_text:A}=u.format||{},C=((n=(t=x==null?void 0:x.cover)==null?void 0:t.external)==null?void 0:n.url)||k;return e.jsxs("div",{className:"notion",children:[!y&&e.jsx(ye,{blockMap:i,mapPageUrl:s,mapImageUrl:f}),e.jsx("main",{className:z("notion-page",!C&&"notion-page-offset",_&&"notion-full-width",A&&"notion-small-text"),children:c})]})}return e.jsx("main",{className:"notion",children:c})}return u.properties?e.jsxs("a",{className:"notion-page-link",href:s(u.id),children:[u.format&&e.jsx("div",{className:"notion-page-icon",children:e.jsx(G,{block:g,mapImageUrl:f})}),e.jsx("div",{className:"notion-page-text",children:h(u.properties.title)})]}):null;case"header":return u.properties?e.jsx("div",{className:"mt-8 mb-6",children:h(u.properties.title,"1")}):null;case"sub_header":return u.properties?e.jsx("div",{className:"my-6 mb-4",children:h(u.properties.title,"2")}):null;case"sub_sub_header":return u.properties?e.jsx("div",{className:"my-4 mb-2",children:h(u.properties.title,"3")}):null;case"divider":return e.jsx("hr",{className:"my-6 border-t border-gray-300"});case"text":{const k=(a=u.format)==null?void 0:a.block_color;return u.properties?e.jsx("p",{className:z(k&&`notion-${k} `),style:{lineHeight:1.8},children:h(u.properties.title)}):e.jsx("div",{className:"notion-blank",children:" "})}case"bulleted_list":return u.properties?e.jsx(ce,{text:h(u.properties.title)}):null;case"numbered_list":return u.properties?e.jsx("ol",{className:"list-decimal",children:h(u.properties.title)}):null;case"to_do":{const k=g.value.properties,{id:_}=g.value,A=k==null?void 0:k.title.flat(1).filter(j=>typeof j=="string").join(""),C=k&&"checked"in k&&k.checked&&k.checked[0][0]==="Yes";return e.jsxs("div",{children:[e.jsx("input",{className:"notion-checkbox",type:"checkbox",name:"",id:_,checked:C}),e.jsx("label",{htmlFor:_,children:A})]})}case"image":case"embed":case"figma":case"video":{const k=g.value;return e.jsxs("figure",{className:"notion-asset-wrapper",style:k.format!==void 0?{width:k.format.block_width}:void 0,children:[e.jsx(ge,{block:g,mapImageUrl:f}),k.properties.caption&&e.jsx("figcaption",{className:"notion-image-caption",children:h(k.properties.caption)})]})}case"code":{if(u.properties.title){const k=u.properties.title[0][0],_=k.includes('id="hubspot"'),A=k.includes("data-formid");if(_&&A){const j=k.split('data-formid="')[1].split('"')[0];return r?e.jsx(ve,{portalId:r,formId:j}):""}const C=u.properties.language[0][0];if(C==="JSON"){const{type:j,link:E,component:$,text:B}=JSON.parse(k);if($==="button"){const P=()=>{window.open(E,"_blank")};return e.jsx("div",{className:"flex items-center justify-center my-8",children:$&&e.jsx(Fe,{variant:j,size:"large",onClick:P,children:B})})}if($==="breadcrumb")return e.jsx("div",{className:"my-8",children:e.jsx(S,{})})}return C==="HTML"?e.jsx("div",{className:"znc",dangerouslySetInnerHTML:{__html:k}}):e.jsx(me,{language:C||"",code:k},u.id)}return null}case"column_list":return e.jsx("div",{className:"notion-row",children:c});case"column":{const _=u.format.column_ratio,j=`calc((100% - ${(Number((1/_).toFixed(0))-1)*46}px) * ${_})`;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"notion-column",style:{width:j},children:c}),e.jsx("div",{className:"notion-spacer",style:{width:46}})]})}case"quote":return u.properties?e.jsx("blockquote",{className:"notion-quote",children:h(u.properties.title)}):null;case"collection_view":{if(!g)return null;const k=(l=g==null?void 0:g.collection)==null?void 0:l.types[0];return e.jsxs("div",{children:[e.jsx("h3",{className:"notion-h3",children:((o=g.collection)==null?void 0:o.title)&&h(g.collection.title)}),(k==null?void 0:k.type)==="table"&&e.jsx("div",{style:{maxWidth:"100%",marginTop:5},children:e.jsxs("table",{className:"notion-table",children:[e.jsx("thead",{children:e.jsx("tr",{className:"notion-tr",children:(q=(m=k.format)==null?void 0:m.table_properties)==null?void 0:q.filter(_=>_.visible).map(_=>{var A,C;return e.jsx("th",{className:"notion-th",style:{minWidth:_.width},children:(C=(A=g.collection)==null?void 0:A.schema[_.property])==null?void 0:C.name},`th-${_.property}`)})})}),e.jsx("tbody",{children:(p=g==null?void 0:g.collection)==null?void 0:p.data.map(_=>{var A,C;return e.jsx("tr",{className:"notion-tr",children:(C=(A=k.format)==null?void 0:A.table_properties)==null?void 0:C.filter(j=>j.visible).map((j,E)=>{var $,B;return e.jsx("td",{className:`notion-td ${j.property==="title"?"notion-bold":""}`,children:h([_[((B=($=g.collection)==null?void 0:$.schema[j.property])==null?void 0:B.name)??""]])},`row-${_.id}-${E}`)})},`row-${_.id}`)})})]})}),(k==null?void 0:k.type)==="gallery"&&e.jsx("div",{className:"notion-gallery",children:(F=g.collection)==null?void 0:F.data.map(_=>{var A,C;return e.jsx("div",{className:"notion-gallery-card",children:e.jsx("div",{className:"notion-gallery-content",children:(C=(A=k.format)==null?void 0:A.gallery_properties)==null?void 0:C.filter(j=>j.visible).map((j,E)=>{var P,O;const $=(O=(P=g.collection)==null?void 0:P.schema[j.property])==null?void 0:O.name,B=$?[_[$]]:[];return e.jsx("p",{className:`notion-gallery-data ${E===0?"is-first":""}`,children:V([B[0]])},B[0].toString())})})},`col-${_.id}`)})})]})}case"callout":return e.jsxs("div",{className:z("notion-callout",u.format.block_color&&`notion-${u.format.block_color}`,u.format.block_color&&`notion-${u.format.block_color}_co`),children:[e.jsx("div",{children:e.jsx(G,{block:g,mapImageUrl:f})}),e.jsx("div",{className:"notion-callout-text",children:h(u.properties.title)})]});case"bookmark":{const k=u.properties.link,_=u.properties.title??k,A=u.properties.description,C=(N=u.format)==null?void 0:N.block_color,j=(D=u.format)==null?void 0:D.bookmark_icon,E=(H=u.format)==null?void 0:H.bookmark_cover;return e.jsx("div",{className:"notion-row",children:e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",className:z("notion-bookmark",C&&`notion-${C}`),href:k[0][0],children:[e.jsxs("div",{children:[e.jsx("div",{className:"notion-bookmark-title",children:h(_)}),A&&e.jsx("div",{className:"notion-bookmark-description",children:h(A)}),e.jsxs("div",{className:"notion-bookmark-link",children:[j&&e.jsx("img",{src:j,alt:V(_)}),e.jsx("div",{children:h(k)})]})]}),E&&e.jsx("div",{className:"notion-bookmark-image",children:e.jsx("img",{src:E,alt:V(_)})})]})})}case"toggle":return e.jsxs("details",{className:"notion-toggle",children:[e.jsx("summary",{children:h(u.properties.title)}),e.jsx("div",{children:c})]});case"collection_view_page":return e.jsx("div",{children:c});case"table":return e.jsx("table",{className:"table-auto",children:c});case"table_row":return e.jsx("tr",{className:"flex flex-row",children:Object.values(u.properties).map(k=>e.jsx("td",{className:"p-2 w-full border",children:h(k)},`td-${u.id}`))});default:return e.jsx("div",{})}};return e.jsx(e.Fragment,{children:I&&T()})};be.__docgenInfo={description:"",methods:[],displayName:"Block",props:{block:{required:!0,tsType:{name:"BlockType"},description:""},portalId:{required:!1,tsType:{name:"string"},description:""},level:{required:!0,tsType:{name:"number"},description:""},blockMap:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	[key: string]: BlockType;
}`,signature:{properties:[{key:{name:"string"},value:{name:"BlockType",required:!0}}]}},description:""},mapPageUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(pageId: string) => string",signature:{arguments:[{type:{name:"string"},name:"pageId"}],return:{name:"string"}}},description:""},mapImageUrl:{required:!0,tsType:{name:"signature",type:"function",raw:"(image: string, block?: BlockType) => string",signature:{arguments:[{type:{name:"string"},name:"image"},{type:{name:"BlockType"},name:"block"}],return:{name:"string"}}},description:""},fullPage:{required:!1,tsType:{name:"boolean"},description:""},hideHeader:{required:!1,tsType:{name:"boolean"},description:""},customBlockComponents:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	[K in BlockValueTypeKeys]?: FC<CustomBlockComponentProps<K>>;
}`,signature:{properties:[{key:{name:'union["type"]',raw:'BlockValueType["type"]',required:!1},value:{name:"FC",elements:[{name:"CustomBlockComponentProps",elements:[{name:"K"}],raw:"CustomBlockComponentProps<K>"}],raw:"FC<CustomBlockComponentProps<K>>"}}]}},description:""},customDecoratorComponents:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	[K in SubDecorationSymbol]?: FC<CustomDecoratorComponentProps<K>>;
}`,signature:{properties:[{key:{name:"union[0]",raw:"SubDecorationType[0]",required:!1},value:{name:"FC",elements:[{name:"intersection",raw:`(SubDecorationValue<T> extends never
	? unknown
	: {
			decoratorValue: SubDecorationValue<T>;
		}) & {
	renderComponent: () => JSX.Element | null;
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
	renderComponent: () => JSX.Element | null;
}`,signature:{properties:[{key:"renderComponent",value:{name:"signature",type:"function",raw:"() => JSX.Element | null",signature:{arguments:[],return:{name:"union",raw:"JSX.Element | null",elements:[{name:"JSX.Element"},{name:"null"}]}},required:!0}}]}}]}],raw:"FC<CustomDecoratorComponentProps<K>>"}}]}},description:""},metaData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	title: string;
	description: string;
	cover: string;
	slug: string;
	shareTitle: string;
	lastEditedTime: string;
	publishDate: string;
	eventDate: string;
	category: CategoryName;
	canonical: string;
	formId: string;
	authorCategory: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"cover",value:{name:"string",required:!0}},{key:"slug",value:{name:"string",required:!0}},{key:"shareTitle",value:{name:"string",required:!0}},{key:"lastEditedTime",value:{name:"string",required:!0}},{key:"publishDate",value:{name:"string",required:!0}},{key:"eventDate",value:{name:"string",required:!0}},{key:"category",value:{name:"union",raw:'"セミナー" | "会社説明会"',elements:[{name:"literal",value:'"セミナー"'},{name:"literal",value:'"会社説明会"'}],required:!0}},{key:"canonical",value:{name:"string",required:!0}},{key:"formId",value:{name:"string",required:!0}},{key:"authorCategory",value:{name:"string",required:!0}}]}},description:""},notionData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	object: "page";
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: { object: "user"; id: string };
	last_edited_by: { object: "user"; id: string };
	cover: {
		type: "external" | "file";
		external: { url: string };
		file: { url: string };
	};
	icon: null;
	parent: {
		type: "database_id";
		database_id: string;
	};
	archived: boolean;
	in_trash: boolean;
	properties: Property;
	url: string;
	public_url: string;
}`,signature:{properties:[{key:"object",value:{name:"literal",value:'"page"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"created_time",value:{name:"string",required:!0}},{key:"last_edited_time",value:{name:"string",required:!0}},{key:"created_by",value:{name:"signature",type:"object",raw:'{ object: "user"; id: string }',signature:{properties:[{key:"object",value:{name:"literal",value:'"user"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!0}},{key:"last_edited_by",value:{name:"signature",type:"object",raw:'{ object: "user"; id: string }',signature:{properties:[{key:"object",value:{name:"literal",value:'"user"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!0}},{key:"cover",value:{name:"signature",type:"object",raw:`{
	type: "external" | "file";
	external: { url: string };
	file: { url: string };
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"external" | "file"',elements:[{name:"literal",value:'"external"'},{name:"literal",value:'"file"'}],required:!0}},{key:"external",value:{name:"signature",type:"object",raw:"{ url: string }",signature:{properties:[{key:"url",value:{name:"string",required:!0}}]},required:!0}},{key:"file",value:{name:"signature",type:"object",raw:"{ url: string }",signature:{properties:[{key:"url",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"icon",value:{name:"null",required:!0}},{key:"parent",value:{name:"signature",type:"object",raw:`{
	type: "database_id";
	database_id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"database_id"',required:!0}},{key:"database_id",value:{name:"string",required:!0}}]},required:!0}},{key:"archived",value:{name:"boolean",required:!0}},{key:"in_trash",value:{name:"boolean",required:!0}},{key:"properties",value:{name:"signature",type:"object",raw:`{
	Title: {
		id: string;
		type: "title";
		title: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	Description: {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	"Last Edited Time": {
		id: string;
		type: "last_edited_time";
		last_edited_time: string;
	};
	"Ready to Publish": {
		id: string;
		type: "checkbox";
		checkbox: boolean;
	};
	"Event Date": {
		id: string;
		type: "date";
		date: { start: string };
	};
	"Share Title": {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	"No Index": {
		id: string;
		type: "checkbox";
		checkbox: boolean;
	};
	Category: {
		id: string;
		type: "select";
		select: { name: CategoryName };
	};
	Canonical: {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	"Publish Date": {
		id: string;
		type: "date";
		date: { start: string };
	};
	Slug: {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
}`,signature:{properties:[{key:"Title",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "title";
	title: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"title"',required:!0}},{key:"title",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}},{key:"Description",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "rich_text";
	rich_text: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"rich_text"',required:!0}},{key:"rich_text",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}},{key:"Last Edited Time",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "last_edited_time";
	last_edited_time: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"last_edited_time"',required:!0}},{key:"last_edited_time",value:{name:"string",required:!0}}]},required:!0}},{key:"Ready to Publish",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "checkbox";
	checkbox: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"checkbox"',required:!0}},{key:"checkbox",value:{name:"boolean",required:!0}}]},required:!0}},{key:"Event Date",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "date";
	date: { start: string };
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"date"',required:!0}},{key:"date",value:{name:"signature",type:"object",raw:"{ start: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"Share Title",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "rich_text";
	rich_text: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"rich_text"',required:!0}},{key:"rich_text",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}},{key:"No Index",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "checkbox";
	checkbox: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"checkbox"',required:!0}},{key:"checkbox",value:{name:"boolean",required:!0}}]},required:!0}},{key:"Category",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "select";
	select: { name: CategoryName };
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"select"',required:!0}},{key:"select",value:{name:"signature",type:"object",raw:"{ name: CategoryName }",signature:{properties:[{key:"name",value:{name:"union",raw:'"セミナー" | "会社説明会"',elements:[{name:"literal",value:'"セミナー"'},{name:"literal",value:'"会社説明会"'}],required:!0}}]},required:!0}}]},required:!0}},{key:"Canonical",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "rich_text";
	rich_text: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"rich_text"',required:!0}},{key:"rich_text",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}},{key:"Publish Date",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "date";
	date: { start: string };
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"date"',required:!0}},{key:"date",value:{name:"signature",type:"object",raw:"{ start: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"Slug",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "rich_text";
	rich_text: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"rich_text"',required:!0}},{key:"rich_text",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}}]},required:!0}},{key:"url",value:{name:"string",required:!0}},{key:"public_url",value:{name:"string",required:!0}}]}},description:""}}};const ne=({level:d=0,currentId:g,mapPageUrl:r=Ne,mapImageUrl:c=Ae,...b})=>{var f,w;const{blockMap:v,portalId:y}=b,i=g||Object.keys(v)[0],s=v[i];return s?e.jsxs(e.Fragment,{children:[e.jsx("link",{rel:"stylesheet",href:"https://hs.classmethod.jp/hubfs/src/hubspot_form_style.css"}),e.jsx("div",{children:e.jsx(ke,{children:e.jsx(be,{portalId:y,level:d,block:s,mapPageUrl:r,mapImageUrl:c,...b,children:(w=(f=s==null?void 0:s.value)==null?void 0:f.content)==null?void 0:w.map(x=>e.jsx(ne,{portalId:y,currentId:x,level:d+1,mapPageUrl:r,mapImageUrl:c,...b},x))},i)})})]}):null};ne.__docgenInfo={description:"",methods:[],displayName:"NotionRenderer",props:{blockMap:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	[key: string]: BlockType;
}`,signature:{properties:[{key:{name:"string"},value:{name:"BlockType",required:!0}}]}},description:""},fullPage:{required:!1,tsType:{name:"boolean"},description:""},hideHeader:{required:!1,tsType:{name:"boolean"},description:""},mapPageUrl:{required:!1,tsType:{name:"signature",type:"function",raw:"(pageId: string) => string",signature:{arguments:[{type:{name:"string"},name:"pageId"}],return:{name:"string"}}},description:"",defaultValue:{value:`(pageId = "") => {
	const formattedPageId = pageId.replace(/-/g, "");

	return \`/\${formattedPageId}\`;
}`,computed:!1}},mapImageUrl:{required:!1,tsType:{name:"signature",type:"function",raw:"(image: string, block?: BlockType) => string",signature:{arguments:[{type:{name:"string"},name:"image"},{type:{name:"BlockType"},name:"block"}],return:{name:"string"}}},description:"",defaultValue:{value:`(image, block) => {
	const url = new URL(
		\`https://www.notion.so\${
			image.startsWith("/image") ? image : \`/image/\${encodeURIComponent(image)}\`
		}\`,
	);

	if (block && !image.includes("/images/page-cover/")) {
		const table =
			block.value.parent_table === "space" ? "block" : block.value.parent_table;
		url.searchParams.set("table", table);
		url.searchParams.set("id", block.value.id);
		url.searchParams.set("cache", "v2");
	}

	return url.toString();
}`,computed:!1}},portalId:{required:!1,tsType:{name:"string"},description:""},currentId:{required:!1,tsType:{name:"string"},description:""},level:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},customBlockComponents:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	[K in BlockValueTypeKeys]?: FC<CustomBlockComponentProps<K>>;
}`,signature:{properties:[{key:{name:'union["type"]',raw:'BlockValueType["type"]',required:!1},value:{name:"FC",elements:[{name:"CustomBlockComponentProps",elements:[{name:"K"}],raw:"CustomBlockComponentProps<K>"}],raw:"FC<CustomBlockComponentProps<K>>"}}]}},description:""},customDecoratorComponents:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	[K in SubDecorationSymbol]?: FC<CustomDecoratorComponentProps<K>>;
}`,signature:{properties:[{key:{name:"union[0]",raw:"SubDecorationType[0]",required:!1},value:{name:"FC",elements:[{name:"intersection",raw:`(SubDecorationValue<T> extends never
	? unknown
	: {
			decoratorValue: SubDecorationValue<T>;
		}) & {
	renderComponent: () => JSX.Element | null;
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
	renderComponent: () => JSX.Element | null;
}`,signature:{properties:[{key:"renderComponent",value:{name:"signature",type:"function",raw:"() => JSX.Element | null",signature:{arguments:[],return:{name:"union",raw:"JSX.Element | null",elements:[{name:"JSX.Element"},{name:"null"}]}},required:!0}}]}}]}],raw:"FC<CustomDecoratorComponentProps<K>>"}}]}},description:""},notionData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	object: "page";
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: { object: "user"; id: string };
	last_edited_by: { object: "user"; id: string };
	cover: {
		type: "external" | "file";
		external: { url: string };
		file: { url: string };
	};
	icon: null;
	parent: {
		type: "database_id";
		database_id: string;
	};
	archived: boolean;
	in_trash: boolean;
	properties: Property;
	url: string;
	public_url: string;
}`,signature:{properties:[{key:"object",value:{name:"literal",value:'"page"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"created_time",value:{name:"string",required:!0}},{key:"last_edited_time",value:{name:"string",required:!0}},{key:"created_by",value:{name:"signature",type:"object",raw:'{ object: "user"; id: string }',signature:{properties:[{key:"object",value:{name:"literal",value:'"user"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!0}},{key:"last_edited_by",value:{name:"signature",type:"object",raw:'{ object: "user"; id: string }',signature:{properties:[{key:"object",value:{name:"literal",value:'"user"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!0}},{key:"cover",value:{name:"signature",type:"object",raw:`{
	type: "external" | "file";
	external: { url: string };
	file: { url: string };
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"external" | "file"',elements:[{name:"literal",value:'"external"'},{name:"literal",value:'"file"'}],required:!0}},{key:"external",value:{name:"signature",type:"object",raw:"{ url: string }",signature:{properties:[{key:"url",value:{name:"string",required:!0}}]},required:!0}},{key:"file",value:{name:"signature",type:"object",raw:"{ url: string }",signature:{properties:[{key:"url",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"icon",value:{name:"null",required:!0}},{key:"parent",value:{name:"signature",type:"object",raw:`{
	type: "database_id";
	database_id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"database_id"',required:!0}},{key:"database_id",value:{name:"string",required:!0}}]},required:!0}},{key:"archived",value:{name:"boolean",required:!0}},{key:"in_trash",value:{name:"boolean",required:!0}},{key:"properties",value:{name:"signature",type:"object",raw:`{
	Title: {
		id: string;
		type: "title";
		title: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	Description: {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	"Last Edited Time": {
		id: string;
		type: "last_edited_time";
		last_edited_time: string;
	};
	"Ready to Publish": {
		id: string;
		type: "checkbox";
		checkbox: boolean;
	};
	"Event Date": {
		id: string;
		type: "date";
		date: { start: string };
	};
	"Share Title": {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	"No Index": {
		id: string;
		type: "checkbox";
		checkbox: boolean;
	};
	Category: {
		id: string;
		type: "select";
		select: { name: CategoryName };
	};
	Canonical: {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
	"Publish Date": {
		id: string;
		type: "date";
		date: { start: string };
	};
	Slug: {
		id: string;
		type: "rich_text";
		rich_text: [
			{
				type: "text";
				text: { content: string; link: null };
				annotations: {
					bold: boolean;
					italic: boolean;
					strikethrough: boolean;
					underline: boolean;
					code: boolean;
					color: "default";
				};
				plain_text: string;
				href: null;
			},
		];
	};
}`,signature:{properties:[{key:"Title",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "title";
	title: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"title"',required:!0}},{key:"title",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}},{key:"Description",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "rich_text";
	rich_text: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"rich_text"',required:!0}},{key:"rich_text",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}},{key:"Last Edited Time",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "last_edited_time";
	last_edited_time: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"last_edited_time"',required:!0}},{key:"last_edited_time",value:{name:"string",required:!0}}]},required:!0}},{key:"Ready to Publish",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "checkbox";
	checkbox: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"checkbox"',required:!0}},{key:"checkbox",value:{name:"boolean",required:!0}}]},required:!0}},{key:"Event Date",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "date";
	date: { start: string };
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"date"',required:!0}},{key:"date",value:{name:"signature",type:"object",raw:"{ start: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"Share Title",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "rich_text";
	rich_text: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"rich_text"',required:!0}},{key:"rich_text",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}},{key:"No Index",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "checkbox";
	checkbox: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"checkbox"',required:!0}},{key:"checkbox",value:{name:"boolean",required:!0}}]},required:!0}},{key:"Category",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "select";
	select: { name: CategoryName };
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"select"',required:!0}},{key:"select",value:{name:"signature",type:"object",raw:"{ name: CategoryName }",signature:{properties:[{key:"name",value:{name:"union",raw:'"セミナー" | "会社説明会"',elements:[{name:"literal",value:'"セミナー"'},{name:"literal",value:'"会社説明会"'}],required:!0}}]},required:!0}}]},required:!0}},{key:"Canonical",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "rich_text";
	rich_text: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"rich_text"',required:!0}},{key:"rich_text",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}},{key:"Publish Date",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "date";
	date: { start: string };
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"date"',required:!0}},{key:"date",value:{name:"signature",type:"object",raw:"{ start: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"Slug",value:{name:"signature",type:"object",raw:`{
	id: string;
	type: "rich_text";
	rich_text: [
		{
			type: "text";
			text: { content: string; link: null };
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: "default";
			};
			plain_text: string;
			href: null;
		},
	];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:'"rich_text"',required:!0}},{key:"rich_text",value:{name:"tuple",raw:`[
	{
		type: "text";
		text: { content: string; link: null };
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: "default";
		};
		plain_text: string;
		href: null;
	},
]`,elements:[{name:"signature",type:"object",raw:`{
	type: "text";
	text: { content: string; link: null };
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: "default";
	};
	plain_text: string;
	href: null;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"signature",type:"object",raw:"{ content: string; link: null }",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"link",value:{name:"null",required:!0}}]},required:!0}},{key:"annotations",value:{name:"signature",type:"object",raw:`{
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: "default";
}`,signature:{properties:[{key:"bold",value:{name:"boolean",required:!0}},{key:"italic",value:{name:"boolean",required:!0}},{key:"strikethrough",value:{name:"boolean",required:!0}},{key:"underline",value:{name:"boolean",required:!0}},{key:"code",value:{name:"boolean",required:!0}},{key:"color",value:{name:"literal",value:'"default"',required:!0}}]},required:!0}},{key:"plain_text",value:{name:"string",required:!0}},{key:"href",value:{name:"null",required:!0}}]}}],required:!0}}]},required:!0}}]},required:!0}},{key:"url",value:{name:"string",required:!0}},{key:"public_url",value:{name:"string",required:!0}}]}},description:""},metaData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	title: string;
	description: string;
	cover: string;
	slug: string;
	shareTitle: string;
	lastEditedTime: string;
	publishDate: string;
	eventDate: string;
	category: CategoryName;
	canonical: string;
	formId: string;
	authorCategory: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"cover",value:{name:"string",required:!0}},{key:"slug",value:{name:"string",required:!0}},{key:"shareTitle",value:{name:"string",required:!0}},{key:"lastEditedTime",value:{name:"string",required:!0}},{key:"publishDate",value:{name:"string",required:!0}},{key:"eventDate",value:{name:"string",required:!0}},{key:"category",value:{name:"union",raw:'"セミナー" | "会社説明会"',elements:[{name:"literal",value:'"セミナー"'},{name:"literal",value:'"会社説明会"'}],required:!0}},{key:"canonical",value:{name:"string",required:!0}},{key:"formId",value:{name:"string",required:!0}},{key:"authorCategory",value:{name:"string",required:!0}}]}},description:""}}};const te=({blocks:d})=>e.jsx(ne,{blockMap:d});te.__docgenInfo={description:"",methods:[],displayName:"Page",props:{blocks:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	[key: string]: BlockType;
}`,signature:{properties:[{key:{name:"string"},value:{name:"BlockType",required:!0}}]}},description:""}}};const Ie=async({slug:d})=>(await fetch(`https://watsuyo-notion-api-worker.classmethodeurope.workers.dev/v1/page/${d}/`)).json(),He={title:"Page",component:te},X={render:()=>{const[d,g]=M.useState(""),[r,c]=M.useState(null),[b,v]=M.useState(null),y=async s=>{if(v(null),g(s),!s){v("Please fill in all required fields.");return}try{const f=await Ie({slug:s});console.log("data",f),c(f)}catch{v("Failed to fetch page data. Please check the slug and try again.")}},i=s=>{y(s)};return e.jsxs("div",{className:"p-4 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Page ID: "}),e.jsx("input",{type:"text",id:"slug",value:d,onChange:s=>i(s.target.value),placeholder:"Enter Page ID",className:"border border-gray-300 rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),e.jsx("hr",{className:"border-gray-300"}),b&&e.jsx("p",{className:"text-red-500 mt-2",children:b}),e.jsx("h3",{className:"text-lg font-semibold",children:"Page Preview 🔽 "}),r&&e.jsx(e.Fragment,{children:e.jsx(te,{blocks:r})})]})},parameters:{actions:{disabled:!0}}};var ue,se,de;X.parameters={...X.parameters,docs:{...(ue=X.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [slug, setSlug] = useState<string>("");
    const [blocks, setPageData] = useState<BlockMapType | null>(null);
    const [error, setError] = useState<string | null>(null);
    const handleFetchPage = async (slug: string) => {
      setError(null);
      setSlug(slug);
      if (!slug) {
        setError("Please fill in all required fields.");
        return;
      }
      try {
        const data = await geNotionPage({
          slug
        });
        console.log("data", data);
        setPageData(data);
      } catch {
        setError("Failed to fetch page data. Please check the slug and try again.");
      }
    };
    const handleSlugChange = (value: string) => {
      handleFetchPage(value);
    };
    return <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Page ID: </h3>
                <input type="text" id="slug" value={slug} onChange={e => handleSlugChange(e.target.value)} placeholder="Enter Page ID" className="border border-gray-300 rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <hr className="border-gray-300" />
                {error && <p className="text-red-500 mt-2">{error}</p>}

                <h3 className="text-lg font-semibold">Page Preview 🔽 </h3>
                {blocks && <>
                        <Page blocks={blocks} />
                    </>}
            </div>;
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
}`,...(de=(se=X.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};const Ue=["WithSlug"];export{X as WithSlug,Ue as __namedExportsOrder,He as default};
