import { Fragment } from "react";
import Children, { AltChildren } from "./Children";

export default function Parent() {
  //  return (
  //     <h1>parent</h1>
  //     <Children />
  // );

  // return (
  //   <Fragment>
  //     <h1>parent</h1>
  //     <Children title="hello" subTitle="good bye" />
  //     <AltChildren />
  //   </Fragment>
  // );

  // return (
  //   <Fragment>
  //     <h1>parent</h1>
  //     <Children title="hello" subTitle="good bye">
  //       <h1>This is children</h1>
  //     </Children>
  //   </Fragment>
  // );

  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      {arr.map((a) => (
        <div key={a}>{a}</div>
      ))}
    </div>
  );
}

// # component must return only one node
// # pass props
// # children
