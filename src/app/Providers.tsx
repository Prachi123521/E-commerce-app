// app/redux/Providers.tsx (or app/providers/Providers.tsx or components/Providers.tsx)
"use client";  // Ensures this is a client component

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
