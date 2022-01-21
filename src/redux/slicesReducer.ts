import { createSlice } from "@reduxjs/toolkit";

const initialSlides = [
  { id: 0, isValid: false, question: "Who?", answer: "" },
  { id: 1, isValid: false, question: "What?", answer: "" },
  { id: 2, isValid: false, question: "When?", answer: "" },
  { id: 3, isValid: false, question: "Where?", answer: "" },
];

export const slicesReducer = createSlice({
  name: "questions",
  initialState: {
    slides: initialSlides,
  },
  reducers: {
    setAnswer: (state, action) => {
      const currentSlide = state.slides.find(
        (item) => item.id === action.payload.id
      );

      if (!currentSlide) return;

      currentSlide.answer = action.payload.answer;

      if (!currentSlide.answer.trim()) {
        currentSlide.isValid = false;
        return;
      }

      currentSlide.isValid = true;
    },
    reset: (state) => {
      state.slides = initialSlides;
    },
  },
});

export const { setAnswer, reset } = slicesReducer.actions;

export default slicesReducer.reducer;
