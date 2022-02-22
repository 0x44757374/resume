import { Component } from 'solid-js';
import styles from './Resume.module.css';
import {Experience, Interests, Contact, Skills, Education, Profile, Header } from './components';

const Resume: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
			<div class={styles.body}>
				<div class={styles.right}>
					<Profile />
					<Experience />
				</div>
				<div class={styles.left}>
					<Contact />
					<Skills />
					<Education />
					<Interests />
				</div>
			</div>
    </div>
  );
};

export default Resume;
