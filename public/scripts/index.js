
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return(
      <div className="commentList">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentForm = React.creatClass({
  render: function() {
    <div className="commentForm">
      Hello, world! I am a CommentForm.
    </div>
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById( 'content' )
);