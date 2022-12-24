import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type MyProps = {
value:number;
onClick:any
}
type MyState = {
value:string|null
}

export function Square(props:MyProps) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  