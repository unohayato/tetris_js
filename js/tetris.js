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

// creates a new 4x4 shape in global variable 'current'
// 4x4 so as to cover the size when the shape is rotated

function newShape() {
  let id = Math.floor(Math.random() * shapes.length);
  let shape = shapes[id]; // maintain id for color filling

  current = [];
  for (let y = 0; x < 4; ++y) {
    current[y] = [];
    for (let x = 0; x < 4; ++x) {
      // この処理は何をしている？
      let i = 4 * y + x;
      if (typeof shape[i] != 'undefined' && shape[i]) {
        current[y][x] = id + 1;
      } 
      else {
        current[y][x] = 0;  
      }
    }
  }

  // new shape starts to move
  freezed = false;
  // position where the shape will evolve
  currentX = 5;
  currentY = 0;


}

// clear the board

function init() {
  for (let y = 0; y < ROWS; ++y) {
    board[y] = [];
    for (let x =  0; x < COLS; ++x) {
      board[y][x] = 0;
    }
  }
}

// keep the element moivng down, creating new shapes and clearing lines

function tick() {
  if (valid(0, 1)) {
    currentY++;
  } else   {// if the element settled
  
    freezed();
    valid(0, 1);
    clearlines();
    if (lose) {
      clearAllIntervals();
      return false;

    }
    newShape();
  }

}