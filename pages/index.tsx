import Head from 'next/head';
import Link from 'next/link'
import User from "../User/user";
import axios from "axios";
import { useState } from "react";

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const url = "http://localhost:3000/api/user/create";

  const login = async (event: any) => {
    event.preventDefault();

    const loginUser: User = {
      username,
      password
    };

    try {
      const res = await axios.post(url, loginUser);
      console.log("Post success", res.data);

    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className='container-fluid'>
      <Head>
        <title> FordaStore </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/main-logo.png' />
      </Head>

      <img src='logo.png' 
        className='img-thumbnail w-25 h-25 border border-white' 
        alt='logo.png' 
      />

      <div className='row'>
        <div className='col-sm-6 col-md-5 m-auto'>

          <div className='d-flex justify-content-center'>
            <img src='user-icon.png' 
              className='img-thumbnail border border-white w-25 h-25' 
              alt='user-icon.png' 
            />
          </div>
       
          <div className='fs-1 d-flex justify-content-center fw-bold'> 
            Sign in 
          </div>

          <form onSubmit={login}>
            <div>
              <input 
                className='form-control mt-5 border border-dark' 
                type='text' 
                placeholder='Username' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <input 
                className='form-control mt-4 border border-dark' 
                type='password' 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>    
              <button 
                type="submit" 
                className="btn btn-info mt-5 w-100 border border-dark"
              >
                Login
              </button>
            </div>

            <div className='text-center mt-2'>
              Not registered? 
              <Link href='/register'>Create an Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login;