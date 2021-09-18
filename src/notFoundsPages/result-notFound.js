import "./notFoundSearch.scss";
import srcError from "./error-404.svg"

const ResultNotFound = ({search})=>{

    return <div className='not-found'>
        <div className='not-found-aSearch'>
            <span className='svg-not-found'>
                <img src={srcError} alt='not-found-400'/>
            </span>
            <span className='text-not-found-search'>
                <h2 className='t1'>No results were found for</h2>
                <p className='movie-on'>" {search} "</p>
                <p className='p1'>Try another movie, you can search by title, name or related information.</p>
            </span>
        </div>
    </div>

}

export default ResultNotFound