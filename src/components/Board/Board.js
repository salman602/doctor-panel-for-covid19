import React from 'react';
import './Board.css'

const Board = (props) => {
    // Destructing object
    const { board } = props || {};
    // using reduce method to calculate total fees
    const totalFees = board.reduce((prevTotal, currentFees) => prevTotal + currentFees.fee, 0);
    // Calculate hospital tax (i.e 10 percent of total fees)
    const hospitalTax = totalFees * 0.1;
    // Calculate total cost
    const totalCost = totalFees + hospitalTax;
    return (
        <div className="board-container">
            <h5>Total Members: {board.length}</h5>
            <p>Fees: ${totalFees}</p>
            <p>Hospital Tax: ${hospitalTax}</p>
            <h6>Total Cost: ${totalCost}</h6>
            {
                board.map(member => (
                    <div className="mt-3">
                        <ul>
                            <li>{member.department}: {member.name}</li>
                        </ul>
                    </div>
                ))
            }
        </div>
    );
};

export default Board;