const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/user')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Manikandan:swathy%4020@cluster0.tiesao1.mongodb.net/mani?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.post('/signup',(req,res)=>{
  UserModel.create(req.body)
      .then(User => res.json(User))
      .catch(err => res.json(err))
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Check if username and password match
    const user = await UserModel.findOne({ email, password });
    if (user) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });

    }
  });
  
  
const server = app.listen(3003, () => {
    console.log('Server is running on  port 3003');
});