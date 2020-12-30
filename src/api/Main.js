import axios from "axios"

export default axios.create({
    baseURL: "https://whispering-shelf-27011.herokuapp.com/api/v1"
})