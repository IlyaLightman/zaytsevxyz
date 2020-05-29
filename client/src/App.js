import React from 'react'
import './App.css'
import useAuth from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './containers/MainPage/MainPage'
import Layout from './hoc/Layout/Layout'
import AuthPage from './containers/AuthPage/AuthPage'

function App() {
	const { token, login, logout, userId/*, ready */ } = useAuth()
	const isAuthenticated = !!token

	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthenticated
		}}>
			<Switch>
				<Layout>
					<Route path='/auth' component={AuthPage} />
					<Route exact path='/' component={MainPage} />
					<Redirect to='/' />
				</Layout>
			</Switch>
		</AuthContext.Provider>
	)
}

export default App
