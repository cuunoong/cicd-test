const validatePassword = require('../utils/validate-password')

test('return false if empty password', () => {
    // Given
    const password = '';

    // When
    const expected = validatePassword(password)

    // Then
    expect(expected).toBeFalsy()
})

test('return false for password without numbers', () => {
    // Given
    const password = 'fghdjasdasas';

    // When
    const expected = validatePassword(password)

    // Then
    expect(expected).toBeFalsy()
})

test('return false for password without letters', () => {
    // Given
    const password = '567831239123';

    // When
    const expected = validatePassword(password)

    // Then
    expect(expected).toBeFalsy()
})

test('return false for password with letters and numbers has less then 8 characters', () => {
    // Given
    const password = 'abcd123';

    // When
    const expected = validatePassword(password)

    // Then
    expect(expected).toBeFalsy()
})

test('return true for password with letters and numbers has more then 8 characters', () => {
    // Given
    const password = 'abcd123asdad';

    // When
    const expected = validatePassword(password)

    // Then
    expect(expected).toBeTruthy()
})

test('return true for password with uppercase letters and numbers has more then 8 characters', () => {
    // Given
    const password = 'ABSS2213123';

    // When
    const expected = validatePassword(password)

    // Then
    expect(expected).toBeTruthy()
})

test('return true for password with uppercase letters, lowercase letters and numbers has more then 8 characters', () => {
    // Given
    const password = 'ABSS2213123sadas';

    // When
    const expected = validatePassword(password)

    // Then
    expect(expected).toBeTruthy()
})