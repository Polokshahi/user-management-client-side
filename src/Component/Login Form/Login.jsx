import { useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
    const {signIn, setUser, user} = useContext(AuthContext);
    const navigate = useNavigate();

    

 

   
    
    
    
    
    
    const handlelogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

    
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const users = result.email;
            console.log(users);
            setUser(users)
            form.reset();

              const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 2500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        }
                      });
                      Toast.fire({
                        icon: "success",
                        title: "Login in Successfully",
                      });


            navigate('/')
        })


        



    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handlelogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                                <div>
                                     <p className="text-[14px] text-center">if you have no account <Link className="underline text-red-500"  to={'/signUp'}>SignUp</Link> </p>
                                </div>



                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>




                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;