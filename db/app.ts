import express, { Express, Request, Response } from "express";
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

const PORT =  process.env.SERVER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req : Request, res : Response) => {
    res.send({ message: 'Hello from the backend!' });
});
