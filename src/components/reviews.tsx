import { Card } from "primereact/card";
import { ReviewDTO } from "@/types/apiResponse";
import parse from "html-react-parser";

const Reviews = ({ reviews }: { reviews: ReviewDTO[] }) => {
  return (
    <div className="container">
      {reviews.map((review) => (
        <Card key={review.id}>{parse(review.text)}</Card>
      ))}
    </div>
  );
};

export default Reviews;
