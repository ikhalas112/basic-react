import { ReactNode, Fragment } from "react";

type props = {
  title: string;
  subTitle: string;
  children?: ReactNode;
};

export default function Children(props: props) {
  console.log(props);
  return (
    <div>
      {props.title} | {props.subTitle}
      <br />
      {!!props.children && props.children}
    </div>
  );
}

export const AltChildren = () => {
  return (
    <Fragment>
      <div></div>
      <div>AltChildren</div>
    </Fragment>
  );
};
