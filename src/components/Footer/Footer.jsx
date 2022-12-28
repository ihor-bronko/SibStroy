import React from 'react'
import VK from '../../img/icons/vk.svg'
import Instagram from '../../img/icons/instagram.svg'
import Twitter from '../../img/icons/twitter.svg'
import LinkedIn from '../../img/icons/linkedIn.svg'
import Telegram from '../../img/icons/logo_telegram.svg'
import './Footer.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a
								href='https://vk.com/sibirstroiproekt'
								target='_blank'
								rel='noreferrer'
							>
								<img src={VK} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#'>
								<img src={Instagram} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#'>
								<img src={Twitter} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#'>
								<img src={LinkedIn} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#'>
								<img src={Telegram} alt='Link' />
							</a>
						</li>
					</ul>
					<div className='copyright'>
						<p>© 2009-2023 Сибирь строй Проект</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
