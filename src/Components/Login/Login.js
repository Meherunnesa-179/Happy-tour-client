import React from 'react';
// import "./login.css"
import { Link } from 'react-router-dom';
import { useHistory , useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
  const {signInWithGoogle , setUser, setIsLoading} =useFirebase();
  console.log(signInWithGoogle)
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
  const handleForm = (e) => {
    e.preventDefault()
  }

   const handleLogInWithGoogle= () => {
    signInWithGoogle()
      .then((result) => 
        {
          setIsLoading(true)
          setUser(result.user)
          history.push(redirect)
        }
          )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };
    return (
        <div>
             <div className="container mx-auto w-50 text-center m-5 border border-1 border-warning p-5 ">
            <h2>Login</h2>
               <form onSubmit={handleForm}>
               <input type="email" name="" className="w-50 m-2 text-center" id="    email" placeholder="Enter your email" />
               <br/>
                <input type="password" name="" id="password"  className="w-50 m-2 text-center" placeholder="Password" />
                <br />
                <input type="submit" className="btn-warning w-50 m-2 text-center rounded-3" value="Submit" />
                <br />
               </form>
               <p>new to Happy-Tour ? <Link to ="/register">Create An Account</Link></p>
                <p>Or</p>
                <button className="btn-warning w-50 m-2 text-center rounded-3"
                  onClick={handleLogInWithGoogle}>Sign-in with google</button>
            </div>
        </div>
    );
};

export default Login;