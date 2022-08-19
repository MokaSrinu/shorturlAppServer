const express = require('express');
const cors = require('cors');
const connectDatabase = require('./database/index');
const userRouter = require('./routes/users');
const shorturlRouter = require('./routes/shorturl');

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())        

app.use(setReqContext);
app.use(logger);

app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello server is running')
      .end();
  });
app.use(userRouter);
app.use(shorturlRouter);


function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);
    next();
}

function setReqContext(req, res, next) {
    req.context = {
        // user will be present for authenticated routes
    }
    next();
}

connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    })
})
