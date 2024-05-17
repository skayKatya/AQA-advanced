const  averageGrade = 85
let gradeRating

if (averageGrade < 60) {
    gradeRating = 'Unsatisfactory';
  } else if (averageGrade >= 60 && averageGrade <= 70) {
    gradeRating = 'Satisfactory';
  } else if (averageGrade >= 71 && averageGrade <= 80) {
    gradeRating = 'Good';
  } else if (averageGrade >= 81 && averageGrade <= 90) {
    gradeRating = 'Very good';
  } else if (averageGrade >= 91 && averageGrade <= 100) {
    gradeRating = 'Excellent';
  }

  console.log(gradeRating)
 
