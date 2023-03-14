const StateOption = ({ state }) => {
  return (
    <>
        <option value={state.id}>{state.name}</option>
      </>
  )
}
export default StateOption