export default function DoctorStats() {
  return (
    <div className="grid grid-cols-3 w-full mt-8 p-3 justify-around items-center gap-3">
      <div className="bg-base-300 flex-col flex justify-around items-center p-2">
        <h4 className="font-normal text-xs">Patient</h4>
        <h4 className="font-bold text-lg">3.98K</h4>
      </div>
      <div className="bg-base-300 flex flex-col justify-around items-center p-2 ">
        <h4 className="font-normal text-xs">Experience</h4>
        <h4 className="font-bold flex ">
          <span>14</span>
          <span>
            <small>years</small>
          </span>
        </h4>
      </div>
      <div className="bg-base-300 flex-col flex justify-around items-center p-2">
        <h4 className="font-normal text-xs">Review</h4>
        <h4 className="font-bold text-lg">3.98K</h4>
      </div>
    </div>
  );
}
