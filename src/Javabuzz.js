var Javabuzz = function(){};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByBoth = function(number) {
  return (this.isDivisibleByThree(number) && this.isDivisibleByFive(number));
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3); 
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.say = function(number) {
  if (this.isDivisibleByBoth(number)) return 'JavaBuzz';
  if (this.isDivisibleByFive(number)) return 'Buzz';
  if (this.isDivisibleByThree(number)) return 'Java';
  return number;
};

Javabuzz.prototype.play = function(max) {
  var list = [];
  for(count = 1; count <= max; count++){
    list.push(this.say(count));
  };
  return list;
};