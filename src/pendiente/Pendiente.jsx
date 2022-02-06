import React, {useState} from 'react'
import './pendiente.css'

const Pendiente = () => {
    const [datos, setDatos] = useState({
        xOne:0,
        yOne:0,
        xTwo:0,
        yTwo:0,
        x:0,
        y:0,
        pmx:0,
        pmy:0,
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        Number(datos.xOne)
        Number(datos.xTwo)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
            
            pmx: datos.xOne+datos.xTwo,
        })
    }

    return (
        <div className="containerpendiente">
            <input type="number" placeholder="X1" name="xOne" onChange={handleInputChange} className='input'/>
            <input type="number" placeholder="Y1" name="yOne" onChange={handleInputChange} className='input'/>
            <input type="number" placeholder="X2" name="xTwo" onChange={handleInputChange} className='input'/>
            <input type="number" placeholder="Y2" name="yTwo" onChange={handleInputChange} className='input'/>
            <div className='fraccion'>
                <h1>Pendiente (M)</h1>
                <h1 className='one'>{datos.yTwo-datos.yOne}</h1>
                <h1 className='linea'>-</h1>
                <h1 className='two'>{datos.xTwo-datos.xOne}</h1>

                <h1>PUNTO MEDIO</h1>
                <h1>({(parseInt(datos.xOne)+parseInt(datos.xTwo))/2},{(parseInt(datos.yOne)+parseInt(datos.yTwo))/2})</h1>
            </div>
        </div>
    )
}

export default Pendiente;

