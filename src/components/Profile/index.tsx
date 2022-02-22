import profile from './data';
import styles from '../../Resume.module.css'

export const Profile = ()=>{
	return <div class={styles.section}> 
		<h3>PROFILE</h3>
		<p>{profile.text}</p>
	</div>
}