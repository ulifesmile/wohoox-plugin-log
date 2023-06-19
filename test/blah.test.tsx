import { log } from '../src';

describe('it', () => {
  it('log called', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    log();

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('wohoox-plugin-log');

    consoleSpy.mockRestore();
  });
});
