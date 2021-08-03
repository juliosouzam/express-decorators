import express from 'express';
import { routes } from './routes/login';
import { router as controllerRouter } from './controllers/decorators/controller';

import './controllers/LoginController';

const app = express();

app.use(routes);
app.use(controllerRouter);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Running at PORT ${PORT}`));
