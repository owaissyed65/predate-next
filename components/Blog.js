import React from 'react'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
const Blog = ({ curEle }) => {
  return (
    <>
      <style jsx>
        {`
        .read{
          color:red !important;
        }
      `}
      </style>
      <Link href={`/blogposts/${curEle?.slug}`}>
        <div className={styles?.blogitem} >
          {/* <span className='span'>i m span</span> */}
          <h1>{curEle?.Title}</h1>
          <p>{curEle?.Content?.length > 95 ? `${curEle?.Content?.slice(0, 95)}...` : curEle?.Content?.slice(0, curEle?.Content?.length)}</p>
          {curEle?.Content?.length > 95 && <p className='read'> Read More...</p>}
        </div>
      </Link>
    </>
  )
}

export default Blog
