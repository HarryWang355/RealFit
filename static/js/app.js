/**
 * RealFit: Measurement-Conditioned Virtual Try-On
 * Clean, Visual-First Interactive Project Webpage Controller
 */

const STUDIO_ITEMS = [
  {
    id: 'polo',
    title: 'White Piqué Polo Shirt',
    category: 'Upper Body · 5-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 182,
    inputIdx: 2,
    hemlinePct: 85.5,
    personImg: 'assets/teaser/polo_person.jpg',
    garmentImg: 'assets/teaser/polo_garment.jpg',
    scales: ['-15%', '-8%', 'Input Size', '+8%', '+15%'],
    frames: [
      'assets/teaser/polo_s0.jpg',
      'assets/teaser/polo_s1.jpg',
      'assets/teaser/polo_s2.jpg',
      'assets/teaser/polo_s3.jpg',
      'assets/teaser/polo_s4.jpg'
    ],
    measurements: [
      { L: 60, B: 86, W: -1, S: 17 },
      { L: 65, B: 94, W: -1, S: 18 },
      { L: 71, B: 102, W: -1, S: 20 },
      { L: 77, B: 110, W: -1, S: 22 },
      { L: 82, B: 118, W: -1, S: 23 }
    ]
  },
  {
    id: 'dress',
    title: 'Emerald Long-Sleeve Midi Dress',
    category: 'Dresses · 5-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 170,
    inputIdx: 2,
    hemlinePct: 74.8,
    personImg: 'assets/teaser/dress_person.jpg',
    garmentImg: 'assets/teaser/dress_garment.jpg',
    scales: ['-15%', '-8%', 'Input Size', '+8%', '+15%'],
    frames: [
      'assets/teaser/dress_s0.jpg',
      'assets/teaser/dress_s1.jpg',
      'assets/teaser/dress_s2.jpg',
      'assets/teaser/dress_s3.jpg',
      'assets/teaser/dress_s4.jpg'
    ],
    measurements: [
      { L: 101, B: 72, W: 60, S: -1 },
      { L: 110, B: 79, W: 66, S: -1 },
      { L: 120, B: 86, W: 72, S: -1 },
      { L: 130, B: 93, W: 78, S: -1 },
      { L: 139, B: 100, W: 84, S: -1 }
    ]
  },
  {
    id: 'tank',
    title: 'Orange Athletic Tank Top',
    category: 'Upper Body · 9-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 173,
    inputIdx: 4,
    hemlinePct: 80.5,
    personImg: 'assets/sweeps/tank_person.jpg',
    garmentImg: 'assets/sweeps/tank_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/tank_s${i}.jpg`),
    measurements: [
      { L: 46, B: 69, W: -1, S: -1 },
      { L: 49, B: 73, W: -1, S: -1 },
      { L: 52, B: 77, W: -1, S: -1 },
      { L: 55, B: 82, W: -1, S: -1 },
      { L: 58, B: 86, W: -1, S: -1 },
      { L: 61, B: 90, W: -1, S: -1 },
      { L: 64, B: 95, W: -1, S: -1 },
      { L: 67, B: 99, W: -1, S: -1 },
      { L: 70, B: 103, W: -1, S: -1 }
    ]
  },
  {
    id: 'blazer',
    title: 'Grey Double-Breasted Blazer',
    category: 'Outerwear · 9-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 176,
    inputIdx: 4,
    hemlinePct: 46.2,
    personImg: 'assets/sweeps/blazer_person.jpg',
    garmentImg: 'assets/sweeps/blazer_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/blazer_s${i}.jpg`),
    measurements: [
      { L: 58, B: 83, W: -1, S: 49 },
      { L: 61, B: 88, W: -1, S: 52 },
      { L: 65, B: 94, W: -1, S: 55 },
      { L: 68, B: 99, W: -1, S: 58 },
      { L: 72, B: 104, W: -1, S: 61 },
      { L: 76, B: 109, W: -1, S: 64 },
      { L: 79, B: 114, W: -1, S: 67 },
      { L: 83, B: 120, W: -1, S: 70 },
      { L: 86, B: 125, W: -1, S: 73 }
    ]
  },
  {
    id: 'pants',
    title: 'Cream Straight-Leg Trousers',
    category: 'Lower Body · 9-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 175,
    inputIdx: 4,
    hemlinePct: 82.5,
    personImg: 'assets/sweeps/pants_person.jpg',
    garmentImg: 'assets/sweeps/pants_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/pants_s${i}.jpg`),
    measurements: [
      { L: 78, B: -1, W: 58, S: -1 },
      { L: 83, B: -1, W: 61, S: -1 },
      { L: 88, B: -1, W: 65, S: -1 },
      { L: 93, B: -1, W: 68, S: -1 },
      { L: 98, B: -1, W: 72, S: -1 },
      { L: 103, B: -1, W: 76, S: -1 },
      { L: 108, B: -1, W: 79, S: -1 },
      { L: 113, B: -1, W: 83, S: -1 },
      { L: 118, B: -1, W: 86, S: -1 }
    ]
  },
  {
    id: 'puff_blouse',
    title: 'White Puff-Sleeve Blouse',
    category: 'Upper Body · 9-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 172,
    inputIdx: 4,
    hemlinePct: 30.2,
    personImg: 'assets/sweeps/puff_blouse_person.jpg',
    garmentImg: 'assets/sweeps/puff_blouse_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/puff_blouse_s${i}.jpg`),
    measurements: [
      { L: 45, B: 74, W: -1, S: 24 },
      { L: 48, B: 78, W: -1, S: 26 },
      { L: 50, B: 83, W: -1, S: 27 },
      { L: 53, B: 87, W: -1, S: 29 },
      { L: 56, B: 92, W: -1, S: 30 },
      { L: 59, B: 97, W: -1, S: 32 },
      { L: 62, B: 101, W: -1, S: 33 },
      { L: 64, B: 106, W: -1, S: 35 },
      { L: 67, B: 110, W: -1, S: 36 }
    ]
  },
  {
    id: 'denim_jacket',
    title: 'Indigo Trucker Denim Jacket',
    category: 'Outerwear · 9-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 175,
    inputIdx: 4,
    hemlinePct: 73.5,
    personImg: 'assets/sweeps/denim_jacket_person.jpg',
    garmentImg: 'assets/sweeps/denim_jacket_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/denim_jacket_s${i}.jpg`),
    measurements: [
      { L: 48, B: 80, W: -1, S: 46 },
      { L: 51, B: 85, W: -1, S: 49 },
      { L: 54, B: 90, W: -1, S: 52 },
      { L: 57, B: 95, W: -1, S: 55 },
      { L: 60, B: 100, W: -1, S: 58 },
      { L: 63, B: 105, W: -1, S: 61 },
      { L: 66, B: 110, W: -1, S: 64 },
      { L: 69, B: 115, W: -1, S: 67 },
      { L: 72, B: 120, W: -1, S: 70 }
    ]
  },
  {
    id: 'black_dress',
    title: 'Black Camisole Slip Dress',
    category: 'Dresses · 9-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 174,
    inputIdx: 4,
    hemlinePct: 87.2,
    personImg: 'assets/sweeps/black_dress_person.jpg',
    garmentImg: 'assets/sweeps/black_dress_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/black_dress_s${i}.jpg`),
    measurements: [
      { L: 86, B: 69, W: 54, S: -1 },
      { L: 92, B: 73, W: 58, S: -1 },
      { L: 97, B: 77, W: 61, S: -1 },
      { L: 103, B: 82, W: 65, S: -1 },
      { L: 108, B: 86, W: 68, S: -1 },
      { L: 113, B: 90, W: 71, S: -1 },
      { L: 119, B: 95, W: 75, S: -1 },
      { L: 124, B: 99, W: 78, S: -1 },
      { L: 130, B: 103, W: 82, S: -1 }
    ]
  },
  {
    id: 'ivory_dress',
    title: 'Ivory Puff-Sleeve Tiered Dress',
    category: 'Dresses · 9-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 173,
    inputIdx: 4,
    hemlinePct: 80.2,
    personImg: 'assets/sweeps/ivory_dress_person.jpg',
    garmentImg: 'assets/sweeps/ivory_dress_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/ivory_dress_s${i}.jpg`),
    measurements: [
      { L: 90, B: 68, W: 56, S: -1 },
      { L: 95, B: 72, W: 60, S: -1 },
      { L: 101, B: 76, W: 63, S: -1 },
      { L: 106, B: 81, W: 67, S: -1 },
      { L: 112, B: 85, W: 70, S: -1 },
      { L: 118, B: 89, W: 74, S: -1 },
      { L: 123, B: 94, W: 77, S: -1 },
      { L: 129, B: 98, W: 81, S: -1 },
      { L: 134, B: 102, W: 84, S: -1 }
    ]
  },
  {
    id: 'overshirt',
    title: 'Brown Button-Up Shacket',
    category: 'Outerwear · 9-Step',
    group: 'web',
    source: 'RealFIT-Web',
    heightCm: 183,
    inputIdx: 4,
    hemlinePct: 48.2,
    personImg: 'assets/sweeps/overshirt_person.jpg',
    garmentImg: 'assets/sweeps/overshirt_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/overshirt_s${i}.jpg`),
    measurements: [
      { L: 59, B: 90, W: -1, S: 51 },
      { L: 63, B: 95, W: -1, S: 54 },
      { L: 67, B: 101, W: -1, S: 58 },
      { L: 70, B: 106, W: -1, S: 61 },
      { L: 74, B: 112, W: -1, S: 64 },
      { L: 78, B: 118, W: -1, S: 67 },
      { L: 81, B: 123, W: -1, S: 70 },
      { L: 85, B: 129, W: -1, S: 74 },
      { L: 89, B: 134, W: -1, S: 77 }
    ]
  },
  {
    id: 'gap_hoodie',
    title: 'Mustard Yellow GAP Hoodie',
    category: 'RealFIT-Bench · 9-Step',
    group: 'bench',
    source: 'RealFIT-Bench',
    heightCm: 170,
    inputIdx: 4,
    hemlinePct: 74.5,
    personImg: 'assets/sweeps/gap_hoodie_person.jpg',
    garmentImg: 'assets/sweeps/gap_hoodie_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/gap_hoodie_s${i}.jpg`),
    measurements: [
      { L: 51, B: 88, W: -1, S: 48 },
      { L: 54, B: 94, W: -1, S: 51 },
      { L: 58, B: 99, W: -1, S: 54 },
      { L: 61, B: 105, W: -1, S: 57 },
      { L: 64, B: 110, W: -1, S: 60 },
      { L: 67, B: 116, W: -1, S: 63 },
      { L: 70, B: 121, W: -1, S: 66 },
      { L: 74, B: 127, W: -1, S: 69 },
      { L: 77, B: 132, W: -1, S: 72 }
    ]
  },
  {
    id: 'nike_tee',
    title: 'Black Nike Graphic Crewneck Tee',
    category: 'RealFIT-Bench · 9-Step',
    group: 'bench',
    source: 'RealFIT-Bench',
    heightCm: 178,
    inputIdx: 4,
    hemlinePct: 88.2,
    personImg: 'assets/sweeps/nike_tee_person.jpg',
    garmentImg: 'assets/sweeps/nike_tee_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/nike_tee_s${i}.jpg`),
    measurements: [
      { L: 54, B: 82, W: -1, S: 18 },
      { L: 58, B: 87, W: -1, S: 19 },
      { L: 61, B: 92, W: -1, S: 20 },
      { L: 65, B: 97, W: -1, S: 21 },
      { L: 68, B: 102, W: -1, S: 22 },
      { L: 71, B: 107, W: -1, S: 23 },
      { L: 75, B: 112, W: -1, S: 24 },
      { L: 78, B: 117, W: -1, S: 25 },
      { L: 82, B: 122, W: -1, S: 26 }
    ]
  },
  {
    id: 'sky_tee',
    title: 'Sky-Blue Athletic T-Shirt',
    category: 'RealFIT-Bench · 9-Step',
    group: 'bench',
    source: 'RealFIT-Bench',
    heightCm: 168,
    inputIdx: 4,
    hemlinePct: 80.8,
    personImg: 'assets/sweeps/sky_tee_person.jpg',
    garmentImg: 'assets/sweeps/sky_tee_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/sky_tee_s${i}.jpg`),
    measurements: [
      { L: 52, B: 80, W: -1, S: 17 },
      { L: 55, B: 85, W: -1, S: 18 },
      { L: 59, B: 90, W: -1, S: 19 },
      { L: 62, B: 95, W: -1, S: 20 },
      { L: 65, B: 100, W: -1, S: 21 },
      { L: 68, B: 105, W: -1, S: 22 },
      { L: 72, B: 110, W: -1, S: 23 },
      { L: 75, B: 115, W: -1, S: 24 },
      { L: 78, B: 120, W: -1, S: 25 }
    ]
  },
  {
    id: 'plaid_pullover',
    title: 'Green/Navy Plaid Half-Zip Pullover',
    category: 'RealFIT-Bench · 9-Step',
    group: 'bench',
    source: 'RealFIT-Bench',
    heightCm: 179,
    inputIdx: 4,
    hemlinePct: 80.2,
    personImg: 'assets/sweeps/plaid_pullover_person.jpg',
    garmentImg: 'assets/sweeps/plaid_pullover_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/plaid_pullover_s${i}.jpg`),
    measurements: [
      { L: 58, B: 88, W: -1, S: 50 },
      { L: 61, B: 94, W: -1, S: 53 },
      { L: 65, B: 99, W: -1, S: 56 },
      { L: 68, B: 105, W: -1, S: 59 },
      { L: 72, B: 110, W: -1, S: 62 },
      { L: 76, B: 116, W: -1, S: 65 },
      { L: 79, B: 121, W: -1, S: 68 },
      { L: 83, B: 127, W: -1, S: 71 },
      { L: 86, B: 132, W: -1, S: 74 }
    ]
  },
  {
    id: 'charcoal_shirt',
    title: 'Charcoal Long-Sleeve Dress Shirt',
    category: 'RealFIT-Bench · 9-Step',
    group: 'bench',
    source: 'RealFIT-Bench',
    heightCm: 181,
    inputIdx: 4,
    hemlinePct: 60.5,
    personImg: 'assets/sweeps/charcoal_shirt_person.jpg',
    garmentImg: 'assets/sweeps/charcoal_shirt_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/charcoal_shirt_s${i}.jpg`),
    measurements: [
      { L: 56, B: 86, W: -1, S: 18 },
      { L: 60, B: 92, W: -1, S: 19 },
      { L: 63, B: 97, W: -1, S: 21 },
      { L: 67, B: 103, W: -1, S: 22 },
      { L: 70, B: 108, W: -1, S: 23 },
      { L: 74, B: 113, W: -1, S: 24 },
      { L: 77, B: 119, W: -1, S: 25 },
      { L: 81, B: 124, W: -1, S: 26 },
      { L: 84, B: 130, W: -1, S: 28 }
    ]
  },
  {
    id: 'seated_pants',
    title: 'Beige Chino Pants (Seated Pose)',
    category: 'RealFIT-Bench · 9-Step',
    group: 'bench',
    source: 'RealFIT-Bench',
    heightCm: 177,
    inputIdx: 4,
    hemlinePct: 80.8,
    personImg: 'assets/sweeps/seated_pants_person.jpg',
    garmentImg: 'assets/sweeps/seated_pants_garment.jpg',
    scales: ['-20%', '-15%', '-10%', '-5%', 'Input Size', '+5%', '+10%', '+15%', '+20%'],
    frames: Array.from({ length: 9 }, (_, i) => `assets/sweeps/seated_pants_s${i}.jpg`),
    measurements: [
      { L: 77, B: -1, W: 61, S: -1 },
      { L: 82, B: -1, W: 65, S: -1 },
      { L: 86, B: -1, W: 68, S: -1 },
      { L: 91, B: -1, W: 72, S: -1 },
      { L: 96, B: -1, W: 76, S: -1 },
      { L: 101, B: -1, W: 80, S: -1 },
      { L: 106, B: -1, W: 84, S: -1 },
      { L: 110, B: -1, W: 87, S: -1 },
      { L: 115, B: -1, W: 91, S: -1 }
    ]
  }
];

