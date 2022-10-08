let canvas = document.getElementsByTagName('canvas')[0];
let ctx = canvas.getContext('2d');
let W = 300, H = 600;
let BLOCK_W = W / COLS, BLOCK_H = H / ROWS;

// draw a single square at (x, y)
function drawBlock(x, y){
  ctx.fillRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1, BLOCK_H- 1);
  ctx.strokeRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1, BLOCK_H- 1);

}