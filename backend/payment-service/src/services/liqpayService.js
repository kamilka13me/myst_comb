import crypto from "crypto";

function createLiqpayParams(params) {
  if (!params.version) throw new Error("version is required");
  if (!params.amount) throw new Error("amount is required");

  params.public_key = process.env.LIQPAY_PUBLIC_KEY;
  params.version = Number(params.version);
  params.amount = Number(params.amount);
  // console.log(process.env.LIQPAY_PUBLIC_KEY);

  // конвертуємо params в base64
  const data = Buffer.from(JSON.stringify(params)).toString("base64");

  // генеруємо підпис
  const signature = crypto
    .createHash("sha1")
    .update(process.env.LIQPAY_PRIVATE_KEY + data + process.env.LIQPAY_PRIVATE_KEY)
    .digest("base64");

  return { data, signature };
}

export { createLiqpayParams };
