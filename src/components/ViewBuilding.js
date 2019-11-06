import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		var name = "";
		var code = "";
		var address = "";
		var coordinates = "";

		if(this.props.data.find((building)=>{return (building.id === this.props.selectedBuilding)}) != null
		   && this.props.selectedBuilding !== 0){
			name = this.props.data.find((building)=>{return (building.id === this.props.selectedBuilding)}).name;
			code = this.props.data.find((building)=>{return (building.id === this.props.selectedBuilding)}).code;
			address = this.props.data.find((building)=>{return (building.id === this.props.selectedBuilding)}).address;
			coordinates = this.props.data.find((building)=>{return (building.id === this.props.selectedBuilding)}).coordinates;

			name = <div><h3>{name}</h3><hr></hr></div>
			code = <div><p>Building Code: {code}</p></div>

			if (address != null){
				address = <div><p>Address: {address}</p></div>
			}
			else{
				address = <div><p> </p></div>
			}
			if (coordinates != null){
				coordinates = <div><p>Longitude: {coordinates.longitude}</p>
					<p>Latitude: {coordinates.latitude}</p></div>
			}
			else{
				coordinates = <div><p> </p></div>
			}
		}
		else{
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		}

		return(
			<div>
				{name}
				{code}
				{address}
				{coordinates}
			</div>
		);

	}
}
export default ViewBuilding;
