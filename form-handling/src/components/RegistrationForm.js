import React, { useEffect, useState } from "react";

export default function RegistrationForm() {
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [repasswordError, setRepasswordError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [passwordStrengthStyle, setPasswordStrengthStyle] = useState({
    color: "#a02a2a",
  });

  function getPasswordStrength(str) {
    let count = 0;
    if (str.length > 8) count++;
    if (/[A-Z]/.test(str)) count++;
    if (/[a-z]/.test(str)) count++;
    if (/[0-9]/.test(str)) count++;
    if (/[^A-Za-z0-9]/.test(str)) count++;
    return count;
  }

  function handlePasswordStrengthCalculation(e) {
    const count = getPasswordStrength(e.target.value);
    if (count < 3) setPasswordStrength("Low");
    else if (count < 5) setPasswordStrength("Moderate");
    else setPasswordStrength("High");
    setPasswordError(null);
  }

  function handleRegister(formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const repassword = formData.get("repassword");
    if (!username?.trim()) {
      setUsernameError("Username cannot be empty");
      return;
    }
    if (password?.length < 8) {
      setPasswordError("Password must be atleast 8 characters long");
      return;
    }
    if (password !== repassword) {
      setRepasswordError("Passwords do not match");
      return;
    }
    setSuccessMessage("Registration successful!");
  }
  return (
    <>
      {successMessage ? (
        <>
          <h2>{successMessage}</h2>
          <button onClick={() => setSuccessMessage(null)}>
            New Registration
          </button>
        </>
      ) : (
        <form action={handleRegister}>
          <h1>Register</h1>
          <div>
            <label htmlFor="username">
              <span>Username</span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                onChange={(e) => setUsernameError(null)}
              />
            </label>
            {usernameError && <p>{usernameError}</p>}
          </div>
          <div>
            <label htmlFor="password">
              <span>Password</span>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => handlePasswordStrengthCalculation(e)}
                onBlur={() => setPasswordStrength(null)}
                onFocus={(e) => handlePasswordStrengthCalculation(e)}
              />
            </label>
            {passwordError && <p>{passwordError}</p>}
            {passwordStrength && (
              <p
                style={{
                  color:
                    passwordStrength === "High"
                      ? "#138601"
                      : passwordStrength === "Moderate"
                      ? "#edbe3e"
                      : "#a02a2a",
                }}
              >
                Password Strength: {passwordStrength}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="repassword">
              <span>Confirm password</span>
              <input
                type="password"
                name="repassword"
                id="repassword"
                placeholder="Re-enter password"
                onChange={(e) => setRepasswordError(null)}
              />
            </label>
            {repasswordError && <p>{repasswordError}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}
