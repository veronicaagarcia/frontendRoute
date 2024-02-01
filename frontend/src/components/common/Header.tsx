import { Link } from 'react-router-dom'
import { useSeenVideos } from '../../store/seenVideos'

export function Header() {
	const { isVideoDetail } = useSeenVideos()
	return (
		<header className={isVideoDetail ? `hidden` : `w-full p-6 bg-primary`}>
			<ul className='w-full mx-auto flex justify-evenly'>
				<Link to='/' className='w-1/6 text-lg font-large'>
					Home
				</Link>
				<Link
					to='/myVideos'
					className='w-1/6 text-white hover:text-orange-300 text-lg font-medium'
				>
					My videos
				</Link>
				{/* <Link
					to='/videosToWatch'
					className='w-1/6 text-white hover:text-orange-300 text-lg font-medium'
				>
					Library
				</Link> */}
				<Link
					to='/about'
					className='w-1/6 text-white hover:text-orange-300 text-lg font-medium'
				>
					About this proyect
				</Link>
			</ul>
		</header>
	)
}
