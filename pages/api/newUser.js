import nextConnect from 'next-connect';

const models = require('../../db/models/index');

const usersArray = [];

const handler = nextConnect()

.post(async(req, res) => {
  const body = JSON.parse(req.body)
    const { name, password } = body;
    const newUser = models.users.create({
      name: name,
      password: password,
    });
    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newUser,
    });
})


export default handler
