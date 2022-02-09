import React, {useState}from 'react';
import './circulo.css'
const Circulo = () => {
    const [datos, setDatos] = useState({
        r:0,
        x:0,
        y:0,
        ri:0,
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }
  return (
  <div>
      <h2>ecuación del circulo con el centro desde el origen</h2>
      <h3>radio</h3>
      <input type="number" placeholder="r" name="r" onChange={handleInputChange} className='inputc'/>
      <h4>x^2+y^2={datos.r*datos.r}</h4>
      <h3>radio incognita</h3>
      x+y+<input type="number" placeholder="#" name="ri" onChange={handleInputChange} className='inputc' id='inputc'/>
      <h2>r={Math.sqrt(datos.ri)}</h2>

  </div>
  );
};

export default Circulo;
