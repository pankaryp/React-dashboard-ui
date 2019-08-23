import React from 'react';
import MainOverviewCardIcon from './MainOverviewCardIcon';
import MainOverviewCardInfo from './MainOverviewCardInfo';
import styled from 'styled-components';

export default function(props) {

    const MainOverviewCard = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        background-color: #172B4D;
        border-radius: 10px;
    `

    return (
        <MainOverviewCard>
              <p>{props.weight} kg</p>
              <MainOverviewCardInfo />
        </MainOverviewCard>
    )
}
