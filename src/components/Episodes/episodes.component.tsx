import * as S from "./episodes.styles";
import { Episode } from "./components/episode";

export const Episodes = () => {
  return (
    <S.EpisodesContainer>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Episode index={index} key={index} />
        ))}
    </S.EpisodesContainer>
  );
};
