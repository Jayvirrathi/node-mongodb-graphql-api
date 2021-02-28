import mongoose from 'mongoose';

export const Post = mongoose.model('Post', {
  title: String,
  content: String,
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
