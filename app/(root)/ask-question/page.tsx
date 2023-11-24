import Questions from "@/components/forms/Question";
const Question = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <Questions />
      </div>
    </div>
  );
};

export default Question;
