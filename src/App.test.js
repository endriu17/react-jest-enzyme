import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import PlayersList from "./components/PlayersList/PlayersList";
import AddPlayer from "./components/AddPlayer/AddPlayer";

it("renders without crashing", () => {
  shallow(<App />);
});

it("should update player score", () => {
  const appComponent = shallow(<App />);

  const players = [
    {
      name: "John Johnes",
      score: 3
    },
    {
      name: "James Bond",
      score: 0
    }
  ];
  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop("onScoreUpdate");

  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state().players;
  playersAfterUpdate[0].score;

  expect(playersAfterUpdate[0].score).toEqual(8);
});

it("should add new player properly", () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop("onPlayerAdd");
  onPlayerAdd("Ania");

  const players = appComponent.state("players");

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual("Ania");
  expect(players[0].score).toEqual(0);
});

it("should remove a player when remove button is clicked", () => {
  const appComponent = mount(<App />);

  const players = [
    {
      name: "Ania",
      score: 5
    },
    {
      name: "Robert",
      score: 0
    }
  ];
  appComponent.setState({ players });

  const removeButton = appComponent.find(".Player__button_remove").at(0);
  removeButton.simulate("click");

  const playersAfterUpdate = appComponent.state("players");

  expect(playersAfterUpdate.length).toEqual(players.length - 1);
});
