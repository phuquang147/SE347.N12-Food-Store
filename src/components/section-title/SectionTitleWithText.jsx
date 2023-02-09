const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={`${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Giới thiệu</h5>
          <h1>Chào mừng đến với Organic Food</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
            consequat irure
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleWithText;
