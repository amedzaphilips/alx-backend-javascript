default export getListStudentIds(array) {
  if (typeOf array !== 'array'){
    return [];
  } else {
    return array.map((item) => item.id);
  }
}
