import useRemoteConfig from "../../hooks/useRemoteConfig.hook";
import * as S from "./home.styles";

export const Home = () => {
  const { configValue: welcomeMessage, loading } = useRemoteConfig("message");
  return (
    <S.HomeContainer>
      {loading}
      {welcomeMessage}
    </S.HomeContainer>
  );
};
