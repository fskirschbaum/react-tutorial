// Components

var Comment = React.createClass({
  displayName: "Comment",

  rawMarkup: function () {
    var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
    return { __html: rawMarkup };
  },

  render: function () {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { className: "commentAuthor" },
        this.props.author
      ),
      React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup() })
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { author: comment.author, key: comment.id },
        comment.text
      );
    });
    return React.createElement(
      "div",
      { className: "commentList" },
      commentNodes
    );
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentForm" },
      "Hello, world! I am a CommentForm."
    );
  }
});

var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h1",
        null,
        "Comments"
      ),
      React.createElement(CommentList, { data: this.props.data }),
      React.createElement(CommentForm, null)
    );
  }
});

// Model

var data = [{ id: 1, author: "Pete Hunt", text: "This is one comment" }, { id: 2, author: "Jordan Walke", text: "Deliverin' up *'nother* comment!" }];

// Render

ReactDOM.render(React.createElement(CommentBox, { data: data }), document.getElementById('content'));
