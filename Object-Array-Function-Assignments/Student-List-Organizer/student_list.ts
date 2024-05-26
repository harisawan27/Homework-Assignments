// Assignment 4: Student List Organizer

// defines an interface named Student that describes student information 
interface Student {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
}

// Crete an array named students stores information about several students using the Student template. 
const students: Student[] = [
    { name: "Haris", isSenior: true, hasCompletedAssignments: true },
    { name: "Adeel", isSenior: true, hasCompletedAssignments: false },
    { name: "Abuzar", isSenior: true, hasCompletedAssignments: true },
    { name: "Mairaj", isSenior: false, hasCompletedAssignments: false }
];

// Find Senior Students with Assignments (Optional)
function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}

const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log(seniorStudentsWithAssignments);

// Class List Update
function removeStudentsWithoutAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}

const updatedClassList = removeStudentsWithoutAssignments(students);
console.log(updatedClassList);


