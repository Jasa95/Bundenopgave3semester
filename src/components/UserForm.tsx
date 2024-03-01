import { BaseProps } from "../types";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    //Read form inputs and submit the form to the parent 
    const inputrefname = useRef<HTMLInputElement>(null);
    const inputrefemail = useRef<HTMLInputElement>(null);
    const inputrefisActive = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
        const newUser: User = {
            name: inputrefname.current?.value || "",
            email: inputrefemail.current?.value || "",
            isActive: inputrefisActive.current?.checked || false,
        };
    

        onSubmitUser(newUser);
    };
    

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name: <input name="name" ref={inputrefname}/>
        Email: <input name="email" ref={inputrefemail}/>
        Active: <input type="checkbox" name="isActive" ref={inputrefisActive} />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
