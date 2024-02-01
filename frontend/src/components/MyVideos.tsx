import { Button } from '@tremor/react'
import { useFetchVideos } from '../hooks/useVideos'
import { useSeenVideos } from '../store/seenVideos'
import { CardData } from './common/CardData'
import TextAnimatedGradient from './common/TextAnimatedGradient'
import { Video } from '../hooks/types'

export function MyVideos() {
	const { seenVideos } = useSeenVideos()
	const { data } = useFetchVideos()
	let saw: Array<Video> | undefined = []

	function sawVideos() {
		saw = data?.filter((video) => video.wasSeen === false)
		console.log(saw)
		return saw
	}

	return (
		<>
			<TextAnimatedGradient text={'List of Videos already saw'} />
			<div>
				<Button onClick={sawVideos}>ya vi</Button>
				{/* <button onClick={myVideos}>no vi</button> */}
			</div>
			<div className='flex flex-wrap gap-4 mt-8'>
				<h3>lalalalaalalaalalla</h3>
				<p>ksjsksksksk</p>
				{saw.map((video) => (
					<>
						<p>titulo:{video.title}</p>
						<CardData
							key={video._id}
							video={video}
							isSeen={seenVideos.includes(video._id)}
						/>
					</>
				))}
			</div>
		</>
	)
}
