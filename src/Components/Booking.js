import React, { useContext } from 'react'
import VolInfo from './infos/VolInfo'
import PersonnalInfo from './infos/PersonnalInfo';
import { reservationCont } from '../context/ReservContext';

export default function Booking() {

    const {page} = useContext(reservationCont);

    const pageDisplay = ()=>{
        if (page === 0){
            return <VolInfo />
        } else if (page === 1){
            return <PersonnalInfo />
        } else {
            return "3";
        }
    }


  return (
    <>
    {pageDisplay()}
    </>
  )
}
