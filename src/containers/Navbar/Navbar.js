import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { setCurrentLang } from '../../store/actions/Lang';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  switcher = (lang) => {
    this.props.setCurrentLang(lang === 'ar' ? 'en' : 'ar');
  }

  renderLangSwitcher = (langBtn, lang) => {
    console.log(lang);
    return (
      <div className="m-3">
        <Button variant="dark" className="mr-3" id="en" onClick={() => this.switcher(lang)}>{langBtn}</Button>
      </div>
    )
  }

  render() { 
    const { messages } = this.props.intl;
    const { lang } = this.props;
    console.log(lang);
    
    return ( 
      <Container>
        {this.renderLangSwitcher(messages.langBtn, lang)}
        <h1>{messages.home}</h1>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { lang: state.locale.lang }
}

const HeaderComponent  = injectIntl(Navbar);

export default connect(mapStateToProps, { setCurrentLang })(HeaderComponent );