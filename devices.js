// devices.js

export const DEVICE_MODELS = [
    {
        label: "iPhone",
        options: [
            { name: 'iPhone 15 Pro Max', size: [430,932] },
            { name: 'iPhone 15 Pro',     size: [393,852] },
            { name: 'iPhone 15',         size: [390,844] },
            { name: 'iPhone 14 Pro Max', size: [430,932] },
            { name: 'iPhone 14 Pro',     size: [393,852] },
            { name: 'iPhone 14',         size: [390,844] },
            { name: 'iPhone 13 Pro Max', size: [428,926] },
            { name: 'iPhone 13 Pro',     size: [390,844] },
            { name: 'iPhone 13',         size: [390,844] },
            { name: 'iPhone 12 Pro Max', size: [428,926] },
            { name: 'iPhone 12/12 Pro',  size: [390,844] },
            { name: 'iPhone 12 mini',    size: [360,780] },
            { name: 'iPhone 11 Pro Max', size: [414,896] },
            { name: 'iPhone 11',         size: [414,896] },
            { name: 'iPhone X/XS',       size: [375,812] },
            { name: 'iPhone XR',         size: [414,896] },
            { name: 'iPhone SE (2022)',  size: [375,667] }
        ]
    },
    {
        label: "Samsung Galaxy",
        options: [
            { name: 'Galaxy S24 Ultra',    size: [412,915] },
            { name: 'Galaxy S23 Ultra',    size: [412,915] },
            { name: 'Galaxy S22 Ultra',    size: [412,915] },
            { name: 'Galaxy S22',          size: [412,915] },
            { name: 'Galaxy S21',          size: [360,800] },
            { name: 'Galaxy S21 Ultra',    size: [384,854] },
            { name: 'Galaxy S20',          size: [360,800] },
            { name: 'Galaxy S10',          size: [360,760] },
            { name: 'Galaxy S9',           size: [360,740] },
            { name: 'Galaxy S8',           size: [360,740] },
            { name: 'Galaxy Note 20 Ultra',size: [412,915] },
            { name: 'Galaxy Note 10',      size: [412,869] },
            { name: 'Galaxy Note9',        size: [412,846] },
            { name: 'Galaxy A54',          size: [360,800] },
            { name: 'Galaxy A53',          size: [360,800] },
            { name: 'Galaxy A32',          size: [360,800] },
            { name: 'Galaxy Z Fold4',      size: [373,810] },
            { name: 'Galaxy Z Flip5',      size: [412,922] }
        ]
    },
    {
        label: "Google Pixel",
        options: [
            { name: "Pixel 8 Pro",         size: [412,915] },
            { name: "Pixel 8",             size: [412,915] },
            { name: "Pixel 7a",            size: [412,915] },
            { name: "Pixel 7 Pro",         size: [412,915] },
            { name: "Pixel 7",             size: [412,915] },
            { name: "Pixel 6 Pro",         size: [412,915] },
            { name: "Pixel 6",             size: [411,823] },
            { name: "Pixel 5",             size: [393,851] },
            { name: "Pixel 4 XL",          size: [411,823] },
            { name: "Pixel 4",             size: [411,731] }
        ]
    },
    {
        label: "OnePlus",
        options: [
            { name: "OnePlus 12",              size: [412,892] },
            { name: "OnePlus 11",              size: [412,915] },
            { name: "OnePlus 10 Pro",          size: [412,892] },
            { name: "OnePlus 9 Pro",           size: [412,915] },
            { name: "OnePlus 8T",              size: [412,915] },
            { name: "OnePlus Nord 2T",         size: [360,800] },
            { name: "OnePlus Nord",            size: [360,800] }
        ]
    },
    {
        label: "Xiaomi",
        options: [
            { name: "Xiaomi 14 Pro",     size: [400,908] },
            { name: "Xiaomi 13T Pro",    size: [360,800] },
            { name: "Xiaomi 12",         size: [392,873] },
            { name: "Xiaomi Mi 11",      size: [360,800] },
            { name: "Redmi Note 12",     size: [360,800] },
            { name: "Redmi Note 11",     size: [360,800] },
            { name: "Poco F5",           size: [393,873] },
            { name: "Poco X6 Pro",       size: [393,873] }
        ]
    },
    {
        label: "Oppo",
        options: [
            { name: "Oppo Find X7",            size: [412,892] },
            { name: "Oppo Reno 10 Pro+",       size: [412,892] },
            { name: "Oppo Reno8",              size: [360,800] },
            { name: "Oppo A98",                size: [360,800] }
        ]
    },
    {
        label: "Vivo",
        options: [
            { name: "Vivo X100 Pro",     size: [412,915] },
            { name: "Vivo V29",          size: [360,800] },
            { name: "Vivo Y27",          size: [360,800] }
        ]
    },
    {
        label: "Motorola",
        options: [
            { name: "Moto G Power 2024", size: [393,873] },
            { name: "Moto G82",          size: [393,873] },
            { name: "Moto Edge 40",      size: [393,873] },
            { name: "Razr 40 Ultra",     size: [413,919] }
        ]
    },
    {
        label: "Huawei",
        options: [
            { name: "Huawei P60 Pro",         size: [360,800] },
            { name: "Huawei Mate 50 Pro",     size: [428,922] },
            { name: "Huawei P50",             size: [360,780] },
            { name: "Huawei Nova 11",         size: [360,800] }
        ]
    },
    {
        label: "Sony Xperia",
        options: [
            { name: "Xperia 1 V",     size: [384,854] },
            { name: "Xperia 10 V",    size: [360,800] },
            { name: "Xperia 5 IV",    size: [360,780] }
        ]
    },
    {
        label: "Tablette",
        options: [
            { name: 'iPad Pro 12.9"',     size: [1024,1366] },
            { name: 'iPad Air/Pro 11"',   size: [834,1194] },
            { name: 'iPad 10th Gen',      size: [820,1180] },
            { name: 'iPad Mini',          size: [768,1024] },
            { name: 'Samsung Tab S9 Ultra',size: [1752,2800] },
            { name: 'Samsung Tab S8+',    size: [1752,2800] },
            { name: 'Samsung Tab S6',     size: [800,1280] },
            { name: 'Xiaomi Pad 6',       size: [1480,2388] }
        ]
    },
    {
        label: "PC/Laptop",
        options: [
            { name: "PC HD",          size: [1366,768] },
            { name: "PC FullHD",      size: [1920,1080] },
            { name: "PC QHD",         size: [2560,1440] },
            { name: "PC 4K/UHD",      size: [3840,2160] },
            { name: "MacBook Air 13' (2022)",   size: [1512,982] },
            { name: "MacBook Pro 14' (2021)",   size: [1512,982] },
            { name: "Surface Laptop 5 15in",    size: [2496,1664] },
            { name: "Dell XPS 13'",             size: [1920,1200] }
        ]
    }
];

