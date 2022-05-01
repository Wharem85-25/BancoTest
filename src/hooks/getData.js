import React, { useState } from 'react'

const initialState = {
	dat: [],
}

const useGetRows = () => {
	const [state, setState] = useState(initialState)

	const removeRows = (payload) => {
		setState({
			...state,
			dat: state.dat.filter(items => items.id != payload.id),
		})
	}

	return {
		state,
		removeRows
	};
};

export default useGetRows;
