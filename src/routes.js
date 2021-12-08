import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom';

import Layout from './hoc/layout';

import Home from './pages/Home'
import Author from './pages/Author'
import Authors from './pages/Authors'
import Word from './components/Word'
import SubmitAuthor from './pages/SubmitAuthor'
import Profile from './pages/EditProfile'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import ChangePassword from './pages/ChangePassword'
import Tag from './pages/Tag'
import Category from './pages/Category'
import Modal from './components/Modal'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Collection from './pages/Collection'
import Following from './pages/Following'
import Follower from './pages/Follower';

import Faq from './pages/Faq';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

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
                <Route path="/cat/:cat" exact component={Category} />
                <Route path="/search/:keyword" exact component={Search} />
                <Route path="/submit_author" exact component={SubmitAuthor} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/change_password" exact component={ChangePassword} />
                <Route path="/detail/:id" exact component={Detail} />
                <Route path="/faq" exact component={Faq} />
                <Route path="/blogs" exact component={Blog} />
                <Route path="/blog/:slug" exact component={BlogDetail} />
                <Route path="/:id" exact component={Dashboard} />
                <Route path="/:id/collections" exact component={Collection} />
                <Route path="/:id/followers" exact component={Follower} />
                <Route path="/:id/following" exact component={Following} />

                
            </Switch>

            {background && <Route path="/detail/:id" children={<Modal />} />}
        </Layout>
        
    )
}

export default Routes
