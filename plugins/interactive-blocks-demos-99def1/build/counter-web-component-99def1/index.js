(()=>{"use strict";var e,t={279:()=>{const e=window.wp.blocks,t=window.wp.components,n=window.wp.blockEditor;(0,e.registerBlockType)("block-development-examples/counter-web-component-99def1",{edit:({attributes:e,setAttributes:l})=>React.createElement(React.Fragment,null,React.createElement("div",(0,n.useBlockProps)(),React.createElement("p",null,"Web Components Counter"),React.createElement("span",null,"Initial value"),React.createElement(t.__experimentalNumberControl,{placeholder:"Enter the initial value",value:e.initial,onChange:e=>l({initial:e})}),React.createElement("span",null,"Incremental value"),React.createElement(t.__experimentalNumberControl,{placeholder:"Enter the incremental value",value:e.increment,onChange:e=>l({increment:e})}))),save:({attributes:e})=>React.createElement("div",n.useBlockProps.save(),React.createElement("p",null,"Web Components Counter"),React.createElement("details",null,React.createElement("summary",null,"Attributes"),React.createElement("pre",null,React.createElement("small",null,JSON.stringify(e,null,2)))),React.createElement("br",null),React.createElement("gutenberg-counter",{value:e.initial,increment:e.increment}))})}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,n,r,a)=>{if(!n){var c=1/0;for(m=0;m<e.length;m++){for(var[n,r,a]=e[m],o=!0,i=0;i<n.length;i++)(!1&a||c>=a)&&Object.keys(l.O).every((e=>l.O[e](n[i])))?n.splice(i--,1):(o=!1,a<c&&(c=a));if(o){e.splice(m--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,r,a]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={410:0,950:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[c,o,i]=n,s=0;if(c.some((t=>0!==e[t]))){for(r in o)l.o(o,r)&&(l.m[r]=o[r]);if(i)var m=i(l)}for(t&&t(n);s<c.length;s++)a=c[s],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(m)},n=globalThis.webpackChunk_block_development_examples_interactive_blocks_demos_99def1=globalThis.webpackChunk_block_development_examples_interactive_blocks_demos_99def1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=l.O(void 0,[950],(()=>l(279)));r=l.O(r)})();