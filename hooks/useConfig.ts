import { useContext } from "react";
import { ConfigContext } from "../pages/[[...route]]";

export default function useConfig() {
  const config = useContext(ConfigContext);
  return config;
}
