import { useContext, useState } from 'react'
import { reservationCont } from '../../context/ReservContext'

export default function PersonnalInfo() {

  const {page, setPage, nom, setNom, prenom, setPrenom, tel, setTel, email, setEmail, nombre, setNombre } = useContext(reservationCont); 



  return (
  <>
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="booking p-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-7">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">

                    <input
                      type="text"
                      className="form-control bg-transparent"
                      id="nom"
                      placeholder="Nom..."
                      value={nom}
                      onChange={(e)=>setNom(e.target.value)}
                      style={{color:"white"}}
                    />

                    <label htmlFor="nom" style={{color:"white"}}>Nom ...</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      id="prenom"
                      placeholder="Prenom"
                      value={prenom}
                      onChange={(e)=>setPrenom(e.target.value)}
                      style={{color:"white"}}
                    />
                    <label htmlFor="prenom" style={{color:"white"}}>Prénom...</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control bg-transparent"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      style={{color:"white"}}
                    />
                    <label htmlFor="email" style={{color:"white"}}>Email ...</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control bg-transparent"
                      id="tel"
                      placeholder="Tel"
                      value={tel}
                      onChange={(e)=>setTel(e.target.value)}
                      style={{color:"white"}}
                    />
                    <label htmlFor="tel" style={{color:"white"}}>Tel ...</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control bg-transparent"
                      id="nombre"
                      placeholder="Nombre"
                      value={nombre}
                      onChange={(e)=>setNombre(e.target.value)}
                      min={1}
                      style={{color:"white"}}
                    />
                    <label htmlFor="nombre" style={{color:"white"}}>Nombre de ticket ...</label>
                  </div>
                </div>
                <div className="col-6">
                  <input
                  type='button'
                  value="Back"
                  className = "btn btn-outline-light w-100 py-3"
                  onClick={()=>setPage(0)}
                  />
                </div>
                <div className="col-6">
                  <input
                  type='button'
                  value="Next"
                  className = "btn btn-outline-light w-100 py-3"
                  onClick={()=>setPage(1)}
                  />
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  </>
  
  )
}
