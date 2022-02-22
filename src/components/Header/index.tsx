import info from './data';
import styles from '../../Resume.module.css'

export const Header  = ()=>{
	return <header class={styles.header}>
	<h1>{info.name}</h1>
	<h3>{info.title}</h3>
</header>
}
