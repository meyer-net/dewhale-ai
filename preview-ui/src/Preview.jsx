import { Home, RefreshCw, TrendingUp, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ResponsiveLine } from '@nivo/line';
const ExchangeRateApp = () => {
  const exchangeRateData = [
    { x: "2021-01-01", y: 0.85 },
    { x: "2021-02-01", y: 0.83 },
    { x: "2021-03-01", y: 0.82 },
    { x: "2021-04-01", y: 0.84 },
    { x: "2021-05-01", y: 0.85 },
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white">
      <header className="p-4 shadow-md bg-opacity-20 backdrop-filter backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">ExchangeRate</h1>
          <div className="flex items-center space-x-4">
            <Home className="w-6 h-6" />
            <Button variant="outline" className="text-white border-white">Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Currency Converter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="amount" className="block mb-2 text-sm font-medium">Amount</label>
                  <Input id="amount" type="number" defaultValue="1" className="text-black" />
                </div>
                <div>
                  <label htmlFor="base-currency" className="block mb-2 text-sm font-medium">From</label>
                  <Select id="base-currency" defaultValue="USD" className="text-black">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="target-currency" className="block mb-2 text-sm font-medium">To</label>
                  <Select id="target-currency" defaultValue="EUR" className="text-black">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="USD">USD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end mb-4">
                  <Button className="w-full">
                    Convert
                  </Button>
                </div>
              </div>
              <Alert className="mt-4">
                <RefreshCw className="h-6 w-6" />
                <AlertTitle>1 USD =</AlertTitle>
                <AlertDescription>0.84 EUR</AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between items-center">
                <p className="text-sm">Updated 1 min ago</p>
                <Button variant="outline" className="text-white border-white">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Historical Rates
                </Button>
              </div>
            </CardFooter>
          </Card>
          <div className="mt-8">
            <AspectRatio ratio={16 / 9} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-md">
              <div className="w-full h-full">
                <ResponsiveLine
                  data={[{ id: "exchange-rate", data: exchangeRateData }]}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: "point" }}
                  yScale={{ type: "linear", min: "auto", max: "auto" }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Date',
                    legendOffset: 36,
                    legendPosition: 'middle'
                  }}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Rate',
                    legendOffset: -40,
                    legendPosition: 'middle'
                  }}
                  colors={{ scheme: 'nivo' }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  legends={[
                    {
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: 'left-to-right',
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: 'circle',
                      symbolBorderColor: 'rgba(0, 0, 0, .5)',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                          }
                        }
                      ]
                    }
                  ]}
                />
              </div>
            </AspectRatio>
          </div>
        </div>
      </main>
      <footer className="p-4 bg-opacity-20 backdrop-filter backdrop-blur-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p>© 2021 ExchangeRate, Inc.</p>
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6" />
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExchangeRateApp;