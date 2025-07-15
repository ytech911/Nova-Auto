// theme.js
const darkModeBtn = document.getElementById('darkModeBtn');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');
const viewer = document.getElementById('siteViewer');

// Par défaut en mode sombre
let isDarkMode = true;

function setThemeIcon(isDark) {
    themeIcon.querySelector('.icon-moon').style.display = isDark ? '' : 'none';
    themeIcon.querySelector('.icon-sun').style.display = isDark ? 'none' : '';
}

function applyBodyGradient() {
    if (isDarkMode) {
        document.body.style.background = "linear-gradient(112deg, #16141e 0%, #23243c 100%)";
    } else {
        document.body.style.background = "linear-gradient(112deg,#ece9fc 0%, #e4e2ef 40%, #f2e8f3 80%, #e7e2fc 100%)";
    }
}

export function setDarkMode(mode) {
    isDarkMode = mode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    setThemeIcon(isDarkMode);
    // Synchronize mode label/button state
    themeLabel.textContent = isDarkMode ? 'Mode clair' : 'Mode sombre';
    darkModeBtn.setAttribute("aria-pressed", isDarkMode);

    // Send mode message to iframe if possible
    if (viewer.contentWindow) {
        const message = {
            type: 'TOGGLE_COLOR_SCHEME',
            mode: isDarkMode ? 'dark' : 'light'
        };
        viewer.contentWindow.postMessage(JSON.stringify(message), '*');
    }
    applyBodyGradient();
}

// Public API for main
export function setupThemeSwitcher() {
    setThemeIcon(isDarkMode);
    setDarkMode(isDarkMode);

    // Pour que le mode suive l'utilisateur SEULEMENT si il clique
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // don't auto change anymore, user in control
    });

    darkModeBtn.addEventListener('click', () => {
        setDarkMode(!isDarkMode);
    });
}