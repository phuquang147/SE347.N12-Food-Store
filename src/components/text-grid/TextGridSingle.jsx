const TextGridSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-mission ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <h3>{data.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          nemo? Sint, magni. Nihil, veritatis quia! Consectetur perferendis
          tempora cupiditate autem? Quia dolorum hic beatae, sit nam eius ex
          aspernatur sequi at obcaecati repellat blanditiis qui laborum
          architecto ab facere maxime.
        </p>
      </div>
    </div>
  );
};

export default TextGridSingle;
