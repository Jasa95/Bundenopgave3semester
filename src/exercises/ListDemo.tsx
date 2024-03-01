import { BaseProps } from "../types";
import  {users}  from "../data/data";
import UserTable from "../components/UserTable";
type Props = BaseProps;


export default function ListDemo({ title }: Props) {
  return (
    <>
      <h2>{title}</h2>

      {/**After that refactor the table-part into a separate Component and use like this */}
      {<UserTable title={""} users={users} />}
    </>
  );
}
