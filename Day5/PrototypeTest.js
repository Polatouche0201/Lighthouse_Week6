let JH_Power = function(id, power, tagline) {
  this.id = id;
  this.power = power;
  this.tagline = tagline;
  this.attitude = false;
}

JH_Power.prototype.attitudChange = function(powerAdd) {
  this.attitude = !this.attitude;
  if(this.attitude === false) {
    powerAdd *= -1.0;
  }
  this.power += powerAdd;
  if(this.power > 100.0) {
    this.power = 100.0;
  }
  if(this.power < 0.0) {
    this.power = 0.0;
  }
}

JH_Power.prototype.rest = function() {
  this.attitude = true;
  this.power = 99.9;
}

var JH_Day1 = new JH_Power(1, 50.0, "No, new week begins...");
console.log(JH_Day1.power);
console.log(JH_Day1.attitude);
JH_Day1.attitudChange(3.3);
console.log(JH_Day1.power);
console.log(JH_Day1.attitude);
JH_Day1.rest();
console.log(JH_Day1.power);
console.log(JH_Day1.attitude);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


class RecycleBin {
  constructor() {
    this.cans = true;
  }
  recycle() {
    return "trash";
  }
}
console.log(typeof RecycleBin);
console.log(RecycleBin.prototype);