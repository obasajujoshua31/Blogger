import { useState } from "react";

function useForm(initialState) {
  const [state, setState] = useState(initialState);

  return {
    state,
    handleChange: e => {
      setState({
        ...state,
        [e.target.name]: [e.target.value],
      });
    },
  };
}

export default useForm;
