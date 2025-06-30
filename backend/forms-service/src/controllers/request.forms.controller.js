import CourseReq from "../models/courseReq.model.js";
import DiscussionReq from "../models/discussionReq.model.js";
import PortfolioReq from "../models/portfolioReq.model.js";
import SupportReq from "../models/supportReq.model.js";

/**
 * Повертає відфільтровані заявки у форматі:
 * {
 *   users: [
 *     {
 *       id,
 *       name,
 *       date,
 *       media: [{name, idColor}, ...],
 *       email,
 *       type_services
 *     }
 *   ]
 * }
 */
export const getFilteredRequests = async (req, res) => {
  try {
    console.log(req.query);

    const {
      dateFrom,
      dateTo,
      typeService, // повний збіг
      email, // частковий збіг
      media, // повний збіг, чекати масив рядків через query param
      name, // частковий збіг (ім'я або прізвище)
      sort = "desc", // 'asc' або 'desc' за датою
    } = req.query;

    // Парсимо медіа в масив, якщо прийшло рядком
    const mediaArr = media ? (Array.isArray(media) ? media : media.split(",")) : [];

    // Функція перевірки, чи масив1 містить усі елементи масиву2
    const arrayContainsAll = (arr, subArr) => subArr.every((v) => arr.includes(v));

    // Підготувати умови для пошуку (базовий match для mongoose)
    const baseFilter = {};

    // Діапазон по даті createdAt
    if (dateFrom || dateTo) {
      baseFilter.createdAt = {};
      if (dateFrom) baseFilter.createdAt.$gte = new Date(dateFrom);
      if (dateTo) baseFilter.createdAt.$lte = new Date(dateTo);
    }

    // Тип послуги - exact match
    if (typeService) baseFilter.services = typeService;

    // Email - частковий збіг, regex
    if (email) baseFilter.email = { $regex: email, $options: "i" };

    // Ім'я або прізвище - частковий збіг
    if (name) {
      baseFilter.$or = [
        { firstName: { $regex: name, $options: "i" } },
        { lastName: { $regex: name, $options: "i" } },
      ];
    }

    // --- Завантажуємо дані з усіх колекцій ---

    const [courses, discussions, portfolios, supports] = await Promise.all([
      CourseReq.find(baseFilter).lean(),
      DiscussionReq.find(baseFilter).lean(),
      PortfolioReq.find(baseFilter).lean(),
      SupportReq.find(baseFilter).lean(),
    ]);

    // --- Обробка і форматування в загальний масив ---
    const all = [];

    // Функція для парсингу media для прикладу (для демонстрації)
    // idColor можна в залежності від назви задати
    const mediaColorMap = {
      Скульптура: "blue",
      "Текстильне мистецтво": "orange",
      "Digital-art": "purple",
      Архітектура: "orange",
      Ілюстрація: "purple",
      "Графічний дизайн": "yellow",
    };

    // Допоміжна функція для медіа, для прикладу
    function parseMedia(selectedBrick) {
      if (!selectedBrick || selectedBrick.length === 0) return [];
      return selectedBrick.map((name) => ({
        name,
        idColor: mediaColorMap[name] || "grey",
      }));
    }

    // Фільтрація по медіа (повний збіг: усі медіа з фільтра є в заявці)
    function filterByMedia(items) {
      if (mediaArr.length === 0) return items;
      return items.filter((item) => arrayContainsAll(item.selectedBrick || [], mediaArr));
    }

    // Форматування запису
    function formatItem(item, type_services) {
      return {
        id: item._id.toString(),
        name: `${item.firstName} ${item.lastName}`,
        date: item.createdAt.toLocaleDateString("uk-UA"),
        media: parseMedia(item.selectedBrick),
        email: item.email,
        type_services,
      };
    }

    all.push(
      ...filterByMedia(courses).map((item) => formatItem(item, item.services || "Курс"))
    );
    all.push(
      ...filterByMedia(discussions).map((item) => formatItem(item, "Обговорення"))
    );
    all.push(...filterByMedia(portfolios).map((item) => formatItem(item, "Портфоліо")));
    all.push(...filterByMedia(supports).map((item) => formatItem(item, "Підтримка")));

    // Сортування по даті
    all.sort((a, b) => {
      if (sort === "asc") {
        return (
          new Date(a.date.split(".").reverse().join("-")) -
          new Date(b.date.split(".").reverse().join("-"))
        );
      } else {
        return (
          new Date(b.date.split(".").reverse().join("-")) -
          new Date(a.date.split(".").reverse().join("-"))
        );
      }
    });

    console.log(all);

    return res.json({ users: all });
  } catch (error) {
    console.error("Filter error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
