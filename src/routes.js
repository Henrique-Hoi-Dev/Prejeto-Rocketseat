import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: 'Henrique hoinacki',
    email: 'rik_ah@hotmail.com',
    password_hash: '123135413'
  });

  return res.json(user);
});

export default routes;
