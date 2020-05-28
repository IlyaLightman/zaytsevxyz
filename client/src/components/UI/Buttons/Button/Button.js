import React from 'react'
import Radium from 'radium'

// Общая кнопка сайта
const Button = props => {
	const {
		type, // primary, success, error
		theme, // light, dark
		title,
		onClick
	} = props

	const styles = {
		'primary': {
			'button': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '25px 12px 25px 12px',
				padding: '0 12px 0 12px',
				maxWidth: '150px',
				height: '50px',
				background: theme === 'light' ?
					'rgb(219,233,248)' : 'rgb(76,96,212)',
				// border: '1px solid black',
				borderRadius: '2px',
				cursor: 'pointer',
				transition: '0.33s',

				':hover': {
					background: theme === 'light' ?
						'rgb(171,200,232)' : 'rgb(108,148,222)'
				}
			},
			'text': {
				color: theme === 'light' ? 'black' : 'white',
				margin: '0 15px 0 15px'
			}
		},
		'success': {

		}
	}

	return (
		<div
			style={styles[type]['button']}
			onClick={onClick}
		>
			<p
				style={styles[type]['text']}
			>{title}</p>
		</div>
	)
}

export default Radium(Button)