const INDEP_ITEMS = {
  puffer: {
    person: 'assets/independent/puffer_person.jpg',
    garment: 'assets/independent/puffer_garment.jpg',
    dims: {
      length: {
        hemlinePct: 78.8,
        frames: [
          'assets/independent/puffer_L0.jpg',
          'assets/independent/puffer_L1.jpg',
          'assets/independent/puffer_L2.jpg'
        ],
        labels: ['−10% Length', '+0% (Input Size)', '+10% Length']
      },
      width: {
        hemlinePct: 78.8,
        frames: [
          'assets/independent/puffer_B0.jpg',
          'assets/independent/puffer_B1.jpg',
          'assets/independent/puffer_B2.jpg'
        ],
        labels: ['−10% Bust', '+0% (Input Size)', '+10% Bust']
      },
      sleeve: {
        hemlinePct: 75.2,
        frames: [
          'assets/independent/puffer_S0.jpg',
          'assets/independent/puffer_S1.jpg',
          'assets/independent/puffer_S2.jpg'
        ],
        labels: ['−10% Sleeve', '+0% (Input Size)', '+10% Sleeve']
      }
    }
  },
  pullover: {
    person: 'assets/independent/pullover_person.jpg',
    garment: 'assets/independent/pullover_garment.jpg',
    dims: {
      length: {
        hemlinePct: 35.8,
        frames: [
          'assets/independent/pullover_L0.jpg',
          'assets/independent/pullover_L1.jpg',
          'assets/independent/pullover_L2.jpg'
        ],
        labels: ['−10% Length', '+0% (Input Size)', '+10% Length']
      },
      width: {
        hemlinePct: 39.2,
        frames: [
          'assets/independent/pullover_B0.jpg',
          'assets/independent/pullover_B1.jpg',
          'assets/independent/pullover_B2.jpg'
        ],
        labels: ['−10% Bust', '+0% (Input Size)', '+10% Bust']
      },
      sleeve: {
        hemlinePct: 41.8,
        frames: [
          'assets/independent/pullover_S0.jpg',
          'assets/independent/pullover_S1.jpg',
          'assets/independent/pullover_S2.jpg'
        ],
        labels: ['−10% Sleeve', '+0% (Input Size)', '+10% Sleeve']
      }
    }
  }
};

