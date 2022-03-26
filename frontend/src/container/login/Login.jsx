import React, {useEffect} from 'react'
import './Login.scss'
import { FcGoogle } from 'react-icons/fc';
import { client } from '../../client'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };
  return (
    <div className='login'>
      <div className="container">
        <div className="logo">
          <h1>Hanah<span className='fairy'>DEPEACE</span></h1>
        </div>
        <div className="button">
          <GoogleLogin 
            clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className='icons' size={window.screen.width<=900 ? '7.5vw' : '2.5vw'}/>
                Sign in with Google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Login