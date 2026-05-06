// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

describe('isPhoneNumber', () => {
  test('accepts a phone number with hyphenated area code', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('accepts a phone number with parenthesized area code', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('rejects a phone number without separators', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });

  test('rejects a too-short phone number', () => {
    expect(isPhoneNumber('12-3456')).toBe(false);
  });
});

describe('isEmail', () => {
  test('accepts a simple email address', () => {
    expect(isEmail('student@example.com')).toBe(true);
  });

  test('accepts an email address with an underscore', () => {
    expect(isEmail('student_1@ucsd.edu')).toBe(true);
  });

  test('rejects an email address without a top-level domain', () => {
    expect(isEmail('student@example')).toBe(false);
  });

  test('rejects an email address with a long top-level domain', () => {
    expect(isEmail('student@example.school')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('accepts a password starting with a letter', () => {
    expect(isStrongPassword('Abcd1')).toBe(true);
  });

  test('accepts a password with underscores and numbers', () => {
    expect(isStrongPassword('z_123456')).toBe(true);
  });

  test('rejects a password starting with a number', () => {
    expect(isStrongPassword('1abcd')).toBe(false);
  });

  test('rejects a password with punctuation', () => {
    expect(isStrongPassword('abcd!')).toBe(false);
  });
});

describe('isDate', () => {
  test('accepts a one-digit month and day date', () => {
    expect(isDate('1/1/2026')).toBe(true);
  });

  test('accepts a two-digit month and day date', () => {
    expect(isDate('12/31/2026')).toBe(true);
  });

  test('rejects a date with hyphens', () => {
    expect(isDate('1-1-2026')).toBe(false);
  });

  test('rejects a date in year-first order', () => {
    expect(isDate('2026/1/1')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('accepts a three-character hex color with hash', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('accepts a six-character hex color without hash', () => {
    expect(isHexColor('1A2b3C')).toBe(true);
  });

  test('rejects a four-character hex color', () => {
    expect(isHexColor('#ffff')).toBe(false);
  });

  test('rejects a color with non-hex letters', () => {
    expect(isHexColor('#ggg')).toBe(false);
  });
});
