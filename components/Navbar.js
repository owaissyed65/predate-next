import Link from 'next/link'
import styles from '/styles/Home.module.css'

const Navbar = () => {
    return (
        <nav className={`${styles.container} ${styles.nav}`}>
            <div className={styles.webTitle}><a href="">PredBlog</a></div>
            <ul>
                <li><Link href="/"> Home</Link></li>
                <li><Link href="/about"> About</Link></li>
                <li><Link href="/blog"> Blog</Link></li>
                <li><Link href="/contact"> Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
