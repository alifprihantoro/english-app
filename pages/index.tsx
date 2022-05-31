import Head from '../components/main/Head'
import Nav from '../components/main/nav';
import Footer from '../components/main/footer';
import List from '../components/home/List';

export default function Home () {
  return (
    <div className=" bg-blue-300 w-full h-screen">
      <Head />
      <Nav />
      <List />
      <Footer />
    </div>
  )
}

