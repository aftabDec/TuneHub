const Carousal = () => {
  return (
    <>
      {" "}
      <div className="navbar  bg-[#04030c] rounded-3xl">
        <div className="navbar-start">
          <div className="avatar mx-3 online placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
              <span className="text-xl ">A</span>
            </div>
          </div>
        </div>

        <div className="navbar-end"></div>
        <label className="input bg-[#04030c] rounded-2xl input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow input-bordered input-primary"
            placeholder="Search"
          />
          <button className="btn btn-ghost btn-circle">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </label>
      </div>
    </>
  );
};

export default Carousal;
//
