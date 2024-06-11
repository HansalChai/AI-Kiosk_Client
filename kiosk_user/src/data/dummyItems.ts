// src/data/dummyItems.ts
export const dummyItems = [
    //커피
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


    // 차
    {
        itemname: "earlgreytea",
        name: "얼그레이 티",
        description: "베르가못 향이 은은하게 나는 클래식한 얼그레이 티",
        price: 3500,
        image: "/dummyImg/tea1.jpeg",
        options: [
          { label: "사이즈", values: ["S", "M"], price: [0, 500] },
          { label: "온도", values: ["HOT", "ICE"], price: [0, 0] },
        ],
      },
      {
        itemname: "chamomile",
        name: "캐모마일 티",
        description: "부드럽고 향긋한 캐모마일 꽃잎으로 우려낸 힐링 티",
        price: 3500,
        image: "/dummyImg/tea2.jpeg",
        options: [
            { label: "사이즈", values: ["S", "M"], price: [0, 500] },
            { label: "온도", values: ["HOT", "ICE"], price: [0, 0] },
        ],
    },
    {
        itemname: "peppermint",
        name: "페퍼민트 티",
        description: "상쾌한 페퍼민트 잎으로 만든 리프레싱 티",
        price: 3500,
        image: "/dummyImg/tea3.jpeg",
        options: [
            { label: "사이즈", values: ["S", "M"], price: [0, 500] },
            { label: "온도", values: ["HOT", "ICE"], price: [0, 0] },
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
        itemname: "hibiscus",
        name: "히비스커스 티",
        description: "새콤달콤한 히비스커스 꽃잎으로 우려낸 향긋한 티",
        price: 3500,
        image: "/dummyImg/tea5.jpeg",
        options: [
            { label: "사이즈", values: ["S", "M"], price: [0, 500] },
            { label: "온도", values: ["HOT", "ICE"], price: [0, 0] },
        ],
    },

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



    // 케이크
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
        itemname: "redvelvetcake",
        name: "레드벨벳 케이크",
        description: "부드럽고 촉촉한 레드벨벳 시트에 크림치즈 프로스팅을 듬뿍 얹어 달콤하고 풍부한 맛을 자랑하는 케이크",
        price: 9000,
        image: "/dummyImg/cake3.jpeg",
        options: [
            { label: "사이즈", values: ["1조각", "2조각"], price: [0, 9000] },
        ],
    },
    {
        itemname: "mochacake",
        name: "모카 케이크",
        description: "커피와 초콜릿이 조화된 부드럽고 달콤한 케이크",
        price: 8000,
        image: "/dummyImg/cake4.jpeg",
        options: [
          { label: "사이즈", values: ["1조각", "2조각"], price: [0, 8000] },
        ],
      },
      {
        itemname: "carrotcake",
        name: "당근 케이크",
        description: "당근이 듬뿍 들어가고 크림치즈 프로스팅을 얹은 케이크",
        price: 8500,
        image: "/dummyImg/cake5.jpeg",
        options: [
          { label: "사이즈", values: ["1조각", "2조각"], price: [0, 8500] },
        ],
      },
  ];
  