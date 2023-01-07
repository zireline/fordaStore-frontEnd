import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { loginInteractor } from '../lib/auth/loginInteractor';
import { User } from '../lib/user/User';
import Image from 'next/image';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    console.debug('username: ' + username);
    console.debug('password: ' + password);

    const res = await loginInteractor({ username, password });

    if (res.ok) {
      const authToken = res.headers.get('authorization');
      const user = (await res.json()) as User;

      console.log('User logged in: ', user);
      console.log('Authorization: ', authToken);

      if (authToken && user) {
        localStorage.setItem('Authorization', authToken);
        localStorage.setItem('uid', user.uid);
      }

      router.push('/home');
    } else {
      alert('Login failed! Please try again: ' + res.status);
    }
  };

  return (
    <div className="container-fluid">
      <Head>
        <title> FordaStore </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-logo.png" />
      </Head>

      <Image
        src="logo.png"
        className="img-thumbnail w-25 h-25 border border-white"
        alt="logo.png"
      />

      <div className="row">
        <div className="col-sm-6 col-md-5 m-auto">
          <div className="d-flex justify-content-center">
            <Image
              src="user-icon.png"
              className="img-thumbnail border border-white w-24 h-24"
              alt="user-icon.png"
            />
          </div>

          <div className="fs-1 d-flex justify-content-center fw-bold">
            Sign in
          </div>

          <form onSubmit={handleLogin}>
            <div>
              <input
                className="form-control mt-5 border border-dark"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <input
                className="form-control mt-4 border border-dark"
                type="password"
                placeholder="Password"
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

            <div className="text-center mt-2">
              Not registered?
              <Link href="/register"> Create an Account </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
