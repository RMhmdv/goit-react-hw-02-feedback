import React from 'react';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ onGoodBtn, onNeutralBtn, onBadBtn }) => (
  <div className={s.wrap}>
    <button className={s.btnGood} onClick={onGoodBtn}>
      Good
    </button>
    <button className={s.btnNeutral} onClick={onNeutralBtn}>
      Neutral
    </button>
    <button className={s.btnBad} onClick={onBadBtn}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
