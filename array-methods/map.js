const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const discountedPrices = prices.map(
  (price) => `{price: ${price}, salePrice: ${price / 2}}`
);
console.log('Price objects:', discountedPrices);

const formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);
console.log('Formatted prices:', formattedPrices);
