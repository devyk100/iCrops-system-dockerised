import { BACKEND_URL } from "../App";

export default function ({ filename }: { filename: string }) {
  return (
    <div>
      {
        <img
          src={BACKEND_URL+"api/v1/data/image/" + filename}
          className="w-72 p-2"
          alt="iCrops app image"
        />
      }
    </div>
  );
}
