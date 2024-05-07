const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

process.on('uncaughException', (err) => {
  console.log(err.name, err.message);

  process.exit(1);
});

const app = require('./app');

mongoose
  .connect(process.env.CONECTION_STRING, {
    dbName: 'natours',
  })
  .then(() => console.log('Connected to MongoDB'));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is runing in port ${process.env.PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});