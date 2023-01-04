import React, {memo} from 'react';
import Typography from '../../components/Typography';
import styles from './styles';

const NoContent = () => {
  return (
    <Typography.Title style={styles.empty} color="black-05" center>
      No content found
    </Typography.Title>
  );
};

export default memo(NoContent);
