import './study.scss';
import Header from '../../components/block/Header';
import Editor from '../../components/block/Editor';
import StudyInfo from '../../components/setting/study/StudyInfo';

function Study(props) {
  let studyInfo = StudyInfo(props.match.params.course, props.match.params.id);

  return (
    <div>
      <Header/>
      <Editor studyInfo={studyInfo} />
    </div>
  );
}

export default Study;