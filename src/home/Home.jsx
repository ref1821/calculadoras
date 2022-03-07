import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'


const Home = () => {
    return (
        <div className="container">
            <h1 className="title">Calculadoras</h1>
            <h4 className="subtitle">Quinto</h4>
            <div className="minicont">
                <div className='L'><Link className="links" to='/pendiente' >Recta</Link></div>
                <div className='L'><Link className="links" to='/circulo' >Circulo</Link></div>
            </div>
        </div>
    )
}

export default Home
