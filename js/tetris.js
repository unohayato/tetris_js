let COLS = 10;
let ROWS = 20;
let board = [];
let lose;
let interval;
let intervalRender;
let current; //current moving shape
let currentX; //position of current shape
let currentY;
let freezed; // is current shape settled on the board ?
let shapes = [
  [1, 1, 1, 1],
  [1, 1, 1, 0,
   1],
  [1, 1, 1, 0,
   0, 0, 1, 0],
  [1, 1, 0, 0,
   1, 1],
  [1, 1, 0, 0,
   0, 1, 1],
  [0, 1, 1, 0,
   1, 1],
  [0, 1, 0, 0,
   1, 1, 1]
];

let colors = [
  'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
];



