const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// const cors = require('cors');
// const helmet = require('helmet');
// const xss = require('xss-clean');
// const hpp = require('hpp');


dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json({ limit: '50mb' }));

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

// app.use(helmet());
// app.use(xss());
// app.use(hpp());
// app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));

const mainPagesRouter = require('./routes/mainPagesRouter');
app.use('', mainPagesRouter);



const PORT = process.env.PORT || 80;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold));

process.on(`unhandledRejection`, (err, promise) => {
    console.log(`Unhandled Rejection: ${err.message}`.red);
    server.close(() => process.exit(1));
});