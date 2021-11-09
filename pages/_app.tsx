import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navigation, { NavigationRoute } from '../components/Navigation'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const navigationRoutes: NavigationRoute[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Career",
      path: "/career",
    },
    {
      name: "Git",
      path: "/git",
    },
    {
      name: "Music",
      path: "/music",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]

  return (
    <>
      <Navigation routes={navigationRoutes} />
      <div id="textureUnderNav" />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
