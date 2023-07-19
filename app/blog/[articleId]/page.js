
export default async function Article({ params }) {
  const articleId = Number(params.articleId);
  const articles = await getPosts();
  const article = articles.filter((article) => article.id === articleId)

  return (
    <>
      <div className="container px-4 pt-5">
        <h1 className="mb-4">{article[0].title}</h1>
        <p className="fs-3">{article[0].body}</p>
        <p className="fs-5">Identifiant utilisateur : {article[0].userId}</p>
      </div>
    </>
  );
};


export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await fetch("https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json");
  const list = await data.json();
  const articles = list.posts;

  const paths = articles.map((article) => (
     { articleId: article.id.toString() }
    /* user correspond au nom du dossier dynamique [articleId] */
  ));

  return paths;
}

async function getPosts() {
  const data = await fetch("https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json");
  const list = await data.json();
  const articles = list.posts;

  return articles;
}


// https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json