var T,baidu=T=baidu||{version:"1.5.0"};baidu.guid="$BAIDU$",baidu.$$=window[baidu.guid]=window[baidu.guid]||{global:{}},baidu.flash=baidu.flash||{},baidu.dom=baidu.dom||{},baidu.dom.g=function(e){return e?"string"==typeof e||e instanceof String?document.getElementById(e):!e.nodeName||1!=e.nodeType&&9!=e.nodeType?null:e:null},baidu.g=baidu.G=baidu.dom.g,baidu.array=baidu.array||{},baidu.each=baidu.array.forEach=baidu.array.each=function(e,a,n){var t,i,r=e.length;if("function"==typeof a)for(i=0;i<r&&(t=e[i],!1!==a.call(n||e,t,i));i++);return e},baidu.lang=baidu.lang||{},baidu.lang.isFunction=function(e){return"[object Function]"==Object.prototype.toString.call(e)},baidu.lang.isString=function(e){return"[object String]"==Object.prototype.toString.call(e)},baidu.isString=baidu.lang.isString,baidu.browser=baidu.browser||{},baidu.browser.opera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp.$6||RegExp.$2):void 0,baidu.dom.insertHTML=function(e,a,n){e=baidu.dom.g(e);var t,i;return e.insertAdjacentHTML&&!baidu.browser.opera?e.insertAdjacentHTML(a,n):(t=e.ownerDocument.createRange(),a=a.toUpperCase(),"AFTERBEGIN"==a||"BEFOREEND"==a?(t.selectNodeContents(e),t.collapse("AFTERBEGIN"==a)):(i="BEFOREBEGIN"==a,t[i?"setStartBefore":"setEndAfter"](e),t.collapse(i)),t.insertNode(t.createContextualFragment(n))),e},baidu.insertHTML=baidu.dom.insertHTML,baidu.swf=baidu.swf||{},baidu.swf.version=function(){var e=navigator;if(e.plugins&&e.mimeTypes.length){var a=e.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0"}else if(window.ActiveXObject&&!window.opera)for(var n=12;n>=2;n--)try{var t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+n);if(t){var i=t.GetVariable("$version");return i.replace(/WIN/g,"").replace(/,/g,".")}}catch(e){}}(),baidu.string=baidu.string||{},baidu.string.encodeHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},baidu.encodeHTML=baidu.string.encodeHTML,baidu.swf.createHTML=function(e){e=e||{};var a,n,t,i,r,o,u=baidu.swf.version,l=e.ver||"6.0.0",d={},c=baidu.string.encodeHTML;for(i in e)d[i]=e[i];if(e=d,!u)return"";for(u=u.split("."),l=l.split("."),t=0;t<3&&(a=parseInt(u[t],10),!((n=parseInt(l[t],10))<a));t++)if(n>a)return"";var s=e.vars,f=["classid","codebase","id","width","height","align"];if(e.align=e.align||"middle",e.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",e.codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0",e.movie=e.url||"",delete e.vars,delete e.url,"string"==typeof s)e.flashvars=s;else{var b=[];for(i in s)o=s[i],b.push(i+"="+encodeURIComponent(o));e.flashvars=b.join("&")}var g=["<object "];for(t=0,r=f.length;t<r;t++)o=f[t],g.push(" ",o,'="',c(e[o]),'"');g.push(">");var p={wmode:1,scale:1,quality:1,play:1,loop:1,menu:1,salign:1,bgcolor:1,base:1,allowscriptaccess:1,allownetworking:1,allowfullscreen:1,seamlesstabbing:1,devicefont:1,swliveconnect:1,flashvars:1,movie:1};for(i in e)o=e[i],i=i.toLowerCase(),p[i]&&(o||!1===o||0===o)&&g.push('<param name="'+i+'" value="'+c(o)+'" />');e.src=e.movie,e.name=e.id,delete e.id,delete e.movie,delete e.classid,delete e.codebase,e.type="application/x-shockwave-flash",e.pluginspage="http://www.macromedia.com/go/getflashplayer",g.push("<embed");var m;for(i in e)if((o=e[i])||!1===o||0===o){if(new RegExp("^salign$","i").test(i)){m=o;continue}g.push(" ",i,'="',c(o),'"')}return m&&g.push(' salign="',c(m),'"'),g.push("></embed></object>"),g.join("")},baidu.swf.create=function(e,a){e=e||{};var n=baidu.swf.createHTML(e)||e.errorMessage||"";a&&"string"==typeof a&&(a=document.getElementById(a)),baidu.dom.insertHTML(a||document.body,"beforeEnd",n)},baidu.browser.ie=baidu.ie=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:void 0,baidu.array.remove=function(e,a){for(var n=e.length;n--;)n in e&&e[n]===a&&e.splice(n,1);return e},baidu.lang.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)},baidu.lang.toArray=function(e){if(null===e||void 0===e)return[];if(baidu.lang.isArray(e))return e;if("number"!=typeof e.length||"string"==typeof e||baidu.lang.isFunction(e))return[e];if(e.item){for(var a=e.length,n=new Array(a);a--;)n[a]=e[a];return n}return[].slice.call(e)},baidu.swf.getMovie=function(e){var a,n=document[e];return 9==baidu.browser.ie?n&&n.length?1==(a=baidu.array.remove(baidu.lang.toArray(n),function(e){return"embed"!=e.tagName.toLowerCase()})).length?a[0]:a:n:n||window[e]},baidu.flash._Base=function(){function e(){return r+Math.floor(2147483648*Math.random()).toString(36)}function a(e){return!(void 0===e||void 0===e.flashInit||!e.flashInit())}function n(e,a){var n=null;e=e.reverse(),baidu.each(e,function(e){n=a.call(e.fnName,e.params),e.callBack(n)})}function t(a){var n="";return baidu.lang.isFunction(a)?(n=e(),window[n]=function(){a.apply(window,arguments)},n):baidu.lang.isString?a:void 0}function i(a){a.id||(a.id=e());var n=a.container||"";return delete a.container,baidu.swf.create(a,n),baidu.swf.getMovie(a.id)}var r="bd__flash__";return function(e,r){function o(){a(s)&&(clearInterval(g),g=null,u(),f=!0)}function u(){n(b,s),b=[]}var l=this,d=void 0===e.autoRender||e.autoRender,c=e.createOptions||{},s=null,f=!1,b=[],g=null,r=r||[];l.render=function(){s=i(c),r.length>0&&baidu.each(r,function(a,n){r[n]=t(e[a]||new Function)}),l.call("setJSFuncName",[r])},l.isReady=function(){return f},l.call=function(e,a,n){if(!e)return null;n=n||new Function;var t=null;f?(t=s.call(e,a),n(t)):(b.push({fnName:e,params:a,callBack:n}),!g&&(g=setInterval(o,200)))},l.createFunName=function(e){return t(e)},d&&l.render()}}(),baidu.flash.imageUploader=baidu.flash.imageUploader||function(e){var a=this,e=e||{},n=new baidu.flash._Base(e,["selectFileCallback","exceedFileCallback","deleteFileCallback","startUploadCallback","uploadCompleteCallback","uploadErrorCallback","allCompleteCallback","changeFlashHeight"]);a.upload=function(){n.call("upload")},a.pause=function(){n.call("pause")},a.addCustomizedParams=function(e,a){n.call("addCustomizedParams",[e,a])}},baidu.object=baidu.object||{},baidu.extend=baidu.object.extend=function(e,a){for(var n in a)a.hasOwnProperty(n)&&(e[n]=a[n]);return e},baidu.flash.fileUploader=baidu.flash.fileUploader||function(e){var a=this,e=e||{};e.createOptions=baidu.extend({wmod:"transparent"},e.createOptions||{});var n=new baidu.flash._Base(e,["selectFile","exceedMaxSize","deleteFile","uploadStart","uploadComplete","uploadError","uploadProgress"]);n.call("setMaxNum",e.maxNum?[e.maxNum]:[1]),a.setHandCursor=function(e){n.call("setHandCursor",[e||!1])},a.setMSFunName=function(e){n.call("setMSFunName",[n.createFunName(e)])},a.upload=function(e,a,t,i){if("string"!=typeof e||"string"!=typeof a)return null;void 0===i&&(i=-1),n.call("upload",[e,a,t,i])},a.cancel=function(e){void 0===e&&(e=-1),n.call("cancel",[e])},a.deleteFile=function(e,a){var t=function(e){a&&a(e)};if(void 0===e)return void n.call("deleteFilesAll",[],t);"Number"==typeof e&&(e=[e]),e.sort(function(e,a){return a-e}),baidu.each(e,function(e){n.call("deleteFileBy",e,t)})},a.addFileType=function(e){var e=e||[[]];e=e instanceof Array?[e]:[[e]],n.call("addFileTypes",e)},a.setFileType=function(e){var e=e||[[]];e=e instanceof Array?[e]:[[e]],n.call("setFileTypes",e)},a.setMaxNum=function(e){n.call("setMaxNum",[e])},a.setMaxSize=function(e){n.call("setMaxSize",[e])},a.getFileAll=function(e){n.call("getFileAll",[],e)},a.getFileByIndex=function(e,a){n.call("getFileByIndex",[],a)},a.getStatusByIndex=function(e,a){n.call("getStatusByIndex",[],a)}},baidu.sio=baidu.sio||{},baidu.sio._createScriptTag=function(e,a,n){e.setAttribute("type","text/javascript"),n&&e.setAttribute("charset",n),e.setAttribute("src",a),document.getElementsByTagName("head")[0].appendChild(e)},baidu.sio._removeScriptTag=function(e){if(e.clearAttributes)e.clearAttributes();else for(var a in e)e.hasOwnProperty(a)&&delete e[a];e&&e.parentNode&&e.parentNode.removeChild(e),e=null},baidu.sio.callByBrowser=function(e,a,n){var t,i=document.createElement("SCRIPT"),r=0,o=n||{},u=o.charset,l=a||function(){},d=o.timeOut||0;i.onload=i.onreadystatechange=function(){if(!r){var e=i.readyState;if(void 0===e||"loaded"==e||"complete"==e){r=1;try{l(),clearTimeout(t)}finally{i.onload=i.onreadystatechange=null,baidu.sio._removeScriptTag(i)}}}},d&&(t=setTimeout(function(){i.onload=i.onreadystatechange=null,baidu.sio._removeScriptTag(i),o.onfailure&&o.onfailure()},d)),baidu.sio._createScriptTag(i,e,u)},baidu.sio.callByServer=function(e,a,n){function t(e){return function(){try{e?l.onfailure&&l.onfailure():(a.apply(window,arguments),clearTimeout(r)),window[i]=null,delete window[i]}catch(e){}finally{baidu.sio._removeScriptTag(u)}}}var i,r,o,u=document.createElement("SCRIPT"),l=n||{},d=l.charset,c=l.queryField||"callback",s=l.timeOut||0,f=new RegExp("(\\?|&)"+c+"=([^&]*)");baidu.lang.isFunction(a)?(i="bd__cbs__"+Math.floor(2147483648*Math.random()).toString(36),window[i]=t(0)):baidu.lang.isString(a)?i=a:(o=f.exec(e))&&(i=o[2]),s&&(r=setTimeout(t(1),s)),e=e.replace(f,"$1"+c+"="+i),e.search(f)<0&&(e+=(e.indexOf("?")<0?"?":"&")+c+"="+i),baidu.sio._createScriptTag(u,e,d)},baidu.sio.log=function(e){var a=new Image,n="tangram_sio_log_"+Math.floor(2147483648*Math.random()).toString(36);window[n]=a,a.onload=a.onerror=a.onabort=function(){a.onload=a.onerror=a.onabort=null,window[n]=null,a=null},a.src=e},baidu.json=baidu.json||{},baidu.json.parse=function(e){return new Function("return ("+e+")")()},baidu.json.decode=baidu.json.parse,baidu.json.stringify=function(){function e(e){return/["\\\x00-\x1f]/.test(e)&&(e=e.replace(/["\\\x00-\x1f]/g,function(e){var a=i[e];return a||(a=e.charCodeAt(),"\\u00"+Math.floor(a/16).toString(16)+(a%16).toString(16))})),'"'+e+'"'}function a(e){var a,n,t,i=["["],r=e.length;for(n=0;n<r;n++)switch(typeof(t=e[n])){case"undefined":case"function":case"unknown":break;default:a&&i.push(","),i.push(baidu.json.stringify(t)),a=1}return i.push("]"),i.join("")}function n(e){return e<10?"0"+e:e}function t(e){return'"'+e.getFullYear()+"-"+n(e.getMonth()+1)+"-"+n(e.getDate())+"T"+n(e.getHours())+":"+n(e.getMinutes())+":"+n(e.getSeconds())+'"'}var i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(n){switch(typeof n){case"undefined":return"undefined";case"number":return isFinite(n)?String(n):"null";case"string":return e(n);case"boolean":return String(n);default:if(null===n)return"null";if(n instanceof Array)return a(n);if(n instanceof Date)return t(n);var i,r,o=["{"],u=baidu.json.stringify;for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l))switch(typeof(r=n[l])){case"undefined":case"unknown":case"function":break;default:i&&o.push(","),i=1,o.push(u(l)+":"+u(r))}return o.push("}"),o.join("")}}}(),baidu.json.encode=baidu.json.stringify;