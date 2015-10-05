var PostCodeApp = React.createClass({
  getInitialState: function() {
    return {
      stateId: 0
    }
  },

  handleStateFilterUpdate: function(stateId) {
    //repopulate 
    this.setState({stateId: stateId});
  },


  render: function () {
    return (
      <div>
        <div>
          <StateFilter updateFilter={this.handleStateFilterUpdate} />
        </div>
      </div>


    );
  }
});