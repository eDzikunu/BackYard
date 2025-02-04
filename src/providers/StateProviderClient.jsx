"use client"; // Ensure this runs only on the client

import { StateProvider } from "@/providers/StateProvider"; // Import the client-side provider
import reducer, { initialState } from "@/context/reducer"; // Import reducer and initial state

export default function StateProviderClient({ children }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      {children}
    </StateProvider>
  );
}
