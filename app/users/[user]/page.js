

export default async function User({ params }) {
  const userId = Number(params.user);
  const users = await getUsers();
  const user = users.filter((user) => user.id === userId)

  // console.log( 'userId: ', userId );
  // console.log( 'users: ', users );await getUsers()
  // console.log( 'user: ', user );

  
  return (
    <>
      <div className="container px-4 pt-3">
        <h1 className="text-center mb-4">
          {`Nom d'utilisateur : ${user[0].username}`}
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-6">
            <div className="card p-2">
              <div className="card-body">
                <h4 className="card-title">{user[0].name}</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Username: {user[0].username}
                  </li>
                  <li className="list-group-item">Email: {user[0].email}</li>
                  <li className="list-group-item">
                    Site web: {user[0].website}
                  </li>
                  <li className="list-group-item">
                    Téléphone: {user[0].phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const paths = users.map((user) => (
     { user: user.id.toString() }
    /* user correspond au nom du dossier dynamique [user] */
  ));

  return paths;
}

async function getUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return users;
}

// https://jsonplaceholder.typicode.com/users