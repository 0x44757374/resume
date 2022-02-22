import { For} from 'solid-js';
import sections from './data';
import styles from '../../Resume.module.css'

interface Experience {
	title:string;
	company:string;
	location:string;
	dates:string;
	description:string;
	bullets:string[];
	styles:any;
}

const ExperienceSection = ({title, company, location, dates, description, bullets}:Experience) => {
	return 	<div class={styles.experience}>
		<div class={styles.title}><strong>{title}</strong></div>
		<div class={styles.info}>{`${company}  |  ${location}  |  ${dates}`}</div>
		<p>
			{description}
		</p>
		<For each={bullets}>{(text:string)=><li>{text}</li>}</For>
	</div>
}


export const Experience = ()=>{
	return <div class={styles.section}>
		<h3>EXPERIENCE</h3>
		<For each={sections}>{(section)=><ExperienceSection styles={styles}{...section}/>}</For>
	</div>
}