import './detail.scss';
import Header from '../../components/block/Header';
import DetailList from '../../components/block/DetailList';
import Grid from '@material-ui/core/Grid'; 
import Box from '@material-ui/core/Box';
import Text from '../../components/setting/detail/Text';

const Detail = (props) => {
  const text = Text(props.match.params.course);
  let details = [];

  for (let i in text) {
    details.push(
      <Grid item xs={8}>
        <DetailList
        lang={text[i].lang}
        num={text[i].num}
        title={text[i].title}
        desc={text[i].desc} />
      </Grid>
    );
  }
  return (
    <div>
      <Header/>
      <Box mt={3}>
        <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center">
          {details}
        </Grid>
      </Box>
    </div>
  );
}

export default Detail;