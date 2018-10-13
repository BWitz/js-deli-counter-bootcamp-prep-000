function takeANumber(current, Ada) {
  current.push(Ada);
  return `Welcome, ${Ada}. You are number ${current.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
    } else {
      return "There is nobody waiting to be served!";
    }
  }
  
function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else if (line.length > 0) {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`;
    /*
    for .. the length of the array
      print the current person in the line
    */
  }
}


let i = 1;

function takeANumber(currentLine) {
 currentLine.push(i);
 return `Welcome! You're ticket number # ${i++}`;
}

// takeANumber(katzDeliLine) => "Welcome! You're ticket number #1" [1]
// takeANumber(katzDeliLine) => "Welcome! you're ticket number #2" [1,2]

// nowServing(katzDeliLine) => "Currently Serving: #1" [2]
// nowServing(katzDeliLine) => "Currently Serving: #2" []

// takeANumber(katzDeliLine) => "Welcome! You're ticket number #3" [3]