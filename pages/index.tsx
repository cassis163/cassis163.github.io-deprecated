import type { NextPage } from 'next'
import Article from '../components/Article'
import "../styles/Home.module.scss"

const Home: NextPage = () => {

    
  return (
    <Article header="About me" text="test" />
  )
}

export default Home
