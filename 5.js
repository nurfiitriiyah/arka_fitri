let data = ["h", "g", "a", "b", "b", "d", "f"]
// let data = ["a","b","c","d"]


function findMaxData() {
    var max;
    data.forEach(function (val, key) {
        if (key === 0) {
            max = val
        } else {
            if (val > data[key - 1]) {
                max = val
            } else {
                if (key > key - 1) {
                    max = val
                }
            }
        }
    })
    return max;
}

function findMinData() {
    var min;
    data.forEach(function (val, key) {
        if (key === 0) {
            min = val
        } else {
            if (val < data[key - 1]) {
                min = val
            } else {
                if (key < key - 1) {
                    min = val
                }
            }
        }
    })
    return min
}

async function main() {
    var hasil = [];
    hasil.push(await findMinData())
    hasil.push(await findMaxData())

    console.log(hasil)
    return hasil
}

main()