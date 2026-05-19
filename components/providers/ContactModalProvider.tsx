"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import ContactModal from "@/components/modals/ContactModal";

type ContactModalOverrides = {
  title?: string;
  subtitle?: string;
};

type ContactModalContextValue = {
  isOpen: boolean;
  enabled: boolean;
  openModal: (overrides?: ContactModalOverrides) => void;
  closeModal: () => void;
  setModalOpen: (open: boolean) => void;
  setEnabled: (enabled: boolean) => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

interface ContactModalProviderProps {
  children: ReactNode;
  defaultEnabled?: boolean;
}

export function ContactModalProvider({
  children,
  defaultEnabled = true,
}: ContactModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(defaultEnabled);
  const [overrides, setOverrides] = useState<ContactModalOverrides>({});

  const setModalOpen = useCallback(
    (open: boolean) => {
      setIsOpen(enabled ? open : false);
      if (!open) {
        setOverrides({});
      }
    },
    [enabled]
  );

  const openModal = useCallback(
    (next?: ContactModalOverrides) => {
      if (enabled) {
        setOverrides(next ?? {});
        setIsOpen(true);
      }
    },
    [enabled]
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setOverrides({});
  }, []);

  const handleSetEnabled = useCallback((nextEnabled: boolean) => {
    setEnabled(nextEnabled);
    if (!nextEnabled) {
      setIsOpen(false);
      setOverrides({});
    }
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      enabled,
      openModal,
      closeModal,
      setModalOpen,
      setEnabled: handleSetEnabled,
    }),
    [enabled, handleSetEnabled, isOpen, openModal, closeModal, setModalOpen]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal
        open={isOpen}
        onOpenChange={setModalOpen}
        enabled={enabled}
        title={overrides.title}
        subtitle={overrides.subtitle}
      />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error(
      "useContactModal must be used within ContactModalProvider"
    );
  }

  return context;
}
