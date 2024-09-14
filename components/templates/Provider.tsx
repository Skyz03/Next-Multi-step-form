import { ReactNode } from "react";
import MultiFormProvider from "@context/MultiFormContext";

interface ProvidersProps {
  children: ReactNode
}

const Provider:React.FC<ProvidersProps> = ({ children }) => <MultiFormProvider>{children}</MultiFormProvider>;

export default Provider;