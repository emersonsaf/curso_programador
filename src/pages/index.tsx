import React from 'react';

import Head from 'next/head';
import styles from '../styles/home.module.scss';

import Image from 'next/image';

import techsImage from '../../public/images/techs.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title> Tech Blog </title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você para o próximo nível</h1>
            <span>Uma plataforma com cursos que vão do zero até o profissional na tech Next.</span>
            <div>
              <a>
                <button>
                  COMEÇAR AGORA!
                </button>
              </a>
            </div>
          </section>
          <img
            src="/images/banner-conteudos.png"
            alt="Conteudos"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2> Aprenda a criar aplicativos para Android e IOS.</h2>
            <span>Você vai descobrir bla bla bla, bla bla bla e bla bla bla para Android e IOS</span>
          </section>

          <img src="/images/financasApp.png" alt="Conteudos React Next" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="Conteudos React Next Web" />

          <section>
            <h2> Aprenda a criar sistemas web.</h2>
            <span>Você vai descobrir bla bla bla, bla bla bla e bla bla bla com React e NextJs</span>
          </section>
        </div>


        <div className={styles.nextLevelContent}>
          <Image src={techsImage} alt="Tecnologias" />
          <h2>Mais de <span className={styles.alunos}>15 mil</span> já levaram sua carreira ao próximo nível.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a href='#'>
            <button>
              ACESSAR TURMA
            </button>
          </a>
        </div>

      </main>
    </>
  )
}
