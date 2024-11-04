//nombre de como queres llamar al componente -- la ruta donde estan las pàginas
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Principal from '../src/pages/principal/Principal'


export default function Rutas() {
  return (
    <BrowserRouter>
        <Routes>
            {/* <!--Ruta= lo que escribe en la URL / paginas > */}
            <Route path='/Principal' element={<Principal/>} />
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
  )
}