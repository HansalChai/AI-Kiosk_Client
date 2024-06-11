// src/data/complex/dummyComplexBeverage.ts
export const dummyComplexBeverage = [
    // 음료
    {
        itemname: "abcjuice",
        name: "(ICE) ABC 주스",
        description: "사과(APPLE), 비트(BEET), 당근(CARROT)의 환상적인 조합! 건강과 맛 둘 다 챙긴 최고의 주스",
        price: 5500,
        image: "/dummyImg/beverage1.jpeg",
        options: [
          { label: "사이즈", values: ["M", "L"], price: [0, 500] },
          { label: "당도", values: ["연하게", "보통"], price: [0, 0] },
          { label: "얼음 양", values: ["보통", "많이"], price: [0, 0] },
        ],
      },
      {
        itemname: "strawberrylatte",
        name: "딸기 라떼",
        description: "신선한 딸기와 우유가 어우러진 달콤한 라떼",
        price: 5000,
        image: "/dummyImg/beverage2.svg",
        options: [
          { label: "사이즈", values: ["M", "L"], price: [0, 500] },
          { label: "당도", values: ["연하게", "보통"], price: [0, 0] },
        ],
      },
      {
        itemname: "lemonade",
        name: "레모네이드",
        description: "상큼한 레몬으로 만든 시원한 레모네이드",
        price: 4000,
        image: "/dummyImg/beverage3.svg",
        options: [
          { label: "사이즈", values: ["M", "L"], price: [0, 500] },
          { label: "당도", values: ["연하게", "보통"], price: [0, 0] },
          { label: "얼음 양", values: ["보통", "많이"], price: [0, 0] },
        ],
      },
      {
        itemname: "matchalatte",
        name: "말차 라떼",
        description: "고소하고 진한 말차와 우유가 조화된 라떼",
        price: 5000,
        image: "/dummyImg/beverage4.jpeg",
        options: [
          { label: "사이즈", values: ["M", "L"], price: [0, 500] },
          { label: "당도", values: ["연하게", "보통"], price: [0, 0] },
        ],
      },
      {
        itemname: "milkshake",
        name: "밀크쉐이크",
        description: "부드럽고 진한 맛의 밀크쉐이크, 다양한 맛으로 즐길 수 있는 음료",
        price: 6000,
        image: "/dummyImg/beverage5.jpeg",
        options: [
            { label: "맛 선택", values: ["바닐라", "초코", "딸기"], price: [0, 0, 0] },
            { label: "사이즈", values: ["M", "L"], price: [0, 500] },
            { label: "휘핑 크림", values: ["추가", "제외"], price: [500, 0] },
        ],
    },

  ];
  