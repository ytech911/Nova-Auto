// resize.js

const viewerContainer = document.getElementById('viewerContainer');
const currentSizeDisplay = document.getElementById('currentSize');
const presetSelect = document.getElementById('presetDimensions');

function updateSizeDisplay() {
    const width = Math.round(viewerContainer.offsetWidth);
    const height = Math.round(viewerContainer.offsetHeight);
    currentSizeDisplay.textContent = `${width} x ${height}`;
}
export function setupResizeControls() {
    // Animation & initial setup
    setTimeout(() => document.querySelector('.container').style.opacity = "1", 50);
    updateSizeDisplay();

    // Watch size: For custom mode indicator and display update
    const resizeObserver = new ResizeObserver(() => {
        updateSizeDisplay();
        // If user resizes manually, switch back to 'custom'
        if (
            presetSelect.value !== 'custom'
        ) {
            presetSelect.value = 'custom';
        }
    });
    resizeObserver.observe(viewerContainer);

    // Drag resizing double-click
    currentSizeDisplay.style.cursor = "pointer";
    currentSizeDisplay.title = "Double-cliquez pour ajuster à 375x812";
    currentSizeDisplay.addEventListener("dblclick", () => {
        viewerContainer.style.transition = "width .52s cubic-bezier(.21,1.13,.58,1.01),height .38s cubic-bezier(.19,1.22,.51,1.01)";
        viewerContainer.style.width = "375px";
        viewerContainer.style.height = "812px";
        setTimeout(()=>viewerContainer.style.transition = "", 560);
        presetSelect.value = "custom";
        updateSizeDisplay();
        currentSizeDisplay.animate([{transform:"scale(1.07)"},{transform:"scale(1)"}],{duration:470,easing:"cubic-bezier(.12,1.17,.34,0.94)"});
    });

    // Custom pointer cues
    viewerContainer.addEventListener('mouseover', () => {
        if (presetSelect.value === 'custom') {
            viewerContainer.style.cursor = 'nwse-resize';
        } else {
            viewerContainer.style.cursor = 'default';
        }
    });
    viewerContainer.addEventListener('mouseleave', () => {
        if (presetSelect.value === 'custom') {
            viewerContainer.style.cursor = 'nwse-resize';
        } else {
            viewerContainer.style.cursor = '';
        }
    });

    // Keyboard resizing for accessibility in custom mode
    viewerContainer.tabIndex = 0;
    viewerContainer.addEventListener("keydown", e => {
        if (presetSelect.value !== 'custom') return;
        let handled = false;
        let w = viewerContainer.offsetWidth;
        let h = viewerContainer.offsetHeight;
        if (e.key === "ArrowRight") { viewerContainer.style.width = (w+8)+"px"; handled = true;}
        if (e.key === "ArrowLeft" ) { viewerContainer.style.width = (w-8)+"px"; handled = true;}
        if (e.key === "ArrowDown")  { viewerContainer.style.height = (h+8)+"px"; handled = true;}
        if (e.key === "ArrowUp")    { viewerContainer.style.height = (h-8)+"px"; handled = true;}
        if (handled) {
            e.preventDefault();
            updateSizeDisplay();
            currentSizeDisplay.animate([{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:180});
        }
    });

    // Mouse-based resizing w/ smooth motion
    (function enableManualMouseResize() {
        let dragging = false;
        let startX, startY, startW, startH;
        let lastMoveTime = 0;

        // Helper: Detect if pointer is on the resize handle area (bottom right 32x32px)
        function isOnResizeHandle(e) {
            const rect = viewerContainer.getBoundingClientRect();
            return (
                e.clientX >= rect.right - 32 &&
                e.clientY >= rect.bottom - 32
            );
        }

        viewerContainer.addEventListener('mousedown', function(e) {
            if (presetSelect.value !== 'custom' || !isOnResizeHandle(e)) return;
            dragging = true;
            startX = e.clientX;
            startY = e.clientY;
            startW = viewerContainer.offsetWidth;
            startH = viewerContainer.offsetHeight;
            document.body.style.userSelect = 'none';
            viewerContainer.style.transition = 'none';
            viewerContainer.classList.add('dragging-anim');
            e.preventDefault();
        });

        window.addEventListener('mousemove', function(e) {
            if (!dragging) return;
            const now = performance.now();
            if (now - lastMoveTime < 6) return;
            lastMoveTime = now;
            let deltaX = e.clientX - startX;
            let deltaY = e.clientY - startY;
            let newW = Math.max(140, startW + deltaX);
            let newH = Math.max(140, startH + deltaY);
            viewerContainer.style.width = `${newW}px`;
            viewerContainer.style.height = `${newH}px`;
            updateSizeDisplay();
        });

        window.addEventListener('mouseup', function() {
            if (dragging) {
                dragging = false;
                document.body.style.userSelect = '';
                viewerContainer.style.transition = '';
                setTimeout(()=>viewerContainer.classList.remove('dragging-anim'),100);
            }
        });

        // Change cursor only when on handle
        viewerContainer.addEventListener('mousemove', function(e) {
            if (presetSelect.value !== 'custom') {
                viewerContainer.style.cursor = 'default';
                return;
            }
            if (isOnResizeHandle(e)) {
                viewerContainer.style.cursor = 'nwse-resize';
            } else {
                viewerContainer.style.cursor = 'default';
            }
        });
    })();

    // Fix: expand controls panel z-index to avoid overlap with resize handle
    viewerContainer.style.zIndex = 31;
}