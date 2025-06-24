import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MessageSquare } from 'lucide-react';
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
        <StarRating rating={testimonial.rating} />
        <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                <AvatarFallback>{testimonial.name.split(' ').pop()?.[0]}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
        </div>
      </CardFooter>
    </Card>
  );
}
