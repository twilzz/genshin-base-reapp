import React from "react";

const SearchPanel = (props) => {
  const updateHandler = (event) => {
    props.search(event.target.value);
  };
  const radioHandler = (e) => {
    props.filter(e.target.value);
  };

  return (
      <div className="row">
        <div className="input-field col s12">
          <input
            type="search"
            className="validate"
            placeholder='Поиск. Например "Diluc"'
            onChange={updateHandler}
          />
        </div>
        <div className=" col s12">
          <label className="radio-vision">
            <input
              name="vision"
              type="radio"
              value="Все"
              onChange={radioHandler}
            />
            <span>Все</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="pyro"
              type="radio"
              onChange={radioHandler}
            />
            <span>Pyro</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="anemo"
              type="radio"
              onChange={radioHandler}
            />
            <span>Anemo</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="electro"
              type="radio"
              onChange={radioHandler}
            />
            <span>Electro</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="hydro"
              type="radio"
              onChange={radioHandler}
            />
            <span>Hydro</span>
          </label>
          <label className="radio-vision">
            <input
              name="vision"
              value="cryo"
              type="radio"
              onChange={radioHandler}
            />
            <span>Cryo</span>
          </label>
        </div>
      </div>
    );
}

export default SearchPanel;
