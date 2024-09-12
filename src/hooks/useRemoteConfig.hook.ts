import { useEffect, useState } from "react";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { remoteConfig } from "../config/firebaseConfig";

type RemoteConfigState = {
  configValue: string | null;
  loading: boolean;
};

const useRemoteConfig = (key: string): RemoteConfigState => {
  const [configValue, setConfigValue] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        await fetchAndActivate(remoteConfig);
        const value = getValue(remoteConfig, key).asString();
        console.log(value)
        setConfigValue(value);
      } catch (error) {
        console.error("Error obteniendo Remote Config:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, [key]);

  return { configValue, loading };
};

export default useRemoteConfig;
