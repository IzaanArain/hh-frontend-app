import {useState} from "react";

const JobPostForm = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="start_time">Start Time : </label>
          <input type="datetime-local" name="start_time" id="start_time" value={startTime} onChange={(e)=>setStartTime(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="end_time">Start Time : </label>
          <input type="datetime-local" name="end_time" id="end_time" value={endTime} onChange={(e)=>setEndTime(e.target.value)}/>
        </div>
      </form>

      <h1>start time : {startTime}</h1>
      <h1>end time : {endTime}</h1>
    </>
  );
};

export default JobPostForm;
