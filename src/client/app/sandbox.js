//bookmarK: Reactive State
//import React from 'react';
//import {render} from 'react-dom';
import myData from './data.js';

/*var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];*/


console.log(myData);

var data=myData;

var CommentBox = React.createClass({

  render: function() {
    return (
     <div>
     <h1>Comments</h1>
     <CommentList data={this.props.data} />
     <CommentForm />
     </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {

    console.log(this.props.data);

if( Object.prototype.toString.call( this.props.data.myData ) === '[object Array]' ) {
    console.log( 'Array!' );
}


    var commentNodes = this.props.data.myData.map(function(comment) {
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
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
 rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}); 

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);
