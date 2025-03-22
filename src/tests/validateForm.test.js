/**
 * @jest-environment jsdom
 */
import {expect, jest, test} from '@jest/globals';

import { validateLength } from '../assets/js/validations-contact-form.js'
import { validationPhone } from '../assets/js/validations-contact-form.js'
import { validateEmailAccount } from '../assets/js/validations-contact-form.js'

// Run the test
test('Validate that an error is return when the name length is less than 2 characters', function () {
    document.body.innerHTML = `
        <input name="Name" />
        <div class="module_form">
            <div class="module_messages"></div>
        </div>
    `;
    const element = document.querySelector("input");
    element.setAttribute('type', 'text');
    element.value = "J";
    let error = validateLength(element, 2);
    expect(error).not.toBe('');
});
test('Validate there are not errors when the length of the name is equal or larger than 2 characters', function () {
    document.body.innerHTML = `
        <input name="Name" />
        <div class="module_form">
            <div class="module_messages"></div>
        </div>
    `;
    const element = document.querySelector("input");
    element.setAttribute('type', 'text');
    element.value = "Julieta";
    let error = validateLength(element, 2);
    expect(error).toBe('');
});

test('Validate that an error is return when the name length is less than 9 characters to check function reuse.', function () {
    document.body.innerHTML = `
        <input name="Name" type="test" />
        <div class="module_form">
            <div class="module_messages"></div>
        </div>
    `;
    const element = document.querySelector("input");
    element.value = "Julieta";
    let error = validateLength(element, 9);
    expect(error).not.toBe('');
});

test('Validate Phone number is empty', function () {
    document.body.innerHTML = `
        <input name="phone" class="input-field" />
        <div class="module_form">
            <div class="module_messages"></div>
        </div>
    `;
    const element = document.querySelector(".input-field");
    let error = validationPhone(element);
    expect(error).not.toBe('');
});
test('Validate invalid US mask in phone number', function () {
    document.body.innerHTML = `
        <input name="phone" class="input-field" />
        <div class="module_form">
            <div class="module_messages"></div>
        </div>
    `;
    const element = document.querySelector(".input-field");
    element.value = "(123) tes-tqt";
    let error = validationPhone(element);
    expect(error).toContain('format/length');
});
test('Validate Phone number is not empty and has right US mask', function () {
    document.body.innerHTML = `
        <input name="phone" class="input-field" />
        <div class="module_form">
            <div class="module_messages"></div>
        </div>
    `;
    const element = document.querySelector(".input-field");
    element.value = "(123) 123-1234";
    let error = validationPhone(element);
    expect(error).toBe('');
});
test('Get an error when the email does not have the right format', function () {
    document.body.innerHTML = `
        <input name="email" type="email" />
        <div class="module_form">
            <div class="module_messages"></div>
        </div>
    `;
    const element = document.querySelector("input");
    element.value = "test@t";
    let error = validateEmailAccount(element);
    console.log(error);
    expect(error).toContain('Incorrect');
    expect(error).toContain('format');
});
test('Validate Right email format', function () {
    document.body.innerHTML = `
        <input name="email" type="email" />
        <div class="module_form">
            <div class="module_messages"></div>
        </div>
    `;
    const element = document.querySelector("input");
    element.value = "test@test.com";
    let error = validateEmailAccount(element);
    expect(error).toBe('');
});