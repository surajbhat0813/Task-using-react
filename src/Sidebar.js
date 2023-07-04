import { userDetails } from "./Navbar";

const sideBarelem = [
  {
    name: "Dashboard",
    icon: "fa-table-columns",
  },
  {
    name: "Orders",
    icon: "fa-bag-shopping",
  },
  {
    name: "Products",
    icon: "fa-gift",
  },

  {
    name: "Report",
    icon: "fa-flag",
  },
  {
    name: "Messages",
    icon: "fa-message",
  },
  {
    name: "Help center",
    icon: "fa-question",
  },
];
const Sidebar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span style={{ textAlign: "center" }}>
              <svg className="bi pe-none" width="40" height="32"></svg>
              <h4>Easy shop</h4>
              <h6>market place storefront</h6>
            </span>
          </a>
          <hr />
          <div>
            <ul className="nav nav-pills flex-column">
              {sideBarelem.map((elem) => {
                return (
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className={`fa-thin ${elem.icon}`}></i>
                      <span style={{ padding: "2%" }}> {elem.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr />
          <div style={{ position: "fixed", bottom: "3%" ,backgroundColor:"white",}}>
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <strong>
                  {userDetails.map((elem) => {
                    return elem.name;
                  })}
                </strong>
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
