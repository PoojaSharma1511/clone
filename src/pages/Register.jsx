// import {FaUser} from 'react-icons/fa'
import {useState , useEffect} from "react"
import {useSelector , useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {register , reset} from '../store/amaSlice'
import {toast} from 'react-toastify'

function Register() {
  
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user , isError , isSuccess ,  message} = useSelector(state => state.ama)

    useEffect(()=>{
      if(isError){
        toast.error(message)
        console.log("error found")
      }

      if(isSuccess){
        toast.info("Created")
        navigate("/login")
      }

      dispatch(reset())

    },[isError , isSuccess , user , message , navigate , dispatch])


   const [formData, setFormData] = useState({
    name : "",
    email : "",
    password : "",
    password2 : ""
   })
  
   const {name , email , password , password2} = formData
  
   const handleChange = (e) => {
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name] : e.target.value
    }))
   }

const handleSubmit = (e) => {
  e.preventDefault()
 
  if(password !== password2){
    toast.error("passwords not match")
    console.log("passwords not match")
  }
  
  const userData = {
    name,
    email,
    password
  }

  dispatch(register(userData))

}


    return (
    <>
     <section className='heading'>
            {/* <h1>
              <FaUser /> Register
            </h1> */}
            <p>Please create an account</p>
          </section>
    
          <section className='form-01'>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className='form-group-01'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  placeholder='Enter your name'
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group-01'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  value={email}
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
                  value={password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group-01'>
                <input
                  type='password'
                  className='form-control'
                  id='password2'
                  name='password2'
                  placeholder='Confirm password'
                  value={password2}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group-01'>
                <button className='btn btn-block'>Submit</button>
              </div>
            </form>
          </section>
    </>
  )
}

export default Register