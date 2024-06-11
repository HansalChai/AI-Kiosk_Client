// src/data/complex/dummySimpleCafe.ts
export const dummySimpleCafe = [
    //커피
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
        itemname: "americano",
        name: "(HOT) 아메리카노",
        description: "진한 에스프레소에 뜨거운 물을 더하여 깔끔하고 강렬한 맛을 느낄 수 있는 커피",
        price: 3000,
        image: "/dummyImg/coffee4.jpg",
        options: [
          { label: "사이즈", values: ["S", "M"], price: [0, 500] },
          { label: "에스프레소 샷", values: ["1샷", "2샷"], price: [0, 500] },
        ],
    },
    {
        itemname: "vanillalatte",
        name: "바닐라 라떼",
        description: "바닐라 시럽이 들어간 부드럽고 달콤한 라떼",
        price: 4500,
        image: "/dummyImg/coffee5.jpg",
        options: [
          { label: "사이즈", values: ["M", "L"], price: [0, 500] },
          { label: "에스프레소 샷", values: ["1샷", "2샷"], price: [0, 500] },
        ],
    },
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
        itemname: "cappuccino",
        name: "카푸치노",
        description: "에스프레소에 따뜻한 우유 거품을 얹어 부드럽고 풍부한 맛을 자랑하는 커피",
        price: 4000,
        image: "/dummyImg/coffee7.jpeg",
        options: [
            { label: "사이즈", values: ["S", "M"], price: [0, 500] },
            { label: "에스프레소 샷", values: ["1샷", "2샷"], price: [0, 500] },
            { label: "시나몬 토핑", values: ["추가", "제외"], price: [0, 0] },
        ],
    },
    {
        itemname: "flatwhite",
        name: "플랫 화이트",
        description: "부드럽고 진한 에스프레소에 미세한 우유 거품을 더해 만든 커피",
        price: 4500,
        image: "/dummyImg/coffee8.jpeg",
        options: [
            { label: "사이즈", values: ["S", "M"], price: [0, 500] },
            { label: "에스프레소 샷", values: ["1샷", "2샷"], price: [0, 500] },
        ],
    },
    {
        itemname: "affogato",
        name: "아포가토",
        description: "진한 에스프레소와 바닐라 아이스크림의 조합이 일품인 디저트 커피",
        price: 5000,
        image: "/dummyImg/coffee9.jpeg",
        options: [
            { label: "아이스크림", values: ["바닐라", "초코"], price: [0, 0] },
        ],
    },
    {
        itemname: "mocha",
        name: "카페 모카",
        description: "에스프레소에 초콜릿 시럽과 스팀 밀크를 더해 달콤한 맛이 특징인 커피",
        price: 5000,
        image: "/dummyImg/coffee10.jpeg",
        options: [
            { label: "사이즈", values: ["S", "M"], price: [0, 500] },
            { label: "휘핑 크림", values: ["추가", "제외"], price: [0, 0] },
        ],
    },

  ];
  