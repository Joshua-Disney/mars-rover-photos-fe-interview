import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Manifest from "../../components/manifest";
import axios from "axios";
const RoverDetail = () => {
  const router = useRouter();
  const [viewManifest, setViewManifest] = useState(false);
  const [manifestData, setManifestData] = useState({});
  const { roverId } = router.query;
  useEffect(() => {
    if (viewManifest && roverId) {
      axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverId}?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
        )
        .then((res) => {
          setManifestData(res.data.photo_manifest);
          console.log(manifestData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [viewManifest, roverId]);

  const handleToggle = () => {
    setViewManifest(!viewManifest);
  };
  return (
    <section className="flex flex-col flex-grow">
      <div className="flex flex-row mt-5 ml-4 w-full justify-around  mb-10">
        <img
          className="h-48 w-48 flex-shrink-0 flex-start rounded-full"
          src={`/images/${roverId}.jpg`}
        />
        <h1 className="ml-12 self-center text-3xl text-gray-600 uppercase">
          {roverId} Rover
        </h1>
        <button
          className="self-center hover:bg-indigo-100 hover:text-indigo-800 hover:font-bold hover:border-2 hover:border-indigo-800 hover:border-opacity-100 hover:border-solid mr-10 ml-10 bg-indigo-800 text-white  h-16 w-30 p-2 rounded-md"
          onClick={handleToggle}
        >
          {viewManifest ? "Hide" : "Show"} Manifest
        </button>
      </div>
      <div>
        <Manifest
          roverName={roverId}
          display={viewManifest}
          manifestData={manifestData}
        />
      </div>
    </section>
  );
};

export default RoverDetail;
