import app from "./app.js";
import "dotenv/config";
import connectDb from "./libs/db.js";
const port = process.env.SERVER_PORT || 5001;

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDb();
});
// home route
app.get("/", (req, res) => {
  res.send({ message: "Hello from home route!!" });
});
// not found route
app.use((req, res, next) => {
  res.json({ message: "route not found" });
  next();
});
// server error route
app.use((err, req, res, next) => {
  res.json({ message: `Server error with ${err.message}` });
});
