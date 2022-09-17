import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Index = ({ sideText, type, onClick }) => {
  return (
    <IconButton size="small" onClick={onClick}>
      {type === "down" ? (
        <>
          <ThumbDownIcon fontSize="small" />
          <span className="ms-2">{sideText}</span>
        </>
      ) : (
        <>
          <ThumbUpIcon fontSize="small" />
          <span className="ms-2">{sideText}</span>
        </>
      )}
    </IconButton>
  );
};

export default Index;
