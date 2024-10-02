import { Placeholder } from "react-bootstrap";

export const PaginationSkeleton = () => {
  return (
    <Placeholder
      animation="wave"
      style={{
        width: "16rem",
        height: "2.5rem",
        borderRadius: "3px",
        background: "#d1d5db",
      }}
    />
  );
};
