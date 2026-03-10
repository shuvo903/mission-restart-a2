import React, { useState } from 'react';

const ClickedCard = ({ clickedTickets,setClickedTickets, ticketStatus }) => {
    const [complete,serComplete] = useState([])
    const [isClicked, setIsClicked] = useState(true);
    const handleTaskComplete = (completedata) => {
        

        setIsClicked(false)

serComplete([...complete, completedata])

console.log(completedata);

// console.log(isClicked);





        //         console.log(ticketStatus);
        // ticketStatus(
        //     clickedTickets
        // )

    }
    return (
        <div>
            {/* <p className='text-xl font-medium text-stone-500'>Select a ticket to add to Task Status</p> */}

            {
                isClicked === true ? <div className="bg-white rounded-md p-4 drop-shadow-xl mb-4">
                <h3 className='text-xl font-medium'>{ticketStatus.title}</h3>
                <button onClick={handleTaskComplete} className='btn w-full bg-green-600 mt-4 text-xl font-bold text-white'>Complete</button>
            </div> : <div className="">
            </div>
            }

        </div>
    );
};

export default ClickedCard;