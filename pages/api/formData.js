import nextConnect from 'next-connect';

const models = require('../../db/models/index');

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

  res.status(200).json({ status: 'OK' });
})


.get(async (req, res) => {
  const findUsers = await models.users.findAll({attributes: ['name']}).then(users=>{
    console.log("All users:", JSON.stringify(users, null, 2));
  }).catch(err=>console.log(err))
})

export default handler
