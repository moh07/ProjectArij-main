import './Board.css'

const Board = ({img, category}) => {
    return (
        <div>
            {/* <a href="#" className="BoardLink"> */}
                <div className="card board btn">
                <div className="card-body board-text" >
                    <h5 className="card-title board-text-title" >{category}</h5>
                </div>
                <img src={img} className="card-img-top board-img"/>
                </div>
            {/* className="card board btn" */}
        </div>
    )
}

export default Board
