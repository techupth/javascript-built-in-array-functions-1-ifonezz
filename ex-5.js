const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 }
];

function getAverageStudentScore(students) {
    let averageScore = 0;
    averageScore = students.reduce((accumulator, student) => {
      return accumulator + student.score;
    },0);
    averageScore = averageScore/students.length;
    console.log(averageScore);
}

getAverageStudentScore(students); // Output: 87.5
