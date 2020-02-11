 // Rover Object Goes Here
// ======================

let rover = {
 name: "Rover 1", 
 direction: "N",
 number: 2,
 x: 0,
 y: 0, 
 travelLog: [{x: 0, y: 0}]
};

let rover2 = {
 name: "Rover 2",
 direction: "N",
 number: 3,
 x: 9,
 y: 9, 
 travelLog: [{x: 9, y: 9}]
}

let mapRover = [
  [2,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,3]
]

let full = false;

let lastX = 0;
let lastY = 0;

function updateMap (mapRover, rover)
{ 
  mapRover[rover.y][rover.x] = rover.number;
  mapRover[lastY][lastX] = 0;
  console.log(mapRover.join('\n'));
}


// ======================

function roverData (theRover) 
{
  console.log("----------");
  console.log(`* ${theRover.name} \n direction: [ ${theRover.direction} ] \n position: [ ${theRover.x},${theRover.y} ] \n travel Log: [ ${theRover.travelLog} ]`);
  console.log(mapRover.join('\n') + '\n\n');
  console.log("----------");
}

//TURN LEFT-----------------------------------------------------------------------------------------------
function turnLeft(theRover){

  switch(theRover.direction)
  {
    case "N":
      theRover.direction = "W";
      console.log(`\n - turnLeft was called! \n ${theRover.name} is facing [ W ] `);
      break;

    case "W":
      theRover.direction = "S";
      console.log(`\n - turnLeft was called! \n ${theRover.name} is facing [ S ] `);
      break;

    case "S":
      theRover.direction = "E";
      console.log(`\n - turnLeft was called! \n ${theRover.name} is facing [ E ] `);
      break;

    case "E":
      theRover.direction = "N";
      console.log(`\n - turnLeft was called! \n ${theRover.name} is facing [ N ] `);
      break;
  }
} 

//TURN RIGHT----------------------------------------------------------------------------------------
function turnRight(theRover){

  switch(theRover.direction)
  {
    case "N":
      theRover.direction = "E";
      console.log(`\n - turnRight was called!\n ${theRover.name} is facing [ E ] `);
      break;

    case "E":
      theRover.direction = "S";
      console.log(`\n - turnRight was called!\n ${theRover.name} is facing [ S ] `);
      break;

    case "S":
      theRover.direction = "W";
      console.log(`\n - turnRight was called!\n ${theRover.name} is facing [ W ] `);
      break;

    case "W":
      theRover.direction = "N";
      console.log(`\n - turnRight was called!\n ${theRover.name} is facing [ N ] `);
      break;
  }
}

