const stringLength = (string) => {
    if (typeof string !== "string") {
      throw new Error("Input should be a string");
    }
  
    const length = string.length;
  
    if (length < 1) {
      throw new Error("String must be at least 1 character long");
    }
  
    if (length > 10) {
      throw new Error("String cannot be longer than 10 characters");
    }
  
    return string.length;
  };
  
  module.exports = stringLength;
  