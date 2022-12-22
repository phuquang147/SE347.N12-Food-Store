import TextGridSingle from "../components/text-grid/TextGridSingle.jsx";
import textGridData from "../data/text-grid.json";

const TextGrid = ({ spaceBottomClass }) => {
  return (
    <div className={`${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="container">
        <div className="row">
          {textGridData &&
            textGridData.map((single, key) => {
              return (
                <TextGridSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TextGrid;
