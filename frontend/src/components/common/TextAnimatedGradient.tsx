interface TextProp {
	text: string
}

const TextAnimatedGradient = ({ text }: TextProp) => {
	return (
		<span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c9cacc] bg-[200%_auto] bg-clip-text text-xl text-transparent mt-2'>
			{text}
		</span>
	)
}

export default TextAnimatedGradient
