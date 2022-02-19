import '@fontsource/roboto';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navigation, { NavigationRoute } from '../components/Navigation';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';

function MyApp({ Component, pageProps }: AppProps) {
  const navigationRoutes: NavigationRoute[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <>
      <Navigation routes={navigationRoutes} />
      <Jumbotron />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
