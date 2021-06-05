import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./PopularityChartControl.css";
import { championsListByCost } from "../../data/championsList";
import { playersList } from "../../data/playersList";
import { regionsList } from "../../data/regionsList";

const PopularityChartControl = ({
  compareType,
  compareTypeChangeEvent,
  regions,
  regionsChangeEvent,
  players,
  playersChangeEvent,
  champions,
  championsChangeEvent,
  championsCost,
  championsCostChangeEvent,
}) => {
  const isChampion = compareType === "champions";
  const isRegions = compareType === "regions";
  return (
    <div clasname="container">
      <FormControl component="fieldset">
        <FormLabel>Choose comparing type</FormLabel>
        <RadioGroup
          name="compare-type"
          value={compareType}
          onChange={compareTypeChangeEvent}
        >
          <FormControlLabel
            value="champions"
            control={<Radio />}
            label="Compare champions"
          />
          <FormControlLabel
            value="regions"
            control={<Radio />}
            label="Compare regions"
          />
          <FormControlLabel
            value="players"
            control={<Radio />}
            label="Compare players"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <InputLabel id="regions-label">Regions</InputLabel>
        <Select
          labelId="regions-label"
          id="regions"
          multiple
          value={regions}
          input={<Input />}
          onChange={regionsChangeEvent}
        >
          {regionsList.map((regionName) => (
            <MenuItem key={regionName} value={regionName}>
              {regionName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {!isRegions && (
        <FormControl>
          <InputLabel id="players-label">Players</InputLabel>
          <Select
            labelId="players-label"
            id="players"
            multiple
            value={players}
            input={<Input />}
            onChange={playersChangeEvent}
          >
            {regions.map((region) =>
              playersList[region].map((playerName) => (
                <MenuItem key={playerName} value={playerName}>
                  {playerName}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      )}

      <FormControl>
        <InputLabel id="champions-cost-label">Champions Cost</InputLabel>
        <Select
          labelId="champions-cost-label"
          id="champions-cost"
          multiple
          value={championsCost}
          input={<Input />}
          onChange={championsCostChangeEvent}
        >
          {[1, 2, 3, 4, 5].map((cost) => (
            <MenuItem key={cost} value={cost}>
              {cost}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {isChampion ? (
        <FormControl>
          <InputLabel id="champions-label">Champions</InputLabel>
          <Select
            labelId="champions-label"
            id="champions"
            multiple
            value={champions}
            input={<Input />}
            onChange={championsChangeEvent}
          >
            {championsCost.map((cost) =>
              championsListByCost[cost].map((championName) => (
                <MenuItem key={championName} value={championName}>
                  {championName}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      ) : (
        <FormControl>
          <InputLabel id="champions-label">Champions</InputLabel>
          <Select
            labelId="champions-label"
            id="champions"
            value={champions}
            input={<Input />}
            onChange={championsChangeEvent}
          >
            {championsCost.map((cost) =>
              championsListByCost[cost].map((championName) => (
                <MenuItem key={championName} value={championName}>
                  {championName}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default PopularityChartControl;
