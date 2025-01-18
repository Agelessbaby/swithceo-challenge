const currencyData = [
  { "currency": "BLUR", "date": "2023-08-29T07:10:40.000Z", "price": 0.208115254237288 },
  { "currency": "bNEO", "date": "2023-08-29T07:10:50.000Z", "price": 7.1282679 },
  { "currency": "BUSD", "date": "2023-08-29T07:10:40.000Z", "price": 0.999183113 },
  { "currency": "BUSD", "date": "2023-08-29T07:10:40.000Z", "price": 0.999878261118644 },
  { "currency": "USD", "date": "2023-08-29T07:10:30.000Z", "price": 1 },
  { "currency": "ETH", "date": "2023-08-29T07:10:52.000Z", "price": 1645.93373737374 },
  { "currency": "GMX", "date": "2023-08-29T07:10:40.000Z", "price": 36.3451143728814 },
  { "currency": "STEVMOS", "date": "2023-08-29T07:10:40.000Z", "price": 0.0727670677966102 },
  { "currency": "LUNA", "date": "2023-08-29T07:10:40.000Z", "price": 0.409556389830508 },
  { "currency": "RATOM", "date": "2023-08-29T07:10:40.000Z", "price": 10.2509189152542 },
  { "currency": "STRD", "date": "2023-08-29T07:10:40.000Z", "price": 0.738655338983051 },
  { "currency": "EVMOS", "date": "2023-08-29T07:10:40.000Z", "price": 0.062461813559322 },
  { "currency": "IBCX", "date": "2023-08-29T07:10:40.000Z", "price": 41.268113559322 },
  { "currency": "IRIS", "date": "2023-08-29T07:10:40.000Z", "price": 0.0177095593220339 },
  { "currency": "ampLUNA", "date": "2023-08-29T07:10:40.000Z", "price": 0.495485898305085 },
  { "currency": "KUJI", "date": "2023-08-29T07:10:45.000Z", "price": 0.675 },
  { "currency": "STOSMO", "date": "2023-08-29T07:10:45.000Z", "price": 0.431318 },
  { "currency": "USDC", "date": "2023-08-29T07:10:40.000Z", "price": 0.989832 },
  { "currency": "axlUSDC", "date": "2023-08-29T07:10:40.000Z", "price": 0.989832 },
  { "currency": "ATOM", "date": "2023-08-29T07:10:50.000Z", "price": 7.18665733333333 },
  { "currency": "STATOM", "date": "2023-08-29T07:10:45.000Z", "price": 8.51216205084746 },
  { "currency": "OSMO", "date": "2023-08-29T07:10:50.000Z", "price": 0.377297433333333 },
  { "currency": "rSWTH", "date": "2023-08-29T07:10:40.000Z", "price": 0.00408771 },
  { "currency": "STLUNA", "date": "2023-08-29T07:10:40.000Z", "price": 0.442322101694915 },
  { "currency": "LSI", "date": "2023-08-29T07:10:50.000Z", "price": 67.6966152542373 },
  { "currency": "OKB", "date": "2023-08-29T07:10:40.000Z", "price": 42.9756205932203 },
  { "currency": "OKT", "date": "2023-08-29T07:10:40.000Z", "price": 13.5615779661017 },
  { "currency": "SWTH", "date": "2023-08-29T07:10:45.000Z", "price": 0.00403985045501208 },
  { "currency": "USC", "date": "2023-08-29T07:10:40.000Z", "price": 0.994 },
  { "currency": "USDC", "date": "2023-08-29T07:10:30.000Z", "price": 1 },
  { "currency": "USDC", "date": "2023-08-29T07:10:30.000Z", "price": 1 },
  { "currency": "USDC", "date": "2023-08-29T07:10:40.000Z", "price": 0.999878261118644 },
  { "currency": "WBTC", "date": "2023-08-29T07:10:52.000Z", "price": 26002.822020202 },
  { "currency": "wstETH", "date": "2023-08-29T07:10:40.000Z", "price": 1872.25797423729 },
  { "currency": "YieldUSD", "date": "2023-08-29T07:10:40.000Z", "price": 1.02908479661017 },
  { "currency": "ZIL", "date": "2023-08-29T07:10:50.000Z", "price": 0.0165181355932203 }
];

// Function to filter out duplicates and keep only the most recent entry for each currency
const filterDuplicates = (data) => {
  const uniqueCurrencies = new Map();

  data.forEach(item => {
    const existing = uniqueCurrencies.get(item.currency);
    if (!existing || new Date(item.date) > new Date(existing.date)) {
      uniqueCurrencies.set(item.currency, item);
    }
  });

  return Array.from(uniqueCurrencies.values());
};

// Filter the data to only include the most recent prices
const filteredData = filterDuplicates(currencyData);

// Populate the dropdowns with the available currencies
const populateCurrencySelect = () => {
  const fromCurrencySelect = document.getElementById('from-currency');
  const toCurrencySelect = document.getElementById('to-currency');

  filteredData.forEach((item) => {
    const fromOption = document.createElement('option');
    fromOption.value = item.currency;
    fromOption.textContent = item.currency;
    fromCurrencySelect.appendChild(fromOption);

    const toOption = document.createElement('option');
    toOption.value = item.currency;
    toOption.textContent = item.currency;
    toCurrencySelect.appendChild(toOption);
  });
};

// Update currency icon based on the selected currency
const updateCurrencyIcon = (currency, iconId) => {
  const iconElement = document.getElementById(iconId);
  iconElement.src = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency}.svg`;
};

// Function to handle currency selection change
const handleCurrencySelectionChange = () => {
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;

  updateCurrencyIcon(fromCurrency, 'from-currency-icon');
  updateCurrencyIcon(toCurrency, 'to-currency-icon');
};

// Calculate and display the equivalent amount based on the selected currencies and input
const calculateSwapAmount = () => {
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;
  const inputAmount = parseFloat(document.getElementById('input-amount').value);

  const fromCurrencyData = filteredData.find(item => item.currency === fromCurrency);
  const toCurrencyData = filteredData.find(item => item.currency === toCurrency);

  if (isNaN(inputAmount) || !fromCurrencyData || !toCurrencyData) {
    document.getElementById('error-message').textContent = "Invalid input or selected currencies.";
    return;
  }

  const exchangeRate = toCurrencyData.price / fromCurrencyData.price;
  const outputAmount = inputAmount * exchangeRate;

  document.getElementById('output-amount').value = outputAmount.toFixed(2);
  document.getElementById('error-message').textContent = "";
};

// Initialize the form with currency options and event listeners
document.addEventListener('DOMContentLoaded', () => {
  populateCurrencySelect();

  // Initial icon update for the default selections
  updateCurrencyIcon('USD', 'from-currency-icon');
  updateCurrencyIcon('USDC', 'to-currency-icon');

  document.getElementById('swap-form').addEventListener('submit', (e) => {
    e.preventDefault();
    calculateSwapAmount();
  });

  // Add event listeners to handle currency selection change
  document.getElementById('from-currency').addEventListener('change', handleCurrencySelectionChange);
  document.getElementById('to-currency').addEventListener('change', handleCurrencySelectionChange);
});
