import { useEffect, useState } from 'react';
import { store } from '../../store';
import { InformationLayout } from './informationLayout';

const Information = ({state}) => {
    const { currentPlayer, isDraw, isGameEnded } = state;

    return (
        <InformationLayout 
            currentPlayer={currentPlayer}
            isDraw={isDraw}
            isGameEnded={isGameEnded}
        />
    );
};

export default Information;

