import React, { Component } from 'react';
import GoogleLogin from 'react-google-login-component';

const responseGoogle = (res) => {
  if (err) throw err;
  const {tokenId, profileObj: {email, givenName}} = res;
  const server = process.env.server

}

const client_id = process.env.GOOGLE_CLIENT_ID;



const Login = ( {setLoggedIn} ) => {


}


  responseGoogle(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
  }

  render() {
    return(
      <div>
        <GoogleLogin
          clientId={client_id}
          className="google-login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          buttonText="Login With Google"
        />
      </div>
    )
  }
}

export default Login;


