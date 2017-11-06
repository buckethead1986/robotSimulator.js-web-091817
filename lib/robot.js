"use strict";

function Robot() {
  // implement your solution here!
  this.coordinates = [0, 0];
  this.bearing = "north";
}

Robot.prototype.orient = function(direction) {
  const directions = ["north", "south", "east", "west"];
  if (directions.indexOf(direction) === -1) {
    throw new Error("Invalid Robot Bearing");
  } else if (direction === "north") {
    this.bearing = "north";
  } else if (direction === "east") {
    this.bearing = "east";
  } else if (direction === "west") {
    this.bearing = "west";
  } else if (direction === "south") {
    this.bearing = "south";
  }
};

Robot.prototype.turnRight = function() {
  if (this.bearing === "north") {
    this.bearing = "east";
  } else if (this.bearing === "east") {
    this.bearing = "south";
  } else if (this.bearing === "south") {
    this.bearing = "west";
  } else if (this.bearing === "west") {
    this.bearing = "north";
  }
};
Robot.prototype.turnLeft = function() {
  if (this.bearing === "north") {
    this.bearing = "west";
  } else if (this.bearing === "west") {
    this.bearing = "south";
  } else if (this.bearing === "south") {
    this.bearing = "east";
  } else if (this.bearing === "east") {
    this.bearing = "north";
  }
};

Robot.prototype.at = function(x, y) {
  this.coordinates = [x, y];
};

Robot.prototype.advance = function() {
  let x = this.coordinates[0];
  let y = this.coordinates[1];
  if (this.bearing === "north") {
    this.coordinates = [x, y + 1];
  } else if (this.bearing === "east") {
    this.coordinates = [x + 1, y];
  } else if (this.bearing === "south") {
    this.coordinates = [x, y - 1];
  } else if (this.bearing === "west") {
    this.coordinates = [x - 1, y];
  }
};

Robot.prototype.instructions = function(string) {
  const result = [];
  const instructionArray = string.split("");
  for (const letter of instructionArray) {
    if (letter.toLowerCase() === "l") {
      result.push("turnLeft");
    } else if (letter.toLowerCase() === "r") {
      result.push("turnRight");
    } else if (letter.toLowerCase() === "a") {
      result.push("advance");
    }
  }
  return result;
};

Robot.prototype.place = function(hash) {
  this.coordinates = [hash.x, hash.y];
  this.bearing = hash.direction;
};
Robot.prototype.evaluate = function(string) {
  const instructed = this.instructions(string);
  for (const instructions of instructed) {
    this[instructions]();
  }
};
