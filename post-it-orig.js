// Clicking on the New Board button creates a new board and adds its name to the list on the left.
// When there are multiple boards, users can switch between them by clicking on the name of the board in the list.
// Post-its retain their content and position even when the user switches between boards.
// Clicking on the Load Samples button generates two new boards using the objects in the SampleBoards variable. It also disappears once clicked, so that you can only load samples once.

var Board = function( selector ) {
  // Your board related code goes here
  
  // Use $elem to access the DOM element for this board
  var $elem = $( selector );
  var array_of_postits = [];

  function initialize() {
    $elem.on("click", function(e){
      e.preventDefault();
      new PostIt(e.pageX, e.pageY, $elem);
      
    });
}   
    initialize();
  };

var PostIt = function(x, y, board) {
 
 
  function initialize() {
    
    var header = $("<div class = 'header'>").text('Post Me!');
    var content = $("<div class = 'content'>").attr("contenteditable", "true");
    $("<div class = 'post-it'>").css("top",y).css("left",x).append(header).append(content).appendTo(board);
    $(".post-it").draggable({cancel : '.content'});

    $(".post-it").on("click", function(e){
      e.preventDefault();  
      e.stopPropagation();   // return false;
    });

    
  }
  initialize();
};

// create new empty board 
// var createBoard = function() {
//   $("#new_board").on("click", function(){
//     new Board('.post_board');
//     $('.post_board').empty();
//     // append the list 
//     $("#board_list").append("<li id = " + board_id + ">Board"+ counter +"</li>");
//     var board_name = $("<li>Board"+ counter +"</li>").html();
//     // $("<li>Board"+ counter +"</li>").appendTo('h3').css("font-family", "Times");
//     counter++;
//     var board_id = counter;  
// }

// edit existing board
// var editBoard = function() {

// }

// when DOM loaded  
$(function() {
  var boards = {};
   var counter = 0;
    var array_of_postits = [];

   // create new EMPTY board
  $("#new_board").on("click", function(e){
    e.preventDefault();
    // createBoard();

    var myboard = new Board('.post_board'); 


    $('.post_board').empty();
    var li = $('<li></li>');
    li.addClass("board"+counter);
    li.html("Board"+counter);
    $("#board_list").append(li);
    $('.post_board').append("<h3 class='board_head'>Board" + counter + "</h3>");
 //   $("#board_list").append("<li id = board" + counter + ">Board"+ counter +"</li>");
//    var board_name = $("<li>Board"+ counter +"</li>").html();
    // $("<li>Board"+ counter +"</li>").appendTo('h3').css("font-family", "Times");
    counter++;
 //   var board_id = counter;

  });  // end of "#new_board" click

    // $("#board_list li").closest().click(function(){
    // $("#board_list li").click(function(){
    //   console.log("hi");
    //   console.log($(this));
    //   $(".post-it").hide();
    // });
    //});


  function createArrayOfPostit(board_name) {
    // only one board
  $('.content').on('blur', function(e) {
        if ($(this).text()) {  
          // obj is one postit note
          obj.content = $(this).text();
          obj.position = "smth";
          array_of_postits.push(obj);
        } 
      })
    return array_of_postits;
  }



  $("#board_list").on('click', function(e){
    var $target_elem = $(e.target);
    var board_name = $target_elem.html(); //boardname
    $('.board_head').hide();
//    boards.hide();
    $('.post_board').append("<h3 class='board_head'>" + board_name + "</h3>");
//    boards.board_name.show()
    // editBoard()

  });

//  boards.board_name = array_of_postits;

//  boards.Board2

  // When user clicks board name, selected board appears and previous board is hidden
});

