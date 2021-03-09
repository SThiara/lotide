# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sthiara/lotide`

**Require it:**

`const _ = require('@sthiara/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the value at the head of an array passed into the function;
* `tail(array)`: returns an array that is equivalent to to the array passed into the function with the first value removed;
* `middle(array)`: returns an array of the middle or two middle values of the array passed into the function;
* `eqArrays(array1, array2)`: evaluates two arrays passed into it for equivalence and returns true/false;
* `assertEqual(actual, expected)`: compares two things passed into it and prints a true/false statement;
* `assertArraysEqual(actual, expected)`: calls eqArrays to compare two arrays passed into it and prints a true/false statement;