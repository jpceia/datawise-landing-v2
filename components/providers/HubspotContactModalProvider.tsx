"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import HubspotContactModal from "@/components/modals/HubspotContactModal";

type HubspotContactModalContextValue = {
  isOpen: boolean;
  enabled: boolean;
  openModal: () => void;
  closeModal: () => void;
  setModalOpen: (open: boolean) => void;
  setEnabled: (enabled: boolean) => void;
};

const HubspotContactModalContext = createContext<HubspotContactModalContextValue | null>(null);

interface HubspotContactModalProviderProps {
  children: ReactNode;
  defaultEnabled?: boolean;
}

export function HubspotContactModalProvider({
  children,
  defaultEnabled = true,
}: HubspotContactModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(defaultEnabled);

  const setModalOpen = useCallback(
    (open: boolean) => {
      setIsOpen(enabled ? open : false);
    },
    [enabled]
  );

  const openModal = useCallback(() => {
    if (enabled) {
      setIsOpen(true);
    }
  }, [enabled]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSetEnabled = useCallback((nextEnabled: boolean) => {
    setEnabled(nextEnabled);
    if (!nextEnabled) {
      setIsOpen(false);
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
    <HubspotContactModalContext.Provider value={value}>
      {children}
      <HubspotContactModal
        open={isOpen}
        onOpenChange={setModalOpen}
        enabled={enabled}
      />
    </HubspotContactModalContext.Provider>
  );
}

export function useHubspotContactModal() {
  const context = useContext(HubspotContactModalContext);

  if (!context) {
    throw new Error(
      "useHubspotContactModal must be used within HubspotContactModalProvider"
    );
  }

  return context;
}
