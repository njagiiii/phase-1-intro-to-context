// Your code here
function createEmployeeRecord(arr){
    let arroObj ={
        firstName:arr[0],
        familyName:arr[1],
        title:arr[2],
        payPerHour:arr[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
    return arroObj;
}
function createEmployeeRecords(employeesArr){
    let newArrObj = [];
    employeesArr.forEach(employee => {
        let newObj = createEmployeeRecord(employee);
        newArrObj.push(newObj)
    })
    return newArrObj
}
function createTimeInEvent(date){
    let datesplit = date.split('');
    let addTimeIn ={
        type:"TimeIn",
        hour:parseInt(datesplit[1],10),
        date:datesplit[0],
    }
    this.timeInEvents.push(addTimeIn)
    return this;
}
function createTimeOutEvent(addTimeOut){
    return this;
}
function hoursWorkedOnDate(selectDate){
    let timeInEventsArr = this.timeInEvents
    let timeOutEventsArr = this.timeOutEvents
    let dayTimeIn;
    let dayTimeOut;
    timeInEventsArr.map(item =>{
        if(item.date === selectDate){
            dayTimeIn =item.hour
        }
    })
    timeOutEventsArr.map(item => {
        if(item.date === selectDate){
            dayTimeOut =item.hour
        }
    })
    let hoursWorked = Math.ceil((dayTimeOut-dayTimeIn)/100)
    return hoursWorked
}

function wagesEarnedOnDate(selectDate){
    const hours = hoursWorkedOnDate.bind(this);
    let hoursWork = hours(selectDate);
    let wages = hoursWork*this.payPerHour;
    return wages;
}
function findEmployeeByFirstName(srcArray,firstName){
    let matchFind = srcArray.filter (item=>{
        if(item.firstName === firstName){
            return item
        }
    })
    return matchFind
}
function calculatePayroll(arr){
    let eachWage=[]
    arr.map(obj => {
        let x = allWagesFor.call(obj);
        eachWage.push(x)
    })
    let totalWages =eachWage.reduce((accum, item) => {
        return accum + item;
    })
    return totalWages
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

