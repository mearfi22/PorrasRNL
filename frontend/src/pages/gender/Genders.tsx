import GendersTable from "../../components/tables/GendersTable";
import MainLayout from "../layout/MainLayout";

const Genders = () => {
  const content = <GendersTable />;

  return <MainLayout content={content} />;
};

export default Genders;
