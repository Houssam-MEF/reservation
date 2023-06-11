import { useState } from "react"
import { Link } from "react-router-dom";
import BCvid from "../../Assets/Clouds.mp4"
import {SiYourtraveldottv} from "react-icons/si";
import './Signup.css'
import axios from "axios";

export default function Signup() {
  document.body.style.overflow = "hidden"
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [message, setMessage] = useState('');
    const ocUsername = (e)=>{
        setUsername(e.target.value);
    }
    const ocEmail = (e)=>{
        setEmail(e.target.value);
    }
    const ocPassword = (e)=>{
        setPassword(e.target.value);
    }
    const signUp = ()=>{
      axios.post('http://localhost:8000/api/users', {username, email, password})
      .then((response)=>{
        setMessage(response.data.message);
        setUsername('');
        setEmail('');
        setPassword('');
      })
      .catch((error)=>{
        console.log(error);
        setMessage('Error :' + error.message);
      })
    }
  return (
    <div className="Signup">
        <video className="Signup-Video" autoPlay muted loop src={BCvid}></video>
        <div className="Signup-Inputs">
          <Link to={'/'} className="Signup-To-Home">
            <SiYourtraveldottv fontSize={"2em"}/>
          </Link>
          <input className="Signup-Username" autoCorrect="false" type="text" placeholder="Username" onChange={ocUsername} value={username}/>
          <input className="Signup-Email" autoCorrect="false" type="text" placeholder="Email" onChange={ocEmail} value={email}/>
          <input className="Signup-Pass" autoCorrect="false" type="password" placeholder="Password" onChange={ocPassword} value={password}/>
          <input className="Signup-Signup" type="button" value={"Sign Up"} onClick={signUp}/>
          <Link to={'/login'} className={"Login-to-Signup"}>
            I have an Account
          </Link>
        </div>
    </div>
  )
}
