var StateFilter = React.createClass({
  getDefaultProps: function() {
    console.log ("getDefaultProps");
  },

  getInitialState: function() {
    console.log ("getInitialState");
    console.log (this.props);
    return {
      dataStates: []
    };
  },

  componentWillMount: function() {
    console.log ("componentWillMountStart");
    var data = getStates(); 
    this.setState({dataStates: data});
    console.log ("componentWillMountEnd");
  },

  componentDidMount: function() {
    console.log ("componentDidMount");
  },

  // ^-- triggered after render

  componentWillReceiveProps: function(nextProps) {
    console.log ("componentWillReceiveProps");
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    console.log ("shouldComponentUpdate");
    return nextProps.id !== this.props.id;
  },

  // ^-- triggered after component changed

  componentDidUpdate: function() {
    console.log ("componentDidUpdate");
  },

  handleChangeState: function() {
    var selectedValue = this.refs.stateFilter.getDOMNode().value;
    this.props.updateFilter(selectedValue);
  },

  render: function() {
    var states = this.state.dataStates.map(function(stateItem){
      return <StateOption data={stateItem} />
    });

    return (
      <select option ref="stateFilter" onChange={this.handleChangeState} >{states} </select>
    );
  }
});

var StateOption = React.createClass({

  render: function() {
    return(
      <option value={this.props.data.id}>{this.props.data.name}</option>
    );
  }
});