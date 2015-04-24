// attendanceSheet.controller('attendanceSheet', function StudentsCtrl($scope) {
//   $scope.students = [
//     { name: "Sam Schmidt", here: false },
//     { name: "Jessica Martin", here: false },
//     { name: "Sandy Smith", here: false },
//     { name: "Ryan Samuels", here: false },
//     { name: "Brentwood Davis", here: false }
//   ]
// });

attendanceSheet.controller('StudentsCtrl', function StudentsCtrl($scope, attendanceSheet) {
  $scope.students = attendanceFactory.students;
  $scope.attendanceFactory = attendanceFactory;
});
