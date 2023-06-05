import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Blog from '@/components/Blog'
import * as fs from 'fs'

// import useFetch from '@/hook/useFetch'



export default function Home({ blog }) {
  return (
    <>
      <Head>
        <title>Code Predator</title>
        <meta name="description" content="A blog website for future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <main className={`${styles.container} ${styles.marbot}`}>
        <div className={styles.blogContainer}>
          <h1>Blogs for Code Predators</h1>
          <p>A Blog for code Predator who predates a code</p>
          <div className={styles.imageWrap}>
            <img src='/coder.jpg' className={styles.img} />
          </div>
          <div className={styles.blogs}>
            <h1 style={{ fontSize: '2.2rem' }}>Popular Blogs</h1>
            {
              blog?.map((curEle) => {
                return <Blog curEle={curEle} key={curEle?.slug} />
              })
            }
          </div>
        </div>
      </main>
    </>
  )
}
export async function getStaticProps() {
  let blog = []
  let fileName = await fs.promises.readdir('blogdata', 'utf-8');
  for (let index = 0; index < fileName.length; index++) {
    const element = fileName[index];
    let newData = await fs.promises.readFile(`blogdata/${element}`, 'utf-8')
    blog.push(JSON.parse(newData))
  }
  return {
    props: { blog }
  }
}