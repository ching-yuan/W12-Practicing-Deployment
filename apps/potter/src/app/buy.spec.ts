import { Buy } from './buy';

describe('Buy', () => {

  it('should create an instance', () => {
    expect(new Buy()).toBeTruthy();
  });

  test('buy one potter 1', () => {
    const buy = new Buy();
    buy.choose(1);
    expect(buy.total).toBe(100);
  });

  //測試折扣
  test('buy one potter 1 and one potter 2', () => {
    const buy = new Buy();
    buy.choose(1);
    buy.choose(2);
    expect(buy.total).toBe(190);
  });

  //測試不同折扣
  test('buy one potter 1, one potter 2, and one potter 3', () => {
    const buy = new Buy();
    buy.choose(1);
    buy.choose(2);
    buy.choose(3);
    expect(buy.total).toBe(270);
  });

  //測試所有折扣
  test('buy one potter 1-5', () => {
    const buy = new Buy();
    buy.choose(1);
    buy.choose(2);
    buy.choose(3);
    buy.choose(4);
    buy.choose(5);
    expect(buy.total).toBe(375);
  });

  //測試同集數重複買沒有折扣
  test('buy one potter 1 and two potter 2', () => {
    const buy = new Buy();
    buy.choose(1);
    buy.choose(2);
    buy.choose(2);
    expect(buy.total).toBe(290);
  });

});
