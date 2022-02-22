import { For } from 'solid-js';
import {Icon} from '../Icons';
import contactInfo from './data';
import styles from '../../Resume.module.css'

export const Contact = ()=>{
	return <div class={styles.section}>
		<h3>CONTACT</h3>
		<For each={contactInfo}>
			{({link, icon, text})=>
				<a href={link} class={styles.row} target="_blank">
					<Icon name={icon} />
					<div>{text}</div>
				</a>}
		</For>
	</div>
}