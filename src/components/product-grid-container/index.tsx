import "./product-grid-container.css";
export const ProductsGridContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="grid-container col-12">{children}</div>;
};
