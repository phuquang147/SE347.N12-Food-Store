import SubscribeEmail from "./SubscribeEmail";

const FooterNewsletter = () => {
  return (
    <div className="footer-widget mb-30 ml-70">
      <div className="footer-title">
        <h3>ĐĂNG KÝ</h3>
      </div>
      <div className="subscribe-style">
        <p>Đăng ký để nhận những ưu đãi mới nhất</p>
        <SubscribeEmail />
      </div>
    </div>
  );
};

export default FooterNewsletter;
