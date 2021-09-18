import "./_NotFound404.scss";
import Found from "./generalerror-404.svg"
import { useHistory } from "react-router";

const NotFound404 = ()=>{

    const history = useHistory()

    return (
        <div className='Not-Found-404'>
            <div className='found-404'>
                <img src={Found} alt={'404-not-found'}></img>
                <p> ¡We are sorry, this page is not exist!</p>
                <button onClick={()=>{history.goBack()}}>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default NotFound404