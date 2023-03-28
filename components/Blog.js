import React from 'react'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
const Blog = ({curEle,index}) => {
  return (
    <Link href={`/blogposts/${index}`}>
                    <div className={styles.blogitem} >
                      {/* <span className='span'>i m span</span> */}
                      <h1>{curEle.title}</h1>
                      <p>{curEle.desc.length > 95 ? `${curEle.desc.slice(0, 95)}...` : curEle.desc.slice(0, curEle.desc.length)}</p>
                    </div>
                  </Link>
  )
}

export default Blog
