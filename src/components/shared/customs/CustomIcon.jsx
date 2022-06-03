const CustomIcon = ({ faIcon, ...rest }) => {
  const { width, height, svgPathData } = faIcon;
  return (
    <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="1em" height="1em" fill="currentColor">
      <path d={svgPathData}></path>
    </svg>
  );
};

export default CustomIcon;