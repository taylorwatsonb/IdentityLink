import React from 'react';
import { Shield, User, Key } from 'lucide-react';
import type { Identity } from '../types/identity';

interface IdentityCardProps {
  identity: Identity;
}

export function IdentityCard({ identity }: IdentityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
          {identity.profile.avatar ? (
            <img
              src={identity.profile.avatar}
              alt={identity.profile.name}
              className="w-14 h-14 rounded-full"
            />
          ) : (
            <User className="w-8 h-8 text-indigo-600" />
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            {identity.profile.name || 'Anonymous User'}
          </h2>
          <p className="text-sm text-gray-500 break-all">{identity.did}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm">
          <Key className="w-4 h-4 text-indigo-600" />
          <span className="text-gray-600">Public Key:</span>
          <span className="text-gray-900 break-all">{identity.publicKey.substring(0, 20)}...</span>
        </div>

        <div className="border-t pt-4">
          <h3 className="flex items-center space-x-2 font-medium mb-3">
            <Shield className="w-4 h-4 text-indigo-600" />
            <span>Verified Credentials</span>
          </h3>
          <div className="space-y-2">
            {identity.credentials.map((credential) => (
              <div
                key={credential.id}
                className="bg-gray-50 p-3 rounded-md text-sm"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{credential.type}</span>
                  <span className="text-gray-500 text-xs">
                    {new Date(credential.issuanceDate).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600 text-xs mt-1">
                  Issued by: {credential.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}