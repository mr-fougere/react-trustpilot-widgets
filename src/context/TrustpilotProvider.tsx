import { PropsWithChildren, RefObject, useEffect, useState } from "react";
import { TrustPilotContext } from "./TrustpilotContext";
import { TRUSTPILOT_WIDGET_SCRIPT_URL } from "../interface/trust-box.const";

interface TrustPilotProviderProps extends PropsWithChildren {
  businessUnitId: string;
  widgetUrl: string;
}

export const TrustPilotProvider: React.FC<TrustPilotProviderProps> = ({
  businessUnitId,
  widgetUrl,
  children,
}) => {
  const [isPending, setPending] = useState(true);
  const [isError, setError] = useState(false);

  const loadTrustpilotWidget = (ref: RefObject<HTMLElement>) => {
    if (window.Trustpilot && ref.current) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  };

  useEffect(() => {
    const existingScript = Array.from(document.scripts).find(
      (script) => script.src === TRUSTPILOT_WIDGET_SCRIPT_URL
    );

    if (existingScript) {
      if (window.Trustpilot) {
        setPending(false);
        setError(false);
      } else {
        existingScript.onload = () => {
          setPending(false);
          setError(false);
        };
        existingScript.onerror = () => {
          setPending(false);
          setError(true);
        };
      }
      return;
    }

    const script = Object.assign(document.createElement("script"), {
      type: "text/javascript",
      src: TRUSTPILOT_WIDGET_SCRIPT_URL,
      async: true,
      onload: () => {
        setPending(false);
        setError(false);
      },
      onerror: () => {
        setPending(false);
        setError(true);
      },
    });

    document.body.appendChild(script);

    return () => {
      if (!existingScript) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <TrustPilotContext.Provider
      value={{
        businessUnitId,
        widgetUrl,
        isPending,
        isError,
        loadTrustpilotWidget,
      }}>
      {children}
    </TrustPilotContext.Provider>
  );
};