const HEIGHT_ITEMS = {
  pink_dress: {
    person: 'assets/height/pink_dress_person.jpg',
    garment: 'assets/height/pink_dress_garment.jpg',
    garmentSpec: 'L = 82 cm · B = 84 cm · W = 68 cm',
    hemlinePct: 79.5,
    steps: [
      { h: 'H = 175 cm (+10 cm)', sub: 'Taller → Higher Hem', img: 'assets/height/pink_dress_h175.jpg' },
      { h: 'H = 165 cm (Input)', sub: 'Original Subject Height', img: 'assets/height/pink_dress_h165.jpg', isInput: true },
      { h: 'H = 155 cm (−10 cm)', sub: 'Shorter → Lower Hem', img: 'assets/height/pink_dress_h155.jpg' }
    ]
  },
  navy_tee: {
    person: 'assets/height/navy_tee_person.jpg',
    garment: 'assets/height/navy_tee_garment.jpg',
    garmentSpec: 'L = 72 cm · B = 106 cm · S = 22 cm',
    hemlinePct: 46.5,
    steps: [
      { h: 'H = 192 cm (+10 cm)', sub: 'Taller → Higher Hip Fit', img: 'assets/height/navy_tee_h192.jpg' },
      { h: 'H = 182 cm (Input)', sub: 'Original Subject Height', img: 'assets/height/navy_tee_h182.jpg', isInput: true },
      { h: 'H = 172 cm (−10 cm)', sub: 'Shorter → Lower Hip Fit', img: 'assets/height/navy_tee_h172.jpg' }
    ]
  }
};

