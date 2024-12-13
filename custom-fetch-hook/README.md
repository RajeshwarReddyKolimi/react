# Custom Fetch hook

- A simple react project which uses a custom hook to fetch data from an external API (jsonplaceholder in this project).

## Steps followed

- Created a component `FetchData` which fetches the data using a custom hook `useFetch`.
- The `useFetch` returns 4 variables:
- - `fetchData`: function which need to be called to make an API call.
- - `data`: The actual data returned by the API.
- - `error`: If an error occured during API call, it is returned.
- - `isLoading`: When the API call is fetching data it is set as true.
- It has a state variable `currentUser` which stores the id entered by the user in the input field.
- When the input is changed `currentUser` is updated with the input value. When the `currentUser` is changed, the `fetchData` function of the `useFetch` hook with updated url as parameter is called.
- If `isLoading` is true the `Loader` component which has a spinning animation is rendered.
- Else if `error` has a value or message, it is displayed using `Error` component.
- If everything is fine, then the user details (name, email, city) will be rendered.
