import React from 'react'
import '../Bar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = props => {

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

				{ props.isAuthenticated ?
					<div>auth</div> :
					<NavLink to='/auth' className='NavLink'>Войти</NavLink>
				}
			</div>
		</div>
	)
}

export default Navbar