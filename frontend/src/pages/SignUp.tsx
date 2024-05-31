import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../App";

export default function () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [institute, setInstitute] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [country, setCountry] = useState<string>("");
    const navigate = useNavigate();
  const login = useCallback(async () => {
    console.log(email, password, password, secret, designation, institute, province, country);

    const response = await axios.post(BACKEND_URL+"api/v1/admin/signup/",{
        email: email,
        password:password,
        secret: secret,
        Designation: designation,
        Country: country,
        Institute: institute,
        Province: province
      }
      );
      console.log(response)
      if(response?.data.success) navigate("/login")
      else alert("some error")
    }, [email, password, secret, designation, institute, province, country]);
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
      className="w-lvw flex flex-col items-center p-2 justify-center h-lvh bg-gray-100"
    >
      <div className="text-xl mb-5">Sign Up as Admin for iCrops</div>
      <label htmlFor="" className="w-full md:w-1/2 lg:w-1/3 text-left">
        Email ID
      </label>
      <input
        required
        type="email"
        value={email}
        className="w-full p-2 my-1 text-xl rounded-lg border-2 md:w-1/2 lg:w-1/3"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="" className="w-full md:w-1/2 lg:w-1/3 text-left">
        Password
      </label>
      <input
        required
        type="password"
        value={password}
        className="w-full p-2 my-1 text-xl rounded-lg border-2 md:w-1/2 lg:w-1/3"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label htmlFor="" className="w-full md:w-1/2 lg:w-1/3 text-left">
        Designation
      </label>
      <input
        required
        type="text"
        value={designation}
        className="w-full p-2 my-1 text-xl rounded-lg border-2 md:w-1/2 lg:w-1/3"
        onChange={(e) => {
          setDesignation(e.target.value);
        }}
      />
      <label htmlFor="" className="w-full md:w-1/2 lg:w-1/3 text-left">
        Institute
      </label>
      <input
        required
        type="text"
        value={institute}
        className="w-full p-2 my-1 text-xl rounded-lg border-2 md:w-1/2 lg:w-1/3"
        onChange={(e) => {
          setInstitute(e.target.value);
        }}
      />
      <label htmlFor="" className="w-full md:w-1/2 lg:w-1/3 text-left">
        Province
      </label>
      <input
        required
        type="text"
        value={province}
        className="w-full p-2 my-1 text-xl rounded-lg border-2 md:w-1/2 lg:w-1/3"
        onChange={(e) => {
          setProvince(e.target.value);
        }}
      />
      <label htmlFor="" className="w-full md:w-1/2 lg:w-1/3 text-left">
        Country
      </label>
      <input
        required
        type="text"
        value={country}
        className="w-full p-2 my-1 text-xl rounded-lg border-2 md:w-1/2 lg:w-1/3"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <label htmlFor="" className="w-full md:w-1/2 lg:w-1/3 text-left">
        Authentication Secret
      </label>
      <input
        required
        type="password"
        value={secret}
        className="w-full p-2 my-1 text-xl rounded-lg border-2 md:w-1/2 lg:w-1/3"
        onChange={(e) => {
          setSecret(e.target.value);
        }}
      />
      <button className="text-xl w-full bg-red-100 p-2 rounded-lg border-2 hover:bg-red-300 md:w-1/2 lg:w-1/3 mt-2">
        Sign Up
      </button>
      <button className="w-full md:w-1/2 lg:w-1/3 text-left underline text-red-950 hover:text-red-500" onClick={() => {
        navigate("/login")
      }}>Login Instead</button>
    </form>
  );
}
