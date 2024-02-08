const row = (code, rowData, index) => {
    // complete tr string
    return `<tr>
        <td class="w-16 p-2 align-top border-b ${index === 0 && ' border-t'} border-gray-200"><img class="h-full w-auto" src="${rowData.image}" /></td>
        <td class="w-16 p-2 align-top border-b ${index === 0 && ' border-t'} border-gray-200">${code}</td>
        <td class="w-16 p-2 align-top border-b ${index === 0 && ' border-t'} border-gray-200"><a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="${rowData.website}">${rowData.name}</a></td>
        <td class="p-2 align-top border-b ${index === 0 && ' border-t'} border-gray-200">${rowData.summary}</td>
        </tr>`
}

const createTable = (data) => {
    // create table string and insert it into "app" div before end
    console.log(data);
    const keys = Object.keys(data);
    let tableHTML = '<table>';
    const tableDiv = document.getElementById('cryptoTable');
    const rows = []
    for (let i = 0; i < keys.length; i++) {
        const element = keys[i];
        const rowData = data[element];
        console.log(rowData)

        tableHTML += row(element, rowData, i);
    }
    tableHTML += '</table>'
    tableDiv.innerHTML = tableHTML;
}

const url = "https://api.mtw-testnet.com/assets/all"
fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((v) => createTable(v))
    .catch((err) => console.log(err));