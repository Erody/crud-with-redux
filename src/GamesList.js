import React from 'react';

export default function GamesList({games}) {
	const emptyMessage = (
		<p>There are no games in your collection.</p>
	);
	const gamesList = (
		<p>some games</p>
	);
	return (
		<div>
			{games.length === 0 ? emptyMessage : gamesList}
		</div>
	)
}

GamesList.propTypes = {
	games: React.PropTypes.array.isRequired,
};