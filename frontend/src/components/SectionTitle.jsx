
const SectionTitle = ({title, titleHighlight, text}) => {
  return (
    <div className="section-title">
      <h3>{title} <span>{titleHighlight}</span></h3>
      <p>{text}</p>
    </div>
  );
};

export default SectionTitle;