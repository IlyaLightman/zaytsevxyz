import React from 'react'
import './MainPage.scss'
import Vanta from '../../components/Panels/Vanta/Vanta'
import Mainbar from '../../components/UI/Navbars/Mainbar/Mainbar'

const MainPage = () => {
	return (
		<div className='Main'>
			<Mainbar />
			<Vanta>
				<div className='TheBestName'>
					<h1>Илья Зайцев</h1>
				</div>
			</Vanta>
			<h1>zaytsev.xyz</h1>
		</div>
	)
}

export default MainPage