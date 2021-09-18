import { BrowserRouter as Router,  Link, Switch, Route} from "react-router-dom"
import Footer from "./Footer"
import "./header.scss"
 const Header = props =>{
    
    window.onscroll = ()=>{
        const y= window.scrollY;
    }



    return (
        <>
        <Router>
            <Switch>
                <Route path='/'>
                <nav className='p-nav'>
                    <a className='Link' href='/'>
                        <span className='logo'></span>
                        <h1>Movies and series</h1>
                    </a>
                    <ul className='list-menu'>
                        <li className='item-a'>
                            <Link className='link-action' to=''>Log In</Link>
                        </li>
                        <li className='item-b'>
                            <Link className='link-action' to=''>Subscribe</Link>
                        </li>
                    </ul>
            </nav>
                </Route>
            </Switch>
        </Router>
        {props.children}
        <Router>
            <Switch>
                <Route path='/'>
                    <Footer></Footer>
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default Header