const ARENA_CASES = {
  lace_top: {
    title: 'Black Lace Off-Shoulder Top',
    split: 'RealFIT-Web',
    measText: 'H: 174 cm · Input Size: L=54 cm, B=84 cm, S=58 cm',
    gtHem: 68.8,
    perMethodHem: {
      idm_vton: 63.5,
      qwen_edit: 66.0,
      fit: 69.2,
      nano_banana: 68.5,
      ours_no_lmc: 69.5,
      ours: 69.2
    },
    person: 'assets/qualitative/lace_top_person.jpg',
    garment: 'assets/qualitative/lace_top_garment.jpg',
    gt: 'assets/qualitative/lace_top_gt.jpg'
  },
  floral_dress: {
    title: 'Green Floral Layered Slip Dress',
    split: 'RealFIT-Web',
    measText: 'H: 176 cm · Input Size: L=118 cm, B=86 cm, W=70 cm',
    gtHem: 79.1,
    perMethodHem: {
      idm_vton: 79.6,
      qwen_edit: 74.3,
      fit: 65.2,
      nano_banana: 79.2,
      ours_no_lmc: 77.2,
      ours: 79.2
    },
    person: 'assets/qualitative/floral_dress_person.jpg',
    garment: 'assets/qualitative/floral_dress_garment.jpg',
    gt: 'assets/qualitative/floral_dress_gt.jpg'
  },
  red_polo: {
    title: 'Red Short-Sleeve Polo Shirt',
    split: 'RealFIT-Bench',
    measText: 'H: 181 cm · Input Size: L=71 cm, B=104 cm, S=22 cm',
    gtHem: 71.8,
    perMethodHem: {
      idm_vton: 78.3,
      qwen_edit: 77.7,
      fit: 72.1,
      nano_banana: 78.2,
      ours_no_lmc: 69.2,
      ours: 69.2
    },
    person: 'assets/qualitative/red_polo_person.jpg',
    garment: 'assets/qualitative/red_polo_garment.jpg',
    gt: 'assets/qualitative/red_polo_gt.jpg'
  },
  black_joggers: {
    title: 'Black Tapered Lounge Pants',
    split: 'RealFIT-Bench',
    measText: 'H: 173 cm · Input Size: L=96 cm, W=78 cm',
    gtHem: 83.8,
    perMethodHem: {
      idm_vton: 81.0,
      qwen_edit: 79.5,
      fit: null,
      nano_banana: 83.8,
      ours_no_lmc: 83.2,
      ours: 83.5
    },
    person: 'assets/qualitative/black_joggers_person.jpg',
    garment: 'assets/qualitative/black_joggers_garment.jpg',
    gt: 'assets/qualitative/black_joggers_gt.jpg'
  }
};

