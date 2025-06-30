import app from "./app.js";
import { createServer } from "http";

const PORT = process.env.PORT || 5001;

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Form service running on port http://localhost:${PORT}`);
  console.log(`Docs avaliable on http://localhost:${PORT}/api/docs`);
});
