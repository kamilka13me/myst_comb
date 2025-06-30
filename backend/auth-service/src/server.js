import app from "./app.js";
import { createServer } from "http";

const PORT = process.env.PORT || 5000;

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
