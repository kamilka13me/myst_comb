import morgan from "morgan";
import * as rfs from "rotating-file-stream";
import path from "path";
import fs from "fs";

// Створюємо папку logs якщо її немає
const logDirectory = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Створюємо rotating stream
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // daily rotation
  path: logDirectory,
  maxFiles: 7, // зберігати тільки 7 файлів
  compress: "gzip", // стискати старі
});

const format = ":status :date[iso] :method :url  :referrer :res[content-type]";

const morganMiddleware = morgan(format, {
  stream: accessLogStream,
  skip: (req) => req.originalUrl.startsWith("/api/docs"), //skip swagger
});

export default morganMiddleware;
