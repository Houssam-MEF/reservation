import { createContext,useState } from "react";
import {v4 as uuidv4} from "uuid"

export const reservationCont = createContext(); 

export default function ReservContext({children}){

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        id:uuidv4(),
        type:"",
        depart:"",
        arrival:"",
        from:"",
        to:"",
        classe:"",
        specialReq:"",
        nom:"",
        prenom:"",
        tel:"",
        email:"",
        nombre:""
    })

  const [type, setType] = useState();
  const [depart, setDepart] = useState();
  const [arrival, setArrival] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [classe, setClasse] = useState();
  const [specialReq, setSpecialReq] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [tel, setTel] = useState();
  const [email, setEmail] = useState();
  const [nombre, setNombre] = useState();

  
  const [loginData, setLoginData] = useState({
    logId:uuidv4(),
    logNom:"",
    logPrenom:"",
    logDate:"",
    logTel:"",
    logEmail:"",
    logPassword:""
});

const [logNom, setLogNom] = useState();
const [logPrenom, setLogPrenom] = useState();
const [logDate, setLogDate] = useState();
const [logTel, setLogTel] = useState();
const [logEmail, setLogEmail] = useState();
const [logPassword, setLogPassword] = useState();

  

    return (<reservationCont.Provider value={{
        page, setPage, type, setType, depart, setDepart,
         arrival, setArrival, from, setFrom, to, setTo,
          classe, setClasse, specialReq, setSpecialReq, nom, setNom,
           prenom, setPrenom, tel, setTel,
          email, setEmail, nombre, setNombre,
          logNom, setLogNom, logPrenom, setLogPrenom,
          logDate, setLogDate, logTel, setLogTel,
          logEmail, setLogEmail, logPassword, setLogPassword
          }}>
        {children}
    </reservationCont.Provider>)
}