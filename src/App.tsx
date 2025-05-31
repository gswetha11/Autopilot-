import React from 'react';
import { WalletSelector } from '@aptos-labs/wallet-adapter-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AutoPilot DCA+
          </h1>
          <WalletSelector />
        </header>
        
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-500">
              <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
              <p className="text-gray-400">Connect your wallet to view portfolio details</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-blue-500">
              <h2 className="text-xl font-semibold mb-4">Signal Dashboard</h2>
              <p className="text-gray-400">AI predictions and market signals will appear here</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;