type Product = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number
): number {
  const price = products
    .map((product) => product.price * product.quantity)
    .reduce((totalPrice, price) => totalPrice + price, 0);

  const tax = (taxRate / 100) * price;

  const priceWithTax = price + tax;

  return priceWithTax;
}
