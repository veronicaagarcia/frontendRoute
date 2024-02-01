import { Card, Button, Callout } from '@tremor/react'
import { Video } from '../../hooks/types'
import { useSeenVideos } from '../../store/seenVideos'
import { useNavigate } from 'react-router'

type CardDataProp = {
	video: Video
	isSeen: boolean
}

export function CardData({ video, isSeen }: CardDataProp) {
	const addVideo = useSeenVideos((state) => state.addVideo)
	const removeVideo = useSeenVideos((state) => state.removeVideo)
	const { isVideoDetail } = useSeenVideos()
	const viewMore = useSeenVideos((state) => state.viewMore)
	const backHome = useSeenVideos((state) => state.backHome)
	const navigate = useNavigate()

	const handleToggle = () => {
		if (isSeen) {
			const wasSeenF = video.wasSeen === false
			removeVideo(video._id, wasSeenF)
			return
		}
		addVideo(video._id)
		video.wasSeen = true
	}

	const detailOrHome = () => {
		if (isVideoDetail) {
			backHome(event)
			navigate('/')
			return
		}
		viewMore(event)
		navigate(`/details?Id=${video._id}`)
	}

	return (
		<Card
			className={
				isVideoDetail ? 'max-w-lg mx-auto mt-5' : 'max-w-sm w-80 mx-auto h-fit'
			}
			decoration='top'
			decorationColor='cyan'
		>
			<h2 className='text-center mb-3 text-indigo-300 font-medium'>
				{isVideoDetail ? video.title : `${video.title.substring(0, 50)}...`}
			</h2>
			<h3 className='mb-2 text-center'>
				{isVideoDetail
					? video.description
					: `${video.description.substring(0, 95)}...`}
			</h3>
			{isVideoDetail && (
				<>
					<div className='flex justify-around'>
						<Callout className='mt-4' title='YouTube' color='indigo'>
							<a
								className='mb-2 text-center mt-2 hover:text-cyan-300'
								href={video.url}
								target='_blank'
							>
								Go Link
							</a>
						</Callout>
						{/* <Callout className='mt-4' title='Likes' color='cyan'>
								{video.likes}
							</Callout> */}

						<Callout className='mt-4' title='Github' color='indigo'>
							<a
								className='mb-2 text-center mt-2 hover:text-cyan-300'
								href={video.repository}
								target='_blank'
							>
								Go repository
							</a>
						</Callout>
						{/* <Callout className='mt-4' title='Subscribers' color='cyan'>
								{video.subscribers}
							</Callout> */}
					</div>
					<Callout className='mt-4' title='Keywords' color='teal'>
						{video.topics}
					</Callout>
					<hr className='mb-4 mt-6' />
				</>
			)}
			<p className='mb-6 mt-4 text-end font-thin'>Author: {video.author}</p>
			<div className='flex justify-around '>
				<Button
					variant={isSeen ? 'primary' : 'secondary'}
					color={isSeen ? 'teal' : 'orange'}
					size='lg'
					onClick={handleToggle}
				>
					{isSeen ? 'Already saw' : "Don't seen"}
				</Button>
				<Button
					color='cyan'
					className='btnFav ml-5 transparent'
					size='lg'
					onClick={detailOrHome}
				>
					{isVideoDetail ? 'Back home' : 'View more'}
				</Button>
			</div>
		</Card>
	)
}
