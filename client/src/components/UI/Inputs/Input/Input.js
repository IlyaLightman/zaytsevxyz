import React from 'react'
import Radium from 'radium'

const Input = props => {
	const {
		title,
		placeholder,
		invalid,
		onChange
	} = props

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center'
		}}>
			<p style={{
				color: invalid ? 'red' : 'black',
				fontFamily: 'Bahnschrift',
				marginRight: '20px'
			}}
			>{title}</p>
			<input
				style={{
					border: '1px solid gray',
					borderRadius: '10px',
					padding: '5px',
					width: '225px',
					height: '25px',
					outline: 'none'
				}}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}

export default Radium(Input)