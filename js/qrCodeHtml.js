// Export QR Code HTML Templates
export const qrCodeHTML = {
    url: `
        <div id="url">
            <form id="url__form" class="form">
                <div class="column" id="url__input-column">
                    <label for="url-input">Enter the URL/Text</label>
                    <input type="text" id="url__input" class="data-input" placeholder="example" required/>
                </div>
                <div class="column" id="url__generate-column">
                    <input id="url__sub" class="generate generate-slide-up" type="submit" value="Generate" />
                </div>
            </form>
        </div>
    `,

    crypto: `
        <div id="crypto">
            <form id="crypto__form" class="form">
                <div class="column">
                    <label for="crypto__coin">Cryptocurrency</label>
                    <select id="crypto__coin">
                        <option value="tron">USDT (TRC20)</option>
                        <option value="ethereum">USDT (ERC20)</option>
                        <option value="ethereum">USDC (ERC20)</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="ethereum">Ether</option>
                        <option value="binance">BNB</option>
                        <option value="solana">Sol</option>
                        <option value="ton">Ton</option>
                    </select>
                </div>
                <div class="column">
                    <label for="crypto__address">Address</label>
                    <input type="text" id="crypto__address" class="data-input" placeholder="address" required>    
                </div>
                <div class="column">
                    <label for="crypto__amount">Amount</label>
                    <input type="number" id="crypto__amount" class="data-input" placeholder="amount" step="any" min="0" required>
                </div>
                <div class="column">
                    <input id="crypto__sub" class="generate generate-slide-up" generate-slide-up" type="submit" value="Generate" />
                </div>
            </form>
        </div>
    `,

    event: `
        <div id="event">
            <form id="event__form" class="form">
                <div class="column">
                    <label for="event__name">Description</label>
                    <input type="text" id="event__name" class="data-input" placeholder="Description" required>
                </div>


                <div class="column">
                    <label for="event__dt-start">From</label>
                    <input type="date" id="event__dt-start" class="data-input" required>
                </div>


                <div class="column">
                    <label for="event__dt-end">To</label>
                    <input type="date" id="event__dt-end" class="data-input" required>
                </div>
                
                <div class="column">
                    <input type="submit" id="event__sub" class="generate generate-slide-up" generate-slide-up" class="generate generate-slide-up" generate-slide-up" value="Generate" />
                </div>
            </form>
        </div>
    `,

    wifi: `
        <div id="wifi">
            <form id="wifi__form" class="form">
                <div class="column">
                    <label for="wifi__encryption">encryption</label>
                    <select id="wifi__encryption">
                        <option value="WPA">WPA/WPA2</option>
                        <option value="WEP">WEP</option>
                        <option value="nopass">unencryption</option>
                    </select>
                </div>
                <div class="column">
                    <label for="wifi__name">SSID/network name</label>
                    <input type="text" id="wifi__name" class="data-input" placeholder="network name" required>    
                </div>
                <div class="column">
                    <label for="wifi__password">Password</label>
                    <input type="text" id="wifi__password" class="data-input" placeholder="password" required>
                </div>
                <div class="column">
                    <input id="wifi__sub" class="generate generate-slide-up" generate-slide-up" type="submit" value="Generate" />
                </div>
            </form>
        </div>
    `,

    location: `
        <div id="location">
            <form id="location__form" class="form">
                <div class="column">
                    <label for="latitude">Latitude</label>
                    <input type="number" step="any" pattern="[0-9.,°]*" class="data-input" id="latitude" placeholder="latitude" required>
                </div>
                <div class="column">
                    <label for="longitude">Longitude</label>
                    <input type="number" step="any" class="data-input" id="longitude" placeholder="longitude" required>
                </div>
                <div class="column">
                    <input id="location__sub" class="generate generate-slide-up" generate-slide-up" type="submit"  value="Generate" />
                </div>
            </form>
        </div>
    `,

    whatsapp: `
        <div id="whatsapp">
            <form id="whatsapp__form" class="form">
                <div class="column">
                    <label for="tel">Telephone</label>
                    <input type="tel" id="telephone" class="data-input" placeholder="telephone" required>
                </div>
                <div class="column">
                    <label for="message">Whatsapp message</label>
                    <input type="text" id="message" class="data-input" placeholder="message (optional)">
                </div>
                <div class="column">
                    <input id="whatsapp__sub" class="generate generate-slide-up" generate-slide-up" type="submit" value="Generate" />
                </div>
            </form>
        </div>  
    `
};
