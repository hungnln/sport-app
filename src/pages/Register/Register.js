import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register(props) {
    return (
        <div>
            <div className='container'>
                <div className='register'>
                    <h2 className='register__heading'>Register</h2>
                    <div className='register__body'>
                        <form className=''>
                            <div className='form form-group'>
                                <input type="text" id="username" className="form__input" autoComplete="off" placeholder=" " />
                                <label htmlFor="username" className="form__label">Username</label>
                            </div>
                            <div className='form form-group'>
                                <input type="text" id="email" className="form__input" autoComplete="off" placeholder=" " />
                                <label htmlFor="email" className="form__label">Email</label>
                            </div>
                            <div className='form form-group'>
                                <input type="password" id="password" className="form__input" autoComplete="off" placeholder=" " />
                                <label htmlFor="password" className="form__label">Password</label>
                            </div>
                            <div className='form form-group'>
                                <input type="password" id="rePassword" className="form__input" autoComplete="off" placeholder=" " />
                                <label htmlFor="rePassword" className="form__label">Retype Password</label>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='form form-group'>
                                        <input type="text" id="firstName" className="form__input" autoComplete="off" placeholder=" " />
                                        <label htmlFor="rePassword" className="form__label">First Name</label>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='form form-group'>
                                        <input type="text" id="lastName" className="form__input" autoComplete="off" placeholder=" " />
                                        <label htmlFor="rePassword" className="form__label">Last Name</label>
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary'>Register</button>
                            <div>
                                <span>Already have an account ? </span>
                                <NavLink to={'/login'}>Login</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
