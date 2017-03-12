require ('dotenv').config();
import React from 'react';
import GoogleLogin from 'react-google-login';
const client_id = process.env.GOOGLE_CLIENT_ID;



const Login = ( {setLoggedIn} ) => {

  const responseGoogle = (res) => {
    if (res.err) {
      throw res.err;
    } else {
      const { tokenId, profileObj } = res;
      console.log( profileObj )
      setLoggedIn(profileObj)
    }
  }


  return (
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

export default Login;


