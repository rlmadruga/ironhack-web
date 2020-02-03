// Rover Object Goes Here
// ======================

let rover = {
 direction: "N",
 x: 0,
 y: 0, 
 travelLog: [{x: 0, y: 0}]
};

// ======================

function roverData (theRover) 
{
  console.log("----------");
  console.log(`* Rover \n direction: [ ${theRover.direction} ] \n position: [ ${theRover.x},${theRover.y} ] \n travel Log: [ ${theRover.travelLog} ]`);
  console.log("----------");
}

function turnLeft(theRover){

  /*console.log("----------");
  console.log(`* Rover current direction => [ ${theRover.direction} ]`);
  console.log("----------");*/

  switch(theRover.direction)
  {
    case "N":
      theRover.direction = "W";
      console.log("\n - turnLeft was called! \n Rover is facing [ W ] ");
      break;

    case "W":
      theRover.direction = "S";
      console.log("\n - turnLeft was called! \n Rover is facing [ S ] ");
      break;

    case "S":
      theRover.direction = "E";
      console.log("\n - turnLeft was called! \n Rover is facing [ E ] ");
      break;

    case "E":
      theRover.direction = "N";
      console.log("\n - turnLeft was called! \n Rover is facing [ N ] ");
      break;
  }
}

function turnRight(theRover){

  /*console.log("----------");
  console.log(`* Rover current direction => [ ${theRover.direction} ]`);
  console.log("----------");*/

  switch(theRover.direction)
  {
    case "N":
      theRover.direction = "E";
      console.log("\n - turnRight was called!\n Rover is facing [ E ] ");
      break;

    case "E":
      theRover.direction = "S";
      console.log("\n - turnRight was called!\n Rover is facing [ S ] ");
      break;

    case "S":
      theRover.direction = "W";
      console.log("\n - turnRight was called!\n Rover is facing [ W ] ");
      break;

    case "W":
      theRover.direction = "N";
      console.log("\n - turnRight was called!\n Rover is facing [ N ] ");
      break;
  }
}

function moveForward(theRover){
  
  /*console.log(`* Rover current position => [ ${theRover.x}, ${theRover.y} ]`);
  console.log("----------");*/

  console.log("\n * moveForward was called!");

  switch(theRover.direction)
  {

    case "N":
      theRover.y -= 1;
      console.log(` Rover current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "S":
      theRover.y += 1;
      console.log(` Rover current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "W":
      theRover.x -= 1;
      console.log(` Rover current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "E":
      theRover.x += 1;
      console.log(` Rover current position => [ ${theRover.x},${theRover.y} ]`);
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

  let newPosition = {x: theRover.x, y: theRover.y};
  theRover.travelLog.push(newPosition);
}

function moveBackward(theRover)
{

   console.log("\n * moveBackward was called!");

  switch(theRover.direction)
  {

    case "N":
      theRover.y += 1;
      console.log(` Rover current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "S":
      theRover.y -= 1;
      console.log(` Rover current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "W":
      theRover.x += 1;
      console.log(` Rover current position => [ ${theRover.x},${theRover.y} ]`);
      break;

    case "E":
      theRover.x -= 1;
      console.log(` Rover current position => [ ${theRover.x},${theRover.y} ]`);
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

   let newPosition = {x: theRover.x, y: theRover.y};
  theRover.travelLog.push(newPosition);
 
}

function commands(theRover, orders)
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
          console.log("You cant move offboard.");
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
          break;

        case "b":
          moveBackward(theRover);
          break;

        case "l":
          turnLeft(theRover);
          break;
          
        } 
      }   
  }
  console.log(theRover.travelLog);
}

roverData(rover);
commands(rover,"rffrfflfrff");
//ffzzy
//fbbbbbbbbbb
//rffrfflfrff
