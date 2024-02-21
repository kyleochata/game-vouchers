import { Schema, model } from 'mongoose'

export const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discounts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Discount',
    },
  ],
  regions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Region',
    },
  ],
  editions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Edition',
    },
  ],
  ratings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Rating',
    },
  ],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
})

const Game = model('Game', gameSchema)

export default Game