const ARENA_METHODS = [
  { key: 'idm_vton', name: 'IDM-VTON', note: 'Static across sizes' },
  { key: 'qwen_edit', name: 'Qwen-Image-Edit', note: 'Ignores metric prompt' },
  { key: 'fit', name: 'FIT', note: 'Tops only · 3D sim' },
  { key: 'nano_banana', name: 'Nanobanana 2', note: 'Coarse size jumps' },
  { key: 'ours_no_lmc', name: 'Ours w.o LMC', note: 'Without LMC loss' },
  { key: 'ours', name: 'Ours (RealFIT)', note: 'Accurate metric fit', isOurs: true }
];

document.addEventListener('DOMContentLoaded', () => {
  document.body.setAttribute('data-theme', 'nordic');
  initStickyNav();
  initFitStudio();
  initIndependentController();
  initHeightController();
  initSotaArena();
  initBibtexCopy();
});

// 0. Live Template & Color Scheme Candidate Switcher
function initThemeCandidateSwitcher() {
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const validThemes = ['atelier', 'swiss', 'nordic', 'obsidian'];
  const params = new URLSearchParams(window.location.search);
  const urlTheme = params.get('theme');
  const savedTheme = localStorage.getItem('realfit_theme_candidate');
  const initialTheme = validThemes.includes(urlTheme)
    ? urlTheme
    : (validThemes.includes(savedTheme) ? savedTheme : 'atelier');

  function applyTheme(t) {
    document.body.setAttribute('data-theme', t);
    buttons.forEach(b => {
      b.classList.toggle('active', b.dataset.themeChoice === t);
    });
    try {
      localStorage.setItem('realfit_theme_candidate', t);
    } catch (e) {}
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.dataset.themeChoice);
    });
  });

  applyTheme(initialTheme);
}

// 1. Sticky Nav Scroll Spy
function initStickyNav() {
  const links = document.querySelectorAll('.nav-link');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

  window.addEventListener('scroll', () => {
    const pos = window.scrollY + 140;
    let currentId = '#top';
    sections.forEach(sec => {
      if (sec.offsetTop <= pos) currentId = '#' + sec.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === currentId);
    });
  }, { passive: true });
}

