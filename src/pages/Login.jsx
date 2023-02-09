import { useState, useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import  {login ,reset} from '../store/amaSlice'
import {toast} from 'react-toastify'
import { useNavigate , Link} from 'react-router-dom'

function Login() {

 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user ,  isError , isSuccess ,  message} = useSelector(state => state.ama)
  const [formData , setFormData] = useState({
    email : "",
    password  : ""
  })
  useEffect(()=>{
    if(isError){
      toast.error(message)
 
    }

    if(isSuccess){
        toast.info("Loggedin")
      navigate("/")
    }

    dispatch(reset())

  },[isError , isSuccess , user , message , navigate , dispatch])

  const {email , password} = formData

  const handleChange = (e) => {
   setFormData((prevState)=>({
    ...prevState,
    [e.target.name] : e.target.value
   }))
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))

  }


  return (
    <div className='content'>
    <section className='heading'>
            {/* <h1>
              <FaSignInAlt /> Login
            </h1> */}
            <p>Please log in to get support</p>
          </section>
    
          <section className='form'>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className='form-group-01'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group-01'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  placeholder='Enter password'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group-01'>
               <Link to={"/home"}>
                <button className='btn btn-block-01'>Submit</button></Link>
              <Link to={"/register"}> 
                <button className='btn btn-block-02'>Register</button>
            </Link> </div>
            </form>
          </section>
    </div>
  )
}

export default Login
