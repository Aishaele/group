import React from "react";
import Features01 from "./component/Features01";
import BoxMage from "./component/BoxMage";
import Features02 from './component/Features02'
import BoxMage1 from "./component/BoxMage1"
import BoxMage2 from "./component/BoxMage2";
import Frequently from "./component/Frequently"
import Frame from "./component/Frame";
import Hero from "./component/Hero"

function App() {
  return (
    <div className="App">
      <Hero/>  
      <Features01/>
      <BoxMage/>
      <Features02/>
      <BoxMage1/>
      <BoxMage2/>
      <Frequently/>
         <Frame/>
    </div>
  );
}

export default App;
