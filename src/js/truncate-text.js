export function setupTruncateText(element) {  
  var text = element.innerHTML;
  var truncated = text.substring(0, 122) + "...";
  element.innerHTML = truncated;
}
