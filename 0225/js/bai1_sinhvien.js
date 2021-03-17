var stdList = [
    {
        'Ten': 'Tran Van A',
        'Tuoi': '18',
        'DiaChi': 'Ha Noi',
        'Email': 'a@gmail.com',
    },
    {
        'Ten': 'Tran Van B',
        'Tuoi': '19',
        'DiaChi': 'Ha Tay',
        'Email': 'b@gmail.com',
    },
    {
        'Ten': 'Tran Van C',
        'Tuoi': '20',
        'DiaChi': 'Ha Dong',
        'Email': 'c@gmail.com',
    },
]
function writeData(){
    for (var i = 0; i < stdList.length; i++){
        document.getElementById('std-data').innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${stdList[i].Ten}</td>
                <td>${stdList[i].Tuoi}</td>
                <td>${stdList[i].DiaChi}</td>
                <td>${stdList[i].Email}</td>
            </tr>
        `
    }
}
writeData()