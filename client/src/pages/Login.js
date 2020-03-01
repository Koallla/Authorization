// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import LoginForm from "../components/LoginForm";
// import withAuthRedirect from "../components/hoc/withAuthRedirect";

// class LoginPage extends Component {
//   render() {
//     return (
//       <main>
//         <h1>LOGIN PAGE</h1>
//         <LoginForm />

//         <div style={{ textAlign: "center" }}>
//           or
//           <Link to="/signup">Sign up</Link>
//         </div>
//       </main>
//     );
//   }
// }

// export default withAuthRedirect(LoginPage);

import React, { Component } from "react";
import withAuthRedirect from "../components/hoc/withAuthRedirect";
import LoginForm from "../components/LoginForm";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>LOGIN PAGE</h1>
        <LoginForm />
      </div>
    );
  }
}

export default withAuthRedirect(Login);
