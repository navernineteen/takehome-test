import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Index = ({ type, onClick, className }) => {
  return (
    <div className={`mx-3 ${className}`} onClick={onClick}>
      {type === "down" ? (
        <>
          <ArrowDownwardIcon fontSize="small" />
        </>
      ) : (
        <>
          <ArrowUpwardIcon fontSize="small" />
        </>
      )}
    </div>
  );
};

export default Index;
