import {Link} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import { reset , logout } from '../store/amaSlice'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const cart = useSelector(state => state.cart)
  const {user} = useSelector(state=> state.ama)
  const userName = (user)=>{
    if(!user){
      return "Login First"
    }else{
      return user.name
    }
    
  }

  const handleLogout = ()=>{
      dispatch(logout())
      dispatch(reset())
      navigate('/home')

  }
  
  
  return (
    <nav>
       <Link to={"/home"}> <h1 className="logo">My.Store</h1></Link>
        <ul className="nav-links">
            
            
            <Link to={"/cart"}><li> <button className="cart"> Cart ({cart.length}) </button> </li></Link>
           
              {
              user ?(
               <Link to={"/login"}><li> <button onClick={handleLogout} className="cart"> Logout  </button> </li></Link> 

              ):(
                <Link to={"/login"}><li> <button className="cart"> Login  </button> </li></Link>
              )
              }
               <Link ><li> <button className="cart"> {userName(user)}  </button> </li></Link> 
        </ul>
    </nav>
  )
}

export default Navbar