class TodoList {
    constructor(tlit,time,content){
        this.check=false;
        this.content=content;
        this.time=time;
        this.tlit=tlit;
    }
}

let arr = [];
if(localStorage.getItem("to")===null){
    localStorage.setItem("to",JSON.stringify(arr));
    console.log("초기화",arr);
}else {
    arr =JSON.parse(localStorage.getItem("to"));
    console.log("있음",arr);
}

let content=document.querySelector("#content");
let time=document.querySelector("#time");
let tlit=document.querySelector("#tlit");

function create(){
    let todoctt= new TodoList(tlit.value,time.value,content.value);
    arr.push(todoctt);
    localStorage.setItem("to",JSON.stringify(arr));
    calling()
}

function calling(){
    box.innerHTML ="";
    for (let i=0; i<arr.length; i++){
    let input = document.createElement("input");
    let inputLi = document.createElement("input");
    let inputLi2 = document.createElement("input");
    let inputLi3 = document.createElement("input");
    let button = document.createElement("button");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    button.innerHTML= "수정"
    ul.append(input,li,li2,li3,button)
    input.type = "checkbox";
    inputLi2.type = "date";
    input.checked = arr[i].check;

button.onclick = ()=> {
    li.innerHTML="";
    li2.innerHTML="";
    li3.innerHTML="";
    li.append(inputLi);
    li2.append(inputLi2);
    li3.append(inputLi3);
    button.innerHTML = "완료";

button.onclick = ()=>{
    arr[i].tlit = inputLi.value;
    arr[i].time = inputLi2.value;
    arr[i].content = inputLi3.value;
    localStorage.setItem("to",JSON.stringify(arr));
    location.reload();
    }
}

input.onclick = (e)=>{
    checkHend(e)
}

input.dataset.index = i;
li.innerHTML = arr[i].tlit
li2.innerHTML = arr[i].time
li3.innerHTML = arr[i].content

    box.append(ul);
    }
}
calling();

function checkHend(e){
    console.log(e.target.dataset);
    let {index}= e.target.dataset;

    arr[index].check = e.target.checked
    localStorage.setItem("to",JSON.stringify(arr))
}

function deleteBtn(){
    arr = arr.filter((e)=>{
    return e.check === false
    })
    localStorage.setItem("to",JSON.stringify(arr));
    calling();
}

check.onclick=(e)=>{
    let buttn =document.querySelectorAll("input[type=checkbox]")
    console.log(e.target.checked);
    for(let i=0; i<buttn.length; i++){
        if(arr[i]!== undefined)
        arr[i].check = e.target.checked
        buttn[i].checked = e.target.checked
    }
console.log(arr);
}