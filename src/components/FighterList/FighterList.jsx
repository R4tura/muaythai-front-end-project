

const FighterList = (props) => {
    
    console.log(props);
  
    return (
      <div>
        <h1>Fighter List</h1>
        
        <div>
            {!props.fighters.length ? (
                <h2>No Fighters Yet!</h2>
            ) : (
            <ul>
                {props.fighters.map((fighter) => <li
                                                     key={fighter._id}
                                                     style={{ cursor: 'pointer' }}
                                                     onClick={() => props.handleSelect(fighter)}
                                                 >{fighter.name}</li>)}
            </ul>
            )}
        </div>

        <button onClick={props.handleFormView}>
            {props.isFormOpen ? 'Close Form' : 'Add new Fighter'}
        </button>
      </div>
    );
  };
  
  export default FighterList;