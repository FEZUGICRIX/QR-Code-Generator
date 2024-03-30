import { generate } from "./qrCodeGenerator.js";
import { downloadQRCode } from "./qrCodeDownload.js";
import { getQRCode } from "./qrCodeProcessing.js";
import { qrCodeScanner } from "./qrCodeScanner.js";

document.addEventListener('DOMContentLoaded', () => {
    generate.URLQRCode();
    getQRCode('example');
    downloadQRCode();

    const qrCodeGeneratorContent = document.querySelector('.qr__generator-content');
    const qrCodeScannerContent = document.querySelector('.qr__scanner-content');
    const scannerBtn = document.querySelector('.scanner');
    const qrTypeBtn = document.getElementsByClassName('type');
    let activeButton = document.querySelector('.type-active');

    [...qrTypeBtn].forEach(button => {
        button.addEventListener('click', () => {
            activeButton.classList.remove('type-active');
            activeButton = button;
            activeButton.classList.add('type-active');
            const activeButtonType = activeButton.dataset.type;

            if (!scannerBtn.classList.contains('active')) {
                qrCodeGeneratorContent.style.display = 'block';
                qrCodeScannerContent.style.display = 'none';
            };

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
                case 'scanner':
                    qrCodeScanner();
                    break
                default:
                    console.log('error');
            };
        });
    });
});