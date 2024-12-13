import React, { useState } from 'react';
import { IdentityCard } from './components/IdentityCard';
import { CreateIdentity } from './components/CreateIdentity';
import { generateDID, generateKeyPair } from './utils/did';
import type { Identity } from './types/identity';
import { KeyRound } from 'lucide-react';

function App() {
  const [identities, setIdentities] = useState<Identity[]>([]);

  const handleCreateIdentity = (name: string, bio: string) => {
    const { publicKey } = generateKeyPair();
    const newIdentity: Identity = {
      did: generateDID(),
      publicKey,
      credentials: [],
      profile: {
        name,
        bio,
        avatar: `https://source.unsplash.com/random/200x200?face&${Date.now()}`,
      },
    };
    setIdentities([...identities, newIdentity]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <KeyRound className="w-8 h-8 text-indigo-600" />
            Decentralized Identity Platform
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <CreateIdentity onCreateIdentity={handleCreateIdentity} />
            </div>
            
            {identities.map((identity) => (
              <div key={identity.did} className="col-span-1">
                <IdentityCard identity={identity} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;