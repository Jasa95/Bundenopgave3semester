import { BaseProps } from "../types";
import { User } from "../data/data";

type Props = BaseProps & {
  users: User[];
};


export default function UserTable({ title, users }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <table className="simple-table">

     <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
        </tr>
     </thead>
     <tbody>   
        {users.map((user) => (
            <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
            </tr>
        ))}
     </tbody>
        </table>
    </>
  );
}