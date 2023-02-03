import { GetStaticProps } from 'next';
import React from 'react';

import Head from 'next/head';
import styles from '../styles/home.module.scss';

import Image from 'next/image';

import techsImage from '../../public/images/techs.svg';

import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

import { RichText } from 'prismic-dom';


type Content = {
  title: string,
  titleContent: string,
  linkAction: string,
  mobileTitle: string,
  mobileContent: string,
  mobileBanner: string,
  webTitle: string,
  webContent: string,
  webBanner: string
}
interface ContentProps {
  content: Content
}

export default function Home({ content }: ContentProps) {
  console.log('content', content);
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


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  const { title, sub_title, link_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner
  } = response.results[0].data;

  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,
    mobileTitle: RichText.asText(mobile),
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url
  }
  return {
    props: {
      content
    },
    revalidate: 60 * 2
  }
}
