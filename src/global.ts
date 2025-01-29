export const dateNow = () => {
    const dateNow = new Date()
    const year = dateNow.getFullYear()
    let month = (dateNow.getMonth() + 1).toString()
    let day = dateNow.getDate().toString()

    if (month.length < 2) {
        month = `0${month}`
    }

    if (day.length < 2) {
        day = `0${day}`
    }

    return `${year}${month}${day}`
}