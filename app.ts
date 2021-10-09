import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('static'))

app.use((req, res) => {
  res.status(404).sendFile("templates/what_are_you_looking_for.html", {root: `${__dirname}//static//`});
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
