import React from 'react'
import Radium from 'radium'

const Input = props => {
	const {
		title,
		placeholder,
		invalid,
		onChange,
		type,
		value
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
					padding: '5px 5px 5px 10px',
					width: '225px',
					height: '25px',
					outline: 'none'
				}}
				value={value}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}

export default Radium(Input)