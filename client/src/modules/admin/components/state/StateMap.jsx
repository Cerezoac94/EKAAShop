import Loading from "../../../../components/loading/Loading";
import { useGetAllStatesQuery } from "../../../../redux/service/state.service";
import State from "./State";
import StateOption from "./StateOption";

const StateMap = ({ select }) => {
	const { data: results = [], isLoading, error } = useGetAllStatesQuery();
	if (!error) {
		return !select ? (
			isLoading ? (
				<Loading/>
			) : (
				results.length != 0 &&
				results?.results?.map((state) => <State state={state} key={state.id} />)
			)
		) : (
			  results.length != 0 &&
				results.results.map((state) => (
					<StateOption state={state} key={state.id} />)
        )
		);
	}
};

export default StateMap;
