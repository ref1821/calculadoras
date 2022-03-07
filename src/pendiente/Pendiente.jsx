import React, {useState} from 'react'
import './pendiente.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faDash } from '@fortawesome/free-solid-svg-icons'

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
        console.log(datos.yTwo-datos.yOne)
        console.log(datos.xTwo-datos.xOne)

        Number(datos.xOne)
        Number(datos.xTwo)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    const pasos = () => {
        return
    }

    const pendiente = () => {
        var yp = datos.yTwo-datos.yOne
        var xp = datos.xTwo-datos.xOne
        var cond1 = yp%xp
        if (cond1 == 0){
            var pendiente = yp/xp
            return(
                <div>{pendiente}</div>
            )
        }
        else{
            var di = yp/xp 
            if (di>0){
                console.log('mayor')
                var ypb = yp*-1 
                var xpb = xp *-1
                return(
                    <div>
                        <h1>{ypb}</h1>
                        <h1>-</h1>
                        <h1>{xpb}</h1>
                    </div>
                )
            }
            else if (di<0){
                console.log('menor')
                if (yp<0){
                    var ypb = yp*-1 
                    return(
                        <div>
                            <h1>{ypb}</h1>
                            <h1><FontAwesomeIcon icon={faMinus} /><FontAwesomeIcon icon={faMinus} /></h1>
                            <h1>{xp}</h1>
                        </div>
                        )
                    }
                else if(xp<0){
                    var xpb = xp*-1 
                    return(
                        <div>
                            <h1>{yp}</h1>
                            <h1><FontAwesomeIcon icon={faMinus} /><FontAwesomeIcon icon={faMinus} /></h1>
                            <h1>{xpb}</h1>
                        </div>
                        )
                }
        }
    }
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

                <h1>Ecuación de la recta</h1>
                <button>Pasos{}</button>
                <h1>({datos.yTwo-datos.yOne}x)+({datos.xTwo-datos.xOne}y)+({datos.yOne*(datos.xTwo-datos.xOne)-datos.xOne*(datos.yTwo-datos.yOne)})=0</h1>
                <h1>y={(datos.yTwo-datos.yOne)}/{(datos.xTwo-datos.xOne)}x+({datos.yOne*(datos.xTwo-datos.xOne)-datos.xOne*(datos.yTwo-datos.yOne)}/{(datos.xTwo-datos.xOne)})</h1>
            </div>
        </div>
    )
}

export default Pendiente;

