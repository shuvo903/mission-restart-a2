import React, { useState } from 'react';
import calendarImg from "../../assets/calendar.png";
const TicketsCards = ({ inProgress, setInProgress, ticket, clickedTickets, setClickedTickets, taskComplete, ticketStatus }) => {

    const [isClicked, setIsClicked] = useState(true)

    const handleClickedTicket = (ticketData) => {

        setIsClicked(false)


        //     taskComplete(
        // clickedTickets
        //     )

        setInProgress(inProgress + 1)

        setClickedTickets([...clickedTickets, ticketData])


    }

    return (
        <div>

            <div disabled={isClicked} onClick={() => {
                handleClickedTicket(ticket)
            }} className={`bg-white rounded-md p-4 drop-shadow-xl  hover:shadow-xl ${isClicked === true ? "cursor-pointer" : "pointer-events-none opacity-70"}`} >

                <div className="flex items-center justify-between">
                    <h3 className='text-xl font-medium '>{ticket.title}</h3>
                    <div className="items-center text-center">

                        <div className={`badge text-base rounded-4xl font-semibold py-4 whitespace-nowrap ${isClicked === true ? "bg-[#B9F8CF] text-green-800" : "text-orange-800 bg-[#F8F3B9]"}`}>
                            <div className={`w-3.5 h-3.5 rounded-full ${isClicked === true ? " bg-green-600" : "bg-orange-300"}`}>

                            </div>
                            <span>{`${isClicked === true ? `${ticket.status}` : "In- Progress"}`}</span>
                        </div>
                    </div>
                </div>
                <p className='text-base font-normal text-stone-500 mb-4 mt-4  line-clamp-2'>{ticket.description}</p>

                <div className="flex flex-wrap mx-auto items-center justify-between w-full">
                    <div className='flex justify-between gap-4'>
                        <p className='text-stone-500'>#{ticket.id}</p>

                        <p className={`font-normal  
                        ${ticket.priority === "HIGH" ? "text-red-500" :
                                ticket.priority === "MEDIUM" ? "text-orange-300" : "text-green-500"
                            }`}>
                            {ticket.priority} PRIORITY
                        </p>

                    </div>
                    <div className='text-stone-500 flex gap-4'>
                        <p>{ticket.customer}</p>
                        <div className="flex gap-2">
                            <img src={calendarImg} alt="" />
                            <p>{ticket.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketsCards;