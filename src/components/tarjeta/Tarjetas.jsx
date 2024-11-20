import React from 'react'

//Estilos

export default function Tarjetas ({expte, anio, apellido, nombre, dni}) {
    return (
        <>
            

            
                <button className="cajaPadre">
                    <div className="hijo1">
                        <p> {expte} </p>
                        <p> {anio} </p>
                    </div>
                    <div className="hijo2">
                        <p className='elemHijo2a'> {apellido}, {nombre} </p>
                        <p className='elemHijo2b'> {dni} </p>
                    </div>
                    <div className="hijo3">
                    {/* <p className="barraProgreso">En progreso...</p> */}
                    <div className="barra-progreso">
                        <div className="barra"></div>
                    </div>
                    </div>
                
                </button>
            
        </>
    )
}