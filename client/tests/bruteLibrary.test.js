import { bruteForceLibrary } from "../scripts/bruteLibrary";

describe('bruteForceLibrary', () => {
    
    test('finds password correctly', async () => {
        const password = 'daniel';
        const [pwdFound, pwd, time, closeEnough] = await bruteForceLibrary(password);
        expect(pwdFound).toBe(true);
        expect(closeEnough).toContain(password);
        expect(pwd).toBe(password);
        expect(typeof time).toBe('string');
    });

    test('does not find nonexistent password', async () => {
        const password = 'nonexistentpassword';
        const [pwdFound, pwd, time, closeEnough] = await bruteForceLibrary(password);
        expect(pwdFound).toBe(false);
        expect(pwd).toBe(password);
        expect(time).toBe('N/A');
    });
});
