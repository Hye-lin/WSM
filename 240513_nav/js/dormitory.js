//selection-item 요소들 가져오자
const selectionItemDivs = document.getElementsByClassName("selection-item");

//네 개의 페이지 요소 가져오자
const calendarDiv = document.getElementById("calendar");
const selectionWashingmachineTimeDiv = document.getElementById("selection-washingmachine-time");
const selectionRoomNameDiv = document.querySelector("#selection-room-name");
const boardDiv = document.querySelector("#board");

// console.log(calendarDiv);
// console.log(selectionWashingmachineTimeDiv);
// console.log(selectionRoomNameDiv);
// console.log(boardDiv);

const pageDivs = [calendarDiv, selectionWashingmachineTimeDiv, selectionRoomNameDiv, boardDiv];
console.log(pageDivs);

const setPage = (page) => { //함수를 만든거임
    //clear selection
    for (const selectionItemDiv of selectionItemDivs){
        selectionItemDiv.classList.remove("select-menu");
    }

    //selection 칠하자
    if (page != 4){ //세탁기 예약 현환표 selection이 없음
        selectionItemDivs[page-1].classList.add("select-menu");
    }

    //clear pageDiv
    pageDivs.forEach(pageDiv => {
        pageDiv.style.display = "none";
    })

    //show pageDiv 1
    pageDivs[page - 1].style.display = "block";
    // 숫자 바꾸면 보여지는 페이지가 바뀜 (다른버전은 숫자 말고 page함수를 만들어서 귀찮지 않게 만들어서 넣어주는거임)
}
setPage(1); //숫자 바꾸면 페이지가 바뀜 (함수임)


