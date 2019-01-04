import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
    const playerNamePassed = 'John';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
  
    const playerNameRendered = playerComponent.find('.Player__name').text();
  
    expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
    const playerScorePassed = '0';
    const playerComponent = shallow(<Player score={playerScorePassed} />);
  
    const playerScoreRendered = playerComponent.find('.Player__score').text();
  
    expect(playerScoreRendered).toEqual(playerScorePassed);
});

const mockedOnPlayerScoreChange = jest.fn();
const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

const plusButton = playerComponent.find('.Player__button_plus');

plusButton.simulate('click');

expect(mockedOnPlayerScoreChange).toBeCalledWith(1);

const minusButton = playerComponent.find('.Player__button_minus');

minusButton.simulate('click');

expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);