//MOVE FORWARD------------------------------------------------------------------------------
function moveForward(theRover){
  
  let tempX = theRover.x;
  let tempY = theRover.y;

  lastX = theRover.x;
  lastY = theRover.y;

  console.log("\n * moveForward was called!");

  switch(theRover.direction)
  {

    case "N":
      theRover.y -= 1;
      console.log(` ${theRover.name} current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "S":
      theRover.y += 1;
      console.log(` ${theRover.name} current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "W":
      theRover.x -= 1;
      console.log(` ${theRover.name} current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "E":
      theRover.x += 1;
      console.log(` ${theRover.name} current position => [ ${theRover.x},${theRover.y} ]`);
      break;

  }

  if(theRover.x < 0 || theRover.y < 0 || theRover.x > 9 || theRover.y > 9)
  {
    console.log("You cant move offboard.");

    if(theRover.x < 0) 
    {
      theRover.x = 0;
    }
    else if (theRover.x > 9)
    {
       theRover.x = 9
    }
    else if (theRover.y > 9)
    {
       theRover.y = 9
    }
    else 
    {
       theRover.y = 0
    }
  }
  else if(mapRover[theRover.x][theRover.y] === 1)
  {
    console.log(` ${theRover.name} hits an obstacle! Try another direction!`);
    theRover.x = tempX;
    theRover.y = tempY;
  }
  if(full === true)
  {
    full = false;
  }
  else{
    let newPosition = {x: theRover.x, y: theRover.y};
    theRover.travelLog.push(newPosition);
  }

}

//MOVE BACKWARD---------------------------
function moveBackward(theRover)
{

  let tempX2 = theRover.x;
  let tempY2 = theRover.y;

  lastX = theRover.x;
  lastY = theRover.y;

   console.log("\n * moveBackward was called!");

  switch(theRover.direction)
  {

    case "N":
      theRover.y += 1;
      console.log(` ${theRover.name} current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "S":
      theRover.y -= 1;
      console.log(` ${theRover.name} current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "W":
      theRover.x += 1;
      console.log(` ${theRover.name} current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "E":
      theRover.x -= 1;
      console.log(` ${theRover.name} current position => [ ${theRover.x},${theRover.y} ]`);
      break;
  }

  if(theRover.x < 0 || theRover.y < 0 || theRover.x > 9 || theRover.y > 9)
  {
    console.log("You cant move offboard.");

    if(theRover.x < 0) 
    {
      theRover.x = 0;
    }
    else if (theRover.x > 9)
    {
       theRover.x = 9
    }
    else if (theRover.y > 9)
    {
       theRover.y = 9
    }
    else 
    {
       theRover.y = 0
    }  
  }
  else if(mapRover[theRover.y][theRover.x] === 1 )
    {
      console.log(`${theRover.name} hits an obstacle! Try another direction!`);
      theRover.x = tempX2;
      theRover.y = tempY2;
    }
 
  if(full === true)
  {
    full = false;
  }
  else{
    let newPosition = {x: theRover.x, y: theRover.y};
    theRover.travelLog.push(newPosition);
  }
  
 
}


function commands(theRover, orders, theRover2, orders2, mapRover)
{

  if(theRover === rover)
  {
    let newOrdersArr = [];

    for(let i = 0; i < orders.length; i++)
    {
      if(orders[i] === "f" || orders[i] === "r" || orders[i] === "b" || orders[i] === "l")
      {
        newOrdersArr.push(orders[i]);
      }
    }

    for(let i = 0; i < newOrdersArr.length; i++)
    {

      let order = newOrdersArr[i];
      
      if(theRover.x < 0 || theRover.y < 0 || theRover.x > 9 || theRover.y > 9)
      {
            console.log("-- You cant move offboard.");
      }
      else if(((theRover.x +1 === theRover2.x) || (theRover.x -1 === theRover2.x) || theRover.x === theRover2.x) && ((theRover.y + 1 === theRover2.y) || (theRover.y - 1 === theRover2.y) || theRover.y === theRover2.y))
      {
        console.log("\n-- You cant collide with the other Rover.");
      } 
      else
      {
          switch(order)
          {
          case "r":
            turnRight(theRover);
            break;

          case "f":
            moveForward(theRover);
            updateMap(mapRover, theRover);
            break;

          case "b":
            moveBackward(theRover);
            updateMap(mapRover, theRover);
            break;

          case "l":
            turnLeft(theRover);
            break;   
          } 
      }   
    }
    console.log(theRover.travelLog);
  }

  //COMMAND ROVER 2 ---------------------------------------------------------------
  console.log("\n----- Rover 2 turn -----");

  if(theRover2 === rover2)
  {
    let newOrdersArr2 = [];

    for(let i = 0; i < orders2.length; i++)
    {
      if(orders2[i] === "f" || orders2[i] === "r" || orders2[i] === "b" || orders2[i] === "l")
      {
        newOrdersArr2.push(orders2[i]);
      }
    }

    for(let i = 0; i < newOrdersArr2.length; i++)
    {
      
      let order2 = newOrdersArr2[i];  
      
      if(theRover2.x < 0 || theRover2.y < 0 || theRover2.x > 9 || theRover2.y > 9)
      {
            console.log("-- You cant move offboard.");
      }
      else if((theRover2.x !== theRover.x || theRover2.y !== theRover.y) && (order2 === "r" || order2 === "l"))
      {
        switch(order2)
        {
          case "r":
            turnRight(theRover2);
            break;
          
          case "l":
            turnLeft(theRover2);
            break;
        } 
      }
      if((theRover2.direction === "N" || theRover2.direction === "S" ) && ( (theRover2.x === theRover.x)  && ((theRover2.y + 1 === theRover.y) || (theRover2.y - 1 === theRover.y)) ))
      {       
        console.log("\n-- You cant collide with the other Rover.");
        
      }
      else if((theRover2.direction === "W" || theRover2.direction === "E" ) && ( (theRover2.y === theRover.y)  && ((theRover2.x + 1 === theRover.x) || (theRover2.x - 1 === theRover.x)) ))
      {
        console.log("\n-- You cant collide with the other Rover.");
      }
      else
      {
          switch(order2)
          {
           case "f":
             moveForward(theRover2);
             updateMap(mapRover, theRover2);
             break;

          case "b":
            moveBackward(theRover2);
            updateMap(mapRover, theRover2);
            break;
            
          } 
      }   
    }
    console.log(theRover2.travelLog);
  }
}


roverData(rover);
roverData(rover2);
commands(rover,"bbbbbrffff", rover2, "fffflfffffrf", mapRover);
//bbbbbbbrf
//ffzzy
//fbbbbbbbbbb
//rffrfflfrff
