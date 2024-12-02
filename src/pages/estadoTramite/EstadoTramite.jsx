import React from 'react'
//COMPONENTES BASE
import Navbar from '../../components/navBar/Navbar'
import MigaDePan from '../../components/breadcrumbs/migaDePan'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';//Icono Buscar
//COMPONENTES
import SeguimientoTramite from '../../components/seguimientoTramite/SeguimientoTramite';
//CSS componente
import '../../css/components/breadcrumbs/estilosBreadcrumbs.css'
import '../../css/components/navBar/estilosNav.css'
import '../../css/components/navBar/btnNav/btnNav.css'
import '../../css/components/estadoTramite/estadoTramite.css'
import '../../css/pages/estadoTramite/estadoTramite.css'
import '../../css/components/seguimientoTramite/seguimientoTramite.css'
//CSS General
import '../../css/layout.css'
import '../../css/responsive.css'
import '../../css/global.css'



export default function EstadoTramite() {
return (
        <>
            <div className='Contenedor' >
                <div >
                    <Navbar/>
                </div>
                <div>
                    <div>
                        <MigaDePan contenido1={<TravelExploreIcon style={{fontSize: '30px'}}/>} contenido2= {"Bienvenido"}/>
                    </div>
                    <div className='compEstadoTramite' >
                        <SeguimientoTramite />
                    </div>
                </div>
            </div>
        </>
)
}

