/* const addToDb = (id) => {
    const savedBoard = getDb();
    if (id in savedBoard) {
        savedBoard[id] += 1;
    }
    else {
        savedBoard[id] = 1;
    }
    updateDb(savedBoard)
};

const updateDb = (board) => {
    localStorage.setItem('setting_board', JSON.stringify(board));
};

// Incomplete for not have enough funtionality as e-commerce

// const removeFromDb = (id) => {
//     const existingBoard = getDb();
//     existingBoard.deleteItem(id);
//     updateDb(existingBoard)
// };

const getDb = () => {
    const exist = localStorage.getItem('setting_board');
    return exist ? JSON.parse(exist) : {};
};

export { addToDb, }
 */