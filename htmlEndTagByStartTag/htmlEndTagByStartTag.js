function htmlEndTagByStartTag(startTag) {
  return startTag.includes("<button") ? "</button" : "</i>";
}
console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
