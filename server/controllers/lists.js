import express from 'express'
import ListMessage from '../models/listMessage.js'

const router = express.Router()

//method: get
//get all lists
export const getLists = async (req, res) => {
  ListMessage.find()
    .then((lists) => res.json(lists))
    .catch((err) => res.status(400).json('Error: ' + err))
}

//method: get
//get a list
export const getList = async (req, res) => {
  ListMessage.findById(req.params.id)
    .then((list) => res.json(list))
    .catch((err) => res.status(400).json('Error: ' + err))
}

//method:post
//add a list
export const addList = async (req, res) => {
  const Title = req.body.Title
  const Year = req.body.Year

  const newListMessage = new ListMessage({
    Title,
    Year,
  })

  newListMessage
    .save()
    .then(() => res.json('A list added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
}

//method: delete
//a list
//delete a list

export const deleteList = async (req, res) => {
  ListMessage.findByIdAndDelete(req.params.id)
    .then(() => res.json('A list deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err))
}

export default router
