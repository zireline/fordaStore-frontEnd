import Axios from 'axios';
import { useRouter } from 'next/router';
import { logoutInteractor } from '../lib/auth/logoutInteractor';

export function LogoutButton() {
  const router = useRouter();

  const logout = (event: any) => {
    event.preventDefault();

    logoutInteractor();

    router.push('/');
  };

  return <button onClick={logout}>Logout</button>;
}
