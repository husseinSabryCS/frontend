import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FallingLines } from 'react-loader-spinner'
import logoImage from "../../../images/logo 3 copy.png"

export default function Signin() {
  const [token, setToken] = useState(null)
  const [role, setRole] = useState(null)
  const [errMsg, setErrMsg] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("tkn") !== null) {
      setToken(localStorage.getItem("tkn"))
    }
    if (localStorage.getItem("role") !== null) {
      setRole(localStorage.getItem("role"))
    }
  }, [])

  let user = {
    nationalId: "",
    password: "",
  }

  async function LoginToAccount(value) {
    setIsLoading(true)
    console.log("sending to backend")
    try {
      const { data } = await axios.post("http://localhost:5000/api/login", {
        national_id: value.nationalId,
        password: value.password
      })
      console.log(data)
      if (data.message === "Successful login") {
        localStorage.setItem('tkn', data.token)
        localStorage.setItem('role', data.role)
        setToken(data.token)
        setRole(data.role)
        setSuccessMsg("Welcome back")
        setTimeout(() => {
          navigate('/student/main')
        }, 1000)
      }
    } catch (err) {
      console.log("error occur", err.response?.data?.errors[0]?.msg || "حدث خطأ غير متوقع")
      setErrMsg(err.response?.data?.errors[0]?.msg || "حدث خطأ غير متوقع")
    } finally {
      setIsLoading(false)
    }
  }

  const formikObj = useFormik({
    initialValues: user,
    onSubmit: LoginToAccount,
    validate: (value) => {
      setErrMsg(null)

      const error = {}

      if (value.nationalId.length !== 14) {
        error.nationalId = 'الرقم القومي غير صالح'
      }

      if (value.password.length < 6 || value.password.length > 12) {
        error.password = "يجب أن تكون كلمة المرور بين 6 و 12 حرفًا"
      }

      return error
    }
  })

  return (
    <div className="w-75 m-auto py-5">
      {errMsg && <div className="alert alert-danger">{errMsg}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}
      <nav className="navbar navbar-expand-lg navbar  bg main-bg-color">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0   ">
            <li className="nav-item">
              <Link className="nav-link   " aria-current="page" to="/signin">  المدن الجامعيه بجامعة حلوان </Link>
            </li>

          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">


          </div>
          <Link className='navbar-brands ' to='/'>
            <img src={logoImage} alt="" className='w-100 logo' />
          </Link>

        </div>
      </nav>
      <h3 className='mb-5'>تسجيل الدخول</h3>
      <form onSubmit={formikObj.handleSubmit}>
        <label htmlFor="nationalId" className='mb-2'>الرقم القومي:</label>
        <input
          onBlur={formikObj.handleBlur}
          onChange={formikObj.handleChange}
          value={formikObj.values.nationalId}
          id='nationalId'
          className='form-control mb-3'
          type="text"
          placeholder='الرقم القومي'
        />
        {formikObj.errors.nationalId && formikObj.touched.nationalId &&
          <div className="alert alert-danger">{formikObj.errors.nationalId}</div>
        }

        <label htmlFor="password" className='mb-2'>كلمة المرور:</label>
        <input
          onBlur={formikObj.handleBlur}
          onChange={formikObj.handleChange}
          value={formikObj.values.password}
          id='password'
          className='form-control mb-3'
          type="password"
          placeholder='كلمة المرور'
        />
        {formikObj.errors.password && formikObj.touched.password &&
          <div className="alert alert-danger">{formikObj.errors.password}</div>
        }

        <Link to='/student/ResetPassword' className='black d-flex justify-content-end'>نسيت كلمة المرور؟</Link>

        <Link to='/student/main' className='black mt-2 d-flex justify-content-end'>تقدم الطلاب للمدن الجامعية</Link>
        <button type='submit' disabled={formikObj.isValid === false || formikObj.dirty === false} className='btn main-bg-color white ms-auto d-block'>
          {isLoading ? <FallingLines color="#fff" width="50" visible={true} ariaLabel='falling-lines-loading' /> : "دخول"}
        </button>
      </form>
    </div>
  )
}
