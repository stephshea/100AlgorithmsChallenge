function htmlEndTagByStartTag(startTag) {
  const tagSplit = startTag.split(" ");
  const tag = tagSplit[0].toString();
  let endTag;
  if (!tag.includes(">")) {
    endTag = "</" + tag.slice(1) + ">";
  }
  else {
    endTag = "</" + tag.slice(1);
  }
  return endTag;
}
console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
