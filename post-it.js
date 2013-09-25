function BoardSelector(cssSelector) {
  this.$elem = $(cssSelector);
  this.$boardList = this.$elem.find('#board_list');
  this.$boardTemplate = $('.post_board').clone();
  $('.post_board').remove(); // remove the original board element
  this.boards = [];
  this.numBoards = 0;

  var self = this;
  function initialize() {
    // bind events for our buttons
    self.$elem.find('button#new_board').on('click', function(e) { self.createBoard(e) });
    self.$elem.find('button#load_samples').on('click', function(e) { self.loadSamples(e) });
    self.$boardList.on('click', 'li', function(e) { self.selectBoard(e) } );

    // add the current board to the list of managed boards
    self.$activeBoard = self.createBoard();
  }

  initialize();
}


BoardSelector.prototype = {
  createBoard: function() {
    // board name
    var boardName = "board-" + (this.boards.length + 1);
    var $boardElement = this.$boardTemplate.clone().attr("id", boardName);
    $('script').eq(0).before($boardElement);

    var boardLiTemplate = "<li>"+boardName+"</li>"
    this.$boardList.append(boardLiTemplate);


    this.boards.push(new Board(boardName, $boardElement));
    return this.boards[this.boards.length-1].$elem;
  },

  selectBoard: function(e) {
    var boardId = $(e.target).text();
    this.$activeBoard = $("#"+boardId);
    for (var i in this.boards) {
      this.boards[i].$elem.hide();
    }
    this.$activeBoard.show();
  },

  loadSamples: function() {
    console.log('loading samples ...');
  }
}


function Board(boardId, $boardElement) {
  this.id = boardId;
  this.$elem = $boardElement;
  this.$postItTemplate = $('#post-it-template');

  var self = this;
  function initialize() {
    self.$elem.on('click', function(e) { self.placePostIt(e) });
  }

  initialize();
}

Board.prototype = {
  placePostIt: function(e) {
    var $postItElement = this.$postItTemplate.clone().removeAttr("id");
    this.$elem.append($postItElement);
    var newPostIt = new PostIt($postItElement, e.clientX, e.clientY);
  }
}


function PostIt($postItElement, x, y) {
  this.$elem = $postItElement;
  var css = { left: x, top: y };
  this.$elem.css(css);    
  this.$elem.show();

  var self = this;
  function initialize() {
    // bind to click events and stop propagation to prevent
    // set up draggable
  }

  initialize();
}


$(function() {
  var bs = new BoardSelector('#board_selector');
});