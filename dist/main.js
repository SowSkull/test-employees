!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var r=async()=>{try{const t=await fetch("../../datosEmpleados.json");return await t.json()}catch(t){console.error("Fetch Error",t)}};var o=async()=>`\n    ${(await r()).map(t=>`\n        <tr>\n            <td>${t.Nombre} </td>\n            <td>${t.Cargo} </td>\n            <td>${t.Supervisor} </td>\n            <td>${t.Clase} </td>\n            <td>${t.Subsidiaria} </td>\n            <td>${t.Departamento} </td>\n        </tr>\n        `).join("")}\n    `;var a=()=>'\n        <p>\n            <button id="btnExportExcel">Export XLS</button>\n            <button id="btnExportCsv">Export XLS</button>\n        </p>\n        <p>\n            Supervisor: <input type="text" />\n            Clases: <input type="text" />\n            Departamento: <input type="text" />\n            Subsidiaria: <input type="text" />\n            <button> Filtrar </button>\n        </p>\n        ';var u=async()=>{const t=document.getElementById("table-content");document.getElementById("header").innerHTML=await a();t.innerHTML=await o()};window.addEventListener("load",u)}]);