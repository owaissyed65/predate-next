// import { useRouter } from "next/router"
import styles from '@/styles/Slug.module.css'
// import useFetch from "@/hook/useFetch"
import * as fs from 'fs'
const slug = ({ blog }) => {
  console.log(blog);
  // const { blog } = useFetch('http://localhost:3000/api/blog?slug=' + slug)
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{blog?.Title}</h1>
        <hr className={styles.hr} />
        <p className={styles.para} dangerouslySetInnerHTML={{ __html: blog?.Content }}></p>
        {blog?.author && <p className={styles.author}><span>Author</span>:{blog?.author}</p>}
      </div>
    </>
  )
}

export default slug
export async function getStaticPaths() {

  let fileName = await fs.promises.readdir('blogdata', 'utf-8');
  const value = () => {
    const newvalue = fileName.map(element => {
      return {
        params: { slug: element }
      }
    });
    return newvalue;
  }
  // console.log(value())
  return {
    paths: [...value()],
    fallback: true
  }
}
export async function getStaticProps(context) {
  console.log(context.params);
  const { slug } = context.params
  let blog = await fs.promises.readFile(`blogdata/${slug}`, 'utf-8');
  return {
    props: { blog: JSON.parse(blog) }
  }
}
