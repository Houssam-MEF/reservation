import React from 'react'
import {useState} from "react"
import PersonnalInfo from './PersonnalInfo';
import VolInfo from './VolInfo';

export default function Reservation() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({

    })

    const formTitles = ["Personnal Info", "", "3"];

    const pageDisplay = ()=>{
        if (page === 0){
            return <PersonnalInfo />
        } else if (page === 1){
            return <VolInfo />
        } else {
            return "3";
        }
    }





  return (
    <div className='form'>
        <h3>Reserver</h3>
        <div className='progressbar'>
            <div style={{width: page === 0 ? "33%" : page === 1 ? "66%" : "100%", backgroundColor:"red", height:"5px"}}></div>
        </div>
        <div className='form-container'>
            <div className='header'>
                <h4>{formTitles[page]}</h4>
            </div>
            <div className='body'>{pageDisplay()}</div>
            <div className='footer'>
                <button className={page === 0 ? 'btn btn-outline-secondary btn-lg disabled' : 'btn btn-outline-secondary btn-lg'} disabled={page === 0} onClick={()=>{setPage((currPage)=>currPage - 1)}}>
                    Prev
                </button>
                <button className={page === formTitles.length - 1 ? "btn btn-outline-primary btn-lg" : "btn btn-outline-secondary btn-lg"} onClick={()=>{if (page === formTitles.length -1){alert('FORM SUBMITTED');console.log(formData);} else { setPage((currPage)=>currPage + 1)}}}>
                    {page === formTitles.length - 1 ? "Submit" : "Next"}
                </button>
            </div>

        </div>

    </div>
  )
}
