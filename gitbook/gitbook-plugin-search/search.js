require(["gitbook","jquery"],function(i,s){var r,a,l,e,o,u,n=15,c=500,h=void 0!==history.pushState,t=s("body");function p(e){t.addClass("with-search"),t.addClass("search-loading"),i.search.query(e,0,n).then(function(e){!function(e){r.addClass("open");var n=0==e.count;r.toggleClass("no-results",n),l.empty(),o.text(e.count),u.text(e.query),e.results.forEach(function(e){var n=s("<li>",{class:"search-results-item"}),t=s("<h3>"),r=s("<a>",{href:i.state.basePath+"/"+e.url,text:e.title}),a=e.body.trim();a.length>c&&(a=a.slice(0,c).trim()+"...");var o=s("<p>").html(a);r.appendTo(t),t.appendTo(n),o.appendTo(n),n.appendTo(l)})}(e)}).always(function(){t.removeClass("search-loading")})}function d(){t.removeClass("with-search"),r.removeClass("open")}function f(){var e=function(e){var n=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i").exec(n);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}("q");e&&0<e.length&&(a.val(e),p(e))}function v(){function n(){var e=a.val();0==e.length?d():p(e)}a=s("#book-search-input input"),r=s("#book-search-results"),l=r.find(".search-results-list"),e=r.find(".search-results-title"),o=e.find(".search-results-count"),u=e.find(".search-query");var t=!1;a.on("propertychange",function(e){"value"==e.originalEvent.propertyName&&n()}),a.on("input",function(e){t||(s(this).unbind("propertychange"),t=!0),n()}),a.on("blur",function(e){if(h){var n=function(e,n){n=encodeURIComponent(n);var t,r=window.location.href,a=new RegExp("([?&])"+e+"=.*?(&|#|$)(.*)","gi");{if(a.test(r))return null!=n?r.replace(a,"$1"+e+"="+n+"$2$3"):(r=(t=r.split("#"))[0].replace(a,"$1$3").replace(/(&|\?)$/,""),void 0!==t[1]&&null!==t[1]&&(r+="#"+t[1]),r);if(null==n)return r;var o=-1!==r.indexOf("?")?"&":"?";return r=(t=r.split("#"))[0]+o+e+"="+n,void 0!==t[1]&&null!==t[1]&&(r+="#"+t[1]),r}}("q",s(this).val());history.pushState({path:n},null,n)}})}i.events.on("page.change",function(){v(),d(),i.search.isInitialized()&&f()}),i.events.on("search.ready",function(){v(),f()})});