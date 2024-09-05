interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "dinah",
    lastName: "Kindah",
    age: 22,
    location: "USA",
};
const student2: Student = {
    firstName: "Steve",
    lastName: "Abok",
    age: 23,
    location: "Montreal",
};

const studentList: Student[] = [student1, student2];

//rendering a table

const table = document.createElement("table");
const theader = document.createElement("thead");
const tableBody = document.createElement("tbody");

const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
th1.textContent = "firstName";
th2.textContent = "location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);
theader.appendChild(headerRow);

table.appendChild(theader);
table.appendChild(tableBody);

studentList.forEach((student) => {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
});

document.body.appendChild(table);