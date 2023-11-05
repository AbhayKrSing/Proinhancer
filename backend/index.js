const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const connectdb = require('./db/configdb')
connectdb()
app.use(express.json())
const User = require("./Model/Signup")
app.use(cors())
app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/signup', async (req, res) => {
    try {

        const { name, college, email, password } = req.body;
        let user = new User({ name, college, email, password })
        user = await user.save()
        res.json(user)

    } catch (error) {
        console.log(error.message)
    }
})
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email })
        if (user.password === password) {
            res.json(user)
        }

    } catch (error) {
        console.log(error.message)
    }
})
app.post("/addproject", async (req, res) => {
    const { email, idea, description } = req.body;
    const user = await User.findOne({ email: email })
    user.project.push({ idea: idea, description: description })
    const result = await user.save()
    res.json(result)
})
app.post('/getuser', async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email: email })
    res.json(user)
})
app.post('/add', async (req, res) => {
    const { email, idea } = req.body;
    const user = await User.findOne({ email: email })
    for (element of user.project) {
        if (element.idea == idea) {
            element.task.push(task);
        }
    }
    await user.save()
    user.project
})
app.listen(process.env.PORT || 4000, () => {
    console.log("Listening at port " + process.env.PORT)
})