import { passwordConverter } from '../scripts/passwordConverter';

describe('passwordConverter', () => {
    test('converts password to simple leetspeak', () => {
        const password = 'ABCD1234!';
        const selector = 'leetSimple';

        const result = passwordConverter(password, selector);

        expect(result).toBe('4|3(|)i2ea?');
    });

    test('converts password to complicated leetspeak', () => {
        const password = 'ABCD1234!';
        const selector = 'leetComplicated';

        const result = passwordConverter(password, selector);

        expect(result).toBe('(L|-]<?i2ea?');
    });

});