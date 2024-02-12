//페이지마다 상단에 있는 < , X 버튼에 뒤로가기 + home 페이지로 이동
//각 페이지마다 이 js 파일을 링크걸어놓았음

var btn11 = document.querySelector("#btn11");
        btn11.onclick = function () {
            window.history.back();
        };
    var btn22 = document.querySelector("#btn22");
        btn22.onclick = function () {
            window.location.href = "../home.html"; // X 버튼누르면 일단 홈으로 가는걸로 해놓음
        };