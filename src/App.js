import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      data[0].image =
        "https://cdn.pixabay.com/photo/2018/03/26/12/23/tour-eiffel-3262467_960_720.jpg";
      data[1].image =
        "https://images.pexels.com/photos/5986115/pexels-photo-5986115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      data[2].image =
        "https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      data[3].image =
        "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      data[4].image =
        "https://images.pexels.com/photos/60783/pexels-photo-60783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      setLoading(false);
      console.log(data);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const NewTours = tours.filter((tour) => tour.id !== id);
    setTours(NewTours);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours</h2>
          <div className="underline"></div>
          <button className="btn" onClick={() => fetchData()}>
            Referesh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
