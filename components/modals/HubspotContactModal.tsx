"use client";

import Script from "next/script";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface HubspotContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  enabled?: boolean;
}

const HUBSPOT_FORM_SCRIPT_URL = process.env.NEXT_PUBLIC_HUBSPOT_FORM_SCRIPT_URL;
const HUBSPOT_REGION = process.env.NEXT_PUBLIC_HUBSPOT_REGION;
const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

export default function HubspotContactModal({
  open,
  onOpenChange,
  enabled = true,
}: HubspotContactModalProps) {
  const hasHubspotConfig =
    Boolean(HUBSPOT_FORM_SCRIPT_URL) &&
    Boolean(HUBSPOT_REGION) &&
    Boolean(HUBSPOT_FORM_ID) &&
    Boolean(HUBSPOT_PORTAL_ID);

  if (!enabled || !hasHubspotConfig) {
    return null;
  }

  return (
    <>
      {open && (
        <Script
          src={HUBSPOT_FORM_SCRIPT_URL as string}
          strategy="lazyOnload"
        />
      )}

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="max-w-3xl border-none bg-white p-0 sm:rounded-2xl"
        >
          <DialogTitle className="sr-only">Contacte-nos</DialogTitle>
          <div className="relative">
            <div className="max-h-[90vh] overflow-y-auto px-3 py-0 sm:px-4 sm:py-4">
              <div
                className="hs-form-frame"
                data-region={HUBSPOT_REGION}
                data-form-id={HUBSPOT_FORM_ID}
                data-portal-id={HUBSPOT_PORTAL_ID}
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-2 left-2 right-2 h-[60px] bg-white"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
