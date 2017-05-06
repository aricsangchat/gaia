import React from 'react';
import PropTypes from 'prop-types';

const JumbotronSubCategory = (props) => {

  const jumbotronStyle = {
    backgroundImage: 'url(' + props.term.termImages.hero.hero_1440x300 + ')'
  }

  return (
    <div className='jumbotron-subcategory' style={ jumbotronStyle }>
      <h1 className='jumbotron-subcategory__title'>{ props.term.name }</h1>
      <p className='jumbotron-subcategory__description'>{ props.term.body }</p>
    </div>
  );
};

JumbotronSubCategory.propTypes = {

};

export default JumbotronSubCategory;
