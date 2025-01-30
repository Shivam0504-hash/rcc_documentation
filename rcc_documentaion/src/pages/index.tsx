import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function ContributorView({ name, email }: { name: string; email: string }) {
  return (
    <div className={styles.contributor}>
      <h2>Contributor</h2>
      <p><strong>Name:</strong> {name}</p>
      <p>
        <strong>Email:</strong> 
        <a href={`mailto:${email}`} className={styles.emailLink}>
          {email}
        </a>
      </p>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          React Native Reusable Component
        </Heading>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="">
            Let's Start
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <ContributorView name="John Doe" email="john.doe@example.com" />
      <ContributorView name="John Doe" email="john.doe@example.com" />
      <ContributorView name="John Doe" email="john.doe@example.com" />
    </Layout>
  );
}
