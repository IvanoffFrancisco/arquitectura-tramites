import React from 'react'
//COMPONENTES BASE
import Navbar from '../../components/navBar/Navbar'
import MigaDePan from '../../components/breadcrumbs/migaDePan'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';//Icono Buscar
//CSS
import '../../css/components/breadcrumbs/estilosBreadcrumbs.css'
import '../../css/components/navBar/estilosNav.css'
import '../../css/components/navBar/btnNav/btnNav.css'
import '../../css/layout.css'
import '../../css/responsive.css'
import '../../css/global.css'




export default function Principal() {
return (
        <>
            <div className='Contenedor' >
                <div >
                    <Navbar/>
                </div>
                    <MigaDePan contenido1={<TravelExploreIcon style={{fontSize: '30px'}}/>} contenido2= {"Bienvenido"}/>
            </div>
        </>
)
}

