const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (string, num, callback, validasi) => {
  validasi(string,num)
  let result = name.filter((name) => name.toLowerCase().indexOf(string) !== -1);
  result = result.slice(0, num);
  callback(result);
};

const validasi =(string, num) =>{
try{
  if (typeof string !== "string") {
    throw "Tipe data harus string";
  }
  if (typeof num !== "number" || num <= 0) {
    throw "tipe data harus number";
  }
}catch(error){
  console.log(error)
}
}

const filterword = (callback) => {
  console.log(callback);
};

searchName(1, 3, filterword,validasi);
// searchName("an", "sa", filterword);
// searchName("an", 3, filterword, validasi);
