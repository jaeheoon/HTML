// 윈도우 창 화면 가운데 배치하기
function openCenter(url, name, width, height) {
  const x = (screen.availWidth-width) / 2;
  const y = (screen.availHeight-height) / 2;
  const option = `left = ${x}, top = ${y}, width = ${width}, height = ${height}`;
  open(url, name, option);
}

openCenter('../../hello.html', 'hi', '400', '400');









