import { createElement, FC } from "react";

// export enum componentEnum {
//   H1,
//   H2,
//   P,
// }
// interface ITitleProps {
//   title: string;
//   component?: componentEnum;
// }

interface ITitleProps {
  title: string;
  component?: "h1" | "h2" | "p";
}

const Title: FC<ITitleProps> = (props) => {
  //   const { title, component } = props;
  //   switch (component) {
  //     case componentEnum.H1:
  //       return <h1>{title}</h1>;
  //     case componentEnum.H2:
  //       return <h2>{title}</h2>;
  //     case componentEnum.P:
  //       return <p>{title}</p>;
  //     default:
  //       return <div>{title}</div>;
  //   }
  const { title, component = "div" } = props;

  return createElement(component, {}, title)
};

export default Title;
