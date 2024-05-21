//반응형 웹의 자바스크립트에서 하는 일
//1.html 요소를 가져와js 변수에 저장한다.
//2.이벤트를 처리한다.(click, foucus, mouseup등)
//3.클래스를 수정하여 스타일을 적용한다.



//.nav-list
//.nav-toggle

//햄버거 메뉴->닫기 버튼
// .nav-list아레로 내리자

//닫기 버튼->햄버거 메뉴
// .nav-list위로 올리자

const toggleMenu = () => {
    //HTML요소->js
    const navToggleDiv = document.getAnimationsByClassName("nav-toggle")[0];
    const navListU1 = document.getElementsByClassName("nav-list")[0];
    const toggleI = navToggleDiv.getAnimationsByClassName("i")[0];

    navToggleDiv.onclick = () => {
        //class에 show-menu를 붙이거나/때자
        navListU1.classList.toggle("show-menu");

        //toggle icon 바꾸자:di-list <-> di-x-lg
        toggleI.classList.toggle("di-list");
        //toggleI.classList.add("bi-list");
         //toggleI.classList.add("bx-lg");
          //toggleI.classList.add("bi-lg");
           //toggleI.classList.add("bi-list");
        toggleI.classList.toggle("di-x-lg");
    }
}
toggleMenu();
