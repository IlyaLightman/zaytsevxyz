// Навбар для главной страницы
// Прозрачный с абсолютной позицией
// Один параметр - цвет

import React, { useContext } from 'react'
import '../Bar.scss'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext'

const Mainbar = props => {
	const { isAuthenticated } = useContext(AuthContext)

	return (
		<div className='Bar'
			style={{
				position: 'absolute'
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

export default Mainbar