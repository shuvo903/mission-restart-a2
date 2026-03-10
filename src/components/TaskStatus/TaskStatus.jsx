import React from 'react';
import ClickedCard from '../ClickedCard/ClickedCard';

const TaskStatus = ({ inProgress, setInProgress, resolved, setResolved, clickedTickets, setClickedTickets, taskComplete }) => {




    return (
        <div>
            {
                clickedTickets.length === 0 ? (<p className='text-xl font-medium text-stone-500'>Select a ticket to add to Task Status</p>) :

                   ( clickedTickets.map(ticketStatus => <ClickedCard key={ticketStatus.id} inProgress={inProgress} setInProgress={setInProgress} resolved={resolved} setResolved={setResolved} taskComplete={taskComplete} ticketStatus={ticketStatus} clickedTickets={clickedTickets} setClickedTickets={setClickedTickets}></ClickedCard>))
            }

        </div>
    );
};

export default TaskStatus;