const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/social_network';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    try {
      await collection.deleteMany({});
      console.log(`Cleared collection: ${key}`);
    } catch (error) {
      console.error(`Error clearing collection ${key}:`, error);
    }
  }
  console.log('Database cleared');
  mongoose.connection.close(() => {
    process.exit(0);
  });
};

mongoose.connection.once('open', () => {
  clearDatabase();
});
