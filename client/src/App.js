import React from 'react'
import './App.css'
import useAuth from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './containers/MainPage/MainPage'

function App() {
	const { token, login, logout, userId, ready } = useAuth()
	const isAuthenticated = !!token

	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthenticated
		}}>
			<Switch>
				<Route path='/' component={MainPage} />
				<Redirect to='/login' />
			</Switch>
		</AuthContext.Provider>
	)
}

export default App
