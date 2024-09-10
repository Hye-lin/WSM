// 달력 만들기

// 현재 날짜 구하기
let currentDate = new Date();
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

// 첫 날의 요일 구하기
// 마지막 날짜 구하기
// 마지막 날의 요일 구하기

// 이전 달 뒷날짜 구하기

// 다음 달 앞날짜 구하기s