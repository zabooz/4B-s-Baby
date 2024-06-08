import { bruteForceLibrary } from '../scripts/bruteLibrary.js';

// Mock for fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      lines: ['password123', '123456', 'qwerty', 'rockyou']
    }),
  })
);

describe('bruteForceLibrary', () => {
  it('should find the password in the list and measure the time', async () => {
    const [pwdFound, pwd, time, closeEnough] = await bruteForceLibrary('password123');
    
    expect(pwdFound).toBe(true);
    expect(pwd).toBe('password123');
    expect(time).not.toBe('N/A');
    expect(closeEnough).not.toContain('password123');
  });

  it('should return false and N/A if the password is not in the list', async () => {
    const [pwdFound, pwd, time, closeEnough] = await bruteForceLibrary('notInList');
    
    expect(pwdFound).toBe(false);
    expect(pwd).toBe('notInList');
    expect(time).toBe('N/A');
    expect(closeEnough).toHaveLength(0);
  });

  it('should find passwords that are close enough', async () => {
    const [pwdFound, pwd, time, closeEnough] = await bruteForceLibrary('pass');
    
    expect(pwdFound).toBe(false);
    expect(pwd).toBe('pass');
    expect(time).toBe('N/A');
    expect(closeEnough).toContain('password123');
  });
});
