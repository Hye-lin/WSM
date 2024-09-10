// 달력 만들기

// 현재 날짜 구하기
let currentDate = new Date();

//이전 달 버튼 이벤트 처리하기 
const prevMonthButton = document.getElementById("prev-month");
prevMonthButton.addEventListener("click",() => changeMonth (-1));

// => 얘는 이름이 없는 함수이다.

//다음 달 버튼 이벤트 처리하기
    const nextMonthButton = document.querySelector("#next-month"); /*console.log('이전달)) 하면 안돼. console.log() 함수 실행한 결과를 클릭했을때 실행하는거야. 즉 아무일도 안함 */
    nextMonthButton.onclick = () => changeMonth(1);

const changeMonth = (delta) => {
     currentDate.setMonth(currentDate.getMonth() + delta );
    setCalendarHeader(currentDate);
}
const setCalendarHeader = (date) => {
    // 연도 구하기
    const year = date.getFullYear();
    // 달 구하기
    const month = date.getMonth();

    titleString = `${year}년 ${month + 1}월`
    console.log(titleString)

    const calendarHeaderH1 = document.querySelector("#calendar-header h1");
    calendarHeaderH1.innerHTML = titleString
};
setCalendarHeader(currentDate);

// 일 구하기
const setCalnedar = (data) => {
    
}

// 첫 날의 요일 구하기
// 마지막 날짜 구하기
// 마지막 날의 요일 구하기

// 이전 달 뒷날짜 구하기

// 다음 달 앞날짜 구하기s