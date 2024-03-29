import Head from 'next/head';
import Link from 'next/dist/client/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';


export default function Home() {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>REEMS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-logo.png" />
      </Head>

      <div className="text-center mt-2">
        <Link href="/energyConsumption"> Energy Consumption </Link>
      </div>

      <div className="text-center mt-2">
        <Link href="/environmentalHazard"> Environmental Hazards </Link>
      </div>

      <div className="text-center mt-2">
        <Link href="/expense"> Expense </Link>
      </div>

      <div className="text-center mt-2">
        <Link href="/tenantInformation"> Tenant Information </Link>
      </div>

      <div className="text-center mt-2" onClick={() => {
        logout()
        router.push('/login')
      }}>
        Logout
      </div>
    </div>
  );
};
