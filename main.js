import { setupThemeSwitcher } from './theme.js';
import { setupDevicePreset, populateDevicePresets } from './devices.js';
import { setupUrlLoader } from './urlLoader.js';
import { setupResizeControls } from './resize.js';

// ---- Initialization ----

// Device select content (load first so DOM is ready)
populateDevicePresets();

setupThemeSwitcher();
setupDevicePreset();
setupUrlLoader();
setupResizeControls();