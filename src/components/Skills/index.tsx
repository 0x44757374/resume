import {For} from 'solid-js';
import {Icon} from '../Icons';
import skills from './data';
import styles from '../../Resume.module.css'

export const Skills = () => <div class={styles.section}>
	<h3>SKILLS</h3>
	<For each={skills}>
		{({name,icon})=><div class={styles.row}><Icon name={icon} /><div>{name}</div></div>}
	</For>
</div>

