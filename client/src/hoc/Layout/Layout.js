import React from 'react'
import Navbar from '../../components/UI/Navbars/Navbar/Navbar'

const Layout = props => {

	return (
		<React.Fragment>
			{
				props.showBar ?
					<Navbar
						isAuthenticated={props.isAuthenticated} />
					: null
			}

			{
				props.children
			}
		</React.Fragment>
	)
}

export default Layout