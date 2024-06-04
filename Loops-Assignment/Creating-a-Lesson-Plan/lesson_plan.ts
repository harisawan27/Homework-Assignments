// Loops Assignments
// 1. Creating a Lesson Plan(Using for loop )
// Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate whether each lesson is running this year.

// Create a blank array
let myWork :{
    name: string;
    status: boolean;
}[]=[]

// Use a loop to create lessons
for (let i =1; i<=10; i++){
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2===1
    };
    // Add the lesson to the array
    myWork.push(lesson)
};

// Print the result
console.log(myWork);



