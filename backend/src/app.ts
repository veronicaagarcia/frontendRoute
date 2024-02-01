import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import videosRoutes from './routes/videosRoutes'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))

app.use(videosRoutes)

export default app