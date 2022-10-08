import CategoriesWidgetStyle from "./CategoriesWidgetStyle";

const CategoriesWidget = ({ header, list }) => {
  console.debug(list);
  return (
    <CategoriesWidgetStyle id="widget">
      <div className="main">
        <h3 className="header">{header}</h3>
        {/* <h3>{list}</h3> */}
        <div className="list">
          {/* {list.map((item) => (
            <div className="cat">
              <p>{item.title}</p>
              <p className="count">{`${item.count} posts`}</p>
            </div>
          ))} */}
          <div className="cat">
            <p>Business</p>
            <p className="count">1200 posts</p>
          </div>
          <div className="cat">
            <p>Event</p>
            <p className="count">800 posts</p>
          </div>
          <div className="cat">
            <p>Design</p>
            <p className="count">80 posts</p>
          </div>
          <div className="cat">
            <p>Finance</p>
            <p className="count">1870 posts</p>
          </div>
          <div className="cat">
            <p>Technology</p>
            <p className="count">180 posts</p>
          </div>
          <div className="cat">
            <p>UI/UX</p>
            <p className="count">9 posts</p>
          </div>
          <div className="cat">
            <p>Web3</p>
            <p className="count">3212 posts</p>
          </div>
        </div>
      </div>
    </CategoriesWidgetStyle>
  );
};

export default CategoriesWidget;
