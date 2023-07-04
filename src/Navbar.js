const userDetails = [
  {
    name: "Suraj Bhat",
    position: "store owner",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="row">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          style={{ padding: "1%", marginLeft: "2%" }}
        >
          <div className="col-md-3">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-3" style={{ textAlign: "right" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
          <div className="col-md-2" style={{ textAlign: "right" }}>
            {userDetails.map((elem) => {
              return (
                <a className="navbar-brand">
                  <h4>  {elem.name}</h4>
                  
                 <p>  <small>{elem.position}</small> </p> 
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
export { userDetails };
