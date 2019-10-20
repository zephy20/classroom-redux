import classroomData from "../classroom_data.json";

export const getAverageClassPerformance = data => {
  let activeClassData = classroomData.filter(
    item => data === item.classname
  )[0];

  if (activeClassData) {
    let marksSum = 0;

    activeClassData["students"].forEach(item => {
      marksSum = getStudentMarks(item) + marksSum;
    });

    return marksSum / activeClassData["students"].length;
  }

  return false;
};

export const getStudentCount = data => {
  let activeClass = classroomData.filter(item => data === item.classname);
  if (data) return activeClass[0]["students"].length;
  return false;
};

export const getStudentsData = data => {
  if (data) {
    let classData = classroomData.filter(item => item["classname"] === data);

    return classData[0];
  }
};

export const getStudentMarks = data => {
  let { marks } = data;

  let sum = Object.values(marks).reduce((acc, curr) => acc + curr);

  return sum / Object.keys(marks).length;
};
