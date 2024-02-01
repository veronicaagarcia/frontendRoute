import TextAnimatedGradient from './common/TextAnimatedGradient'

export function About() {
	const textEn =
		'I created this project as a form of study note. It is a guide with some of the latest videos that help me practice and that I always want to have on hand. And it contains some of what I consider to be the best programming teachers.'
	const textEs =
		"Este proyecto lo cree como forma de 'tomar apuntes'. Es una guia con alguno de los ultimos videos que me ayudan a practicar y que quiero tener siempre a mano. Y contiene a alguno de los que yo considero como de los mejores docentes en programacion. Obviamente no los conozco todos y acepto todo aporte."

	return (
		<>
			<TextAnimatedGradient text={'My cheatsheet'} />
			<div className='mx-auto p-32'>
				<div>{textEn}</div>
				<div>{textEs}</div>
			</div>
		</>
	)
}
