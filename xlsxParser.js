function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
      throw new Error('You need to save the file before you can duplicate it.');
    }
    let copy = {
      created: Date.now(),
      author: original.author,
      cells: original.cells,
      title: original.Title,
      metadata: original.metadata,
    };
    //copy.metadata.title = 'Copy of ' + original.metadata.title;
    return copy;
  }
//reading excel sheet - npm install xlsx
var XLSX = require('xlsx')
var workbook = XLSX.readFile('Book1.xlsx');
let data = duplicateSpreadsheet(workbook);
console.log(data);
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);
console.log(xlData[0].name);