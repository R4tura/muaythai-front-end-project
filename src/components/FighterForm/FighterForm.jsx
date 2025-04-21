import { useState } from 'react';

const FighterForm = (props) => {
    const intitalState = {
        name: '',
    age: '',
    ability: '',
    weight: '',
    }
  const [formData, setFormData] = useState(props.selected ? props.selected : intitalState)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    

    if (props.selected) {
        props.handleUpdateFighter(formData, props.selected._id)
    } else {
    props.handleAddFighter(formData)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="ability"> Ability </label>
        <input
          id="ability"
          name="ability"
          value={formData.ability}
          onChange={handleChange}
        />
        <label htmlFor="weight"> Weight </label>
        <input
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />


        <button type="submit">
            {props.selected ? 'Update Pet' : 'Add New Fighter'}
            </button>
      </form>
    </div>
  );
};

export default FighterForm;