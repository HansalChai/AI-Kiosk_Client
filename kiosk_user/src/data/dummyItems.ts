// src/data/dummyItems.ts
export const dummyItems = [
    {
      itemname: "iceamericano",
      name: "(ICE) 아이스 블렌디드 아메리카노",
      description: "진한 에스프레소에 시원한 정수물과 얼음을 더하여 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피",
      price: 3500,
      options: [
        { label: "사이즈", values: ["M", "L"], price: [0, 500] },
        { label: "에스프레소 샷", values: ["1샷", "2샷"], price: [-200, 0] },
        { label: "얼음 양", values: ["보통", "많이"], price: [0, 0] },
      ],
    },
    {
        itemname: "abcjuice",
        name: "(ICE) ABC 주스",
        description: "사과(APPLE), 비트(BEET), 당근(CARROT)의 환상적인 조합! 건강과 맛 둘 다 챙긴 최고의 주스",
        price: 5500,
        options: [
          { label: "사이즈", values: ["M", "L"], price: [0, 500] },
          { label: "당도", values: ["연하게", "보통"], price: [0, 0] },
          { label: "얼음 양", values: ["보통", "많이"], price: [0, 0] },
        ],
      },
      {
        itemname: "redvelvetcake",
        name: "레드벨벳 케이크",
        description: "부드럽고 촉촉한 레드벨벳 시트에 크림치즈 프로스팅을 듬뿍 얹어 달콤하고 풍부한 맛을 자랑하는 케이크",
        price: 9000,
        options: [
          { label: "사이즈", values: ["1조각", "2조각"], price: [0, 9000] },
        ],
      },
    // 추가 더미 데이터
  ];
  