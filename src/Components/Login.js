import React, { useContext } from 'react'
import { reservationCont } from '../context/ReservContext'
import Navbar from './Navbar';

export default function Login() {

  const {logNom, setLogNom, logPrenom, setLogPrenom, logDate, setLogDate, logTel, setLogTel, logEmail, setLogEmail, logPassword, setLogPassword} = useContext(reservationCont);
  
  return (
    <>
    <Navbar />
     <div className="container">
      <div className="booking p-3">
        <div className="row g-3">
          {/* Connect */}

                  <div className="col-4" style={{borderRight:"2px solid black"}}>
            <h1 id='login_h1'>
               Connecter 
            </h1>
            <br />
            <br />
          <div
                    className="form-floating"
                    id="identifiant"
                    style={{margin:"30px 0px"}}
                    >
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      id="identifiant"
                      placeholder="Identifiant"
                      style={{color:"white"}}
                      />
                    <label htmlFor="datetime" style={{color:"white"}}>Identifiant...</label>
          <div
                    className="form-floating "
                    id="password"
                    style={{margin:"19px 0px"}}
                    >
                    <input
                      type="password"
                      className="form-control bg-transparent"
                      id="password"
                      placeholder="Password"
                      style={{color:"white"}}
                      />
                    <label htmlFor="datetime" style={{color:"white"}}>Password...</label>
                  </div>
                      <br/>
                      <br/>
          <div
                    className="col-10 form-floating "
                    id="connecter"
                      style={{margin:"20px 0px 0px 0px", position:"relative", display:"inline-block"}}
                    >

                    <input
                      type="button"
                      className="form-control bg-transparent"
                      id="connecter"
                      placeholder="Password"
                      value="Se Connecter"
                      style={{color:"white", padding:"0px"}}
                      />
                  </div>
            </div>
            </div>

            {/* Inscription */}
                  <div className="col-8 row g-2" style={{borderRight:"2px solid black"}}>
            <h1 id='login_h1'>
              S'inscrire :
            </h1>
            <br/>

            <form action='#'>
              <div className='col-12 row g-2'>
          <div
                    className="col-5 form-floating"
                    id="nom"
                    >
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      id="nom"
                      value={logNom}
                      onChange={(e)=>setLogNom(e.target.value)}
                      placeholder="Nom"
                      style={{color:"white"}}
                      />
                    <label htmlFor="datetime" style={{color:"white"}}>Nom...</label>
                    </div>

          <div
                    className="col-5 form-floating"
                    id="prenom"
                    >
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      id="prenom"
                      value={logPrenom}
                      onChange={(e)=>setLogPrenom(e.target.value)}
                      placeholder="Prenom"
                      style={{color:"white"}}
                      />
                    <label htmlFor="datetime" style={{color:"white"}}>Prénom...</label>
                  </div>
          <div
                    className="col-5 form-floating"
                    id="birthDate"
                    >
                    <input
                      type="date"
                      className="form-control bg-transparent"
                      id="birthDate"
                      value={logDate}
                      onChange={(e)=>setLogDate(e.target.value)}
                      placeholder="Date"
                      style={{color:"white"}}
                      />
                    <label htmlFor="datetime" style={{color:"white"}}>Date de naissance...</label>
                    </div>

          <div
                    className="col-5 form-floating"
                    id="tel"
                    >
                    <input
                      type="tel"
                      className="form-control bg-transparent"
                      id="tel"
                      value={logTel}
                      onChange={(e)=>setLogTel(e.target.value)}
                      placeholder="Tel"
                      style={{color:"white"}}
                      />
                    <label htmlFor="tel" style={{color:"white"}}>Tel...</label>
                  </div>
          <div
                    className="col-10 form-floating"
                    id="email"
                    >
                    <input
                      type="email"
                      className="form-control bg-transparent"
                      id="email"
                      value={logEmail}
                      onChange={(e)=>setLogEmail(e.target.value)}
                      placeholder="Email"
                      style={{color:"white"}}
                      />
                    <label htmlFor="email" style={{color:"white"}}>Email...</label>
                  </div>
          <div
                    className="col-10 form-floating"
                    id="password"
                    >
                    <input
                      type="password"
                      className="form-control bg-transparent"
                      id="password"
                      value={logPassword}
                      onChange={(e)=>setLogPassword(e.target.value)}
                      placeholder="password"
                      style={{color:"white"}}
                      />
                    <label htmlFor="password" style={{color:"white"}}>Password...</label>
                  </div>
                      <br/>
                      <br/>
                      <div className='col-5'></div>
          <div
                    className="col-5  form-floating"
                    id="signIn" 
                    >

                    <input
                      type="button"
                      className="form-control bg-transparent "
                      id="signIn"
                      placeholder="Password"
                      value="S'inscrire"
                      style={{color:"white", padding:"0px"}}
                      />
                  </div>
                  </div>
                  </form>
                  </div>
            </div>
            </div>
            </div>
    </>
  )
}
