import { useEffect, useState } from 'react'
import Loading from '../loading/Loading';
import Tours from '../tours/Tours';
import './App.css'

const URL = "https://www.course-api.com/react-tours-project"
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  
  const fetchTours = async() =>{
    setLoading(true);
    try{
      const response = await fetch(URL);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }catch(e){
      setLoading(false);
      console.error(`something went whrond ${e}`);
    }
  }

  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
    console.log(tours);
  },[]);
  
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length == 0){
    <div className='title'>
      <h2>No tours left</h2>
      <button className='btn'onClick={fetchTours()}>Refresh</button>
    </div>
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
