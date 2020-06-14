import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { requestUsers } from "./actions/userAction";
import Loading from "./components/Loading";
import CardContainer from "./components/CardContainer";

const mapStateToProps = (state) => ({
  isPending: state.isPending,
  users: state.users,
});

const App = (props) => {
  useEffect(() => {
    props.dispatch(requestUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isPending, error } = props;
  let component = undefined;
  if (isPending === "") {
    //if isPending is empty string
    component = undefined;
  } else {
    if (isPending === true) {
      //if fetching data
      component = <Loading />;
    } else {
      if (!isPending && error) {
        //if ispending is false and error is true
        component = <p>{error}</p>;
      } else if (!isPending && !error) {
        //if isPending is false and error is empty string
        component = <CardContainer />;
      }
    }
  }

  console.log(props.users);
  return <div className="App">{component}</div>;
};

export default connect(mapStateToProps)(App);
