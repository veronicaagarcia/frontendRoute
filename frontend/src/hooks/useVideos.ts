import { useQuery } from '@tanstack/react-query'
import { api } from '../api/youTube'
import { Video } from './types'

async function fetchVideos () {
    const res = await api.get<Video[]>('/videos')
    const data: Array<Video> = res.data
    return data
}

export function useFetchVideos () {
    return useQuery({queryKey:['youTubeVideos'], queryFn: fetchVideos})
}