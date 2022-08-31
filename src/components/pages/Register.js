import React, { useState } from "react";
import '../css/Auth.css';


function SignUp() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1"
    },
    {
      username: "user2"
    }
  ];

  const errors = {
    uname: "invalid username",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (!userData) {
      setIsSubmitted(true);
    } else {
      // Username found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // signup form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>

    </div>
  );

  return (
    <div className="auth">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>User is successfully signed up</div> : renderForm}
      </div>
    </div>
  );
}

export default SignUp;
