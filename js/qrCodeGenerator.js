import { getQRCode } from "./qrCodeProcessing.js";
import { qrCodeHTML } from "./qrCodeHtml.js";

// Elements
const qrCodeInputData = document.getElementById('qr__data-input');
const qrCodeTextData = document.getElementById('data');

const URLQRCode = () => {
    qrCodeInputData.innerHTML = qrCodeHTML.url;

    const urlForm = document.getElementById('url__form');
    const urlData = document.getElementById('url__input');

    urlForm.onsubmit = (event) => {
        event.preventDefault();
        const data = urlData.value;
        getQRCode(data);
        qrCodeTextData.innerHTML = data;
    };
};

const cryptoQRCode = () => {
    qrCodeInputData.innerHTML = qrCodeHTML.crypto;

    const cryptoForm = document.getElementById('crypto__form');
    const cryptoCoin = document.getElementById('crypto__coin');
    const cryptoAddress = document.getElementById('crypto__address');
    const cryptoAmount = document.getElementById('crypto__amount');
    
    cryptoForm.onsubmit = (event) => {
        event.preventDefault();
        const data = `
            ${cryptoCoin.value}:
            ${cryptoAddress.value}
            ?amount=${cryptoAmount.value}
        `.replace(/\s+/g, '');
        getQRCode(data);
        qrCodeTextData.innerHTML = data;
    };
};

const eventQRCode = () => {
    qrCodeInputData.innerHTML = qrCodeHTML.event;

    const eventForm = document.getElementById('event__form');
    const eventName = document.getElementById('event__name');
    const eventDateStart = document.getElementById('event__dt-start');
    const eventDateEnd = document.getElementById('event__dt-end');
    
    eventForm.onsubmit = (event) => {
        event.preventDefault();
        const dateStrat = eventDateStart.value.replace(/-/g,"");
        const dateEnd = eventDateEnd.value.replace(/-/g,"");
        const data = `
            BEGIN%3AVEVENT%0ASUMMARY%3A${eventName.value}
            %0ADTSTART%3A${dateStrat}T000000Z%0ADTEND%3A
            ${dateEnd}T000000Z%0AEND%3AVEVENT
        `.replace(/\s+/g, '');
        getQRCode(data);
        qrCodeTextData.innerHTML = data;
    };
};

const wifiQRCode = () => {
    qrCodeInputData.innerHTML = qrCodeHTML.wifi;

    const wifi = document.getElementById('wifi__form');
    const encryption = document.getElementById('wifi__encryption');
    const name = document.getElementById('wifi__name');
    const password = document.getElementById('wifi__password');

    wifi.onsubmit = (event) => {
        event.preventDefault();
        const data = `
            WIFI:S:${name.value};
            T:${encryption.value};
            P:${password.value};
        `.replace(/\s+/g, '');
        getQRCode(data);
        qrCodeTextData.innerHTML = data;
    };
};

const locationQRCode = () => {
    qrCodeInputData.innerHTML = qrCodeHTML.location;

    const location = document.getElementById('location');
    const latitude = document.getElementById('latitude');
    const longitude = document.getElementById('longitude');
    
    location.onsubmit = (event) => {
        event.preventDefault();
        const data = `
            https://maps.google.com/local?q=
            ${latitude.value},${longitude.value}
        `.replace(/\s+/g, '');
        getQRCode(data);
        qrCodeTextData.innerHTML = data;
    };
};

const whatsappQRCode = () => {
    qrCodeInputData.innerHTML = qrCodeHTML.whatsapp;

    const whatsapp = document.getElementById('whatsapp__form');
    const telephone = document.getElementById('telephone');
    const message = document.getElementById('message');
    
    whatsapp.onsubmit = (event) => {
        event.preventDefault();
        const data = `
            https://wa.me/${telephone.value}?text=${message.value}
        `;
        getQRCode(data);
        qrCodeTextData.innerHTML = data;
    };
};

const generate = {
    URLQRCode,
    cryptoQRCode,
    eventQRCode,
    wifiQRCode,
    locationQRCode,
    whatsappQRCode 
};

export { generate };