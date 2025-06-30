import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 5000;

// Масив проксі маршрутів
const routes = [
  { path: "/api/auth", target: "http://localhost:5001/api/auth" },
  { path: "/api/sessions", target: "http://localhost:5001/api/sessions" },
  { path: "/api/forms", target: "http://localhost:5002/api/forms" },
  { path: "/api/liqpay", target: "http://localhost:5003/api/liqpay" },
  // додай інші сервіси за потреби
];

routes.forEach(({ path, target }) => {
  app.use(
    path,
    createProxyMiddleware({
      target,
      changeOrigin: true,

      logLevel: "debug", // опціонально: бачити проксі в консолі
    })
  );
});

app.listen(PORT, () => {
  console.log(`🚀 API Gateway listening on http://localhost:${PORT}`);
  routes.forEach(({ path, target }) => {
    console.log(`🔁 Mapping: ${path} → ${target}${path}`);
  });
});
