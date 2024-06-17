import {bruteForceLibrary} from '../scripts/bruteLibrary.js';

describe('bruteForceLibrary', () => {
    test('should find the password and return correct details', async () => {
        const password = 'abc';
        const passwordList = ['xyz', '123', 'abc', 'def'];
        
        const result = await bruteForceLibrary(password, passwordList);
        
        expect(result[0]).toBe('abc'); // Check password
        expect(result[1]).toBe(2); // Check index
        expect(result[2]).toBe('Library'); // Check mode
        expect(result[3]).toMatch(/\d+\.\d+ sec/); // Check time format
    });

    test('should return N/A for count and time if password is not found', async () => {
        const password = 'notInList';
        const passwordList = ['xyz', '123', 'abc', 'def'];
        
        const result = await bruteForceLibrary(password, passwordList);
        
        expect(result[0]).toBe('notInList'); // Check password
        expect(result[1]).toBe('N/A'); // Check index
        expect(result[2]).toBe('Library'); // Check mode
        expect(result[3]).toBe('N/A'); // Check time
    });
});
