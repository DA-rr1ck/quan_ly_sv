let form = document.getElementById('studentForm');
let table = document.getElementById('studentTable');
let selectedRow = null

document.getElementById("updateStudentBtn").disabled = true;

document.getElementById("addStudentBtn").onclick = addStudent;

function addStudent() {
    let studentId = form.studentId.value;
    let studentName = form.studentName.value;
    let dob = form.dob.value;
    let className = form.class.value;
    let gpa = form.gpa.value;
            
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.textContent = studentId;
    cell2.textContent = studentName;
    cell3.textContent = dob;
    cell4.textContent = className;
    cell5.textContent = gpa;

    form.reset();
}

table.addEventListener('click', function(event) {
    let target = event.target;

    if (target.tagName == 'TD') {
        let row = target.parentNode;
        selectRow(row);
    }
});

function selectRow(row) {
    selectedRow = row;

    form.studentId.value = selectedRow.cells[0].textContent;
    form.studentName.value = selectedRow.cells[1].textContent;
    form.dob.value = selectedRow.cells[2].textContent;
    form.class.value = selectedRow.cells[3].textContent;
    form.gpa.value = selectedRow.cells[4].textContent;

    document.getElementById('addStudentBtn').disabled = true;
    document.getElementById("updateStudentBtn").disabled = false;
}

document.getElementById("updateStudentBtn").onclick = updateStudent;

function updateStudent() {
    selectedRow.cells[0].textContent = form.studentId.value;
    selectedRow.cells[1].textContent = form.studentName.value;
    selectedRow.cells[2].textContent = form.dob.value;
    selectedRow.cells[3].textContent = form.class.value;
    selectedRow.cells[4].textContent = form.gpa.value;

    form.reset();

    document.getElementById('addStudentBtn').disabled = false;

    selectedRow = null;
}