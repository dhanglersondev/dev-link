import type { ReactNode } from "react";

interface SocialProps {
   url: string;
   children: ReactNode;
}

export function Social({ url, children }: SocialProps) {
   return (
      <div className="flex justify-center gap-3 my-4">
         <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            {children}
         </a>
      </div>
   );
}