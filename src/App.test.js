import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';


it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);
  
  const players = [
    {
      name: 'John Johnes',
      score: 3,
    },
    {
      name: 'James Bond',
      score: 0,
    }
  ]
  appComponent.setState({ players });
  
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state().players;
  playersAfterUpdate[0].score

  expect(playersAfterUpdate[0].score).toEqual(8);
});

it('should add new player properly', ()=> {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});