import React, { Component } from "react";

class SearchPanel extends Component {
  updateHandler = (event) => {
    this.props.search(event.target.value);
  };
  radioHandler = (e) => {
    this.props.filter(e.target.value);
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            type="search"
            className="validate"
            placeholder='Поиск. Например "Diluc"'
            onChange={this.updateHandler}
          />
        </div>
        <div className=" col s12">
          <label className="radio-vision">
            <input
              name="vision"
              type="radio"
              value="Все"
              onChange={this.radioHandler}
            />
            <span>Все</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="pyro"
              type="radio"
              onChange={this.radioHandler}
            />
            <span>Pyro</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="anemo"
              type="radio"
              onChange={this.radioHandler}
            />
            <span>Anemo</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="electro"
              type="radio"
              onChange={this.radioHandler}
            />
            <span>Electro</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="hydro"
              type="radio"
              onChange={this.radioHandler}
            />
            <span>Hydro</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="cryo"
              type="radio"
              onChange={this.radioHandler}
            />
            <span>Cryo</span>
          </label>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
