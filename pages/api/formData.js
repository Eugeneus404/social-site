const models = require('../../db/models/index');

export default (req, res) => {
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
};
