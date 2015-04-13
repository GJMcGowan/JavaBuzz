describe('Javabuzz', function () {

  var javabuzz;
  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('it returns true when', function(){

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisble by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function(){
      expect(javabuzz.isDivisibleByBoth(15)).toBe(true);
    });

  });
  describe('it returns false when', function(){

    it('is not divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('is not divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(7)).toBe(false);
    });

    it('is not divisible by 3 and 5', function(){
      expect(javabuzz.isDivisibleByBoth(4)).toBe(false);
    });

  });

  describe('it says stuff when', function(){

    it('says "JavaBuzz" when divisible by both', function(){
      expect(javabuzz.say(15)).toEqual('JavaBuzz');
    });

    it('says "Buzz" when divisible by five', function(){
      expect(javabuzz.say(5)).toEqual('Buzz');
    });

    it('says "Java" when divisible by three', function(){
      expect(javabuzz.say(3)).toEqual('Java');
    });
  });

  describe('it can count upwards', function(){

    it('can count to 5', function(){
      expect(javabuzz.play(5)).toEqual([1, 2, "Java", 4, "Buzz"]);
    });

  });

});