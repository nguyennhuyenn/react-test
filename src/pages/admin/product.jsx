import { Link } from "react-router-dom";

const ProductPage = ({ products, onRemove }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link
              to="/admin/products/add"
              className="btn btn-sm btn-outline-secondary"
            >
              Thêm
            </Link>
          </div>
        </div>
      </div>

      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh sản phẩm</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        className="btn btn-danger"
                        onClick={() => onRemove(product.id)}
                      >
                        Xóa
                      </button>
                      <Link
                        to={`/admin/products/${product.id}/edit`}
                        className="btn btn-primary ms-3"
                      >
                        Cập nhật
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductPage;
