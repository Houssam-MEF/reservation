import { useState } from "react"
import { Link } from "react-router-dom";
import BCvid from "../../Assets/Clouds.mp4"
import {SiYourtraveldottv} from "react-icons/si";
import './Login.css'

export default function Login() {
    document.body.style.overflow = "hidden"
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const ocEmail = (e)=>{
        setEmail(e.target.value);
    }
    const ocPass = (e)=>{
        setPass(e.target.value);
    }
    const ocLogin = ()=>{

    }

  return (
    <div className="Login">
        <video className="Login-Video" autoPlay muted loop src={BCvid}></video>
        <div className="Login-Inputs">
          <Link to={'/'} className="Login-To-Home">
            <SiYourtraveldottv fontSize={"2em"}/>
          </Link>
          <input className="Login-Email" autoCorrect="false" type="text" placeholder="Email" onChange={ocEmail} value={email}/>
          <input className="Login-Pass" autoCorrect="false" type="password" placeholder="Password" onChange={ocPass} value={pass}/>
          <input className="Login-Login" type="button" value={"Login"} onClick={ocLogin}/>
          <Link to={'/signup'} className={"Login-to-Signup"}>
            create account now
          </Link>
        </div>
    </div>
  )
}
