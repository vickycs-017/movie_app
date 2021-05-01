import React, { useState } from "react";

// import React from "react";
import Movie from "./components/Movie";


function App() {

  return (
    <div>
      {/* <header>
        <input 
          className="search" 
          type="text" 
          placeholder="Search" 
        />
      </header> */}
      
      <Movie />
    </div>
  );
}

export default App;


