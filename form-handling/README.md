# Registration form

- A simple registration form which takes username, password and confirm password fields and validates them. It validation is successful the data is submitted, else error messages are shown.

## Steps followed

- In the JSX created a form which takes inputs of `username`, `password`, `repassword` and a submit button. It also includes conditional rendering which shows error messages when the form validation fails.
- On submitting the form, `handleRegister` is called using the `action` attribute of form. The handleRegister will get `formData` as an argument.
- Using `formData.get("input")` stored `username`, `password`, `repassword` in local variables.
- Now checked if these meet the validation rules. If they are not met an error message is added to state variables `usernameError`, `passwordError`, `repasswordError` which will render them in the DOM.
- If all of them are validated successfully, the data is submitted and a success message is shown.
