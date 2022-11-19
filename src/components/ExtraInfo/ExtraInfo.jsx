import PropTypes from 'prop-types';
import { gettingGenresListForCard } from 'services/genres';
import { setReleaseDate, setReleaseVote } from 'services/round';
import { Box } from 'components/Box/Box';
import {
  ExtraInfoContainer,
  ExtraInfoItem,
  ExtraInfoPar,
  ExtraInfoValue,
  TapIcon,
  TapText,
} from './ExtraInfo.styled';

const ExtraInfo = ({ movie: { vote_average, release_date, genre_ids } }) => {
  return (
    <ExtraInfoContainer>
      <Box as="ul" display="flex" flexDirection="column" gridGap={5} mb={6}>
        <ExtraInfoItem>
          <ExtraInfoPar>Vote:</ExtraInfoPar>
          <ExtraInfoValue>
            {setReleaseVote(vote_average) || `no vote`};
          </ExtraInfoValue>
        </ExtraInfoItem>
        <ExtraInfoItem>
          <ExtraInfoPar>Date of release:</ExtraInfoPar>
          <ExtraInfoValue>
            {setReleaseDate(release_date) || `no date`};
          </ExtraInfoValue>
        </ExtraInfoItem>
        <ExtraInfoItem>
          <ExtraInfoPar>Genre:</ExtraInfoPar>
          <ExtraInfoValue>
            {gettingGenresListForCard(genre_ids) || 'no genre'};
          </ExtraInfoValue>
        </ExtraInfoItem>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gridGap={4}
        alignItems="center"
      >
        <TapIcon size={50} />
        <TapText>Tap to learn more</TapText>
      </Box>
    </ExtraInfoContainer>
  );
};

export default ExtraInfo;

ExtraInfo.propTypes = {
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
};
