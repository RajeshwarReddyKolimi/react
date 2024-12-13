# Shopping cart using Context

- A simple site which displays a list of products and allows to add them to cart and remove from cart. Also able to display the Cart remove products from there.

## Steps followed

- Created a `CartProvider` component which wraps the entire JSX code in the `CartContext.Provider` with values of `cart`, `setCart`, `setShowCart`.
- The `cart` is the array of products added to cart initialized with an empty array.
- The `showCart` is a boolean variable which says whether to show or hide cart. The `Cart` component is conditionally rendered using this value.
- `Navbar` (navigation bar) and `ProductList` components are children to this component.
- In the `Navbar` component, there is a button which toggles the `showCart` variable with `setShowCart` which is taken from `CartProvider` using `useContext`.
- The `Cart` component displays the list of products added to the cart in a popup.
- The `ProductList` takes a list of products from `products.json` and maps each of them to `Product` component.
- The `Product` component displays the product name, product price and a button to add or remove it from the cart based on its current status.
- The status is taken from `cart` using `useContext` hook and applying includes function of the array.
