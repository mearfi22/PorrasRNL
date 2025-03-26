import AddGenderForm from "../forms/AddGenderForm";
import { Link } from "react-router-dom";

const GendersTable = () => {
  return (
    <div className="container-sm mx-auto">
      <AddGenderForm />
      <div className="mt-5">
        <table className="container table table-hover w-50 mx-auto">
          <thead>
            <tr>
              <th className="text-center">No.</th>
              <th className="text-center">Gender</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">Male</td>
              <td className="text-center">
                <Link
                  to={"/gender/edit"}
                  className="btn btn-primary btn-sm me-1"
                >
                  Edit
                </Link>
                <Link to={"/gender/delete"} className="btn btn-danger btn-sm">
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td className="text-center">Female</td>
              <td className="text-center">
                <Link
                  to={"/gender/edit"}
                  className="btn btn-primary btn-sm me-1"
                >
                  Edit
                </Link>
                <Link to={"/gender/delete"} className="btn btn-danger btn-sm">
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td className="text-center">Others</td>
              <td className="text-center">
                <Link
                  to={"/gender/edit"}
                  className="btn btn-primary btn-sm me-1"
                >
                  Edit
                </Link>
                <Link to={"/gender/delete"} className="btn btn-danger btn-sm">
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GendersTable;
