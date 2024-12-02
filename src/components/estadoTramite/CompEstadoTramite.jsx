
export default function CompEstadoTramite () {
  return (
    <>
      <button className="cet_cajaPadre">
          <div className="cet_hijo1">
              <p> Texto padre </p>
              <p> Texto hijo </p>
          </div>
          <div className="cet_hijo2">
              <p className='cet_elemHijo2a'> Apellido, nombre </p>
              <p className='cet_elemHijo2b'> dni </p>
          </div>
          <div className="cet_hijo3">
              <div className="cet_barra-progreso">
                  <div className="cet_barra"></div>
              </div>
          </div>
                
      </button>
    </>
  )
}


