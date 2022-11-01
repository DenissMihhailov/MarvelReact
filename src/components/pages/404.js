import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Lehte pole olemas</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Tagasi pealehele</Link>
        </div>
    )
}

export default Page404;