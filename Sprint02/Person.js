"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var list_1 = require("./list");
/**
* Represents a person.
*/
var Person = /** @class */ (function () {
    function Person(id, name, bio) {
        this._id = id;
        this._name = name;
        this._bio = bio;
    }
    /**
    * The method responsible for returning a person's id.
    *
    * @returns string
    */
    Person.prototype.getId = function () {
        return this._id;
    };
    /**
    * The method responsible for returning a person's name.
    *
    * @returns string
    */
    Person.prototype.getName = function () {
        return this._name;
    };
    /**
    * The method responsible for returning a person's bio.
    *
    * @returns string
    */
    Person.prototype.getBio = function () {
        return this._bio;
    };
    /**
    * The method responsible for returning a person by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    Person.getPerson = function (id) {
        var person = list_1.list.find(function (person) { return person._id === id; });
        if (person)
            return new Person(person._id, person._name, person._bio);
        else
            throw new Error("A pessoa especificada não existe.");
    };
    /**
    * The method responsible for returning a person's name by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    Person.getName = function (id) {
        return this.getPerson(id)._name;
    };
    /**
    * The method responsible for returning a person's bio by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    Person.getBio = function (id) {
        return this.getPerson(id)._bio;
    };
    return Person;
}());
exports.Person = Person;