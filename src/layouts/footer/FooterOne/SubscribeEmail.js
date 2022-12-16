import React from "react";

const SubscribeEmail = () => {
  return (
    <div className="subscribe-form">
      <div className="mc-form">
        <div>
          <input
            id="mc-form-email"
            className="email"
            type="email"
            placeholder="Nhập email của bạn..."
          />
        </div>
        <div className="clear">
          <button className="button">ĐĂNG KÝ</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeEmail;
