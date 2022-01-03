let fcfs=document.getElementById('FCFS');
fcfs.addEventListener('click',function () {
    location.href="algos.html";
    let a=document.getElementById('table');//gets the html table
let addprocess=document.getElementById('add').addEventListener('click',function add_Process(e) {
    //addind event listener to the add button to add the process.
    let trow=document.createElement('tr');//creates a new row in the table
    trow.id='row';
    let tdata1=document.createElement('td');//creates a new table data
    let input1=document.createElement('input');//creates input element
    input1.setAttribute('type','number');// with type number
    input1.style.width='15em';//sets width of input
    input1.style.padding='6px';
    input1.style.backgroundColor='rgba(249, 252, 251, 0.938)';
    input1.style.border='hidden';
    input1.className='process';
    tdata1.appendChild(input1);
    trow.appendChild(tdata1);    
    let tdata2=document.createElement('td');
    let input2=document.createElement('input');
    input2.setAttribute('type','number');
    input2.style.width='15em';
    input2.style.padding='6px';
    input2.style.backgroundColor='rgba(249, 252, 251, 0.938)';
    input2.style.border='hidden';
    input2.className='Arrival';
    tdata2.appendChild(input2);
    trow.appendChild(tdata2);    
    let tdata3=document.createElement('td');
    let input3=document.createElement('input');
    input3.setAttribute('type','number');
    input3.style.width='15em';
    input3.style.padding='6px';
    input3.style.backgroundColor='rgba(249, 252, 251, 0.938)';
    input3.style.border='hidden';
    input3.className='Burst';
    tdata3.appendChild(input3);
    trow.appendChild(tdata3);   
    a.appendChild(trow); 
});
let deleteprocess=document.getElementById('delete').addEventListener('click',function delete_Process(e) {
    a.removeChild(document.getElementById('row'));
});
document.getElementById('calculate').addEventListener('click',function(){
    var arrivalArr=document.querySelectorAll('.Arrival');
    // arrivalArr.forEach(element => {
    //   console.log(element.value);
    // });
    var idArr=document.querySelectorAll('.process');
    var burstArr=document.querySelectorAll('.Burst');
    // console.log(burstArr);
    // burstArr.forEach(element => {
    //   console.log(element.value);
         
    // });
var service_time=[];
// console.log(arrivalArr[0].value);
service_time[0]=Number(arrivalArr[0].value);
var wt=[];
wt[0]=0;
// console.log(burstArr.length);
// console.log(wt[0]);
for (let i = 1; i <arrivalArr.length; i++) {
    service_time[i]=Number(service_time[i-1]) + Number(burstArr[i-1].value);
    // console.log(service_time[i]);
    wt[i]=Number(service_time[i] - arrivalArr[i].value);
    if (wt[i]<0) {
        wt[i]=0;
    }
}
// console.log(wt.length);
// for (let index = 0; index < wt.length; index++) {
//     const element = wt[index];
//     console.log(element);    
// }
var tat=[];
// Calculating turnaround time by adding bt[i] + wt[i]
for (let i = 0; i < burstArr.length ; i++){
tat[i] = Number(burstArr[i].value) + Number(wt[i]);
}
// tat.forEach(element => {
//    console.log(element); 
// });
let total_wt = 0, total_tat = 0;
    for (let i = 0 ; i < arrivalArr.length ; i++)
    {
        total_wt +=Number(wt[i]);
        total_tat += Number(tat[i]);
    }
    // let avgWaitingTime=document.createElement('h3');
    // avgWaitingTime.innerText='Average Waiting Time:'+ total_wt/arrivalArr.length;
    // document.body.appendChild(avgWaitingTime);
    // let avgTurnAroundTime=document.createElement('h3');
    // avgTurnAroundTime.innerText='Average TurnAroundTime:'+ total_tat/arrivalArr.length;
    // document.body.appendChild(avgTurnAroundTime);
    let outputtable=document.getElementById('output');
    let row=outputtable.insertRow(1);
        row.insertCell(0).innerText=idArr[0].value;
        row.insertCell(1).innerText=arrivalArr[0].value;
        row.insertCell(2).innerText=burstArr[0].value;
        row.insertCell(3).innerText=wt[0];
        row.insertCell(4).innerText=tat[0];
    for (let index = 1; index < arrivalArr.length; index++) {
        let row=outputtable.insertRow(index+1);
        row.insertCell(0).innerText=idArr[index].value;
        row.insertCell(1).innerText=arrivalArr[index].value;
        row.insertCell(2).innerText=burstArr[index].value;
        row.insertCell(3).innerText=wt[index];
        row.insertCell(4).innerText=tat[index];
    }
   outputtable.style.visibility='visible';
},{once : true});
})