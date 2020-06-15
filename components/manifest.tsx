import React from "react";
/**
 *
 * @param roverName - The name of the Rover
 * @param display - A boolean value indicating whether to display the Manifest
 * component or hide it. A value  of true will render the Manifest. A value of
 * false will hide it.
 *
 */

const RoverManifest = ({ roverName, display, manifestData }) => {
  const {
    name,
    landing_date,
    launch_date,
    status,
    max_sol,
    max_date,
    total_photos,
  } = manifestData;
  return (
    <div>
      {display ? (
        <div>
          <h3>Manifest</h3>
          <p>name: {name}</p>
          <p>landing date: {landing_date}</p>
          <p>{launch_date}</p>
          <p>{status}</p>
          <p>{max_sol}</p>
          <p>{max_date}</p>
          <p>{total_photos}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RoverManifest;
