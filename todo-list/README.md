# Todo list

- A simple todo-list app which allows to add and display tasks.

## Steps followed

- Created a new react-app using `npx create-react-app todo-list`.
- Created a `TodoApp` component in the `components` folder of `src`.
- Created two state variables `tasks`, `currentTask` using `useState()` hook.
- In the JSX there is a form which takes the input to add it to the list on submitting. This input is stored in `currentTask`.
- On change of this input `currentTask` will be updated.
- On submitting the form `currentTask` will be added to the `tasks` which is an array of tasks.
- The input `currentTask` is cleared after adding it to the list.
- This list of tasks is displayed after the form in a `flex-column` style.
- If there are no tasks in the `tasks` array, "No tasks yet" is displayed.
