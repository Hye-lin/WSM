// 달력
const calendarContainerDiv = document.querySelector("#calendar-container");

// 현재 날짜 구하자
let currentDate = new Date();

const setCalendarHeader = (date) => {
    // 연도 구하자
    const year = date.getFullYear();
    // 달 구하자
    const month = date.getMonth();  // 0: 1월, 1: 2월

    titleString = `${year}년 ${month + 1}월`;
    const calendarHeaderH1 = document.querySelector("#calendar-header h1");
    calendarHeaderH1.innerHTML = titleString;
}
const changeMonth = (delta) => {
    currentDate.setMonth(currentDate.getMonth() + delta);
    setCalendarHeader(currentDate);
    setCalendar(currentDate);
}

// 이전 달 버튼 이벤트 처리하자
const prevMonthButton = document.getElementById("prev-month");
prevMonthButton.addEventListener("click", () => changeMonth(-1)); // console.log() 함수 실행한 결과를 클릭했을 때 실행하는거야. 즉 아무일도 안 함

// 다음 달 버튼 이벤트 처리하자
const nextMonthButton = document.querySelector("#next-month");
nextMonthButton.onclick = () => changeMonth(1);

// 달력 표시하자(요일, 날짜)
const setCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    // 이전 달 마지막 날짜 구하자: 이번 달 첫날 - 1
    const prevMonthLastDate = new Date(year, month, 0);

    // 첫 날의 요일 구하자: 이전달 뒷 날짜 쓰기 위하여
    const firstDay = new Date(year, month, 1).getDay(); //0: 일, 6: 토
    console.log(firstDay);

    // 마지막 날짜 구하자: 요일 구하기 위하여
    const lastDate = new Date(year, month + 1, 0)
    console.log(lastDate.getDate());

    // 마지막 날의 요일 구하자: 다음달 앞 날짜 쓰기 위하여
    const lastDay = lastDate.getDay();
    console.log(lastDay);

    // 일월화수목금토
    let weekNameString = "";
    const weekNames = "일월화수목금토";
    const weekNamesArray = weekNames.split("");
    weekNamesArray.forEach((weekName) => {
        weekNameString += `<div class="item week-name">${weekName}</div>`
    });

    calendarContainerDiv.innerHTML = weekNameString;
    
    // 이전 달 뒷날짜 구하자
    // 0~1까지 마지막 날짜 - n개부터 차례로 날짜 쓰자. n: 마지막 날짜 - 이번달 1일의 요일 + 1
    // ?~이전 달 마지막 날짜 ?: 이전 달 마지막 날짜 - 이번 달 첫날의 요일 -1

    for (let date = (prevMonthLastDate.getDate() - firstDay + 1); date <= prevMonthLastDate.getDate(); date++) {
        let prevMonthDateDiv = document.createElement("div");
        prevMonthDateDiv.className = "item other-month";
        prevMonthDateDiv.textContent = date;    
        calendarContainerDiv.appendChild(prevMonthDateDiv); 
    }

    
    // 이번달 날짜들 쓰자: 1~30: 1~lastDate.getDate()
    // let dateString = "";
    // for (let date = 1; date <= lastDate.getDate(); date++) {
    //     dateString += `<div class="item">${date}</div>`;
    // }
    // calendarContainerDiv.innerHTML += dateString;
    
    // div요소 만들자, class에 item 넣자, text에 날짜 넣자. calendarContainerDiv에 자식으로 붙이자
    for (let date = 1; date <= lastDate.getDate(); date++) {
        let currentMonthDateDiv = document.createElement("div");
        currentMonthDateDiv.className = "item";
        currentMonthDateDiv.onclick = (event) => clickDate(event)  //<div class="item" onclick = "clickDate"</div>
        currentMonthDateDiv.dataset.date = `${year}-${month+1}-${date}`; 
        currentMonthDateDiv.textContent = date;    //<div class="item">1</div>
        calendarContainerDiv.appendChild(currentMonthDateDiv);  //<div id="celendar - container"></div>
    }

    // 다음 달 앞날짜 구하자
    // 1~? ?: 6-이번 달 마지막 날짜의 요일
    for (let date = 1; date <= (6 - lastDay); date++) {
        let nextMonthDateDiv = document.createElement("div");
        nextMonthDateDiv.className = "item other-month";
        nextMonthDateDiv.textContent = date;    
        calendarContainerDiv.appendChild(nextMonthDateDiv); 
        // f2 단축기 한번에 바꾸기 가능
    }


}

setCalendarHeader(currentDate);
setCalendar(currentDate);