// src/data/complex/dummyComplexBread.ts
export const dummyComplexBread = [
    // 브레드
    {
        itemname: "blueberrymuffin",
        name: "블루베리 머핀",
        description: "달콤한 블루베리가 가득한 촉촉한 머핀",
        price: 3000,
        image: "/dummyImg/bread1.jpeg",
        options: [
          { label: "수량", values: ["1개", "2개"], price: [0, 3000] },
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
        itemname: "croissant",
        name: "크루아상",
        description: "겹겹이 버터 향이 살아있는 바삭한 크루아상",
        price: 3500,
        image: "/dummyImg/bread3.jpeg",
        options: [
          { label: "수량", values: ["1개", "2개"], price: [0, 3500] },
        ],
      },
      {
        itemname: "honeybread",
        name: "허니 브레드",
        description: "달콤한 꿀과 버터가 듬뿍 발라진 부드러운 브레드",
        price: 6000,
        image: "/dummyImg/bread4.jpeg",
        options: [
          { label: "수량", values: ["1개", "2개"], price: [0, 6000] },
        ],
      },
      {
        itemname: "bananaalmondbread",
        name: "바나나 아몬드 브레드",
        description: "달콤한 바나나와 고소한 아몬드가 어우러진 브레드",
        price: 7000,
        image: "/dummyImg/bread5.jpeg",
        options: [
          { label: "수량", values: ["1개", "2개"], price: [0, 7000] },
        ],
      },
  ];
  