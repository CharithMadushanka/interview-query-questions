import { Routes, Route } from "react-router";

import Navbar from "components/Navbar/Navbar";

import Questions from "pages/questions/Questions";
import QuestionDetail from "pages/questionDetail/QuestionDetail";
import { Stack } from "@mui/material";

const AppRoutes = () => {
  return (
    <Stack sx={{ height: "100%" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
      </Routes>
    </Stack>
  );
};

export default AppRoutes;
