import * as React from 'react';

//ESTILOS PARA COMPONENTES

import VisibilityIcon from '@mui/icons-material/Visibility';


export default function SeguimientoTramite ({mes, dia, titulo, descrip, url}) {
    return (
    <>
        <div classNameName='calendario' >
            <div className="contenedor1">
            <div className="contenedor2">
                <svg width="200" height="200" >
                {/* <!-- Línea vertical en el centro --> */}
                <line x1="100" y1="-200" x2="100" y2="250" stroke-width="4" />
                
                {/* <!-- Primer círculo (más grande, ahora reducido a la mitad) --> */}
                <circle cx="100" cy="100" r="40" stroke-width="4" fill="#343a40" />

                {/* <!-- Segundo círculo (más pequeño, ahora reducido a la mitad) --> */}
                <circle cx="100" cy="100" r="20" stroke-width="4" fill="palevioletred" />

                </svg>
            </div>
            <div className="contenedor3">
                <div className="contenedor3a">
                    <p> {mes} </p>
                    <p> {dia} </p>
                </div>
                <div className="contenedor3b">
                    <div className="contenedor3b1">
                        <h1> {titulo} </h1>
                        <p> {descrip} </p>
                    </div>
                    <div className="contenedor3b1Hijo">
                        <a 
                        href={`${import.meta.env.VITE_URL_MAPA}${url}`}
                        style={{color:'#fff', textDecoration: 'none'}} alt="Ver Mapa"
                        target='_blank'
                        >
                        <VisibilityIcon style={{fontSize: '50px'}}/>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
    )
}