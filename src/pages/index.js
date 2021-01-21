import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "T-heethawat is ",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Who is Theethawat, Where is he from? Why you must look at him or
        Somethings you want to know him.
        <br />
        <br /> ใครคือธีร์ธวัช เขามาจากไหน ทำไมเราต้องมองเขา และ สิ่งต่าง ๆ
        ที่คุณอยากรู้เกี่ยวกับเขา
      </>
    ),
  },
  {
    title: "I-dentity of",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        What's his identity, his working style, his interesting and what he has
        done.
        <br />
        <br />
        อะไรคืออัตลักษณ์ของธีร์ธวัช เขาทำงานเป็นอย่างไร สนใจอะไร
        และอะไรที่เขาได้ทำผ่านมาบ้าง
      </>
    ),
  },
  {
    title: "N-ext Inspiration",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Next Inspiration of Theethawat, on technology, education, culture
        program, etc. <br />
        <br />
        แรงบันดาลใจใหม่ของเขาทั้งในด้านเทคโนโลยี การศึกษา สังคม วัฒนธรรม
        และอื่นๆ
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Biography
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
