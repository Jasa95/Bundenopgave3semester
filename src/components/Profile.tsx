
interface profileProps {
    name: string;
    email: string;
    isActive: boolean;
    singleLine: boolean;

}

export default function Profile({name, email, isActive, singleLine}: profileProps ){
 return(
        <>
        {!singleLine ? (
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{isActive ? "Active" : "Inactive"}</p>
            </div>
        ) : (
            <div>
                <p>{name} - {email} - {isActive ? "Active" : "Inactive"}</p>
            </div>
        )}
        </>
 )
}