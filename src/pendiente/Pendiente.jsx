import React, {useState} from 'react'
import './pendiente.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

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
        xp:0,
        yp:0,
        pendy:1,
        pendx:1,
    })

    const handleInputChange = (event) => {
        console.log(datos.yTwo-datos.yOne)
        console.log(datos.xTwo-datos.xOne)

        Number(datos.xOne)
        Number(datos.xTwo)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();

    }

    const pasos = () => {
        return
    }

    const pendiente = () => {
        var yp = parseInt(datos.yTwo)-parseInt(datos.yOne)
        var xp = parseInt(datos.xTwo)-parseInt(datos.xOne)
        var cond1 = parseInt(yp)%parseInt(xp)
        if (cond1 == 0){
            var pendiente = yp/xp
            setDatos({
                pendy: pendiente,   
           })
            return(
                <div>{pendiente}</div>
                
            )
            
        }
        else {
            if (yp<1){
                yp = parseInt(yp)*-1
            }
            
            if (xp<1){
                xp = parseInt(xp)*-1
            }
        
            setDatos({
                pendy: parseInt(yp),
                pendx: parseInt(xp),
            })
            return(
                <div>
                    <h1>{yp}/{xp}</h1>
                </div>
                )
        }
        console.log(yp,xp)
        
    }

    return (
        <div className="containerpendiente">
            <input type="number" placeholder="X1" name="xOne" onChange={handleInputChange} className='input'/>
            <input type="number" placeholder="Y1" name="yOne" onChange={handleInputChange} className='input'/>
            <input type="number" placeholder="X2" name="xTwo" onChange={handleInputChange} className='input'/>
            <input type="number" placeholder="Y2" name="yTwo" onChange={handleInputChange} className='input'/>
            <div className='fraccion'>
                <h1>Pendiente (M)</h1>
                <h1>{pendiente()}</h1>
                <h1>PUNTO MEDIO</h1>
                <h1>({(parseInt(datos.xOne)+parseInt(datos.xTwo))/2}  ,  {(parseInt(datos.yOne)+parseInt(datos.yTwo))/2})</h1>

                <h1>Ecuaci??n de la recta</h1>
                <h1>y-{datos.yOne}={datos.pendy}/{datos.pendx}(x-{datos.xOne})</h1>
                <h1>({datos.yTwo-datos.yOne}x)+({datos.xTwo-datos.xOne}y)+({datos.yOne*(datos.xTwo-datos.xOne)-datos.xOne*(datos.yTwo-datos.yOne)})=0</h1>
                <h1>y={(datos.yTwo-datos.yOne)}/{(datos.xTwo-datos.xOne)}x+({datos.yOne*(datos.xTwo-datos.xOne)-datos.xOne*(datos.yTwo-datos.yOne)}/{(datos.xTwo-datos.xOne)})</h1>
            
            </div>
        </div>
    )
}

export default Pendiente;

