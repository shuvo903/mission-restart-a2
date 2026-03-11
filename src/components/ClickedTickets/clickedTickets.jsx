import React from 'react';
import TicketsCards from '../TicketsCards/TicketsCards';

const clickedTickets = ({ clickedTickets }) => {


    return (
        <div>
            {
                clickedTickets.map(click => <TicketsCards click={click}></TicketsCards>)
            }
        </div>
    );
};

export default clickedTickets;