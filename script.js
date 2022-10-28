
// jQuery and moment are linked

// 1- build the time blocks and append to body

// 2- 

var htmlBlocks =""
for(var i = 9; i <= 17; i++) {
    var timeBlk;
    if(i < 12){
        timeBlk = i +" am"
    }else if(i  === 12){
        timeBlk = i + " pm"
    }else{
        timeBlk = (i - 12) + " pm"
    }
  htmlBlocks = ` <div class="row">
  <h5 class="col-md-1">${timeBlk}</h5>
  <textarea class="col-md-10"rows="2" id="${i}" cols="100"></textarea>
  <button class="btn btn-primary saveplan col-md-1">Save</button>
 </div>`
 $("#timeblock").append(htmlBlocks) // creating time block
}

//template literals
//user ="X"
// console.log("Welcome"+user)
//console.log(`Welcome ${user}`)