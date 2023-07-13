import Link from 'next/link';
import styles from '@/app/styles/floatIcons.module.css'
import { FaFacebook, FaFacebookMessenger, FaGithub } from 'react-icons/fa';

function FloatIcons() {
  return (
    <ul className={styles.icons_ul} >
        <li className={styles.icons_li} ><Link href={'/'}><FaFacebook/></Link></li>
        <li className={styles.icons_li} ><Link href={'/'}><FaGithub/></Link></li>
        <li className={styles.icons_li} ><Link href={'/'}><FaFacebookMessenger/></Link></li>
    </ul>
  )
}

export default FloatIcons