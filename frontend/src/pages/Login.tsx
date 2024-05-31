import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../App";
import axios from "axios";

export default function(){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    // const navigate = useNavigate()
    
    const login = useCallback(async () => {
        console.log(email, password)
        const response = await axios.post(BACKEND_URL+"api/v1/admin/login/",{
            email: email,
            password: password,
          }
          );
          if(response.data.success){

              localStorage.setItem("token", response.data.jwt)
              localStorage.setItem("email", response.data.email)
              console.log(response.data)
              navigate("/data")
            }
            else{
                alert("the credentials are wrong")
            }
    }, [email, password])
    const navigate = useNavigate()
    useEffect(() => {
        if (
            localStorage.getItem("email") != "" &&
            localStorage.getItem("email") != undefined &&
            localStorage.getItem("token") != "" &&
            localStorage.getItem("token") != undefined
          ) {
            navigate("/data");
          }
    }, [])
    return (
        <form action="" onSubmit={async (e) => {
            e.preventDefault();
            await login()
        }}
        className="w-lvw flex flex-col items-center p-2 justify-center h-lvh bg-gray-100"
        >
            <div className="text-xl mb-5">
                Admin login to iCrops dashboard
            </div>
            <label htmlFor="">Email ID</label>
            <input required type="email" value={email} className="w-full p-2 my-1 text-xl rounded-lg border-2 md:w-1/2 lg:w-1/3" onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <label htmlFor="">Password</label>
            <input required type="password" value={password} className="w-full p-2 my-1 text-xl rounded-lg border-2 md:w-1/2 lg:w-1/3"onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <button className="text-xl w-full bg-red-100 p-2 rounded-lg border-2 hover:bg-red-300 md:w-1/2 lg:w-1/3 mt-2">Login</button>
            <button className="w-full md:w-1/2 lg:w-1/3 text-left underline text-red-950 hover:text-red-500" onClick={() => {
        navigate("/signup")
      }}>Sign Up Instead</button>
        </form>
    )
}