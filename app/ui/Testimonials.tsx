import Image from "next/image";
import testimonials from "../utils/testiminial-data";

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-11">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="flex flex-col items-center border border-gray-200 bg-white p-6 rounded-lg flex flex-col">
      <blockquote className="text-center text-md mb-2 flex-grow">
        {testimonial.quote}
      </blockquote>
      <div className="flex mt-2 items-center">
        <Image
          src={testimonial.avatar}
          alt={`Avatar of ${testimonial.name}`}
          width={56}
          height={56}
          className="mr-4 rounded-full h-[56px] w-[56px]"
        />
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="font-semibold">{testimonial.title},</p>
          <p className="font-semibold">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
