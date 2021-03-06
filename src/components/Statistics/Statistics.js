import React from 'react';
import PropTypes from 'prop-types';
import Notification from './components/Notification/Notification';

import s from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, pozitivePercentage }) => {
    return (
        <>
            {total > 0 && (
            <ul className={s.statList}>
                <li className={s.des}>Good:{good}</li>
                <li className={s.des}>Neutral:{neutral}</li>
                <li className={s.des}>Bad:{bad}</li>
                <li className={s.des}>Total:{total}</li>
                <li className={s.des}>Pozitive feedback:{pozitivePercentage}%</li>
            </ul>
            )}
            {total===0 && <Notification /> }
        </>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    pozitive: PropTypes.number.isRequired,    
}



export default Statistics;