// 2. Interactive Continuous Size Sweeps (16 Garments · 3-Up Live Comparison + Full Filmstrip)
function initFitStudio() {
  let currentGroup = 'all';
  let currentItem = STUDIO_ITEMS[0];
  let currentIdx = currentItem.inputIdx;
  let isPlaying = false;
  let playTimer = null;
  let playDir = 1;
  let showGuide = true;

  const chipContainer = document.getElementById('studio-garment-chips');
  const filterBtns = document.querySelectorAll('[data-studio-filter]');
  const guideBtn = document.getElementById('studio-guide-btn');
  const personImg = document.getElementById('studio-person-img');
  const garmentImg = document.getElementById('studio-garment-img');
  const heightVal = document.getElementById('studio-height-val');
  const sourceTag = document.getElementById('studio-source-tag');
  const activeScaleText = document.getElementById('studio-active-scale-text');
  const measRows = document.getElementById('studio-meas-rows');

  const minCard = document.getElementById('studio-min-card');
  const minTitle = document.getElementById('studio-min-title');
  const minCm = document.getElementById('studio-min-cm');
  const minImg = document.getElementById('studio-min-img');

  const mainImg = document.getElementById('studio-main-img');
  const scaleBadge = document.getElementById('studio-scale-badge');
  const activeCm = document.getElementById('studio-active-cm');

  const maxCard = document.getElementById('studio-max-card');
  const maxTitle = document.getElementById('studio-max-title');
  const maxCm = document.getElementById('studio-max-cm');
  const maxImg = document.getElementById('studio-max-img');

  const slider = document.getElementById('studio-range-slider');
  const playBtn = document.getElementById('studio-play-btn');
  const scalePills = document.getElementById('studio-scale-pills');
  const filmstripGrid = document.getElementById('studio-filmstrip-grid');

  function formatCompactMeas(m) {
    const parts = [`L:${m.L}cm`];
    if (m.B > 0) parts.push(`B:${m.B}cm`);
    else if (m.W > 0) parts.push(`W:${m.W}cm`);
    return parts.join(' · ');
  }

  function renderChips() {
    chipContainer.innerHTML = '';
    const list = currentGroup === 'all'
      ? STUDIO_ITEMS
      : STUDIO_ITEMS.filter(it => it.group === currentGroup);

    list.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'garment-pill' + (item.id === currentItem.id ? ' active' : '');
      btn.innerHTML = `
        <img src="${item.garmentImg}" alt="${item.title}" loading="lazy">
        <div>
          <div class="garment-pill-title">${item.title}</div>
          <div class="garment-pill-sub">${item.category}</div>
        </div>
      `;
      btn.addEventListener('click', () => {
        stopAutoPlay();
        selectItem(item);
      });
      chipContainer.appendChild(btn);
    });
  }

  function selectItem(item, customIdx) {
    currentItem = item;
    currentIdx = typeof customIdx === 'number' ? customIdx : item.inputIdx;
    item.frames.forEach(src => { const im = new Image(); im.src = src; });
    renderChips();

    personImg.src = item.personImg;
    garmentImg.src = item.garmentImg;
    heightVal.textContent = `${item.heightCm} cm`;
    sourceTag.textContent = item.source;

    const lastIdx = item.frames.length - 1;
    minTitle.textContent = `${item.scales[0].replace('-', '−')} (Smallest)`;
    minCm.textContent = formatCompactMeas(item.measurements[0]);
    minImg.src = item.frames[0];

    maxTitle.textContent = `${item.scales[lastIdx]} (Largest)`;
    maxCm.textContent = formatCompactMeas(item.measurements[lastIdx]);
    maxImg.src = item.frames[lastIdx];

    document.querySelectorAll('.studio-ref-line').forEach(el => {
      el.style.top = `${item.hemlinePct}%`;
      el.style.opacity = showGuide ? '1' : '0';
    });

    slider.max = lastIdx;
    slider.value = currentIdx;

    // Render clickable scale pills
    scalePills.innerHTML = '';
    item.scales.forEach((sc, idx) => {
      const pill = document.createElement('button');
      pill.className = 'scale-pill-btn' + (idx === currentIdx ? ' active' : '');
      pill.textContent = sc === 'Input Size' ? 'Input (0%)' : sc.replace('-', '−');
      pill.addEventListener('click', () => {
        stopAutoPlay();
        setFrame(idx);
      });
      scalePills.appendChild(pill);
    });

    // Render Full Progression Filmstrip Row
    filmstripGrid.classList.toggle('steps-5', item.frames.length === 5);
    filmstripGrid.innerHTML = '';
    item.frames.forEach((fsrc, idx) => {
      const m = item.measurements[idx];
      const cell = document.createElement('div');
      cell.className = 'film-thumb' + (idx === currentIdx ? ' active' : '');
      const scLabel = item.scales[idx] === 'Input Size' ? 'Input' : item.scales[idx].replace('-', '−');
      cell.innerHTML = `
        <div class="film-thumb-img-wrap">
          <img src="${fsrc}" alt="${item.scales[idx]}" loading="lazy">
          <div class="ref-hemline" style="top:${item.hemlinePct}%;opacity:${showGuide ? 1 : 0};"></div>
        </div>
        <div class="film-thumb-cap">${scLabel} · L:${m.L}cm</div>
      `;
      cell.addEventListener('click', () => {
        stopAutoPlay();
        setFrame(idx);
      });
      filmstripGrid.appendChild(cell);
    });

    setFrame(currentIdx);
  }

  function setFrame(idx) {
    currentIdx = idx;
    slider.value = idx;
    mainImg.src = currentItem.frames[idx];

    const sc = currentItem.scales[idx];
    const displaySc = sc === 'Input Size' ? 'Input Size (0%)' : sc.replace('-', '−');
    scaleBadge.textContent = displaySc;
    activeScaleText.textContent = displaySc;

    const m = currentItem.measurements[idx];
    activeCm.textContent = formatCompactMeas(m);

    Array.from(scalePills.children).forEach((p, i) => p.classList.toggle('active', i === idx));
    Array.from(filmstripGrid.children).forEach((c, i) => c.classList.toggle('active', i === idx));

    const baseM = currentItem.measurements[currentItem.inputIdx];
    renderMeasBars(m, baseM);
  }

  function renderMeasBars(m, baseM) {
    const dims = [
      { key: 'L', name: 'Length (L)', val: m.L, base: baseM.L, max: 145 },
      { key: 'B', name: 'Bust (B)', val: m.B, base: baseM.B, max: 135 },
      { key: 'W', name: 'Waist (W)', val: m.W, base: baseM.W, max: 105 },
      { key: 'S', name: 'Sleeve (S)', val: m.S, base: baseM.S, max: 80 }
    ];

    measRows.innerHTML = '';
    dims.forEach(d => {
      if (d.val <= 0) return;
      const diff = d.val - d.base;
      const dClass = diff < 0 ? 'neg' : (diff > 0 ? 'pos' : 'zero');
      const dStr = diff > 0 ? `+${diff}` : `${diff}`;
      const pct = Math.min(100, Math.max(15, Math.round((d.val / d.max) * 100)));
      const color = diff < 0 ? '#d97706' : (diff > 0 ? '#4338ca' : '#059669');

      const row = document.createElement('div');
      row.className = 'cm-row';
      row.innerHTML = `
        <div class="cm-row-top">
          <span class="cm-name">${d.name}</span>
          <span class="cm-val">${d.val}cm <span class="cm-delta ${dClass}">${dStr}</span></span>
        </div>
        <div class="cm-bar-bg">
          <div class="cm-bar-fill" style="width:${pct}%;background:${color};"></div>
        </div>
      `;
      measRows.appendChild(row);
    });
  }

  function startAutoPlay() {
    isPlaying = true;
    playBtn.classList.add('playing');
    playBtn.textContent = '⏸ Pause';
    playTimer = setInterval(() => {
      let next = currentIdx + playDir;
      if (next >= currentItem.frames.length) {
        playDir = -1;
        next = currentItem.frames.length - 2;
      } else if (next < 0) {
        playDir = 1;
        next = 1;
      }
      setFrame(next);
    }, 620);
  }

  function stopAutoPlay() {
    isPlaying = false;
    playBtn.classList.remove('playing');
    playBtn.textContent = '▶ Auto-Sweep';
    if (playTimer) {
      clearInterval(playTimer);
      playTimer = null;
    }
  }

  minCard.addEventListener('click', () => {
    stopAutoPlay();
    setFrame(0);
  });

  maxCard.addEventListener('click', () => {
    stopAutoPlay();
    setFrame(currentItem.frames.length - 1);
  });

  playBtn.addEventListener('click', () => {
    if (isPlaying) stopAutoPlay();
    else startAutoPlay();
  });

  slider.addEventListener('input', e => {
    stopAutoPlay();
    setFrame(parseInt(e.target.value, 10));
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stopAutoPlay();
      currentGroup = btn.dataset.studioFilter;
      filterBtns.forEach(b => b.classList.toggle('active', b === btn));
      const filtered = currentGroup === 'all'
        ? STUDIO_ITEMS
        : STUDIO_ITEMS.filter(it => it.group === currentGroup);
      if (filtered.length && !filtered.some(it => it.id === currentItem.id)) {
        selectItem(filtered[0]);
      } else {
        renderChips();
      }
    });
  });

  guideBtn.addEventListener('click', () => {
    showGuide = !showGuide;
    guideBtn.textContent = showGuide ? '✓ Reference Hemline Guide: ON' : 'Reference Hemline Guide: OFF';
    document.querySelectorAll('.studio-ref-line').forEach(el => {
      el.style.opacity = showGuide ? '1' : '0';
    });
    filmstripGrid.querySelectorAll('.ref-hemline').forEach(el => {
      el.style.opacity = showGuide ? '1' : '0';
    });
  });

  selectItem(STUDIO_ITEMS[0]);
}

