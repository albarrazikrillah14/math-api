const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrow(Error);
      expect(() => MathBasic.add(1)).toThrow(Error);
      expect(() => MathBasic.add(1, 2, 3)).toThrow(Error);
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrow(Error);
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrow(Error);
      expect(() => MathBasic.add(true, {})).toThrow(Error);
      expect(() => MathBasic.add(null, false)).toThrow(Error);
    });

    it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });

  describe('A subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrow(Error);
      expect(() => MathBasic.subtract(1)).toThrow(Error);
      expect(() => MathBasic.subtract(1, 2, 3)).toThrow(Error);
    });

    it('should throw error when given with non-number parameters', () => {
      expect(() => MathBasic.subtract('1', '2')).toThrow(Error);
      expect(() => MathBasic.subtract(true, false)).toThrow(Error);
      expect(() => MathBasic.subtract([], {})).toThrow(Error);
    });

    it('should return a - b when given with two number parameters', () => {
      expect(MathBasic.subtract(2, 1)).toEqual(1);
      expect(MathBasic.subtract(3, 5)).toEqual(-2);
      expect(MathBasic.subtract(14, 7)).toEqual(7);
    });
  });

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrow(Error);
      expect(() => MathBasic.multiply(1)).toThrow(Error);
      expect(() => MathBasic.multiply(1, 2, 3)).toThrow(Error);
    });

    it('should throw error when given with non-number parameters', () => {
      expect(() => MathBasic.multiply('1', '2')).toThrow(Error);
      expect(() => MathBasic.multiply({}, true)).toThrow(Error);
      expect(() => MathBasic.multiply(true, false)).toThrow(Error);
    });

    it('should return a * b when given with two number parameters', () => {
      expect(MathBasic.multiply(1, 1)).toEqual(1);
      expect(MathBasic.multiply(2, 2)).toEqual(4);
      expect(MathBasic.multiply(4, 4)).toEqual(16);
    });
  });

  describe('A divide function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrow(Error);
      expect(() => MathBasic.divide(1)).toThrow(Error);
      expect(() => MathBasic.divide(1, 2, 3)).toThrow(Error);
    });

    it('should throw error when given with non-number parameters', () => {
      expect(() => MathBasic.divide('1', '2')).toThrow(Error);
      expect(() => MathBasic.divide(true, {})).toThrow(Error);
      expect(() => MathBasic.divide({}, [])).toThrow(Error);
    });

    it('should return a / b when given with two number parameters', () => {
      expect(MathBasic.divide(6, 2)).toEqual(3);
      expect(MathBasic.divide(8, 4)).toEqual(2);
      expect(MathBasic.divide(35, 5)).toEqual(7);
    });
  });
});
