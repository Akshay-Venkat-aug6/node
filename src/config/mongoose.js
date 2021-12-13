import mongoose from 'mongoose';

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`)
//   logger.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

const uri = "mongodb+srv://Akshay_28:Akshay281096!@cluster0.ugr8h.mongodb.net/screen_size?retryWrites=true&w=majority";
/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
    mongoose
        .connect(uri, {
            // useCreateIndex: true,
            keepAlive: 1,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
        })
        .then(() => console.log('MongoDB connected...'));
    return mongoose.connection;
};