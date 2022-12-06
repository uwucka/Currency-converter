# How to use?

```js
import mc from "./lib";

// Setting currencies
mc.rates = {
  AUD: 1.58, // 1.40 EUR === 1.58 AUD
  RUB: 92.131,
  USD: 1.21,
  EUR: 1.4,
};

// Setting the base currency for the calculation
mc.base = "RUB";

// Convert
mc.convert(1000, "AUD", "RUB");
```
