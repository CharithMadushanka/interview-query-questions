import { Box, Chip, Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import {
  difficultyMapper,
  useQuestions,
} from "../../contexts/QuestionsContext";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CodeIcon from "@mui/icons-material/Code";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const QuestionDetail = () => {
  const { id } = useParams();

  const { getQuestionById } = useQuestions();

  const question = id ? getQuestionById(id) : undefined;

  const renderDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case "1":
        return (
          <Chip
            icon={<WhatshotIcon />}
            label={`Difficulty: ${difficultyMapper[difficulty]}`}
            sx={{
              width: "fit-content",
              borderRadius: 2,
              backgroundColor: "#E5F0E9",
              color: "#287750",
              "& .MuiChip-icon": {
                color: "#287750",
              },
            }}
          />
        );
      case "2":
        return (
          <Chip
            icon={<WhatshotIcon />}
            label={`Difficulty: ${difficultyMapper[difficulty]}`}
            color="warning"
            sx={{
              width: "fit-content",
              borderRadius: 2,
              backgroundColor: "#FFF3E0",
              color: "#FF9800",
              "& .MuiChip-icon": {
                color: "#FF9800",
              },
            }}
          />
        );
      case "3":
        return (
          <Chip
            icon={<WhatshotIcon fontSize="small" />}
            label={`Difficulty: ${difficultyMapper[difficulty]}`}
            color="error"
            sx={{
              width: "fit-content",
              borderRadius: 2,
              backgroundColor: "#FFE3E3",
              color: "#B00020",
              "& .MuiChip-icon": {
                color: "#B00020",
              },
            }}
          />
        );
    }
  };

  if (!question) {
    return (
      <Box>
        <Typography variant="h4">Question not found</Typography>
      </Box>
    );
  }
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Box sx={{ width: "800px", border: "1px solid black", p: 4 }}>
        <Stack sx={{ borderBottom: "1px solid #e0e0e0", pb: 1 }} mb={3}>
          <Typography variant="h4" mb={4}>
            {question.title}
          </Typography>
          <Stack direction="row" alignItems="center" columnGap={2}>
            {renderDifficulty(question.difficulty)}
            <Chip
              icon={<CodeIcon />}
              label={question.type}
              sx={{
                width: "fit-content",
                borderRadius: 2,
                backgroundColor: "#F0F1F3",
                color: "#4A5058",
                "& .MuiChip-icon": {
                  color: "#4A5058",
                },
              }}
            />
            <Stack direction="row" alignItems="center" columnGap={1}>
              <ThumbUpIcon sx={{ color: "#4A5058" }} />
              <Typography variant="body2">{question.votes} votes</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{ borderBottom: "1px solid #e0e0e0", pb: 1 }} mb={2}>
          <Typography variant="h6" mb={1} color="#4A5058">
            Question Summary
          </Typography>
          <Typography variant="body1">{question.questionSummary}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h6" mb={0.5} color="#4A5058">
            Company Asked
          </Typography>
          <Typography variant="body1">{question.companyAsked}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default QuestionDetail;
