import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
  return (
    <div>
      <h2 className="text-center text-5xl">Featured jobs : {jobs.length}</h2>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6">
        {
            jobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
        }
      </div>
      <div className={dataLength === jobs.length && 'hidden'}>
      <button onClick={() =>setDataLength(jobs.length)} className="btn btn-warning">Show all jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