// 3. Emergent Independent Measurement Control
function initIndependentController() {
  let activeGarment = 'puffer';
  let activeDim = 'length';

  const garmentBtns = document.querySelectorAll('[data-indep-garment]');
  const dimTabs = document.querySelectorAll('[data-indep-dim]');
  const personImg = document.getElementById('indep-person-img');
  const garmentImg = document.getElementById('indep-garment-img');
  const trioGrid = document.getElementById('indep-trio-grid');

  function renderIndep() {
    const item = INDEP_ITEMS[activeGarment];
    const dim = item.dims[activeDim];
    personImg.src = item.person;
    garmentImg.src = item.garment;

    trioGrid.innerHTML = '';
    dim.frames.forEach((fsrc, idx) => {
      const card = document.createElement('div');
      card.className = 'trio-card' + (idx === 1 ? ' highlight' : '');
      const lineHtml = activeDim === 'length'
        ? `<div class="ref-hemline" style="top:${dim.hemlinePct}%;"></div>`
        : '';
      card.innerHTML = `
        <div class="trio-img-wrap">
          <img src="${fsrc}" alt="${dim.labels[idx]}">
          ${lineHtml}
        </div>
        <div class="trio-card-label">${dim.labels[idx]}</div>
      `;
      trioGrid.appendChild(card);
    });
  }

  garmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeGarment = btn.dataset.indepGarment;
      garmentBtns.forEach(b => b.classList.toggle('active', b === btn));
      renderIndep();
    });
  });

  dimTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activeDim = tab.dataset.indepDim;
      dimTabs.forEach(t => t.classList.toggle('active', t === tab));
      renderIndep();
    });
  });

  renderIndep();
}

// 4. Subject Height Conditioning Controller
function initHeightController() {
  let activeItem = 'pink_dress';
  const btns = document.querySelectorAll('[data-height-item]');
  const personImg = document.getElementById('height-person-img');
  const garmentImg = document.getElementById('height-garment-img');
  const specEl = document.getElementById('height-fixed-spec');
  const trioGrid = document.getElementById('height-trio-grid');

  function renderHeight() {
    const item = HEIGHT_ITEMS[activeItem];
    personImg.src = item.person;
    garmentImg.src = item.garment;
    specEl.textContent = item.garmentSpec;

    trioGrid.innerHTML = '';
    item.steps.forEach(st => {
      const card = document.createElement('div');
      card.className = 'trio-card' + (st.isInput ? ' highlight' : '');
      card.innerHTML = `
        <div class="trio-img-wrap">
          <img src="${st.img}" alt="${st.h}">
          <div class="ref-hemline" style="top:${item.hemlinePct}%;"></div>
        </div>
        <div class="trio-card-label">
          <div>${st.h}</div>
          <div style="font-size:0.64rem;font-weight:500;color:var(--text-muted);">${st.sub}</div>
        </div>
      `;
      trioGrid.appendChild(card);
    });
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeItem = btn.dataset.heightItem;
      btns.forEach(b => b.classList.toggle('active', b === btn));
      renderHeight();
    });
  });

  renderHeight();
}

