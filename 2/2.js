let diffrence = function (firstDate , secondeDate){
    
    const year = +firstDate.getFullYear() - +secondeDate.getFullYear()
    const month = +firstDate.getMonth() - +secondeDate.getMonth()
    const day = +firstDate.getDate() +secondeDate.getDate()

    return `Year: ${year} Month: ${month} day: ${day}`
}

