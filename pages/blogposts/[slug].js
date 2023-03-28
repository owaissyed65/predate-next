import { useRouter } from "next/router"
import styles from '@/styles/Slug.module.css'
import useFetch from "@/hook/useFetch"
const slug = () => {
  const router = useRouter()
  const { slug } = router.query;
  const { blog } = useFetch('http://localhost:3000/api/blog?slug=' + slug)
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{blog?.Title}</h1>
        <hr className={styles.hr} />
        <p className={styles.para} dangerouslySetInnerHTML={{__html:blog?.Content}}></p>
        {blog.author && <p className={styles.author}><span>Author</span>:{blog?.author}</p>}
      </div>
    </>
  )
}

export default slug
