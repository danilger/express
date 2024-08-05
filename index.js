
const Application = require('./framework/application');
const responseToJson = require('./framework/middlewares/responseToJson');
const parseUrl = require('./framework/middlewares/parseUrl');
const userRouter = require('./src/user-router');
const { default: mongoose } = require('mongoose');


const app = new Application()

app.addRoutre(userRouter)
app.use(responseToJson)
app.use(parseUrl('http://127.0.0.1:4000'))


const start = async () => {
  try {
    await mongoose.connect("mongodb://root:123@localhost:27017/").then(()=>console.log("Connected to MongoDB!"))
    app.listen(4000, () => {
      console.log('Server is running on port 4000')
    })
  } catch (e) {
    console.log(e)
  }
}

start()