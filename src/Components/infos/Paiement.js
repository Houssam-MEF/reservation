import React, { useContext } from 'react'
import { reservationCont } from '../../context/ReservContext'

export default function Paiement() {

  const {page, setPage, type, depart, arrival, 
    from,  to,  classe, 
   specialReq,  nom,  prenom, 
    tel,  email,  nombre, bookTicket}  = useContext(reservationCont);

   return (
    <div>
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container row">
      <div className="booking p-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-7">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
      <h1 className='h1' style={{'color':'whitesmoke'}}>Payment $</h1>
      <div className="col-md-5 m-3">
        <input
        type='button'
        value="Back"
        className = "btn btn-outline-light w-100 py-3"
        onClick={()=>setPage(1)}
        />
      </div>
      <div className="col-md-5 m-3">
        <input
        type='button'
        value="Submit"
        className = "btn btn-outline-light w-100 py-3"
        onClick={bookTicket()}
        />
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
