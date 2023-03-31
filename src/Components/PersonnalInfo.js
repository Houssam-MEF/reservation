import React from 'react'

export default function PersonnalInfo() {
  return (
    <div className='container'>
        <h3>Personnal Info</h3>
        <br />
        <div className='div_personnal'>
          <section>
        <label htmlFor='nom'>Nom : </label>
        <input className='input' type="text" />
          </section>
          <section>
        <label htmlFor='prenom'>Prenom : </label>
        <input className='input' type="text" />
          </section>
        <br />
        <section>

        <label htmlFor='tel'>Tél : </label>
        <input className='input' type="text" />
        </section>
        <section>
        <label htmlFor='email'>Email : </label>
        <input className='input' type="email" />
        </section>
        <br />
        <label htmlFor='date'>Date de réservation : </label>
        <input className='input-group' type="date" />
        </div>


    </div>
  )
}
