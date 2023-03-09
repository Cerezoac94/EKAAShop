import { useGetAllStatesQuery } from "../../../../redux/service/state.service";
import State from "./State";

const StateMap = () => {
  const { data: results = [], isLoading, error } = useGetAllStatesQuery();
  return isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    results.results.map((state) => <State state={state} key={state.id} />)
  );
};

export default StateMap;
