import { useState } from "react"
import {useNavigate} from "react-router-dom"
const URL = "http://localhost:5000/api/auth/register";
import {useAuth} from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {

    const[user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();

    const {storeTokenInLS} = useAuth();  
    
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ... user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user);

        try{
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
    
                },
                body: JSON.stringify(user),
            });
    
            // console.log(response);
            const res_data = await response.json();
            console.log("res from server", res_data.extraDetails);

            if(response.ok){
                // localStorage.setItem("token", res_data.token);
                storeTokenInLS(res_data.token);

                setUser({username: "", email: "", phone: "", password: ""});
                navigate("/");
                toast.success("Registration Successfull");
            }
            else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        }
        catch(error){
            console.log("register", error);
        }
    };

    return(
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/Images/img3.png" alt="" width={400} height={500} />
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">registration form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text" name="username" placeholder="username" id="username" required autoComplete="off" value={user.username} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email" name="email" placeholder="enter your email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input type="number" name="phone" placeholder="phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input type="password" name="password" placeholder="password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                </div>

                                <br />

                                <button type="submit" className="btn btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Register