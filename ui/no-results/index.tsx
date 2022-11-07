import { ReactElement } from "react";

type NotFoundType = {
  title: string;
};

const NoResults = (props: NotFoundType): ReactElement => {
  const { title } = props;
  return (
    <h2
      style={{
        color: "white",
        fontFamily: "Roboto",
        background: "#222222",
        borderRadius: "1.875rem",
        padding: "10px 30px",
        opacity: 0.8,
      }}
    >
      {title}
    </h2>
  );
};

export default NoResults;
