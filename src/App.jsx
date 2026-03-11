
import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
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

  const [inProgress, setInProgress] = useState(0);

  const [resolved, setResolved] = useState(0);

  const [resolvedList, setResolvedList] = useState([]);

  const [clickedTickets, setClickedTickets] = useState([]);



  const taskComplete = (t) => {

    const filteteredData = clickedTickets.filter(task => task.id !== t.id);

    setClickedTickets(filteteredData)

    setResolvedList([...resolvedList, t])



  }

  return (
    <>

      <Navbar></Navbar>

      <Banner inProgress={inProgress} resolved={resolved}></Banner>

      <Suspense fallback={<span className="flex justify-center items-center  w-20 mx-auto loading loading-infinity loading-xl"></span>}>
        <MainSection resolvedList={resolvedList} setResolvedList={setResolvedList} inProgress={inProgress} setInProgress={setInProgress} resolved={resolved} setResolved={setResolved} taskComplete={taskComplete} setClickedTickets={setClickedTickets} clickedTickets={clickedTickets} ticketsPromise={ticketsPromise}></MainSection>
      </Suspense>

      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
