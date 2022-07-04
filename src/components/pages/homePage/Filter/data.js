export const filterPriceData = [
  {
    label: "Tất cả",
    value: () => true,
  },
  {
    label: "Dưới 2 triệu",
    value: ({ price }) => price > 0 && price < 2000000,
  },
  {
    label: "Từ 2 - 4 triệu",
    value: ({ price }) => price >= 2000000 && price <= 4000000,
  },
  {
    label: "Từ 4 - 7 triệu",
    value: ({ price }) => price >= 4000000 && price <= 7000000,
  },
  {
    label: "Từ 7 - 13 triệu",
    value: ({ price }) => price >= 7000000 && price <= 13000000,
  },
  {
    label: "Trên 13 triệu",
    value: ({ price }) => price > 13000000,
  },
];

export const sorting = [
  {
    label: "Nổi bật",
    value: (a, b) => 0,
  },
  {
    label: "Giá tăng dần",
    value: (a, b) => a.price - b.price,
  },
  {
    label: "Giá giảm dần",
    value: (a, b) => b.price - a.price,
  },
];
