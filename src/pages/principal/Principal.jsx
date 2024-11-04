import React from 'react'
//COMPONENTES BASE
import Navbar from '../../components/navBar/Navbar'
//CSS
import '../../css/breadcrumbs/estilosBreadcrumbs.css'
import MigaDePan from '../../components/breadcrumbs/migaDePan'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';//Icono Buscar



export default function Principal() {
return (
        <>
            <div className='ContenedorDdjj' >
                <div >
                    <Navbar/>
                </div>
                <div className='scrollVertical'>
                    <MigaDePan contenido1={<TravelExploreIcon style={{fontSize: '30px'}}/>} contenido2= {"Bienvenido"}/>
                </div>
            </div>
        </>
)
}
