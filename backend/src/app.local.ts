import { app } from './app';

const port = 3000;

const host = `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`App listening at ${host}`);
});
