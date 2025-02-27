// json2html.js

export default function json2html(data) {
    let table = '<table data-user="lavkesh1709@gmail.com">';
    table += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
    table += '<tbody>';
  
    data.forEach(row => {
      table += '<tr>';
      table += <td>${row.Name || ''}</td>;
      table += <td>${row.Age || ''}</td>;
      table += <td>${row.Gender || ''}</td>;
      table += '</tr>';
    });
  
    table += '</tbody></table>';
    return table;
  }