// pages/404.js
import Link from 'next/link';
import styles from '../../src/app/style/404.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>404</div>
      <h1 className={styles.title}>Oops! Page Not Found</h1>
      <p className={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <p className={styles.homeLink}>Go Back Home</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
