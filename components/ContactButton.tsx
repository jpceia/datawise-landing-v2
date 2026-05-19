"use client";

import React from 'react';
import { useContactModal } from '@/components/providers/ContactModalProvider';

interface ContactButtonProps {
  children?: React.ReactNode;
  className?: string;
  buttonText?: string;
  modalTitle?: string;
  modalSubtitle?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  children,
  className = '',
  buttonText = 'Marque uma análise gratuita',
  modalTitle,
  modalSubtitle,
}) => {
  const { openModal } = useContactModal();

  const handleClick = () => {
    openModal({ title: modalTitle, subtitle: modalSubtitle });
  };

  const buttonContent = children || (
    <>
      {buttonText}
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </>
  );

  const elementClasses = children
    ? className
    : `inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-lg bg-primary text-white hover:bg-primary-dark hover:shadow-primary/25 ${className}`;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={elementClasses}
    >
      {buttonContent}
    </button>
  );
};

export default ContactButton;
