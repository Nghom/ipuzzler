!function(){var t={228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}},858:function(t){t.exports=function(t){if(Array.isArray(t))return t}},506:function(t){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},575:function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},100:function(t,e,n){var i=n(489),r=n(67);function o(e,n,s){return r()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o},o.apply(null,arguments)}t.exports=o},913:function(t){function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}},754:function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},205:function(t,e,n){var i=n(489);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},430:function(t){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},67:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},884:function(t){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==u.return||u.return()}finally{if(r)throw o}}return n}}},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},585:function(t,e,n){var i=n(8),r=n(506);t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?r(t):e}},489:function(t){function e(n,i){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,i)}t.exports=e},38:function(t,e,n){var i=n(858),r=n(884),o=n(379),s=n(521);t.exports=function(t,e){return i(t)||r(t,e)||o(t,e)||s()}},8:function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},379:function(t,e,n){var i=n(228);t.exports=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}},957:function(t,e,n){var i=n(754),r=n(489),o=n(430),s=n(100);function u(e){var n="function"==typeof Map?new Map:void 0;return t.exports=u=function(t){if(null===t||!o(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return s(t,arguments,i(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},u(e)}t.exports=u}},e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",function(){"use strict";var t=n(575),e=n.n(t),i=n(913),r=n.n(i),o=n(506),s=n.n(o),u=n(205),l=n.n(u),c=n(585),a=n.n(c),h=n(754),f=n.n(h),d=n(957),p=n.n(d),v=function(){function t(n,i,r){var o=this;e()(this,t),this.uri=r||"",this.cells=n,this.allCells.forEach((function(t){return t.puzzle=o})),this.clues=i,this.focusedCell=null,this.direction="across",this.acrossHeading="Across",this.downHeading="Down"}return r()(t,[{key:"isClueBirectional",value:function(t){return this.clues.across[t]&&this.clues.down[t]}},{key:"switchDirection",value:function(){return"across"==this.direction?this.direction="down":this.direction="across"}},{key:"getState",value:function(){return this.cells.map((function(t){return t.map((function(t){return t.value||"_"})).join("")})).join("")}},{key:"setState",value:function(t){var e=t.split(""),n=this.cells.flat();e.forEach((function(t,e){return n[e].setValue("_"!=t?t:"")}))}},{key:"setFocus",value:function(t,e,n){this.setFocusToCell(this.cells[t][e],n)}},{key:"focusClue",value:function(t,e){var n=this.clues[e][t];this.setFocusToClue(n)}},{key:"setCellValue",value:function(t){this.focusedCell&&(this.focusedCell.setValue(t),t&&this.advanceFocus(this.direction))}},{key:"setFocusToClue",value:function(t){this.direction=t.direction,this.setFocusToCell(t.cells[0])}},{key:"setFocusToCell",value:function(t,e){t&&t.hasInput&&(this.focusedCell==t?t.isBirectional&&e&&this.switchDirection():(this.focusedCell=t,t.clues[this.direction]||this.switchDirection()),this.focusedCell=t,this.focusedClue=t.clues[this.direction],this.cells.flat().forEach((function(t){return t.clearHighlight()})),this.allClues.forEach((function(t){return t.clearHighlight()})),this.focusedClue.addHighlight())}},{key:"getCell",value:function(t,e){return t<0||t>=this.cells.length||e<0||e>=this.cells[t].length?null:this.cells[t][e]}},{key:"advanceFocus",value:function(t){var e=this.focusedCell.clues[t],n=e.cells.indexOf(this.focusedCell)+1;n<e.cells.length?this.setFocusToCell(e.cells[n]):e.next&&this.setFocusToClue(e.next)}},{key:"retreatFocus",value:function(t){var e=this.focusedCell.clues[t];if(e){var n=e.cells.indexOf(this.focusedCell)-1;n>=0&&this.setFocusToCell(e.cells[n])}}},{key:"home",value:function(){this.setFocusToCell(this.focusedClue.cells[0])}},{key:"end",value:function(){this.setFocusToCell(this.focusedClue.cells[this.focusedClue.cells.length-1])}},{key:"backspace",value:function(){this.setCellValue(""),this.retreatFocus(this.direction)}},{key:"clearFocus",value:function(){this.focusedCell=null,this.focusedClue=null,this.cells.flat().forEach((function(t){return t.clearHighlight()})),this.allClues.forEach((function(t){return t.clearHighlight()}))}},{key:"moveFocus",value:function(t){var e,n,i=null===(e=this.focusedCell)||void 0===e?void 0:e.position;if(i){switch(t){case"up":n=this.getCell(i.row-1,i.col);break;case"down":n=this.getCell(i.row+1,i.col);break;case"left":n=this.getCell(i.row,i.col-1);break;case"right":n=this.getCell(i.row,i.col+1)}this.setFocusToCell(n)}}},{key:"checkClue",value:function(){this.focusedClue&&this.focusedClue.check()}},{key:"clearClue",value:function(){this.focusedClue&&this.focusedClue.clear()}},{key:"cheatClue",value:function(){this.focusedClue&&this.focusedClue.cheat()}},{key:"checkGrid",value:function(){this.allCells.forEach((function(t){return t.check()}))}},{key:"clearGrid",value:function(){this.allCells.forEach((function(t){return t.clear()}))}},{key:"cheatGrid",value:function(){this.allCells.forEach((function(t){return t.cheat()}))}},{key:"allClues",get:function(){return this.clues.across.concat(this.clues.down).filter((function(t){return t}))}},{key:"allCells",get:function(){return this.cells.flat()}},{key:"width",get:function(){return this.cells[0].length}},{key:"height",get:function(){return this.cells.length}},{key:"cookieName",get:function(){return this.uri.replace(/[^a-z0-9]+/gi,"-")}}]),t}(),y=function(){function t(n,i){var r=this;if(e()(this,t),this.direction=i,this.number=parseInt(n.number),this.text=n.clue,this.enumeration=n.enumeration,this.label=(n.label||String(this.number)).replace(/\//g,",").toLowerCase(),this.cells=[],this.continuations=[],n.continued&&n.continued.map){this.continuations=n.continued.map((function(e){var i=new t(e,e.direction.toLowerCase());return i.text="See ".concat(n.number),i.direction!=r.direction&&(i.text+=" "+r.direction),i.root=r,i})),this.next=this.continuations[0];for(var o=0;o<this.continuations.length-1;o++)this.continuations[o].next=this.continuations[o+1]}}return r()(t,[{key:"addHighlight",value:function(){this.allClues.forEach((function(t){return t.isActive=!0})),this.allCells.forEach((function(t){return t.addHighlight()}))}},{key:"clearHighlight",value:function(){this.allClues.forEach((function(t){return t.isActive=!1}))}},{key:"toClueList",value:function(){return[this].concat(this.continuations)}},{key:"check",value:function(){this.allCells.forEach((function(t){return t.check()}))}},{key:"clear",value:function(){this.allCells.forEach((function(t){return t.clear()}))}},{key:"cheat",value:function(){this.allCells.forEach((function(t){return t.cheat()}))}},{key:"elementId",get:function(){return"clue-".concat(this.number,"-").concat(this.direction)}},{key:"allCells",get:function(){var t,e=null!==(t=this.root)&&void 0!==t?t:this;return e.cells.concat(e.continuations.map((function(t){return t.cells})).flat())}},{key:"allClues",get:function(){var t,e=null!==(t=this.root)&&void 0!==t?t:this;return[e].concat(e.continuations)}}]),t}(),b=function(){function t(n,i){e()(this,t),this.row=n,this.col=i}return r()(t,[{key:"isInside",value:function(t){return!(this.row<0||this.row>=t.length||this.col<0||this.col>=t[this.row].length)}},{key:"increment",value:function(e){switch(e){case"down":return new t(this.row+1,this.col);case"across":return new t(this.row,this.col+1)}}}]),t}(),C=function(){function t(n,i,r){if(e()(this,t),this.isActive=!1,this.style="",this.position=new b(i,r),this.previous={},this.next={},this.clues={},this.value="",null===n)this.style="blank";else if("number"==typeof n.cell?this.number=n.cell:this.number="number"==typeof n?n:NaN,n.style)switch(n.style.barred){case"T":this.style="barred-top";break;case"L":this.style="barred-left";break;case"TL":this.style="barred-top barred-left"}else"#"==n&&(this.style="block")}return r()(t,[{key:"setValue",value:function(t){this.hasInput&&(this.value=t&&t.toUpperCase?t.toUpperCase():"")}},{key:"addHighlight",value:function(){this.isActive=!0}},{key:"clearHighlight",value:function(){this.isActive=!1}},{key:"isEndOfRange",value:function(t){return!this.hasInput||!("across"!=t||!this.previous.across||!/left/.test(this.style))||!("down"!=t||!this.previous.down||!/top/.test(this.style))}},{key:"check",value:function(){(this.value&&this.value.toUpperCase?this.value.toUpperCase():"")!==(this.solution&&this.solution.toUpperCase?this.solution.toUpperCase():"")&&this.clear()}},{key:"cheat",value:function(){this.solution&&this.setValue(this.solution)}},{key:"clear",value:function(){this.setValue("")}},{key:"isBirectional",get:function(){return this.clues.across&&this.clues.down}},{key:"hasInput",get:function(){return!/bl(an|oc)k/.test(this.style)}}]),t}(),k=function(){function t(){e()(this,t)}return r()(t,null,[{key:"parse",value:function(e,n){var i,r,o=e.puzzle.map((function(t,e){return t.map((function(t,n){return new C(t,e,n)}))}));t.attachSolutions(o,e.solution);var s=Object.keys(e.clues),u=s.find((function(t){return/^across/i.test(t)})),l=s.find((function(t){return/^down/i.test(t)})),c=e.clues[u],a=e.clues[l],h=Array.isArray(c)?c:[];h=h.map((function(t){return new y(t,"across").toClueList()})).flat();var f=Array.isArray(a)?a:[];f=f.map((function(t){return new y(t,"down").toClueList()})).flat();var d={across:[],down:[]};return h.concat(f).forEach((function(e){var n=t.findCellForClue(o,e);e.position=n.position,e.cells=t.findCellList(o,e.position,e.direction),e.cells.forEach((function(t){return t.clues[e.direction]=e})),d[e.direction][e.number]=e})),d.across.heading=null!==(i=u.split(":")[1])&&void 0!==i?i:"Across",d.down.heading=null!==(r=l.split(":")[1])&&void 0!==r?r:"Down",new v(o,d,n)}},{key:"attachSolutions",value:function(t,e){e&&t.forEach((function(t,n){return t.forEach((function(t,i){if(e[n]&&e[n][i]){var r=e[n][i].value||e[n][i];r.toUpperCase&&/[A-Z]/i.test(r)&&(t.solution=r.toUpperCase())}}))}))}},{key:"findCellForClue",value:function(t,e){return t.flat().find((function(t){return t.number==e.number}))}},{key:"findCellList",value:function(e,n,i,r){if(!n.isInside(e))return[];var o=e[n.row][n.col];return o.previous[i]=r,o.isEndOfRange(i)?[]:(r&&(r.next[i]=o),[o].concat(t.findCellList(e,n.increment(i),i,o)))}}]),t}(),m=n(38),g=n.n(m),w=function(){function t(n){e()(this,t),this.dom=n,this.spans=[],this.inputs=[],this.labels=[],this.clueListItems=[],this.buttons=[],this.grid=null,this.aboveClueBar=null,this.belowClueBar=null}return r()(t,[{key:"html",value:function(t,e,n){for(var i=document.createElement(t),r=0,o=Object.entries(e||{});r<o.length;r++){var s=g()(o[r],2),u=s[0],l=s[1];i.setAttribute(u,l)}return n&&(i.innerText=n),i}},{key:"update",value:function(t){this.spans.forEach((function(e,n){return e.forEach((function(e,i){var r=t.cells[n][i];r==t.focusedCell?e.input.focus():e&&e.input&&e.input.blur(),e.input&&(e.input.value=r.value),r.isActive?e.classList.add("highlighted"):e.classList.remove("highlighted")}))})),this.clueListItems.forEach((function(t){t.clue.isActive?t.clue.root?t.classList.add("halflighted"):t.classList.add("highlighted"):(t.classList.remove("highlighted"),t.classList.remove("halflighted"))})),t.focusedClue?(this.drawClue(t.focusedClue,this.aboveClueBar,!0),this.drawClue(t.focusedClue,this.belowClueBar,!0)):(this.aboveClueBar.innerHTML="",this.belowClueBar.innerHTML=""),this.savePuzzleStateToCookie(t)}},{key:"savePuzzleStateToCookie",value:function(t){var e=t.getState(),n=new Date(2100,1,1);document.cookie=t.cookieName+"="+e+";expires="+n.toUTCString()+";path=/"}},{key:"loadPuzzleStateFromCookie",value:function(t){var e=decodeURIComponent(document.cookie).split(/; */).map((function(t){return t.split("=")})).find((function(e){return e[0]==t.cookieName}));e&&e.length>1&&t.setState(e[1])}},{key:"createCellSpan",value:function(t,e,n){var i=this.html("span");if(t.style&&(i.className=t.style),t.number){var r=this.html("label");r.innerHTML=t.number,i.appendChild(r),this.labels.push(r)}if(t.hasInput){var o=this.html("input",{"data-row":e,"data-col":n,value:t.value});i.appendChild(o),i.input=o,this.inputs.push(o)}return i}},{key:"createClueEnumerationSpan",value:function(t){var e=this.html("span");return e.innerText="(".concat(t.enumeration.trim().replace(/ /g,","),")"),e}},{key:"createClueList",value:function(t,e){var n=this,i=t.clues[e.toLowerCase()],r="".concat(e.toLowerCase(),"-clue-list"),o=this.html("section",{class:"puzzle-clue-list",id:r}),s=this.html("h2");s.innerHTML=i.heading,o.appendChild(s);var u=this.html("ol");return i.forEach((function(t){var e=n.html("li",{id:t.elementId,"data-clue-number":t.number,"data-clue-direction":t.direction});n.drawClue(t,e),e.clue=t,n.clueListItems.push(e),u.appendChild(e)})),o.appendChild(u),o}},{key:"drawClue",value:function(t,e,n){e.innerHTML=t.text;var i=this.html("label");i.innerText=t.label+(n?"".concat(t.direction[0]):""),e.insertBefore(i,e.firstChild),t.enumeration&&e.appendChild(this.createClueEnumerationSpan(t))}},{key:"drawButtons",value:function(){var t=this.html("button",{id:"check-clue-button"},"Check clue"),e=this.html("button",{id:"clear-clue-button"},"Clear clue"),n=this.html("button",{id:"cheat-clue-button"},"Cheat clue"),i=this.html("div",{id:"clue-buttons"});i.appendChild(t),i.appendChild(e),i.appendChild(n);var r=this.html("button",{id:"check-grid-button"},"Check grid"),o=this.html("button",{id:"clear-grid-button"},"Clear grid"),s=this.html("button",{id:"cheat-grid-button"},"Cheat grid"),u=this.html("div",{id:"grid-buttons"});u.appendChild(r),u.appendChild(o),u.appendChild(s),this.buttons.push(t),this.buttons.push(e),this.buttons.push(n),this.buttons.push(r),this.buttons.push(o),this.buttons.push(s);var l=this.html("div",{id:"buttons"});return l.appendChild(i),l.appendChild(u),l}},{key:"render",value:function(t){var e=this;this.loadPuzzleStateFromCookie(t);var n=this.html("div",{class:"ipuzzler"});this.dom.appendChild(n);var i=this.html("style");i.innerText=`div.ipuzzler{font-family:Arial,Helvetica,sans-serif;font-size:12px;margin:0;padding:3px;display:grid;grid-template:1fr/auto 1fr 1fr}div.ipuzzler *{line-height:1em}@media only screen and (max-width: 640px){div.ipuzzler{display:block}}@media only screen and (max-width: 320px){div.ipuzzler div.puzzle-grid span span.clue-number{font-size:6px}}div.ipuzzler div#buttons{text-align:center}div.ipuzzler div#buttons button{margin:4px 4px 2px 0px;width:6em;background-color:#36f;border:0;padding:4px;color:#fff;font-weight:normal;border-radius:4px}div.ipuzzler div#buttons div#grid-buttons button{background-color:#9cf}div.ipuzzler div.clue-bar{display:none}@media only screen and (max-width: 640px){div.ipuzzler div.clue-bar{display:block}}div.ipuzzler div.clue-bar#above-clue-bar{margin-bottom:8px}div.ipuzzler div.clue-bar#below-clue-bar{margin:8px 0}div.ipuzzler div.clue-bar label{font-weight:bold}div.ipuzzler div.clue-bar label:after{content:" "}div.ipuzzler div.clue-bar span:before{content:" "}div.ipuzzler div.puzzle-grid{background-color:#ff0;display:grid;background-color:#000;grid-gap:1px;border:1px solid #000;width:420px;height:420px;max-width:100%;box-sizing:border-box;grid-template:repeat(15, 1fr)/repeat(15, 1fr);margin:0}@media only screen and (max-width: 640px){div.ipuzzler div.puzzle-grid{width:calc(100vw - 10px);height:calc(100vw - 10px)}}@media only screen and (max-width: 320px){div.ipuzzler div.puzzle-grid{width:310px;height:310px}}div.ipuzzler div.puzzle-grid>span{background-color:#fff;text-align:center;position:relative}div.ipuzzler div.puzzle-grid>span label{font-size:8px;position:absolute;margin:0;padding:0;top:1px;left:1px;z-index:0;background:transparent}div.ipuzzler div.puzzle-grid>span.block{background-color:#000}div.ipuzzler div.puzzle-grid>span.blank{background-color:#933}div.ipuzzler div.puzzle-grid>span.barred-top{border-top:3px solid #000}div.ipuzzler div.puzzle-grid>span.barred-left{border-left:3px solid #000}div.ipuzzler div.puzzle-grid>span.highlighted{background-color:#9cf}div.ipuzzler div.puzzle-grid>span input{position:absolute;left:0;right:0;top:0;bottom:0;background-color:transparent;z-index:1;width:100%;height:100%;border:0;margin:0 0 0 0;padding:10% 0 0 0;font-weight:bold;box-sizing:border-box;text-align:center;border-radius:0;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;mix-blend-mode:darken}div.ipuzzler div.puzzle-grid>span input:focus{font-weight:bold;background-color:#36f !important;outline:2px solid #000}div.ipuzzler section.puzzle-clue-list{padding:0 8px}@media only screen and (max-width: 640px){div.ipuzzler section.puzzle-clue-list{padding:0}}div.ipuzzler section.puzzle-clue-list h2{font-size:100%;margin:0 0 8px 0}div.ipuzzler section.puzzle-clue-list ol{cursor:pointer;list-style:none;margin:0;padding:0}div.ipuzzler section.puzzle-clue-list ol li{padding:4px 4px 4px 1.8em;margin:0 0 2px 0;border-radius:4px;text-indent:-1.6em}div.ipuzzler section.puzzle-clue-list ol li.highlighted{background-color:#9cf}div.ipuzzler section.puzzle-clue-list ol li.halflighted{background-color:#bdf}div.ipuzzler section.puzzle-clue-list ol li label{min-width:1.4em;font-weight:bold;display:inline-block;text-indent:0;margin:0;padding:0 .3em 0 .1em}div.ipuzzler section.puzzle-clue-list ol li span:before{content:" "}`,n.appendChild(i),this.grid=this.html("div",{class:"puzzle-grid"}),this.grid.style.gridTemplate="repeat(".concat(t.height,", 1fr) / repeat(").concat(t.width,", 1fr)");var r=this.html("div");this.aboveClueBar=this.html("div",{class:"clue-bar",id:"above-clue-bar"}),this.belowClueBar=this.html("div",{class:"clue-bar",id:"below-clue-bar"}),r.appendChild(this.aboveClueBar),r.appendChild(this.grid),r.appendChild(this.belowClueBar),r.appendChild(this.drawButtons()),n.appendChild(r),this.spans=t.cells.map((function(t,n){return t.map((function(t,i){var r=e.createCellSpan(t,n,i);return e.grid.appendChild(r),r}))})),n.appendChild(this.createClueList(t,"Across")),n.appendChild(this.createClueList(t,"Down")),this.resize(t)}},{key:"resize",value:function(t){var e=Math.min(this.grid.offsetWidth,this.grid.offsetHeight),n=Math.ceil(e/(1.8*t.width));n>10&&n<16&&(n=16),this.inputs.forEach((function(t){return t.style.fontSize=n+"px"}));var i=Math.ceil(e/(4*t.width));this.labels.forEach((function(t){return t.style.fontSize=i+"px"}));var r,o,s=Math.min(window.innerWidth,document.body.scrollWidth,document.body.clientWidth);s>768?(r=28*t.width+t.width+1,o=28*t.height+t.height+1):(r=s-10,o=Math.floor(t.height/t.width*r)),this.grid.style.width=r+"px",this.aboveClueBar.style.width=r+"px",this.belowClueBar.style.width=r+"px",this.grid.style.height=o+"px"}}]),t}();var z=function(t){l()(u,t);var n,i,o=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f()(n);if(i){var r=f()(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return a()(this,t)});function u(){var t;return e()(this,u),(t=o.call(this)).shadow=t.attachShadow({mode:"open"}),t.addEventListener("keydown",t.keydown),window.addEventListener("resize",t.resize.bind(s()(t))),t}return r()(u,[{key:"load",value:function(t){var e=this;fetch(t).then((function(t){return t.json()})).then((function(n){return e.init(n,t)}))}},{key:"init",value:function(t,e){var n=this;this.puzzle=k.parse(t,e),this.renderer=new w(this.shadow),this.renderer.render(this.puzzle),this.renderer.inputs.forEach((function(t){t.addEventListener("focus",n.inputFocus.bind(n)),t.addEventListener("mousedown",n.inputMouseDown.bind(n))})),this.renderer.clueListItems.forEach((function(t){return t.addEventListener("click",n.clueListItemClick.bind(n))})),this.renderer.buttons.forEach((function(t){return t.addEventListener("click",n.buttonClick.bind(n))})),this.resize()}},{key:"connectedCallback",value:function(){var t=this.getAttribute("src");t&&this.load(t)}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"url":this.load(n)}}},{key:"resize",value:function(t){this.renderer&&"function"==typeof this.renderer.resize&&this.renderer.resize(this.puzzle)}},{key:"inputMouseDown",value:function(t){var e=t.composedPath()[0],n=e.getAttribute("data-row"),i=e.getAttribute("data-col");this.puzzle.setFocus(n,i,!0),this.renderer.update(this.puzzle)}},{key:"inputFocus",value:function(t){var e=t.composedPath()[0],n=e.getAttribute("data-row"),i=e.getAttribute("data-col");this.puzzle.setFocus(n,i),this.renderer.update(this.puzzle)}},{key:"clueListItemClick",value:function(t){var e=t.target.closest("li"),n=parseInt(e.getAttribute("data-clue-number")),i=e.getAttribute("data-clue-direction");this.puzzle.focusClue(n,i),this.renderer.update(this.puzzle)}},{key:"buttonClick",value:function(t){switch(t.composedPath()[0].id){case"check-clue-button":this.puzzle.checkClue();break;case"clear-clue-button":this.puzzle.clearClue();break;case"cheat-clue-button":this.puzzle.cheatClue();break;case"check-grid-button":this.puzzle.checkGrid();break;case"clear-grid-button":this.puzzle.clearGrid();break;case"cheat-grid-button":confirm("Are you sure you want to reveal all solutions?")&&this.puzzle.cheatGrid()}this.renderer.update(this.puzzle)}},{key:"keydown",value:function(t){if(!(t.ctrlKey||t.altKey||t.metaKey)){switch(t.code){case"ArrowUp":this.puzzle.direction="down",this.puzzle.moveFocus("up");break;case"ArrowDown":this.puzzle.direction="down",this.puzzle.moveFocus("down");break;case"ArrowLeft":this.puzzle.direction="across",this.puzzle.moveFocus("left");break;case"ArrowRight":this.puzzle.direction="across",this.puzzle.moveFocus("right");break;case"Home":this.puzzle.home();break;case"End":this.puzzle.end();break;case"Backspace":this.puzzle.backspace();break;case"Delete":this.puzzle.setCellValue("");break;case"Escape":this.puzzle.clearFocus()}/^[a-z]$/i.test(t.key)&&(this.puzzle.setCellValue(t.key),t.preventDefault()),this.renderer.update(this.puzzle)}}}],[{key:"observedAttributes",get:function(){return["url"]}}]),u}(p()(HTMLElement));customElements.define("ipuzzler-puzzle",z)}(),function(){"use strict";n.p}()}();