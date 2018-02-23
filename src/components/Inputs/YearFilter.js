import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {changeFilterYear, changePage} from '../../actions';

let years = [<MenuItem value='' key={0} primaryText='Ничего' />];

for (let i = 2018; i >= 1900; i--) {
  years.push(<MenuItem value={i} key={i} primaryText={i} />)
}

class YearFilter extends Component {

  handlerChangeYear = (e, i, v) => {
    const { changeFilterYear, changePage} = this.props;
    changeFilterYear(v);
    changePage(1);
  }

  render() {
    const { filterYear, filterName } = this.props;
    return (
      <div>
        <SelectField
          value={ filterYear }
          maxHeight={200}
          onChange={this.handlerChangeYear}
        >
          {years}
        </SelectField>
      </div>
    )
  }
}

export default connect(
  state =>({
    filterYear: state.filterYear,
    currentPage: state.currentPage
  }),
  { changeFilterYear, changePage }
)(YearFilter);