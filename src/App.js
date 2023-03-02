import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  // toursData[0].image =
  //   "https://cdn.pixabay.com/photo/2018/03/26/12/23/tour-eiffel-3262467_960_720.jpg";
  // toursData[1].image =
  //   "https://images.pexels.com/photos/5986115/pexels-photo-5986115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  // toursData[2].image =
  //   "https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  // toursData[3].image =
  //   "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  // toursData[4].image =
  //   "https://images.pexels.com/photos/60783/pexels-photo-60783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
