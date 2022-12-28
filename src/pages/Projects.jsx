import React from 'react'
import Project from '../components/Project/Project'
import projectsList from '../helpers/projectsList'

const Projects = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>BEMBI Топ Hr</h2>
				<ul className='projects'>
					{projectsList.map((item, index) => (
						<Project
							key={item.id}
							title={item.title}
							skills={item.skills}
							img={item.img}
							imgBig={item.imgBig}
							index={index}
						/>
					))}
				</ul>
			</div>
		</main>
	)
}

export default Projects
