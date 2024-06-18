const showData = (data) =>{
    // console.log(data)
    //data 하나씩 뽑아서 <article>(아티클)->.product-container 의 자식으로 넣자<-html
    const productContaiinerSection = document.getElementsByClassName("product-container")[0]
    // console.log(productcontainerSection);

    articleString = "";
    data.forEach(element =>{
        //forEach라고 치면 자동으로 나옴
        articleString += `            <article class="product-item">
                    <img src="images/${element["image"]}" alt="${element.name}" class="product-image">
                    <div class="product-name">${element.name}</div>
                </article>\n`;
    });
    console.log(productContaiinerSection)
    productContaiinerSection.innerHTML = articleString;
}
        

const setData = (data) =>{
    showData(data);
    
    //무뚝뚝.wedp 출력하자
    // console.log(data[3].image)
    // console.log(data[3]["image"]) /*시험문제 . 유 무 내기로 함*/

    // //허니버터칩 출력하자
    // console.log(data[9].name)
    // console.log(data[9]["name"])

}
const getData =  (() =>{
    const url = 'js/data.json';
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>setData(data))
    .catch((error)=> console.log(error));
});
getData();