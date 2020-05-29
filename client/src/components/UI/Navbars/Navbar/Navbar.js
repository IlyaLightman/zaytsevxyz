import React, { useContext } from 'react'
import '../Bar.scss'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext'

const Navbar = props => {
	const { isAuthenticated } = useContext(AuthContext)
	console.log(useContext(AuthContext))

	return (
		<div className='Bar'
		     style={{
			     position: 'relative',
			     background: 'rgb(53,73,255)'
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

			{isAuthenticated ?
				<div className='RightButtons'>
					<NavLink to='/shop' className='NavLink'>Магазин</NavLink>
					<NavLink to='/profile' className='NavLink'>Профиль</NavLink>
					<NavLink to='/logout' className='NavLink'>Выйти</NavLink>
				</div> :
				<div className='RightButtons'>
					<NavLink to='/shop' className='NavLink'>Магазин</NavLink>
					<NavLink to='/auth' className='NavLink'>Войти</NavLink>
				</div>}
		</div>
	)
}

export default Navbar