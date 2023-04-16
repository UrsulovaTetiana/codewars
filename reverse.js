//reverse a string
function solution(str) {
  let rev = "";
  for (i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
  }
  return rev;
}
