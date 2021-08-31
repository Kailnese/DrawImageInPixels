import "./App.css"
import React, {useRef, useState, useEffect} from 'react'
import {firstPaint} from "./FirstPaint";
import {secondPaint} from './SecondPaint'
import {thirdPaint} from './ThirdPaint'

function App() {
  const canvas = useRef(null);
  const canvas2 = useRef(null);
  const canvas3 = useRef(null);
  const [colorsAndCords, setColorsAndCords] = useState({});

  useEffect(() => {
    colorCoordGengerator();
  },[]);

  const colorCoordGengerator = () => {
    var colors = [];
    for(var a = 0; a < 256; a+=8){
      for(var b = 0; b < 256; b+=8){
        for(var c = 0; c < 256; c+=8){
          colors.push({a: a, b: b, c: c});
        }
      }
    }
    var cords = [];
    for(a = 0; a < 256; a++){
      for(b = 0; b < 128; b++){
        cords.push({x: a, y: b});
      }
    }
    setColorsAndCords({colors: colors, coordinates: cords});
  }

  useEffect(() => {
    if(!colorsAndCords.colors){
      return;
    }
    firstPaint(canvas, colorsAndCords);
    secondPaint(canvas2, colorsAndCords);
    thirdPaint(canvas3, colorsAndCords);
  }, [colorsAndCords]);
  
  return (
    <div className="App">
      <h1>Code Test: Colorful Image</h1>
      <canvas className="container" ref={canvas} width={256} height={128} />
      <canvas className="container" ref={canvas2} width={256} height={128} />
      <canvas className="container" ref={canvas3} width={256} height={128} />
    </div>
  );
}

export default App;
