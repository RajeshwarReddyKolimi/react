# Weather app

- A weather application which will display the temperature in celsius based on the user input location. If the location is invalid, it displays an error message.

## Steps followed

- Created a `WeatherApp` component which wraps the code with a `QueryClientProvider` context with a value for client as an object of `QueryClient()`.
- It creates a `location` state variable using `useState()` and a function `handleChangeLocation()` which takes formData as an argument and updates the location using `setLocation`.
- Inside this `Form`, `Weather` components along with a `location` are present.
- The `Form` component accepts the `handleChangeLocation` as prop. It has a input field to update the `location`. When submitted the `handleChangeLocation` is called and `location` is updated to the input value.
- The `Weather` component accepts `location` as a prop. It uses `useQuery` to make the API call when the `location` is changed. The `useQuery` accepts 2 arguments: `queryKey` (an array of strings to identify this query), `queryFn` (the function which makes the API call and returns data) and returns `isPending`, `error`, `data`.
- If the `isPending` is true the `Loader` component which does the spinning animation is rendered.
- If there is an error the `Error` component which displays the error is rendered.
- If the data is valid then the temperature is displayed in Celsius with an icon.
