(()=>{"use strict";var e,t={64:()=>{const e=window.wp.blocks,t=window.React,o=window.wp.i18n,r=window.wp.blockEditor,s=JSON.parse('{"UU":"block-development-examples/stylesheets-79a4c3"}');(0,e.registerBlockType)(s.UU,{edit:function(){const e=(0,r.useBlockProps)({style:{textDecoration:"green wavy underline"},className:"hasPerspective"});return(0,t.createElement)("p",{...e},(0,o.__)("Hello World, step 2 (from the editor, in green).","block-development-examples"))},save:function(){const e=r.useBlockProps.save({style:{textDecoration:"red underline",textDecorationThickness:"3px"},className:"hasPerspective"});return(0,t.createElement)("p",{...e},(0,o.__)("Hello World, step 2 (from the frontend, in red).","block-development-examples"))}})}},o={};function r(e){var s=o[e];if(void 0!==s)return s.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,o,s,n)=>{if(!o){var l=1/0;for(p=0;p<e.length;p++){for(var[o,s,n]=e[p],a=!0,c=0;c<o.length;c++)(!1&n||l>=n)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(a=!1,n<l&&(l=n));if(a){e.splice(p--,1);var i=s();void 0!==i&&(t=i)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[o,s,n]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var s,n,[l,a,c]=o,i=0;if(l.some((t=>0!==e[t]))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(c)var p=c(r)}for(t&&t(o);i<l.length;i++)n=l[i],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(p)},o=globalThis.webpackChunk_block_development_examples_stylesheets_79a4c3=globalThis.webpackChunk_block_development_examples_stylesheets_79a4c3||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=r.O(void 0,[350],(()=>r(64)));s=r.O(s)})();