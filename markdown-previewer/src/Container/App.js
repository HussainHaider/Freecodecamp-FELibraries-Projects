import React from 'react';
import Preview from "../Component/Preview/Preview";
import Toolbar from "../Component/Toolbar/Toolbar";
import Editor from "../Component/Editor/Editor";
import { placeholder } from '../Constant/utility'
import classes from './App.css';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =  {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
        <div className={classes.app}>
          <div className={classes.editorWrap}>
            <Toolbar
                text="Editor"/>
            <Editor markdown={this.state.markdown}
                    onChange={this.handleChange} />
          </div>

          <div className={classes.previewWrap}>
            <Toolbar
                text="Previewer"/>
            <Preview  markdown={this.state.markdown}/>
          </div>
        </div>
    )
  }
};

export default App;
