import { downloadQRCode, parameters } from "./qrCodeDownload.js";

const url = 'https://api.qrserver.com/v1/create-qr-code/';

// Elements
const qrCodeImage = document.getElementById('qrcode');
const qrColor = document.getElementById('color');
const qrBgColor = document.getElementById('bg-color');

// default styles
let color = '000000';
let bgColor = 'ffffff';
const margin = '10';

let urlQRCodeStyle;
let colorChangeHandler, bgColorChangeHandler;
let qrData = '';

const fetchData = async (color, bgColor) => {
    urlQRCodeStyle = `
        &size=${parameters.size}&color=${color}
        &bgcolor=${bgColor}&margin=${margin}
        &format=${parameters.extensionType}
    `.replace(/\s+/g, '');

    const responseData = `
        ${url}?data=${qrData === '' ? 'example' : qrData}
        ${urlQRCodeStyle}
    `.trim();

    const response = await fetch(`
        ${responseData}
    `);

    qrCodeImage.src = response.url;
};

const getQRCode = (data) => {
    let debounceTimer;
    qrData = data.trim();

    fetchData(color, bgColor);
    
    const inputEventHandler = (type) => {
        console.log('aa');
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(async () => {
            if (type === 'color') {
                color = qrColor.value.slice(1);
            } else if (type === 'bgcolor') {
                bgColor = qrBgColor.value.slice(1);
            };

            fetchData(color, bgColor);
        }, 50);
    };

     // Deleting previous event handlers, if they exist
     if (colorChangeHandler) {
        qrColor.removeEventListener('input', colorChangeHandler);
    }
    if (bgColorChangeHandler) {
        qrBgColor.removeEventListener('input', bgColorChangeHandler);
    }

    // Adding new event handlers and saving links to them
    colorChangeHandler = () => {
        inputEventHandler('color');
    };
    bgColorChangeHandler = () => {
        inputEventHandler('bgcolor');
    };
    qrColor.addEventListener('sl-change', colorChangeHandler);
    qrBgColor.addEventListener('sl-change', bgColorChangeHandler);

    downloadQRCode();
};

const setStyles = () => {
    getQRCode(qrData);
};

export { getQRCode, setStyles };