function showInfo(info) {

    if (typeof info !== 'object') {
        return 'please provide a valid object'
    }

    const result = info.name + '@' + info.address + '.com';
    return result;
}


const person = {
    name: 'mehedy',
    address: 'Rajshahi',
}

const x = showInfo(person)
console.log(x);