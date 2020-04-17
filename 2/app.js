let time1 = moment("12-25-1995")
let time2 = moment("12-21-1993")

let diffrence = function (time1 , time2){

    let year = +time1.format('YYYY') - +time2.format('YYYY')
    let month = +time1.format('MM') - +time2.format('MM')
    let day = +time1.format('DD') - +time2.format('DD')
    let hour = +time1.format('H') - +time2.format('H')
    let minute = +time1.format('m') - +time2.format('m')
    let second = +time1.format('s') - +time2.format('s')

    return `Year : ${year} Month : ${month} Days : ${day} Hours : ${hour} Minutes : ${minute} Seconds : ${second}`

}

console.log(diffrence(time1,time2))