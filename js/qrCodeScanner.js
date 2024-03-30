const qrCodeGeneratorContent = document.querySelector('.qr__generator-content');
const qrCodeScannerContent = document.querySelector('.qr__scanner-content');
const form = document.getElementById('qrForm');
const receivedData = document.getElementById('received-data');
const dropContainer = document.getElementById("dropcontainer");
const fileInput = document.getElementById("fileInput");

const errorMessage = `
    <div class="error">
        <div>Error:</div>
        The QR code wasn't recognized or data extraction failed.
        Please upload a valid QR code for scanning
    </div>`;

// Function to scan QR codes and retrieve data
const scanQRCode = async (event) => {
    event.preventDefault();
    // Create a FormData object to pass form data
    const formData = new FormData(form);
    try {
        const response = await fetch('http://api.qrserver.com/v1/read-qr-code/', {
            method: 'POST',
            body: formData
        });
        // Checking the response status
        if (!response.ok) 
            throw new Error('HTTP error ' + response.status);
        
        const QRdata = await response.json();
        const [
            {
                symbol: [
                    { data }
                ]
            }
        ] = QRdata;

        // Display the scanned QR code data
        receivedData.innerHTML = `
            <div class="note"> 
                ${!data ? errorMessage : data}
            </div>
        `;
    } catch (error) {
        console.error('Error:', error);
    };
};

// Assigns dropped files to fileInput's files property
const dropHandler = (event) => {
    event.preventDefault();
    dropContainer.classList.remove("drag-active");
    fileInput.files = event.dataTransfer.files;
};

// Adds/removes the 'drag-active' class depending on the event.
const dragHandler = (event) => {
    event.preventDefault();
    if (event.type === 'dragenter' && !dropContainer.classList.contains('drag-active')) {
        dropContainer.classList.add('drag-active');
    } else if (event.type === 'dragleave') {
        dropContainer.classList.remove('drag-active');
    };
};

// Main function to handle QR code scanning functionality
const qrCodeScanner = () => {
    // Display the QR code scanner content and hide the generator content
    qrCodeScannerContent.style.display = 'block';
    qrCodeGeneratorContent.style.display = 'none';

    form.addEventListener('submit', scanQRCode);

    if (!dropContainer.classList.contains("drag-active")) {
        ['dragover', 'dragenter', 'dragleave', 'drop'].forEach((event) => {
            dropContainer.addEventListener(event, dragHandler, event === 'dragenter');
        });
        dropContainer.addEventListener("drop", dropHandler);
    };
};

export { qrCodeScanner };