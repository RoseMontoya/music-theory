import { useState } from "react";
import { isEmpty, join, keys as keysLD } from 'lodash';
import { keyConfig, type keys, type Key } from "./consts/keys";
import "./keyOfTheWeek.css";

export const KeyOfTheWeek = () => {
  const [selectedKey, setSelectedKey] = useState<Key | null>(null);
  const getKey = () => {
    const availableKeys = keysLD(keyConfig);

    const randomKey = availableKeys[
      Math.floor(Math.random() * availableKeys.length)
    ] as keys;

    setSelectedKey(keyConfig[randomKey]);
  };

  const hasSelectedKey = !isEmpty(selectedKey);
  console.log(selectedKey)

  return (
    <div className="key-container">
      <h1>Key of the Week: {selectedKey?.title}</h1>
      <div className="ah">
        {
          hasSelectedKey && (
            <div className="key-info">
              <h2>Key Info</h2>
              <div className="info-row"><h3>Notes:</h3> {join(selectedKey.notes, ', ')}</div>
              <div className="info-row"><h3>Number of Flats:</h3> {selectedKey.flatsCount}</div>
              <div className="info-row"><h3>Number of Sharps:</h3> {selectedKey.sharpsCount}</div>
              <div className="info-row"><h3>AKA:</h3> {keyConfig[selectedKey.aka].title}</div>
            </div>
          )
        }
      <button type="button" onClick={getKey} className="button">
        Get Random Key
      </button>
      </div>
    </div>
  );
};
