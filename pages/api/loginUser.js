import nextConnect from 'next-connect';

const models = require('../../db/models/index');

const handler = nextConnect()

.post(async (req, res) => {
  const body = JSON.parse(req.body)
  const { name, password } = body;

  const allUsers = await models.users.findOne({
    where: {
      name: name,
      password: password
    }
  });
  if (allUsers === null) {
   res.status(201).json({ status: 'null' });
 }
   res.status(202).json({ status: 'find' });
})


export default handler
