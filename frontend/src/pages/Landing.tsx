import { useEffect } from "react";
// @ts-ignore
import fileApk from "../app-release.apk"
import { useNavigate } from "react-router-dom"
export default function(){
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
        <>
        <div className="w-lvw h-lvh bg-gray-200 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold">
                Admin Login (iCrops)
            </div>
            <button className="w-4/5 p-3 text-xl rounded-lg bg-white hover:bg-red-100 m-2 md:w-2/5 lg:2/5 xl:1/5" onClick={() => {
                navigate("/login")
            }}>Login</button>
            <button className="w-4/5 p-3 text-xl rounded-lg bg-white hover:bg-red-100 m-2 md:w-2/5 lg:2/5 xl:1/5" onClick={() => {
                navigate("/signup")
            }}>Sign Up</button>
            <a href={fileApk} className="text-red-950 underline text-lg hover:cursor-pointer hover:text-red-500">Download iCrops-app</a>
        </div>
        </>
    )
}

