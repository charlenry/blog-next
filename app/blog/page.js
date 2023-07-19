
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default async function Blog() {
  const articles = await getPosts();

  return (
    <>
      <div className="container px-4 py-5">
        <h1 className="text-center">Bienvenue sur le Blog</h1>
        <p className="text-center fs-4">Voici les articles</p>
        <div className="row g-3 mt-4">
          {articles.map(article => (
            <div key={uuidv4()} className="col-12 col-md-6 col-xl-4">
              <div className={`card h-100 shadow-sm ${styles.hoverShadow}`}>
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text text-truncate">{article.body}</p>
                  <Link href={`/blog/${article.id.toString()}`} className="card-link">Lire cet article</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


async function getPosts() {
  const data = await fetch("https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json");
  const list = await data.json();
  const articles = list.posts;

  return articles;
}



// https://raw.githubusercontent.com/charlenry/jsonfiles/main/blog-app/posts_fr.json


