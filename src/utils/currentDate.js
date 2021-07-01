const currentDate = () => {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth();
    const  day = date.getDate()
    

   return  `${day}.${month}.${year}`
}

export default currentDate