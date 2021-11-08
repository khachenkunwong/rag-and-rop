const fill = document.querySelector('.fill');
// querySelectorAll ใช้ตัวนี้เพราะเมื่อเราจะวางเเเล้วมันจะมีกรอบสีที่เราเลือกเเล้วเราถึงจะวางได้
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions
// ทำงานแค่ครั้งเดียวตอนเลือกวางเป้าหมาย
function dragStart() {
  console.log('dragStart');
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}
//ลากวางเสร็จสิ้นการทำงาน
function dragEnd() {
  console.log('dragEnd');
  this.className = 'fill';
}
// ทำงานเมื่อลากเเล้วจะว่างไปยังเป้าหมาย
function dragOver(e) {
  console.log('dragOver');
  e.preventDefault();
}
// ทำงานแค่ครั้งเดียวตอนเลือกวางเป้าหมาย
function dragEnter(e) {
  console.log('dragEnter');
  e.preventDefault();
  this.className += ' hovered';
}
// ลากค่าไว้เเต่ยังไม่พบเป้าหมาย
function dragLeave() {
  console.log('dragLeave');
  this.className = 'empty';
}
// ทำงานหลังจากวางเสร็จตามด้วย dragEnd
function dragDrop() {
  console.log('dragDrop');
  this.className = 'empty';
  this.append(fill);
}


// function setup() {
//   console.log('setup');
//   createCanvas(400, 300,WEBGL);
// }
// function draw() {
//   console.log('draw');
//   background(0);
//   fill(255,0,150);
//   rect(0,0,50,50);
// }
// setup();
// draw();

