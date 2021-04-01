import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentExperience, experienceTONextLevel } = useContext(ChallengesContext);

  const percent = Math.round((currentExperience * 100) / experienceTONextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percent}%` }} />
        
        <span className={styles.currentExperience} style={{ left: `${percent}%` }}>
          { currentExperience }  px
        </span>
      </div>
      <span>{ experienceTONextLevel } xp</span>
    </header>
  );
}