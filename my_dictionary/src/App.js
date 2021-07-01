import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import Card from "./Card";
import Create from "./Create";
import NotFound from "./NotFound";

import { connect } from "react-redux";

const mapStateToProps = () => {
  return null;
}

const mapDispatchProps = (dispatch) => ({
  load: () => {
    dispatch(loadBucket());
  },
  create: (new_dict) => {
    dispatch(creatDict(new_dict));
  }
  
})


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  };




  render(){
    return (
      <div className="App">
        <MainOutter>
          <Title></Title>
          <Line/>
          <Switch>
            <Route path="/" exact component={Card} history={this.props.history} />
            <Route component={NoteFound}/>
          </Switch>
          <CreateBtn/>
        </MainOutter>
      </div>
    )
  };


};

const MainOutter = styled.div`

`
const Title = styled.div`

`
const Line = styled.div`

`
const CreateBtn = styled.button`

`

export default withRouter(App);
