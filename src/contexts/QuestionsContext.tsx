import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
  useMemo,
} from "react";
import Papa from "papaparse";

interface QuestionCsvRow {
  qid: string;
  title: string;
  difficulty: string;
  type: string;
  "sum(cu.vote)": string;
  question_summary: string;
  company_asked: string;
}

export interface Question {
  qid: string;
  title: string;
  difficulty: string;
  type: string;
  votes: string;
  questionSummary: string;
  companyAsked: string;
}

interface QuestionsContextType {
  paginatedQuestions: Question[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  difficultyOptions: string[];
  typeOptions: string[];
  companyOptions: string[];
  filterQuestions: (
    search: string,
    difficulty: string,
    type: string,
    company: string
  ) => void;
  resetFilters: () => void;
  sortBy: "difficulty" | "votes";
  sortOrder: "asc" | "desc";
  setSortBy: (sortBy: "difficulty" | "votes") => void;
  setSortOrder: (sortOrder: "asc" | "desc") => void;
  getQuestionById: (id: string) => Question | undefined;
}

const PAGE_SIZE = 10;

const QuestionsContext = createContext<QuestionsContextType | undefined>(
  undefined
);

export const QuestionsProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [paginatedQuestions, setPaginatedQuestions] = useState<Question[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"difficulty" | "votes">("difficulty");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const getQuestionById = (id: string) => {
    return questions.find((q) => q.qid === id);
  };

  const totalPages = filteredQuestions.length
    ? Math.ceil(filteredQuestions.length / PAGE_SIZE)
    : 0;

  const getSortedQuestions = (
    rows: Question[],
    sortBy: "difficulty" | "votes",
    sortOrder: "asc" | "desc"
  ) => {
    return rows.sort((a, b) => {
      return sortOrder === "asc"
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy]);
    });
  };

  useEffect(() => {
    setPaginatedQuestions(
      getSortedQuestions(filteredQuestions, sortBy, sortOrder).slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
      )
    );
  }, [currentPage, filteredQuestions, sortBy, sortOrder]);

  useEffect(() => {
    fetch("/questions.csv")
      .then((response) => response.text())
      .then((text) => {
        const parsed: { data: QuestionCsvRow[] } = Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
        });

        const mapped: Question[] = parsed.data.map((row) => ({
          qid: row.qid,
          title: row.title,
          difficulty: row.difficulty,
          type: row.type,
          votes: row["sum(cu.vote)"],
          questionSummary: row.question_summary,
          companyAsked: row.company_asked,
        }));

        setQuestions(mapped);
        setFilteredQuestions(mapped);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const difficultyOptions = useMemo(() => {
    return questions
      .map((q) => q.difficulty)
      .filter((difficulty, index, self) => self.indexOf(difficulty) === index);
  }, [questions]);

  const typeOptions = useMemo(() => {
    return questions
      .map((q) => q.type)
      .filter((type, index, self) => self.indexOf(type) === index);
  }, [questions]);

  const companyOptions = useMemo(() => {
    return questions
      .map((q) => q.companyAsked)
      .filter((company, index, self) => self.indexOf(company) === index);
  }, [questions]);

  const filterQuestions = (
    search: string,
    difficulty: string,
    type: string,
    company: string
  ) => {
    setFilteredQuestions(
      questions.filter((q) => {
        const matchSearch = search
          ? q.title.toLowerCase().includes(search.toLowerCase())
          : true;
        const matchDifficulty = difficulty ? q.difficulty === difficulty : true;
        const matchType = type ? q.type === type : true;
        const matchCompany = company ? q.companyAsked === company : true;

        return matchSearch && matchDifficulty && matchType && matchCompany;
      })
    );
  };

  const resetFilters = () => {
    setFilteredQuestions(questions);
  };

  return (
    <QuestionsContext.Provider
      value={{
        paginatedQuestions,
        totalPages,
        currentPage,
        setCurrentPage,
        difficultyOptions,
        typeOptions,
        companyOptions,
        filterQuestions,
        resetFilters,
        sortBy,
        sortOrder,
        setSortBy,
        setSortOrder,
        getQuestionById,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error("useQuestions must be used within a QuestionsProvider");
  }
  return context;
};
