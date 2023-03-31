import React from 'react'

export default function VolInfo() {
  return (
    <div className='container'>
        <h3>Vol Info</h3>
        <br />
        {/*  */}
        <div>
        <input className='input-radio' type="radio" name="type" />
        <label htmlFor='type' >Aller-Retour</label>
        <input className='input-radio' type="radio" name="type" />
        <label htmlFor='type' >Aller-Simple</label>
        <input className='input-radio' type="radio" name="type" />
        <label htmlFor='type' >Multi-destinations</label>
        </div>

        {/*  */}

        <div>
        <select className='form-select'>
          <option value="economique">Economique</option>
          <option value="eco_premium">Eco-Premium</option>
          <option value="affaire">Affaires</option>
          <option value="premier">Première</option>
        </select>
        </div>

        {/*  */}

        <div>
          <input className='input-group' type="text" placeholder="D'où partez-vous ?" />
          <input className='input-group' type="text" placeholder="Vers où allez-vous ?" />
          <input className='input-group' type="date" placeholder="Départ le" />
          <input className='input-group' type="date" placeholder="Retour le" />
        </div>

        


    </div>
  )
}
