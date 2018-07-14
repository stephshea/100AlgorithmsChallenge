function htmlEndTagByStartTag(startTag: string): string {
  return startTag.includes("<button type='button' disabled>") ? "</button" : "</i>";
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))