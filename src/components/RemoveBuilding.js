import React from 'react';

class RemoveBuilding extends React.Component {

    removeBuilding(){
        //this.props.data.splice(this.props.selectedBuilding, 1)

    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.removeBuilding()}}>Remove</button>
            </div>

        );
    }
}
export default RemoveBuilding;
