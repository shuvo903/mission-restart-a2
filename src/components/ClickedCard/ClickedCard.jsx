import React from 'react';

const clickedCard = ({ clickedTickets, setClickedTickets, inProgress, setInProgress, resolved, setResolved, ticketStatus, taskComplete }) => {


    const handleTaskComplete = () => {

        taskComplete(
            ticketStatus
        )
        setInProgress(inProgress - 1)

        setResolved(resolved + 1)



    }
    return (
        <div>

            <div className="bg-white rounded-md p-4 drop-shadow-xl mb-4">
                <h3 className='text-xl font-medium'>{ticketStatus.title}</h3>
                <button onClick={handleTaskComplete} className='btn w-full bg-green-600 mt-4 text-xl font-bold text-white'>Complete</button>
            </div>
        </div>
    );
};

export default clickedCard;