require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


mongoose.connect(`mongodb://localhost:27017/tagstore`);

app.use(cors({
    origin: '*'
}));
app.use(express.json());

// app.use('/seller', sellerRouter);
// app.use('/user', userRouter);
// app.use('/order', orderRouter);
// app.use('/product', productRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server is listening on port: ' + PORT));

