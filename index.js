/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-2
 * @author Pang <pang@maichong.it>
 */

import wx from 'labrador';

const { string, func, number } = wx.PropTypes;

export default class GradeField extends wx.Component {
  propTypes = {
    grade: number,
    size: number,
    title: string,
    onChange: func
  };

  props = {
    grade: 0,
    size: 2.5,
    title: ''
  };
  data = {
    grade: 0,
    txtWrap: '',
    imgStyle: '',
    imgWrap: '',
    title: ''
  };

  children = {};

  onLoad() {

  }

  onReady() {

  }

  onShow() {

  }

  onHide() {

  }

  onUnload() {

  }

  onUpdate(props) {
    let size = props.size;
    let data = {
      txtWrap: '',
      imgStyle: '',
      imgWrap: '',
      grade: 0,
      title: ''
    };
    data.txtWrap = `line-height:${size}rem;`;
    data.imgWrap = `height:${size}rem;`;
    data.imgStyle = `height:${(size * 3) / 5}rem;width:${(size * 3) / 5}rem;margin-top:${size / 5}rem;`;
    data.grade = props.grade;
    data.title = props.title;
    this.setData(data);
  }

  async handleSelect(e) {
    let grade = e.target.dataset.grade;
    this.props.onChange(grade);
  }
}
