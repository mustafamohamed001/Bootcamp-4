import React from 'react';

class BuildingList extends React.Component {

	box(id){
		this.props.onChange(id);
	}

	render() {

		const search = this.props.filterText.toLowerCase();

		//console.log('This is my directory file', this.props.data);
		var data = this.props.data.filter((building)=>{
			if(building.name){
				return (!building.name.toLowerCase().indexOf(search))
			}
			else{
				return false;
			}
		});

		const buildingList = data.map(directory => {
			return (
				<tr key={directory.id}>
					<td onClick={() => this.box(directory.id)}>{directory.code} </td>
					<td onClick={() => this.box(directory.id)}> {directory.name} </td>
				</tr>
			);
		});

		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Building Name</th>
							<th>Building Code</th>
						</tr>
					</thead>
					<tbody>
					{buildingList}
					</tbody>
				</table>
			</div>
		);
	}
}
export default BuildingList;
