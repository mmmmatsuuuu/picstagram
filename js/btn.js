function toggleClass(elm, cls) {
    if (elm.classList.contains(cls)) {
        elm.classList.remove(cls)
    } else {
        elm.classList.add(cls);
    }
}

function hundleShowInfo() {
    const info = document.getElementById("info");
    toggleClass(info, "hidden");
}