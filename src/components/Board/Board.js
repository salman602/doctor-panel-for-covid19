import React from 'react';
import './Board.css'

const Board = (props) => {
    const { board } = props || {};
    console.log(board);

    const totalFees = board.reduce((prevTotal, currentFees) => prevTotal + currentFees.fee, 0);

    const hospitalTax = totalFees * 0.1;

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