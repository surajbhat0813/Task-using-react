const stats = [
  {
    heading: "Total revenue",
    icon: "fa-thin fa-dollar-sign",
    data: "NGN 600,500",
    points: 37,
  },
  {
    heading: "Total orders",
    icon: "fa-thin fa-shopping-cart",
    data: "2567",
    points: -10,
  },
  {
    heading: "Today's visitors",
    icon: "fa-thin fa-users",
    data: "1459",
    points: 22,
  },
  {
    heading: "Conversion Rate",
    icon: "fa-thin fa-face-smile",
    data: "15%",
    points: -1.5,
  },
];

const IntroComp = () => {
  return (
    <>
      <div className="row">
        {stats.map((elem) => {
          return (
            <div className="col-md-3">
              <div className="tile">
                <div className="top">
                  <div className="icon">
                    <i className={`${elem.icon}`}></i>
                  </div>
                  <div className="data">
                    {elem.heading}
                    <br />
                    {elem.data}
                  </div>
                </div>
                <div className="bottom">
                  {elem.points > 0 ? (
                    <span style={{ color: "green" }}>+{elem.points}% </span>
                  ) : (
                    <span style={{ color: "red" }}>{elem.points}% </span>
                  )}
                  from last month{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IntroComp;
