import { Pipe } from './.pipe';

describe('Pipe', () => {
  it('create an instance', () => {
    const pipe = new Pipe();
    expect(pipe).toBeTruthy();
  });
});
