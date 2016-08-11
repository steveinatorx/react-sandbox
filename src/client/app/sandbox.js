//convert to es6

/*class Comment extends React.Component(
  constructor(props) {
      super(props);
          this.state = {count: props.initialCount};
              this.tick = this.tick.bind(this);
  }


  _rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
)*/

export class CommentBox extends React.Component {
  constructor(props) {
      super(props);
  }

    _handleCommentSubmit() {
    var comments = this.props.data;
    this.props.addComment(comment);

  }
  componentDidMount () {
    /*this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);*/
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        {/*<CommentList />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />*/}
      </div>
    );
  }
}

/*
var CommentList = React.createClass({
  render() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var createStore = Redux.createStore;
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

var initialState = {
  data: [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}    
  ]
}


var reducer = function(state, action) {
  if(state === undefined) {
    return initialState;
  }
  var newState = state;
  switch(action.type) {
    case 'add_comment':
      var newComments = state.data.concat([action.comment]);
      newState = Object.assign({}, state, {data: newComments});
      break;
    case 'set_comments':
      newState = Object.assign({}, state, {data: action.data})
      break;
  }
  return newState;
}


var store = createStore(reducer, initialState);

var CommentBoxState = function(state) {
  return {
    data: state.data
  }
}

var CommentListState = function(state) {
  return {
    data: state.data
  }
}

var CommentBoxDispatch = function(dispatch) {
  return {
    addComment: function(comment) {
      comment.id = Date.now();
      dispatch({
        type: 'add_comment',
        comment: comment,
      })
    },
    setComments: function(data) {
      dispatch({
        type: 'set_comments',
        data: data
      })
    }
  }
}


CommentBox = connect(
  CommentBoxState,
  CommentBoxDispatch
)(CommentBox)
CommentList = connect(
  CommentListState
)(CommentList)
*/
ReactDOM.render(
    <CommentBox />,
  document.getElementById('content')
);
