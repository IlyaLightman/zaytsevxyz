import React from 'react'
import './App.css'
import useAuth from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './containers/MainPage/MainPage'
import Layout from './hoc/Layout/Layout'
import AuthPage from './containers/AuthPage/AuthPage'
import LogoutPage from './containers/AuthPage/LogoutPage'
import BlogPage from './containers/BlogPage/BlogPage'
import PostCreator from './containers/PostCreator/PostCreator'

function App() {
	const { token, login, logout, userId/*, ready */, userData } = useAuth()
	const isAuthenticated = !!token

	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthenticated, userData
		}}>
			<Switch>
				<Layout>
					<Route path='/auth' component={AuthPage} />
					<Route path='/logout' component={LogoutPage} />
					<Route path='/blog' component={BlogPage} />
					<Route path='/blog/:id' component={BlogPage} />
					<Route path='/create' component={PostCreator} />
					<Route exact path='/' component={MainPage} />
					<Redirect to='/' />
				</Layout>
			</Switch>
		</AuthContext.Provider>
	)
}

export default App
