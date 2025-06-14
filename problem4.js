const x = [3, 2, true, false, "hello", false, 34, { name: "mehedy" }]

function countBoolean(array) {
    if (!Array.isArray(array)) {
        return "please provide valid array"
    };

    let count = 0;

    for (let item of array) {
        if (typeof item === "boolean") {
            count++
        }
    }
    return count;
}

const result = countBoolean(x)
console.log(result);