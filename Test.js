class Test {
  static assertSimilar(result, expected, info) {
    if (result == expected) {
      console.log(`OK: ${info} =  ${result}, `, expected);
    } else {
      console.error(`FALSE: ${info} =  ${result}, `, expected);
    }
  }

  static assertEquals(result, expected, info) {
    if (result === expected) {
      console.log(`OK: ${info} =>  Result: ${result}, Expected: `, expected);
    } else {
      console.error(
        `FALSE: ${info} =>  Result: ${result}, Expected: `,
        expected
      );
    }
  }

  static assertArrays(result, expected, info) {
    if (
      result.length === expected.length &&
      result.every((item, i) => expected[i] === item)
    ) {
      console.log(`OK: ${info} => Result: ${result}, `, expected);
    } else {
      console.error(`FALSE: ${info} => Result: ${result}, `, expected);
    }
  }

  static assertObjects(result, expected, info) {
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(
        `OK: ${info} =>  Result: ${JSON.stringify(result)}, Expected: `,
        expected
      );
    } else {
      console.error(
        `FALSE: ${info} => Result: ${JSON.stringify(result)}, Expected:`,
        expected
      );
    }
  }
}

module.exports = Test;
