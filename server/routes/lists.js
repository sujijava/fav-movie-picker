import express from 'express'

import { getLists, getList, addList, deleteList } from '../controllers/lists.js'

const router = express.Router()

router.get('/', getLists)
router.get('/:id', getList)
router.post('/', addList)
router.delete('/:id', deleteList)

export default router
