import React, { use } from 'react';
import TicketsCards from '../TicketsCards/TicketsCards';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../ResolvedTask/ResolvedTask';


const MainSection = ({ ticketsPromise, clickedTickets, setClickedTickets }) => {

    const ticketsData = use(ticketsPromise);
    return (
        <div className='bg-gray-200 '>

            <div className="flex lg:flex-row flex-col gap-8 min-h-screen mx-auto max-w-screen-2xl px-3 lg:px-6 pb-20">

                {/* Left-Site */}

                <div className="lg:w-[65%] space-y-4">
                    <h2 className='lg:text-2xl text-lg font-semibold '>Customer Tickets</h2>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">

                        {/* Card */}

                        {
                            ticketsData.map(ticket => <TicketsCards key={ticket.id} clickedTickets={clickedTickets} setClickedTickets={setClickedTickets} ticket={ticket}></TicketsCards>)
                        }

                    </div>
                </div>

                {/* Right-Site */}

                <div className="lg:w-[35%] space-y-4">

                    {/*Task Status Cards */}

                    <h2 className='lg:text-2xl text-lg font-semibold '>Task Status</h2>

                    {/* Card */}

                   <TaskStatus setClickedTickets={setClickedTickets} clickedTickets={clickedTickets}></TaskStatus>

                    {/* Resolved Task Cards */}

                    <div>
                        <h2 className='lg:text-2xl text-lg font-semibold mb-4'>Resolved Task</h2>

                        {/* Card */}
<ResolvedTask></ResolvedTask>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainSection;