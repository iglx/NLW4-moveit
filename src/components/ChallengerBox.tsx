import { useContext } from 'react';
import { ChallegesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengerBox.module.css';

export function ChallengerBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallegesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengerBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengerActive}>
                    <header>Ganher {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceedButton}
                            onClick={handChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengerBoxNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
        </div>
    );
}