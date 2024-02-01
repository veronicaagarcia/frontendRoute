import { RequestHandler } from 'express'
import  model from './video'

export const getVideos : RequestHandler = async (req, res) => {
    try {
        const getVideos = await model.find() 
        res.json(getVideos)
    } catch (error) {
        res.json(error)
    }
}

export const getVideo : RequestHandler = async (req, res) => {
    const videoFound = await model.findById(req.params.id)
    res.json(videoFound)
    if(!videoFound) {
        res.status(204).json('video not found')
    }
}

export const createVideos : RequestHandler = async (req, res) => {
    const videoFound = await model.findOne({url:req.body.url})
    if (videoFound){
        res.status(301).json({message: "The URL alredy exists"})
    }
    const video = new model (req.body)
    const savedVideo = await video.save()
    res.json(savedVideo)
}

export const deleteVideos : RequestHandler = async (req, res) => {
    const videoDelete = await model.findByIdAndDelete(req.params.id)
    res.json('video deleted')
    if(!videoDelete) {
        res.status(204).json('video not found')
    }
}

export const updateVideos : RequestHandler = async (req, res) => {
    const videoUpdate = await model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(videoUpdate)
    if(!videoUpdate) {
        res.status(204).json('video not found')
    }
}