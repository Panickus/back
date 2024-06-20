import mongoose from 'mongoose';

export const database = {
  url: process.env.DATABASE_URL || 'mongodb://localhost:27017/panes-y-masas',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

mongoose.connect(database.url, database.options);