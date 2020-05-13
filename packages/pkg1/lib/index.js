"use strict";

module.exports = (...params) => {
  console.log("Hello from test package 1", ...params);

  setTimeout(() => {
    console.log("Delayed hello from package 1");
  }, 1000);
};
