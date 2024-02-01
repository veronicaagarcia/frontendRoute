import { Router } from 'express'
import * as videoCtrl from './videosController'
const videosRoutes = Router()

videosRoutes.get('/videos', videoCtrl.getVideos)
videosRoutes.post('/videos', videoCtrl.createVideos)
videosRoutes.delete('/videos/:id', videoCtrl.deleteVideos)
videosRoutes.get('/videos/:id', videoCtrl.getVideo)
videosRoutes.put('/videos/:id', videoCtrl.updateVideos)

export default videosRoutes