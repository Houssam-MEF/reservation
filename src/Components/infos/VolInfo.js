import React, { useContext, useState } from 'react'
import { reservationCont } from '../../context/ReservContext';

export default function VolInfo() {

  const {page, setPage, type, setType, depart, setDepart, arrival, setArrival,
     from, setFrom, to, setTo, classe, setClasse,
    specialReq, setSpecialReq} = useContext(reservationCont);

  return (
    <>
          
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="booking p-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-7">
              <div className="row g-3">

                <div className="col-md-4">
                    <input type='radio'
                    id='type'
                    name='type'
                    value={type}
                    onChange={(e)=>{e.target.checked ? setType(1) : setType(type)}}
                    />
                    <label htmlFor="type" style={{color:"white"}}>Aller-Simple</label>
                    </div>

                <div className="col-md-4">
                    <input type='radio'
                    id='type'
                    name='type'
                    value={2}
                    onChange={(e)=>{e.target.checked ? setType(2) : setType(type)}}
                    />
                    <label htmlFor="type" style={{color:"white"}}>Aller-Retour</label>
                    </div>

                <div className="col-md-4">
                    <input type='radio'
                    id='type'
                    name='type'
                    value={3}
                    onChange={(e)=>{e.target.checked ? setType(3) : setType(type)}}
                    />
                    <label htmlFor="type" style={{color:"white"}}>Multi-Destinations</label>
                    </div>
                <div className="col-md-6">
                  <div
                    className="form-floating date"
                    id="date3"
                  >
                    <input
                      type="date"
                      className="form-control bg-transparent datetimepicker-input"
                      id="datetime"
                      placeholder="Date & Time"
                      value={depart}
                      onChange={(e)=>setDepart(e.target.value)}
                      style={{color:"white"}}
                    />
                    <label htmlFor="datetime" style={{color:"white"}}>Départ le</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="form-floating date"
                    id="date3"
                  >
                    <input
                      type="date"
                      className= "form-control bg-transparent datetimepicker-input"
                      id="datetime"
                      placeholder="Date & Time"
                      value={arrival}
                      onChange={(e)=>setArrival(e.target.value)}
                      style={type === 1 ? {color:"grey"} : {color:"white"}}
                      disabled={type === 1}
                    />
                    <label htmlFor="datetime" style={type === 1 ? {color:"grey"} : {color:"white"}} >Retour le</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="form-floating date"
                    id="date3"
                  >
                    <input
                      type="text"
                      className="form-control bg-transparent datetimepicker-input"
                      id="datetime"
                      placeholder="Date & Time"
                      style={{color:"white"}}
                      value={from}
                      onChange={(e)=>setFrom(e.target.value)}
                    />
                    <label htmlFor="datetime" style={{color:"white"}}>De...</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="form-floating date"
                    id="date3"
                  >
                    <input
                      type="text"
                      className="form-control bg-transparent datetimepicker-input"
                      id="datetime"
                      placeholder="Date & Time"
                      value={to}
                      onChange={(e)=>setTo(e.target.value)}
                      style={{color:"white"}}
                    />
                    <label htmlFor="datetime" style={{color:"white"}}>Vers...</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <select className="form-select bg-transparent" id="select1" 
                    value={classe}
                    onChange={(e)=>setClasse(e.target.value)}
                    style={{color:"white"}}>
                      <option value={"Economique"} >Economique</option>
                      <option value={"Eco-Premium"}>Eco-Premium</option>
                      <option value={"Affaires"}>Affaires</option>
                      <option value={"Première"}>Première</option>
                    </select>
                    <label htmlFor="select1" style={{color:"white"}}>Classe</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-transparent"
                      placeholder="Special Request"
                      id="message"
                      value={specialReq}
                      onChange={(e)=>setSpecialReq(e.target.value)}
                      style={{ height: 100, color:"white" }}
                      defaultValue={""}
                    />
                    <label htmlFor="message" style={{color:"white"}}>Demande Special</label>
                  </div>
                </div>
                <div className="col-12">
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
