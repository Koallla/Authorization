// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import SignUpForm from '../components/SignUpForm';
// import withAuthRedirect from '../components/hoc/withAuthRedirect';

// class SignUpPage extends Component {
//   render() {
//     return (
//       <main>
//         <h1>SIGNUP PAGE</h1>
//         <SignUpForm />

//         <div style={{ textAlign: 'center' }}>
//           or
//           <Link to="/login">Log in</Link>
//         </div>
//       </main>
//     );
//   }
// }

// export default withAuthRedirect(SignUpPage);

import React, { Component } from "react";
import withAuthRedirect from "../components/hoc/withAuthRedirect";
import SignUpForm from "../components/SignUpForm";

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>SIGNUP PAGE</h1>
        <SignUpForm />
      </div>
    );
  }
}

export default withAuthRedirect(SignUp);
