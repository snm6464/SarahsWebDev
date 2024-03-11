document.addEventListener('DOMContentLoaded', function(){

  dragElem('vest');
  dragElem('hat');
  dragElem('scarf');


  function dragElem(id) {
    let draggableElem = document.getElementById(id);

  let initialX =0,
  initialY = 0;
  
  let moveElement = false;
  
  // events obj
  
  let events = {
    mouse: {
      down: "mousedown",
      move: "mousemove",
      up: "mouseup",
    },
    
    touch: {
      down: "touchstart",
      move: "touchmove",
      up: "touchend",
    }
  };
  

  let deviceType = "";
  
  const isTouchDevice = () => {
    try {
      //try to create touchevent (if it doesn't work then it is mouse)
      document.creatEvent("TouchEvent");
      deviceType = "touch";
      return true;
    } 
    catch(e) {
      deviceType = "mouse";
      return false;
    }
  };
  
  isTouchDevice();
  
  console.log(isTouchDevice());
  console.log(deviceType);
  
  // start (mouse down/touch start)
  
  draggableElem.addEventListener(events[deviceType].down,
  (e) => {
    e.preventDefault();
    //initial x and y points
  
    initialX = !isTouchDevice() ? e.clientX: e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY: e.touches[0].clientY;
  
    //start movement
  
    moveElement = true;
  
  } );

  draggableElem.addEventListener(events[deviceType].move,
    (e) => {
      //if movement = true then set top and left to new x and y while removing offset
      if(moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  
        draggableElem.style.top = draggableElem.offsetTop - (initialY - newY) + "px";
        draggableElem.style.left = draggableElem.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
      }
  
    }
    );
  
      //mouse up/ touch end
  
  draggableElem.addEventListener(events[deviceType].up, 
    (stopMovement = (e) => 
    {
      moveElement = false;
    })
    );
  
  
  draggableElem.addEventListener("mouseleave", stopMovement);
  
  draggableElem.addEventListener(events[deviceType].up,
    (e) => {
      moveElement = false;
    })
  
  }
  
  
  
  

  
  
  
})
