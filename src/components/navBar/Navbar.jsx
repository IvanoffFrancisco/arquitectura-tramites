import React from 'react'

import '../../css/navBar/estilosNav.css';
import '../../css/estilosMain.css'

//ICONOS
import UpdateIcon from '@mui/icons-material/Update';
import LogoutIcon from '@mui/icons-material/Logout';
import MapIcon from '@mui/icons-material/Map';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';



//TOGGLE
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';

import { TreeItem2 } from '@mui/x-tree-view/TreeItem2';//Caracterisitica  nueva de MUIX q reemplaza a "TreeItem"

function BasicSimpleTreeView({tituloMapaGeneral, urlMapaGeneral, tituloOtrosMapas}) {
    return (
    <Box sx={{ height: 1, flexGrow: 1, maxWidth: 400 }}>
        <SimpleTreeView>
            <TreeItem2 itemId="grid" label="Mapas">
                <a className='nav__item nav__name' href={urlMapaGeneral} target="_blank" >
                    <TreeItem2 itemId="1" label={tituloMapaGeneral}/>
                </a>
                <a className='nav__item nav__name' href="#">
                    <TreeItem2 itemId="2" label={tituloOtrosMapas} />
                </a>
            </TreeItem2>
        </SimpleTreeView>
    </Box>
    );
}


export default function Navbar() {
    return (
        <div className="body">
        <nav className="nav">


        <ul className="nav__list">
            <li className="nav__item">
                <figure className="nav__figure">
                    <BrowserUpdatedIcon style={{fontSize: '30px'}} />
                </figure>
                <article className="nav__show">
                    <a href="#" style={{color:'#fff', textDecoration: 'none'}}>
                        <p className="nav__name">
                            Actualizaciones 
                        </p>
                    </a>
                </article>
            </li>
            <li className="nav__item">
                <figure className="nav__figure">
                    <ReportGmailerrorredIcon style={{fontSize: '30px'}} />
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
                    <UpdateIcon style={{fontSize: '30px'}} />
                </figure>
                <article className="nav__show">
                <a href="#" style={{color:'#fff', textDecoration: 'none'}}>
                        <p className="nav__name">
                            Historial Titulares
                        </p>
                    </a>
                </article>
            </li>
            <li className="nav__item">
                <figure className="nav__figure">
                    <MapIcon style={{fontSize: '30px'}} />
                </figure>
                <article className="nav__show">
                            <BasicSimpleTreeView 
                            tituloMapaGeneral= {"Base Catastral"} 
                            urlMapaGeneral= {"http://172.16.1.58/webMapContribuyente/"} 
                            tituloOtrosMapas={"Proximamente..."}
                            />
                </article>
            </li>

            <li className="nav__item nav__item--down">
                <figure className="nav__figure">
                    <LogoutIcon style={{fontSize: '30px'}} />
                </figure>
                <article className="nav__show">
                    <button className='cerrarSesion'>Cerrar Sesión</button>
                </article>
            </li>

            <li className="nav__item nav__item--user">
                <figure className="nav__figure">
                    <img src="../../src/assets/Escudo_de_Barranqueras.png" width='45px'/>
                </figure>
                <article className="nav__show">
                    <div className="nav__name nav__name--user">
                        <h3 className="nav__username">Apellido y Nombre</h3>
                        <p className="nav__account">Perfil</p>
                    </div>
                </article>
            </li>
        </ul>

    </nav>
    </div>
    )
    }