
document.querySelector('button').addEventListener('click', event => {
    saveCounter();
});

function saveCounter() {
    
    if (sessionStorage) {
        // saveCount 속성이 존재하면
        if (sessionStorage.saveCount) {
            // 카운트 증가
            sessionStorage.saveCount = parseInt(sessionStorage.saveCount) + 1;
        } else {
            sessionStorage.saveCount = 1;
        }
        document.querySelector("#counter").innerHTML = `현재 횟수 : ${sessionStorage.saveCount}`;
    }
}

