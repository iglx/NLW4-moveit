import { useContext } from 'react';
import { ChallegesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallegesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="luffy.jpg" alt="Igor Lima" />
            <div>
                <strong>Monkey D. Luffy</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}