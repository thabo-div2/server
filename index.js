const express = require("express");

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
