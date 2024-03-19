let myName = "Soam   ";
let myChannel = "chai        ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.trim().length}`);
};
myName.trueLength();

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.soam = function () {
  console.log(`Soam is present in all objects`);
};
Array.prototype.heySoam = function () {
  console.log("Hitesh says hello");
};
// heroPower.soam();
myHeros.soam();
myHeros.heySoam();
// heroPower.heySoam();

//inheritance
const user = {
  name: "chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignement",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = user;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

"SoumyaRanjanTripathy".trueLength()