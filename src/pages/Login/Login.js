import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
import { useFormik } from 'formik'
export default function Login(props) {

  const loginFrom = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: values => {
      const errors = {}
      if (!values.username) {
        errors.username = "Required"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)) {
        errors.username = " Invalid username"
      }
    }



  })



  return (
    <div>
      <div className='container'>
        <div className='login'>
          <h2 className='login__heading'>Login</h2>
          <div className='login__body'>
            <form>
              <div className='form form-group'>
                <input type="text" id="username " className="form__input" autoComplete="off" placeholder=" " />
                <label htmlFor='username' className='form__label'>Username</label>
              </div>
              <div className='form form-group'>
                <input type="password" id="password" className="form__input" autoComplete="off" placeholder=" " />
                <label htmlFor="username" className="form__label">Password</label>
              </div>
              <button type='submit' className='btn btn-primary'>Login</button>
              <div><span>Don't have account ?</span><NavLink to={'/register'}>Register</NavLink></div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
