import { CardData } from './common/CardData'
import { useFetchVideos } from '../hooks/useVideos'
import { useSeenVideos } from '../store/seenVideos'
import { Video } from '../hooks/types'
import TextAnimatedGradient from './common/TextAnimatedGradient'

export function VideoDetails() {
	const query = new URLSearchParams(window.location.search)
	const Id = query.get('Id')
	const { seenVideos } = useSeenVideos()
	const { data } = useFetchVideos()

	const videoDetail: Video | undefined = data?.find((video) => video._id === Id)
	console.log(videoDetail)
	return (
		<section className='w-full h-full'>
			<TextAnimatedGradient text={'Video Details'} />
			{videoDetail && (
				<CardData
					video={videoDetail}
					isSeen={seenVideos.includes(videoDetail._id)}
					key={videoDetail._id}
				/>
			)}
		</section>
	)
}
