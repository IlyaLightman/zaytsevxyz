import React from 'react'
import Navbar from '../../components/UI/Navbars/Navbar/Navbar'

const notForRenderPathnames = [
	'/'
]

const Layout = props => {
	const shouldNavbarRender = !notForRenderPathnames.includes(
		props.location.pathname)

	return (
		<React.Fragment>
			{
				shouldNavbarRender ?
					<Navbar
						isAuthenticated={props.isAuthenticated}
						currRoute={props.location.pathname}/>
					: null
			}

			{
				props.children
			}
		</React.Fragment>
	)
}

export default Layout