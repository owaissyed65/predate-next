import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Blog from '@/components/Blog'



export default function Home() {
  const value = [
    {
      title: 'How to learn Javascript',
      desc: 'Javascript is the way to design and build frontend logics to the client which can be seen interactive'
    },
    {
      title: 'How to learn Javascript',
      desc: 'Javascript is the way to design and build frontend logics to the client which can be seen interactive'
    },
    {
      title: 'How to learn Javascript',
      desc: 'Javascript is the way to design and build frontend logics to the client which can be seen interactive'
    },
    {
      title: 'How to learn Javascript',
      desc: 'Javascript is the way to design and build frontend logics to the client which can be seen interactive'
    }
  ]
  return (
    <>
      <Head>
        <title>Code Predator</title>
        <meta name="description" content="A blog website for future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <style jsx>
        {`
          // .span{
          //   color: red;
          // }
        `}
      </style>
      <main className={`${styles.container}`}>
        <div className={styles.blogContainer}>
          <h1>Blogs for Code Predators</h1>
          <p>A Blog for code Predator who predates a code</p>
          <div className={styles.imageWrap}>
            <img src='/coder.jpg' className={styles.img} />
          </div>
          <div className={styles.blogs}>
            <h1 style={{ fontSize: '2.2rem' }}>Popular Blogs</h1>
            {
              value.map((curEle, index) => {
                return <Blog curEle={curEle} index={index}  key={index}/>
              })
            }
          </div>
        </div>
      </main>
    </>
  )
}
