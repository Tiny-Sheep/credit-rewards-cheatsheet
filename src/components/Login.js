import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = ( {setLoggedIn} ) => {

  const responseGoogle = (res) => {
    if (res.err) throw res.err;
    const { tokenId, profileObj: {email, givenName} } = res;
  }

    const client_id = process.env.GOOGLE_CLIENT_ID;

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


