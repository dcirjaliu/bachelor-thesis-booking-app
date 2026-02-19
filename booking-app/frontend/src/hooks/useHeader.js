import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export function useHeader(content, className = "") {
  const context = useOutletContext();

  if (!context || !context.setHeaderConfig) {
    return;
  }

  const { setHeaderConfig } = context;

  useEffect(() => {
    setHeaderConfig({ content, className });

    return () => setHeaderConfig({ content: null, className: "" });
  }, [content, className, setHeaderConfig]);
}
