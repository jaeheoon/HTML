let ssn = prompt('주민번호를 입력해주세요');
if (ssn === undefined) {
  alert('입력이 되지 않았습니다');
} else {
  const c = ssn.charAt(ssn.indexOf('-') + 1);
  switch (c) {
    case '1':
    case '3': console.log('남자'); break;
    case '2':
    case '4': console.log('여자'); break;
    default: console.log('외국인'); break;
  }
}


