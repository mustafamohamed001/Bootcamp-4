import React from 'react';

class AddBuilding extends React.Component {

/*    constructor(props){
        super(props);

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
    }*/



    nameUpdate() {
        const val = this.myValue.value
        this.props.nameUpdate(val)
    }
    codeUpdate() {
        const val = this.myValue.value
        this.props.codeUpdate(val)
    }
    addressUpdate() {
        const val = this.myValue.value
        this.props.addressUpdate(val)
    }
    longitudeUpdate() {
        const val = this.myValue.value
        this.props.longitudeUpdate(val)
    }
    latitudeUpdate() {
        const val = this.myValue.value
        this.props.latitudeUpdate(val)
    }

    render() {
        return (
            <div>
                <h3>Add New Building</h3>
                <form>
                    <input
                        type="text"
                        //ref = {(value)=>{this.myValue = value}}
                        placeholder="Building Name"
                        //onChange={this.filterUpdate.bind(this)}
                    />
                    <input
                        type="text"
                        //ref = {(value)=>{this.myValue = value}}
                        placeholder="Building Code"
                        //onChange={this.filterUpdate.bind(this)}
                    />
                    <input
                        type="text"
                        //ref = {(value)=>{this.myValue = value}}
                        placeholder="Address"
                        //onChange={this.filterUpdate.bind(this)}
                    />
                    <input
                        type="text"
                        //ref = {(value)=>{this.myValue = value}}
                        placeholder="Longitude"
                        //onChange={this.filterUpdate.bind(this)}
                    />
                    <input
                        type="text"
                        //ref = {(value)=>{this.myValue = value}}
                        placeholder="Latitude"
                        //onChange={this.filterUpdate.bind(this)}
                    />
                </form>
            </div>

        );
    }
}
export default AddBuilding;
