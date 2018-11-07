import React, { Component } from 'react';
import SimpleForm from './SimpleForm';
import { Image, Divider } from 'semantic-ui-react';
import user_profile_pic from '../../public/user_profile_pic.png'

const textStyle = {
  textAlign: 'center',
  marginBottom: '10px'
};

const imgStyle = {
  margin: '0 auto'
}

const blockStyle = {
  margin: '30px 0px'
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.behanceWidget = this.behanceWidget.bind(this);
  }

  behanceWidget() {
    const collections = this.props.project.collections;
    if (collections) {
      const render = collections.map((element, index) => {
        if (element.project_covers) {
          return <div key={index + element.creator_id} style={blockStyle}>
            <div style={textStyle}>
              {element.owners[0].images[100] ?
                <Image src={element.owners[0].images[100]} className='ui tiny circular center image' style={imgStyle} />
                : <Image src={user_profile_pic} className='ui tiny circular center image' style={imgStyle} />}
              {element.owners[0].username}
            </div>
            <div className="ui stackable four column grid">
              {element.project_covers.map((c, index) => {
                return <Image key={index} src={c.url} alt="" className="column" />
              })}
            </div>
            <Divider />
          </div>
        } else {
          return false;
        }
      }
      );
      //rendering
      return (
        <div>
          <br />
          <h3>Results found: {collections.length}</h3>
          <ul>
            {render}
          </ul>
        </div>
      );
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <SimpleForm />
        {this.behanceWidget()}
      </div>
    );
  }
}

export default Home;

