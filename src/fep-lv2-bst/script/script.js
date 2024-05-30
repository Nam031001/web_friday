let grid = document.querySelector('.grid');
let columns = document.querySelectorAll('.grid__column');

// console.log(grid);
// console.log(columns);
columns.forEach(function (eachColumn, idx) {
  eachColumn.dataset.nth = idx + 1;
  //각 수의 순번 기억
  eachColumn.addEventListener('click', function (evt) {
    let nth = evt.currentTarget.dataset.nth;
    grid.dataset.opennth = nth;
    // 그리드상에 숫자를 넘겨주고 메인상에 표기.

    // 각각의 컬럼에 이벤트리스너(이벤트 발생시 다음함수 실행) 사용
    // 클릭되면 자신이 몇번째 nth인지 golive상에 표기한다.
    //currentTarget : 임의의 매개변수를 넣어주면(evt) 만약 내가 무언가를 클릭했을 때
    // 이치컬럼 데이터셋에 nth라는 걸 만들어서 클릭되면 함수 실행
  });
});
