// Clicking on the New Board button creates a new board and adds its name to the list on the left.
// When there are multiple boards, users can switch between them by clicking on the name of the board in the list.
// Post-its retain their content and position even when the user switches between boards.
// Clicking on the Load Samples button generates two new boards using the objects in the SampleBoards variable. It also disappears once clicked, so that you can only load samples once.

var Board = function( selector ) {
  // Your board related code goes here
  
  // Use $elem to access the DOM element for this board
  var $elem = $( selector );

  function initialize() {
    $($elem).on("click", function(e){
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
      e.stopPropagation();
    });
  }
  initialize();
};

$(function() {
   var counter = 0;

  $("#new_board").on("click", function(){
   // console.log("hi");
    new Board('.post_board');
    $("#board_list").append("<li id = " + board_id + ">Board"+ counter +"</li>");
    var board_name = $("<li>Board"+ counter +"</li>").html();
    // $("<li>Board"+ counter +"</li>").appendTo('h3').css("font-family", "Times");
    counter++;
    var board_id = counter;

    console.log($(this));

    // $("#board_list li").closest().click(function(){
    $("#board_list li").click(function(){
      console.log("hi");
      console.log($(this));
      $(".post-it").hide();
    });

  });



  // When user clicks board name, selected board appears and previous board is hidden

   
});

