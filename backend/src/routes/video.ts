import {Schema, model } from 'mongoose'

const videoSchema = new Schema ({
    title :{
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    author: {
        type: String,
        require: true,
        trim: true
    },
    url: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    // likes: {
    //     type: String,
    //     trim: true
    // },
    // subscribers: {
    //     type: String,
    //     trim: true
    // }, 
    topics: {
        type: String,
        trim: true
    },
    repository: {
        type: String,
        trim: true
    },
    wasSeen: {
        type: Boolean
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('video', videoSchema)