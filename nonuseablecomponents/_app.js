import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        router.push('/');
      } else {
        // No user is signed in.
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;