const presetSelect = document.getElementById('presetDimensions');
const viewerContainer = document.getElementById('viewerContainer');
const currentSizeDisplay = document.getElementById('currentSize');

export function populateDevicePresets() {
    presetSelect.innerHTML = '';
    const customOpt = document.createElement('option');
    customOpt.value = 'custom';
    customOpt.textContent = "Personnalisé (redimensionner à la souris)";
    presetSelect.appendChild(customOpt);

    for (const group of DEVICE_MODELS) {
        const optGroup = document.createElement('optgroup');
        optGroup.label = group.label;
        for (const dev of group.options) {
            const opt = document.createElement('option');
            opt.value = `${dev.size[0]},${dev.size[1]}`;
            opt.textContent = `${dev.name} (${dev.size[0]}x${dev.size[1]})`;
            optGroup.appendChild(opt);
        }
        presetSelect.appendChild(optGroup);
    }
}

function isPresetSize(width, height) {
    for (const o of presetSelect.querySelectorAll('option')) {
        if (!o.value.match(/^\d+,\d+$/)) continue;
        const [pw, ph] = o.value.split(',').map(Number);
        if (pw === width && ph === height) return true;
    }
    return false;
}

function enableCustomResize() {
    viewerContainer.style.resize = 'both';
    viewerContainer.classList.remove('no-pointer-handle');
    viewerContainer.style.cursor = 'nwse-resize';
    viewerContainer.style.overflow = 'hidden';
}

function disableCustomResize() {
    viewerContainer.style.resize = 'none';
    viewerContainer.classList.add('no-pointer-handle');
    viewerContainer.style.cursor = 'default';
    viewerContainer.style.overflow = 'hidden';
}

export function setupDevicePreset() {
    presetSelect.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
            enableCustomResize();
            return;
        }
        const [width, height] = e.target.value.split(',').map(Number);
        viewerContainer.style.transition = "width .46s cubic-bezier(.19,1.09,.64,1.01), height .38s cubic-bezier(.22,1.25,.64,1.01), box-shadow .31s";
        viewerContainer.style.width = `${width}px`;
        viewerContainer.style.height = `${height}px`;
        setTimeout(()=>{viewerContainer.style.transition = "";}, 530);
        disableCustomResize();
    });

    if (presetSelect.value === 'custom') enableCustomResize();
    else disableCustomResize();

    const resizeObserver = new ResizeObserver(() => {
        if (
            presetSelect.value !== 'custom' &&
            !isPresetSize(viewerContainer.offsetWidth, viewerContainer.offsetHeight)
        ) {
            presetSelect.value = 'custom';
            enableCustomResize();
        }
    });
    resizeObserver.observe(viewerContainer);
}