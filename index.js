// code your solution here
function superbowlWin(record){
  const winner=record.find(item=>item.result==="W")
  return winner ? winner.year : undefined
}
debugger;