import { Link } from "react-router-dom"

const Error = () => {
    return (
        <section>
            <h1>You are in the wrong side, </h1>
            <Link to='/'>
                go back
            </Link>
            
        </section>
    )
}

export default Error