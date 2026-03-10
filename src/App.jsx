
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const ticketsPromise = fetchTickets()

function App() {

  const [clickedTickets, setClickedTickets] = useState([]);

  console.log(clickedTickets);

  return (
    <>

      <Navbar></Navbar>

      <Banner></Banner>

      <Suspense fallback={<span className="flex justify-center items-center  w-20 mx-auto loading loading-infinity loading-xl"></span>}>
        <MainSection setClickedTickets={setClickedTickets} clickedTickets={clickedTickets} ticketsPromise={ticketsPromise}></MainSection> 
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
