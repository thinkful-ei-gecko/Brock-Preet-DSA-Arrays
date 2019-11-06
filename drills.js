function urlify(str) {
  let newStr = str.split(" ").join("%20");
  console.log(newStr);
}
urlify("www.thinkful.com         /tauh ida parv een");

function bFilter(num) {
  var filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (num(this[i], i, this)) filtered.push(this[i]);
  }
}
bFilter([1,2,3,4,5,6,7,8]);
