import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Loadable from 'react-loadable';
import loading from '../Components/loading'

const splitting = (loader) => Loadable({
    loader,
    loading
});

const router = [
    {
        name: 'Home',
        path: '/home',
        com: () => import('../Pages/home')
    }, {
        name: 'About',
        path: '/About',
        com: () => import('../Pages/About')
    }, {
        name: 'Users',
        path: '/Users',
        com: () => import('../Pages/Users')
    }, {
        name: 'Test',
        path: '/Test',
        com: () => import('../Pages/Test')
    }
]

const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    {router.map((item, index) => <li key={`li${index}`}><Link to={item.path}>{item.name}</Link></li>)  }
                </ul>
            </nav>

            {router.map((item, index) => <Route key={index.toString()} path={item.path}
                                                component={splitting(item.com)}/>) }
        </div>
    </Router>
);

export default AppRouter;