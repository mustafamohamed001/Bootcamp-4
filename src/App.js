import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      clickedButton: '',

      building:{
        id: null,
        code: '',
        name: '',
        coordinates:{
          latitude: null,
          longitude: null
        },
        address: ''
      }
    };
  }

  codeUpdate(code){
    this.setState({building: code});
  }
  nameUpdate(name){
    this.setState({building: name});
  }
  latitudeUpdate(latitude){
    this.setState({building: latitude});
  }
  longitudeUpdate(longitude){
    this.setState({building: longitude});
  }
  addressUpdate(address){
    this.setState({building: address});
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
      this.setState({filterText: value});
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
      this.setState({selectedBuilding: id});
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        {/*Search component*/}
        <Search
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  {/*Building List component*/}
                  <BuildingList
                    data={this.props.data}
                    onChange = {this.selectedUpdate.bind(this)}
                    filterText = {this.state.filterText}
                  />
                </table>
              </div>
            </div>
            {/*Building Info Box component*/}
            <div className="column2">
              <ViewBuilding
                data = {this.props.data}
                selectedBuilding = {this.state.selectedBuilding}
                filterUpdate = {this.state.filterUpdate}
              />
              <RemoveBuilding
                  data = {this.props.data}
                  selectedBuilding = {this.state.selectedBuilding}
                  filterUpdate = {this.state.filterUpdate}
                  onChange = {this.selectedUpdate.bind(this)}
              />
            </div>
            <div className="column3">
              <AddBuilding
                  code={this.state.building.code}
                  codeUpdate={this.filterUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
