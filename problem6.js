const person1 = {
    name: 'abul kashem',
    honors: 40,
    hsc: 30,
    isFFfamily: true
}
const person2 = {
    name: 'mokber mia',
    honors: 45,
    hsc: 32,
    isFFfamily: false
}


function jobSelection(info) {
    if (typeof info !== "object") {
        return "invalid object"
    }

    let totalMarks = info.honors + info.hsc;

    if (info.isFFfamily) {
        totalMarks = totalMarks + (totalMarks * 0.2)
    }

    if (info.isFFfamily && totalMarks >= 80) {
        return "Aho vatija aho... chakuri to tomari...!"
    } else if (info.isFFfamily && totalMarks < 80) {
        return "Bad luck vatija next time...!"
    } else if (!info.isFFfamily && totalMarks >= 80) {
        return "You got the job..."
    } else if (!info.isFFfamily && totalMarks < 80) {
        return "rajakar rajakar rajakar..!"
    }

    // if(totalMarks > 80){
    //     return 'You got the job'
    // } else {
    //     return 'You failed'
    // }

}

console.log(jobSelection(person1));