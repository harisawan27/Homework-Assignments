// Assignment 4: Student List Organizer
// Crete an array named students stores information about several students using the Student template. 
var students = [
    { name: "Haris", isSenior: true, hasCompletedAssignments: true },
    { name: "Adeel", isSenior: true, hasCompletedAssignments: false },
    { name: "Abuzar", isSenior: true, hasCompletedAssignments: true },
    { name: "Mairaj", isSenior: false, hasCompletedAssignments: false }
];
// Find Senior Students with Assignments (Optional)
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log(seniorStudentsWithAssignments);
// Class List Update
function removeStudentsWithoutAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var updatedClassList = removeStudentsWithoutAssignments(students);
console.log(updatedClassList);
