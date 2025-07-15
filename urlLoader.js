// urlLoader.js

const urlInput = document.getElementById('url');
const loadBtn = document.getElementById('loadBtn');
const viewer = document.getElementById('siteViewer');
const inputBar = urlInput.closest(".input-bar");

function loadSite() {
    let url = urlInput.value.trim();
    if (!url) return;
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    viewer.src = url;
    // Fancy animation for the iframe splash
    viewer.classList.remove("iframe-starting");
    setTimeout(()=>viewer.classList.add("iframe-starting"), 90);
}

function animateInputBarFocus(ev) {
    inputBar.classList.add('focused');
}
function animateInputBarBlur(ev) {
    inputBar.classList.remove('focused');
}

// Fix: expand controls panel z-index to avoid overlap with resize handle
document.querySelector(".controls").style.zIndex = 51;

export function setupUrlLoader() {
    loadBtn.addEventListener('click', loadSite);
    urlInput.addEventListener('keyup', e => {
        if (e.key === 'Enter') loadSite();
    });

    urlInput.addEventListener('focus', animateInputBarFocus);
    urlInput.addEventListener('blur', animateInputBarBlur);

    // UX Improvement: fix focus bug with button
    loadBtn.addEventListener('mousedown', () => urlInput.blur());

    // Mobile: autoselect input for fast paste
    urlInput.addEventListener('focus', e=>{
        if (window.innerWidth < 580)
            urlInput.select();
    });
}