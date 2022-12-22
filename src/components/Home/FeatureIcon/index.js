import featureIconData from "~/data/feature-icon.json";
import FeatureIconSingle from "./FeatureIconSingle.js";

const FeatureIcon = () => {
  return (
    <div className="support-area pb-90 pt-90">
      <div className="container">
        <div className="row">
          {featureIconData &&
            featureIconData.map((single, key) => {
              return <FeatureIconSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default FeatureIcon;
