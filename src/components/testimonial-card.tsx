import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, MessageSquare, MapPin, Calendar } from 'lucide-react';
import type { Testimonial } from '@/lib/testimonials-data';

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
);

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex flex-col p-6 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
      <CardContent className="p-0 pb-6 text-muted-foreground flex-grow">
        <MessageSquare className="w-8 h-8 text-primary/30 mb-4" />
        <p className="italic">"{testimonial.quote}"</p>
      </CardContent>
      <CardFooter className="p-0 mt-auto flex flex-col items-start gap-4 border-t pt-4">
        <div className="flex justify-between w-full items-center">
            <StarRating rating={testimonial.rating} />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{testimonial.date}</span>
            </div>
        </div>
        <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{testimonial.province}</span>
            </div>
        </div>
      </CardFooter>
    </Card>
  );
}
