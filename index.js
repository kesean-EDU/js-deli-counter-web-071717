let katzDeli = []

function takeANumber(line, newCustomer){
  line.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length > 0){
    let serving = line.shift()
    return `Currently serving ${serving}.`
  }else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if(line.length > 0){
    let order = []
    for (let i = 0; i < line.length; i++) {
       order.push(` ${i + 1}. ${line[i]}`)
     }
     return `The line is currently:${order}`
  }else {
    return "The line is currently empty."
  }
}
