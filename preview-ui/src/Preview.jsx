import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function ExchangeRateSite() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Personal</a>
            <a href="#" className="hover:underline">Business</a>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:underline">Send Money</a>
            <a href="#" className="hover:underline">Converter</a>
            <a href="#" className="hover:underline">Currency API</a>
            <a href="#" className="hover:underline">Tools</a>
            <a href="#" className="hover:underline">Resources</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Sign In</a>
            <a href="#" className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded">Register</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 bg-blue-800 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Trusted Global Currency Converter & Money Transfers</h1>
          <p className="mb-8">Best source for currency conversion, sending money online and tracking exchange rates</p>
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">Amount</label>
                <Input id="amount" defaultValue="1.00" />
              </div>
              <div>
                <label htmlFor="from-currency" className="block text-sm font-medium mb-1">From</label>
                <Select>
                  <SelectTrigger id="from-currency" className="w-full">
                    <SelectValue placeholder="USD - US Dollar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD - US Dollar</SelectItem>
                    <SelectItem value="EUR">EUR - Euro</SelectItem>
                    {/* Add more currencies as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="to-currency" className="block text-sm font-medium mb-1">To</label>
                <Select>
                  <SelectTrigger id="to-currency" className="w-full">
                    <SelectValue placeholder="EUR - Euro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD - US Dollar</SelectItem>
                    <SelectItem value="EUR">EUR - Euro</SelectItem>
                    {/* Add more currencies as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">Convert</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-800 p-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">How to transfer money in 3 easy steps</h2>
          {/* Add steps and additional footer content here */}
        </div>
      </footer>
    </div>
  );
}