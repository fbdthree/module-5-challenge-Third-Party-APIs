
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
  <h5 class="col-sm-1 col-md-1">${timeBlk}</h5>
  <textarea class="col-sm-9 col-md-10"rows="2" id="${i}" cols="100"></textarea>
  <button class="btn btn-primary saveplan col-sm-2 col-md-1">Save</button>
 </div>`
 $("#timeblock").append(htmlBlocks) // creating time block
}

//template literals
//user ="X"
// console.log("Welcome"+user)
//console.log(`Welcome ${user}`)


$(".saveplan").on("click",function(){
    var time = $(this).siblings("textarea").attr("id")
    var userInput = $(this).siblings("textarea").val()
    console.log("btn",time,userInput)
    localStorage.setItem(time, userInput)
})