const express = require('express')

const { createUser } 
const app = express()

const jsonParser = express.json()

const validationSchema = yup.object({
  name: yup.string
  .trim()
  .min(3)
  .required(),
  email: yup
  .string()
  .trim()
  .email()
  .required(),
  password: yup
  .string()
  .trim()
  .required(),
  gender: yup
  .string()
  .trim()
  .required(),
  isSubscribed: yup.boolean(),
});

validationSchema.validate()

const PORT = 3000;

app.get('/', (req, res, next) =>{
  res.send ('Hello world!')
});
app.get('*', (req, res) =>{
  res.send('ERROR 404')
});
app.post('/', jsonParser, async(req, res) =>{
 req.body = await validationSchema.validate(req, body);
});

app.listen (PORT, () => {
  console.log('Server is running on ${PORT} port')
})
