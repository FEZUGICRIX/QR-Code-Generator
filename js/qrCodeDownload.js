import { setStyles } from "./qrCodeProcessing.js";

const fileNameElement = document.getElementById('file-name');
const qrCodeImg = document.getElementById('qrcode');
const download = document.getElementById('download');
const qrSize = document.querySelector('.qr__sizes');
const extensions = document.getElementsByClassName('extension');
let extensionActiveEl = document.querySelector('.extension-active');

let parameters = {
    extensionType: 'png',
    size: '200x200'
};

const downloadQRCode =  () => {
    [...extensions].forEach((extension) => {
        extension.onclick = () => {
            extensionActiveEl.classList.remove('extension-active');
            extensionActiveEl = extension;
            extensionActiveEl.classList.add('extension-active');
            parameters.extensionType = extensionActiveEl.dataset.extension;
            setStyles();
        }
    });

    qrSize.onchange = () => {
        parameters.size = qrSize.value;
    };

    download.onclick = () => {
        const filename = fileNameElement.value.trim().replace(/ /g, "_");
        const url = qrCodeImg.src.replace(
            "size=200x200", `size=${parameters.size}`
        );

        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = filename || 'qr_code';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
        })
        .catch(error => 
            console.error('an error has occurred:', error)
        );
    };
};

export { downloadQRCode, parameters };