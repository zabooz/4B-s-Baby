import { passwordEncoder, passwordDecoder } from '../scripts/encoder.cjs';

describe('Password Encoder and Decoder', () => {
  test('should encode and decode the password correctly', () => {
    const password = 'HelloWorld123!';

    // Encode the password
    const { encodedString, encodingKey } = passwordEncoder(password);

    // Ensure the encoded string is different from the input
    expect(encodedString).not.toBe(password);

    // Decode the password
    const decodedString = passwordDecoder(encodedString, encodingKey);

    // Ensure the decoded string matches the original password
    expect(decodedString).toBe(password);
  });

  test('should handle characters not in the array correctly', () => {
    const password = 'Hello World! @2024';

    // Encode the password
    const { encodedString, encodingKey } = passwordEncoder(password);

    // Decode the password
    const decodedString = passwordDecoder(encodedString, encodingKey);

    // Ensure the decoded string matches the original password
    expect(decodedString).toBe(password);
  });
});
