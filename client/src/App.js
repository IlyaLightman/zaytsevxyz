import React from 'react'
import './App.css'
import useAuth from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './containers/MainPage/MainPage'
import Layout from './hoc/Layout/Layout'

function App() {
	const { token, login, logout, userId, ready } = useAuth()
	// const isAuthenticated = !!token
	const isAuthenticated = false

	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthenticated
		}}>
			<Switch>
				<Layout
					showBar={true}>
					<Route path='/' component={MainPage} />
					<Redirect to='/' />
				</Layout>
			</Switch>
		</AuthContext.Provider>
	)
}

export default App
