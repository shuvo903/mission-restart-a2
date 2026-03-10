import React from 'react';
import ClickedCard from '../ClickedCard/ClickedCard';

const TaskStatus = ({clickedTickets,setClickedTickets}) => {

    console.log(clickedTickets);

    

    return (
        <div>
            {
                clickedTickets.map(ticketStatus => <ClickedCard ticketStatus={ticketStatus} clickedTickets={clickedTickets} setClickedTickets={setClickedTickets}></ClickedCard>)
            }
             
        </div>
    );
};

export default TaskStatus;