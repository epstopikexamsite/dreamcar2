'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Send, Bot, User, Loader } from 'lucide-react';
import { askAI } from '@/ai/flows/ask-ai-flow';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'model';
  content: string;
};

interface AIChatProps {
  onClose: () => void;
}

export default function AIChat({ onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewportRef.current) {
        viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await askAI({ history: newMessages });
      setMessages((prev) => [...prev, { role: 'model', content: response }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages((prev) => [...prev, { role: 'model', content: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md">
      <Card className="flex flex-col h-[70vh] shadow-2xl rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between border-b p-4">
          <div className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-primary" />
            <CardTitle className="font-headline text-xl">Tư vấn viên AI</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex-grow p-0 overflow-hidden">
          <ScrollArea className="h-full" viewportRef={viewportRef}>
             <div className="p-4 space-y-4" ref={scrollAreaRef}>
                {messages.length === 0 && (
                    <div className="text-center text-muted-foreground p-8 flex flex-col items-center gap-4">
                        <Bot className="h-10 w-10"/>
                        <p>Chào bạn! Tôi có thể giúp gì cho bạn về việc chọn xe hôm nay? <br/> Hãy hỏi tôi về giá, thông số, hoặc so sánh các loại xe.</p>
                    </div>
                )}
                {messages.map((message, index) => (
                <div
                    key={index}
                    className={cn(
                    'flex items-start gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                >
                    {message.role === 'model' && <div className="p-2 bg-primary rounded-full text-primary-foreground"><Bot className="h-5 w-5 shrink-0" /></div>}
                    <div
                        className={cn(
                            'rounded-lg px-4 py-2 max-w-[80%]',
                            message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        )}
                    >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    {message.role === 'user' && <div className="p-2 bg-muted rounded-full"><User className="h-5 w-5 text-accent shrink-0" /></div>}
                </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                        <div className="p-2 bg-primary rounded-full text-primary-foreground"><Bot className="h-5 w-5 shrink-0" /></div>
                        <div className="rounded-lg px-4 py-2 bg-muted flex items-center">
                            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                        </div>
                    </div>
                )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hỏi tôi về bất cứ điều gì..."
              disabled={isLoading}
              autoComplete="off"
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="sr-only">Gửi</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
