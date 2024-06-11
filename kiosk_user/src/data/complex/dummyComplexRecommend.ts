// src/data/complex/dummyComplexRecommend.ts
export const dummyComplexRecommend = [
    {
      itemname: "iceamericano",
      name: "(ICE) 아이스 블렌디드 아메리카노",
      description: "진한 에스프레소에 시원한 정수물과 얼음을 더하여 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피",
      price: 3500,
      image: "/dummyImg/coffee1.svg",
      options: [
        { label: "사이즈", values: ["M", "L"], price: [0, 500] },
        { label: "에스프레소 샷", values: ["1샷", "2샷"], price: [-200, 0] },
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
        itemname: "cafelatte",
        name: "카페 라떼",
        description: "부드럽고 고소한 우유와 에스프레소가 어우러진 클래식한 커피",
        price: 4000,
        image: "/dummyImg/coffee2.svg",
        options: [
          { label: "사이즈", values: ["M", "L"], price: [0, 500] },
          { label: "에스프레소 샷", values: ["1샷", "2샷"], price: [0, 500] },
        ],
    },
    {
        itemname: "macchiato",
        name: "카라멜 마키아토",
        description: "진한 에스프레소에 소량의 우유 거품을 얹어 깔끔하고 강렬한 맛을 즐길 수 있는 커피",
        price: 3500,
        image: "/dummyImg/coffee3.svg",
        options: [
            { label: "사이즈", values: ["S", "D"], price: [0, 500] },
        ],
    },
    {
        itemname: "chococake",
        name: "초콜릿 케이크",
        description: "진한 초콜릿 맛이 일품인 부드러운 케이크",
        price: 8500,
        image: "/dummyImg/cake1.svg",
        options: [
          { label: "사이즈", values: ["1조각", "2조각"], price: [0, 8500] },
        ],
      },
    {
        itemname: "fruitwhippedcreamcake",
        name: "생크림 과일 조각 케이크",
        description: "신선한 과일과 부드러운 생크림이 어우러진 달콤한 케이크",
        price: 8500,
        image: "/dummyImg/cake2.svg",
        options: [
            { label: "사이즈", values: ["1조각", "2조각"], price: [0, 8500] },
        ],
    },
    {
        itemname: "bagelcreamcheese",
        name: "베이글 크림치즈",
        description: "쫄깃한 베이글에 부드러운 크림치즈가 어우러진 간식",
        price: 4000,
        image: "/dummyImg/bread2.jpeg",
        options: [
          { label: "베이글 종류", values: ["플레인", "블루베리"], price: [0, 0] },
          { label: "크림치즈", values: ["플레인", "허니"], price: [0, 0] },
        ],
      },
      {
        itemname: "greentea",
        name: "녹차",
        description: "신선한 녹차 잎으로 우려낸 깔끔하고 건강한 티",
        price: 3500,
        image: "/dummyImg/tea4.jpeg",
        options: [
            { label: "사이즈", values: ["S", "M"], price: [0, 500] },
            { label: "온도", values: ["HOT", "ICE"], price: [0, 0] },
        ],
    },
    {
        itemname: "espresso",
        name: "에스프레소",
        description: "진한 에스프레소 샷 한 잔, 깊고 강렬한 커피의 풍미를 느낄 수 있는 음료",
        price: 3000,
        image: "/dummyImg/coffee6.jpeg",
        options: [
            { label: "사이즈", values: ["S", "D"], price: [0, 500] },
        ],
    },
  ];
  