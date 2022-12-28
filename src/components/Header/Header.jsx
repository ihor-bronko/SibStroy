import React from 'react'
import './Header.scss'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						Привет, мы <em>Сибирь Cтрой Проект</em>
					</strong>
				</h1>
				<div className='header__text'>
					<p>ТЕКСТ</p>
				</div>
			</div>
		</header>
	)
}

export default Header
