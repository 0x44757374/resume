import { For } from "solid-js"
import Icon from "../Icons";
import education from './data';
import styles from '../../Resume.module.css'


export const Education = ()=>{
	return <div class={styles.section}>
		<h3>EDUCATION</h3>
		<For each={education}>
			{({icon, title, subtitle, info})=><div class={styles.row}>
				<Icon name={icon} style="align-self:flex-start;" />
				<div style="height:fit-content;">
					<div><strong>{title}</strong></div>
					<div style="font-weight:300;">{subtitle}</div>
					<div>{info}</div>
				</div>
				</div>}
		</For>
	</div>
}