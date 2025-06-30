import multer from "multer";
import path from "path";
import fs from "fs";

// Створимо папку /uploads, якщо не існує
const dir = path.resolve("uploads");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Конфігурація сховища
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const uploadDiscussion = multer({ storage });

export default uploadDiscussion;
