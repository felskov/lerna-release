"use strict";

module.exports = (...params) => {
  console.log("Hello from test package 2", ...params);

  setTimeout(() => {
    console.log("Delayed hello from package 2");
  }, 1000);
};
