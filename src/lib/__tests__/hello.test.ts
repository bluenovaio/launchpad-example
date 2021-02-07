import * as hello from '../hello';

describe('CS 101', () => {
  it('returns world', () => {
    expect(hello.world()).toEqual('world');
  });
});
