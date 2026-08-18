import { useEffect } from "react";

export function SEO({ title, description, keywords }) {
  useEffect(() => {
    const defaultTitle = "TS Unique Laundry Services | Subscription Laundry Management";
    const defaultDescription = "Professional subscription laundry management service in Katlehong & surrounding areas. Wash & Fold, Dry Cleaning, Commercial Laundry & Express turnaround.";
    
    document.title = title ? `${title} | TS Unique Laundry` : defaultTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || defaultDescription;

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || "laundry subscription, Katlehong laundry, wash and fold, dry cleaning, commercial laundry, TS Unique Laundry";
  }, [title, description, keywords]);

  return null;
}
