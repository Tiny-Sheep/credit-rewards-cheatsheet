
import React from 'react';
import GoogleLogin from 'react-google-login';


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
        clientId={process.env.GOOGLE_CLIENT_ID}
        className="google-login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        buttonText="Login With Google"
      />
    </div>
  )
}

export default Login;


