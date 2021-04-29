import mongoose from 'mongoose'

const listSchema = mongoose.Schema({
  Title: String,
  Year: String,
  imdbID: String,
})

var ListMessage = mongoose.model('ListMessage', listSchema)

export default ListMessage
