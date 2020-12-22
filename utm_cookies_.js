if (true) { // if (typeof URLSearchParams == 'undefined') {
    var script = document.createElement('script');
    script.src = "https://unpkg.com/@ungap/url-search-params@0.2.2/min.js";
    document.head.appendChild(script);
}
const urlParams = new URLSearchParams(window.location.search);
$.cookie("utm_source", urlParams.get("utm_source") || $.cookie("utm_source") || "", { expires: 30 });
$.cookie("utm_medium", urlParams.get("utm_medium") || $.cookie("utm_medium") || "", { expires: 30 });
$.cookie("utm_campaign", urlParams.get("utm_campaign") || $.cookie("utm_campaign") || "", { expires: 30 });
$.cookie("utm_term", urlParams.get("utm_term") || $.cookie("utm_term") || "", { expires: 30 });
$.cookie("utm_content", urlParams.get("utm_content") || $.cookie("utm_content") || "", { expires: 30 });
