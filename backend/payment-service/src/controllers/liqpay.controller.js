import { createLiqpayParams } from "../services/liqpayService.js";

export const createPayment = (req, res) => {
  try {
    const isSubscription = req.body.selectedType === "subscription";

    // Допоміжна функція для формату LiqPay
    function getFormattedDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = `0${now.getMonth() + 1}`.slice(-2);
      const day = `0${now.getDate()}`.slice(-2);
      return `${year}-${month}-${day} 00:00:00`;
    }

    const params = {
      action: isSubscription ? "subscribe" : "pay",
      amount: req.body.amount,
      currency: "UAH",
      description: req.body.description,
      order_id: `order_${Date.now()}`,
      version: 3,
      sandbox: 1,
      language: "uk",
      ...(isSubscription && {
        subscribe_date_start: getFormattedDate(),
        subscribe_periodicity: "month", // або "day", "week", "year"
      }),
    };

    const { data, signature } = createLiqpayParams(params);
    // console.log(data);

    res.json({ data, signature });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
