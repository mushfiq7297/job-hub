const FeaturedJob = ({ job }) => {
  const { logo,job_title, company_name, location,remote_or_onsite, job_type, salary  } = job;
  return (
    <div className=" bg-base-100 shadow-xl p-10">
      <figure className="">
        <img
          src={logo}
          alt="Shoes"
          className="w-36 h-10"
        />
      </figure>
      <div className="my-4">
        <h2 className="card-title">
         {job_title}
        </h2>
        <p>{company_name}</p>
        <div className="flex gap-2 my-4">
        <button className="border-2 border-purple-600 rounded-lg p-3">{remote_or_onsite}</button>
        <button className="border-2 border-purple-600 rounded-lg p-3">{job_type}</button>
        </div>
        <div className="flex gap-2">
            <p className="flex"><img src="/career-hub/assets/icons/location2.png" alt="" />{location}</p>
            <p className="flex"><img src="/career-hub/assets/icons/money.png" alt="" />{salary}</p>
        </div>
        <div className="card-actions justify-start my-4">
        <button className="btn btn-primary">View details</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
