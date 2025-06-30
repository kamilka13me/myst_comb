import fs from "fs";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Шлях до папки schemas відносно файлу
const schemasDir = path.join(__dirname, "schemas");
const scrDir = path.join(__dirname, "..");

// Папка, де зберігаються всі JSON схеми
// const schemasDir = path.join(process.cwd(), "src", "docs", "schemas");

// Зчитуємо всі JSON-файли та парсимо їх
const schemas = fs.readdirSync(schemasDir).reduce((acc, file) => {
  if (file.endsWith(".json")) {
    const schemaName = path.basename(file, ".json");
    const schemaContent = JSON.parse(
      fs.readFileSync(path.join(schemasDir, file), "utf-8")
    );
    // якщо схема містить не обʼєкт із назвою, а одразу тіло схеми
    acc[schemaName] = schemaContent;
  }
  return acc;
}, {});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auth Service API",
      version: "1.0.0",
      description: "Документація API для сервісу авторизації",
    },
    servers: [{ url: `http://localhost:${process.env.PORT}/api/auth/` }],
    components: {
      schemas: schemas,
    },
  },
  apis: [
    `${scrDir}/routes/*.js`,
    `${scrDir}/models/*.js`,
    `${scrDir}/controllers/*.js`,
    `${scrDir}/utils/*.js`,
  ],
};
// console.log(schemasDir);

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
