import React from 'react'

//Estilos

export default function Tarjetas ({expte, anio, apellido, nombre, dni}) {
    return (
        <>
            <div className="cajaPadre">
                <div className="hijo1">
                    <p> {expte} </p>
                    <p> {anio} </p>
                </div>
                <div className="hijo2">
                    <p> {apellido} </p>
                    <p> {nombre} </p>
                    <p> {dni} </p>
                </div>
                <div className="hijo3">
                    <p className="barraProgreso">
                        En progreso...
                    </p>
                </div>
            
            </div>
        </>
    )
}