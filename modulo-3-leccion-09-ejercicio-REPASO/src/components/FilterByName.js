const FilterByName = (props) => {
  const handleChange = (ev) => {
    //props.handleFilter("name", ev.target.value);
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className='form__label display-block' htmlFor='name'>
        Filtrar por nombre:
      </label>
      <input className='form__input-text' type='text' name='name' id='name' onChange={handleChange} />
    </>
  );
};

export default FilterByName;
