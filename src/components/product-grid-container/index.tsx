import "./product-grid-container.css";
export const ProductsGridContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="grid-container justify-content-center justify-content-md-start col-12">
      {children}
    </div>
  );
};
