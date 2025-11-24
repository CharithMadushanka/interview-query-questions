import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useQuestions } from "../../contexts/QuestionsContext";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const FilterForm = () => {
  const {
    difficultyOptions,
    typeOptions,
    companyOptions,
    filterQuestions,
    resetFilters,
  } = useQuestions();

  const [difficulty, setDifficulty] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const handleReset = () => {
    setDifficulty("");
    setType("");
    setCompany("");
    resetFilters();
  };

  const handleClearSearch = () => {
    setSearchValue("");
    filterQuestions("", difficulty, type, company);
  };

  return (
    <Stack sx={{ padding: 2 }} rowGap={3}>
      <Box>
        <Typography variant="body1" fontWeight={700} mb={2}>
          Search
        </Typography>
        <TextField
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            filterQuestions(e.target.value, difficulty, type, company);
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: searchValue && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClearSearch}
                    edge="end"
                    size="small"
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Box>
        <Typography variant="body1" fontWeight={700} mb={2}>
          Filter
        </Typography>

        <Stack rowGap={4} mb={6}>
          <TextField
            select
            label="Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
              },
            }}
          >
            {difficultyOptions.map((difficulty) => (
              <MenuItem key={difficulty} value={difficulty}>
                {difficulty}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
              },
            }}
          >
            {typeOptions.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
              },
            }}
          >
            {companyOptions.map((company) => (
              <MenuItem key={company} value={company}>
                {company}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <Stack direction="row" columnGap={1} justifyContent="flex-end">
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={() =>
              filterQuestions(searchValue, difficulty, type, company)
            }
            disabled={!difficulty && !type && !company}
          >
            Apply
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FilterForm;
