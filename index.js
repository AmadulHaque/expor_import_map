import {countryList} from "./countries.js";
import {student_list} from "./students.js";
countryList.map((item,i)=>{
    let Details=`My country  ${item.name}`
    console.log(Details)
})

student_list.map((item,i)=>{
    let students=`student  ${item.name}`
    console.log(students)
})