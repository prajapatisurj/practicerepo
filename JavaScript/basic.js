const mainObj = {
  name: "suraj",
  address: { city: "delhi" },
};

let shallowCopy = { ...mainObj };
let deepCopy = JSON.parse(JSON.stringify(mainObj));
mainObj.address.city = "kailaras";

// deep copy

console.log(shallowCopy.address.city);
console.log(deepCopy.address.city);
