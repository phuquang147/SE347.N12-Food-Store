import { Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import MetaTags from "react-meta-tags";
import "../assets/scss/_my-account.scss";

const MyAccount = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Tài khoản | Organic Shop</title>
      </MetaTags>

      <div className="pb-80 pt-100">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="ml-auto mr-auto col-lg-9">
              <div>
                <Accordion defaultActiveKey="0">
                  <Card className="single-my-account mb-20">
                    <Card.Header className="panel-heading">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="panel-title">1. Chỉnh sửa thông tin tài khoản</Accordion.Header>
                        <Accordion.Body>
                          <Card.Body>
                            <div className="myaccount-info-wrapper">
                              <div className="account-info-wrapper">
                                <h4>Thông tin tài khoản</h4>
                                <h5>Chi tiết thông tin cá nhân</h5>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Họ</label>
                                    <input type="text" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Tên</label>
                                    <input type="text" />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Email</label>
                                    <input type="email" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Số điện thoại</label>
                                    <input type="text" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Fax</label>
                                    <input type="text" />
                                  </div>
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">Tiếp tục</button>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Card.Header>
                  </Card>
                  <Card className="single-my-account mb-20">
                    <Card.Header className="panel-heading">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className="panel-title">2. Thay đổi mật khẩu</Accordion.Header>
                        <Accordion.Body>
                          <Card.Body>
                            <div className="myaccount-info-wrapper">
                              <div className="account-info-wrapper">
                                <h4>Thay đổi mật khẩu</h4>
                                <h5>Mật khẩu của bạn</h5>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Mật khẩu</label>
                                    <input type="password" />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Xác nhận mật khẩu</label>
                                    <input type="password" />
                                  </div>
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">Tiếp tục</button>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Card.Header>
                  </Card>
                  <Card className="single-my-account mb-20">
                    <Card.Header className="panel-heading">
                      <Accordion.Item eventKey="2">
                        <Accordion.Header className="panel-title">3. Chỉnh sửa danh sách địa chỉ</Accordion.Header>
                        <Accordion.Body>
                          <Card.Body>
                            <div className="myaccount-info-wrapper">
                              <div className="account-info-wrapper">
                                <h4>Danh sách địa chỉ</h4>
                              </div>
                              <div className="entries-wrapper">
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="entries-info text-center">
                                      <p>John Doe</p>
                                      <p>Paul Park </p>
                                      <p>Lorem ipsum dolor set amet</p>
                                      <p>NYC</p>
                                      <p>New York</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="entries-edit-delete text-center">
                                      <button className="edit">Chỉnh sửa</button>
                                      <button>Xóa</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">Tiếp tục</button>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Card.Header>
                  </Card>
                  {/* <Card className="single-my-account mb-20">
                    <Card.Header className="panel-heading">
                      <AccordionButton variant="link" eventKey="1">
                        <h3 className="panel-title">
                          <span>2 .</span> Change your password
                        </h3>
                      </AccordionButton>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>Change Password</h4>
                            <h5>Your Password</h5>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Password</label>
                                <input type="password" />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Password Confirm</label>
                                <input type="password" />
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              <button type="submit">Continue</button>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="single-my-account mb-20">
                    <Card.Header className="panel-heading">
                      <AccordionButton variant="link" eventKey="2">
                        <h3 className="panel-title">
                          <span>3 .</span> Modify your address book entries{" "}
                        </h3>
                      </AccordionButton>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>Address Book Entries</h4>
                          </div>
                          <div className="entries-wrapper">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                <div className="entries-info text-center">
                                  <p>John Doe</p>
                                  <p>Paul Park </p>
                                  <p>Lorem ipsum dolor set amet</p>
                                  <p>NYC</p>
                                  <p>New York</p>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                <div className="entries-edit-delete text-center">
                                  <button className="edit">Edit</button>
                                  <button>Delete</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              <button type="submit">Continue</button>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card> */}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyAccount;
