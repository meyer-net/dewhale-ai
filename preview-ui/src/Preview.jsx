import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import React from 'react';

const ExchangeSite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white p-4 shadow-md">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Currency Converter</NavigationMenuLink>
                <NavigationMenuLink href="#">Exchange Rates</NavigationMenuLink>
                <NavigationMenuLink href="#">Money Transfer</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Historical Rates</NavigationMenuLink>
                <NavigationMenuLink href="#">Expense Calculator</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Blog</NavigationMenuLink>
                <NavigationMenuLink href="#">Currency Data API</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <section aria-labelledby="currency-converter-heading">
          <h2 id="currency-converter-heading" className="text-xl font-bold mb-4">Currency Converter</h2>
          <Card>
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <Input id="amount" name="amount" type="number" placeholder="Enter amount" className="mt-1 block w-full" />
              </div>
              <div className="flex-1">
                <label htmlFor="from-currency" className="block text-sm font-medium text-gray-700">From</label>
                <Select id="from-currency">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label htmlFor="to-currency" className="block text-sm font-medium text-gray-700">To</label>
                <Select id="to-currency">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button variant="solid" className="w-full">Convert</Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section aria-labelledby="exchange-rates-heading" className="mt-8">
          <h2 id="exchange-rates-heading" className="text-xl font-bold mb-4">Exchange Rates</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Currency</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>USD/EUR</TableCell>
                <TableCell>0.85</TableCell>
                <TableCell>↗</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>USD/GBP</TableCell>
                <TableCell>0.75</TableCell>
                <TableCell>↘</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>EUR/GBP</TableCell>
                <TableCell>0.88</TableCell>
                <TableCell>→</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </main>
      
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm text-gray-500">© 2021 ExchangeSite, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExchangeSite;