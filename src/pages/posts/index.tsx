
import Head from 'next/head';
import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import thumbImg from '../../../public/images/thumb.png'

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

export default function Posts() {

	return (
		<>
			<Head>
				<title>Blog tech</title>
			</Head>
			<main className={styles.container}>
				<div className={styles.posts}>
					<Link href="/">
						<Image
							src={thumbImg}
							alt="Post titulo 1"
							width={720}
							height={410}
							quality={100}
						/>
						<strong>Criando meu primeiro aplicativo</strong>
						<time>14 JANEIRO 2023</time>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
					</Link>

					<div className={styles.buttonNavigate}>
						<div>
							<button>
								<FiChevronsLeft size={25} color="#FFF"/>
							</button>
							<button>
								<FiChevronLeft size={25} color="#FFF"/>
							</button>
						</div>
						<div>
							<button>
								<FiChevronRight size={25} color="#FFF"/>
							</button>
							<button>
								<FiChevronsRight size={25} color="#FFF"/>
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}