import crypto from "crypto";

const LIQPAY_PUBLIC_KEY = process.env.LIQPAY_PUBLIC_KEY;
const LIQPAY_PRIVATE_KEY = process.env.LIQPAY_PRIVATE_KEY;

function createLiqpayParams(params) {
  if (!params.version) throw new Error("version is required");
  if (!params.amount) throw new Error("amount is required");

  params.public_key = LIQPAY_PUBLIC_KEY;
  params.version = Number(params.version);
  params.amount = Number(params.amount);

  // конвертуємо params в base64
  const data = Buffer.from(JSON.stringify(params)).toString("base64");

  // генеруємо підпис
  const signature = crypto
    .createHash("sha1")
    .update(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY)
    .digest("base64");

  return { data, signature };
}

export { createLiqpayParams };
