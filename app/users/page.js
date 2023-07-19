import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default async function Users() {

  const users = await getUsers();

  return (
    <>
      <div className="container px-4 pt-5">
        <h1 className="text-center">La liste des utilisateurs</h1>
        <div className="row justify-content-center mt-4">
          {users.map((user) => (
            <div key={uuidv4()} className="col-12 col-lg-6 m-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between">
                  <h5 className="card-title">{user.username}</h5>
                  <Link
                    className="ml-auto card-link"
                    href={`/users/${user.id}`}
                  >
                    Contacter
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

async function getUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return users;
}

// https://jsonplaceholder.typicode.com/users
