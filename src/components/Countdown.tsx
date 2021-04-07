import { useState, useEffect, useContext } from 'react';
import { ChallegesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { minutes,
            seconds,
            hasFinish,
            IsActive,
            startCountdown,
            resetCountdown
        } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            { hasFinish ? (
                <button
                    disabled
                    className={styles.CountdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { IsActive ? (
                <button
                    type="button"
                    className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                    onClick={resetCountdown}
                >
                    Abandonar ciclo
                </button>
            ) : (
                <button
                    type="button"
                    className={styles.CountdownButton}
                    onClick={startCountdown}
                >
                    Iniciar um ciclo
                </button>
            )}
                </>
            )}

        </div>
    );
}