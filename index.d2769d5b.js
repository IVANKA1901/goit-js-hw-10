!function(){function n(n){return n&&n.__esModule?n.default:n}var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,v=Math.min,y=function(){return s.Date.now()};function m(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var f=u.test(t);return f||a.test(t)?c(t.slice(2),f?2:8):r.test(t)?NaN:+t}t=function(n,t,e){var o,i,r,u,a,c,f=0,l=!1,s=!1,p=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(t){var e=o,r=i;return o=i=void 0,f=t,u=n.apply(r,e)}function b(n){return f=n,a=setTimeout(w,t),l?h(n):u}function j(n){var e=n-c;return void 0===c||e>=t||e<0||s&&n-f>=r}function w(){var n=y();if(j(n))return T(n);a=setTimeout(w,function(n){var e=t-(n-c);return s?v(e,r-(n-f)):e}(n))}function T(n){return a=void 0,p&&o?h(n):(o=i=void 0,u)}function O(){var n=y(),e=j(n);if(o=arguments,i=this,c=n,e){if(void 0===a)return b(c);if(s)return a=setTimeout(w,t),h(c)}return void 0===a&&(a=setTimeout(w,t)),u}return t=g(t)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?d(g(e.maxWait)||0,t):r,p="trailing"in e?!!e.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=i=a=void 0},O.flush=function(){return void 0===a?u:T(y())},O};var h={input:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};function b(){h.countryInfo.innerHTML="",h.countryList.innerHTML=""}h.input.addEventListener("input",n(t)((function(){var n=h.input.value.trim();if(""===n)return void b();(t=n,e=new URLSearchParams({fields:"name,capital,population,flags,languages"}),o="/".concat(t,"?").concat(e),fetch("https://restcountries.com/v3.1/name"+o).then((function(n){if(!n.ok)throw new Error("❌Oops, there is no country with that name");return n.json()}))).then((function(n){n.length<2?(!function(n){b();var t=n[0],e='<div>\n        <div>\n            <img src="'.concat(t.flags.svg,'" alt="Country flag" width="55", height="35">\n            <h2 class="country-card--name"> ').concat(t.name.official,"</h2>\n        </div>\n            <p>Capital: <span>").concat(t.capital,"</span></p>\n            <p>Population: <span>").concat(t.population,"</span></p>\n            <p>Languages: <span>").concat(t.languages,"</span></p>\n    </div>");h.countryInfo.innerHTML=e}(n),console.log("Your results")):n.length<10&&n.length>1?(!function(n){b();var t=n.map((function(n){return'<li>\n            <img src="'.concat(n.flags.svg,'" alt="Country flag" width="40", height="40">\n            <span>').concat(n.name.official,"</span>\n        </li>")})).join("");h.countryList.insertAdjacentElement("beforeend",t)}(n),console.log("Your results")):(b(),console.log("⚠️Too many matches found. Please, enter a more specific name."))})).catch((function(){b(),console.log("❌Oops, there is no country with that name")}));var t,e,o}),300))}();
//# sourceMappingURL=index.d2769d5b.js.map
