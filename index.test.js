const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });

  // test('[2] returns a copy, leaving the original object intact', () => {})
  test('[2] returns a copy, leaving the original object intact', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    utils.trimProperties(input);
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' });
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {

  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });

  test('[4] the object returned is the exact same one we passed in', () => {
    //arrange
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    //act
    //assert
  });
});

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    //arrange: use this information to test.
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    //act: testing the function findLargestInteger, so use it here and reference it.
    const actual = utils.findLargestInteger(input); //pass it the control input
    //assert: what do you expect to happen.
    expect(actual).toBe(3);
  });
});

describe('[Exercise 4] Counter', () => {
  //avoid redundancy and use clean state!
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3);
  });

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    expect(counter.countDown()).toBe(2);
  });

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for (let i = 3; i > -1; i--) {
      counter.countDown();
    }
    expect(counter.countDown()).toBe(0);
  });
});

describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer');
  });

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    expect(seasons.next()).toBe('fall');
  });

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 0; i < 2; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe('winter');
  });

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe('spring');
  });

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe('summer');
  });

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe('spring');
  });

});

describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
  });

  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toBe(100);
    expect(focus.drive(100)).toBe(200);
    expect(focus.drive(100)).toBe(300);
    expect(focus.drive(200)).toBe(500);
  });

  test('[16] driving the car uses gas',
    () => {
      focus.drive(600);
      expect(focus.drive(100)).toBe(600);
      expect(focus.drive(100)).toBe(600);
      expect(focus.drive(100)).toBe(600);
      expect(focus.drive(200)).toBe(600);
      expect(focus.tank).toBe(0);
   }
  );

  test('[17] refueling allows to keep driving',
    () => {
      focus.drive(600);
      expect(focus.odometer).toBe(600);

      focus.drive(10);
      expect(focus.odometer).toBe(600);

      focus.refuel(20);
      focus.drive(600);
      expect(focus.odometer).toBe(1200);
    }
  );

  test('[18] adding fuel to a full tank has no effect',
    () => {
      focus.refuel(99); 
      expect(focus.tank).toBe(20);
    }
  );

});

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number',
    () => {

    }
  );
  test('[20] resolves false if passed an odd number',
    () => {

    }
  );
});
