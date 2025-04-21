import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Link } from "react-router-dom"

const LandingPage = () => {
    const {user, setUser} = useContext(UserContext)
    console.log(user);
    
    return(
    
        <>

    {user ? 
        <div> 
        <img src="https://cdn.onefc.com/wp-content/uploads/2023/09/Superlek-Kiatmoo9-Rodtang-Jitmuangnon-ONE-Friday-Fights-34-82-1200x800.jpg" alt="Muay thai fight" className="fight-img" style={{width:"800px"}}/>
        <h1>Welcome {user.username},</h1> 
        
        <h3>This application allows for you to upload fighters to our network, which is full of fighters at all levels, different weight classes and ages. This app will allow you to network with different fighters to plan training sessions, find sparring partners with the same ability, find fighters to orgnaize fights and to make friends in the community of Muay Tahi in the UK </h3>
        
        </div> : <> 
        <div>
        <img src="https://cdn.onefc.com/wp-content/uploads/2023/09/Superlek-Kiatmoo9-Rodtang-Jitmuangnon-ONE-Friday-Fights-34-82-1200x800.jpg" alt="Muay thai fight" className="fight-img" style={{width:"800px"}}/>

        <h1>Welcome, User </h1>

        <h3>Please sign in or sign up to use this website to network and connetc with a the Uk's Muay Thai community!!</h3>
            <button><Link to='/sign-up'>Sign Up</Link></button>
            <button><Link to='/sign-in'>Sign In</Link></button>
        </div>
        </>
    } 

    </>

    )
}

export default LandingPage