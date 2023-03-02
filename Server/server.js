const connectToDB = require("./config/connectToDB");
const app = require("./app");

// connect to the database
connectToDB();

// Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`MERN-App is running on http://localhost:${PORT}`);
});
