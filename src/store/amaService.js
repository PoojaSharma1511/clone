import axios from 'axios'

// const API_URL = "api/user"

// Register User

const register = async (userData) => {

    const response = await axios.post("https://reacte-e4867-default-rtdb.firebaseio.com/register.json", userData)
    if(response.data){
        localStorage.setItem("user" , JSON.stringify(response.data))
    }

    return response.data
}

// login user

const login =  async (userData) =>{
    const response = await axios.post("https://reacte-e4867-default-rtdb.firebaseio.com/login.json", userData)
    if(response.data){
        localStorage.setItem("user" ,JSON.stringify(response.data))
    }
    return response.data
}

// logout user
const logout =()=>{
    localStorage.removeItem('user')
}

const amaService  = {
    register,
    login,
    logout
}







export default amaService