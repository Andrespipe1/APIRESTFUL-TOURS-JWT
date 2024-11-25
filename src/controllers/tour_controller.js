

import tourModel from '../models/tour.js'

import {v4 as uuidv4} from 'uuid'


const getAllToursControllers = async(req,res) => {
    const tours = await tourModel.getAllToursModel()
    res.status(200).json(tours)
}


const getAlltourControllerByID = async (req, res) => {
    const {id} = req.params
    try {
        const tour = await tourModel.getTourByIdModel(id)
        const status = tour.error ? 404 : 200
        res.status(status).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}


const createTourController = async (req,res) => {
    const newTourData = {
        id:uuidv4(),
        ...req.body
    }
    try {
        const tour = await tourModel.createTourModel(newTourData)
        res.status(201).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateTourController = async(req,res) => {
    const {id} = req.params
    try {
        const tour = await tourModel.updateTourModel(id,req.body)
        res.status(200).json(tour)
    } catch (error) {
        req.status(500).json(error)
    }
}


const deleteTourController = async (req,res) => { 
    const {id} = req.params
    try {
        await tourModel.deleteTourModel(id)
        res.status(200).json({msg:"Tour eliminado"})
    } catch (error) {
        res.status(500).json(error)
    }
}


const getTourByIDController = async (req,res) => {
    const {id} = req.params
    try {
        const tour = await tourModel.getTourByID(id)
        res.status(200).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}





export {
    getAllToursControllers,
    getAlltourControllerByID,
    createTourController,
    updateTourController,
    deleteTourController,
    getTourByIDController
}
