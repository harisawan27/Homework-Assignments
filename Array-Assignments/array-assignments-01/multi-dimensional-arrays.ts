// 1. Define a TypeScript type alias named Student
type Student = {
    name: string;
    grades: number[];
};

// 2. Create an array named students
const students: Student[] = [
    { name: "Haris", grades: [85, 92, 78, 94] },
    { name: "Abuzar", grades: [70, 80, 65, 88] },
    { name: "Adeel", grades: [95, 90, 85, 100] }
];

// 3. Implement a function named calculateAverageGrade
function calculateAverageGrade(grades: number[]): number {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

// 4. Display each student's name and average grade
students.forEach(student => {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`${student.name}: ${averageGrade}`);
});
