import { useState } from "react"
import { Link } from "react-router-dom";
import BCvid from "../../Assets/Clouds.mp4"
import {SiYourtraveldottv} from "react-icons/si";
import './Signup.css'

export default function Signup() {
  document.body.style.overflow = "hidden"
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const ocEmail = (e)=>{
        setEmail(e.target.value);
    }
    const ocPass = (e)=>{
        setPass(e.target.value);
    }
    const ocSignup = ()=>{

    }
  return (
    <div className="Signup">
        <video className="Signup-Video" autoPlay muted loop src={BCvid}></video>
        <div className="Signup-Inputs">
          <Link to={'/'} className="Signup-To-Home">
            <SiYourtraveldottv fontSize={"2em"}/>
          </Link>
          <input className="Signup-Email" autoCorrect="false" type="text" placeholder="Email" onChange={ocEmail} value={email}/>
          <input className="Signup-Pass" autoCorrect="false" type="password" placeholder="Password" onChange={ocPass} value={pass}/>
          <input className="Signup-Pass-C" autoCorrect="false" type="password" placeholder="Confirm Password" onChange={ocPass} value={pass}/>
          <input className="Signup-Signup" type="button" value={"Sign Up"} onClick={ocSignup}/>
          <Link to={'/login'} className={"Login-to-Signup"}>
            I have an Account
          </Link>
        </div>
    </div>
  )
}
