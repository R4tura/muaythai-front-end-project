const FighterDetail = (props) => {
    if (!props.selected) {
      return (
        <div>
          <h1>NO DETAILS</h1>
        </div>
      );
    }
  
    console.log(props.selected);
    
    return (
      
      <div>
        <h1>{props.selected.name}</h1>
        <h2>
          Age: {props.selected.age} year{props.selected.age > 1 ? 's' : ''} old
        </h2>
        <h2>Ability: {props.selected.ability}</h2>
        <h2>
            Weight: {props.selected.weight} kg
        </h2>

        <button onClick={() => props.handleFormView(props.selected)}>
            Edit Fighter
        </button>

        <button onClick={() => props.handleDeleteFighter(props.selected._id)}>
          Delete Fighter
        </button>
      </div>
    );
  };
  
  export default FighterDetail;