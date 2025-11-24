import {
  Box,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Typography,
  Pagination,
  Stack,
} from "@mui/material";
import { useQuestions } from "../../contexts/QuestionsContext";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router";

const QuestionsTable = () => {
  const navigate = useNavigate();
  const {
    paginatedQuestions,
    totalPages,
    currentPage,
    setCurrentPage,
    sortBy,
    sortOrder,
    setSortBy,
    setSortOrder,
  } = useQuestions();

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "30%" }}>
              <Typography variant="body1" fontWeight={700}>
                Title
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                width: "10%",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
              onClick={() => {
                if (sortBy === "difficulty") {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                } else {
                  setSortBy("difficulty");
                  setSortOrder("asc");
                }
              }}
            >
              <Stack direction="row" alignItems="center" columnGap={1}>
                <Typography variant="body1" fontWeight={700}>
                  Difficulty
                </Typography>
                {sortBy === "difficulty" ? (
                  sortOrder === "asc" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )
                ) : null}
              </Stack>
            </TableCell>
            <TableCell sx={{ width: "15%" }}>
              <Typography variant="body1" fontWeight={700}>
                Type
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                width: "10%",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
              onClick={() => {
                if (sortBy === "votes") {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                } else {
                  setSortBy("votes");
                  setSortOrder("asc");
                }
              }}
            >
              <Stack direction="row" alignItems="center" columnGap={1}>
                <Typography variant="body1" fontWeight={700}>
                  Votes
                </Typography>
                {sortBy === "votes" ? (
                  sortOrder === "asc" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )
                ) : null}
              </Stack>
            </TableCell>
            <TableCell sx={{ width: "35%" }}>
              <Typography variant="body1" fontWeight={700}>
                Company
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedQuestions.map((question) => (
            <TableRow
              key={question.qid}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
              onClick={() => {
                navigate(`/questions/${question.qid}`);
              }}
            >
              <TableCell>
                <Typography variant="body2">{question.title}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{question.difficulty}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{question.type}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{question.votes}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{question.companyAsked}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {totalPages > 0 ? (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_event, value) => {
              setCurrentPage(value);
            }}
          />
        </Stack>
      ) : null}
    </Box>
  );
};

export default QuestionsTable;
