import React, { useContext } from 'react'
import '../Bar.scss'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext'

const Navbar = props => {
	const { isAuthenticated } = useContext(AuthContext)

	return (
		<div className='Bar'
		     style={{
			     position: 'relative',
			     background: 'blue'
		     }}
		>
			<div className='LeftButtons'>
				<NavLink to='/' className='NavLink'>Главная</NavLink>
				<NavLink to='/blog' className='NavLink'>Блог</NavLink>
				<NavLink to='/projects' className='NavLink'>Проекты</NavLink>
			</div>
			<div className='Logo'>
				<h3>zaytsev.xyz</h3>
			</div>
			<div className='RightButtons'>
				<NavLink to='/shop' className='NavLink'>Магазин</NavLink>

				{ isAuthenticated ?
					<div>auth</div> :
					<NavLink to='/auth' className='NavLink'>Войти</NavLink>
				}
			</div>
		</div>
	)
}

export default Navbar