'use client';

import { useState, useEffect } from 'react';

export default function InstagramEmbed({ url }: { url: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Extract the post ID from the URL
  const postId = url.split('/reel/')[1]?.split('/')[0] || url.split('/p/')[1]?.split('/')[0] || '';
  
  const embedUrl = `https://www.instagram.com/p/${postId}/embed/captioned`;

  // Handle iframe load events
  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError('No se pudo cargar el video de Instagram');
  };

  return (
    <div className="relative w-full" style={{ paddingBottom: '125%' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="animate-pulse text-gray-500">Cargando video...</div>
        </div>
      )}
      
      {error ? (
        <div className="text-center p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
          <p className="mt-2 text-sm">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ver en Instagram
            </a>
          </p>
        </div>
      ) : (
        <>
          <iframe
            src={embedUrl}
            title="Instagram video"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
            allowFullScreen
            scrolling="no"
            allow="encrypted-media"
            onLoad={handleLoad}
            onError={handleError}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
