import app from './config/express';
import mongoose from './config/mongoose';

// PORT
const PORT = process.env.PORT || 4000;

// Mongo Connection
mongoose.connect()

// Run the server
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});