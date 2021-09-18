import { Link } from "react-router-dom"

const CategoriesFirst = ()=>{


    return <div className='categoriesFirst'>
        <div className='filter'>
            <div className='title-secction-into'>
                <h1>Watch more than 10000 movies and series for free.</h1>
                <p>Enjoy more benefits by being part of our community</p>
            </div>
            <Link className='subscribe-btn' to='/subscribe'>Subscribe</Link>
        </div>
    </div>
}

export default CategoriesFirst