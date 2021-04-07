import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallegesContext } from "./ChallengesContexts";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinish: boolean;
    IsActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallegesContext);

    const [time, setTime] = useState(25 * 60);
    const [IsActive, setIsActive] = useState(false);
    const [hasFinish, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);

    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
        setHasFinished(false);
    }

    useEffect(() =>{
        if (IsActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if(IsActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [IsActive, time]);

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinish,
            IsActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )

}