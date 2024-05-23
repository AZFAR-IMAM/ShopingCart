import { MdStarBorder, MdStar } from "react-icons/md";

function Rating({ rating, style, onClick }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <MdStar fontSize="15px" />
          ) : (
            <MdStarBorder fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
}

export default Rating;
