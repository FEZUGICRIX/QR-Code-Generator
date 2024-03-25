import { generate } from "./qrCodeGenerator.js";
import { downloadQRCode } from "./qrCodeDownload.js";
import { getQRCode } from "./qrCodeProcessing.js";

document.addEventListener('DOMContentLoaded', () => {
    generate.URLQRCode();
    getQRCode('example');
    downloadQRCode();

    const qrTypeBtn = document.getElementsByClassName('type');
    let activeButton = document.querySelector('.type-active');

    [...qrTypeBtn].forEach(button => {
        button.addEventListener('click', () => {
            activeButton.classList.remove('type-active');
            activeButton = button;
            activeButton.classList.add('type-active')

            const activeButtonType = activeButton.dataset.type;
            
            switch (activeButtonType) {
                case 'url':
                    generate.URLQRCode();
                    break
                case 'crypto':
                    generate.cryptoQRCode();
                    break
                case 'event':
                    generate.eventQRCode();
                    break
                case 'wifi':
                    generate.wifiQRCode();
                break
                case 'location':
                    generate.locationQRCode();
                    break
                case 'whatsapp':
                    generate.whatsappQRCode();
                    break
                default:
                    console.log('error');
            };
        });
    });
});