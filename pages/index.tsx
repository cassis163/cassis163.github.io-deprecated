import type { NextPage } from 'next'
import Article from '../components/Article'
import "../styles/Home.module.scss"

const getAge = (birthDate: Date) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    age--;

  return age;
}

const Home: NextPage = () => {
  const age = getAge(new Date("03/05/2001"));
  const text = `
  My name is Casper Aangeenbrug. I am ${age.toString()} years old and I like programming, sports (mainly football), physics and maths.
  At the moment, I am studying HBO-ICT at the HZ University of Applied Sciences.
  The study track that I chose is 'Software Engineering'.
  The alternatives were 'Business Consultancy' and 'Data Science'.
  I really enjoy engineering work, which is the main reason why I chose my track.
  Although, Data Science is really fun too.
  `

  return (
    <Article header="About me" text={text} />
  )
}

export default Home
