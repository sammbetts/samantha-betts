import { app } from './app';

const port = 3000;

const host =
  process.env.CODESPACES === 'true'
    ? `https://${process.env.CODESPACE_NAME}-3000.githubpreview.dev/`
    : `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`App listening at ${host}`);
});
