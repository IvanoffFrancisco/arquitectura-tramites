import React from 'react'
import { useState } from 'react';

import '../../css/components/navBar/estilosNav.css';
import '../../css/components/navBar/btnNav/btnNav.css'
import '../../css/responsive.css'
import '../../css/layout.css'
import '../../css/global.css'


//ICONOS
import UpdateIcon from '@mui/icons-material/Update';
import LogoutIcon from '@mui/icons-material/Logout';
import MapIcon from '@mui/icons-material/Map';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PendingActionsIcon from '@mui/icons-material/PendingActions';



export default function Navbar() {
    
/**Botón para mostrar/ocultar menú */
    const [isNavVisible, setIsNavVisible] = useState(false);
    
    //Función para alternar la visibilidad del menú
    const toggleNav = () => {
        setIsNavVisible((prevState) => !prevState);
    };


    return (
        <div className={`body ${isNavVisible ? 'menu-visible' : ''}`}>
        <nav className={`nav ${isNavVisible ? 'nav-visible' : 'nav-hidden'}`}>
        <ul className="nav__list">
            <li className="nav__item">
                <figure className="nav__figure">
                    <PendingActionsIcon className='PendingActionsIcon' style={{fontSize: '30px'}} />
                </figure>
                <article className="nav__show">
                    <a href="#" style={{color:'#fff', textDecoration: 'none'}}>
                        <p className="nav__name">
                            Mis tramites 
                        </p>
                    </a>
                </article>
            </li>
            <li className="nav__item">
                <figure className="nav__figure">
                    <ReportGmailerrorredIcon className='ReportGmailerrorredIcon' style={{fontSize: '30px'}} />
                </figure>
                <article className="nav__show">
                    <a href="#" style={{color:'#fff', textDecoration: 'none'}}>
                        <p className="nav__name">
                            Tramites 
                        </p>
                    </a>
                </article>
            </li>
            <li className="nav__item">
                <figure className="nav__figure">
                    <UpdateIcon className='UpdateIcon' style={{fontSize: '30px'}} />
                </figure>
                <article className="nav__show">
                <a href="#" style={{color:'#fff', textDecoration: 'none'}}>
                        <p className="nav__name">Historial Titulares</p>
                    </a>
                </article>
            </li>
            
            <li className="nav__item">
            <a href="http://172.16.1.58/webMapContribuyente/" style={{color:'#fff', textDecoration: 'none'}}>
                <figure className="nav__figure">
                    <MapIcon className='MapIcon' style={{fontSize: '30px'}} />
                </figure>
                <article className="nav__show">
                        <p className="nav__name">Mapa</p>
                </article>
            </a>
            </li>
            <li className="nav__item nav__item--down">
                <figure className="nav__figure">
                    <LogoutIcon className='LogoutIcon' style={{fontSize: '30px'}} />
                </figure>
                <article className="nav__show">
                    <p className='nav__name'>Cerrar Sesión</p>
                </article>
            </li>

            <li className="nav__item nav__item--user">
                <figure className="nav__figure">
                    <img src="../../src/assets/Escudo_de_Barranqueras.png" width='45px'/>
                </figure>
                <article className="nav__show">
                    <div className="nav__name nav__name--user">
                        <p className="nav__username">Apellido y Nombre</p>
                        <p className="nav__account">Perfil</p>
                    </div>
                </article>
            </li>
        </ul>

    </nav>

    {/* Botón para alternar menú */}
    <button className='toggle-button' onClick={toggleNav}> 
    {isNavVisible ? <CloseIcon style={{ fontSize: '30px' }} /> : <MenuIcon style={{ fontSize: '30px', pointerEvents: 'auto' }} />}
    </button>
    </div>
    )
    }

/* 
    export default function Navbar() {
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <BrowserUpdatedIcon className="nav__icon" />
                        <span className="nav__text">Actualizaciones</span>
                    </li>
                    <li className="nav__item">
                        <ReportGmailerrorredIcon className="nav__icon" />
                        <span className="nav__text">Trámites</span>
                    </li>
                    <li className="nav__item">
                        <UpdateIcon className="nav__icon" />
                        <span className="nav__text">Historial</span>
                    </li>
                    <li className="nav__item">
                        <MapIcon className="nav__icon" />
                        <span className="nav__text">Mapas</span>
                    </li>
                    <li className="nav__item">
                        <LogoutIcon className="nav__icon" />
                        <span className="nav__text">Cerrar Sesión</span>
                    </li>
                </ul>
            </nav>
        );
    } */