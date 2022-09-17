import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({ count, onChange, color, page }) {
  return (
    <Stack spacing={2} className="align-center m-auto">
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={onChange}
        page={page}
      />
    </Stack>
  );
}
