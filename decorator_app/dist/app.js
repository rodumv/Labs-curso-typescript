"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
var validations = {};
function validator(types) {
    return function (target, propName) {
        var _a;
        validations[target.constructor.name] = (_a = {},
            _a[propName] = types,
            _a);
    };
}
var Person = /** @class */ (function () {
    function Person(email, password) {
        this.email = email;
        this.password = password;
    }
    __decorate([
        validator(['required'])
    ], Person.prototype, "email", void 0);
    __decorate([
        validator(['required', 'password'])
    ], Person.prototype, "password", void 0);
    return Person;
}());
function validate(obj) {
    var validationRegistered = validations[obj.constructor.name];
    if (!validationRegistered) {
        return true;
    }
    var isValid = true;
    for (var prop in validationRegistered) {
        for (var _i = 0, _a = validationRegistered[prop]; _i < _a.length; _i++) {
            var validator_1 = _a[_i];
            switch (validator_1) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'password':
                    isValid = isValid && obj[prop].length > 5;
                    break;
            }
        }
    }
    return isValid;
}
var personForm = document.querySelector('form');
(_a = personForm) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var emailElem = document.getElementById('email');
    var passwordElem = document.getElementById('password');
    var newPerson = new Person(emailElem.value, passwordElem.value);
    if (!validate(newPerson)) {
        alert('El valor ingresado es incorrecto');
        return;
    }
    console.log(newPerson);
});
