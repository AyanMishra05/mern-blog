import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { set } from "mongoose";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { signInStart,signInSuccess,signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/oAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error:errorMessage} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("All fields are required"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success===false) {
        dispatch(signInFailure(data.message));
      }
      
      if(res.ok){
        dispatch(signInSuccess(data.user));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left-side */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-black text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              BELLA's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 font-medium ">
           Hey there! Great to see you again. Sign in and let’s keep going!
          </p>
        </div>
        {/*right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label
                value="Your email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {" "}
                Your email
              </label>
              <TextInput type="text" placeholder="Email" id="email" onChange={handleChange}/>
            </div>
            <div>
              <label
                value="Your password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" onChange={handleChange}/>
            </div>
            <Button type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size="sm"/>
                    <span className="pl-3">Loading...</span>
                  </>
                ): "Sign-In"
              }
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/sign-up' className="text-blue-500">Sign Up</Link>
          </div>
          {errorMessage && (
            <Alert color="failure" className="mt-5">
              {errorMessage}
            </Alert>
          )};
        </div>
      </div>
    </div>
  );
}
