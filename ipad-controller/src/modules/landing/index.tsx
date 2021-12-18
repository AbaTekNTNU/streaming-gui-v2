import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setByValue } from "../../reducers/urlSlice";
import { RootState } from "../../store";
//import moduleinfo from "../basket/moduleinfo.json";

const Landing = () => {
  const url = useSelector((state: RootState) => state.url);
  const dispatch = useDispatch();

  const [urlOverride, setUrlOverride] = useState(url.value);

  useEffect(() => {
    console.log(url);
  }, [url]);

  const onSubmit = () => {
    //console.log("onSubmit called");
    dispatch(setByValue(urlOverride));
  };

  return (
    <div>
      <form>
        <label>
          <div style={{ color: "white" }}>Enter your override URL:</div>
          <input
            type="text"
            value={urlOverride}
            onChange={(e) => setUrlOverride(e.target.value)}
            style={{ width: "300px" }}
          />
        </label>
      </form>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
      {/*<div style={{ color: 'white' }}>
                <strong>urlSlice value: </strong>{url.value}
            </div>*/}
      <div>
        <div></div>
        <div>
          <Link to={"/basket"}>Go to basket</Link>
        </div>
        <div>
          <Link to={"/audio"}>Go to lydkontroll</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
