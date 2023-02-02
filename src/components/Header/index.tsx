
import styles from './styles.module.scss';
import Image from 'next/image';

import logo from '../../../public/images/logo.svg';
import Link from 'next/link';

import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <header className={styles.headerContainer} >
      <div className={styles.headerContent}>
        <ActiveLink href='/' activeClassname={styles.active}>
          <a>
            <Image src={logo} alt="Sujeito Programador" />
          </a>
        </ActiveLink>
        <nav>
          <ActiveLink href='/' activeClassname={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href='/posts' activeClassname={styles.active}>
            <a>Conteudo</a>
          </ActiveLink>
          <ActiveLink href='/sobre' activeClassname={styles.active}>
            <a>Quem somos?</a>
          </ActiveLink>
        </nav>

        <a className={styles.readyButton} type="button" href="#">Começar</a>
      </div>
    </header>
  )
}