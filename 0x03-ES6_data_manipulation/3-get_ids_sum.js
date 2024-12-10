export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (sum, cur) => sum + cur.id, 0);
  }
  return 0;
}
