
function getFile(){
    console.log(event)
    let file = event.target.files[0]
    var reader = new FileReader()
    reader.onload =  (e) =>{
        var data = e.target.result;
        data = new Uint8Array(data);
        let workbook = XLSX.read(data, {type: 'array'});
        console.log(workbook);
        // var result = {};
        var json_table = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1']);//Table Data
        let header = Object.keys( json_table[0] )// To Construct table
        console.log("header ::",header);
        console.log("table as json ::",json_table)
        //send both to server using fetch
    };
    reader.readAsArrayBuffer(file);
}