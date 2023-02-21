import React from 'react'
import { ACTIONS } from "./Calculator";

export default function Operation({operation, dispatch}) {
  return (
    <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>{operation}</button>
  )
}
