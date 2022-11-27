function createtd(element,value=" "){
    let td=document.createElement(element)
    td.innerHTML=value
    return td;
}
let pagination=document.querySelector('#pagination')
let list=document.querySelector('#list')
 let currentPage=1;
 let lastPage=10;
   let pagi=async(limitPerPage,page)=>{
   let data=await fetch('data.json')
   let dataPagi=await data.json()
   console.log(dataPagi)
    page--;
    let start=limitPerPage * page;
    let end=start+limitPerPage;
     let items=dataPagi.slice(start,end)
     console.log(items)
     let table=document.getElementsByClassName('table')
     console.log(table)
     let tbody=document.createElement('tbody')
     for(i=0;i<items.length;i++){
        var tr= createtd('tr')
        var td1= createtd('td',items[i].id)
        var td2= createtd('td',items[i].name)

        var td3= createtd('td',items[i].email)
        tbody.append(tr)
        tr.append(td1,td2,td3)
        table[0].append(tbody)

     }
function setPagination(item,wrap,limitPerPage){
    wrap.innerHTML="";
    let count=Math.ceil(item.length/limitPerPage)
    for(i=1; i<=count;i++){
        let button=pagiBtn(i)
        wrap.append(button)
        console.log(button)
    }
}
setPagination(dataPagi,pagination,limitPerPage)

function pagiBtn(page){
    let btn=document.createElement('a')
    btn.setAttribute('class','page-link')
    btn.innerHTML=page;


    btn.addEventListener('click',function(){
    tbody.removeChild(tr)
    tr.removeChild(td1,td2,td3)
    table[0].removeChild(tbody)
    currentPage=page
    console.log(currentPage)
    console.log(lastPage)
    pagi(lastPage,currentPage)
})
return btn;
}
}
pagi(lastPage,currentPage);
