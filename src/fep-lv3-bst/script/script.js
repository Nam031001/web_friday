// 그리드와 컬럼을 가져온다.
let grid = document.body.querySelector('#grid');
let stickies = document.body.querySelectorAll('.column > .sticky');

// console.log(grid);
// console.log(stickies);

stickies.forEach((eachSticky, idx) => {
  eachSticky.dataset.nth = idx + 1;
  // nth에 인덱스값을 붙여준다.
  eachSticky.addEventListener('click', (e) => {
    let clickedNth = e.currentTarget.dataset.nth;
    grid.dataset.selectedNth = clickedNth;
  });
  //해당 nth구간을 클릭하면 개발자도구상에서 숫자가 바뀐다.
});
