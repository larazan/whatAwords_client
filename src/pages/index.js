import React from 'react'
import Home from '../components/Home'
import Author from '../components/Author'
import Word from '../components/Word'
import SubmitAuthor from '../components/SubmitAuthor'
import Profile from '../components/Profile'
import Dashboard from '../components/Dashboard'
import Register from '../components/Register'
import Login from '../components/Login'
import ChangePassword from '../components/ChangePassword'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Pages = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/author" component={Author} />
            <Route path="/word" component={Word} />
            <Route path="/submit-author" component={SubmitAuthor} />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/change-password" component={ChangePassword} />
        </Switch>
    )
}

export default Pages
