import mongoose from 'mongoose';

export const Comment = mongoose.model('comment', {
  content: String,
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  postId: {
    type: mongoose.Schema.ObjectId,
    ref: 'post',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
