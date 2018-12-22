import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable';
import loading from '../Components/loading'

const home = Loadable({
    loader: () => import('../Pages/home'), // oh no!
    loading: loading,
});
const about = Loadable({
    loader: () => import('../Pages/About'), // oh no!
    loading: loading,
});
const users = Loadable({
    loader: () => import('../Pages/Users'), // oh no!
    loading: loading,
});

const obj = {home,about,users}


const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={obj.home} />
            <Route path="/about/" component={obj.about} />
            <Route path="/users/" component={obj.users} />
        </div>
    </Router>
);

export default AppRouter;