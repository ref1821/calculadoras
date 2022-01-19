import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'


const Home = () => {
    return (
        <div className="container">
            <h1 className="title">Calculadoras</h1>
            <h4 className="subtitle">Quinto</h4>
            <div className="minicont">
                <Link className="links" to='/syc' >SyC</Link>
                <Link className="links" to='/pendiente' >Pendiente</Link>
            </div>
        </div>
    )
}

export default Home
