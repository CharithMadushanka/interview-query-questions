import { Chip } from "@mui/material";
import { difficultyMapper } from "contexts/QuestionsContext";
import WhatshotIcon from "@mui/icons-material/Whatshot";

interface DifficultyChipProps {
  difficulty: string;
}

const DifficultyChip = ({ difficulty }: DifficultyChipProps) => {
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

export default DifficultyChip;
