import './top.scss';
import Header from '../../components/block/Header';
import CourseList from '../../components/block/CourseList';
import Grid from '@material-ui/core/Grid'; 


function Top() {
  return (
    <div>
      <Header/>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} className="card">
          <CourseList lang="html" title="HTML && CSS" img="html" body="webページの見た目を作る言語" lesson="全7レッスン + 3記事" />
        </Grid>
        <Grid item xs={12} md={6} lg={4} className="card">
          <CourseList lang="js" title="JavaScript" img="js" body="多様な可能性を秘めたフロントエンド言語" lesson="全7レッスン" />
        </Grid>
        {/* <Grid item xs={12} md={6} lg={4} className="card">
          <CourseList lang="php" title="PHP" img="php" body="Web開発に適したサーバーサイド言語" lesson="全5レッスン" />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Top;