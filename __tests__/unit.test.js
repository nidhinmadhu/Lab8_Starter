// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//phoneNumber
//check whether phoneNumber accepts 7 or 10 digit numbers with hyphens otherwise returns false
test('test if 10 random digits is a phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('test if 7 random digits is a phone number', () => {
    expect(functions.isPhoneNumber('456-7890')).toBe(true);
});
test('test if 5 random digits is not a phone number', () => {
    expect(functions.isPhoneNumber('56-890')).toBe(false);
});
test('test if 7 random digits without hyphens is not a phone number', () => {
    expect(functions.isPhoneNumber('4567890')).toBe(false);
});


//isEmail
//checks whether input emapil is a valid email
//valid emails will have characters followed by a '@' followed by characters and a '.' extension containing 2-3 characters
test('test if valid email is valid', () => {
    expect(functions.isEmail('abcd@efg.hi')).toBe(true);
});
test('test if valid email is valid', () => {
    expect(functions.isEmail('abcd@efg.hij')).toBe(true);
});
test('test if invalid email not containing @ is not valid', () => {
    expect(functions.isEmail('abcdefg.hij')).toBe(false);
});
test('test if invalid email not containing . extension is not valid', () => {
    expect(functions.isEmail('abcd@efg')).toBe(false);
});


//isStrongPassword
//accepts passwords that are between 4 and 15 (inclusive) characters long
//must only contain letters numbers and underscore
test('test if strong password is accepted', () => {
    expect(functions.isStrongPassword('password123')).toBe(true);
});
test('test if strong password is accepted', () => {
    expect(functions.isStrongPassword('password_123')).toBe(true);
});
test('test if weak password is accepted', () => {
    expect(functions.isStrongPassword('pas')).toBe(false);
});
test('test if password containing @ is not accepted', () => {
    expect(functions.isStrongPassword('password@_123')).toBe(false);
});

//isDate
//accepts date with the format XX / XX / YYYY where XX can be 1 or 2 digits but YYYY is always 4
test('test if appropriate date is accepted', () => {
    expect(functions.isDate('03/7/2000')).toBe(true);
});
test('test if appropriate date is accepted', () => {
    expect(functions.isDate('03/07/2000')).toBe(true);
});
test('test if inappropriate date is not accepted', () => {
    expect(functions.isDate('03/07/00')).toBe(false);
});
test('test if inappropriate date is not accepted', () => {
    expect(functions.isDate('122/07/2000')).toBe(false);
});

//isHexColor
//accepts 3 or 6 character hex codes
test('test if appropriate 3 char hex code is accepted', () => {
    expect(functions.isHexColor('fc9')).toBe(true);
});
test('test if appropriate 6 char hex code is accepted', () => {
    expect(functions.isHexColor('FFD700')).toBe(true);
});
test('test if inappropriate hex code is not accepted', () => {
    expect(functions.isHexColor('f9')).toBe(false);
});
test('test if inappropriate hex code is not accepted', () => {
    expect(functions.isHexColor('FFD70007')).toBe(false);
});