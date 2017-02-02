import React from 'react';
import { Link } from 'react-router';

class GameCard extends React.Component {
	render() {
		const { game, deleteGame } = this.props;
		return (
			<div className="ui card">
				<div className="image">
					<img src={game.cover} alt="Game Cover"/>
				</div>
				<div className="content">
					<div className="header">{game.title}</div>
				</div>
				<div className="extra content">
					<div className="ui two buttons">
						<Link to={`/game/${game._id}`} className="ui basic button green">Edit</Link>
						<div onClick={() => deleteGame(game._id)} className="ui basic button red">Delete</div>
					</div>
				</div>
			</div>
		)
	}
}

GameCard.propTypes = {
	game: React.PropTypes.object.isRequired,
	deleteGame: React.PropTypes.func.isRequired,
};

export default GameCard;