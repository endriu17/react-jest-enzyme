import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
    const players = [
        {
          name: 'James Johnes',
          score: 5,
        },
        {
          name: 'James Bond',
          score: 0,
        }
      ]
    const playerComponent = shallow(<PlayersList players={players} />);
    console.log(playerComponent.debug());
    const expectedPlayersNumber = playerComponent.find(Player).length;
    expect(expectedPlayersNumber).toEqual(2);
});

it('should call on ScoreUpdate', () => {
    const players = [
        {
          name: 'James Johnes',
          score: 5,
        },
        {
          name: 'James Bond',
          score: 0,
        }
      ]
  
    const mockedOnScoreUpdate = jest.fn();
  
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  
    const firstPlayer = playerComponent.find(Player).first();
    // const secondPlayer = playerComponent.find(Player).last();
  
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  
    onPlayerScoreChange(10);
  
    expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
  });