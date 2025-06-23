'use client';

import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { getRecommendationsAction } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from './ui/skeleton';

export default function AIRecommender() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const response = await getRecommendationsAction(preferences);

    if (response.success && response.data) {
      setResult(response.data.recommendations);
    } else {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: response.error || "Đã xảy ra lỗi không xác định.",
      });
    }
    setLoading(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setResult(null);
      setPreferences('');
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Wand2 className="mr-2 h-4 w-4" />
          AI Recommender
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="font-headline">Gợi ý cá nhân hóa</DialogTitle>
            <DialogDescription>
              Mô tả chiếc xe hoàn hảo của bạn và AI của chúng tôi sẽ tìm những chiếc phù hợp nhất.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              id="preferences"
              placeholder="VD: 'Tôi cần một chiếc SUV cho gia đình, tiết kiệm xăng và có các tính năng an toàn tiên tiến. Ngân sách của tôi khoảng 700 triệu đồng.'"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              rows={5}
              disabled={loading}
            />
          </div>
          {loading && (
            <div className="space-y-2 p-4 bg-muted/50 rounded-md">
              <p className="text-sm font-semibold text-primary">AI đang tìm kiếm chiếc xe phù hợp nhất cho bạn...</p>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          )}
          {result && (
            <div className="p-4 bg-muted/50 rounded-md max-h-48 overflow-y-auto">
              <h4 className="font-semibold mb-2">Gợi ý của chúng tôi:</h4>
              <p className="text-sm text-foreground whitespace-pre-wrap">{result}</p>
            </div>
          )}
          <DialogFooter className="mt-4">
            <Button type="submit" disabled={loading || !preferences.trim()}>
              {loading ? 'Đang phân tích...' : 'Nhận gợi ý'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
