/*! formstone v0.6.9 [cookie.js] 2015-06-17 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b,c,h){if("object"===a.type(b))g=a.extend(g,b);else if(h=a.extend({},g,h||{}),"undefined"!==a.type(b)){if("undefined"===a.type(c))return e(b);null===c?f(b):d(b,c,h)}return null}function d(b,c,d){var e=!1,f=new Date;d.expires&&"number"===a.type(d.expires)&&(f.setTime(f.getTime()+d.expires),e=f.toGMTString());var g=d.domain?"; domain="+d.domain:"",i=e?"; expires="+e:"",j=e?"; max-age="+d.expires/1e3:"",k=d.path?"; path="+d.path:"",l=d.secure?"; secure":"";h.cookie=b+"="+c+i+j+g+k+l}function e(a){for(var b=a+"=",c=h.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null}function f(a){d(a,"",{expires:-6048e5})}var g=(b.Plugin("cookie",{utilities:{_delegate:c}}),{domain:null,expires:6048e5,path:null,secure:null}),h=b.document}(jQuery,Formstone);