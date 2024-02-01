import { CardData } from './common/CardData'
import { useFetchVideos } from '../hooks/useVideos'
import { useSeenVideos } from '../store/seenVideos'
import TextAnimatedGradient from './common/TextAnimatedGradient'

export function Home() {
	const { seenVideos } = useSeenVideos()
	const { data } = useFetchVideos()

	return (
		<>
			<TextAnimatedGradient text={'My Frontend route'} />
			<div className='flex flex-wrap gap-4 mt-8'>
				{data?.map((video) => (
					<CardData
						video={video}
						isSeen={seenVideos.includes(video._id)}
						key={video._id}
					/>
				))}
			</div>
		</>
	)
}
