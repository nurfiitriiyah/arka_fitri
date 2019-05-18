var result_array_loopyLoop = [];

function loopyLoop(data) {
    console.log("-----------------------------------------START--------------------------------------------------")
    if (Number.isInteger(data)) {
        console.log("----------------------------------------PROSES--------------------------------------------------")
        var i = 0;
        while (i < data) {
            var datas =
                Math.random().toString(36).replace('0.', '').substr('0', '10') +
                Math.random().toString(36).replace('0.', '').substr('0', '10') +
                Math.random().toString(36).replace('0.', '').substr('0', '10') +
                Math.random().toString(36).replace('0.', '').substr('0', '2')
            CheckArrayExist(datas);
            i++;
        }

        console.log(result_array_loopyLoop)
        return result_array_loopyLoop

    } else {
        console.log("-----------------------------------------FAILED--------------------------------------------------")
        console.log("Parameter in not Integer")
        return "Parameter Have To Integer"
    }
}

function CheckArrayExist(dataLoopyLoop) {

    if (result_array_loopyLoop === undefined || result_array_loopyLoop.length === 0) {
        // console.log("--------------------------- FIRST DATA-----------------------------------------")
        result_array_loopyLoop.push(dataLoopyLoop)

    } else {
        // console.log("------------------------NOT FIRST DATA-----------------------------------------")
        var findDuplicateData = result_array_loopyLoop.includes(dataLoopyLoop)
        if (findDuplicateData === false) {
            result_array_loopyLoop.push(dataLoopyLoop)
        }
    }
}

loopyLoop(100)