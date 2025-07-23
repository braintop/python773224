import { useEffect, useState } from "react"

export function UserListLoading() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getUsers() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setInfo(data);
        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setTimeout(getUsers, 5000);

    }, []);

    if (loading) return <p>Memo....</p>;
    // const mapInfo = info.map((userInfo) => (
    //     <li key={userInfo.id}>
    //         <p>🧑 Name: {userInfo.name}</p>
    //         <p>📧 Email: {userInfo.email}</p>
    //         <p>🏠 Street: {userInfo.address.street}</p>
    //         <p>🏙️ City: {userInfo.address.city}</p>
    //         <hr />
    //     </li>
    // ));

    return (
        <>
            <h2>📋 משתמשים</h2>
            <ul>
                {info.map((userInfo, index) => (
                    <li key={index}>
                        <p>🧑 Name: {userInfo.name}</p>
                        <p>📧 Email: {userInfo.email}</p>
                        <p>🏠 Street: {userInfo.address.street}</p>
                        <p>🏙️ City: {userInfo.address.city}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
}
