const FeatureIconSingle = ({ data }) => {
  console.log(process.env.PUBLIC_URL + data.image);

  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="support-wrap support-padding text-center">
        <div className="support-content">
          <img className="animated" src={data.image} alt="" />
          <h5>{data.title}</h5>
          <p>{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureIconSingle;
