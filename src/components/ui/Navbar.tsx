import React from 'react';
import { cn } from '@/lib/utils';

type NavbarProps = {
  position?: 'static' | 'sticky' | 'fixed';
  className?: string;
  onMenuOpenChange?: (isOpen: boolean) => void;
  children: React.ReactNode;
};

export const Navbar = ({
  position = 'static',
  className,
  children
}: NavbarProps) => {
  return <nav className={cn('w-full bg-black backdrop-blur-md z-50 border-b border-white/5', position === 'sticky' && 'sticky top-0', position === 'fixed' && 'fixed top-0', className)}>
      {children}
    </nav>;
};

