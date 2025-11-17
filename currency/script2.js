const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{from}.json";

async function fetchExchangeRates(from) {
    const response = await fetch(url.replace("{from}", from));
    const data = await response.json();
    return data[from]; // API structure: { "from": { "usd": 1, "pkr": 277, ... } }
}

// Set default selection: from USD to PKR
window.addEventListener('DOMContentLoaded', () => {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    if (fromSelect) {
        fromSelect.value = 'usd';
    }
    if (toSelect) {
        toSelect.value = 'pkr';
    }
});

document.getElementById('convert-btn').addEventListener('click', async () => {
    if (!navigator.onLine) {
        document.getElementById("result").innerText = "Internet connection required for conversion.";
        return;
    }
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    const exchangeRates = await fetchExchangeRates(fromCurrency);
    const rate = exchangeRates[toCurrency];
    if (!rate) {
        document.getElementById("result").innerText = "Currency not found.";
        return;
    }
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById("result").innerText = `Converted Amount: ${convertedAmount} ${toCurrency}`;
});

document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('currency-search').value.toLowerCase().trim();
    if (!query) {
        // Agar search box khaali ho to kuch bhi select na karein
        return;
    }
    const toSelect = document.getElementById('to-currency');
    let found = false;
    for (let option of toSelect.options) {
        if (
            option.value.toLowerCase() === query ||
            option.text.toLowerCase().includes(query)
        ) {
            option.selected = true;
            found = true;
            break;
        }
    }
    if (!found) {
        alert('Currency not found!');
    }
});