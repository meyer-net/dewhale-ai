import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Home, MessageCircle, ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
export default function PaymentSolutionsPage() {
  return (
    <div className="flex flex-row items-center justify-between min-h-screen bg-blue-100 p-8">
      <Card className="flex-1 max-w-md mx-4 bg-white rounded-lg shadow-md">
        <CardHeader className="flex items-center space-x-4 p-4 border-b">
          <Home className="w-6 h-6 text-blue-600" />
          <CardTitle>POS Collection</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <CardDescription>
            Accept all kinds of Bank Cards, Credit Cards and WeChat, Alipay, etc.
          </CardDescription>
          <AspectRatio ratio={1} className="my-4">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="POS Device"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </CardContent>
      </Card>

      <div className="flex-1 max-w-md mx-4 bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-4">
          <MessageCircle className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold mb-4">Transfer Payment</h2>
        <p className="mb-6">
          More payment methods please contact US!
        </p>
        <Button variant="solid" className="bg-blue-600 text-white">
          Contact US <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}