import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const Links = <>

       <Link to={'/userInfo'}> <li><a>User Info</a></li></Link>
       <Link to={'/content'}> <li><a>Content</a></li></Link>

    </>


const handlelogOut = () => {

    logOut()
    .then(() => {
        console.log('sign out')


        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Sign Out Successfully",
          });




        navigate('/login')
    })
    .catch(err => console.log(err))

}


    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                Links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">User Management</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>


                {/* <NavLink to={'/login'}><button  className='btn'>Login</button></NavLink>
                <NavLink to={'/signup'}><button className='btn'>SignUp</button></NavLink> */}



                <div className="navbar-end">
                    {
                        user?.email ? <button onClick={handlelogOut} className='btn'>Login Out</button> : <>

                            <NavLink to={'/login'}><button className='btn'>Login</button></NavLink>
                            <NavLink to={'/signup'}><button className='btn'>SignUp</button></NavLink>

                        </>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;