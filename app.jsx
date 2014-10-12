/**
 * @jsx React.DOM
 */
(function(){

var App = React.createClass({
  render: function () {
  return <div>
              <h1> Hello! </h1>
              <Clock/>
         </div>
  }
});


var Clock = React.createClass({
  getInitialState: function () {
  var self = this;
  setInterval(function () {
    self.setState({time:Date().toLocaleString()});
  },500);
    return {
      "time": Date().toLocaleString()
    }
  },
  render: function () {
  return <div>
          <h2> the time </h2>
          <h2> {this.state.time} </h2>
         </div>
   }
});

/** Timer**/
var Timer = React.createClass({
  getInitialState: function () {
    // body...
  },
  render: function () {
    return (<div>
            <h1> hello</h1>
           </div>)
    // body...
  }
})

/** Render them **/
React.renderComponent(
    <App/>,
    document.getElementById('app')
);

})();
