!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=async()=>{try{const t=await fetch("../../datosEmpleados.json");return await t.json()}catch(t){console.error("Fetch Error",t)}};var r=()=>'\n        <div class="Error404">\n            <h2> Error </h2>\n        </div>\n    ';const a={"/":async()=>`\n    ${(await o()).map(t=>`\n        <tr>\n            <td>${t.Nombre} </td>\n            <td>${t.Cargo} </td>\n            <td>${t.Supervisor} </td>\n            <td>${t.Clase} </td>\n            <td>${t.Subsidiaria} </td>\n            <td>${t.Departamento} </td>\n        </tr>\n        `).join("")}\n    `};var c=async()=>{const t=document.getElementById("table-content");let e=a["/"]?a["/"]:r;t.innerHTML=await e()};var l=class{constructor(t){this.table=t}exportCsv(){let t=[];const e=this.table.querySelectorAll("tbody>tr");Array.prototype.map.call(e,e=>{const n=e.children;t.push(Array.prototype.map.call(n,t=>t.innerHTML).join(";"))}),t=encodeURI(t.join("\n"));const n="data:text/csv;charset=utf-8,"+t;this.fileDownload(n,"employees.csv")}exportExcel(){const t="data:application/vnd.ms-excel;charset-utf-8, "+this.table.outerHTML;this.fileDownload(t,"employees.xls")}exportPDF(){function t(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,document.head.appendChild(e)}t("https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"),console.log(t)}fileDownload(t,e){const n=document.createElement("a");n.href=t,n.download=e,n.click()}};let d;window.addEventListener("load",c);let i=document.getElementById("btnExportExcel"),s=document.getElementById("btnExportCsv"),u=document.getElementById("btnExportPDF");i.onclick=()=>{d.exportExcel()},s.onclick=()=>{d.exportCsv()},u.onclick=()=>{d.exportPDF()},d=new l(document.querySelector("table"))}]);