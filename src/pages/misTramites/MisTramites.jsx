import React from 'react'

//COMPONENTES BASE
import Navbar from '../../components/navBar/Navbar'
import MigaDePan from '../../components/breadcrumbs/migaDePan'
import Tarjetas from '../../components/tarjeta/tarjetas';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';//Icono Buscar

//CSS
import '../../css/components/breadcrumbs/estilosBreadcrumbs.css'
import '../../css/components/navBar/estilosNav.css'
import '../../css/components/navBar/btnNav/btnNav.css'
import '../../css/components/tarjetas/tarjetas.css'
import '../../css/pages/misTramites.css'
//...........................
import '../../css/layout.css'
import '../../css/responsive.css'
import '../../css/global.css'

export default function MisTramites () {
    return (
        <>
            <div className='Contenedor' >
                <div className='contenedorNav'>
                    <Navbar/>
                </div>
                <div className=''>
                    <div>
                        <MigaDePan contenido1={<TravelExploreIcon style={{fontSize: '30px'}}/>} contenido2= {"Bienvenido"}/>
                    </div>
                    <div className='tarjeta' >
                        <Tarjetas 
                                expte= {'718'} 
                                anio= {'2024'} 
                                apellido= {'KOHAN'} 
                                nombre= {'Germán'} 
                                dni= {'38047754'} />
                        <Tarjetas 
                                expte= {'718'} 
                                anio= {'2024'} 
                                apellido= {'KOHAN'} 
                                nombre= {'Germán'} 
                                dni= {'38047754'} />
                        <Tarjetas 
                                expte= {'718'} 
                                anio= {'2024'} 
                                apellido= {'KOHAN'} 
                                nombre= {'Germán'} 
                                dni= {'38047754'} />
                        <Tarjetas 
                                expte= {'718'} 
                                anio= {'2024'} 
                                apellido= {'KOHAN'} 
                                nombre= {'Germán'} 
                                dni= {'38047754'} />
                        <Tarjetas 
                                expte= {'718'} 
                                anio= {'2024'} 
                                apellido= {'KOHAN'} 
                                nombre= {'Germán'} 
                                dni= {'38047754'} />
                        <Tarjetas 
                                expte= {'718'} 
                                anio= {'2024'} 
                                apellido= {'KOHAN'} 
                                nombre= {'Germán'} 
                                dni= {'38047754'} />
                        <Tarjetas 
                                expte= {'718'} 
                                anio= {'2024'} 
                                apellido= {'KOHAN'} 
                                nombre= {'Germán'} 
                                dni= {'38047754'} />
                    </div>

                    
                </div>
            </div>
        </>
    )
}