# Product list rendering

- Simple react app which will display a list of products passed as props and logs a message in console when clicked on a product.

## Steps followed

- Created a list of `products` array in `ProductContainer` component.
- Passed this `products` array as props to `ProductList` component.
- In the `ProductList` component the `products` which is received as props is mapped to `Product` component with a key and product as prop using `map` function.
- In the `Product` component, the products name, price and a button, which on clicked logs Product name to console, are rendered.
