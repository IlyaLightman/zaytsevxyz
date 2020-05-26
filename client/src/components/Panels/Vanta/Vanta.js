import React, { useEffect, useRef, useState } from 'react'
import './Vanta.scss'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

const Vanta = props => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const myRef = useRef(null)

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(WAVES({
				el: myRef.current,
				THREE: THREE,
				mouseControls: true,
				touchControls: true,
				minHeight: 500.00,
				minWidth: 500.00,
				scale: 1.00,
				scaleMobile: 1.00,
				color: 0x4b78,
				shininess: 25.00,
				zoom: 1.25
			}))
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])
	return <div ref={myRef}>
		{ props.children }
	</div>
}

export default Vanta