// 5. Qualitative Comparison Arena (7 Columns: Full-Size Ground Truth + 6 Methods)
function initSotaArena() {
  let activeCase = 'lace_top';
  let activeScale = 1; // Default to Input Size (0%) so it aligns directly with Ground Truth

  const caseBtns = document.querySelectorAll('[data-arena-case]');
  const scaleBtns = document.querySelectorAll('[data-arena-scale]');
  const metaText = document.getElementById('arena-meta-text');
  const grid = document.getElementById('arena-7col-grid');

  function updateContinuousArenaLine() {
    const c = ARENA_CASES[activeCase];
    const lineEl = document.getElementById('arena-continuous-line');
    const firstPhoto = grid.querySelector('.arena-main-photo');
    if (!lineEl || !firstPhoto) return;
    const topPx = firstPhoto.offsetTop + firstPhoto.offsetHeight * (c.gtHem / 100);
    lineEl.style.top = `${topPx}px`;
  }

  function renderArena() {
    const c = ARENA_CASES[activeCase];
    metaText.textContent = `${c.title} · ${c.split} · ${c.measText}`;

    grid.innerHTML = '';

    // Single continuous reference hemline across the entire 7-column row at GT size
    const globalLine = document.createElement('div');
    globalLine.id = 'arena-continuous-line';
    globalLine.className = 'arena-continuous-hemline';
    grid.appendChild(globalLine);

    // Column 1: Full-Size Ground Truth + Conditioning Inputs Pair
    const gtCol = document.createElement('div');
    gtCol.className = 'arena-col is-gt';
    gtCol.innerHTML = `
      <div class="arena-col-head">
        <div class="arena-col-title">Ground Truth (I_gt)</div>
        <div class="arena-col-sub">Real Photo · Input Size</div>
      </div>
      <div class="arena-main-photo">
        <img src="${c.gt}" alt="Ground Truth">
      </div>
      <div class="gt-inputs-mini-pair">
        <div class="gt-mini-box">
          <img src="${c.person}" alt="Input Person">
          <span>Person I_p</span>
        </div>
        <div class="gt-mini-box">
          <img src="${c.garment}" alt="Input Garment">
          <span>Garment I_g</span>
        </div>
      </div>
    `;
    grid.appendChild(gtCol);

    // Columns 2..7: 6 Methods
    ARENA_METHODS.forEach(m => {
      const col = document.createElement('div');
      col.className = 'arena-col' + (m.isOurs ? ' is-ours' : '');
      const mainSrc = `assets/qualitative/${activeCase}_${m.key}_s${activeScale}.jpg`;

      let miniHtml = '';
      ['−10%', 'Input', '+10%'].forEach((sl, sIdx) => {
        const tSrc = `assets/qualitative/${activeCase}_${m.key}_s${sIdx}.jpg`;
        miniHtml += `
          <div class="arena-mini-cell ${sIdx === activeScale ? 'active' : ''}" data-scale-idx="${sIdx}">
            <div class="arena-mini-cell-img">
              <img src="${tSrc}" alt="${sl}" loading="lazy">
            </div>
            <div class="arena-mini-tag">${sl}</div>
          </div>
        `;
      });

      col.innerHTML = `
        <div class="arena-col-head">
          <div class="arena-col-title">${m.name}</div>
          <div class="arena-col-sub">${m.note}</div>
        </div>
        <div class="arena-main-photo">
          <img src="${mainSrc}" alt="${m.name}">
        </div>
        <div class="arena-mini-trio">
          ${miniHtml}
        </div>
      `;

      col.querySelectorAll('.arena-mini-cell').forEach(cell => {
        cell.addEventListener('click', () => {
          activeScale = parseInt(cell.dataset.scaleIdx, 10);
          scaleBtns.forEach(b => b.classList.toggle('active', parseInt(b.dataset.arenaScale, 10) === activeScale));
          renderArena();
        });
      });

      grid.appendChild(col);
    });

    requestAnimationFrame(updateContinuousArenaLine);
    setTimeout(updateContinuousArenaLine, 60);
  }

  window.addEventListener('resize', updateContinuousArenaLine, { passive: true });

  caseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCase = btn.dataset.arenaCase;
      caseBtns.forEach(b => b.classList.toggle('active', b === btn));
      renderArena();
    });
  });

  scaleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeScale = parseInt(btn.dataset.arenaScale, 10);
      scaleBtns.forEach(b => b.classList.toggle('active', b === btn));
      renderArena();
    });
  });

  renderArena();
}

// 6. BibTeX Copy
function initBibtexCopy() {
  const btn = document.getElementById('copy-bibtex-btn');
  const code = document.getElementById('bibtex-code');
  if (!btn || !code) return;
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(code.textContent.trim()).then(() => {
      const orig = btn.textContent;
      btn.textContent = '✓ Copied!';
      setTimeout(() => { btn.textContent = orig; }, 2000);
    });
  });
}
