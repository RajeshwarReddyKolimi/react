# Multi page application using React router

- A simple application with home, about, contact page navigated using react router. If invalid url is entered a Page not found error is shown.

## Steps followed

- Created react project with `react-router` as a dependency
- In `App` component, wrapped the entire code with a `BrowserRouter` of `react-router`. In the `BrowserRouter` created `Route`s for each page in the `Routes` component.
- Each `Route` has a path and element to display when the path matches.
- Nested the routes in index path to use th `Navbar` component using `Outlet` for all the required pages. For this purpose `Layout` component is used.
- In the `Home`, `About`, `Contact` pages a simple text is written and the navbar highlights the current page title.
- Outside the `Layout` route a route for `NotFound` component is written whose path is set as `*` which will be rendered when any of the previous routes are not matched. The `NotFound` components displays `You are lost!` and provides a link to go to home page.
