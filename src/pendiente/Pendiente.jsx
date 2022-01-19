import React, {useState} from 'react'

const Pendiente = () => {
    const [datos, setDatos] = useState({
        xOne:0,
        yOne:0,
        xTwo:0,
        yTwo:0,
        x:0,
        y:0,
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
            <input type="number" placeholder="x1" name="xOne" onChange={handleInputChange}/>
            <input type="number" placeholder="y1" name="yOne" onChange={handleInputChange}/>
            <input type="number" placeholder="x2" name="xTwo" onChange={handleInputChange}/>
            <input type="number" placeholder="y2" name="yTwo" onChange={handleInputChange}/>
            <button type="submit">=</button>
            <div>
                <h1>{datos.yTwo-datos.yOne}</h1>
                <h1>{datos.xTwo-datos.xOne}</h1>
            </div>
        </div>
    )
}

export default Pendiente;

