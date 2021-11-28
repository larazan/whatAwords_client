import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom';

import Layout from './hoc/layout';

import Home from './components/Home'
import Author from './components/Author'
import Authors from './components/Authors'
import Word from './components/Word'
import SubmitAuthor from './components/SubmitAuthor'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Login from './components/Login'
import ChangePassword from './components/ChangePassword'
import Tag from './components/Tag'
import ModalExample from './components/ModalExample'
import Example from './components/Example'
import Detail from './components/Detail'
import Search from './components/Search'
import Collection from './components/Collection'
import Following from './components/Following'
import Follower from './components/Follower';
import HtmlToImage from './components/HtmlToImage';


const Routes = () => {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <Layout>
            <Switch location={background || location}>
                <Route path="/" exact component={Home} />
                <Route path="/page/:pageNumber" exact component={Home} />
                <Route path="/author/:slug?" exact component={Author} />
                <Route path="/authors/:id?" exact component={Authors} />
                <Route path="/word" exact component={Word} />
                <Route path="/tags/:tag" exact component={Tag} />
                <Route path="/search/:keyword" exact component={Search} />
                <Route path="/submit_author" exact component={SubmitAuthor} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/change_password" exact component={ChangePassword} />
                <Route path="/example" exact component={Example} />
                <Route path="/detail/:id" exact component={Detail} />
                <Route path="/:id" exact component={Dashboard} />
                <Route path="/:id/collections" exact component={Collection} />
                <Route path="/:id/followers" exact component={Follower} />
                <Route path="/:id/following" exact component={Following} />
                <Route path="/htmlimage" exact component={HtmlToImage} />
            </Switch>

            {background && <Route path="/quote/:id" children={<ModalExample />} />}
        </Layout>
        
    )
}

export default Routes
