function parseQueryString(t) {
    const e = {};
    return t.split("&").forEach((t => {
        const n = t.split("=");
        e[n[0]] = decodeURIComponent(n[1])
    })), e
}(() => {
    const t = document.createElement("iframe"),
        e = parseQueryString(window.location.search.substring(1));
    t.src = `https://${e.baseURL}`, t.style.width = "100%", t.style.height = "100%", document.body.appendChild(t)
})();