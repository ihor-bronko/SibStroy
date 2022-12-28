import React from 'react'
import testIcon from './test-icon.svg'
import styles from './TestBtn.module.scss'

const TestBtn = () => {
	return (
		<a
			href='src/components/UI/Button/TestBtn#'
			className='btn-outline'
			target='_blank'
			rel='noreferrer'
		>
			<img className={styles.testBtn} src={testIcon} alt='Пройти тест' />
			Пройти тест
		</a>
	)
}

export default TestBtn
