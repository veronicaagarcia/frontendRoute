import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SeenVideosStore = {
    seenVideos: string[]
    wasSeen: boolean
    addVideo: (id: string) => void
    removeVideo: (id: string, wasSeenF: boolean) => void
    isVideoDetail: boolean
    viewMore: (event: Event | undefined) => void
	backHome: (event: Event | undefined) => void
}

export const useSeenVideos = create(persist<SeenVideosStore>((set)=>({
    seenVideos : [],
    wasSeen: false,
    addVideo : (id) => {
        set((state) => ({ seenVideos: [...state.seenVideos, id]}))
    },
    removeVideo : (id, wasSeenF) => {
        set((state) => ({ seenVideos: state.seenVideos.filter(v => v !== id)}))
        // set((state) => ({ wasSeen: state.wasSeen = false}))
        set((state) => ({ wasSeen: state.wasSeen = wasSeenF}))
    },
    isVideoDetail : false,
    viewMore : (event) => {
        event?.preventDefault()
        set((state) => ({isVideoDetail: state.isVideoDetail = true}))
    },
	backHome : (event) => {
        event?.preventDefault()
        set((state) => ({isVideoDetail: state.isVideoDetail = false}) )
    }
}), {
    name:"seenVideosStorage"
}))