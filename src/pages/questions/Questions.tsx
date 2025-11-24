import { Box, Stack } from "@mui/material";
import QuestionsTable from "components/QuestionsTable/QuestionsTable";
import FilterForm from "components/FilterForm/FilterForm";

const Questions = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Stack direction={"row"} columnGap={2} sx={{ padding: 2 }}>
        <Box width="15%">
          <FilterForm />
        </Box>
        <Box width="85%">
          <QuestionsTable />
        </Box>
      </Stack>
    </Box>
  );
};

export default Questions;
