import { Link } from "react-router-dom";

import cssVariableName from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={cssVariableName.header}>
            <div className={cssVariableName.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/">All Events</Link></li>
                    <li><Link to="/new-meetup">New Meetup</Link></li>
                    <li><Link to="/favourites">Favourites Page</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;