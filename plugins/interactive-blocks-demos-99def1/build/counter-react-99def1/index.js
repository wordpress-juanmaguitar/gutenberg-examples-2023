(()=>{"use strict";var e,t={648:()=>{const e=window.wp.blocks,t=window.wp.components,l=window.wp.blockEditor;(0,e.registerBlockType)("block-development-examples/counter-react-99def1",{edit:({attributes:e,setAttributes:a})=>React.createElement(React.Fragment,null,React.createElement("div",(0,l.useBlockProps)(),React.createElement("p",null,"React Counter"),React.createElement("span",null,"Initial value"),React.createElement(t.__experimentalNumberControl,{placeholder:"Enter the initial value",value:e.initial,onChange:e=>a({initial:e})}),React.createElement("span",null,"Incremental value"),React.createElement(t.__experimentalNumberControl,{placeholder:"Enter the incremental value",value:e.increment,onChange:e=>a({increment:e})}))),save:({attributes:e})=>React.createElement("div",l.useBlockProps.save(),React.createElement("p",null,"React Counter"),React.createElement("details",null,React.createElement("summary",null,"Attributes"),React.createElement("pre",null,React.createElement("small",null,JSON.stringify(e,null,2)))),React.createElement("br",null),React.createElement("div",{className:"counter-contaner","data-gutenberg-attributes":JSON.stringify(e)},React.createElement("button",null,"-"),React.createElement("input",{width:"5",type:"number",readOnly:!0,value:e.initial}),React.createElement("button",null,"+")))})}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,n,r)=>{if(!l){var c=1/0;for(s=0;s<e.length;s++){for(var[l,n,r]=e[s],i=!0,o=0;o<l.length;o++)(!1&r||c>=r)&&Object.keys(a.O).every((e=>a.O[e](l[o])))?l.splice(o--,1):(i=!1,r<c&&(c=r));if(i){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[l,n,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={829:0,169:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,r,[c,i,o]=l,u=0;if(c.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(o)var s=o(a)}for(t&&t(l);u<c.length;u++)r=c[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(s)},l=globalThis.webpackChunk_block_development_examples_interactive_blocks_demos_99def1=globalThis.webpackChunk_block_development_examples_interactive_blocks_demos_99def1||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[169],(()=>a(648)));n=a.O(n)})();