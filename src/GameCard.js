import React from 'react';

class GameCard extends React.Component {
	render() {
		const { game } = this.props;
		return (
			<div className="ui card">
				<div className="image">
					<img src={game.cover} alt="Game Cover"/>
				</div>
				<div className="content">
					<div className="header">{game.title}</div>
				</div>
			</div>
		)
	}
}

GameCard.propTypes = {
	game: React.PropTypes.object.isRequired
};

export default GameCard;