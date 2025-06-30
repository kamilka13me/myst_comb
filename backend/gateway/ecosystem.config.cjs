// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "myst_comb_auth-service",
      script: "../auth-service/src/server.js",

      error_file: "./logs/auth-error.log",
      out_file: "./logs/auth-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      watch: true,
      max_restarts: 1,

      ignore_watch: ["node_modules", "logs"],

      env: {
        PORT: 5001,
        MONGO_URI: "mongodb://localhost:27017/mystcomb",
        JWT_ACCESS_SECRET: "your_access_secret",
        JWT_REFRESH_SECRET: "your_refresh_secret",
      },
    },
    {
      name: "myst_comb_forms-service",
      script: "../forms-service/src/server.js",

      error_file: "./logs/forms-error.log",
      out_file: "./logs/forms-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      watch: true,
      max_restarts: 1,

      ignore_watch: ["node_modules", "logs"],

      env: {
        PORT: 5002,
        MONGO_URI: "mongodb://localhost:27017/mystcomb",
      },
    },
    {
      name: "myst_comb_payment-service",
      script: "../payment-service/src/server.js",

      error_file: "./logs/payment-error.log",
      out_file: "./logs/payment-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      watch: true,
      max_restarts: 1,

      ignore_watch: ["node_modules", "logs"],

      env: {
        PORT: 5003,
        MONGO_URI: "mongodb://localhost:27017/mystcomb",
        LIQPAY_PUBLIC_KEY: "sandbox_i25393639533",
        LIQPAY_PRIVATE_KEY: "sandbox_Diek6g6hNSEngzS8oKEc8WOPptXyL2iioY2z6hIf",
      },
    },
    {
      name: "myst_comb_gateway",
      script: "gateway.js",

      error_file: "./logs/gateway.log",
      out_file: "./logs/gateway.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      watch: true,
      max_restarts: 1,

      ignore_watch: ["node_modules", "logs"],

      env: {
        PORT: 5000,
        MONGO_URI: "mongodb://localhost:27017/mystcomb",
      },
    },
  ],
};
