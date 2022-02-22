import { For } from "solid-js"
import {Icon} from '../Icons';
import interests from './data';
import styles from '../../Resume.module.css'

export const Interests = ()=>{
	return <div class={styles.section}>
		<h3>INTERESTS</h3>
		<For each={interests}>
			{({name,icon})=><div class={styles.row}><Icon name={icon}/><div>{name}</div></div>}
		</For>
	</div>
}
