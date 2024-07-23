import {bruteForceLibrary} from '../scripts/bruteLibrary.js';

test('should return correct values when the password is not found', async () => {
    const password = 'notInList';
    const passwordList = ['xyz', '123', 'abc', 'def'];

    const result = await bruteForceLibrary(password, passwordList);

    expect(result[0]).toBe('notInList'); // Check password
    expect(result[1]).toBe('not found'); // Check index
    expect(result[2]).toBe('Library'); // Check mode
    expect(result[3]).toMatch(/\d+(\.\d+)? sec/); // Check time format
});

test('should return correct values when the password is found', async () => {
    const password = 'abc';
    const passwordList = ['xyz', '123', 'abc', 'def'];

    const result = await bruteForceLibrary(password, passwordList);

    expect(result[0]).toBe('abc'); // Check password
    expect(result[1]).toBe(2); // Check index
    expect(result[2]).toBe('Library'); // Check mode
    expect(result[3]).toMatch(/\d+(\.\d+)? sec/); // Check time format
});