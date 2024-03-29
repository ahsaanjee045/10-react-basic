let products = [
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        ],
    },
    {
        id: 2,
        title: "iPhone X",
        description:
            "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        images: [
            "https://cdn.dummyjson.com/product-images/2/1.jpg",
            "https://cdn.dummyjson.com/product-images/2/2.jpg",
            "https://cdn.dummyjson.com/product-images/2/3.jpg",
            "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        ],
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description:
            "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
    },
    {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        images: [
            "https://cdn.dummyjson.com/product-images/4/1.jpg",
            "https://cdn.dummyjson.com/product-images/4/2.jpg",
            "https://cdn.dummyjson.com/product-images/4/3.jpg",
            "https://cdn.dummyjson.com/product-images/4/4.jpg",
            "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        ],
    },
    {
        id: 5,
        title: "Huawei P30",
        description:
            "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
        images: [
            "https://cdn.dummyjson.com/product-images/5/1.jpg",
            "https://cdn.dummyjson.com/product-images/5/2.jpg",
            "https://cdn.dummyjson.com/product-images/5/3.jpg",
        ],
    },
    {
        id: 6,
        title: "MacBook Pro",
        description:
            "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "Apple",
        category: "laptops",
        thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
        images: [
            "https://cdn.dummyjson.com/product-images/6/1.png",
            "https://cdn.dummyjson.com/product-images/6/2.jpg",
            "https://cdn.dummyjson.com/product-images/6/3.png",
            "https://cdn.dummyjson.com/product-images/6/4.jpg",
        ],
    },
];

const sculptureList = [
    {
        name: "Homenaje a la Neurocirugía",
        artist: "Marta Colvin Andrade",
        description:
            "Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.",
        url: "https://i.imgur.com/Mx7dA2Y.jpg",
        alt: "A bronze statue of two crossed hands delicately holding a human brain in their fingertips.",
    },
    {
        name: "Floralis Genérica",
        artist: "Eduardo Catalano",
        description:
            "This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.",
        url: "https://i.imgur.com/ZF6s192m.jpg",
        alt: "A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.",
    },
    {
        name: "Eternal Presence",
        artist: "John Woodrow Wilson",
        description:
            'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
        url: "https://i.imgur.com/aTtVpES.jpg",
        alt: "The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.",
    },
    {
        name: "Moai",
        artist: "Unknown Artist",
        description:
            "Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.",
        url: "https://i.imgur.com/RCwLEoQm.jpg",
        alt: "Three monumental stone busts with the heads that are disproportionately large with somber faces.",
    },
    {
        name: "Blue Nana",
        artist: "Niki de Saint Phalle",
        description:
            "The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.",
        url: "https://i.imgur.com/Sd1AgUOm.jpg",
        alt: "A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.",
    },
    {
        name: "Ultimate Form",
        artist: "Barbara Hepworth",
        description:
            "This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.",
        url: "https://i.imgur.com/2heNQDcm.jpg",
        alt: "A tall sculpture made of three elements stacked on each other reminding of a human figure.",
    },
    {
        name: "Cavaliere",
        artist: "Lamidi Olonade Fakeye",
        description:
            "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
        url: "https://i.imgur.com/wIdGuZwm.png",
        alt: "An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.",
    },
    {
        name: "Big Bellies",
        artist: "Alina Szapocznikow",
        description:
            "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
        url: "https://i.imgur.com/AlHTAdDm.jpg",
        alt: "The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.",
    },
    {
        name: "Terracotta Army",
        artist: "Unknown Artist",
        description:
            "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.",
        url: "https://i.imgur.com/HMFmH6m.jpg",
        alt: "12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.",
    },
    {
        name: "Lunar Landscape",
        artist: "Louise Nevelson",
        description:
            "Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.",
        url: "https://i.imgur.com/rN7hY6om.jpg",
        alt: "A black matte sculpture where the individual elements are initially indistinguishable.",
    },
    {
        name: "Aureole",
        artist: "Ranjani Shettar",
        description:
            'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
        url: "https://i.imgur.com/okTpbHhm.jpg",
        alt: "A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.",
    },
    {
        name: "Hippos",
        artist: "Taipei Zoo",
        description:
            "The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.",
        url: "https://i.imgur.com/6o5Vuyu.jpg",
        alt: "A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.",
    },
];

export const people = [
    {
        id: 0, // Used in JSX as a key
        name: "Creola Katherine Johnson",
        profession: "mathematician",
        accomplishment: "spaceflight calculations",
        imageId: "MK3eW3A",
    },
    {
        id: 1, // Used in JSX as a key
        name: "Mario José Molina-Pasquel Henríquez",
        profession: "chemist",
        accomplishment: "discovery of Arctic ozone hole",
        imageId: "mynHUSa",
    },
    {
        id: 2, // Used in JSX as a key
        name: "Mohammad Abdus Salam",
        profession: "physicist",
        accomplishment: "electromagnetism theory",
        imageId: "bE7W1ji",
    },
    {
        id: 3, // Used in JSX as a key
        name: "Percy Lavon Julian",
        profession: "chemist",
        accomplishment:
            "pioneering cortisone drugs, steroids and birth control pills",
        imageId: "IOjWm71",
    },
    {
        id: 4, // Used in JSX as a key
        name: "Percy Lavon Julian",
        profession: "chemist",
        accomplishment:
            "pioneering cortisone drugs, steroids and birth control pills",
        imageId: "IOjWm71",
    },
];

const todoList = [
    {
        id: 1,
        todo: "Do something nice for someone I care about",
        status: "pending",
    },
    {
        id: 2,
        todo: "Memorize the fifty states and their capitals",
        status: "pending",
    },
    {
        id: 3,
        todo: "Watch a classic movie",
        status: "pending",
    },
    {
        id: 4,
        todo: "Contribute code or a monetary donation ",
        status: "pending",
    },
];

export default products;
export { sculptureList, todoList };
