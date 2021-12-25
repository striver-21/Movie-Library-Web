const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const passport=require('passport');

require('dotenv').config();

const app=express();
const port=process.env.PORT;

app.use(cors());
app.use(bodyparser.json());
app.use(passport.initialize());


require('./config/passport')(passport);

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true });

const usersRouter=require('./routes/users');
app.use('/api/users',usersRouter);



app.listen(port,()=>{
    console.log('Server is running on port: '+port);
});
