

const FeaturedJob = ({job}) => {
    const {logo} = job;
    return (
        <div>
            <img src={logo} alt="" className="w-36 h-10" />
        </div>
    );
};

export default FeaturedJob;