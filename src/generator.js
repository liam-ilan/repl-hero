// possible bars
const bars = [
  {
    id: 1,
    content: [
      [1],
      [2],
      [3],
      [2],
    ],
    next: [2, 1, 3, 5, 7],
  },
  {
    id: 2,
    content: [
      [2],
      [3],
      [],
      [4, 2],
    ],
    next: [3, 9],
  },
  {
    id: 3,
    content: [
      [2],
      [1],
      [],
      [1, 5],
    ],
    next: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 4,
    content: [
      [5],
      [3],
      [4],
      [2],
    ],
    next: [6, 7, 4, 8],
  },
  {
    id: 5,
    content: [
      [2],
      [1],
      [3],
      [1],
    ],
    next: [4, 7],
  },
  {
    id: 6,
    content: [
      [1],
      [2],
      [3, 1],
      [],
    ],
    next: [7],
  },
  {
    id: 7,
    content: [
      [3],
      [3],
      [1],
      [],
    ],
    next: [6, 8],
  },
  {
    id: 8,
    content: [
      [2],
      [2],
      [2, 4],
      [2],
    ],
    next: [8, 5, 9],
  },
  {
    id: 9,
    content: [
      [3],
      [3],
      [1],
      [1],
    ],
    next: [8, 5, 7, 1],
  },
];

export default function generate(bar = 'default') {
  // return random bar for initilization
  if (bar === 'default') {
    return bars[Math.floor(Math.random() * bars.length)];
  }

  // find id of next bar
  // randomly picked
  const nextId = bar.next[Math.floor(Math.random() * bar.next.length)];

  // init result
  let result = {};

  // find and return bar
  bars.forEach((item) => {
    if (item.id === nextId) {
      result = item;
    }
  });
  return result;
}
