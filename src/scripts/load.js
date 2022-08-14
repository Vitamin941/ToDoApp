const currMonthName = (date) => {
    let month = date + 1
    switch (month) {
        case 1: return "January"
        case 2: return "February"
        case 3: return "March"
        case 4: return "April"
        case 5: return "May"
        case 6: return "Junee"
        case 7: return "July"
        case 8: return "August"
        case 9: return "September"
        case 10: return "October"
        case 11: return "November"
        case 12: return "Deсember"
    }
}


let H1title = document.getElementsByClassName("title")[0]
let currentDate = new Date()
// H1title.innerText = currentDate.getDate() + " " + currMonthName(currentDate.getMonth()) + " " + currentDate.getFullYear()

