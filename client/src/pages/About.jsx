import { useAuth } from "../store/auth"

const About = () => {

    const { user } = useAuth();

    return(
        <section>
            <p>Welcome, {user ? `${user.username} to our website ` : ` to our website`} </p>
            <h1>Hello About us page</h1>
        </section>
    )
}

export default About