import React from 'react'
import './App.css'
import useAuth from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
	const { token, login, logout, userId, ready } = useAuth()
	const isAuthenticated = !!token

	return (
		// <div className="App">
		//   <h1>zaytsev.xyz</h1>
		// </div>
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthenticated
		}}>
			<Switch>
				<Redirect to='/login' />
			</Switch>
		</AuthContext.Provider>
	)
}

export default App
