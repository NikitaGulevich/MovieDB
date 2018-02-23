import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import {changeFilterName, changePage} from '../../actions';

const style = { backgroundColor: '#fff'};

class NameFilter extends Component {

  handleFilterChange = (e) => {
    const { changeFilterName, changePage } = this.props;
    changeFilterName(e.target.value);
    changePage(1);
  }


  render() {
    const { filterName} = this.props;
    return (
      <div>
        <TextField
          id='filter'
          value = {filterName}
          { ...{ style } }
          hintText="Найти фильм"
          onChange={this.handleFilterChange}
        />
      </div>

    )

  }
}

export default connect(
  state =>({
    filterName: state.filterName,
    currentPage: state.currentPage
  }),
  { changeFilterName, changePage }
)(NameFilter);