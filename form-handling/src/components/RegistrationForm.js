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

  function handlePasswordStrengthCalculation(e) {
    if (e.target.value?.trim()?.length < 8) setPasswordStrength("Low");
    else if (e.target.value?.trim()?.length < 12)
      setPasswordStrength("Moderate");
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

  useEffect(() => {
    if (passwordStrength === "Moderate")
      setPasswordStrengthStyle({ color: "#edbe3e" });
    else if (passwordStrength === "High")
      setPasswordStrengthStyle({ color: "#138601" });
    else setPasswordStrengthStyle({ color: "#a02a2a" });
  }, [passwordStrength]);

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
              <p style={{ passwordStrengthStyle }}>
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
