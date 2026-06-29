"use client";

import { useEffect, useState } from "react";

/** Retorna `true` somente após a montagem no cliente (evita mismatch de hidratação). */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
